import Image from "next/image";
import Link from "next/link";
import { HandHeart, UtensilsCrossed, Wheat } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

const proofs = [
  {
    icon: Wheat,
    title: "Pasta made by hand, daily",
    text: "Rolled, cut, and folded in our kitchen — never hurried, never shortcut.",
  },
  {
    icon: UtensilsCrossed,
    title: "Recipes treated with restraint",
    text: "Bread, tomato, herbs, olive oil, cheese. Pristine ingredients left to speak clearly.",
  },
  {
    icon: HandHeart,
    title: "Finished at the table",
    text: "Dishes completed beside you, served with care rather than ceremony.",
  },
];

export function StoryDiscipline() {
  return (
    <section
      aria-labelledby="discipline-heading"
      className="bg-linen px-5 py-20 text-espresso sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-screen-2xl items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <ScrollReveal as="p" className="flex items-center gap-3 font-label text-xs font-semibold uppercase tracking-[0.22em] text-wine">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            Italian discipline
          </ScrollReveal>
          <ScrollReveal
            as="h2"
            id="discipline-heading"
            className="mt-5 max-w-[14ch] text-balance font-heading text-4xl font-normal leading-[1.03] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
            delay={0.06}
          >
            Simple ingredients <span className="italic text-wine">deserve patience.</span>
          </ScrollReveal>
          <ScrollReveal as="p" className="mt-8 max-w-xl text-pretty font-body text-base leading-7 text-espresso/75 sm:text-lg sm:leading-8" delay={0.12}>
            Our kitchen practices discipline as devotion: dough hydration perfected, olive oils chosen deliberately,
            flavors built slowly. Craft here is quiet — proof of substance behind the beauty.
          </ScrollReveal>

          <ul className="mt-10 space-y-7">
            {proofs.map((proof, index) => (
              <li key={proof.title}>
                <ScrollReveal className="flex gap-4" delay={0.1 + index * 0.06}>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-terracotta/30 bg-plaster">
                  <proof.icon className="size-5 text-terracotta" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-label text-sm font-semibold text-espresso">{proof.title}</span>
                  <span className="mt-1 block max-w-md text-pretty font-body text-sm leading-6 text-espresso/70">
                    {proof.text}
                  </span>
                </span>
                </ScrollReveal>
              </li>
            ))}
          </ul>

          <ScrollReveal className="mt-10" delay={0.28}>
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-8 py-3 font-label text-sm font-semibold text-plaster transition-colors hover:bg-[#722c3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              Explore the Menu
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg shadow-espresso/10">
            <Image
              src="/images/story/story-discipline-pasta.png"
              alt="Chef's hands dusting flour over fresh handmade pappardelle beside golden olive oil"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 motion-safe:group-hover:scale-[1.02]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>
          <p className="mt-4 font-body text-sm leading-6 text-espresso/60">
            Pappardelle, dusted and ready — restraint you can taste.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
