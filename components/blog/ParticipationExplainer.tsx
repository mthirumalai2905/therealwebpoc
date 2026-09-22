import Link from "next/link";
import { OnboardingFlow } from "@/components/diagrams/OnboardingFlow";
import { EcosystemMap } from "@/components/diagrams/EcosystemMap";
import { GhostBijection } from "@/components/diagrams/GhostBijection";
import { DataChannelMorph } from "@/components/diagrams/DataChannelMorph";
import { TermHint } from "@/components/TermHint";
import { Figure } from "@/components/Figure";
import { ContributorInvite } from "@/components/blog/ContributorInvite";

function Faq({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <details className="border-b border-[var(--line)] py-4">
      <summary className="cursor-pointer list-none text-[16px] leading-7 text-[var(--ink)] marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-start justify-between gap-4">
          <span>{question}</span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
            Open
          </span>
        </span>
      </summary>
      <div className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{children}</div>
    </details>
  );
}

export function ParticipationExplainer() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-12 md:px-0">
      <p className="text-[18px] leading-8 text-[var(--ink)]">
        This site does not create an account. RealTimeWeb.org explains what the Real Time
        Web is, why it exists, and how <TermHint id="mad">Morphic Architecture Design</TermHint>{" "}
        is structured. Anyone can develop an implementation.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        WWW linking was built for documents you request and get back. RTW is for live
        resources: devices, services, agents, and people, connected while the source is
        still running. Data stays with its owner. Sharing is a grant, not a dump into a
        platform.
      </p>

      <h2
        id="roles"
        className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]"
      >
        What this site is for
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Keep the jobs separate. Mixing them is how people think this page is a product.
      </p>
      <div className="diagram-block my-8 overflow-hidden border border-[var(--line)]">
        <div className="border-b border-[var(--line)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
          High level only. No product funnel.
        </div>
        <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
          {[
            {
              kicker: "Here",
              name: "Real Time Web",
              role: "Architecture. MAD, ghosts, ownership, morphing.",
              action: "Understand",
            },
            {
              kicker: "MAD",
              name: "Implementations",
              role: "Anyone can build a live network from the model. This site names none as the only door.",
              action: "Independent",
            },
            {
              kicker: "Known tools",
              name: "Synx",
              role: "One known toolchain for configuring, securing, and maintaining RTW services.",
              action: "Operate, not sell",
            },
          ].map((item) => (
            <div key={item.name} className="bg-[var(--bg)] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                {item.kicker}
              </div>
              <div className="mt-2 text-[16px] text-[var(--ink)]">{item.name}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{item.role}</p>
              <p className="mt-3 font-mono text-[11px] text-[var(--muted)]">{item.action}</p>
            </div>
          ))}
        </div>
      </div>

      <EcosystemMap />

      <h2
        id="the-path"
        className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]"
      >
        The path, in architecture terms
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Identity, a domain as an address space, a ghost you confirm, then morph for read
        access. This is the model. It is not a click-through signup.
      </p>
      <OnboardingFlow />

      <h2
        id="ghost"
        className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]"
      >
        The ghost is the relationship
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Each network resource has one <TermHint id="ghost">ghost</TermHint>: one endpoint,
        one ghost, addressable from both sides. While the connection is live, the ghost
        carries identity, behavior, and context. You connect against that ghost, not
        against a copied file on a vendor server.
      </p>
      <GhostBijection />
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        When a <TermHint id="morphic-service">Morphic service</TermHint> is created, the
        service owner is primary owner of allocated ghosts. When a user registers, the
        service owner transfers the <TermHint id="ghostid">ghostId</TermHint>. When the
        user confirms, the data layer belongs to the user. The application layer stays
        with the service owner, who may keep a local copy.
      </p>
      <Figure
        src="/blog/join/ghost-layers.png"
        alt="A ghost split into application layer held by the service owner and data layer held by the user after confirm."
        caption="Ownership splits on the same ghost. Confirm moves the data layer. The service keeps the application layer."
        fit="contain"
      />

      <h2
        id="morph"
        className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]"
      >
        Morph is read access, not a transfer
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        <TermHint id="morph">Morphing</TermHint> a ghost against another service gives
        that service read access. The owner can withdraw it. Transfer moves ownership.
        Those are different acts.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Along a linking path, data is morphed into local models. Each hop only sees its
        own shape. The RTW network does not natively store data. A service may keep what
        it is allowed to see, locally.
      </p>
      <DataChannelMorph />
      <Figure
        src="/blog/join/live-channel.png"
        alt="A source endpoint morphed along a path into one user's local ghost data channel."
        caption="A data channel is personal. Data moves when ownership or granted read access matches at both ends."
        fit="contain"
      />

      <h2
        id="synx"
        className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]"
      >
        Synx, at high level
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        <TermHint id="synx">Synx</TermHint> is a known set of tools used to configure,
        administer, secure, and maintain RTW services. MAD treats authentication as
        optional. An implementation may use any token system that issues identity.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        This page does not document Synx procedures, tokens, protocols, or screens. Those
        belong with the implementation that uses them. Naming Synx here is a fact about
        the known toolchain, not an invitation to buy or join anything.
      </p>

      <h2
        id="faq"
        className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]"
      >
        FAQ
      </h2>
      <div className="mt-6 border-t border-[var(--line)]">
        <Faq question="Do I create an account on this website?">
          <p>No. This site explains the architecture. It does not onboard anyone.</p>
        </Faq>
        <Faq question="What is MAD?">
          <p>
            Morphic Architecture Design is the 2008 blueprint RTW is built on: four
            independently owned layers, so a change in one layer does not have to
            redefine the whole relationship.
          </p>
        </Faq>
        <Faq question="What is a ghost?">
          <p>
            A ghost is the live stand-in for one network resource. One endpoint maps to
            one ghost, both ways. Whoever owns the ghostId owns the data at that
            endpoint.
          </p>
        </Faq>
        <Faq question="Who owns my data after I use a service?">
          <p>
            After you confirm the transferred ghostId, the data layer is yours. The
            service still owns the application layer and may keep a local copy.
          </p>
        </Faq>
        <Faq question="Can I take access back after I share?">
          <p>
            Yes. Morphing grants read access. The owner can withdraw it. Transfer is the
            other act: it moves ownership, and it needs confirm.
          </p>
        </Faq>
        <Faq question="What is Synx?">
          <p>
            A known toolchain for running RTW services. It is not the architecture, and
            it is not the only possible implementation. This site does not sell it or
            walk through its internals.
          </p>
        </Faq>
      </div>

      <p className="mt-10">
        <Link href="/docs/introduction/onboarding" className="text-[var(--accent)]">
          Same map in the documentation →
        </Link>
      </p>
      <ContributorInvite />
      <div className="mt-14 border-t border-[var(--line)] pt-8">
        <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          ← All articles
        </Link>
      </div>
    </div>
  );
}
