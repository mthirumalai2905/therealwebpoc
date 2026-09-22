import Link from "next/link";
import Image from "next/image";
import { TermHint } from "@/components/TermHint";
import { Figure } from "@/components/Figure";
import { VideoEmbed } from "@/components/VideoEmbed";
import { UmbrellaInherit } from "@/components/diagrams/UmbrellaInherit";
import { UmbrellaSignals } from "@/components/diagrams/UmbrellaSignals";
import { UmbrellaReturn } from "@/components/diagrams/UmbrellaReturn";
import { ContributorInvite } from "@/components/blog/ContributorInvite";

export function SmartUmbrella() {
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
        This is an umbrella. It looks like an umbrella. The brain is not in the handle.
        The brain is whichever service you attach it to.
      </p>

      <VideoEmbed
        videoId="ITY5MawEM7Q"
        title="Real Time Web Demo - Smart Umbrella"
        caption="Watch the demo. The umbrella inherits the service you add it to."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        In the recording, Paal Kristian Levang walks through a closed black umbrella in a
        workshop. A map is already open behind the object. He is not showing a gadget
        with a weather app burned into the handle. He is showing a live{" "}
        <TermHint id="endpoint">endpoint</TermHint>. The object stays an umbrella. The
        service supplies the property.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That distinction is the whole article. Most “smart” products ship with one job
        sealed in. You buy a weather umbrella, or you do not. Real Time Web treats the
        object as a body that can inherit a mind. The mind can be changed. The body does
        not have to be replaced.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        The brain is chosen, not installed
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        How the umbrella works depends on which services you add it to. Attach it to a
        weather service and it becomes a weather object. Attach it to something else and
        the same hardware inherits a different job. You can change the linking anytime.
        You are not flashing firmware. You are changing which{" "}
        <TermHint id="morphic-service">Morphic service</TermHint> the umbrella is
        registered against.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        In the demo the buttons are a teaching shortcut. Each button stands for a
        different service sending a message to the same object. Press one and the
        umbrella turns blue. Press another and it turns white. The point is not the
        button. The point is that a live service, somewhere else on the network, is
        allowed to speak, and the umbrella is allowed to answer.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That is the Real Time Web move. Intelligence is defined on the network. The
        physical thing only has to stay connected and report what it can sense. If you
        later attach it to a door service, or a television service, you have not bought a
        new umbrella. You have given the same endpoint a new context.
      </p>

      <UmbrellaInherit />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Weather first
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        For the demo the umbrella is added to a weather service. When that service says
        it is raining, a message reaches the umbrella and the umbrella turns blue. Blue
        means: take it with you. When the service reports lightning and thunder, the
        umbrella turns white.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The colour is not a setting stored in the handle. It is a live message. The
        weather service speaks. The umbrella answers by changing state. If the service
        goes quiet, or the owner withdraws the link, the colour has no meaning left. The
        canopy is still fabric. The handle is still a handle.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        A stored weather app would keep yesterday’s forecast on the device. This
        umbrella does not need yesterday. It needs the current grant. That is why the
        demo can switch behaviours in the room without opening the object or installing
        another program on it.
      </p>

      <UmbrellaSignals />

      <Figure
        src="/blog/rtw-anime-02-rain-neon-alley.png"
        alt="A wet night street under a gold lattice in the rain."
        caption="Rain is a live condition. The umbrella only needs to hear it."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        It talks back
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        This is not a one-way alert. When the umbrella is opened, it appears on the map.
        It tells the weather service: it is raining here. The object is a sensor as well
        as a display. The network is holding a live place, not a photograph of a place.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        It can also sense rain hitting the canopy and count the drops. From that count
        you can estimate how hard it is raining at that exact stand. That number can go
        back to the weather station. The station is not polling a stored dump. It is
        hearing a live source.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That return path matters. A thing that only receives orders is a remote control
        target. A thing that can report is a participant. The umbrella does both. The
        service can say “rain.” The umbrella can say “here, this hard, now.”
      </p>

      <UmbrellaReturn />

      <Figure
        src="/blog/rtw-film-03-port-fog.png"
        alt="A fogged harbour with a gold sphere above the cranes."
        caption="A live place has a counterpart on the network. The umbrella is one more source."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Then attach it to anything else
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The same umbrella can be added to other services. In the demo a nearby-date
        service turns it red: someone you might meet is close. The umbrella can open a
        door. It can change the channel on a television. There is no hard limit on how
        many services it can provide activity for, only the physical limit of what an
        umbrella can sense and signal.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        A door service does not need the umbrella to grow a lock. It needs a live grant
        and a way for the object to send a simple act. A television service does not need
        a screen in the handle. It needs a channel of events. The body stays modest. The
        network supplies the rest.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That is the same rule as the shoe that becomes a keyboard. The object stays
        itself.{" "}
        <TermHint id="morph">Morphing</TermHint> into another service grants that
        service a shape of the data. Withdraw the morph and that brain goes dark. The
        umbrella is still an umbrella.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Two different people do not open each other’s umbrella because they share an
        implementation. Read access is a morph. Ownership is a transfer, and a transfer
        has to be confirmed. The demo shows the happy path: one owner, one object,
        several services taking turns as the brain.
      </p>

      <Figure
        src="/blog/rtw-theme-06-forest-iot.png"
        alt="A night forest and river joined by a thin living network of light."
        caption="Any live thing can join. The service names what it is allowed to mean."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        What the object can and cannot be
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The umbrella cannot become a telescope. It cannot become a stove. The virtual
        property has to fit inside the physical limit: a canopy that can change colour, a
        handle that can be opened or closed, sensors that can feel rain, a radio that can
        stay on.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        Inside that limit the range is wide. Colour is a message. Open is a location.
        Drops are a rate. A nearby person is a match. A door is an act. None of those
        jobs require the manufacturer to guess every future use and solder it in at the
        factory.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That is why Paal calls it the world’s smartest umbrella in the recording. Not
        because the handle contains a large model. Because any service online can become
        its brain, and you can change that brain without replacing the object.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Why this is Real Time Web
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        WWW was built to request a document and get it back. This umbrella is a live
        resource. It has one <TermHint id="ghost">ghost</TermHint>. The person holding
        it is not the ghost. The umbrella is the endpoint. The ghost is the live
        stand-in so weather, map, and owner can observe authorized updates without one
        party owning the whole stack.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The four layers of{" "}
        <TermHint id="mad">Morphic Architecture Design</TermHint> stay separable here.
        The radio and the sensors are infrastructure. Identity and the grant sit in
        network and security. The weather or date logic is application. The owner of the
        umbrella decides whether those services may keep reading. A change in one layer
        does not have to redefine the whole relationship.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        That is how Real Time Web treats objects. Not a smarter product line. A network
        where a thing can inherit a service, speak back, and change its brain without
        becoming a different object.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The recording is the shortest proof. Watch it, then read{" "}
        <Link href="/blog/smart-shoes" className="text-[var(--accent)]">
          Smart shoes
        </Link>{" "}
        if you want the same idea on a different body.
      </p>

      <p className="mt-10 text-[15px] leading-7 text-[var(--muted)]">
        This page explains a public demo of the architecture. It is not a product
        signup. Anyone can develop an implementation of Morphic Architecture Design.
      </p>

      <ContributorInvite />

      <div className="mt-14 border-t border-[var(--line)] pt-8">
        <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          ← All articles
        </Link>
        <span className="mx-3 text-[var(--muted)]">·</span>
        <Link
          href="/blog/smart-shoes"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]"
        >
          Smart shoes →
        </Link>
      </div>
    </div>
  );
}
