import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

const groups = [
  {
    id: "reservations", number: "01", title: "Your reservation", intro: "A personal reply before your evening begins.",
    questions: [
      ["How do I reserve a table?", "Share your preferred date, time, party size and contact details through our reservation page. It opens a prepared WhatsApp message for you to send to our host team."],
      ["Is my table confirmed when I send a request?", "Your table is confirmed only when our team replies with a confirmation. Please wait for that reply before making plans around your table."],
      ["Can I request a table for tonight?", "Yes. Same-day requests are welcome, subject to availability. Please wait for confirmation before travelling to us."],
      ["What about a larger group or a special occasion?", "The form accepts parties of nine or more. Add your group size, occasion or seating preferences in the notes so our host can discuss what is possible."],
      ["Can you reply by email?", "You may select email as your preferred reply and include your address. The request still opens in WhatsApp, where you need to send it to our team."],
    ],
  },
  {
    id: "menu", number: "02", title: "At the table", intro: "Simple ingredients, treated with care.",
    questions: [
      ["Is the pasta made by hand?", "Handmade pasta is at the heart of our kitchen, alongside Italian recipes and tableside finishing. Explore the current menu for the dishes we are sharing."],
      ["Do you offer vegetarian dishes?", "Our menu includes vegetarian choices. Dishes can change, so please check the current menu and tell our team about your needs when requesting a table."],
      ["Can you accommodate allergies or dietary needs?", "Tell us about allergies and dietary needs in your reservation note. Our team can discuss ingredients and preparation with you before your visit; please do not assume any dish is free from cross-contact."],
      ["Are menu prices final?", "The online menu is a guide. Dishes, ingredients and prices may change with the season; our team can confirm current details before you order."],
    ],
  },
  {
    id: "visit", number: "03", title: "Your visit", intro: "The practical details, so you can settle in.",
    questions: [
      ["Where can I find you?", "Mediterra is at 12 Derb El Ferraine, Medina, Marrakech 40000. Visit our contact page for directions and ways to reach us."],
      ["When are you open?", "Tuesday to Thursday: 18:00–23:30. Friday to Sunday: 13:00–00:00. Monday: closed. Hours may change; contact us for a particular date."],
      ["Is there a dress code?", "Dress for an evening you will enjoy. If you have a particular question about your visit, our team will be happy to help."],
      ["Which payment methods do you accept?", "Please ask our team about current payment options before your visit if you need to plan ahead."],
    ],
  },
] as const;

export function Main() {
  return <main id="main-content" tabIndex={-1} className="flex-grow bg-plaster">
    <section className="mx-auto grid max-w-screen-2xl gap-10 px-5 pb-16 pt-14 sm:px-8 lg:min-h-[38rem] lg:grid-cols-2 lg:items-stretch lg:gap-20 lg:px-12 lg:pb-24 lg:pt-20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wine">Good to know / Mediterra Marrakech</p>
        <h1 className="mt-6 max-w-[12ch] font-heading text-[clamp(3.2rem,6vw,6.8rem)] leading-[1.02] tracking-[-0.045em] text-espresso">A little clarity <span className="italic text-wine">before dinner.</span></h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-espresso/75 sm:text-lg">From your first message to your last course, we want the evening to feel easy. Here are the details guests ask us most often.</p>
        <Link href="/reservations" className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-wine px-7 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">Request a table <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
      </div>
      <figure className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] lg:h-full lg:aspect-auto">
        <Image src="/images/editorial/faq-table.png" alt="An intimate table set with handmade pasta, linen, olive oil and candlelight" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        <figcaption className="absolute bottom-5 left-5 rounded-full bg-plaster/90 px-4 py-2 text-xs font-medium text-espresso backdrop-blur-sm">A table worth slowing down for</figcaption>
      </figure>
    </section>
    <nav aria-label="FAQ topics" className="sticky top-20 z-30 border-y border-terracotta/15 bg-linen/95 shadow-[0_8px_24px_rgba(42,33,29,0.05)] backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:justify-center lg:px-12">
        {groups.map(group => <a key={group.id} href={`#${group.id}`} className="inline-flex min-h-11 shrink-0 items-center rounded-full px-4 font-label text-[0.7rem] font-bold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-plaster hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine">{group.title}</a>)}
      </div>
    </nav>
    <div className="mx-auto max-w-screen-xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {groups.map(group => <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="grid scroll-mt-24 gap-8 border-b border-terracotta/25 py-12 first:pt-0 last:border-0 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">{group.number} / Questions</p>
          <h2 id={`${group.id}-title`} className="mt-4 font-heading text-4xl leading-tight tracking-tight text-espresso sm:text-5xl">{group.title}</h2>
          <p className="mt-4 max-w-xs leading-7 text-espresso/70">{group.intro}</p>
          {group.id === "menu" && <Link href="/menu" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-wine underline underline-offset-4 transition-[gap,color] duration-300 after:hidden hover:gap-4 hover:text-espresso">View the menu <ArrowUpRight className="size-4" aria-hidden="true" /></Link>}
          {group.id === "visit" && <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-wine underline underline-offset-4 transition-[gap,color] duration-300 after:hidden hover:gap-4 hover:text-espresso">Contact &amp; directions <ArrowUpRight className="size-4" aria-hidden="true" /></Link>}
        </div>
        <div className="divide-y divide-terracotta/25 border-t border-terracotta/25">
          {group.questions.map(([question, answer]) => <details key={question} className="group py-1">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 text-left font-heading text-xl leading-snug text-espresso marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine [&::-webkit-details-marker]:hidden">{question}<Plus className="size-5 shrink-0 text-wine transition-transform group-open:rotate-45" aria-hidden="true" /></summary>
            <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-espresso/75 sm:text-base">{answer}</p>
          </details>)}
        </div>
      </section>)}
    </div>
    <section className="bg-wine px-5 py-16 text-plaster sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-plaster/75">Still wondering?</p><h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">We are here to help.</h2><p className="mt-4 max-w-lg leading-7 text-plaster/80">Ask us about your visit, or share the details of an evening you have in mind.</p></div>
        <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-plaster px-7 py-3 text-sm font-semibold text-wine transition-colors hover:bg-linen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster">Contact our team <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
      </div>
    </section>
  </main>;
}
