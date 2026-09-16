import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

const dishes = [
  {
    name: "Pappardelle al Ragù",
    description: "Hand-cut pasta, slow-braised beef and veal, Parmigiano Reggiano",
    price: "190",
  },
  {
    name: "Ravioli di Zucca",
    description: "Roasted squash, brown butter, sage, amaretti",
    price: "175",
  },
  {
    name: "Branzino alla Brace",
    description: "Charred sea bass, lemon, capers, olive and soft herbs",
    price: "260",
  },
];

export function MenuPreview() {
  return (
    <section className="overflow-hidden bg-linen px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <ScrollReveal className="relative lg:col-span-5" direction="right">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-espresso">
            <Image
              src="/images/mediterra-pasta.png"
              alt="Hand-cut pappardelle finished at the table"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 max-w-[15rem] rounded-2xl bg-wine px-6 py-5 text-plaster shadow-[0_20px_60px_rgba(42,33,29,0.18)] sm:right-8">
            <p className="font-heading text-xl italic leading-snug">Simple ingredients deserve discipline.</p>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <ScrollReveal direction="left">
            <p className="mb-4 font-label text-xs font-semibold uppercase tracking-[0.22em] text-olive">From our kitchen</p>
            <h2 className="max-w-[12ch] text-balance font-heading text-4xl font-normal leading-[1.02] tracking-[-0.025em] text-espresso sm:text-5xl lg:text-6xl">
              Pasta made here. <span className="italic text-wine">Patience included.</span>
            </h2>
            <p className="mt-6 max-w-xl text-pretty font-body text-base leading-7 text-taupe sm:text-lg sm:leading-8">
              Recipes are respected, not reinvented for effect. Fresh pasta, familiar Italian classics, and Mediterranean ingredients arrive with clarity and warmth.
            </p>
          </ScrollReveal>

          <div className="mt-10 divide-y divide-terracotta/25 border-y border-terracotta/25">
            {dishes.map((dish, index) => (
              <ScrollReveal key={dish.name} className="grid grid-cols-[1fr_auto] gap-5 py-6" delay={index * 0.06}>
                <div>
                  <h3 className="font-heading text-xl font-normal text-espresso sm:text-2xl">{dish.name}</h3>
                  <p className="mt-2 max-w-lg text-pretty font-body text-sm leading-6 text-taupe">{dish.description}</p>
                </div>
                <p className="pt-1 font-label text-sm font-semibold tabular-nums text-wine">
                  {dish.price} <span className="text-[0.65rem] uppercase tracking-wider">MAD</span>
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-9" delay={0.12}>
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-espresso px-7 py-3 font-label text-sm font-semibold text-espresso transition-colors hover:bg-espresso hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              Explore the Full Menu
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
