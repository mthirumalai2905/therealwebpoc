import Link from "next/link";
import Image from "next/image";
import { TermHint } from "@/components/TermHint";
import { Figure } from "@/components/Figure";
import { VideoEmbed } from "@/components/VideoEmbed";
import { BowlSense } from "@/components/diagrams/BowlSense";
import { BowlLimit } from "@/components/diagrams/BowlLimit";
import { BowlChannels } from "@/components/diagrams/BowlChannels";
import { ContributorInvite } from "@/components/blog/ContributorInvite";

export function PlayingWithOranges() {
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
        </div>
      </div>

      <p className="text-[18px] leading-8 text-[var(--ink)]">
        Not every demonstration of a new architecture has to be complicated. One of the
        simplest Real Time Web prototypes is a bowl, a handful of oranges, and a single
        light sensor. The question is small: how many oranges are left? The architectural
        point is not.
      </p>

      <VideoEmbed
        videoId="O0INc6pvrUc"
        title="Playing with Oranges - Real Time Web"
        caption="Watch the demo. The bowl reports light. The network does the rest."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The recording is titled Playing with Oranges. The account of the setup is
        simple. The bowl is fitted with one sensor: a light sensor. That is the entire
        hardware. Someone takes an orange. The light hitting the sensor changes. From
        that one intensity reading, a service estimates how many oranges remain.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        It is a rough estimate, not a precise count. The documented setup does not use
        computer vision or a scale. It infers a remainder from a single number. The
        imprecision is the point.
      </p>

      <BowlSense />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        A deliberately limited sensor
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The bowl shows something the architecture treats as first class. An{" "}
        <TermHint id="endpoint">endpoint</TermHint>'s intelligence is capped by its own
        physical properties. A light sensor can only ever tell you about light. It cannot
        tell you a colour, a weight, or a shape. Whatever service you connect this bowl's{" "}
        <TermHint id="ghost">ghost</TermHint> to, no service can conjure information the
        sensor never captured.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That sounds like a limitation, and it is one. It is also an honest one. The Real
        Time Web does not pretend a cheap sensor becomes precise once it is on the
        network. What the network does is take that one honest, low-resolution signal and
        make it usable by anything downstream that is allowed to link to it.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The same rule showed up with a temperature element that can stand in as a switch,
        and with an umbrella that can only change colour, open, and feel rain. The body
        sets the ceiling. The service names the meaning under that ceiling.
      </p>

      <BowlLimit />

      <Figure
        src="/blog/rtw-theme-07-observatory.png"
        alt="A ridge of dishes under a gold lattice sphere at night."
        caption="One honest signal is enough, if the link is live and authorized."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Where the reading actually goes
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Once the bowl updates its own ghost with a new light reading, that reading
        becomes available to whatever service has linked to it. The written description
        is direct: the update becomes data that can enter various{" "}
        <TermHint id="data-channel">data channels</TermHint> for those who have an
        interest in knowing this.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That sentence is open on purpose. The bowl does not know or care who is
        listening. A household view could show oranges remaining. A restock watch could
        notice when the remainder drops. A shared kitchen could collect more than one
        bowl. Or nothing listens, if no service currently has an active link.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The bowl’s job ends at here is my light reading. Everything past that (what the
        number means, what action it triggers, who may see it) is decided by the linking
        path, not by the bowl. Those later uses are teaching cases. They are not a
        product list, and this site does not sell any of them.
      </p>

      <BowlChannels />

      <Figure
        src="/blog/rtw-cyberpunk-05-market-stalls.png"
        alt="A night market aisle with hanging lamps and a crowd in silhouette."
        caption="The bowl does not shop. A linked service may care that the bowl is emptying."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        The link can change. The bowl does not.
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        This is the same principle the umbrella demo makes with more sensors and more
        services attached. The bowl states it more plainly because there is less going
        on. A device’s usefulness is not fixed at manufacturing time. It is fixed by
        whatever it happens to be linked to right now. That can change without touching
        the device.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        A light sensor counting oranges today could, tomorrow, be used as a rough
        occupancy proxy, or as a shelf-restocking trigger, without a firmware update and
        without new code on the bowl. The owner{" "}
        <TermHint id="morph">morphs</TermHint> the ghost into another{" "}
        <TermHint id="morphic-service">Morphic service</TermHint>. Withdraw the morph and
        that service goes dark. The bowl still sits on the table.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Two different people do not open the bowl’s reading because they share an
        implementation. Read access is a morph. Ownership is a transfer, and a transfer
        has to be confirmed. The person who eats an orange is not the ghost. The bowl is
        the endpoint.
      </p>

      <Figure
        src="/blog/rtw-print-03-harbor-sun.png"
        alt="Three dark sails under a gold sun, a pier reaching into the water."
        caption="Change the heading and the same hull goes somewhere else. The bowl stays a bowl."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Why a small demo is enough
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The umbrella shows inheritance with colour, a map, and a return path. The shoe
        shows a body that can become a keyboard. The bowl shows the floor under both:
        one honest sensor, one ghost, a channel that other services may join, and a
        physical limit the network is not allowed to lie about.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That is enough to teach{" "}
        <TermHint id="mad">Morphic Architecture Design</TermHint> without a factory
        floor. Watch the recording. Then read the umbrella if you want more services on
        the same idea, or the shoe if you want a different body.
      </p>

      <p className="mt-10 text-[15px] leading-7 text-[var(--muted)]">
        This page follows the written description of the Playing with Oranges demo and
        the architecture it sits on. Watch the video for the room itself. This is not a
        product signup. Anyone can develop an implementation of MAD.
      </p>

      <ContributorInvite />

      <div className="mt-14 border-t border-[var(--line)] pt-8">
        <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          ← All articles
        </Link>
        <span className="mx-3 text-[var(--muted)]">·</span>
        <Link
          href="/blog/smart-umbrella"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]"
        >
          Smart umbrella →
        </Link>
      </div>
    </div>
  );
}
