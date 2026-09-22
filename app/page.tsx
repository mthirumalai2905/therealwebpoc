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
            className="object-cover object-[center_bottom] sm:object-[center_42%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent sm:from-black/45 sm:via-black/15" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[820px] flex-col items-center px-5 pb-10 pt-[max(5.5rem,calc(env(safe-area-inset-top)+4.25rem))] text-center md:pt-32">
          <div className="flex w-full max-w-[36rem] flex-col items-center">
            <p className="font-mono text-[9px] tracking-[0.28em] text-white/45 sm:text-[10px] sm:tracking-[0.32em]">
              THE REAL TIME WEB
            </p>
            <h1 className="font-serif mt-4 text-[2rem] leading-[1.1] tracking-[-0.03em] text-[#f2efe8] drop-shadow-[0_8px_28px_rgba(0,0,0,0.7)] sm:mt-5 sm:text-[2.6rem] sm:leading-[1.08] md:text-[4.35rem]">
              The network worth
              <br />
              <em className="italic">owning</em>.
            </h1>
            <p className="mt-4 max-w-[32rem] text-[14px] leading-relaxed text-white/55 sm:mt-5 sm:text-[15px] md:text-[16px]">
              A live web for people, devices, services, and ideas, where what you create stays
              yours, and the network keeps growing around it.
            </p>
            <Link
              href="/docs"
              className="mt-6 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-[13px] text-[#f2efe8] backdrop-blur-md transition-colors hover:border-white/40 hover:bg-black/55 sm:mt-8"
            >
              Explore Real Time Web
            </Link>
            <Link
              href="/docs/introduction/two-webs"
              className="mt-3 font-mono text-[11px] text-white/40 hover:text-white/70 sm:mt-4"
            >
              Two webs walkthrough →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
