/* eslint-disable */
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
import reservationHeroImage from "../../src/assets/images/remote-image-b47fef865fef.jpg";
import diningExperienceImage from "../../src/assets/images/remote-image-1179bc261785.png";
import privateEventImage from "../../src/assets/images/remote-image-f7b98416dd0e.png";

export function Main() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
      <div className="absolute inset-0 w-full h-full">
      <Image alt="" className="object-cover" src={reservationHeroImage} fill priority sizes="100vw" />
      <div className="absolute inset-0 bg-espresso/40 mix-blend-multiply"></div>
      </div>
      <ScrollReveal className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <h1 className="font-headline text-5xl md:text-6xl font-bold text-plaster mb-6 drop-shadow-md">Request your table at Mediterra.</h1>
      <p className="font-body text-lg md:text-xl text-plaster/90 mb-10 font-light max-w-2xl mx-auto drop-shadow">
                          We personally manage all reservations to ensure the highest level of hospitality. Submit your request below, and our concierge will confirm your table via WhatsApp.
                      </p>
      <Link className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-linen text-espresso font-headline text-base font-semibold tracking-wide hover:bg-white transition-colors duration-300 shadow-lg" href="#reservation-form">
                          Start Reservation Request
                      </Link>
      </ScrollReveal>
      </section>
      {/* Reservation Form Section */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto scroll-mt-24" id="reservation-form">
      <ScrollReveal className="text-center mb-12">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-espresso mb-4">Your Details</h2>
      <p className="font-body text-taupe text-lg">Please provide your preferences for an unforgettable evening.</p>
      </ScrollReveal>
      <ScrollReveal className="bg-linen rounded-2xl p-8 md:p-12 border border-espresso/10 shadow-sm relative overflow-hidden" delay={0.08}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%232A211D\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')" }}></div>
      <form className="relative z-10 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Full Name */}
      <div>
      <label className="block font-label text-xs font-bold uppercase tracking-wider text-espresso mb-2" htmlFor="fullName">Full Name</label>
      <input className="w-full rounded-xl border border-accent/15 bg-plaster/70 px-4 py-3.5 font-body text-base text-espresso placeholder-taupe/60 shadow-sm transition-all duration-300 focus:border-brass focus:bg-plaster focus:ring-2 focus:ring-brass/20" id="fullName" name="fullName" placeholder="Giovanna Rossi" required type="text"/>
      </div>
      {/* Phone / WhatsApp */}
      <div>
      <label className="block font-label text-xs font-bold uppercase tracking-wider text-espresso mb-2" htmlFor="phone">Phone / WhatsApp Number</label>
      <div className="flex items-center rounded-xl border border-accent/15 bg-plaster/70 px-4 shadow-sm transition-all duration-300 focus-within:border-brass focus-within:bg-plaster focus-within:ring-2 focus-within:ring-brass/20">
      <span className="text-taupe font-body text-base pr-3">+</span>
      <input className="w-full border-0 bg-transparent px-0 py-3.5 font-body text-base text-espresso placeholder-taupe/60 outline-none focus:outline-none focus:ring-0" id="phone" name="phone" placeholder="212 600 000 000" required type="tel"/>
      </div>
      </div>
      {/* Email */}
      <div>
      <label className="block font-label text-xs font-bold uppercase tracking-wider text-espresso mb-2" htmlFor="email">Email Address (Optional)</label>
      <input className="w-full rounded-xl border border-accent/15 bg-plaster/70 px-4 py-3.5 font-body text-base text-espresso placeholder-taupe/60 shadow-sm transition-all duration-300 focus:border-brass focus:bg-plaster focus:ring-2 focus:ring-brass/20" id="email" name="email" placeholder="giovanna@example.com" type="email"/>
      </div>
      {/* Guests */}
      <div>
      <label className="block font-label text-xs font-bold uppercase tracking-wider text-espresso mb-2" htmlFor="guests">Number of Guests</label>
      <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-accent/15 bg-plaster/70 px-4 py-3.5 pr-10 font-body text-base text-espresso shadow-sm transition-all duration-300 focus:border-brass focus:bg-plaster focus:ring-2 focus:ring-brass/20" id="guests" name="guests" required defaultValue="">
      <option className="bg-plaster text-taupe" disabled value="">Select party size</option>
      <option className="bg-plaster text-espresso" value="1">1 Guest</option>
      <option className="bg-plaster text-espresso" value="2">2 Guests</option>
      <option className="bg-plaster text-espresso" value="3">3 Guests</option>
      <option className="bg-plaster text-espresso" value="4">4 Guests</option>
      <option className="bg-plaster text-espresso" value="5">5 Guests</option>
      <option className="bg-plaster text-espresso" value="6">6 Guests</option>
      <option className="bg-plaster text-espresso" value="7+">7+ Guests (Requires review)</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-taupe">
      <FontAwesomeMaterialIcon name="expand_more" className="text-lg" />
      </div>
      </div>
      </div>
      {/* Date */}
      <div>
      <label className="block font-label text-xs font-bold uppercase tracking-wider text-espresso mb-2" htmlFor="date">Preferred Date</label>
      <input className="w-full rounded-xl border border-accent/15 bg-plaster/70 px-4 py-3.5 font-body text-base text-espresso shadow-sm transition-all duration-300 [color-scheme:light] accent-wine focus:border-brass focus:bg-plaster focus:ring-2 focus:ring-brass/20" id="date" name="date" required type="date"/>
      </div>
      {/* Time */}
      <div>
      <label className="block font-label text-xs font-bold uppercase tracking-wider text-espresso mb-2" htmlFor="time">Preferred Time</label>
      <div className="relative">
      <select className="w-full appearance-none rounded-xl border border-accent/15 bg-plaster/70 px-4 py-3.5 pr-10 font-body text-base text-espresso shadow-sm transition-all duration-300 focus:border-brass focus:bg-plaster focus:ring-2 focus:ring-brass/20" id="time" name="time" required defaultValue="">
      <option className="bg-plaster text-taupe" disabled value="">Select time</option>
      <option className="bg-plaster text-espresso" value="19:00">19:00</option>
      <option className="bg-plaster text-espresso" value="19:30">19:30</option>
      <option className="bg-plaster text-espresso" value="20:00">20:00</option>
      <option className="bg-plaster text-espresso" value="20:30">20:30</option>
      <option className="bg-plaster text-espresso" value="21:00">21:00</option>
      <option className="bg-plaster text-espresso" value="21:30">21:30</option>
      <option className="bg-plaster text-espresso" value="22:00">22:00</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-taupe">
      <FontAwesomeMaterialIcon name="expand_more" className="text-lg" />
      </div>
      </div>
      </div>
      </div>
      {/* Special Requests */}
      <div>
      <label className="block font-label text-xs font-bold uppercase tracking-wider text-espresso mb-2" htmlFor="requests">Special Requests / Dietary Requirements</label>
      <textarea className="w-full resize-none rounded-xl border border-accent/15 bg-plaster/70 px-4 py-3.5 font-body text-base text-espresso placeholder-taupe/60 shadow-sm transition-all duration-300 focus:border-brass focus:bg-plaster focus:ring-2 focus:ring-brass/20" id="requests" name="requests" placeholder="Celebrating an anniversary, vegetarian options needed..." rows={3}></textarea>
      </div>
      {/* Contact Preference */}
      <div className="pb-4">
      <label className="block font-label text-sm font-medium text-espresso mb-4">Preferred Confirmation Method</label>
      <div className="flex space-x-6">
      <label className="flex items-center space-x-3 cursor-pointer group">
      <input defaultChecked className="h-5 w-5 accent-wine text-wine border-taupe bg-transparent focus:ring-2 focus:ring-brass/30 focus:ring-offset-0" name="contactMethod" type="radio" value="whatsapp"/>
      <span className="font-body text-espresso group-hover:text-wine transition-colors">WhatsApp</span>
      </label>
      <label className="flex items-center space-x-3 cursor-pointer group">
      <input className="h-5 w-5 accent-wine text-wine border-taupe bg-transparent focus:ring-2 focus:ring-brass/30 focus:ring-offset-0" name="contactMethod" type="radio" value="email"/>
      <span className="font-body text-espresso group-hover:text-wine transition-colors">Email</span>
      </label>
      </div>
      </div>
      <div className="pt-6 border-t border-espresso/10 text-center">
      <button className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-wine text-plaster font-headline text-lg font-bold tracking-wide hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg" type="submit">
      <FontAwesomeMaterialIcon name="send" className="mr-2" style={{ fontSize: "16px" }} />
                                  Send Request via WhatsApp
                              </button>
      </div>
      </form>
      </ScrollReveal>
      </section>
      {/* Reassurance & Urgent Section */}
      <ScrollReveal as="section" className="py-12 px-6 max-w-3xl mx-auto text-center border-t border-espresso/10">
      <p className="font-body text-taupe text-sm italic mb-8 max-w-lg mx-auto">
                      "Your request is not confirmed until our team replies. Expect a personal message within 2 hours during opening times."
                  </p>
      <div className="bg-plaster p-6 rounded-xl border border-espresso/5 shadow-sm inline-block">
      <h3 className="font-headline text-lg font-semibold text-espresso mb-4">Same-Day Reservations?</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-espresso text-espresso font-headline text-sm font-semibold hover:bg-espresso hover:text-plaster transition-colors duration-300 w-full sm:w-auto" href="https://wa.me/2125XXXXXXX" target="_blank" rel="noreferrer">
      <FontAwesomeMaterialIcon name="chat" className="mr-2 text-sm" />
                              WhatsApp Us
                          </a>
      <a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-espresso text-espresso font-headline text-sm font-semibold hover:bg-espresso hover:text-plaster transition-colors duration-300 w-full sm:w-auto" href="tel:+2125XXXXXXX">
      <FontAwesomeMaterialIcon name="call" className="mr-2 text-sm" />
                              Call Us
                          </a>
      </div>
      </div>
      </ScrollReveal>
      {/* Helpful Links Cards (Bento style) */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <ScrollReveal as="h2" className="font-headline text-2xl font-bold text-espresso mb-8 text-center">Prepare for your visit</ScrollReveal>
      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <Link className="group block relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" href="/menu">
      <Image alt="" className="object-cover transition-transform duration-700 group-hover:scale-105" src={diningExperienceImage} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
      <h3 className="font-headline text-xl font-semibold text-plaster mb-1">Explore the Menu</h3>
      <p className="font-body text-sm text-plaster/80 flex items-center">View seasonal offerings <FontAwesomeMaterialIcon name="arrow_forward" className="text-sm ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300" /></p>
      </div>
      </Link>
      {/* Card 2 */}
      <Link className="group block relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-linen border border-espresso/10 p-6 flex flex-col justify-between" href="/gallery">
      <div className="text-wine">
      <FontAwesomeMaterialIcon name="photo_library" style={{ fontSize: "24px" }} />
      </div>
      <div>
      <h3 className="font-headline text-xl font-semibold text-espresso mb-1">Gallery</h3>
      <p className="font-body text-sm text-taupe">Glimpse the atmosphere</p>
      </div>
      </Link>
      {/* Card 3 */}
      <Link className="group block relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" href="/contact">
      <Image alt="" className="object-cover transition-transform duration-700 group-hover:scale-105" src={privateEventImage} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
      <h3 className="font-headline text-xl font-semibold text-plaster mb-1">Location</h3>
      <p className="font-body text-sm text-plaster/80 flex items-center">Find us in Marrakech <FontAwesomeMaterialIcon name="arrow_forward" className="text-sm ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300" /></p>
      </div>
      </Link>
      {/* Card 4 */}
      <Link className="group block relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-linen border border-espresso/10 p-6 flex flex-col justify-between" href="/faq">
      <div className="text-wine">
      <FontAwesomeMaterialIcon name="help_outline" style={{ fontSize: "24px" }} />
      </div>
      <div>
      <h3 className="font-headline text-xl font-semibold text-espresso mb-1">FAQ</h3>
      <p className="font-body text-sm text-taupe">Dress code &amp; details</p>
      </div>
      </Link>
      </StaggerReveal>
      </section>
      {/* Privacy Text */}
      <section className="py-8 text-center">
      <p className="font-body text-xs text-taupe">
                      Your details are only used to coordinate your visit. <Link className="underline hover:text-espresso transition-colors" href="/privacy">Privacy Policy</Link>
      </p>
      </section>
      </main>
    </>
  );
}
