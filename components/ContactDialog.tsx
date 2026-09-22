"use client";

import { useEffect, useId, useState } from "react";

export function ContactDialog() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company: honeypot }),
      });
      if (!response.ok) throw new Error("send failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setStatus("idle");
          setOpen(true);
        }}
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-[14px] font-medium text-[var(--on-accent)] transition-opacity hover:opacity-90"
      >
        Send a message
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80]">
          <button
            type="button"
            className="absolute inset-0 bg-black/55 backdrop-blur-md"
            aria-label="Close contact form"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute inset-x-4 top-[12vh] mx-auto max-w-md border border-[var(--line)] bg-[var(--bg-elev)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
              Contact
            </p>
            <h2 id={titleId} className="mt-2 text-[1.25rem] text-[var(--ink)]">
              Send a message
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-[var(--muted)]">
              Architecture questions only. This is not a product signup.
            </p>

            {status === "sent" ? (
              <div className="mt-6">
                <p className="text-[15px] leading-7 text-[var(--ink)]">Message received. We will reply if a response is needed.</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-full border border-[var(--line)] px-4 py-2 text-[13px] text-[var(--ink)]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <label className="absolute left-[-9999px]" htmlFor="contact-company">
                  Company
                </label>
                <input
                  id="contact-company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  className="absolute left-[-9999px]"
                />
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    Name
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-1.5 w-full border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-[14px] text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-1.5 w-full border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-[14px] text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    Message
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="mt-1.5 w-full resize-y border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-[14px] text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                  />
                </label>
                {status === "error" ? (
                  <p className="text-[13px] text-[var(--warn)]">Could not send. Try again in a moment.</p>
                ) : null}
                <div className="flex items-center justify-end gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 text-[13px] text-[var(--muted)] hover:text-[var(--ink)]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-full border border-[var(--line)] bg-[var(--accent-dim)] px-4 py-2 text-[13px] text-[var(--ink)] disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending…" : "Send"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
