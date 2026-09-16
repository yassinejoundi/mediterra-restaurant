import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function FinalCTASection() {
  return (
    <section aria-labelledby="gallery-cta-heading" className="relative isolate overflow-hidden bg-espresso px-5 py-32 text-plaster sm:px-8 sm:py-40 lg:px-12">
      <Image
        src="/images/gallery/evening.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-espresso/45" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal as="p" className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-linen">
          A slower evening in Marrakech
        </ScrollReveal>
        <ScrollReveal
          as="h2"
          id="gallery-cta-heading"
          className="text-balance font-heading text-[clamp(2.8rem,6vw,5.8rem)] font-normal leading-[1] tracking-[-0.04em]"
          delay={0.08}
        >
          See the room. <span className="italic text-linen">Come for the table.</span>
        </ScrollReveal>
        <ScrollReveal as="p" className="mx-auto mt-7 max-w-xl text-pretty text-base leading-7 text-plaster/80 sm:text-lg sm:leading-8" delay={0.14}>
          Request your table and let our host team take care of the details personally.
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            href="/reservations"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-9 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
          >
            Reserve a Table
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
