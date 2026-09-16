import { Clock3, Mail, MessageCircle, Phone } from "lucide-react";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";

const contactMethods = [
  {
    title: "WhatsApp",
    description: "Best for reservation questions and same-day updates.",
    label: "+212 661 84 27 39",
    href: "https://wa.me/212661842739",
    icon: MessageCircle,
  },
  {
    title: "Call",
    description: "Speak with our host team during opening hours.",
    label: "+212 524 38 42 17",
    href: "tel:+212524384217",
    icon: Phone,
  },
  {
    title: "Email",
    description: "For group dinners, private occasions, and press.",
    label: "ciao@mediterra.ma",
    href: "mailto:ciao@mediterra.ma",
    icon: Mail,
  },
];

export function ContactDetails() {
  return (
    <section aria-labelledby="contact-details-heading" className="bg-plaster px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <ScrollReveal className="mb-12 grid gap-6 md:grid-cols-12 md:items-end lg:mb-16">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-wine">Plan your evening</p>
            <h2
              id="contact-details-heading"
              className="max-w-[12ch] text-balance font-heading text-[clamp(2.6rem,5vw,5.2rem)] font-normal leading-[1.02] tracking-[-0.035em]"
            >
              A host is here <span className="italic text-wine">when you need us.</span>
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-base leading-7 text-espresso/70 md:col-span-5 md:justify-self-end md:text-lg md:leading-8">
            Reservations remain the quickest path to a table. For anything else, reach us in the way that feels easiest.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid gap-5 lg:grid-cols-4 lg:gap-6">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <article key={method.title} className="flex min-h-72 flex-col rounded-[1.5rem] border border-terracotta/15 bg-linen p-7 sm:p-8">
                <div className="flex size-11 items-center justify-center rounded-full bg-plaster text-wine">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-8 font-heading text-2xl">{method.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-espresso/65">{method.description}</p>
                <a
                  href={method.href}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                  rel={method.title === "WhatsApp" ? "noreferrer" : undefined}
                  className="mt-auto pt-8 text-sm font-semibold text-wine underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
                >
                  {method.label}
                </a>
              </article>
            );
          })}

          <article className="flex min-h-72 flex-col rounded-[1.5rem] bg-wine p-7 text-plaster sm:p-8">
            <div className="flex size-11 items-center justify-center rounded-full bg-plaster/10 text-linen">
              <Clock3 className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mt-8 font-heading text-2xl">Opening Hours</h3>
            <dl className="mt-5 space-y-3 text-sm leading-6 text-plaster/80">
              <div className="flex justify-between gap-4 border-b border-plaster/15 pb-3">
                <dt>Tue - Thu</dt>
                <dd className="font-semibold text-plaster">18:00 - 23:30</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-plaster/15 pb-3">
                <dt>Fri - Sun</dt>
                <dd className="font-semibold text-plaster">13:00 - 00:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Monday</dt>
                <dd className="font-semibold text-plaster">Closed</dd>
              </div>
            </dl>
          </article>
        </StaggerReveal>
      </div>
    </section>
  );
}
