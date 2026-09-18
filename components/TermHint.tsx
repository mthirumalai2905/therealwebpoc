import { CornerMarks } from "@/components/CornerMarks";

const terms: Record<string, { title: string; lines: string[] }> = {
  ghost: {
    title: "Ghost",
    lines: [
      "A ghost is the live stand-in for one network resource.",
      "Each endpoint maps to exactly one ghost, and that ghost maps back to that endpoint.",
      "While the connection is active it carries identity, behavior, and context.",
      "Whoever owns the ghostId owns the data at that endpoint.",
    ],
  },
  "morphic-service": {
    title: "Morphic service",
    lines: [
      "A Morphic service is an application on MAD that allocates ghosts for its users.",
      "When it is created, the service owner is the primary owner of those ghosts.",
      "After a user confirms a transfer, the user owns the data layer. The service still owns the application layer.",
      "Ghost id zero is the service itself. Transfer that, and the service changes hands.",
    ],
  },
  mad: {
    title: "MAD",
    lines: [
      "Morphic Architecture Design is the 2008 model RTW is built on.",
      "It coordinates at least four independent ownership and operational layers.",
      "Authentication is optional in the model. Morph Space currently uses SynxPass.",
    ],
  },
  synxpass: {
    title: "SynxPass",
    lines: [
      "SynxPass is the known authentication system used by Morph Space.",
      "It is token-based. The endpoint refreshes the token every three minutes to send data.",
      "After registration, a user may join services by receiving access to ghosts.",
    ],
  },
  morph: {
    title: "Morphing",
    lines: [
      "Morphing means transforming data along a linking path to fit a local data model.",
      "Each service only works on its own local structures.",
      "Giving a service read access is a morph of your ghost, not an upload into a central dump.",
    ],
  },
  "morph-space": {
    title: "Morph Space",
    lines: [
      "Morph Space is the commercial platform and reference implementation.",
      "People and organizations join here, establish domains, and publish resources.",
      "RTW is the architecture. Morph is how you enter it.",
    ],
  },
  synx: {
    title: "Synx tools",
    lines: [
      "Synx tools configure, administer, secure, and maintain RTW services.",
      "The current implementation uses TCP/IP with HTTPS and websocket.",
      "Session termination can be activated through Synx runtime BIOS.",
    ],
  },
  domain: {
    title: "Domain",
    lines: [
      "In this network a domain is an address space, not a marketing website.",
      "If you own the full stack of a domain, you control ghosts for endpoints that connect into it.",
      "Whether Morph mints that domain for you is not answered in the current source.",
    ],
  },
  ghostid: {
    title: "ghostId",
    lines: [
      "Ownership of data at an endpoint is given by the ghostId.",
      "Whoever owns the ghostId owns the data at that endpoint.",
      "The service owner can transfer a ghostId. The user must confirm it.",
    ],
  },
  "ghost-zero": {
    title: "Ghost id zero",
    lines: [
      "Ghost id zero is the service in the application layer.",
      "Transferring ghost id zero transfers the service itself.",
      "That is independent of who owns the data layer on other ghosts.",
    ],
  },
  "ghost-space": {
    title: "Ghost Space",
    lines: [
      "Ghost Space is the shared coordination environment around one live resource.",
      "The four MAD layers can observe and process authorized updates there.",
      "It is not a database. Data is not natively stored in the network.",
    ],
  },
  "data-channel": {
    title: "Data channel",
    lines: [
      "A data channel is how a linking path collects sources into one user’s local ghost.",
      "Only data with a valid morphed ghost is received.",
      "Both ends need a user who owns or has read access to the data.",
    ],
  },
  bijective: {
    title: "Bijective relationship",
    lines: [
      "The endpoint has one ghost, and that ghost represents one endpoint.",
      "The relationship can be addressed from both sides.",
      "That is what makes the link live and bidirectional, unlike a normal hyperlink.",
    ],
  },
};

export function TermHint({ id, children }: { id: string; children?: React.ReactNode }) {
  const entry = terms[id];
  const label = children ?? entry?.title ?? id;
  if (!entry) return <>{label}</>;

  return (
    <span className="group relative inline-block">
      <span
        tabIndex={0}
        className="cursor-help border-b border-dotted border-[color-mix(in_srgb,var(--accent)_55%,transparent)] outline-none"
      >
        {label}
      </span>
      <span className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(17.5rem,calc(100vw-2rem))] -translate-x-1/2 pt-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <span
          role="tooltip"
          className="relative block border border-[var(--line)] bg-[var(--bg-elev)] px-4 py-3.5 text-left shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
        >
          <CornerMarks />
          <span className="relative z-10 block font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]">
            {entry.title}
          </span>
          {entry.lines.map((line) => (
            <span key={line} className="relative z-10 mt-1.5 block text-[13px] leading-5 text-[var(--ink)]">
              {line}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
