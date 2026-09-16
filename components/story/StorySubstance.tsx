import { HandHeart, Heart, Wheat } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

const values = [
  {
    icon: Wheat,
    title: "Handmade craft",
    text: "Real preparation behind every plate.",
  },
  {
    icon: HandHeart,
    title: "Personal hospitality",
    text: "Attention that notices, never hovers.",
  },
  {
    icon: Heart,
    title: "Romance without performance",
    text: "Intimacy that feels lived-in, not staged.",
  },
];

export function StorySubstance() {
  return (
    <section
      aria-labelledby="substance-heading"
      className="bg-plaster px-5 py-20 text-center text-espresso sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <ScrollReveal className="mx-auto max-w-3xl">
        <p className="flex items-center justify-center gap-3 font-label text-xs font-semibold uppercase tracking-[0.22em] text-wine">
          <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
          Beauty with substance
          <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
        </p>
        <h2
          id="substance-heading"
          className="mx-auto mt-5 max-w-[16ch] text-balance font-heading text-4xl font-normal leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
        >
          Beautiful enough for a special night. <span className="italic text-wine">Real enough to remember.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-pretty font-body text-base leading-7 text-espresso/75 sm:text-lg sm:leading-8">
          We leave spectacle to others. Our memory is quieter: handmade pasta, soft candlelight, and the feeling that
          the evening belonged to you — not to the room around you.
        </p>
      </ScrollReveal>

      <ul className="mx-auto mt-14 grid max-w-4xl gap-8 border-t border-espresso/15 pt-10 text-left sm:grid-cols-3 sm:gap-6 sm:text-center">
        {values.map((value, index) => (
          <li key={value.title}>
            <ScrollReveal delay={0.08 + index * 0.06} className="sm:mx-auto sm:max-w-[26ch]">
            <value.icon className="size-6 text-terracotta sm:mx-auto" aria-hidden="true" />
            <p className="mt-4 font-label text-sm font-semibold text-espresso">{value.title}</p>
            <p className="mt-1 font-body text-sm leading-6 text-espresso/70">{value.text}</p>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
