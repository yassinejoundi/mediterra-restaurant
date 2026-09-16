import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function StorySectionAsymmetric() {
  return (
    <section className="relative overflow-hidden bg-espresso px-5 py-20 text-plaster sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute -right-24 top-1/2 size-80 -translate-y-1/2 rounded-full border border-terracotta/20 sm:size-[32rem]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-8 top-1/2 size-52 -translate-y-1/2 rounded-full border border-brass/15 sm:size-96" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12 lg:gap-8">
        <ScrollReveal className="lg:col-span-3">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-brass">Our beginning</p>
        </ScrollReveal>

        <div className="lg:col-span-8 lg:col-start-5">
          <ScrollReveal>
            <h2 className="max-w-[14ch] text-balance font-heading text-4xl font-normal leading-[1.03] tracking-[-0.025em] text-plaster sm:text-5xl lg:text-7xl">
              Two friends. Two traditions. <span className="italic text-linen">One generous table.</span>
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-8 border-t border-plaster/20 pt-9 md:grid-cols-2 md:gap-12">
            <ScrollReveal as="p" className="text-pretty font-body text-base leading-7 text-plaster/75" delay={0.06}>
              Mediterra began with an Italian living in Marrakech and a Moroccan chef devoted to the quiet discipline behind Italian cooking.
            </ScrollReveal>
            <ScrollReveal as="p" className="text-pretty font-body text-base leading-7 text-plaster/75" delay={0.12}>
              Their common ground was never spectacle. It was the ritual of a table: food made with patience, hospitality offered naturally, and time shared well.
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-10" delay={0.16}>
            <Link
              href="/story"
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-plaster/40 px-7 py-3 font-label text-sm font-semibold text-plaster transition-colors hover:bg-plaster hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
            >
              Read Our Story
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
