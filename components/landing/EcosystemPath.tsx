import Link from "next/link";

const paths = [
  {
    step: "01",
    name: "What",
    href: "/docs/introduction/two-webs",
    host: "Real Time Web",
    text: "A network architecture for live, bidirectional relationships between physical and virtual resources.",
  },
  {
    step: "02",
    name: "Why",
    href: "/docs/introduction/why",
    host: "Ownership and live data",
    text: "Today’s Web was built for documents. RTW exists so live resources can stay with their owners instead of being copied into platforms.",
  },
  {
    step: "03",
    name: "MAD",
    href: "/docs/architecture",
    host: "Morphic Architecture Design",
    text: "The 2008 blueprint behind RTW. Four independently owned layers, so a change in one does not have to redefine the whole relationship.",
  },
];

export function EcosystemPath() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1080px] px-6 py-20 md:py-24">
        <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent)]">THE REAL TIME WEB</p>
        <h2 className="font-serif mt-3 max-w-[22ch] text-[1.85rem] leading-tight text-[var(--ink)] md:text-[2.35rem]">
          What it is, why it exists, and the architecture behind it.
        </h2>
        <div className="mt-10 grid gap-px bg-[var(--line)] sm:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.name}
              href={path.href}
              className="flex min-h-[220px] flex-col bg-[var(--bg)] p-6 transition-colors hover:bg-[var(--bg-elev)] md:p-8"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-[var(--muted)]">{path.step}</p>
              <h3 className="font-serif mt-3 text-[1.5rem] text-[var(--ink)]">{path.name}</h3>
              <p className="mt-1 font-mono text-[11px] text-[var(--accent)]">{path.host}</p>
              <p className="mt-4 flex-1 text-[14px] leading-7 text-[var(--muted)]">{path.text}</p>
              <p className="mt-6 font-mono text-[11px] tracking-[0.12em] text-[var(--ink)]">Read →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
