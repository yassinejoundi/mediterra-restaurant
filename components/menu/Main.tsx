import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import eveningService from "@/public/images/menu-evening-service.png";
import menuHero from "@/public/images/menu-hero.png";
import pastaCraft from "@/public/images/menu-pasta-craft.png";

import { MenuItem } from "./MenuItem";

export function Main() {
  return (
    <main id="main-content" className="flex-1 bg-plaster">
      <section className="relative isolate flex min-h-[42rem] items-end overflow-hidden pt-20 sm:min-h-[46rem] lg:min-h-[50rem]">
        <Image
          src={menuHero}
          alt="Handmade pasta, focaccia, olive oil, and candlelight set for dinner at Mediterra"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,33,29,0.86)_0%,rgba(42,33,29,0.58)_45%,rgba(42,33,29,0.12)_82%),linear-gradient(0deg,rgba(42,33,29,0.7)_0%,transparent_48%)]" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <ScrollReveal className="max-w-3xl" direction="up">
            <p className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.28em] text-linen sm:text-sm">
              Italian craft · Marrakech warmth
            </p>
            <h1 className="max-w-3xl text-balance font-heading text-5xl leading-[0.98] font-medium tracking-[-0.035em] text-plaster sm:text-6xl lg:text-8xl">
              Simple ingredients. <span className="italic text-linen">Time well spent.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty font-body text-base leading-7 text-plaster/90 sm:text-lg sm:leading-8">
              Pasta made by hand, Italian recipes treated with patience, and dishes served with the warmth of Marrakech.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/reservations"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-wine px-7 py-3 font-label text-xs font-bold uppercase tracking-[0.18em] text-plaster shadow-[0_12px_32px_rgba(42,33,29,0.22)] transition-colors hover:bg-espresso focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
              >
                Reserve a Table
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href="#menu-categories"
                className="inline-flex min-h-12 items-center justify-center border-b border-plaster/60 px-1 font-label text-xs font-bold uppercase tracking-[0.18em] text-plaster transition-colors hover:border-plaster focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
              >
                Explore the menu
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="menu-categories" className="scroll-mt-28 bg-plaster px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <ScrollReveal className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.26em] text-wine">The menu</p>
            <h2 className="mt-4 text-balance font-heading text-4xl leading-tight tracking-[-0.025em] text-wine sm:text-5xl">
              An evening, served in chapters.
            </h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-pretty text-base leading-7 text-espresso/75 sm:text-lg sm:leading-8">
              Begin with plates for sharing, stay for pasta rolled each day, then let dessert stretch the table a little longer.
              Our cooking follows Italian discipline and the generous rhythm of Marrakech.
            </p>
            <p className="mt-4 text-sm leading-6 text-espresso/70">
              Draft menu and prices shown in Moroccan dirhams. Please ask our team about allergies and dietary needs.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <nav
        aria-label="Menu categories"
        className="sticky top-20 z-30 border-y border-terracotta/15 bg-linen/95 shadow-[0_8px_24px_rgba(42,33,29,0.05)] backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-screen-2xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:justify-center lg:px-12">
          {[
            ["Antipasti", "antipasti"],
            ["Handmade Pasta", "pasta"],
            ["Pizza", "pizza"],
            ["Italian Classics", "classics"],
            ["Desserts", "desserts"],
            ["Drinks", "drinks"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex min-h-11 shrink-0 items-center rounded-full px-4 font-label text-[0.7rem] font-bold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-plaster hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section id="antipasti" className="scroll-mt-40 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-linen px-6 py-10 shadow-[0_20px_70px_rgba(42,33,29,0.06)] sm:px-10 sm:py-14 lg:px-16">
          <ScrollReveal className="grid gap-8 border-b border-terracotta/20 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-wine">To begin</p>
              <h2 className="mt-3 font-heading text-4xl italic tracking-[-0.025em] text-wine sm:text-5xl">Antipasti</h2>
            </div>
            <p className="max-w-xl text-pretty text-base leading-7 text-espresso/70 lg:justify-self-end">
              Small plates for settling into the table, served alongside warm house focaccia and local olive oil.
            </p>
          </ScrollReveal>

          <StaggerReveal className="mt-4 grid divide-y divide-terracotta/15 md:grid-cols-2 md:gap-x-14 md:divide-y-0" staggerDelay={0.05}>
            <div className="divide-y divide-terracotta/15">
              <MenuItem
                name="Burrata e Pomodorini"
                description="Puglian burrata, blistered cherry tomatoes, basil oil, and aged balsamic."
                price="180 MAD"
                tag="Vegetarian"
              />
              <MenuItem
                name="Arancini allo Zafferano"
                description="Crisp saffron risotto, smoked mozzarella, slow beef ragù, and herb sugo."
                price="145 MAD"
              />
            </div>
            <div className="divide-y divide-terracotta/15">
              <MenuItem
                name="Carpaccio di Manzo"
                description="Beef fillet, capers, rocket, Parmigiano Reggiano, and lemon olive oil."
                price="210 MAD"
              />
              <MenuItem
                name="Calamari Fritti"
                description="Lightly fried calamari, parsley, charred lemon, and preserved-lemon aioli."
                price="190 MAD"
              />
            </div>
          </StaggerReveal>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-terracotta/20 pt-8">
            <p className="max-w-lg text-sm leading-6 text-espresso/70">Planning a slower dinner? We will pace the table around your evening.</p>
            <Link href="/reservations" className="font-label text-xs font-bold uppercase tracking-[0.16em] text-wine underline decoration-terracotta/50 underline-offset-4 transition-colors after:hidden hover:text-espresso">
              Reserve your table
            </Link>
          </div>
        </div>
      </section>

      <section id="pasta" className="scroll-mt-40 overflow-hidden bg-espresso text-plaster">
        <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[32rem] overflow-hidden lg:min-h-[58rem]">
            <Image
              src={pastaCraft}
              alt="Chef shaping fresh tagliatelle by hand on a floured wooden table"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-espresso/25" />
            <p className="absolute inset-x-6 bottom-6 max-w-sm border-l border-brass/70 pl-4 text-sm leading-6 text-plaster/85 sm:inset-x-10 sm:bottom-10">
              Rolled each day with Italian “00” flour, farm eggs, and the patience good pasta asks for.
            </p>
          </div>

          <ScrollReveal className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-24" direction="right">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-brass">Made in house</p>
            <h2 className="mt-3 text-balance font-heading text-4xl italic tracking-[-0.025em] text-plaster sm:text-5xl lg:text-6xl">
              Handmade Pasta
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-linen/80">
              Familiar shapes, precise sauces, and enough restraint for every ingredient to speak clearly.
            </p>

            <div className="mt-10 divide-y divide-plaster/15">
              <article className="py-7 first:pt-0">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-heading text-2xl text-plaster">Tagliatelle al Tartufo</h3>
                  <span className="min-w-4 flex-1 border-b border-dotted border-brass/35" aria-hidden="true" />
                  <p className="shrink-0 text-sm font-semibold text-brass tabular-nums">280 MAD</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-linen/70 sm:text-base sm:leading-7">Silky tagliatelle, Parmigiano cream, and black truffle shaved at the table.</p>
                <p className="mt-3 inline-flex rounded-full border border-brass/30 px-3 py-1 font-label text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brass">Signature</p>
              </article>
              <article className="py-7">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-heading text-2xl text-plaster">Pappardelle al Ragù</h3>
                  <span className="min-w-4 flex-1 border-b border-dotted border-brass/35" aria-hidden="true" />
                  <p className="shrink-0 text-sm font-semibold text-brass tabular-nums">240 MAD</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-linen/70 sm:text-base sm:leading-7">Wide ribbons, twelve-hour beef ragù, tomato, root vegetables, and Parmigiano.</p>
              </article>
              <article className="py-7">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-heading text-2xl text-plaster">Ravioli Ricotta e Spinaci</h3>
                  <span className="min-w-4 flex-1 border-b border-dotted border-brass/35" aria-hidden="true" />
                  <p className="shrink-0 text-sm font-semibold text-brass tabular-nums">220 MAD</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-linen/70 sm:text-base sm:leading-7">Hand-pinched parcels, fresh ricotta, spinach, brown butter, sage, and lemon.</p>
              </article>
              <article className="py-7 last:pb-0">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-heading text-2xl text-plaster">Spaghetti alle Vongole</h3>
                  <span className="min-w-4 flex-1 border-b border-dotted border-brass/35" aria-hidden="true" />
                  <p className="shrink-0 text-sm font-semibold text-brass tabular-nums">250 MAD</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-linen/70 sm:text-base sm:leading-7">Clams, garlic, parsley, white wine, lemon, and a touch of chilli.</p>
              </article>
            </div>

            <Link
              href="/reservations"
              className="mt-12 inline-flex min-h-12 items-center gap-3 rounded-full bg-plaster px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-linen focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
            >
              Join us for dinner
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section id="pizza" className="scroll-mt-40 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-wine">From the oven</p>
              <h2 className="mt-3 font-heading text-4xl italic tracking-[-0.025em] text-wine sm:text-5xl">Pizza</h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-7 text-espresso/70 lg:justify-self-end">
              Long-fermented dough, a blistered crust, and toppings chosen for balance rather than abundance.
            </p>
          </ScrollReveal>

          <StaggerReveal className="mt-12 grid gap-x-16 md:grid-cols-2" staggerDelay={0.05}>
            <div className="divide-y divide-terracotta/20 border-t border-terracotta/20">
              <MenuItem
                name="Margherita Extra"
                description="San Marzano tomato, buffalo mozzarella, basil, Parmigiano, and extra-virgin olive oil."
                price="165 MAD"
                tag="Vegetarian"
              />
              <MenuItem
                name="Diavola"
                description="Tomato, fior di latte, spicy Calabrian salami, chilli, and oregano."
                price="185 MAD"
              />
            </div>
            <div className="divide-y divide-terracotta/20 border-t border-terracotta/20">
              <MenuItem
                name="Tartufata"
                description="Fior di latte, roasted mushrooms, truffle cream, thyme, and pecorino."
                price="220 MAD"
                tag="Vegetarian"
              />
              <MenuItem
                name="Prosciutto e Rucola"
                description="Tomato, fior di latte, Prosciutto di Parma, rocket, and aged Parmigiano."
                price="215 MAD"
              />
            </div>
          </StaggerReveal>
        </div>
      </section>

      <section id="classics" className="scroll-mt-40 bg-sage/45 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <ScrollReveal className="order-2 lg:order-1" direction="left">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-wine">Land, sea, and season</p>
            <h2 className="mt-3 text-balance font-heading text-4xl italic tracking-[-0.025em] text-wine sm:text-5xl">
              Italian Classics
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-espresso/70">
              Recognisable dishes treated with care, finished with local produce and a light Mediterranean hand.
            </p>

            <div className="mt-8 divide-y divide-olive/20 border-y border-olive/20">
              <MenuItem
                name="Branzino alla Mediterranea"
                description="Pan-roasted local sea bass, caponata, lemon-caper butter, and garden herbs."
                price="320 MAD"
              />
              <MenuItem
                name="Osso Buco alla Milanese"
                description="Slow-braised veal shank, saffron risotto, gremolata, and its roasting jus."
                price="360 MAD"
              />
              <MenuItem
                name="Pollo al Limone"
                description="Herb-roasted chicken, soft polenta, green olives, preserved lemon, and rosemary."
                price="265 MAD"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2" direction="right">
            <figure>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] shadow-[0_24px_70px_rgba(42,33,29,0.14)]">
                <Image
                  src={eveningService}
                  alt="Server finishing a Mediterranean sea bass dish with lemon olive oil at the table"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 border-l border-terracotta/50 pl-4 text-sm leading-6 text-espresso/70">
                Thoughtful finishing, quiet service, and time for conversation.
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-linen px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-wine">Stay a little longer</p>
            <h2 className="mt-3 text-balance font-heading text-4xl tracking-[-0.025em] text-wine sm:text-5xl">
              Something sweet, something poured.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-espresso/70">
              Desserts made for sharing, then a final glass or a bright alcohol-free spritz as the evening settles.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-terracotta/15 bg-plaster shadow-[0_20px_70px_rgba(42,33,29,0.06)] lg:grid-cols-2">
            <ScrollReveal as="section" id="desserts" className="scroll-mt-40 px-6 py-10 sm:px-10 sm:py-12 lg:px-12" direction="left">
              <div className="border-b border-terracotta/20 pb-6">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-wine">Dolci</p>
                <h3 className="mt-2 font-heading text-3xl italic text-wine">Desserts</h3>
              </div>
              <div className="divide-y divide-terracotta/15">
                <MenuItem
                  name="Tiramisù al Tavolo"
                  description="Mascarpone, espresso-soaked savoiardi, and cocoa, finished at your table."
                  headingLevel="h4"
                  price="110 MAD"
                  tag="For two"
                />
                <MenuItem
                  name="Panna Cotta agli Agrumi"
                  description="Vanilla panna cotta, orange blossom, citrus, and pistachio."
                  headingLevel="h4"
                  price="95 MAD"
                />
                <MenuItem
                  name="Torta al Cioccolato"
                  description="Warm dark chocolate cake, olive oil, sea salt, and fior di latte gelato."
                  headingLevel="h4"
                  price="115 MAD"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal as="section" id="drinks" className="scroll-mt-40 border-t border-terracotta/15 bg-wine px-6 py-10 text-plaster sm:px-10 sm:py-12 lg:border-t-0 lg:border-l lg:px-12" direction="right">
              <div className="border-b border-plaster/20 pb-6">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-brass">Aperitivo &amp; after</p>
                <h3 className="mt-2 font-heading text-3xl italic text-plaster">Drinks</h3>
              </div>
              <div className="divide-y divide-plaster/15">
                {[
                  ["Mediterra Spritz", "Bitter orange, sparkling wine, rosemary, and soda.", "125 MAD"],
                  ["Amalfi Zero", "Lemon, basil, white grape, tonic, and sea salt. Alcohol-free.", "80 MAD"],
                  ["Marrakech Negroni", "Gin, bitter aperitivo, vermouth, and preserved orange.", "135 MAD"],
                  ["Espresso & Petit Four", "Italian espresso with a small handmade sweet.", "65 MAD"],
                ].map(([name, description, price]) => (
                  <article key={name} className="py-6 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-4">
                      <h4 className="font-heading text-xl text-plaster sm:text-2xl">{name}</h4>
                      <span className="min-w-4 flex-1 border-b border-dotted border-brass/35" aria-hidden="true" />
                      <p className="shrink-0 text-sm font-semibold text-brass tabular-nums">{price}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-linen/75 sm:text-base sm:leading-7">{description}</p>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <ScrollReveal className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[1.5rem] border border-olive/20 bg-sage/35 px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-wine">A note from our kitchen</p>
            <h2 className="mt-3 font-heading text-2xl text-wine sm:text-3xl">The menu moves with the market.</h2>
            <p className="mt-3 text-sm leading-6 text-espresso/70 sm:text-base sm:leading-7">
              Dishes and prices may change with the season. Tell us about allergies or dietary needs when you reserve, and our team will guide the table with care.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-wine/30 px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.16em] text-wine transition-colors hover:bg-wine hover:text-plaster focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
          >
            Contact our team
          </Link>
        </ScrollReveal>
      </section>

      <section className="px-5 pb-20 pt-4 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <ScrollReveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-wine px-6 py-16 text-center text-plaster shadow-[0_24px_80px_rgba(90,31,43,0.2)] sm:px-10 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -top-32 left-1/2 size-80 -translate-x-1/2 rounded-full border border-brass/20" aria-hidden="true" />
          <div className="pointer-events-none absolute -top-20 left-1/2 size-56 -translate-x-1/2 rounded-full border border-brass/25" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.26em] text-brass">Your table awaits</p>
            <h2 className="mt-5 text-balance font-heading text-4xl leading-tight tracking-[-0.03em] text-plaster sm:text-5xl lg:text-6xl">
              Come for the pasta. Stay for the evening.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-linen/80 sm:text-lg sm:leading-8">
              Request a table for dinner in Marrakech. Our team will reply personally by WhatsApp to confirm every detail.
            </p>
            <Link
              href="/reservations"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-plaster px-7 py-3 font-label text-xs font-bold uppercase tracking-[0.18em] text-wine transition-colors hover:bg-linen focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"
            >
              Request a Table
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <p className="mt-5 text-xs leading-5 text-linen/65">Your table is confirmed only after our team replies.</p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
