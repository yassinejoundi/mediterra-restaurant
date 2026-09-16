import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function AtmosphereGrid() {
  return (
    <section className="bg-plaster px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          <ScrollReveal className="lg:col-span-4 lg:pt-12">
            <p className="mb-4 font-label text-xs font-semibold uppercase tracking-[0.22em] text-olive">The room, after sunset</p>
            <h2 className="max-w-[10ch] text-balance font-heading text-4xl font-normal leading-[1.02] tracking-[-0.025em] text-espresso sm:text-5xl lg:text-6xl">
              Romance without <span className="italic text-wine">the performance.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty font-body text-base leading-7 text-taupe sm:text-lg sm:leading-8">
              Warm plaster, low candlelight, and tables close enough for connection, never commotion. This is a room designed around the people in it.
            </p>
            <Link
              href="/gallery"
              className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-wine/40 py-2 font-label text-sm font-semibold text-wine transition-colors hover:border-espresso hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              See the Atmosphere
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-6 lg:col-start-7" direction="left" delay={0.08}>
            <figure>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-espresso">
                <Image
                  src="/images/mediterra-evening.png"
                  alt="Couple sharing a candlelit dinner in Mediterra's courtyard"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 font-label text-[0.7rem] uppercase tracking-[0.18em] text-taupe">
                <span>Evenings at Mediterra</span>
                <span>Marrakech</span>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid items-end gap-8 lg:-mt-10 lg:grid-cols-12 lg:gap-6">
          <ScrollReveal className="lg:col-span-4 lg:col-start-2" direction="right">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-linen">
                <Image
                  src="/images/mediterra-welcome.png"
                  alt="Fresh rosemary focaccia welcomed to the table with olive oil"
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 font-label text-[0.7rem] uppercase tracking-[0.18em] text-taupe">The welcome, before the first course</figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal className="border-l border-terracotta/35 pl-6 lg:col-span-4 lg:col-start-8 lg:mb-12 lg:pl-10" delay={0.1}>
            <blockquote className="text-balance font-heading text-2xl italic leading-snug text-espresso sm:text-3xl">
              “A good evening begins before the menu opens.”
            </blockquote>
            <p className="mt-4 max-w-sm text-pretty font-body text-sm leading-6 text-taupe">
              Focaccia still warm, olive oil catching the light, and a quiet welcome that says your table has been expected.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
