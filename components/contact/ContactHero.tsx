import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12+Derb+El+Ferraine+Medina+Marrakech";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative isolate flex min-h-[44rem] items-end overflow-hidden bg-espresso text-plaster md:min-h-[calc(100svh-5rem)]"
    >
      <Image
        src="/images/contact/contact-hero.png"
        alt="Guests arriving at Mediterra's warmly lit entrance in Marrakech"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[66%_center] sm:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,22,18,0.94)_0%,rgba(31,22,18,0.68)_38%,rgba(31,22,18,0.08)_76%),linear-gradient(0deg,rgba(31,22,18,0.65)_0%,transparent_52%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-screen-2xl px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="max-w-3xl">
          <ScrollReveal as="p" direction="none" className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-linen">
            Find us in Marrakech
          </ScrollReveal>
          <ScrollReveal
            as="h1"
            id="contact-hero-heading"
            className="max-w-[13ch] text-balance font-heading text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[0.96] tracking-[-0.04em]"
            delay={0.08}
          >
            Your evening begins <span className="italic text-linen">at the door.</span>
          </ScrollReveal>
          <ScrollReveal as="p" className="mt-7 max-w-xl text-pretty text-base leading-7 text-plaster/85 sm:text-lg sm:leading-8" delay={0.16}>
            Tucked into the Medina, Mediterra is a calm candlelit room made for handmade food and slower conversation.
          </ScrollReveal>
          <ScrollReveal className="mt-9 flex flex-col gap-3 sm:flex-row" delay={0.24}>
            <Link
              href="/reservations"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-8 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
            >
              Reserve a Table
            </Link>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-plaster/50 bg-espresso/20 px-8 py-3 text-sm font-semibold text-plaster backdrop-blur-sm transition-colors hover:bg-plaster hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Get Directions
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
