import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, MessageCircle } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function LocationContact() {
  return (
    <section className="bg-plaster px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-screen-2xl overflow-hidden rounded-[2rem] bg-linen lg:grid-cols-2">
        <ScrollReveal className="flex flex-col justify-between p-7 sm:p-10 lg:p-14" direction="right">
          <div>
            <p className="mb-4 font-label text-xs font-semibold uppercase tracking-[0.22em] text-olive">Find your way to the table</p>
            <h2 className="max-w-[11ch] text-balance font-heading text-4xl font-normal leading-[1.02] tracking-[-0.025em] text-espresso sm:text-5xl lg:text-6xl">
              Your evening in <span className="italic text-wine">Marrakech.</span>
            </h2>
            <p className="mt-6 max-w-lg text-pretty font-body text-base leading-7 text-taupe">
              Plan ahead or speak with our team. We will help with directions, timing, and any details that make your visit feel effortless.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-plaster p-5">
              <Clock3 className="size-5 text-wine" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-5 font-label text-xs font-semibold uppercase tracking-[0.18em] text-espresso">Dinner service</h3>
              <p className="mt-2 font-body text-sm leading-6 text-taupe">Evening tables by reservation</p>
            </div>
            <div className="rounded-2xl bg-plaster p-5">
              <MessageCircle className="size-5 text-wine" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-5 font-label text-xs font-semibold uppercase tracking-[0.18em] text-espresso">Personal reply</h3>
              <p className="mt-2 font-body text-sm leading-6 text-taupe">Requests confirmed by our team</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="relative min-h-[28rem] overflow-hidden bg-olive p-7 text-plaster sm:p-10 lg:p-14" direction="left" delay={0.08}>
          <div className="pointer-events-none absolute -right-28 -top-28 size-80 rounded-full border border-plaster/15" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-12 -top-12 size-56 rounded-full border border-plaster/15" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-16 left-12 right-12 h-px -rotate-12 bg-plaster/15" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-36 -left-10 right-10 h-px rotate-6 bg-plaster/10" aria-hidden="true" />

          <div className="relative flex h-full min-h-[24rem] flex-col justify-between">
            <MapPin className="size-8 text-linen" strokeWidth={1.4} aria-hidden="true" />
            <div>
              <p className="font-heading text-[clamp(3.5rem,8vw,7rem)] font-normal italic leading-none tracking-[-0.04em] text-plaster/95">Marrakech</p>
              <p className="mt-5 max-w-sm font-body text-sm leading-6 text-plaster/75">
                Contact our host team for location guidance and help planning your arrival.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-plaster px-7 py-3 font-label text-sm font-semibold text-olive transition-colors hover:bg-espresso hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
              >
                Contact &amp; Directions
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
