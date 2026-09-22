import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-dispatch.png"
            alt=""
            fill
            priority
            className="object-cover object-[center_48%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[820px] flex-col items-center px-5 pb-24 pt-28 text-center md:pt-32">
          <p className="font-mono text-[10px] tracking-[0.32em] text-white/45">THE REAL TIME WEB</p>
          <h1 className="font-serif mt-5 text-[2.6rem] leading-[1.08] tracking-[-0.03em] text-[#f2efe8] drop-shadow-[0_8px_28px_rgba(0,0,0,0.7)] md:text-[4.35rem]">
            The network worth
            <br />
            <em className="italic">owning</em>.
          </h1>
          <p className="mt-5 max-w-[32rem] text-[15px] leading-relaxed text-white/55 md:text-[16px]">
            A live web for people, devices, services, and ideas, where what you create stays
            yours, and the network keeps growing around it.
          </p>
          <Link
            href="/docs"
            className="mt-8 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-[13px] text-[#f2efe8] backdrop-blur-md transition-colors hover:border-white/40 hover:bg-black/55"
          >
            Read the documentation
          </Link>
          <Link
            href="/docs/introduction/two-webs"
            className="mt-4 font-mono text-[11px] text-white/40 hover:text-white/70"
          >
            Two webs walkthrough →
          </Link>
        </div>
      </section>
    </main>
  );
}
