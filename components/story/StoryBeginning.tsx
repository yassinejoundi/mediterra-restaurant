import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function StoryBeginning() {
  return (
    <section
      id="beginning"
      aria-labelledby="beginning-heading"
      className="scroll-mt-24 bg-plaster px-5 py-20 text-espresso sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-screen-2xl items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <ScrollReveal className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg shadow-espresso/10">
            <Image
              src="/images/story/story-beginning-hands.png"
              alt="Two pairs of hands working fresh pasta dough together on a flour-dusted wooden table"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-body text-sm leading-6 text-espresso/60">
            Hands, flour, patience, where every Mediterra evening starts.
          </p>
        </ScrollReveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <ScrollReveal as="p" className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-olive">
            The beginning
          </ScrollReveal>
          <ScrollReveal
            as="h2"
            id="beginning-heading"
            className="mt-5 max-w-[16ch] text-balance font-heading text-4xl font-normal leading-[1.03] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
            delay={0.06}
          >
            Two paths <span className="italic text-wine">converging</span> in the medina.
          </ScrollReveal>
          <ScrollReveal as="p" className="mt-8 max-w-xl text-pretty font-body text-base leading-7 text-espresso/75 sm:text-lg sm:leading-8" delay={0.12}>
            An Italian living in Marrakech, missing the honest flavors of home. A Moroccan chef who had learned Italian
            cooking beside Italian chefs, and fallen for the restraint, patience, and precision behind simple
            ingredients.
          </ScrollReveal>
          <ScrollReveal as="p" className="mt-5 max-w-xl text-pretty font-body text-base leading-7 text-espresso/75 sm:text-lg sm:leading-8" delay={0.16}>
            Mediterra grew from that friendship. Not a fusion concept, but a quiet agreement: respect Italian recipes
            completely, and serve them with the warmth of the city around us.
          </ScrollReveal>
          <ScrollReveal className="mt-10" delay={0.2}>
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-espresso/25 px-7 py-3 font-label text-sm font-semibold text-espresso transition-colors hover:bg-espresso hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              Taste what they built
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
