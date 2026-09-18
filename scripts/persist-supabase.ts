import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import dns from "node:dns";
import pg from "pg";
import matter from "gray-matter";
import { posts } from "../lib/blog";
import { glossary } from "../components/Glossary";
import { nav } from "../lib/navigation";

const root = process.cwd();

function loadEnv() {
  const file = path.join(root, ".env.local");
  if (!fs.existsSync(file)) throw new Error("Missing .env.local");
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 0) continue;
    process.env[trimmed.slice(0, eq)] = trimmed.slice(eq + 1);
  }
}

function checksum(value: string | Buffer) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function walk(dir: string, files: string[] = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const next = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(next, files);
    else files.push(next);
  }
  return files;
}

function rel(file: string) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function fileRow(file: string, kind: string) {
  const buf = fs.readFileSync(file);
  return {
    path: rel(file),
    kind,
    body: buf.toString("base64"),
    byte_length: buf.length,
    checksum: checksum(buf),
  };
}

const schema = `
create extension if not exists pgcrypto;

create table if not exists rtw_documents (
  path text primary key,
  slug text not null,
  title text not null,
  description text,
  status text,
  body text not null,
  checksum text not null,
  updated_at timestamptz not null default now()
);

create table if not exists rtw_posts (
  slug text primary key,
  title text not null,
  excerpt text,
  published_on date,
  category text,
  cover text,
  cover_alt text,
  reading_minutes integer,
  body jsonb not null,
  checksum text not null,
  updated_at timestamptz not null default now()
);

create table if not exists rtw_glossary (
  id text primary key,
  term text not null,
  definition text not null,
  href text,
  checksum text not null,
  updated_at timestamptz not null default now()
);

create table if not exists rtw_files (
  path text primary key,
  kind text not null,
  body text not null,
  byte_length integer not null,
  checksum text not null,
  updated_at timestamptz not null default now()
);

alter table rtw_documents enable row level security;
alter table rtw_posts enable row level security;
alter table rtw_glossary enable row level security;
alter table rtw_files enable row level security;
`;

async function connect() {
  const password = encodeURIComponent(process.env.DATABASE_PASSWORD ?? "");
  const ref = process.env.SUPABASE_REF ?? "ntftdfgythymqcgzylue";
  const urls = [
    process.env.DATABASE_URL,
    process.env.DATABASE_URL_ALT,
    process.env.DATABASE_URL_USER,
    `postgresql://postgres.${ref}:${password}@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres`,
    `postgresql://postgres.${ref}:${password}@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres`,
    `postgresql://postgres.${ref}:${password}@aws-0-ap-south-1.pooler.supabase.com:6543/postgres`,
    `postgresql://postgres.${ref}:${password}@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres`,
    `postgresql://postgres.${ref}:${password}@aws-0-us-east-1.pooler.supabase.com:6543/postgres`,
    `postgresql://postgres.${ref}:${password}@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres`,
  ].filter(Boolean) as string[];

  let lastError: unknown;
  for (const connectionString of urls) {
    for (const family of [6, 4, 0] as const) {
      const client = new pg.Client({
        connectionString,
        ssl: { rejectUnauthorized: false },
        lookup: (hostname, _options, callback) => {
          if (family === 0) {
            dns.lookup(hostname, callback);
            return;
          }
          dns.lookup(hostname, { family }, callback);
        },
      });
      try {
        await client.connect();
        return client;
      } catch (error) {
        lastError = error;
        try {
          await client.end();
        } catch {
          /* ignore */
        }
      }
    }
  }
  throw lastError;
}

async function main() {
  loadEnv();
  const documents = walk(path.join(root, "content", "docs"))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(file, "utf8");
      const parsed = matter(raw);
      const relative = rel(file);
      const slug = relative
        .replace(/^content\/docs\//, "")
        .replace(/\.mdx$/, "")
        .replace(/\/index$/, "")
        .replace(/^index$/, "");
      return {
        path: relative,
        slug,
        title: String(parsed.data.title ?? slug),
        description: parsed.data.description ? String(parsed.data.description) : null,
        status: parsed.data.status ? String(parsed.data.status) : null,
        body: parsed.content,
        checksum: checksum(raw),
      };
    });

  const extraFiles = [
    "source.txt",
    "lib/blog.ts",
    "lib/navigation.ts",
    "lib/docs.ts",
    "components/blog/JoinExplainer.tsx",
    "components/TermHint.tsx",
    "components/Glossary.tsx",
  ];
  const imageFiles = walk(path.join(root, "public")).filter((file) =>
    /\.(png|jpg|jpeg|webp|svg)$/i.test(file),
  );
  const fileRows = [
    ...extraFiles
      .map((file) => path.join(root, file))
      .filter((file) => fs.existsSync(file))
      .map((file) => fileRow(file, "source")),
    fileRow(path.join(root, "lib", "navigation.ts"), "source"),
    ...imageFiles.map((file) => fileRow(file, "asset")),
  ];
  const uniqueFiles = [...new Map(fileRows.map((row) => [row.path, row])).values()];

  const navBackup = {
    path: "lib/navigation.json",
    kind: "source",
    body: Buffer.from(JSON.stringify(nav, null, 2)).toString("base64"),
    byte_length: Buffer.byteLength(JSON.stringify(nav)),
    checksum: checksum(JSON.stringify(nav)),
  };
  uniqueFiles.push(navBackup);

  const client = await connect();
  try {
    await client.query(schema);

    for (const doc of documents) {
      await client.query(
        `insert into rtw_documents (path, slug, title, description, status, body, checksum, updated_at)
         values ($1,$2,$3,$4,$5,$6,$7, now())
         on conflict (path) do update set
           slug = excluded.slug,
           title = excluded.title,
           description = excluded.description,
           status = excluded.status,
           body = excluded.body,
           checksum = excluded.checksum,
           updated_at = now()`,
        [doc.path, doc.slug, doc.title, doc.description, doc.status, doc.body, doc.checksum],
      );
    }

    for (const post of posts) {
      await client.query(
        `insert into rtw_posts (slug, title, excerpt, published_on, category, cover, cover_alt, reading_minutes, body, checksum, updated_at)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,$10, now())
         on conflict (slug) do update set
           title = excluded.title,
           excerpt = excluded.excerpt,
           published_on = excluded.published_on,
           category = excluded.category,
           cover = excluded.cover,
           cover_alt = excluded.cover_alt,
           reading_minutes = excluded.reading_minutes,
           body = excluded.body,
           checksum = excluded.checksum,
           updated_at = now()`,
        [
          post.slug,
          post.title,
          post.excerpt,
          post.date,
          post.category,
          post.cover,
          post.coverAlt,
          post.readingMinutes,
          JSON.stringify(post.body),
          checksum(JSON.stringify(post)),
        ],
      );
    }

    for (const item of glossary) {
      await client.query(
        `insert into rtw_glossary (id, term, definition, href, checksum, updated_at)
         values ($1,$2,$3,$4,$5, now())
         on conflict (id) do update set
           term = excluded.term,
           definition = excluded.definition,
           href = excluded.href,
           checksum = excluded.checksum,
           updated_at = now()`,
        [item.id, item.term, item.def, item.href ?? null, checksum(JSON.stringify(item))],
      );
    }

    for (const row of uniqueFiles) {
      await client.query(
        `insert into rtw_files (path, kind, body, byte_length, checksum, updated_at)
         values ($1,$2,$3,$4,$5, now())
         on conflict (path) do update set
           kind = excluded.kind,
           body = excluded.body,
           byte_length = excluded.byte_length,
           checksum = excluded.checksum,
           updated_at = now()`,
        [row.path, row.kind, row.body, row.byte_length, row.checksum],
      );
    }

    const mismatches: string[] = [];
    for (const doc of documents) {
      const remote = await client.query("select checksum from rtw_documents where path = $1", [doc.path]);
      if (remote.rows[0]?.checksum !== doc.checksum) mismatches.push(`doc ${doc.path}`);
    }
    for (const post of posts) {
      const remote = await client.query("select checksum from rtw_posts where slug = $1", [post.slug]);
      if (remote.rows[0]?.checksum !== checksum(JSON.stringify(post))) mismatches.push(`post ${post.slug}`);
    }
    for (const item of glossary) {
      const remote = await client.query("select checksum from rtw_glossary where id = $1", [item.id]);
      if (remote.rows[0]?.checksum !== checksum(JSON.stringify(item))) mismatches.push(`glossary ${item.id}`);
    }
    for (const row of uniqueFiles) {
      const remote = await client.query("select checksum, byte_length from rtw_files where path = $1", [
        row.path,
      ]);
      if (
        remote.rows[0]?.checksum !== row.checksum ||
        Number(remote.rows[0]?.byte_length) !== row.byte_length
      ) {
        mismatches.push(`file ${row.path}`);
      }
    }

    const counts = await client.query(`
      select
        (select count(*)::int from rtw_documents) as documents,
        (select count(*)::int from rtw_posts) as posts,
        (select count(*)::int from rtw_glossary) as glossary,
        (select count(*)::int from rtw_files) as files
    `);

    console.log(
      JSON.stringify(
        {
          ok: mismatches.length === 0,
          local: {
            documents: documents.length,
            posts: posts.length,
            glossary: glossary.length,
            files: uniqueFiles.length,
          },
          remote: counts.rows[0],
          mismatches,
        },
        null,
        2,
      ),
    );
    if (mismatches.length) process.exitCode = 1;
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : "Could not persist to Supabase");
  process.exit(1);
});
