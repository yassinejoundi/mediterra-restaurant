import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-espresso text-plaster">
      <Image
        src="/images/mediterra-hero.png"
        alt="Candlelit table overlooking Mediterra's warm courtyard"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,20,16,0.94)_0%,rgba(34,24,19,0.72)_36%,rgba(34,24,19,0.12)_72%),linear-gradient(0deg,rgba(26,18,15,0.58)_0%,transparent_45%)]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-screen-2xl flex-col justify-end px-5 pb-10 pt-24 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="max-w-3xl">
          <ScrollReveal
            as="p"
            direction="none"
            className="mb-5 flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.24em] text-linen"
          >
            <MapPin className="size-4 text-brass" aria-hidden="true" />
            Marrakech, Morocco
          </ScrollReveal>
          <ScrollReveal
            as="h1"
            className="max-w-[12ch] text-balance font-heading text-[clamp(3.35rem,8.5vw,7.75rem)] font-normal leading-[0.91] tracking-[-0.045em] text-plaster"
            delay={0.08}
          >
            The evening belongs <span className="italic text-linen">at the table.</span>
          </ScrollReveal>
          <ScrollReveal
            as="p"
            className="mt-7 max-w-xl text-pretty font-body text-base leading-7 text-plaster/85 sm:text-lg sm:leading-8"
            delay={0.16}
          >
            Handmade Italian food, quiet candlelight, and Marrakech hospitality for dinners that feel personal, never staged.
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
            Italian discipline. Marrakech generosity. A slower kind of night.
          </p>
          <a
            href="#welcome"
            className="hidden min-h-11 items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.2em] text-plaster/80 transition-colors hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster sm:flex"
          >
            Discover
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
