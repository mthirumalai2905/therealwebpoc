import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPostDate, getPost, getRelated, posts } from "@/lib/blog";
import { CornerMarks } from "@/components/CornerMarks";
import { ParticipationExplainer } from "@/components/blog/ParticipationExplainer";
import { LastITProject } from "@/components/blog/LastITProject";
import { SmartShoes } from "@/components/blog/SmartShoes";
import { SmartUmbrella } from "@/components/blog/SmartUmbrella";
import { PlayingWithOranges } from "@/components/blog/PlayingWithOranges";
import { ScanWifi } from "@/components/blog/ScanWifi";
import { LinkTheFridge } from "@/components/blog/LinkTheFridge";
import { TwentyFourHoursNtnu } from "@/components/blog/TwentyFourHoursNtnu";
import { TwoWebs } from "@/components/blog/TwoWebs";
import { ContributorInvite } from "@/components/blog/ContributorInvite";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelated(post.slug);

  return (
    <article className="pb-20">
      <header className="border-b border-[var(--line)]">
        <div className="relative mx-auto mt-4 max-w-[1100px] overflow-hidden rounded-[4px] sm:mt-8">
          <div className="relative h-[min(78vw,340px)] min-h-[260px] md:h-[360px]">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="1100px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
            <CornerMarks />
            <div className="relative z-10 flex h-full max-w-[780px] flex-col justify-end px-5 pb-6 md:px-8 md:pb-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                <Link href="/blog" className="hover:text-white">
                  Journals
                </Link>
                <span className="mx-2">/</span>
                {post.category}
              </p>
              <h1 className="mt-3 font-serif text-[1.7rem] leading-tight tracking-tight text-white sm:text-3xl md:text-[42px] md:leading-[1.08]">
                {post.title}
              </h1>
              <p className="mt-3 line-clamp-4 max-w-2xl text-[14px] leading-6 text-white/80 sm:text-[15px] sm:leading-7 md:line-clamp-none">
                {post.excerpt}
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
                {post.author ? `${post.author} · ` : "Real Time Web · "}
                {formatPostDate(post.date)} · {post.readingMinutes} min read
              </p>
            </div>
          </div>
        </div>
      </header>

      {post.slug === "the-last-it-project" ? (
        <LastITProject />
      ) : post.slug === "smart-shoes" ? (
        <SmartShoes />
      ) : post.slug === "smart-umbrella" ? (
        <SmartUmbrella />
      ) : post.slug === "playing-with-oranges" ? (
        <PlayingWithOranges />
      ) : post.slug === "scan-and-post-wifi" ? (
        <ScanWifi />
      ) : post.slug === "link-the-fridge" ? (
        <LinkTheFridge />
      ) : post.slug === "twenty-four-hours-at-ntnu" ? (
        <TwentyFourHoursNtnu />
      ) : post.slug === "how-a-user-joins" ? (
        <ParticipationExplainer />
      ) : post.slug === "two-webs" ? (
        <TwoWebs />
      ) : (
        <div className="mx-auto max-w-[640px] px-4 py-12 md:px-0">
          {post.body.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "text-[18px] leading-8 text-[var(--ink)]"
                  : "mt-6 text-[17px] leading-8 text-[var(--ink)]/90"
              }
            >
              {paragraph}
            </p>
          ))}
          <ContributorInvite />
          <div className="mt-14 border-t border-[var(--line)] pt-8">
            <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
              ← All articles
            </Link>
          </div>
        </div>
      )}

      {related.length ? (
        <aside className="mx-auto max-w-[1100px] px-4 md:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Continue reading</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group block">
                <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-[4px]">
                  <Image
                    src={item.cover}
                    alt={item.coverAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    sizes="320px"
                  />
                  <CornerMarks />
                </div>
                <h2 className="font-serif text-lg leading-snug text-[var(--ink)] group-hover:text-[var(--accent)]">
                  {item.title}
                </h2>
              </Link>
            ))}
          </div>
        </aside>
      ) : null}
    </article>
  );
}
