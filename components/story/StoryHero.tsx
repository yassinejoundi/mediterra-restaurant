import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function StoryHero() {
  return (
    <section aria-labelledby="story-hero-heading" className="relative isolate overflow-hidden bg-espresso text-plaster">
      <Image
        src="/images/story/story-hero-candlelit.png"
        alt="Candlelit tables set with linen and wine glasses in Mediterra's warm dining room"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center] sm:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,20,16,0.94)_0%,rgba(34,24,19,0.72)_36%,rgba(34,24,19,0.12)_72%),linear-gradient(0deg,rgba(26,18,15,0.58)_0%,transparent_45%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-screen-2xl flex-col justify-end px-5 pb-10 pt-24 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="max-w-3xl">
          <ScrollReveal
            as="p"
            direction="none"
            className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.24em] text-linen"
          >
            Our story · Marrakech
          </ScrollReveal>
          <ScrollReveal
            as="h1"
            id="story-hero-heading"
            className="max-w-[14ch] text-balance font-heading text-[clamp(2.9rem,7vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.04em] text-plaster"
            delay={0.08}
          >
            Born from friendship, <span className="italic text-linen">Italian discipline,</span> Marrakech generosity.
          </ScrollReveal>
          <ScrollReveal
            as="p"
            className="mt-7 max-w-xl text-pretty font-body text-base leading-7 text-plaster/85 sm:text-lg sm:leading-8"
            delay={0.16}
          >
            A romantic Mediterranean table where handmade Italian food and generous hospitality make the evening feel
            personal, never staged.
          </ScrollReveal>
          <ScrollReveal className="mt-9 flex flex-col gap-3 sm:flex-row" delay={0.24}>
            <Link
              href="/reservations"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-8 py-3 font-label text-sm font-semibold text-plaster transition-colors hover:bg-[#722c3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-plaster/50 bg-espresso/20 px-8 py-3 font-label text-sm font-semibold text-plaster backdrop-blur-sm transition-colors hover:bg-plaster hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
            >
              Explore the Menu
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-14 flex items-end justify-between gap-6 border-t border-plaster/25 pt-5" delay={0.3}>
          <p className="max-w-sm text-pretty font-body text-xs leading-5 text-plaster/70 sm:text-sm">
            Two friends. Two traditions. One generous table.
          </p>
          <a
            href="#beginning"
            className="hidden min-h-11 items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.2em] text-plaster/80 transition-colors hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster sm:flex"
          >
            Our beginning
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
