import Link from "next/link";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function ContactFinalCta() {
  return (
    <section aria-labelledby="contact-cta-heading" className="bg-plaster px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <ScrollReveal className="relative mx-auto max-w-screen-2xl overflow-hidden rounded-[2rem] bg-espresso px-6 py-20 text-center text-plaster sm:px-10 sm:py-24">
        <div className="absolute -start-24 -top-24 size-72 rounded-full bg-wine/35 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -end-16 size-80 rounded-full bg-olive/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-linen">Your table, personally prepared</p>
          <h2
            id="contact-cta-heading"
            className="text-balance font-heading text-[clamp(2.7rem,5.5vw,5.5rem)] font-normal leading-[1] tracking-[-0.04em]"
          >
            Tell us when you are coming. <span className="italic text-linen">We will take care of the rest.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-7 text-plaster/75 sm:text-lg sm:leading-8">
            Reservation requests are reviewed by our host team and confirmed personally by WhatsApp.
          </p>
          <Link
            href="/reservations"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-9 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
          >
            Request a Table
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
