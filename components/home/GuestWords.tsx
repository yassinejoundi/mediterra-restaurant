import Link from "next/link";
import { ArrowRight, GlassWater, Heart, UsersRound } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";

const occasions = [
  {
    icon: Heart,
    title: "A dinner for two",
    copy: "Soft light, an intimate table, and service attentive enough to disappear when conversation begins.",
  },
  {
    icon: UsersRound,
    title: "Friends around a table",
    copy: "Shared plates, generous pacing, and a room with enough life to make the evening feel easy.",
  },
  {
    icon: GlassWater,
    title: "One night in Marrakech",
    copy: "A considered choice for travelers who want beauty online to become genuine warmth in person.",
  },
];

export function GuestWords() {
  return (
    <section className="bg-sage/55 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <ScrollReveal className="lg:col-span-7">
            <p className="mb-4 font-label text-xs font-semibold uppercase tracking-[0.22em] text-olive">Your evening, your way</p>
            <h2 className="max-w-[13ch] text-balance font-heading text-4xl font-normal leading-[1.02] tracking-[-0.025em] text-espresso sm:text-5xl lg:text-6xl">
              A table for moments worth <span className="italic text-wine">staying for.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-3 lg:col-start-10" delay={0.08}>
            <p className="text-pretty font-body text-base leading-7 text-taupe">
              Romantic by nature, generous by instinct, and never too formal to feel like your own evening.
            </p>
          </ScrollReveal>
        </div>

        <StaggerReveal className="mt-14 grid gap-4 md:grid-cols-3" staggerDelay={0.1}>
          {occasions.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="flex h-full flex-col rounded-[1.5rem] border border-olive/15 bg-plaster/80 p-7 sm:p-8">
              <Icon className="size-6 text-wine" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-10 font-heading text-2xl font-normal text-espresso">{title}</h3>
              <p className="mt-4 text-pretty font-body text-sm leading-6 text-taupe sm:text-base sm:leading-7">{copy}</p>
            </article>
          ))}
        </StaggerReveal>

        <ScrollReveal className="mt-10 flex justify-end" delay={0.1}>
          <Link
            href="/reservations"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-wine px-7 py-3 font-label text-sm font-semibold text-plaster transition-colors hover:bg-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
          >
            Plan Your Evening
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
