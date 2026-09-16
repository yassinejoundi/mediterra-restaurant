import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function HeroSection() {
  return (
    <section
      aria-labelledby="gallery-hero-heading"
      className="relative isolate flex min-h-[44rem] items-end overflow-hidden bg-espresso text-plaster md:min-h-[calc(100svh-5rem)]"
    >
      <Image
        src="/images/gallery/hero.webp"
        alt="Candlelit linen table and guests in a warm Marrakech riad courtyard"
        fill
        className="object-cover object-[58%_center] sm:object-center"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,22,18,0.9)_0%,rgba(31,22,18,0.56)_40%,rgba(31,22,18,0.08)_75%),linear-gradient(0deg,rgba(31,22,18,0.7)_0%,transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-screen-2xl px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="max-w-3xl">
          <ScrollReveal as="p" direction="none" className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-linen">
            Inside Mediterra · Marrakech
          </ScrollReveal>
          <ScrollReveal
            as="h1"
            id="gallery-hero-heading"
            className="max-w-[13ch] text-balance font-heading text-[clamp(3rem,7vw,6.6rem)] font-normal leading-[0.96] tracking-[-0.04em] text-plaster"
            delay={0.08}
          >
            The room glows. <span className="italic text-linen">The table comes alive.</span>
          </ScrollReveal>
          <ScrollReveal
            as="p"
            className="mt-7 max-w-xl text-pretty text-base leading-7 text-plaster/85 sm:text-lg sm:leading-8"
            delay={0.16}
          >
            Warm plaster, handmade pasta, candlelight, and the small gestures that make an evening feel personal.
          </ScrollReveal>
          <ScrollReveal className="mt-9" delay={0.24}>
            <Link
              href="/reservations"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-8 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
            >
              Reserve a Table
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
