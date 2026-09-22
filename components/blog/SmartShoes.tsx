import Link from "next/link";
import Image from "next/image";
import { TermHint } from "@/components/TermHint";
import { Figure } from "@/components/Figure";
import { ShoeInherit } from "@/components/diagrams/ShoeInherit";
import { ShoeKeyboard } from "@/components/diagrams/ShoeKeyboard";
import { ShoeManyServices } from "@/components/diagrams/ShoeManyServices";
import { ContributorInvite } from "@/components/blog/ContributorInvite";

export function SmartShoes() {
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
        We humans are slipping more and more into the virtual world, and machines are
        slipping more and more into the physical world. At present there is a silent
        fusion of the two. If development continues at this pace, we will not notice the
        difference: whether we are part of a virtual application, or whether things that
        happen in the physical world happen by natural causes.
      </p>

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        A shoe that never goes offline
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        Today we may develop shoes equipped with movement sensors, self-sustained by
        harvesting energy from the steps we take. Energy capture is high enough that the
        shoe never requires a manual recharge, and it can communicate in real time to the
        rest of the world over the Internet.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        One day you go to the store and buy a pair. You can sign them into optional
        services online. The shoe inherits characteristics of the service you are using.
        The shoe itself ensures that the service is updated with data that fits the
        context structure of that service.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The shoe is always connected by some radio technology. It is constantly online.
        If anyone looks you up, they can see you walking on a virtual map in full real
        time.
      </p>

      <Figure
        src="/blog/smart-shoes-step.png"
        alt="A walking shoe on wet night pavement, a faint filament of light in the sole."
        caption="Harvest from the step. The shoe stays on."
      />

      <Figure
        src="/blog/smart-shoes-map.png"
        alt="A night street with a faint live map grid over the pavement."
        caption="The walk is physical. The map is a service attached to the shoe."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        Intelligence defined on the network
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        It is interesting, when studying these new sensors integrated into smart objects,
        that they can change properties, change behaviour, and adapt to surroundings. The
        smart objects get their intelligence and attributes defined on the web.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The user registers the smart object and attaches it to an online service. By
        doing this, it is the service that determines how the thing should work and what
        properties it will inherit.
      </p>

      <ShoeInherit />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        In the architecture this is a live{" "}
        <TermHint id="endpoint">endpoint</TermHint> with one{" "}
        <TermHint id="ghost">ghost</TermHint>. The shoe is the resource. The person is
        not the ghost. A <TermHint id="morphic-service">Morphic service</TermHint>{" "}
        supplies the behaviour.{" "}
        <TermHint id="morph">Morphing</TermHint> into another service grants that
        service a shape of the data. The owner can withdraw it.
      </p>

      <Figure
        src="/blog/smart-shoes-fusion.png"
        alt="People and wireframe figures walking the same wet street under a gold virtual overlay."
        caption="The walk is in the street. The property is defined on the network."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        The shoe becomes a keyboard
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The intelligent shoe you purchased can become a keyboard by signing it into a
        keyboard service. If the shoe is equipped with a motion sensor, different kinds
        of motion semantics can trigger a specific letter of the alphabet. When you move
        the shoe in a specific way, you write virtual letters. If you are good at it, you
        can move around and write “Hello World”.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        The shoe has suddenly become a keyboard. It still looks like a shoe. The property
        has changed to support keyboard features.
      </p>

      <ShoeKeyboard />

      <Figure
        src="/blog/smart-shoes-keyboard.png"
        alt="A dark shoe on a wooden floor, with faint letter-like light in the air above it."
        caption="It looks like a shoe. The service asked it to write."
      />

      <h2 className="mt-14 border-t border-[var(--line)] pt-8 font-serif text-[1.7rem] leading-tight text-[var(--ink)]">
        No limit on how the thing is used
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-[var(--ink)]">
        The same shoe can be enrolled in other services with other properties. There is
        no limit on how many different services the shoe can provide activity for, and
        there is no restriction on how the shoe is used.
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        When a physical thing has characteristics defined virtually, you get a world of
        intelligent sensors that can do almost anything within the virtual limit the
        physical thing gives.
      </p>

      <ShoeManyServices />

      <Figure
        src="/blog/smart-shoes-wearable.png"
        alt="A white glove floating beside a gold sphere in front of an Earth window."
        caption="A glove, a shoe, a sensor: the body limits what can be done. The service names the rest."
      />

      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        So what happens when smart little things can be used for anything, have access to
        the world’s computing power, and can change characteristics based on what you
        want and how you want to use them?
      </p>
      <p className="mt-6 text-[17px] leading-8 text-[var(--ink)]">
        In a space where the physical world becomes more virtual, and the virtual world
        becomes more physical, interesting possibilities arise. We have only seen the
        beginning of a new era in the human-machine relationship.
      </p>

      <p className="mt-10 text-[15px] leading-7 text-[var(--muted)]">
        This is an essay by Paal Kristian Levang. The architecture it describes is
        introduced on this site as{" "}
        <TermHint id="mad">Morphic Architecture Design</TermHint>. Anyone can develop an
        implementation. This page is not a product signup.
      </p>

      <ContributorInvite />

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
