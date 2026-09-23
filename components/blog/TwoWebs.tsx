import Link from "next/link";
import { TermHint } from "@/components/TermHint";
import { Figure } from "@/components/Figure";
import { SplitPulse } from "@/components/diagrams/SplitPulse";
import { LampHalo } from "@/components/diagrams/LampHalo";
import { GrantCrescent } from "@/components/diagrams/GrantCrescent";
import { ContributorInvite } from "@/components/blog/ContributorInvite";

export function TwoWebs() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-12 md:px-0">
      <p className="text-[18px] leading-8 text-[var(--ink)]">
        There are two kinds of web on the same Internet. They are not the same job. One
        is good at a page you ask for. The other is for a lamp that is still on.
      </p>

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The World Wide Web is built for documents. You click. A server answers. You
        leave. That is right for a news article. It is a poor fit for “tell me the
        second the coffee maker finishes.”
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The Real Time Web is built for live things: sensors, machines, applications, AI
        agents, and people using those resources. The relationship stays open.
        Authorized updates can arrive as they happen. The link works both ways.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        RTW is not meant to replace the WWW. A site can still publish documents. RTW can
        carry the live channel beside that site.
      </p>

      <SplitPulse />

      <Figure
        src="/blog/rtw-cityscape-08-motherboard-plan.png"
        alt="A city drawn like a plan, gold traces where the streets would be."
        caption="A document you retrieve. A city that is still moving."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        A lamp on the network
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Take a smart lamp. It has a light and a switch. Treat it as an{" "}
        <TermHint id="endpoint">endpoint</TermHint>: the actual network resource. The
        walkthrough below builds the vocabulary as that lamp participates. It is a
        teaching story, not a product click path.
      </p>

      <Figure
        src="/blog/rtw-anime-22-window-to-the-sphere.png"
        alt="A window looking out at a gold sphere hanging over a night city."
        caption="The lamp stays in the room. The live stand-in is not a person."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Identity: the ghost
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        When the lamp can participate, it is paired with a{" "}
        <TermHint id="ghost">ghost</TermHint>: a shared-memory stand-in for that one
        resource. What the lamp reports, the ghost can carry. What the ghost is
        authorized to receive, the lamp can act on.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The ghost is tied to the resource, not to a human avatar. You are not the ghost.
        You may own the <TermHint id="ghostid">ghostId</TermHint>.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The pairing is <TermHint id="bijective">bijective</TermHint>. One lamp, one
        ghost. One ghost, that lamp. Never one ghost shared by two endpoints. The ghost
        provides identity, behavior, and context when an active connection is present.
        That is different from a stored twin that sits in a database whether the lamp is
        on or off. RTW does not natively store data in the network.
      </p>

      <LampHalo />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        A home, then a morph
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The lamp still needs an application-layer home. That home is a{" "}
        <TermHint id="morphic-service">Morphic service</TermHint>: a service on{" "}
        <TermHint id="mad">MAD</TermHint> that allocates ghosts.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        When the service is created, the service owner is the primary owner of those
        ghosts. When you register and confirm a transfer, you own the data layer. The
        service owner keeps the application layer. They may keep a local copy.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Suppose a scheduler wants the lamp at dusk. That service does not need a custom
        API into the lamp. The owner <TermHint id="morph">morphs</TermHint> the lamp
        ghost against the secondary service. Two things happen at once. The scheduler
        gets read access, which the owner can withdraw. The data is reshaped into the
        scheduler’s local model. Each service only sees its own context.
      </p>

      <GrantCrescent />

      <Figure
        src="/blog/rtw-anime-09-sky-island-links.png"
        alt="Islands in the sky joined by thin gold paths of light."
        caption="The source stays put. The receiving service works in its own shape."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Who is allowed to see it
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Data is consumed at an endpoint when the ghosts at the ends are owned by the
        same user, or the receiver has approved read access. Same user usually means one
        person and two of their endpoints, such as their lamp and their display. It does
        not mean two different people are the same person.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Two different people do not open each other’s data because they share an
        implementation. One of them morphs, or transfers. Ownership sits on the ghostId.
        A transfer has to be confirmed. That is a change of ownership, not a casual
        share.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Underneath is Morphic Architecture Design, introduced in 2008 by Paal Kristian
        Levang. Four independently owned layers. A change in one layer does not have to
        redefine the whole relationship. Anyone can develop an implementation. This site
        does not name a vendor.
      </p>

      <p className="mt-10 text-[15px] leading-7 text-[var(--muted)]">
        Today, two live things usually meet through a custom API, a login, and a copied
        dataset. The architecture’s claim is smaller: keep data with the source, morph
        it for whoever is authorized, and let ownership stay split.
      </p>

      <ContributorInvite />

      <div className="mt-14 border-t border-[var(--line)] pt-8">
        <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          ← All journals
        </Link>
        <span className="mx-3 text-[var(--muted)]">·</span>
        <Link
          href="/docs/architecture"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]"
        >
          Morphic Architecture →
        </Link>
      </div>
    </div>
  );
}
