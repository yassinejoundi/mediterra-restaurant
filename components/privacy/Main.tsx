import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sections = [
  { id: "information", number: "01", title: "What you share", paragraphs: [
    "When you prepare a reservation request, you can enter your name, preferred date and time, party size, phone or WhatsApp number, optional email address, preferred reply method and any notes you choose to add.",
    "The reservation form prepares a WhatsApp message on your device. Your details are shared with our team when you choose to send that message. If you contact us by phone or email, we receive the information you provide through that channel.",
  ] },
  { id: "use", number: "02", title: "How we use it", paragraphs: [
    "We use the details you send to answer your enquiry, check availability, discuss dietary or accessibility needs you raise, arrange your visit and keep you updated about your reservation.",
    "Please share only the information our team needs to help with your visit. You can describe an allergy or preference without sending unrelated sensitive details.",
  ] },
  { id: "whatsapp", number: "03", title: "WhatsApp and other services", paragraphs: [
    "The reservation request opens WhatsApp. Once you send the message, WhatsApp processes that conversation under its own privacy terms. If you choose email or phone instead, your provider also handles that communication.",
    "Links to maps and other external sites take you to services with their own privacy practices. We encourage you to read those policies when you use them.",
  ] },
  { id: "care", number: "04", title: "Keeping details considered", paragraphs: [
    "We limit reservation details to the people helping with your enquiry or visit and keep them only as long as needed for that purpose and any applicable obligations. If you want us to review information we hold about you, contact us directly.",
    "We do not use reservation details in this form to subscribe you to marketing. If our practices change, we will update this page.",
  ] },
  { id: "rights", number: "05", title: "Your questions and rights", paragraphs: [
    "You can ask to access or correct personal information you have sent us, or raise an objection to its use, by emailing ciao@mediterra.ma. You may also ask us to review a deletion request, subject to information we need to retain for applicable obligations.",
    "Please include enough detail for us to identify your enquiry without sending more personal information than necessary. We may need to verify that the request comes from you.",
  ] },
] as const;

export function Main() {
  return <main id="main-content" tabIndex={-1} className="flex-grow bg-plaster">
    <section className="mx-auto grid max-w-screen-2xl gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wine">The details / Privacy</p>
        <h1 className="mt-6 max-w-[12ch] font-heading text-[clamp(3.2rem,6vw,6.8rem)] leading-[1.02] tracking-[-0.045em]">Your details, <span className="italic text-wine">treated with care.</span></h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-espresso/75 sm:text-lg">A personal reservation begins with a few details. Here is what happens when you share them with Mediterra.</p>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-espresso/60">Last updated 16 September 2026</p>
        <a href="mailto:ciao@mediterra.ma?subject=Privacy%20question" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-wine px-7 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">Ask a privacy question <ArrowUpRight className="size-4" aria-hidden="true" /></a>
      </div>
      <figure className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] lg:aspect-[4/5]">
        <Image src="/images/editorial/privacy-table.png" alt="A quiet candlelit table with linen and an olive branch" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
      </figure>
    </section>
    <nav aria-label="Privacy topics" className="sticky top-20 z-30 border-y border-terracotta/15 bg-linen/95 shadow-[0_8px_24px_rgba(42,33,29,0.05)] backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:justify-center lg:px-12">
        {sections.map(section => <a key={section.id} href={`#${section.id}`} className="inline-flex min-h-11 shrink-0 items-center rounded-full px-4 font-label text-[0.7rem] font-bold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-plaster hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine">{section.title}</a>)}
      </div>
    </nav>
    <div className="mx-auto max-w-screen-xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mb-12 max-w-3xl rounded-2xl border border-terracotta/25 bg-linen p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine">In brief</p>
        <p className="mt-3 font-heading text-2xl leading-snug">Your reservation details help our host team answer you and prepare your visit. Sending the prepared WhatsApp message shares those details with us and WhatsApp.</p>
      </div>
      {sections.map(section => <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="grid scroll-mt-24 gap-5 border-b border-terracotta/25 py-10 last:border-0 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">{section.number} / Privacy</p><h2 id={`${section.id}-title`} className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">{section.title}</h2></div>
        <div className="max-w-2xl space-y-5 text-base leading-8 text-espresso/75">{section.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
      </section>)}
    </div>
    <section className="bg-wine px-5 py-16 text-plaster sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-plaster/75">Here to help</p><h2 className="mt-4 font-heading text-4xl sm:text-5xl">Talk to our team.</h2><p className="mt-4 max-w-lg leading-7 text-plaster/80">For a privacy request or a question about your reservation, we are within reach.</p></div>
        <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-plaster px-7 py-3 text-sm font-semibold text-wine transition-colors hover:bg-linen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster">Contact Mediterra <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
      </div>
      <div className="mx-auto mt-10 flex max-w-screen-xl gap-6 text-sm text-plaster/80"><Link href="/terms" className="underline underline-offset-4 transition-colors after:hidden hover:text-plaster">Terms</Link><Link href="/reservations" className="underline underline-offset-4 transition-colors after:hidden hover:text-plaster">Reservations</Link></div>
    </section>
  </main>;
}
