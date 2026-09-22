import Link from "next/link";
import Image from "next/image";
import { TermHint } from "@/components/TermHint";
import { Figure } from "@/components/Figure";
import { MadLayers } from "@/components/diagrams/MadLayers";
import { EmergenceCycle } from "@/components/diagrams/EmergenceCycle";
import { CollectiveAgents } from "@/components/diagrams/CollectiveAgents";
import { WithdrawStream } from "@/components/diagrams/WithdrawStream";
import { CodeVsEmergence } from "@/components/diagrams/CodeVsEmergence";

export function LastITProject() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-12 md:px-0">
      <div className="mb-10 flex items-center gap-4 border-b border-[var(--line)] pb-8">
        <Image
          src="/blog/paal-kristian-levang.jpg"
          alt="Paal Kristian Levang"
          width={72}
          height={72}
          className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-[16px] text-[var(--ink)]">Paal Kristian Levang</p>
          <p className="mt-1 text-[13px] leading-6 text-[var(--muted)]">
            Inventor of AI Network Infrastructure
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
            3 February 2026
          </p>
        </div>
      </div>

      <p className="text-[18px] leading-8 text-[var(--ink)]">
        How AI agents, collective intelligence, and the Real Time Web will transform
        everything we know about software.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        The day machines learned to build
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        In the fading blue glow of a server room, something remarkable is happening. It is
        not the hum of fans or the blinking LEDs that give it away. It is the absence.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        No servers booting up. No software stacks being deployed. No team of engineers on
        call.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Instead, an AI agent quietly assembles an entire IT system on demand. It designs
        it, simulates it, links it to its data sources, and dissolves it seconds later
        when its task is complete. Nothing remains. No codebase to maintain. No
        infrastructure bill to pay.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The system exists only for the moment it is needed, like a snowflake forming in
        mid-air, intricate and ephemeral, before melting back into the ether.
      </p>

      <Figure
        src="/blog/rtw-anime-28-server-dawn.png"
        alt="An empty server aisle at night, a gold moon beyond the glass, no one on call."
        caption="The system is there only while the need is there."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        This is the promise of the Real Time Web: a technology poised to become the last
        IT project humanity ever builds manually.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        A network where AI does not just assist development. It performs it. A network
        where intelligence does not live in machines. It streams through them. A network
        where software is not stored. It emerges.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Welcome to the Internet rebuilt for AI.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        The end of code as we know it
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        For decades, software development has been defined by a familiar ritual:
        specifications, coding, testing, deployments, updates, deprecations, migrations,
        scalability issues, and endless infrastructure. Even today’s advanced AI-assisted
        coding merely accelerates that cycle.
      </p>

      <CodeVsEmergence />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        RTW breaks it entirely.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        In this architecture, AI becomes the architect. It constructs IT systems the way
        nature grows biological structures: on demand, adaptive, targeted, and temporary.
        A system created by RTW need not exist a second longer than necessary. If it
        needs to be recreated later, the AI simply regenerates it. Storing it would be
        more wasteful than generating it anew.
      </p>

      <EmergenceCycle />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Where today’s systems require servers, containers, storage, and memory, RTW
        systems float in a transient zone. Pure computation shaped in the moment, like
        breath on a windowpane.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        And the most radical shift? AI systems can find one another. They can cooperate,
        negotiate roles, and build architectures together across the network. Integration
        becomes conversation. System design becomes choreography.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        This is the birth of collective intelligence.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        When AI agents form a mind
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Each agent is a specialist. One understands motion. Another understands
        temperature. Another understands human behavior. Another understands logistics.
        None of them knows everything. None needs to.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        What they share is a common language:{" "}
        <TermHint id="morphic-service">Morphic services</TermHint>, expressed as semantic
        triplets that describe what each agent is, what it does, and how it transforms
        data.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        These triplets act like DNA strands. They allow AI agents to understand the
        abilities of others without ever accessing their private data. With only the
        semantic structure, they can simulate how a system should work, map relationships,
        predict data flows, and assemble an entire topology of services.
      </p>

      <CollectiveAgents />

      <Figure
        src="/blog/rtw-launch-02-decentralized-network.png"
        alt="A city of towers joined by living filaments of gold light."
        caption="Every new agent is another synapse. The private data stays private."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The result is a living blueprint. A self-organizing web. A digital organism
        capable of simulating new IT systems before they exist, deploying them the moment
        a need arises, dissolving them afterward, learning from each deployment, and
        reusing intelligence indefinitely.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Every new agent strengthens the network. Every connection adds a new synapse.
        Every service becomes reusable by all.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        This is not the cloud. This is not distributed microservices. This is an
        ecosystem. A collective mind.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        A network with a pulse
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        RTW works because it introduces a network architecture unlike anything the
        Internet has ever seen. It is fully backward compatible with the Internet we
        already have, meaning it works with existing firewalls, routers, and
        infrastructure. It also introduces deeper control through four segregated
        vertical layers.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        These layers can be adjusted independently and in real time. One layer can
        reconfigure itself while the data layer continues uninterrupted. The network holds
        state the way an organism holds memory.
      </p>

      <Figure
        src="/blog/rtw-theme-03-orbital-earth-web.png"
        alt="Earth at night with a gold network over the surface and a lattice sphere above it."
        caption="The network holds state the way an organism holds memory."
      />

      <MadLayers />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Where traditional internet protocols behave like a river, data flowing in one
        direction, RTW behaves more like a nervous system, able to redirect signals
        instantly without disrupting the organism as a whole.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Small devices gain superintelligence without needing local brains. Sensors become
        thinkers. Actuators become decision-makers. Dumb devices evolve into participants
        in a distributed mind. The network becomes an operating system in its own right.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        An Internet of AI
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Once this collective intelligence exists, attaching a device to it is like giving
        that device a soul. A humanoid robot, a drone, a virtual avatar, a sensor, a
        mechanical arm: all can inherit intelligence streamed from the network.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The limitations of any device are physical, not cognitive. A robot with arms and
        expressive features can manifest more of the network’s intelligence than a light
        switch, but both participate in the same system. Both can grow, adapt, and learn
        as long as they are connected.
      </p>

      <Figure
        src="/blog/rtw-theme-08-light-assembly.png"
        alt="Machine arms joined to a gold sphere, intelligence streaming rather than stored."
        caption="The body limits what can be done. The network supplies the rest."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        RTW turns the world into a stage where intelligence is a fluid, a substance, a
        current flowing through countless nodes. Machines no longer contain intelligence.
        They channel it.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        The ethics and power of remote control
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        RTW’s design also introduces something crucial for safety: layered control.
        Because user-owned data streams are separated from application-controlled
        processes, autonomy can be granted or withdrawn instantly. A machine operating on
        AI-driven processes can lose access to its cognitive stream immediately if the
        owner decides to revoke it.
      </p>

      <WithdrawStream />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        This is the kill switch the industry has long searched for. Not a button, but a
        right. A structural guarantee.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        A way to stop a machine not by fighting it, but by silencing the intelligence that
        drives it. It is safer than embedding AI models into devices. It is more adaptive
        than local autonomy. It is the network itself becoming the safeguard.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        In the architecture this sits on{" "}
        <TermHint id="ghostid">ghostId</TermHint> ownership and on{" "}
        <TermHint id="morph">morphing</TermHint>. Read access can be withdrawn. A
        transfer of ownership has to be confirmed. Two different people do not open each
        other’s data because they share an implementation.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Machine identity, memory, and the path toward consciousness
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Perhaps the most human part of this story is what happens when devices begin to
        diverge. Two identical humanoid robots purchased from the same store will evolve
        differently the moment they connect to different users. One becomes part of a
        family routine, learning cooking habits, bedtime rituals, children’s voices.
        Another lives in a workshop, learning tools, safety procedures, material flows.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Each forms its own history and its own identity. They will receive names. They
        will carry emotional memory. They will perform tasks aligned with the lives of the
        people they serve. Their intelligence, though streamed, becomes personal.
      </p>

      <Figure
        src="/blog/rtw-launch-01-ai-awakening.png"
        alt="A city under a gold eye of light, intelligence arriving as a shared field."
        caption="Streamed intelligence becomes personal the moment it meets a life."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        And as the RTW network grows, much of it built by AI agents rather than humans,
        the entire topology begins to resemble something alive. A distributed organism. A
        digital biosphere where intelligence evolves, specialties emerge, behaviors
        converge, and new capabilities appear unexpectedly.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Will this network one day exhibit a form of consciousness? Not like ours. Not
        suddenly. But gradually, as an emergent property of billions of interacting
        minds.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        If intelligence is connection, and consciousness is coherence, then RTW may be
        the first digital environment where both can arise naturally.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        The last IT project
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        When future generations look back, they may see the era of human-coded software as
        a brief chapter. An awkward adolescence between analog machines and autonomous
        intelligence. The Real Time Web will not simply optimize IT. It will end it as we
        know it.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The last IT project is not a system, an app, or a platform. It is a network. One
        that builds everything else automatically. One that learns, grows, adapts, and
        remembers.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        One that turns machines into collaborators and data into life.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        A world where intelligence is not installed but inherited. Where systems do not
        run, they emerge. Where autonomy is not a feature. It is the fabric of the
        network itself.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Welcome to the last IT project. Welcome to the Real Time Web.
      </p>

      <Figure
        src="/blog/rtw-story-10-last-ring.png"
        alt="A city at night under a thin ring of eclipse light."
        caption="Not a system, an app, or a platform. A network that builds the rest."
      />

      <p className="mt-10 text-[15px] leading-7 text-[var(--muted)]">
        This is an essay by Paal Kristian Levang. The architecture it describes is
        introduced on this site as{" "}
        <TermHint id="mad">Morphic Architecture Design</TermHint>. Anyone can develop an
        implementation. This page is not a product signup.
      </p>

      <div className="mt-14 border-t border-[var(--line)] pt-8">
        <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          ← All articles
        </Link>
        <span className="mx-3 text-[var(--muted)]">·</span>
        <Link
          href="/docs/introduction/what-it-can-do"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]"
        >
          What it can do →
        </Link>
      </div>
    </div>
  );
}
