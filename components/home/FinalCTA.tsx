import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function FinalCTA() {
  return (
    <section className="bg-wine px-5 py-20 text-plaster sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <ScrollReveal className="mx-auto max-w-4xl text-center">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-brass">Your table is waiting</p>
        <h2 className="mx-auto mt-5 max-w-[13ch] text-balance font-heading text-5xl font-normal leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
          Come for dinner. <span className="italic text-linen">Stay for the evening.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-pretty font-body text-base leading-7 text-plaster/75 sm:text-lg sm:leading-8">
          Send your preferred date and time. Our team will reply personally to confirm every reservation.
        </p>
        <Link
          href="/reservations"
          className="mt-10 inline-flex min-h-14 items-center gap-3 rounded-full bg-plaster px-9 py-4 font-label text-sm font-semibold text-wine transition-colors hover:bg-espresso hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
        >
          Request a Table
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <p className="mt-5 font-body text-xs leading-5 text-plaster/75">Your request is confirmed once our team replies.</p>
      </ScrollReveal>
    </section>
  );
}
