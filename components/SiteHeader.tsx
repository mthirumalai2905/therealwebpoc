"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/docs/introduction", label: "Documentation" },
  { href: "/blog", label: "Journal" },
  { href: "/docs/architecture", label: "Architecture" },
  { href: "/docs/specification", label: "Specification" },
  { href: "/docs/reference/glossary", label: "Glossary" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const onLanding = pathname === "/";
  const onDocs = pathname.startsWith("/docs");
  const onBlog = pathname.startsWith("/blog");
  const overHero = onLanding;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={
        onLanding
          ? "absolute inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]"
          : "sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] pt-[env(safe-area-inset-top)] backdrop-blur-md"
      }
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="min-w-0 shrink" onClick={() => setMenuOpen(false)}>
          <span
            className={
              "block truncate font-mono text-[10px] tracking-[0.12em] sm:text-[11px] sm:tracking-[0.18em] " +
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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "hover:text-[var(--ink)]",
                !onLanding &&
                  ((link.href === "/blog" && onBlog) ||
                    (link.href !== "/blog" && onDocs && pathname.startsWith(link.href))) &&
                  "text-[var(--ink)]",
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle light={overHero} />
        </nav>
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <ThemeToggle light={overHero} />
          <button
            type="button"
            className={
              "flex h-9 w-9 items-center justify-center rounded-full border " +
              (overHero
                ? "border-white/25 text-white"
                : "border-[var(--line)] text-[var(--ink)]")
            }
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            className={
              "relative z-50 border-t px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 " +
              (overHero
                ? "border-white/10 bg-black/80 backdrop-blur-md"
                : "border-[var(--line)] bg-[var(--bg-elev)]")
            }
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "block border-b py-3.5 text-[16px] " +
                  (overHero
                    ? "border-white/10 text-white"
                    : "border-[var(--line)] text-[var(--ink)]")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
