import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Legal and media contact for RealTimeWeb.org. Not a support desk or a signup.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[720px] px-4 py-12 sm:py-16 md:px-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
        Contact
      </p>
      <h1 className="font-serif mt-3 text-[2rem] leading-tight tracking-tight text-[var(--ink)] md:text-[2.6rem]">
        Legal and media
      </h1>
      <p className="mt-4 max-w-[36rem] text-[16px] leading-7 text-[var(--muted)]">
        This form is for legal matters, press, and official media requests. It is not
        for product questions, accounts, or joining anything.
      </p>
      <ContactForm />
    </main>
  );
}
