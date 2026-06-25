"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
import finalCtaBackgroundImage from "../../src/assets/images/remote-image-3b630977b48d.png";

function toggleAccordion(button: HTMLButtonElement) {
  const item = button.parentElement;
  if (!item) return;

  const wasActive = item.classList.contains("active");
  const parentGroup = item.parentElement;
  parentGroup?.querySelectorAll(".accordion-item").forEach((element) => {
    element.classList.remove("active");
  });

  if (!wasActive) {
    item.classList.add("active");
  }
}

export function Main() {
  return (
    <>
      <main className="flex-grow">
      {/* Hero Section */}
      <ScrollReveal as="section" className="px-6 pb-24 pt-32 md:px-12 max-w-4xl mx-auto text-center">
      <h1 className="font-headline text-4xl md:text-6xl text-accent-wine mb-6 leading-tight italic">Everything you may want to know before reserving.</h1>
      <p className="font-body text-lg md:text-xl text-primary-variant mb-10 max-w-2xl mx-auto leading-relaxed">
                      At Mediterra, we handle reservations manually to ensure a deeply personalized experience. Explore our frequently asked questions below, or reach out directly to begin curating your evening.
                  </p>
      <Link className="inline-block bg-accent-wine text-primary px-8 py-3.5 rounded-full font-body font-medium text-lg hover:bg-opacity-90 transition-all duration-300 shadow-sm" href="/reservations">
                      Request a Table
                  </Link>
      </ScrollReveal>
      {/* FAQ Sections */}
      <section className="max-w-3xl mx-auto px-6 pb-24 space-y-16">
      {/* Category 1: Reservations */}
      <ScrollReveal>
      <h2 className="font-headline text-2xl text-accent-wine mb-8 border-b border-accent-terracotta/20 pb-4">Reservations</h2>
      <StaggerReveal className="space-y-4">
      <div className="accordion-item bg-primary-container rounded-twelve overflow-hidden border border-accent-terracotta/10">
      <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" onClick={(event) => toggleAccordion(event.currentTarget)}>
      <span className="font-headline text-lg text-primary-on font-semibold">How does the WhatsApp booking system work?</span>
      <FontAwesomeMaterialIcon name="expand_more" className="accordion-icon text-accent-wine" />
      </button>
      <div className="accordion-content px-6 text-primary-variant font-body">
                                  Our booking process is personal. When you request a table, it initiates a WhatsApp conversation with our host. We manually confirm availability and details to ensure we can perfectly accommodate your evening.
                              </div>
      </div>
      <div className="accordion-item bg-primary-container rounded-twelve overflow-hidden border border-accent-terracotta/10">
      <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" onClick={(event) => toggleAccordion(event.currentTarget)}>
      <span className="font-headline text-lg text-primary-on font-semibold">How long does it take to receive confirmation?</span>
      <FontAwesomeMaterialIcon name="expand_more" className="accordion-icon text-accent-wine" />
      </button>
      <div className="accordion-content px-6 text-primary-variant font-body">
                                  We aim to respond to all WhatsApp requests within two hours during our operational hours. Your reservation is only finalized once you receive a definitive confirmation message from our team.
                              </div>
      </div>
      <div className="accordion-item bg-primary-container rounded-twelve overflow-hidden border border-accent-terracotta/10">
      <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" onClick={(event) => toggleAccordion(event.currentTarget)}>
      <span className="font-headline text-lg text-primary-on font-semibold">Can I book for a large group?</span>
      <FontAwesomeMaterialIcon name="expand_more" className="accordion-icon text-accent-wine" />
      </button>
      <div className="accordion-content px-6 text-primary-variant font-body">
                                  Online requests are limited to parties of up to 8 guests to maintain the intimate atmosphere of the restaurant. For larger parties or private dining inquiries, please email us directly.
                              </div>
      </div>
      </StaggerReveal>
      </ScrollReveal>
      {/* Category 2: The Menu */}
      <ScrollReveal>
      <h2 className="font-headline text-2xl text-accent-wine mb-8 border-b border-accent-terracotta/20 pb-4">The Menu</h2>
      <StaggerReveal className="space-y-4">
      <div className="accordion-item bg-primary-container rounded-twelve overflow-hidden border border-accent-terracotta/10">
      <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" onClick={(event) => toggleAccordion(event.currentTarget)}>
      <span className="font-headline text-lg text-primary-on font-semibold">Is the pasta made in-house?</span>
      <FontAwesomeMaterialIcon name="expand_more" className="accordion-icon text-accent-wine" />
      </button>
      <div className="accordion-content px-6 text-primary-variant font-body">
                                  Yes, absolutely. Our pasta is hand-rolled daily using authentic Italian techniques and premium flour, ensuring the perfect texture and flavor for every dish.
                              </div>
      </div>
      <div className="accordion-item bg-primary-container rounded-twelve overflow-hidden border border-accent-terracotta/10">
      <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" onClick={(event) => toggleAccordion(event.currentTarget)}>
      <span className="font-headline text-lg text-primary-on font-semibold">Do you cater to dietary requirements?</span>
      <FontAwesomeMaterialIcon name="expand_more" className="accordion-icon text-accent-wine" />
      </button>
      <div className="accordion-content px-6 text-primary-variant font-body">
                                  We offer considered vegetarian and vegan options woven seamlessly into our menu. Please inform us of any severe allergies during your reservation process so our kitchen can prepare accordingly.
                              </div>
      </div>
      </StaggerReveal>
      </ScrollReveal>
      {/* Category 3: Your Visit */}
      <ScrollReveal>
      <h2 className="font-headline text-2xl text-accent-wine mb-8 border-b border-accent-terracotta/20 pb-4">Your Visit</h2>
      <StaggerReveal className="space-y-4">
      <div className="accordion-item bg-primary-container rounded-twelve overflow-hidden border border-accent-terracotta/10">
      <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" onClick={(event) => toggleAccordion(event.currentTarget)}>
      <span className="font-headline text-lg text-primary-on font-semibold">What is the dress code?</span>
      <FontAwesomeMaterialIcon name="expand_more" className="accordion-icon text-accent-wine" />
      </button>
      <div className="accordion-content px-6 text-primary-variant font-body">
                                  Our dress code is Smart Casual. We encourage guests to dress for a special occasion while remaining comfortable—come as you are, but with a touch of evening elegance.
                              </div>
      </div>
      <div className="accordion-item bg-primary-container rounded-twelve overflow-hidden border border-accent-terracotta/10">
      <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" onClick={(event) => toggleAccordion(event.currentTarget)}>
      <span className="font-headline text-lg text-primary-on font-semibold">Where are you located?</span>
      <FontAwesomeMaterialIcon name="expand_more" className="accordion-icon text-accent-wine" />
      </button>
      <div className="accordion-content px-6 text-primary-variant font-body">
                                  Mediterra is nestled in the heart of the Riad district in Marrakech. Detailed arrival instructions will be provided upon confirmation of your reservation.
                              </div>
      </div>
      </StaggerReveal>
      </ScrollReveal>
      </section>
      {/* Support Card */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
      <ScrollReveal className="bg-primary-container rounded-xl p-10 md:p-14 text-center border border-accent-terracotta/10 shadow-sm relative overflow-hidden">
      {/* Subtle texture overlay simulation */}
      <div className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      <h3 className="font-headline text-3xl text-accent-wine mb-4 relative z-10">Still have questions?</h3>
      <p className="font-body text-primary-variant mb-8 max-w-md mx-auto relative z-10">Our host is available to assist you directly. We look forward to speaking with you.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
      <a className="flex items-center justify-center gap-2 bg-accent-wine text-primary px-6 py-3 rounded-full font-body font-medium hover:bg-opacity-90 transition-colors" href="https://wa.me/2125XXXXXXX" target="_blank" rel="noreferrer">
      <FontAwesomeMaterialIcon name="chat" className="text-base" />
                              Chat via WhatsApp
                          </a>
      <a className="flex items-center justify-center gap-2 border border-accent-wine text-accent-wine bg-transparent px-6 py-3 rounded-full font-body font-medium hover:bg-accent-wine/5 transition-colors" href="tel:+2125XXXXXXX">
      <FontAwesomeMaterialIcon name="call" className="text-base" />
                              Call the Team
                          </a>
      </div>
      </ScrollReveal>
      </section>
      {/* Final CTA */}
      <section className="bg-accent-wine text-primary py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" data-alt="Abstract soft focus ambient light flares in warm candlelight tones, deep rich wine reds and soft golden highlights, creating a romantic atmospheric background suitable for a luxury Mediterranean restaurant evening setting." style={{ backgroundImage: `url(${finalCtaBackgroundImage.src})` }}></div>
      <ScrollReveal className="relative z-10 max-w-2xl mx-auto px-6">
      <h2 className="font-headline text-4xl mb-6 italic">Ready to join us?</h2>
      <p className="font-body text-primary/80 mb-10 text-lg">Secure your table and let us curate a memorable evening of Mediterranean warmth and coastal flavors.</p>
      <Link className="inline-block bg-primary text-accent-wine px-10 py-4 rounded-full font-headline font-semibold text-lg hover:bg-primary-container transition-colors shadow-lg" href="/reservations">
                          Reserve a Table
                      </Link>
      </ScrollReveal>
      </section>
      </main>
    </>
  );
}
