import Image from "next/image";
import { Car, ExternalLink, MapPin, PersonStanding } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=12+Derb+El+Ferraine+Medina+Marrakech";

export function VisitSection() {
  return (
    <section aria-labelledby="visit-heading" className="bg-linen px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <ScrollReveal className="relative lg:col-span-7" direction="right">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-plaster sm:aspect-[5/4]">
            <Image
              src="/images/contact/contact-hospitality.png"
              alt="A host placing olive oil and focaccia on a candlelit table"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-x-4 bottom-4 rounded-[1.25rem] border border-plaster/20 bg-espresso/90 p-5 text-plaster backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:end-6 sm:w-80 sm:p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              <address className="not-italic text-sm leading-6 text-plaster/85">
                <span className="block font-semibold text-plaster">Mediterra Marrakech</span>
                12 Derb El Ferraine
                <br />
                Medina, Marrakech 40000
              </address>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-5" direction="left" delay={0.08}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-wine">Arrival</p>
          <h2
            id="visit-heading"
            className="max-w-[12ch] text-balance font-heading text-[clamp(2.6rem,4.7vw,4.8rem)] font-normal leading-[1.02] tracking-[-0.035em]"
          >
            Easy to find. <span className="italic text-wine">Quiet once inside.</span>
          </h2>
          <p className="mt-7 max-w-lg text-pretty text-base leading-7 text-espresso/70 sm:text-lg sm:leading-8">
            Our host team can guide your driver and meet you at the nearest Medina drop-off point when needed.
          </p>

          <div className="mt-9 space-y-6 border-y border-terracotta/20 py-7">
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage text-olive">
                <Car className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-espresso">Arriving by taxi</h3>
                <p className="mt-1 text-sm leading-6 text-espresso/65">Ask for the Mouassine quarter. The final walk is less than five minutes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage text-olive">
                <PersonStanding className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-espresso">Walking from Jemaa el-Fnaa</h3>
                <p className="mt-1 text-sm leading-6 text-espresso/65">Allow about ten minutes through the Medina lanes. Look for our brass plaque.</p>
              </div>
            </div>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-espresso px-8 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
          >
            Open in Google Maps
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
