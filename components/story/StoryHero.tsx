import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function StoryHero() {
  return (
    <section aria-labelledby="story-hero-heading" className="relative isolate overflow-hidden bg-espresso text-plaster">
      <Image
        src="/images/story/story-hero-friendship.png"
        alt="A host welcomes guests with bread in a candlelit Marrakech courtyard dining room"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,20,16,0.94)_0%,rgba(34,24,19,0.76)_42%,rgba(34,24,19,0.12)_85%),linear-gradient(0deg,rgba(26,18,15,0.65)_0%,transparent_52%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[46rem] max-w-screen-2xl flex-col justify-end px-5 pb-10 pt-32 sm:min-h-[calc(100svh-5rem)] sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="max-w-3xl">
          <ScrollReveal
            as="p"
            direction="none"
            className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.24em] text-linen"
          >
            Our story <span aria-hidden="true">/</span> Marrakech
          </ScrollReveal>
          <ScrollReveal
            as="h1"
            id="story-hero-heading"
            className="max-w-[13ch] text-balance font-heading text-[clamp(3.25rem,7vw,6.8rem)] font-normal leading-[0.98] tracking-[-0.045em] text-plaster"
            delay={0.08}
          >
            A friendship, <span className="italic text-linen">made for the table.</span>
          </ScrollReveal>
          <ScrollReveal
            as="p"
            className="mt-7 max-w-xl text-pretty font-body text-base leading-7 text-plaster/85 sm:text-lg sm:leading-8"
            delay={0.16}
          >
            An Italian living in Marrakech and a Moroccan chef devoted to Italian craft found common ground in a
            slower, more generous way to dine.
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
            Italian discipline. Marrakech generosity. One shared table.
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
