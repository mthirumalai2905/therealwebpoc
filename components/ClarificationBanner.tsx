export function ClarificationBanner() {
  return (
    <div className="border border-[var(--line)] bg-[var(--bg-elev)] px-4 py-3 text-[13px] leading-relaxed text-[var(--muted)]">
      <p>
        RealTimeWeb.org is a standalone nonprofit site. It explains what the Real Time Web is, why
        it exists, and introduces Morphic Architecture Design (MAD).
      </p>
      <p className="mt-2">
        This site is not owned by a company. Anyone can develop an implementation of MAD or the
        Real Time Web.
      </p>
    </div>
  );
}
