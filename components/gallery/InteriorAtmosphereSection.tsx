import Image from "next/image";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";

export function InteriorAtmosphereSection() {
  return (
    <section aria-labelledby="gallery-room-heading" className="bg-plaster px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <ScrollReveal className="mb-12 grid gap-6 md:grid-cols-12 md:items-end lg:mb-16">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-wine">01 · The room</p>
            <h2
              id="gallery-room-heading"
              className="max-w-[12ch] text-balance font-heading text-[clamp(2.6rem,5vw,5.2rem)] font-normal leading-[1.02] tracking-[-0.035em]"
            >
              Marrakech warmth, <span className="italic text-wine">Mediterranean ease.</span>
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-base leading-7 text-espresso/70 md:col-span-5 md:justify-self-end md:text-lg md:leading-8">
            Arches, olive trees, linen, and pools of candlelight create a room that feels intimate without asking to be
            admired.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid gap-5 md:grid-cols-12 md:gap-6">
          <figure className="md:col-span-7 md:row-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-linen md:aspect-[6/7]">
              <Image
                src="/gallery-riad-courtyard.jpg"
                alt="Warmly lit riad courtyard with olive trees and tables set for dinner"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 motion-safe:hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-espresso/65">
              The courtyard · blue hour
            </figcaption>
          </figure>

          <figure className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-linen md:aspect-[5/4]">
              <Image
                src="/gallery-candlelit-corner.jpg"
                alt="A quiet table beside an arch, set with linen, candlelight, and a glass of wine"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover transition-transform duration-700 motion-safe:hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-espresso/65">
              A table set quietly
            </figcaption>
          </figure>

          <figure className="md:col-span-5 md:self-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-linen md:aspect-[5/4]">
              <Image
                src="/gallery-seating-nook.jpg"
                alt="Sun-warmed plaster alcove with linen cushions and a low dining table"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover transition-transform duration-700 motion-safe:hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-espresso/65">
              Afternoon in the alcove
            </figcaption>
          </figure>
        </StaggerReveal>
      </div>
    </section>
  );
}
