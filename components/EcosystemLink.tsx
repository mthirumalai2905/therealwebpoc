import Link from "next/link";

type Props = {
  to: "introduction" | "architecture" | "specification" | "implementation";
  children?: React.ReactNode;
};

const config = {
  introduction: {
    kicker: "What",
    title: "Want to understand what the Real Time Web is?",
    href: "/docs/introduction",
    label: "Read the introduction",
  },
  architecture: {
    kicker: "MAD",
    title: "Want an introduction to Morphic Architecture Design?",
    href: "/docs/architecture",
    label: "Read Morphic Architecture",
  },
  specification: {
    kicker: "Implementation",
    title: "Want to see who is implementing the architecture?",
    href: "/docs/implementation",
    label: "Read implementations",
  },
  implementation: {
    kicker: "Implementation",
    title: "Want to see who is implementing the architecture?",
    href: "/docs/implementation",
    label: "Read implementations",
  },
};

export function EcosystemLink({ to, children }: Props) {
  const item = config[to];
  const inner = (
    <>
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
        {item.kicker}
      </div>
      <p className="mt-1 text-[14px] text-[var(--ink)]">{children ?? item.title}</p>
      <div className="mt-2 text-[13px] text-[var(--accent)]">{item.label} →</div>
    </>
  );

  return (
    <Link
      href={item.href}
      className="mt-8 block border border-[var(--line)] px-4 py-3 transition-colors hover:border-[rgba(127,211,195,0.35)]"
    >
      {inner}
    </Link>
  );
}
