/* eslint-disable */
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
export function Main() {
  return (
    <>
      <main className="pt-32 pb-24">
      {/* Hero Section */}
      <ScrollReveal as="section" className="max-w-screen-xl mx-auto px-8 mb-20 text-center">
      <span className="text-olive font-label text-sm uppercase tracking-[0.2em] mb-4 block">Legal &amp; Reservation Policies</span>
      <h1 className="font-headline text-5xl md:text-7xl font-bold text-espresso mb-8 leading-tight">
                      Website and reservation <br/><span className="text-wine">terms.</span>
      </h1>
      <p className="max-w-2xl mx-auto text-taupe text-lg md:text-xl leading-relaxed mb-10">
                      Welcome to Mediterra. To ensure the highest level of service and maintain our intimate atmosphere, we kindly ask you to review our guidelines regarding reservations and website usage.
                  </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
      <Link className="inline-flex items-center justify-center bg-espresso text-ivory px-8 py-4 rounded-full font-medium transition-all hover:bg-wine" href="#reservation-terms">
                          View Reservation Policies
                      </Link>
      <Link className="inline-flex items-center justify-center border border-terracotta/40 text-espresso px-8 py-4 rounded-full font-medium transition-all hover:border-terracotta" href="/contact">
                          Contact Us
                      </Link>
      </div>
      </ScrollReveal>
      {/* Reservation Terms Panel */}
      <section className="max-w-4xl mx-auto px-6 mb-24" id="reservation-terms">
      <ScrollReveal className="bg-linen rounded-xl p-10 md:p-16 shadow-sm border border-terracotta/10">
      <div className="flex items-center gap-3 mb-8">
      <FontAwesomeMaterialIcon name="calendar_today" className="text-wine text-lg" />
      <h2 className="font-headline text-3xl font-bold text-espresso">Reservation Policies</h2>
      </div>
      <div className="space-y-12">
      <div className="border-b border-terracotta/20 pb-8">
      <h3 className="text-olive font-bold text-sm uppercase tracking-wider mb-4">The Request Process</h3>
      <p className="text-espresso leading-relaxed italic text-lg">
                                  Please note: Reservation requests submitted via our website are not confirmed until you receive a formal reply from the Mediterra team.
                              </p>
      <p className="mt-4 text-taupe leading-relaxed">
                                  Once you submit a request, our hosting team reviews availability to ensure we can provide the best possible experience for your group. We strive to respond to all inquiries within 4 hours during service times.
                              </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
      <div>
      <h3 className="text-olive font-bold text-sm uppercase tracking-wider mb-4">Cancellations &amp; Changes</h3>
      <p className="text-taupe leading-relaxed">
                                      We request a minimum of <span className="text-espresso font-semibold">24 hours notice</span> for any cancellations or significant changes to your party size. This allows us to offer the table to other guests on our waiting list.
                                  </p>
      </div>
      <div>
      <h3 className="text-olive font-bold text-sm uppercase tracking-wider mb-4">Late Arrivals</h3>
      <p className="text-taupe leading-relaxed">
                                      We maintain a grace period of <span className="text-espresso font-semibold">15 minutes</span>. If you are running late, please notify us. Tables may be released if guests have not arrived within this window without prior notice.
                                  </p>
      </div>
      </div>
      <div className="bg-white/40 p-6 rounded-lg border border-white/60">
      <h3 className="text-wine font-bold text-sm uppercase tracking-wider mb-3">Manual Confirmation</h3>
      <p className="text-taupe text-sm leading-relaxed">
                                  For security and personalization, confirmations are sent manually via <span className="text-espresso font-medium">WhatsApp</span> or <span className="text-espresso font-medium">Email</span>. Please ensure your contact details are accurate to avoid cancellation of unconfirmed requests.
                              </p>
      </div>
      <div className="pt-4 text-center">
      <Link className="inline-block bg-wine text-plaster px-12 py-5 rounded-full font-headline text-lg font-bold shadow-lg hover:scale-105 transition-transform" href="/reservations">
                                  Reserve a Table
      </Link>
      </div>
      </div>
      </ScrollReveal>
      </section>
      {/* Website Terms Section */}
      <ScrollReveal as="section" className="max-w-4xl mx-auto px-8 mb-24">
      <h2 className="font-headline text-3xl font-bold text-espresso mb-12">Website Usage &amp; Legalities</h2>
      <div className="space-y-12">
      <div className="group">
      <div className="h-px w-full bg-terracotta/30 mb-6 group-hover:bg-terracotta transition-colors"></div>
      <div className="grid md:grid-cols-3 gap-8">
      <h3 className="text-olive font-bold text-sm uppercase tracking-widest">Informational Content</h3>
      <div className="md:col-span-2 text-taupe leading-relaxed">
                                  Seasonal menus, ingredient availability, and pricing shown on this website are subject to change without notice based on market availability and seasonal shifts in Marrakech. While we strive for accuracy, the in-restaurant menu remains the final authority on pricing and offerings.
                              </div>
      </div>
      </div>
      <div className="group">
      <div className="h-px w-full bg-terracotta/30 mb-6 group-hover:bg-terracotta transition-colors"></div>
      <div className="grid md:grid-cols-3 gap-8">
      <h3 className="text-olive font-bold text-sm uppercase tracking-widest">Content Ownership</h3>
      <div className="md:col-span-2 text-taupe leading-relaxed">
                                  All visual and written content, including restaurant photography, Mediterranean recipes described, and editorial text, is the property of Mediterra Marrakech. Unauthorized reproduction or commercial use of our brand assets is strictly prohibited.
                              </div>
      </div>
      </div>
      <div className="group">
      <div className="h-px w-full bg-terracotta/30 mb-6 group-hover:bg-terracotta transition-colors"></div>
      <div className="grid md:grid-cols-3 gap-8">
      <h3 className="text-olive font-bold text-sm uppercase tracking-widest">Liability</h3>
      <div className="md:col-span-2 text-taupe leading-relaxed">
                                  Mediterra is not liable for technical issues arising from third-party booking integrations or intermittent website downtime. Users agree to use this site for lawful purposes related to dining and reservation inquiries only.
                              </div>
      </div>
      </div>
      </div>
      </ScrollReveal>
      {/* Related Links */}
      <section className="max-w-screen-xl mx-auto px-8">
      <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link className="bg-linen p-8 rounded-lg border border-terracotta/10 hover:border-terracotta/40 transition-all group" href="/reservations">
      <FontAwesomeMaterialIcon name="restaurant" className="text-wine text-xl mb-4" />
      <h4 className="font-headline text-xl font-bold mb-2">Reservations</h4>
      <p className="text-taupe text-sm mb-4">Request a table for your next visit to Mediterra.</p>
      <span className="text-wine text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                              Explore <FontAwesomeMaterialIcon name="arrow_forward" className="text-sm" />
      </span>
      </Link>
      <Link className="bg-linen p-8 rounded-lg border border-terracotta/10 hover:border-terracotta/40 transition-all group" href="/privacy">
      <FontAwesomeMaterialIcon name="lock" className="text-wine text-xl mb-4" />
      <h4 className="font-headline text-xl font-bold mb-2">Privacy Policy</h4>
      <p className="text-taupe text-sm mb-4">How we handle and protect your personal reservation data.</p>
      <span className="text-wine text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                              Read More <FontAwesomeMaterialIcon name="arrow_forward" className="text-sm" />
      </span>
      </Link>
      <Link className="bg-linen p-8 rounded-lg border border-terracotta/10 hover:border-terracotta/40 transition-all group" href="/contact">
      <FontAwesomeMaterialIcon name="location_on" className="text-wine text-xl mb-4" />
      <h4 className="font-headline text-xl font-bold mb-2">Contact &amp; Directions</h4>
      <p className="text-taupe text-sm mb-4">Find us in the heart of Marrakech's historical Medina.</p>
      <span className="text-wine text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                              Get Directions <FontAwesomeMaterialIcon name="arrow_forward" className="text-sm" />
      </span>
      </Link>
      </StaggerReveal>
      </section>
      </main>
    </>
  );
}
