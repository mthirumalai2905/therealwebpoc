import Link from "next/link";
import { ContactDialog } from "@/components/ContactDialog";

export function SiteFooter() {
  return (
    <footer className="relative z-40 border-t border-[var(--line)] bg-[var(--bg-elev)]">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 sm:gap-10 sm:py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--accent)]">REAL TIME WEB</p>
          <p className="mt-4 max-w-xs text-[13px] leading-6 text-[var(--muted)]">
            A standalone nonprofit site. It explains what the Real Time Web is, why it exists, and
            introduces Morphic Architecture Design.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Real Time Web</p>
          <ul className="mt-3 space-y-2 text-[13px] text-[var(--ink)]">
            <li>
              <Link href="/docs">Overview</Link>
            </li>
            <li>
              <Link href="/docs/introduction">What and why</Link>
            </li>
            <li>
              <Link href="/docs/architecture">Morphic Architecture</Link>
            </li>
            <li>
              <Link href="/docs/architecture/infrastructure">Infrastructure</Link>
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
              <Link href="/docs/implementation">Implementation</Link>
            </li>
            <li>
              <Link href="/docs/reference/glossary">Summary</Link>
            </li>
            <li>
              <Link href="/blog">Articles</Link>
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
            <li>Implementation: named, high level</li>
            <li>Implementations: open</li>
            <li>Not owned by a company</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-5 px-4 py-8 sm:flex-row sm:items-center md:px-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
              Contact
            </p>
            <p className="mt-2 text-[17px] leading-7 text-[var(--ink)]">
              Have a question about the Real Time Web?
            </p>
            <p className="mt-1 text-[13px] leading-6 text-[var(--muted)]">
              Send a message. This is not a product signup.
            </p>
          </div>
          <ContactDialog />
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-1.5 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-[12px] leading-6 text-[var(--muted)] md:px-6">
          <p>Copyright © 2026 Real Time Web.</p>
          <p>
            A standalone nonprofit architecture explainer. Not owned by a company. Anyone may
            implement MAD or the Real Time Web. This site does not designate a vendor.
          </p>
        </div>
      </div>
    </footer>
  );
}
