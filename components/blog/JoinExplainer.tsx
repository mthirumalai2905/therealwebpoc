import Image from "next/image";
import Link from "next/link";
import { OnboardingFlow } from "@/components/diagrams/OnboardingFlow";
import { EcosystemMap } from "@/components/diagrams/EcosystemMap";
import { GhostBijection } from "@/components/diagrams/GhostBijection";
import { DataChannelMorph } from "@/components/diagrams/DataChannelMorph";
import { TermHint } from "@/components/TermHint";
import { CornerMarks } from "@/components/CornerMarks";

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

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[16/9] overflow-hidden border border-[var(--line)] bg-black">
        <Image src={src} alt={alt} fill className="object-contain bg-[#0d0f12]" sizes="760px" />
        <CornerMarks />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-[var(--muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}

export function JoinExplainer() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-12 md:px-0">
      <p className="text-[18px] leading-8 text-[var(--ink)]">
        People keep asking where to create an account. Not on this website. RealTimeWeb.org
        explains the architecture. Morph.Space is how a person or organization actually
        enters the network. <TermHint id="synx">Synx tools</TermHint> keep that connection configured, authenticated, and
        alive.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Think of it the way the old Web already works: you do not get an email inbox by
        reading the HTTP specification. You use a service that implements it. RTW is the
        model. <TermHint id="morph-space">Morph Space</TermHint> is the reference implementation you join. Synx is the kit that
        implementation uses.
      </p>

      <h2 id="three-places" className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]">
        Three places, three jobs
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The source is strict about this split. Mixing them is how people get lost.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-8 text-[var(--ink)]">
        <li>
          <strong className="font-medium">RealTimeWeb.org</strong> answers what RTW is and
          how the architecture works. Tone: specification. Action: understand.
        </li>
        <li>
          <strong className="font-medium">Morph.Space</strong> answers what you can do and
          how you join. Tone: commercial and practical. Action: create an account or
          domain.
        </li>
        <li>
          <strong className="font-medium">Synx tools</strong> answer how each tool is
          configured and operated. Tone: procedural. Action: administer the network.
        </li>
      </ul>

      <Figure
        src="/blog/join/three-places.png"
        alt="System diagram of three locations: RealTimeWeb.org to understand, Morph.Space to join, Synx tools to operate."
        caption="Figure 1. You read here. You join on Morph.Space. You operate with Synx. Do not merge these into one form."
      />

      <EcosystemMap />

      <h2 id="the-path" className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]">
        The path, end to end
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Click a step. The diagram at the top is the map. The numbered list is the same
        path with the exact claims from the source.
      </p>
      <OnboardingFlow />

      <h2 id="identity" className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]">
        Identity is a pass, not a profile page
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Morph Space uses Synx Pass for authorization. <TermHint id="synxpass">SynxPass</TermHint> is part of Synx Tools. It
        is token-based. Once a user is registered in SynxPass they may participate in RTW
        and become members of services by getting access to <TermHint id="ghost">ghosts</TermHint>.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        <TermHint id="mad">MAD</TermHint> allows other token systems in principle. In the currently known
        implementation there is one: SynxPass, used by Morph Space. That is why onboarding
        is not “sign up on RealTimeWeb.org.” Identity lives in the reference network.
      </p>
      <p className="mt-6 text-[15px] leading-7 text-[var(--muted)]">
        Not specified in the current source: how a pass is created, token format, signing,
        claims, or identity-provider federation. Those belong in Synx Pass documentation.
      </p>

      <Figure
        src="/blog/join/token-loop.png"
        alt="Loop diagram of an endpoint refreshing a SynxPass token every three minutes in order to send data, with a revoke path through Synx BIOS."
        caption="Figure 2. The endpoint refreshes the token every three minutes to send data. Revocation and session termination go through Synx."
      />

      <h2 id="domain" className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]">
        A domain is an address space, not a website
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Morph Space is the environment through which users establish <TermHint id="domain">domains</TermHint>, publish
        resources, and join the network. If an identified user owns and controls the whole
        stack of a domain, that user also controls ownership of allocated ghosts for
        endpoints connecting against that domain address space.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        You do not need a public marketing site on RealTimeWeb.org to do this. The Morph
        site plan lists “register or connect a domain” and “create an RTW identity” as
        main sections. The FAQ still does not answer whether you must already own a
        public DNS name, whether Morph can mint an RTW domain for you, or how long setup
        takes.
      </p>

      <h2 id="ghost" className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]">
        The ghost is the relationship
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Each unique network resource is bijectively connected to its own <TermHint id="ghost">ghost</TermHint>: one
        endpoint, one ghost, addressable from both sides. The ghost is a
        shared-memory representation. When the connection is active it carries identity,
        behavior, and context.
      </p>
      <GhostBijection />
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Ownership splits across layers. When a <TermHint id="morphic-service">Morphic service</TermHint> is created, the service
        owner is the primary owner of allocated ghosts. When a user registers, the
        service owner transfers the <TermHint id="ghostid">ghostid</TermHint>. When the user confirms, the data layer of
        that ghost belongs to the user. The application layer still belongs to the
        service owner, who keeps a local copy of the data.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That split is the whole point of MAD. You can own the sensor reading without
        owning the application that displays it. The service can be transferred later by
        handing over <TermHint id="ghost-zero">ghost id zero</TermHint>, which is the service itself.
      </p>

      <Figure
        src="/blog/join/ghost-layers.png"
        alt="Ownership diagram of a ghost with an application layer owned by the service and a data layer owned by the user after confirmation."
        caption="Figure 3. Confirming a ghost does not give you the service. It gives you the data layer of that endpoint."
      />

      <h2 id="channel" className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]">
        Sharing is a morph, not an upload
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The data source is owned by the user who controls the endpoint and has registered
        it against the endpoint ghost. By <TermHint id="morph">morphing</TermHint> that ghost against a secondary
        service, the owner gives read access. That access can be withdrawn.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        RTW does not natively persist data into the network space. Data is transformed
        into local data models along the linking path. A service that receives a morph
        may persist what it sees in its own local model. That is a service-owner choice,
        not a property of the architecture.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Consumption has a hard rule: data is received at an endpoint only when the ghosts
        at both ends are owned by the same user, or the receiver has approved read
        access. No common owner, no <TermHint id="data-channel">stream</TermHint>.
      </p>
      <DataChannelMorph />

      <Figure
        src="/blog/join/live-channel.png"
        alt="Linking-path diagram from a source endpoint through morph steps into a user ghost data channel."
        caption="Figure 4. Each hop morphs into a local model. The channel is personal: it is that user’s ghosts, not a shared dump."
      />

      <h2 id="alive" className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]">
        Stay alive, then leave cleanly
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The current implementation builds the stateful connection on TCP/IP and uses
        HTTPS and websocket. An endpoint can connect with native TCP and send or receive
        XML or JSON. Default is XML. A synx command can switch format at runtime without
        dropping the connection, if another client has domain ownership.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        To send data, the endpoint refreshes the SynxPass token every three minutes.
        Access can be revoked at a token revocation endpoint. Sessions can be terminated
        through Synx runtime BIOS.
      </p>

      <h2 id="faq" className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]">
        FAQ
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Direct answers first. Where the source is silent, this page says so instead of
        filling the gap.
      </p>

      <div className="mt-6 border-t border-[var(--line)]">
        <Faq
          question="Who refreshes the three-minute token? Do I have to do that myself?"
        >
          <p>
            The source says the endpoint needs to refresh the token every three minutes
            to send data. It does not say a person sits there and taps a button on a
            website.
          </p>
          <p className="mt-3">
            Endpoint here means the connected participant: a device, app, service, or
            agent that is sending. RealTimeWeb.org does not refresh anything for you.
            Whether Synx BIOS, a local client, or some other runtime does the refresh
            automatically is not specified in the current source. That answer belongs in
            Synx Pass documentation.
          </p>
        </Faq>
        <Faq question="Do I create an account on this website?">
          <p>
            No. This site is for understanding the architecture. Joining happens on{" "}
            <TermHint id="morph-space">Morph.Space</TermHint>. Operating the connection
            happens with <TermHint id="synx">Synx tools</TermHint>.
          </p>
        </Faq>
        <Faq question="Is Morph Space the same as Real Time Web?">
          <p>
            No. Real Time Web is a network concept and architecture. Morph Space is a
            commercial platform and reference implementation that lets people and
            organizations join and use the network.
          </p>
        </Faq>
        <Faq question="What is a ghost?">
          <p>
            A <TermHint id="ghost">ghost</TermHint> is the live stand-in for one network
            resource. One endpoint maps to one ghost, both ways. Whoever owns the{" "}
            <TermHint id="ghostid">ghostId</TermHint> owns the data at that endpoint.
          </p>
        </Faq>
        <Faq question="What is a Morphic service?">
          <p>
            A <TermHint id="morphic-service">Morphic service</TermHint> is an application
            on MAD. When it is created, the service owner is the primary owner of
            allocated ghosts. After you confirm a transfer, you own the data layer. The
            service still owns the application layer.
          </p>
        </Faq>
        <Faq question="Who owns my data after I join a service?">
          <p>
            The data source is owned by the user who controls the endpoint and has
            registered it against the endpoint ghost. When you register, the service
            owner transfers the ghostid. When you confirm, the data layer belongs to you.
            The application layer remains with the service owner, who has a local copy.
          </p>
        </Faq>
        <Faq question="Where is data stored?">
          <p>
            Data is not natively stored in the RTW network. It is morphed into local data
            models along the linking path. A service owner may persist what they receive
            in their own context. The network itself is not a database.
          </p>
        </Faq>
        <Faq question="How is access authorized?">
          <p>
            Morph Space uses Synx Pass for authorization. After SynxPass registration,
            a user may participate in RTW and join services by getting access to ghosts.
          </p>
        </Faq>
        <Faq question="Can I take access back after I share?">
          <p>
            Yes. Morphing a ghost against a secondary service gives that service read
            access. The owner can withdraw that access. Data is consumed at an endpoint
            only when both ends have a user who owns or has read access to the data.
          </p>
        </Faq>
        <Faq question="How is access revoked or a session ended?">
          <p>
            Access can be revoked using a token revocation endpoint. Time-based
            revocation policies have been set. Terminating user sessions can be activated
            through Synx runtime BIOS.
          </p>
        </Faq>
        <Faq question="Do I need an existing website domain?">
          <p>
            Not answered in the current source. Morph.Space FAQs still pending include:
            whether you need an existing domain name, whether you can register an RTW
            domain through Morph Space, whether you can connect a domain you already
            own, how long setup takes, and whether you need technical experience.
          </p>
        </Faq>
      </div>

      <h2 id="honest" className="mt-14 border-t border-[var(--line)] pt-8 text-[1.35rem] font-medium tracking-tight text-[var(--ink)]">
        What this page will not invent
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Morph.Space joining FAQs are still unanswered in the source: exact screens,
        whether you need an existing public domain, whether Morph registers an RTW
        domain for you, setup duration, and how an organization assigns multiple
        administrators. Until those are written, a fake walkthrough would be fiction.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The specification-shaped version of this map, with the same diagram, lives in
        documentation.
      </p>
      <p className="mt-8">
        <Link href="/docs/introduction/onboarding" className="text-[var(--accent)]">
          Open How a user joins in the documentation →
        </Link>
      </p>
      <p className="mt-3">
        <a href="https://morph.space" rel="noreferrer" className="text-[var(--accent)]">
          Participate on Morph.Space →
        </a>
      </p>
      <div className="mt-14 border-t border-[var(--line)] pt-8">
        <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          ← All essays
        </Link>
      </div>
    </div>
  );
}
