import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import menuHero from "@/public/images/menu-hero.png";

export function Main() {
  return (
    <main id="main-content" className="flex-1 bg-plaster">
      <section className="relative isolate flex min-h-[42rem] items-end overflow-hidden pt-20 sm:min-h-[46rem] lg:min-h-[50rem]">
        <Image
          src={menuHero}
          alt="Handmade pasta, focaccia, olive oil, and candlelight set for dinner at Mediterra"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,33,29,0.86)_0%,rgba(42,33,29,0.58)_45%,rgba(42,33,29,0.12)_82%),linear-gradient(0deg,rgba(42,33,29,0.7)_0%,transparent_48%)]" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <ScrollReveal className="max-w-3xl" direction="up">
            <p className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.28em] text-linen sm:text-sm">
              Italian craft · Marrakech warmth
            </p>
            <h1 className="max-w-3xl text-balance font-heading text-5xl leading-[0.98] font-medium tracking-[-0.035em] text-plaster sm:text-6xl lg:text-8xl">
              Simple ingredients. <span className="italic text-linen">Time well spent.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty font-body text-base leading-7 text-plaster/90 sm:text-lg sm:leading-8">
              Pasta made by hand, Italian recipes treated with patience, and dishes served with the warmth of Marrakech.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/reservations"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-wine px-7 py-3 font-label text-xs font-bold uppercase tracking-[0.18em] text-plaster shadow-[0_12px_32px_rgba(42,33,29,0.22)] transition-colors hover:bg-espresso focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
              >
                Reserve a Table
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href="#menu-categories"
                className="inline-flex min-h-12 items-center justify-center border-b border-plaster/60 px-1 font-label text-xs font-bold uppercase tracking-[0.18em] text-plaster transition-colors hover:border-plaster focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
              >
                Explore the menu
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div id="menu-categories" />
    </main>
  );
}
