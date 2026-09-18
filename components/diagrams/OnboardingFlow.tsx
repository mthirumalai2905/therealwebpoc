"use client";

import { useState } from "react";
import Link from "next/link";
import { FlowArrow, FlowDown } from "@/components/diagrams/FlowArrow";

const steps = [
  {
    id: "understand",
    title: "Understand the architecture",
    where: "RealTimeWeb.org",
    text: "RTW is the network model. This site explains principles, layers, and ownership. You do not join the live network here.",
    href: "/docs/introduction",
  },
  {
    id: "morph",
    title: "Arrive through Morph.Space",
    where: "Morph.Space",
    text: "Morph Space is the commercial platform and reference implementation. People and organizations join, establish domains, and publish resources there.",
    href: "https://morph.space",
  },
  {
    id: "identity",
    title: "Create an RTW identity",
    where: "SynxPass",
    text: "Morph Space uses Synx Pass for authorization. SynxPass is token-based. After registration, a user may participate in RTW and join services by getting access to ghosts.",
    href: "/docs/architecture/synxpass",
  },
  {
    id: "domain",
    title: "Establish a domain",
    where: "Morph.Space",
    text: "The Morph Space site plan includes registering or connecting a domain, then creating an RTW identity. Whether you must already own a public website domain is not answered in the current source.",
    href: "/docs/architecture/domains",
  },
  {
    id: "ghost",
    title: "Receive and confirm a ghost",
    where: "Service + user",
    text: "When a Morphic service is created, the service owner is the primary owner of allocated ghosts. When a user registers, the service owner transfers the ghostid. When the user confirms, the data layer of that ghost belongs to the user. The application layer stays with the service owner.",
    href: "/docs/architecture/ghost-space",
  },
  {
    id: "share",
    title: "Grant or withdraw access",
    where: "Your ghosts",
    text: "By morphing a ghost against a secondary service, the owner gives read access. That access can be withdrawn. Data is consumed at an endpoint only when ghosts at both ends are owned by the same user, or the receiver has approved read access.",
    href: "/docs/architecture/data-channels",
  },
  {
    id: "live",
    title: "Stay live on the channel",
    where: "Endpoint",
    text: "The endpoint needs to refresh the SynxPass token every three minutes to send data. Access can be revoked at a token revocation endpoint. Sessions can be terminated through Synx runtime BIOS.",
    href: "/docs/architecture/authentication",
  },
  {
    id: "operate",
    title: "Operate with Synx tools",
    where: "Synx",
    text: "Synx tools configure, administer, secure, and maintain RTW services. Current implementation uses TCP/IP with HTTPS and websocket. Communication format is XML or JSON, switchable at runtime by a client with domain ownership.",
    href: "https://synx.tools",
  },
];

export function OnboardingFlow() {
  const [open, setOpen] = useState("morph");

  return (
    <div className="diagram-block my-8 overflow-hidden border border-[var(--line)]">
      <div className="border-b border-[var(--line)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
        User onboarding path. Conceptual. Not a click-by-click Morph.Space guide.
      </div>

      <div className="diagram-grid hidden border-b border-[var(--line)] px-3 py-6 md:block">
        <svg viewBox="0 0 760 220" className="mx-auto h-auto w-full max-w-3xl" role="img">
          <rect x="20" y="24" width="160" height="56" fill="var(--node)" stroke="var(--line)" />
          <text x="100" y="48" textAnchor="middle" fill="var(--ink)" fontSize="12">
            You
          </text>
          <text x="100" y="66" textAnchor="middle" fill="var(--muted)" fontSize="10">
            person or organization
          </text>

          <FlowArrow x1={180} y1={52} x2={228} y2={52} />

          <rect x="228" y="24" width="160" height="56" fill="var(--accent-dim)" stroke="var(--accent)" />
          <text x="308" y="48" textAnchor="middle" fill="var(--ink)" fontSize="12">
            Morph.Space
          </text>
          <text x="308" y="66" textAnchor="middle" fill="var(--muted)" fontSize="10">
            join and domain
          </text>

          <FlowArrow x1={388} y1={52} x2={436} y2={52} />

          <rect x="436" y="24" width="140" height="56" fill="var(--node)" stroke="var(--line)" />
          <text x="506" y="48" textAnchor="middle" fill="var(--ink)" fontSize="12">
            SynxPass
          </text>
          <text x="506" y="66" textAnchor="middle" fill="var(--muted)" fontSize="10">
            identity token
          </text>

          <FlowArrow x1={576} y1={52} x2={620} y2={52} />

          <rect x="620" y="24" width="120" height="56" fill="var(--node)" stroke="var(--line)" />
          <text x="680" y="48" textAnchor="middle" fill="var(--ink)" fontSize="12">
            Domain
          </text>
          <text x="680" y="66" textAnchor="middle" fill="var(--muted)" fontSize="10">
            address space
          </text>

          <FlowArrow x1={308} y1={80} x2={308} y2={118} />

          <rect x="228" y="118" width="304" height="56" fill="var(--node)" stroke="var(--line)" />
          <text x="380" y="142" textAnchor="middle" fill="var(--ink)" fontSize="12">
            Ghost transfer and confirm
          </text>
          <text x="380" y="160" textAnchor="middle" fill="var(--muted)" fontSize="10">
            data layer to user · application layer to service
          </text>

          <FlowArrow x1={380} y1={174} x2={380} y2={198} />

          <text x="380" y="214" textAnchor="middle" fill="var(--accent)" fontSize="11" fontFamily="ui-monospace, monospace">
            live channel · token refresh · Synx operation
          </text>
        </svg>
      </div>

      <div className="grid gap-0 md:grid-cols-[240px_1fr]">
        <ol className="border-b border-[var(--line)] md:border-b-0 md:border-r">
          {steps.map((step, index) => (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => setOpen(step.id)}
                className={
                  "flex w-full items-center gap-3 px-4 py-2.5 text-left text-[13px] " +
                  (open === step.id
                    ? "bg-[var(--accent-dim)] text-[var(--ink)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]")
                }
              >
                <span className="font-mono text-[10px] text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.title}
              </button>
              {index < steps.length - 1 ? (
                <div className="flex justify-start pl-7">
                  <FlowDown className="h-4 w-5" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="p-5">
          {steps.map((step) =>
            open === step.id ? (
              <div key={step.id}>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  {step.where}
                </div>
                <div className="mt-1 text-[18px] text-[var(--ink)]">{step.title}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">{step.text}</p>
                {step.href.startsWith("http") ? (
                  <a
                    href={step.href}
                    rel="noreferrer"
                    className="mt-4 inline-block text-[13px] text-[var(--accent)]"
                  >
                    Open {step.where} →
                  </a>
                ) : (
                  <Link href={step.href} className="mt-4 inline-block text-[13px] text-[var(--accent)]">
                    Open related documentation →
                  </Link>
                )}
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
