import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function StoryFinalCta() {
  return (
    <section aria-labelledby="story-cta-heading" className="bg-plaster px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32">
      <ScrollReveal className="mx-auto max-w-screen-2xl rounded-3xl bg-wine px-6 py-16 text-center text-plaster sm:px-12 sm:py-20 lg:py-24">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-brass">Join us for an evening</p>
        <h2
          id="story-cta-heading"
          className="mx-auto mt-5 max-w-[13ch] text-balance font-heading text-4xl font-normal leading-[1.0] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
        >
          The table is set. <span className="italic text-linen">The evening is yours.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-pretty font-body text-base leading-7 text-plaster/75 sm:text-lg sm:leading-8">
          Handmade pasta, soft Mediterranean warmth, and a team that confirms every request personally.
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
