"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUpRight, CalendarDays, HeartHandshake, MessageCircle } from "lucide-react";
import Link from "next/link";

const fieldClass = "min-h-12 w-full rounded-xl border border-espresso/20 bg-plaster px-4 py-3 text-base text-espresso outline-none transition-colors placeholder:text-espresso/45 focus-visible:border-wine focus-visible:ring-2 focus-visible:ring-wine/25";

function localToday() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function ReservationForm() {
  const dateInput = useRef<HTMLInputElement>(null);
  const [contactMethod, setContactMethod] = useState("whatsapp");
  const [dateError, setDateError] = useState("");

  useEffect(() => {
    if (dateInput.current) dateInput.current.min = localToday();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const date = String(data.get("date") || "");
    if (date < localToday()) {
      setDateError("Choose today or a future date.");
      form.querySelector<HTMLInputElement>("#reservation-date")?.focus();
      return;
    }
    setDateError("");

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const guests = String(data.get("guests") || "");
    const time = String(data.get("time") || "");
    const requests = String(data.get("requests") || "").trim();
    const message = [
      "Hello Mediterra, I would like to request a table.",
      "",
      `Name: ${name}`,
      `Date: ${date}`,
      `Time: ${time} (Marrakech time)`,
      `Guests: ${guests}`,
      `Phone / WhatsApp: ${phone}`,
      email && `Email: ${email}`,
      `Preferred reply: ${contactMethod === "email" ? "Email" : "WhatsApp"}`,
      requests && `Notes: ${requests}`,
      "",
      "I understand the table is confirmed only when your team replies.",
    ].filter(Boolean).join("\n");

    window.location.href = `https://wa.me/212661842739?text=${encodeURIComponent(message)}`;
  }

  return (
    <section id="reservation-form" aria-labelledby="form-title" className="scroll-mt-20 bg-plaster px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-[minmax(0,0.83fr)_minmax(0,1.17fr)] lg:gap-16 xl:gap-24">
        <div className="lg:pt-7">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-wine">01 / Your table</p>
          <h2 id="form-title" className="max-w-[12ch] text-balance font-heading text-[clamp(2.8rem,5vw,5.3rem)] font-normal leading-[1.04] tracking-[-0.04em]">
            Tell us when to <span className="italic text-wine">expect you.</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base leading-8 text-espresso/75">
            Give us the details that make your evening yours. We review each request and reply personally, so your table feels considered from the start.
          </p>
          <div className="mt-10 grid max-w-md gap-6 border-t border-terracotta/30 pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div>
              <CalendarDays className="size-6 text-wine" aria-hidden="true" />
              <h3 className="mt-3 font-heading text-xl">Choose your moment</h3>
              <p className="mt-1 text-sm leading-6 text-espresso/70">Dinner, a celebration, or a slower night together.</p>
            </div>
            <div>
              <HeartHandshake className="size-6 text-wine" aria-hidden="true" />
              <h3 className="mt-3 font-heading text-xl">We take it from there</h3>
              <p className="mt-1 text-sm leading-6 text-espresso/70">Our host team confirms every table by message.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-terracotta/20 bg-linen p-5 shadow-[0_22px_70px_rgba(42,33,29,0.06)] sm:p-8 xl:p-10">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-3 border-b border-espresso/15 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine">Reservation request</p>
              <p className="mt-2 font-heading text-2xl">An evening at Mediterra</p>
            </div>
            <span className="rounded-full border border-olive/40 px-3 py-1.5 text-xs font-medium text-espresso">Marrakech time</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="reservation-date" className="mb-2 block text-sm font-semibold">Preferred date <span className="text-wine">*</span></label>
                <input ref={dateInput} id="reservation-date" name="date" type="date" required aria-describedby={dateError ? "date-error" : undefined} aria-invalid={!!dateError} onChange={() => setDateError("")} className={fieldClass} />
                {dateError && <p id="date-error" role="alert" className="mt-2 text-sm text-wine">{dateError}</p>}
              </div>
              <div>
                <label htmlFor="reservation-time" className="mb-2 block text-sm font-semibold">Preferred time <span className="text-wine">*</span></label>
                <input id="reservation-time" name="time" type="time" required className={fieldClass} />
              </div>
            </div>
            <div>
              <label htmlFor="reservation-guests" className="mb-2 block text-sm font-semibold">Guests <span className="text-wine">*</span></label>
              <select id="reservation-guests" name="guests" required defaultValue="" className={fieldClass}>
                <option value="" disabled>Select party size</option>
                {Array.from({ length: 8 }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1} {index === 0 ? "guest" : "guests"}</option>)}
                <option value="9+">9 or more guests</option>
              </select>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="reservation-name" className="mb-2 block text-sm font-semibold">Full name <span className="text-wine">*</span></label>
                <input id="reservation-name" name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="reservation-phone" className="mb-2 block text-sm font-semibold">Phone / WhatsApp <span className="text-wine">*</span></label>
                <input id="reservation-phone" name="phone" type="tel" autoComplete="tel" required maxLength={30} placeholder="Include country code" className={fieldClass} />
              </div>
            </div>
            <div>
              <label htmlFor="reservation-email" className="mb-2 block text-sm font-semibold">Email {contactMethod === "email" ? <span className="text-wine">*</span> : <span className="font-normal text-espresso/65">(optional)</span>}</label>
              <input id="reservation-email" name="email" type="email" autoComplete="email" required={contactMethod === "email"} maxLength={254} placeholder="you@example.com" className={fieldClass} />
            </div>
            <fieldset>
              <legend className="mb-3 text-sm font-semibold">How should we reply?</legend>
              <div className="flex flex-wrap gap-3">
                {[["whatsapp", "WhatsApp"], ["email", "Email"]].map(([value, label]) => (
                  <label key={value} className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-espresso/20 bg-plaster px-4 py-2.5 text-sm font-medium has-[:checked]:border-wine has-[:checked]:bg-wine has-[:checked]:text-plaster">
                    <input type="radio" name="contactMethod" value={value} checked={contactMethod === value} onChange={() => setContactMethod(value)} className="accent-wine" />{label}
                  </label>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor="reservation-requests" className="mb-2 block text-sm font-semibold">Anything we should know? <span className="font-normal text-espresso/65">(optional)</span></label>
              <textarea id="reservation-requests" name="requests" rows={3} maxLength={500} placeholder="An occasion, dietary needs, or a little note for our team" className={`${fieldClass} resize-y`} />
            </div>
            <div className="border-t border-espresso/15 pt-6">
              <button type="submit" className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-wine px-6 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">
                <MessageCircle className="size-5" aria-hidden="true" /> Continue to WhatsApp <ArrowUpRight className="size-4" aria-hidden="true" />
              </button>
              <p className="mt-4 text-pretty text-center text-sm leading-6 text-espresso/75">WhatsApp opens with your details. Send the message there to complete your request. Your table is confirmed only after our team replies.</p>
              <p className="mt-3 text-center text-xs leading-5 text-espresso/65">We use your details only to arrange your visit. <Link href="/privacy" className="font-semibold underline underline-offset-2 transition-colors after:hidden hover:text-wine">Privacy policy</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
