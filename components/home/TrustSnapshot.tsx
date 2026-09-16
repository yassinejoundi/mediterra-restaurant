 
import { HandHeart, UtensilsCrossed, Wheat } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";

const promises = [
  {
    icon: Wheat,
    number: "01",
    title: "Made by hand",
    copy: "Pasta shaped each day, sauces given time, and simple ingredients treated with care.",
  },
  {
    icon: UtensilsCrossed,
    number: "02",
    title: "Served at your pace",
    copy: "An unhurried table, attentive service, and room for conversation to carry the evening.",
  },
  {
    icon: HandHeart,
    number: "03",
    title: "Hosted with warmth",
    copy: "Italian discipline meets the instinctive generosity and welcome of Marrakech.",
  },
];

export function TrustSnapshot() {
  return (
    <section id="welcome" className="bg-plaster px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-10 border-b border-terracotta/25 pb-14 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-20">
          <ScrollReveal className="lg:col-span-7">
            <p className="mb-4 font-label text-xs font-semibold uppercase tracking-[0.22em] text-olive">Beauty with substance</p>
            <h2 className="max-w-[15ch] text-balance font-heading text-4xl font-normal leading-[1.02] tracking-[-0.025em] text-espresso sm:text-5xl lg:text-6xl">
              A beautiful room is only the <span className="italic text-wine">beginning.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
            <p className="max-w-xl text-pretty font-body text-base leading-7 text-taupe sm:text-lg sm:leading-8">
              What stays with you is the craft, the welcome, and the feeling that your table was prepared with you in mind.
            </p>
          </ScrollReveal>
        </div>

        <StaggerReveal className="grid gap-10 pt-12 md:grid-cols-3 md:gap-0 md:pt-16" staggerDelay={0.1}>
          {promises.map(({ icon: Icon, number, title, copy }, index) => (
            <article
              key={title}
              className={`group md:px-8 lg:px-12 ${index === 0 ? "md:pl-0" : "border-terracotta/20 md:border-l"}`}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-full bg-linen text-wine">
                  <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="font-heading text-sm italic text-terracotta">{number}</span>
              </div>
              <h3 className="font-heading text-2xl font-normal text-espresso sm:text-3xl">{title}</h3>
              <p className="mt-4 max-w-sm text-pretty font-body text-sm leading-6 text-taupe sm:text-base sm:leading-7">{copy}</p>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
