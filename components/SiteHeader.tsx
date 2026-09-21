"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavPalette } from "@/components/NavPalette";

export function SiteHeader() {
  const pathname = usePathname();
  const { open, setOpen } = useNavPalette();
  const onLanding = pathname === "/";
  const onDocs = pathname.startsWith("/docs");
  const onBlog = pathname.startsWith("/blog");
  const overHero = onLanding;

  return (
    <header
      className={
        onLanding
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-md"
      }
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span
            className={
              "font-mono text-[11px] tracking-[0.18em] " +
              (overHero ? "text-white/70" : "text-[var(--accent)]")
            }
          >
            REALTIMEWEB.ORG
          </span>
        </Link>
        <nav
          className={
            "hidden items-center gap-6 text-[13px] md:flex " +
            (overHero ? "text-white/55" : "text-[var(--muted)]")
          }
        >
          <Link
            href="/docs/introduction"
            className={clsx("hover:text-[var(--ink)]", !onLanding && onDocs && "text-[var(--ink)]")}
          >
            Documentation
          </Link>
          <Link href="/blog" className={clsx("hover:text-[var(--ink)]", !onLanding && onBlog && "text-[var(--ink)]")}>
            Journal
          </Link>
          <Link href="/docs/architecture" className="hover:text-[var(--ink)]">
            Architecture
          </Link>
          <Link href="/docs/specification" className="hover:text-[var(--ink)]">
            Specification
          </Link>
          <Link href="/docs/reference/glossary" className="hover:text-[var(--ink)]">
            Glossary
          </Link>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={overHero ? "text-white/70" : "text-[var(--muted)]"}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
