import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function StoryGenerosity() {
  return (
    <section
      aria-labelledby="generosity-heading"
      className="relative overflow-hidden bg-espresso px-5 py-20 text-plaster sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/2 size-80 -translate-y-1/2 rounded-full border border-brass/15 sm:size-[32rem]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-screen-2xl items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <ScrollReveal className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg shadow-black/20">
            <Image
              src="/images/story/story-riad-welcome.png"
              alt="Torn focaccia and olive oil on linen by candlelight, lanterns glowing in the riad courtyard behind"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-body text-sm leading-6 text-plaster/60">
            The welcome moment: focaccia, olive oil, candlelight.
          </p>
        </ScrollReveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <ScrollReveal as="p" className="flex items-center gap-3 font-label text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            <span className="h-px w-8 bg-brass" aria-hidden="true" />
            Marrakech generosity
          </ScrollReveal>
          <ScrollReveal
            as="h2"
            id="generosity-heading"
            className="mt-5 max-w-[14ch] text-balance font-heading text-4xl font-normal leading-[1.03] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
            delay={0.06}
          >
            Warmth you feel <span className="italic text-linen">before the first bite.</span>
          </ScrollReveal>
          <ScrollReveal as="p" className="mt-8 max-w-xl text-pretty font-body text-base leading-7 text-plaster/75 sm:text-lg sm:leading-8" delay={0.12}>
            Marrakech appears here the way it should, through texture, light, and attention. Torn focaccia and olive
            oil arrive first. Linen, warm plaster, and candlelight do the rest.
          </ScrollReveal>
          <ScrollReveal as="p" className="mt-5 max-w-xl text-pretty font-body text-base leading-7 text-plaster/75 sm:text-lg sm:leading-8" delay={0.16}>
            A discreet check-in during the evening makes sure you feel expected, never watched. Service notices details
            without hovering, and lets the night breathe.
          </ScrollReveal>

          <ScrollReveal className="mt-10" delay={0.2}>
            <blockquote className="border-l-2 border-brass/60 pl-6">
              <p className="max-w-md text-pretty font-heading text-2xl font-normal italic leading-snug text-linen">
                “Hospitality is not service here. It is the evening itself.”
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal className="mt-10" delay={0.24}>
            <Link
              href="/gallery"
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-plaster/40 px-7 py-3 font-label text-sm font-semibold text-plaster transition-colors hover:bg-plaster hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
            >
              See the room
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
