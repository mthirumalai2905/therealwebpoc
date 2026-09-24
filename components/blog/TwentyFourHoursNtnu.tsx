import Link from "next/link";
import { TermHint } from "@/components/TermHint";
import { Figure } from "@/components/Figure";
import { VideoEmbed } from "@/components/VideoEmbed";
import { HackathonCompare } from "@/components/diagrams/HackathonCompare";
import { PocShape } from "@/components/diagrams/PocShape";
import { HackathonDomains } from "@/components/diagrams/HackathonDomains";
import { ContributorInvite } from "@/components/blog/ContributorInvite";

export function TwentyFourHoursNtnu() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-12 md:px-0">
      <p className="text-[18px] leading-8 text-[var(--ink)]">
        A proof of the Real Time Web is not a slide. It is one live service: a source
        that still moves, an owner, a{" "}
        <TermHint id="data-channel">channel</TermHint> that is open, and something that
        reacts while people are still in the room. That is the test this page is about.
      </p>

      <VideoEmbed
        videoId="kNWXCyiSVxM"
        title="Brain x Nornir Hackathon at NTNU 2023"
        caption="The recording is the evidence. Watch the room. Then read the claim around it."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The recording is titled Brain x Nornir Hackathon at NTNU 2023. It is a student
        room, not a product launch. This site treats the video as the primary source for
        what happened that weekend. The written summary that travels with it is a
        separate thing, and it is treated as an account, not as independently verified
        history.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That written account says more than a hundred AI master’s students at NTNU built
        services across healthcare, logistics, IoT, and games. Many of them built more
        than one. After twenty-four hours they presented live on stage, with the
        services still running. This page does not invent a student count, a timetable,
        or a list of winning teams beyond that sentence. If you want the room, watch the
        recording.
      </p>

      <Figure
        src="/blog/rtw-anime-15-infinite-library.png"
        alt="An infinite library of shelves under a gold lattice of light."
        caption="A weekend is enough only if the channel is already there."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        What the comparison actually is
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The same written account adds a contrast. A few months earlier, it says, the
        same students ran a hackathon on Microsoft’s IoT platform. They could not finish
        working services. The presentations became PowerPoint. At the NTNU weekend, the
        account says, they finished and showed the work live.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That is a compelling story. It is also a self-reported story. Nothing in the
        public corpus this site uses (the architecture notes, the published pages, an
        independent write-up) confirms the Microsoft weekend, the student count, or the
        claim that every team finished. There is no NTNU-published comparison cited
        here, and no journalist account. The one primary object you can inspect is the
        recording above.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        So this page will not say it was the first time in hackathon history that every
        student finished. It will not say a vendor lost and a network won. It will say
        what the architecture actually claims, which is smaller and more useful: if a
        live channel already exists, twenty-four hours can be a service. If the weekend
        is spent standing up the stack, twenty-four hours is a slide.
      </p>

      <HackathonCompare />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Why a weekend only works with a channel
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Most IoT weekends are integration weekends. Students spend the first day on
        identity, a device registry, a cloud project, a dashboard, and the glue between
        them. The object they wanted to build waits. By the time the stack is almost
        standing, the clock is gone. A slide is what you can still finish.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The Real Time Web model assumes the opposite order. The{" "}
        <TermHint id="endpoint">endpoint</TermHint> already has a{" "}
        <TermHint id="ghost">ghost</TermHint>. The ghost already has an owner. A{" "}
        <TermHint id="morphic-service">Morphic service</TermHint> can allocate more
        ghosts and link them into a channel. The weekend is not “invent the network.”
        The weekend is “name a job and keep it live.”
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That is why NTNU-style proofs, as this site describes them for teammates, assume
        an existing channel platform. Without one, you mock the model. You do not claim
        you reverse-engineered a toolchain from a brochure. You also do not treat a
        chatbot wrapper, a stored inbox, or a multi-tenant registry as a Real Time Web
        proof. Those can look busy. They are not a live relationship.
      </p>

      <PocShape />

      <Figure
        src="/blog/rtw-voxel-02-builders.png"
        alt="Blocky figures assembling a gold lattice structure together."
        caption="Many rooms. One shape of proof: owner, channel, effect."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Same architecture. Different rooms.
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The account names four industrial rooms: healthcare, logistics, IoT, and games.
        That list is useful because it is ordinary. The architecture is not a vertical.
        A live reading a clinician can act on, a moving source a warehouse can follow, a
        sensor that stays a sensor, a game that stays open while people are still in it:
        those are the same four layers with different owners on them.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        <TermHint id="mad">Morphic Architecture Design</TermHint> splits
        infrastructure, network and security, domain and application, and resource
        ownership so a change in one layer does not have to redefine the whole
        relationship. A student team can own the application they wrote for the
        weekend. The person or device that generates the resource can still own the
        data. Those do not have to be the same party.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Two different people do not open each other’s data because they share a
        weekend, a campus, or an implementation. Read access is a{" "}
        <TermHint id="morph">morph</TermHint>. It can be withdrawn. Ownership is a
        transfer, and a transfer has to be confirmed. The consume rule in the draft
        notes is still the same: data is consumed when the ghosts at the ends are owned
        by the same user, or the receiver has approved read access. Same user usually
        means one person, two of their endpoints. Not two strangers who sat at the same
        table.
      </p>

      <HackathonDomains />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        What “finished” has to mean
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Finished, on this site, is a ninety-second clip: a named service is live, a
        source changes, something reacts without a batch job. Optionally a second
        consumer arrives through a morph, then goes dark when the morph is withdrawn.
        The first service still works. That is the demo moment. A deck that describes
        the same idea is not the same moment.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The written account says the NTNU students reached that kind of finish, and
        that many of them reached it more than once in a day. Watch the recording
        before you treat that as more than an account. If the stage shows live
        services, that is the interesting fact. If some teams are still on slides, that
        is also a fact. This page will not paper over either.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The architecture point survives either way. Real Time Web is not a replacement
        for the Internet and not a new World Wide Web. WWW connects documents. This
        work is for live, stateful relationships on top of and alongside the existing
        Internet. A weekend is a good place to see whether that sentence is operational
        or only rhetorical.
      </p>

      <Figure
        src="/blog/rtw-voxel-03-overworld-nether-bridge.png"
        alt="A blocky bridge joining two worlds under a gold sky."
        caption="A handshake is a live grant. A slide is a description of one."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        How far this page goes
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The written account names a toolchain used at that event. A toolchain can
        configure and secure a service. It is not the architecture, and it is not the
        only way to run one.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        A student weekend is one place the idea was tested in a room. The recording is
        public. The comparison to an earlier IoT weekend remains the account of the
        people who ran this one.
      </p>

      <p className="mt-10 text-[15px] leading-7 text-[var(--muted)]">
        This page follows the published recording of the 2023 NTNU hackathon and the
        written account that travels with it. Claims about student numbers, completion
        rates, and an earlier Microsoft IoT weekend are attributed to that account.
        They are not independently verified in the corpus this site uses. Watch the
        video for the room itself.
      </p>

      <ContributorInvite />

      <div className="mt-14 border-t border-[var(--line)] pt-8">
        <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          ← All articles
        </Link>
        <span className="mx-3 text-[var(--muted)]">·</span>
        <Link
          href="/blog/playing-with-oranges"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]"
        >
          How many oranges are left? →
        </Link>
      </div>
    </div>
  );
}
