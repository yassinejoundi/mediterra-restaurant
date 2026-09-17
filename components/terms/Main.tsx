import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sections = [
  { id: "requests", number: "01", title: "Reservation requests", paragraphs: [
    "The reservation form prepares a WhatsApp message with the details you enter. You must send that message in WhatsApp for our team to receive your request. Sending a request does not hold a table.",
    "A reservation is confirmed only when our host team replies with a confirmation. Availability and seating depend on the date, time and party size you request.",
  ] },
  { id: "changes", number: "02", title: "Changes and arrival", paragraphs: [
    "If your plans change, please contact us as soon as you can. The team will discuss cancellations, changes in party size or a different arrival time with you directly.",
    "If you are running late, let us know using the contact details in your confirmation. We will tell you what we can accommodate at that time. Any specific conditions agreed for your booking will be shared with you by our team.",
  ] },
  { id: "menu", number: "03", title: "Menu and information", paragraphs: [
    "We try to keep the website useful and current. Dishes, ingredients, prices, opening hours and availability can change. Please confirm any detail that matters to your visit with our team.",
    "Tell us about allergies and dietary needs before dining. Our team can discuss ingredients and preparation, but the website alone cannot confirm whether a dish is suitable for you.",
  ] },
  { id: "website", number: "04", title: "Using this website", paragraphs: [
    "The words, photographs and design on this site are presented for your personal use while exploring Mediterra. Please ask us before reusing site content for a commercial purpose.",
    "Links to WhatsApp, maps and other external services open websites or apps run by others. Their terms and privacy practices apply when you use them.",
  ] },
  { id: "contact", number: "05", title: "Questions about these terms", paragraphs: [
    "If anything is unclear before you reserve, contact our team at ciao@mediterra.ma or through the contact page. We will be glad to explain the arrangements for your visit.",
    "We may update these terms as the site and our reservation process change. The date above shows when this page was last revised.",
  ] },
] as const;

export function Main() {
  return <main id="main-content" tabIndex={-1} className="flex-grow bg-plaster">
    <section className="mx-auto grid max-w-screen-2xl gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wine">The details / Terms</p>
        <h1 className="mt-6 max-w-[12ch] font-heading text-[clamp(3.2rem,6vw,6.8rem)] leading-[1.02] tracking-[-0.045em]">Good evenings begin with <span className="italic text-wine">clear plans.</span></h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-espresso/75 sm:text-lg">These terms explain how our website and reservation requests work, so you know what to expect before you join us.</p>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-espresso/60">Last updated 16 September 2026</p>
        <Link href="/reservations" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-wine px-7 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">Request a table <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
      </div>
      <figure className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] lg:aspect-[4/5]">
        <Image src="/images/editorial/terms-table.png" alt="A host carefully sets a candlelit table with linen and handmade ceramics" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
      </figure>
    </section>
    <nav aria-label="Terms topics" className="sticky top-20 z-30 border-y border-terracotta/15 bg-linen/95 shadow-[0_8px_24px_rgba(42,33,29,0.05)] backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:justify-center lg:px-12">
        {sections.map(section => <a key={section.id} href={`#${section.id}`} className="inline-flex min-h-11 shrink-0 items-center rounded-full px-4 font-label text-[0.7rem] font-bold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-plaster hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine">{section.title}</a>)}
      </div>
    </nav>
    <div className="mx-auto max-w-screen-xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mb-12 max-w-3xl rounded-2xl border border-terracotta/25 bg-linen p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine">In brief</p>
        <p className="mt-3 font-heading text-2xl leading-snug">A request opens a conversation with our host. Your table is yours once our team confirms it.</p>
      </div>
      {sections.map(section => <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="grid scroll-mt-24 gap-5 border-b border-terracotta/25 py-10 last:border-0 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">{section.number} / Terms</p><h2 id={`${section.id}-title`} className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">{section.title}</h2></div>
        <div className="max-w-2xl space-y-5 text-base leading-8 text-espresso/75">{section.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
      </section>)}
    </div>
    <section className="bg-wine px-5 py-16 text-plaster sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-plaster/75">Before your visit</p><h2 className="mt-4 font-heading text-4xl sm:text-5xl">Ask us anything.</h2><p className="mt-4 max-w-lg leading-7 text-plaster/80">Our host team can talk through your reservation and the details that matter to you.</p></div>
        <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-plaster px-7 py-3 text-sm font-semibold text-wine transition-[gap,background-color] duration-300 hover:gap-5 hover:bg-linen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster">Contact our team <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
      </div>
      <div className="mx-auto mt-10 flex max-w-screen-xl gap-6 text-sm text-plaster/80"><Link href="/privacy" className="underline underline-offset-4 hover:text-plaster">Privacy</Link><Link href="/faq" className="underline underline-offset-4 hover:text-plaster">FAQ</Link></div>
    </section>
  </main>;
}
