import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function FoodCraftSection() {
  return (
    <section aria-labelledby="gallery-craft-heading" className="bg-linen px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
        <ScrollReveal className="relative lg:col-span-7" direction="right">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-plaster sm:aspect-[5/4] lg:me-16">
            <Image
              src="/images/gallery/pasta-craft.webp"
              alt="Chef gathering fresh handmade tagliatelle on a flour-dusted worktable"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative -mt-16 ms-auto me-4 aspect-square w-[48%] overflow-hidden rounded-[1.25rem] border-[0.5rem] border-linen bg-plaster sm:-mt-28 lg:absolute lg:bottom-[-4rem] lg:end-0 lg:me-0 lg:w-[38%]">
            <Image
              src="/images/gallery/ravioli.webp"
              alt="Handmade ravioli with sage and Parmesan in a ceramic bowl"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-4 lg:col-start-9" direction="left" delay={0.08}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-wine">02 · The craft</p>
          <h2
            id="gallery-craft-heading"
            className="max-w-[11ch] text-balance font-heading text-[clamp(2.6rem,4.7vw,4.8rem)] font-normal leading-[1.02] tracking-[-0.035em]"
          >
            Simple ingredients, <span className="italic text-wine">treated with patience.</span>
          </h2>
          <p className="mt-7 max-w-lg text-pretty text-base leading-7 text-espresso/70 sm:text-lg sm:leading-8">
            Pasta is folded by hand. Olive oil catches the light. Every plate begins with Italian restraint and ends
            with the generosity of Marrakech.
          </p>
          <Link
            href="/menu"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-espresso px-8 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
          >
            Explore the Menu
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
