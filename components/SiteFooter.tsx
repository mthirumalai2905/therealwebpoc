import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-elev)]">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 sm:gap-10 sm:py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--accent)]">REALTIMEWEB.ORG</p>
          <p className="mt-4 max-w-xs text-[13px] leading-6 text-[var(--muted)]">
            A standalone nonprofit site. It explains what the Real Time Web is, why it exists, and
            introduces Morphic Architecture Design.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Documentation</p>
          <ul className="mt-3 space-y-2 text-[13px] text-[var(--ink)]">
            <li>
              <Link href="/docs/introduction">Introduction</Link>
            </li>
            <li>
              <Link href="/docs/architecture">Architecture</Link>
            </li>
            <li>
              <Link href="/docs/specification">Specification</Link>
            </li>
            <li>
              <Link href="/docs/reference/glossary">Glossary</Link>
            </li>
            <li>
              <Link href="/docs/reference/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">About</p>
          <ul className="mt-3 space-y-2 text-[13px] text-[var(--ink)]">
            <li>
              <Link href="/blog">Journal</Link>
            </li>
            <li>
              <Link href="/docs/introduction/vision">Vision</Link>
            </li>
            <li>
              <Link href="/docs/brand">Brand strategy</Link>
            </li>
            <li>
              <Link href="/docs/research/implementations">Implementations</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Status</p>
          <ul className="mt-3 space-y-2 text-[13px] leading-6 text-[var(--muted)]">
            <li>Architecture: public</li>
            <li>Specification: in draft</li>
            <li>Implementations: open</li>
            <li>Not owned by a company</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-[12px] leading-6 text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            RealTimeWeb.org is not owned by a company. Anyone can develop an implementation of MAD
            or the Real Time Web.
          </p>
          <p>Documentation site. Not a product dashboard.</p>
        </div>
      </div>
    </footer>
  );
}
