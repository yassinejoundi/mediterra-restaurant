import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";

export function ReservationVisit() {
  return (
    <>
      <section aria-labelledby="after-request-title" className="bg-linen px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-screen-2xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-espresso sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image src="/images/reservations/handmade-pasta.png" alt="Chef's hands preparing fresh pasta on a flour-dusted table" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <span className="absolute bottom-5 start-5 rounded-full bg-plaster/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-espresso backdrop-blur-sm sm:bottom-7 sm:start-7">Made by hand, served with care</span>
          </div>
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-wine">02 / What happens next</p>
            <h2 id="after-request-title" className="max-w-[12ch] text-balance font-heading text-[clamp(2.8rem,5vw,5.3rem)] font-normal leading-[1.04] tracking-[-0.04em]">
              A personal reply, <span className="italic text-wine">then your table.</span>
            </h2>
            <p className="mt-6 text-pretty text-base leading-8 text-espresso/75">
              Once you send your WhatsApp request, our host team checks availability and replies to confirm the details. Please wait for that message before considering your reservation confirmed.
            </p>
            <div className="mt-9 space-y-0 border-t border-terracotta/30">
              <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-terracotta/30 py-6">
                <span className="font-heading text-xl italic text-wine">01</span>
                <div><h3 className="font-heading text-xl">Send your request</h3><p className="mt-1 text-sm leading-6 text-espresso/70">Your details arrive together in one WhatsApp message.</p></div>
              </div>
              <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-terracotta/30 py-6">
                <span className="font-heading text-xl italic text-wine">02</span>
                <div><h3 className="font-heading text-xl">Hear from our host</h3><p className="mt-1 text-sm leading-6 text-espresso/70">We confirm your table and note anything special about your evening.</p></div>
              </div>
            </div>
            <Link href="/menu" className="mt-8 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-wine underline decoration-terracotta/40 underline-offset-4 transition-[gap,color] duration-300 after:hidden hover:gap-4 hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">
              Take a look at the menu <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="visit-details-title" className="bg-plaster px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-wine">Before you arrive</p>
              <h2 id="visit-details-title" className="font-heading text-[clamp(2.7rem,5vw,5rem)] font-normal leading-[1.05] tracking-[-0.04em]">The little details.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-espresso/70">For same-day plans, larger groups, or anything you would like to ask first, speak with our team directly.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[1.5rem] border border-terracotta/20 bg-linen p-7 sm:p-8">
              <Clock3 className="size-6 text-wine" aria-hidden="true" />
              <h3 className="mt-7 font-heading text-2xl">Opening hours</h3>
              <dl className="mt-5 space-y-3 text-sm leading-6 text-espresso/75">
                <div className="flex justify-between gap-4"><dt>Tuesday–Thursday</dt><dd>18:00–23:30</dd></div>
                <div className="flex justify-between gap-4"><dt>Friday–Sunday</dt><dd>13:00–00:00</dd></div>
                <div className="flex justify-between gap-4"><dt>Monday</dt><dd>Closed</dd></div>
              </dl>
            </article>
            <article className="rounded-[1.5rem] border border-terracotta/20 bg-linen p-7 sm:p-8">
              <MessageCircle className="size-6 text-wine" aria-hidden="true" />
              <h3 className="mt-7 font-heading text-2xl">Plans for tonight?</h3>
              <p className="mt-5 text-sm leading-6 text-espresso/75">Message us directly for same-day availability or a question about your visit.</p>
              <a href="https://wa.me/212661842739" target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-wine underline decoration-terracotta/40 underline-offset-4 hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">WhatsApp our team <ArrowUpRight className="size-4" aria-hidden="true" /></a>
            </article>
            <article className="rounded-[1.5rem] border border-terracotta/20 bg-linen p-7 sm:p-8">
              <MapPin className="size-6 text-wine" aria-hidden="true" />
              <h3 className="mt-7 font-heading text-2xl">Find your way</h3>
              <p className="mt-5 text-sm leading-6 text-espresso/75">A warm Mediterranean room awaits in Marrakech. Find contact and location details before you set out.</p>
              <Link href="/contact" className="mt-6 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-wine underline decoration-terracotta/40 underline-offset-4 hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">Visit contact page <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-wine p-7 text-plaster sm:p-9">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-linen">Prefer to talk?</p><p className="mt-2 font-heading text-2xl sm:text-3xl">We are here to help you plan the evening.</p></div>
            <a href="tel:+212524384217" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-plaster/60 px-6 py-3 text-sm font-semibold transition-colors hover:bg-plaster hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster"><Phone className="size-4" aria-hidden="true" /> Call our team</a>
          </div>
        </div>
      </section>
    </>
  );
}
