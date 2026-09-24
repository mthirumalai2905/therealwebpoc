import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getDoc, getDocSlugs } from "@/lib/docs";
import { mdxComponents } from "@/components/mdx";
import { SpecStatus } from "@/components/SpecStatus";
import { OnThisPage } from "@/components/OnThisPage";
import { DocPager } from "@/components/DocPager";

type Params = { slug?: string[] };

export function generateStaticParams() {
  return getDocSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getDoc(slug ?? []);
  if (!doc) return {};
  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
  };
}

export default async function DocPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getDoc(slug ?? []);
  if (!doc) notFound();

  const status = doc.frontmatter.status ?? "published";
  const pathname = slug && slug.length > 0 ? `/docs/${slug.join("/")}` : "/docs";

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_220px]">
      <article className="min-w-0 px-4 py-8 sm:px-5 sm:py-12 md:px-8 lg:px-10 lg:py-16">
        <p className="mb-3 font-mono text-[11px] tracking-[0.16em] text-[var(--muted)]">
          {pathname === "/docs" ? "ABOUT RTW" : "DOCUMENTATION"}
        </p>
        <div className="prose-rtw">
          {status !== "published" ? (
            <SpecStatus status={status === "draft" ? "draft" : "pending"} />
          ) : null}
          <h1>{doc.frontmatter.title}</h1>
          {doc.frontmatter.description ? (
            <p className="lead">{doc.frontmatter.description}</p>
          ) : null}
          <MDXRemote source={doc.content} components={mdxComponents} />
          <DocPager pathname={pathname} />
        </div>
      </article>
      <aside className="hidden border-l border-[var(--line)] xl:block">
        <div className="sticky top-[calc(3.5rem+env(safe-area-inset-top))] px-4 py-10">
          <OnThisPage />
        </div>
      </aside>
    </div>
  );
}
