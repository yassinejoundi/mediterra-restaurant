import Image from "next/image";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";

export function TheTableExperienceSection() {
  return (
    <section aria-labelledby="gallery-table-heading" className="bg-plaster px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <ScrollReveal className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-wine">03 · The table</p>
          <h2
            id="gallery-table-heading"
            className="text-balance font-heading text-[clamp(2.6rem,5vw,5.2rem)] font-normal leading-[1.02] tracking-[-0.035em]"
          >
            Hospitality lives in <span className="italic text-wine">the small moments.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-espresso/70 sm:text-lg sm:leading-8">
            A glass poured at the right moment. Bread broken before the first course. Conversation given room to unfold.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid gap-5 md:grid-cols-3 md:gap-6">
          <figure className="md:pt-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-linen">
              <Image
                src="/images/gallery/wine-service.webp"
                alt="A host pouring red wine beside a candlelit dinner"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 motion-safe:hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-espresso/65">
              Attentive, never hovering
            </figcaption>
          </figure>

          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-linen">
              <Image
                src="/images/gallery/shared-table.webp"
                alt="Friends passing handmade pasta around a candlelit courtyard table"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 motion-safe:hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-espresso/65">
              A table made for sharing
            </figcaption>
          </figure>

          <figure className="md:pt-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-linen">
              <Image
                src="/images/gallery/welcome-bread.webp"
                alt="A host serving warm focaccia, olives, and olive oil at the table"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 motion-safe:hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-espresso/65">
              The welcome begins with bread
            </figcaption>
          </figure>
        </StaggerReveal>
      </div>
    </section>
  );
}
