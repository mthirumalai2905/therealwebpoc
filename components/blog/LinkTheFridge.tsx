import Link from "next/link";
import { TermHint } from "@/components/TermHint";
import { Figure } from "@/components/Figure";
import { VideoEmbed } from "@/components/VideoEmbed";
import { WwwVsRtw } from "@/components/diagrams/WwwVsRtw";
import { BodyAndBrain } from "@/components/diagrams/BodyAndBrain";
import { ThreeParticipants } from "@/components/diagrams/ThreeParticipants";
import { CollectiveAgents } from "@/components/diagrams/CollectiveAgents";
import { ContributorInvite } from "@/components/blog/ContributorInvite";

export function LinkTheFridge() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-12 md:px-0">
      <p className="text-[18px] leading-8 text-[var(--ink)]">
        The World Wide Web taught people to link a picture, a paragraph, and a video
        into a page. The recording that follows asks a smaller, sharper question: what
        if a fridge, a chair, or a bicycle could be linked the same way, while it is
        still a live object?
      </p>

      <VideoEmbed
        videoId="d2IRi_QVXUk"
        title="How AI powers the Real Time Web"
        caption="Watch the talk. The useful split is a live object, a body in the room, and a mind on the network."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The recording is a founder explainer of how AI powers the Real Time Web. It also
        names a company product. This page follows the idea that matters for the
        architecture: a live object, a body in the room, and a mind on the network.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        What is worth keeping from the talk is not the sales sentence. It is the split
        the speaker keeps returning to: documents on one side, live objects on the
        other. Intelligence on the network. A body in the room.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        A hyperlink was never enough for a fridge
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        A conventional hyperlink points from one resource to another. The page that
        holds the link knows where it goes. The target does not have to know who is
        pointing. That is enough for text and video. It is a poor model for a sensor
        that is still changing, or a bicycle that is still moving.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The Real Time Web is pitched, here and in the published notes, as live
        bidirectional relationships on top of and alongside the existing Internet. An{" "}
        <TermHint id="endpoint">endpoint</TermHint> (the fridge, the board, the bowl)
        has one <TermHint id="ghost">ghost</TermHint>. The ghost is the live stand-in
        for that resource, not a person and not an avatar. Other layers can observe
        authorized updates without one party owning the whole stack.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        When the speaker says any physical object can become linkable, that is the
        claim this site will defend: the object stays an object. A{" "}
        <TermHint id="morphic-service">Morphic service</TermHint> can attach a job to
        it. The job can change. The plastic does not have to be replaced.
      </p>

      <WwwVsRtw />

      <Figure
        src="/blog/rtw-theme-01-ghost-space.png"
        alt="A gold ghost-form standing in a dark hall of light."
        caption="Intelligence is not sealed in the object. It arrives over a live link."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        The internet as a brain is a teaching line
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The talk uses a short picture: the internet becomes the brain, the physical
        world becomes the body of a distributed mind. Keep that as teaching, not as
        mysticism. It is the same distinction the umbrella demo makes with a handle
        and a service, and the shoe demo makes with a sole and a keyboard.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The body can only ever report what it can sense and do what it can act. A
        fridge cannot become a map because someone attached a clever model. A cheap
        Wi‑Fi board cannot draw a building. An AI agent on the network can name a
        meaning under that ceiling, if the owner has allowed the link.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        <TermHint id="mad">Morphic Architecture Design</TermHint> is how those jobs
        stay separable. Infrastructure, network and security, domain and application,
        and resource ownership do not have to belong to one vendor. A change in the
        application layer does not have to redefine who owns the data at the
        endpoint.
      </p>

      <BodyAndBrain />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Collective does not mean everyone can see
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The speaker describes many kinds of artificial intelligence powering one
        network, and students sharing data until the room behaves like a collective
        brain. The architecture will meet that sentence halfway.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Independent services can sit on the same live sources. Specialists can act on
        a shared channel. That is useful. It is not a license. Two teams do not open
        each other’s data because they attended the same weekend, or because they
        share an implementation. Read access is a <TermHint id="morph">morph</TermHint>.
        It can be withdrawn. Ownership is a transfer, and a transfer has to be
        confirmed.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The student weekend is named in the talk as a test from a few weeks earlier.
        This site already treats that event as a recorded account, not as
        independently verified history. If you want the room, read{" "}
        <Link href="/blog/twenty-four-hours-at-ntnu" className="text-[var(--accent)]">
          Twenty-four hours at NTNU
        </Link>{" "}
        and watch that recording. This page will not restage it as proof that a
        product works.
      </p>

      <CollectiveAgents />

      <Figure
        src="/blog/rtw-metaverse-04-digital-twin.png"
        alt="A physical street and its live digital twin sharing one light."
        caption="Many services can share a live source. None of them own the planet."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Three jobs, one object
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The talk ends with a split this site can use. People who write intelligence.
        People who make electronics and sensors. People who choose which services
        their objects may join. Those are not three marketing personas. They are
        three ownership layers that must not collapse into one company login.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The consumer line is the one that usually gets lost. An object is not smart
        because a factory sealed a brain into it. It is available to a service
        because someone who owns the ghost said yes. That someone can say no later.
        The umbrella can drop the weather service. The Wi‑Fi board can stop posting
        into a map. The fridge can leave the channel.
      </p>

      <ThreeParticipants />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        What this page will not take from the tape
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The recording is also a company pitch: a series of tools, faster integration,
        lower cost, customers who finish in minutes. Those sentences belong to the
        speaker and the implementation they are describing. They are not Real Time
        Web specification. This site does not document those tools, name a store, or
        invite you to join one.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        AI, in the published model, is one kind of participant. An agent can be an
        endpoint. It can sit on a channel. It can act on live state. It does not
        replace ownership, and it does not make the network a single mind you log
        into. Speed is a hope. Architecture is the condition under which a fridge
        can be linked without becoming someone else’s dataset.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Watch the talk for the spoken picture. Then read the last IT project if you
        want the longer essay on agents, or the umbrella if you want the same idea
        in a room with an object.
      </p>

      <p className="mt-10 text-[15px] leading-7 text-[var(--muted)]">
        This page follows the spoken explainer and the architecture notes it
        overlaps. Product claims and speed-to-market sentences stay on the recording.
      </p>

      <ContributorInvite />

      <div className="mt-14 border-t border-[var(--line)] pt-8">
        <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          ← All articles
        </Link>
        <span className="mx-3 text-[var(--muted)]">·</span>
        <Link
          href="/blog/the-last-it-project"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]"
        >
          The last IT project →
        </Link>
      </div>
    </div>
  );
}
