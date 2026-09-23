import Link from "next/link";
import { TermHint } from "@/components/TermHint";
import { Figure } from "@/components/Figure";
import { VideoEmbed } from "@/components/VideoEmbed";
import { WifiScanFlow } from "@/components/diagrams/WifiScanFlow";
import { WifiTwoWindows } from "@/components/diagrams/WifiTwoWindows";
import { WifiCeiling } from "@/components/diagrams/WifiCeiling";
import { ContributorInvite } from "@/components/blog/ContributorInvite";

export function ScanWifi() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-12 md:px-0">
      <p className="text-[18px] leading-8 text-[var(--ink)]">
        A cheap board. A blink. A list that is still moving. That is the whole
        demonstration. The architectural point is not the chip. It is that a scan can
        enter a channel while the radio is still listening.
      </p>

      <VideoEmbed
        videoId="qTqAjzxFzhc"
        title="Scan and post WiFi networks to RTW"
        caption="Watch the bench. The LED blinks. Two windows move together."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The recording is titled Scan and post WiFi networks to RTW. The setup is small
        on purpose. A tiny ESP8266 sits on the bench, the kind of Wi‑Fi unit you can buy
        for almost nothing. It is programmed to join one router, then scan for the
        others around it. What it finds is not stored as a report for later. It is
        posted onto the Real Time Web as a live list: SSID names and signal strength.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Watch the room. The rest of this note is what the architecture is doing while
        the LED blinks.
      </p>

      <WifiScanFlow />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        What the board is allowed to know
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The ESP8266 is an <TermHint id="endpoint">endpoint</TermHint>. It can associate
        with a network, listen for other networks, and report a few numbers about each
        one. It cannot tell you a floor plan. It cannot tell you that a router is old.
        It can tell you a name and a strength, right now. Whatever service you attach
        this <TermHint id="ghost">ghost</TermHint> to, no service can invent a reading
        the radio never captured.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The imprecision is honest, the same way a light sensor counting oranges is
        honest. One physical limit. One live signal. Meaning comes later, if anyone is
        allowed to listen.
      </p>

      <WifiCeiling />

      <Figure
        src="/blog/rtw-theme-09-turbine-nodes.png"
        alt="Gold turbine nodes standing in a dark field."
        caption="The board stays a scanner. Place it somewhere else and it is still a scanner."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        One blink is one cycle
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        In the recording they reboot the board. A blue LED comes on. The serial window
        shows the boot, the join to its own Wi‑Fi, then the scan. A list of nets appears
        with signal strength. The board posts that list. For every blink after that, it
        has scanned again and posted again.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Put the same board on a battery and it can sit somewhere in a building instead
        of on a bench. The hardware does not change. The place changes. The list keeps
        updating.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The spoken account in the video offers a use: watch routers as they weaken, or
        notice when something in the room is wrong. That is a teaching case, not a
        product. This site does not sell a site-survey kit.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Two windows. The same moment.
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The interesting cut is not the list. It is the two terminals left open at once.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        One window is wired to the board. It writes when the LED blinks. The other
        window is the Real Time Web side of the same update, reached over the network.
        The narrator’s point is that they move together. The scan is not saved, emailed,
        then refreshed. The present on the bench and the present on the other end are
        the same present.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That is what “post” means in this demo. It is not a form submission into a
        database you poll later. It is an endpoint updating its ghost so a{" "}
        <TermHint id="data-channel">data channel</TermHint> can carry the new list
        while the board is still scanning.
      </p>

      <WifiTwoWindows />

      <Figure
        src="/blog/rtw-launch-05-grid-goes-live.png"
        alt="A city grid lighting up as the network comes live."
        caption="The bench and the other window are not two copies. They are one live update."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        The building drawing is not in the video
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The recording says this data can later be mapped into a drawing of a building,
        with signal strength shown on a diagram. That sentence is a possible next
        service, not something the clip itself shows. What you see is a board, an LED,
        and two live lists. This page will not pretend a floor-plan UI was demonstrated.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        If someone later <TermHint id="morph">morphs</TermHint> the same ghost into a
        map service, the board still only knows SSIDs and strength. The map is a local
        model. Withdraw the morph and the map goes dark. The board keeps blinking.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Why a cheap scanner is enough
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The umbrella inherits a weather service. The bowl reports light. This board
        reports the radio around it. The pattern is the same.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        A <TermHint id="morphic-service">Morphic service</TermHint> can take that list
        into a channel. Another service can read it only if the owner morphs the ghost,
        or if the same person owns both ends. Two people in the same building do not
        see the scan because they share a Wi‑Fi name. Read access is a grant. It can be
        taken back.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The board does not know who is listening. A maintenance view could watch
        strength drop. A second scanner on another floor could join the same kind of
        channel. Or nothing listens, and the LED still blinks.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The job is not burned into the chip. The chip stays a scanner. The service names
        the meaning under that ceiling.
      </p>

      <Figure
        src="/blog/rtw-cyberpunk-10-antenna-farm.png"
        alt="A farm of antennas on a dark ridge, dishes aimed at the sky."
        caption="One honest radio is enough, if the link is live and authorized."
      />

      <p className="mt-10 text-[15px] leading-7 text-[var(--muted)]">
        This page follows what is said and shown in the recording. It does not invent a
        protocol, a floor-plan product, or an account you create on this site. Watch the
        video for the bench itself. Anyone can develop an implementation of{" "}
        <TermHint id="mad">MAD</TermHint>.
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
