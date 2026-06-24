import Image from "next/image";
import Link from "next/link";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
import privacyInteriorImage from "../../src/assets/images/remote-image-51773cef7d47.png";

export function Main() {
  return (
    <>
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7">
      <span className="text-olive font-label text-xs uppercase tracking-[0.2em] mb-4 block">Commitment to Care</span>
      <h1 className="text-wine font-headline text-5xl md:text-7xl font-semibold mb-8 leading-[1.1]">
                          Privacy at <span className="italic font-serif-editorial">Mediterra.</span>
      </h1>
      <p className="text-taupe text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                          Our approach to your personal information is as intentional as our table service. We value the intimacy of our relationship and protect your data with the same warmth we offer our guests in Marrakech.
                      </p>
      <div className="flex flex-wrap gap-4">
      <Link className="bg-wine text-ivory px-8 py-4 rounded-full font-headline text-sm uppercase tracking-widest hover:opacity-90 transition-all" href="/contact">
                              Contact Support
                          </Link>
      <Link className="border border-terracotta/40 text-espresso px-8 py-4 rounded-full font-headline text-sm uppercase tracking-widest hover:bg-linen transition-all" href="/terms">
                              View Terms
                          </Link>
      </div>
      </div>
      <div className="md:col-span-5 relative aspect-[4/5] rounded-twelve overflow-hidden">
      <Image className="object-cover" alt="Candlelit Mediterranean restaurant interior" data-alt="A soft, candlelit interior of a high-end Mediterranean restaurant in Marrakech. The image shows a corner of a textured warm ivory plaster wall with a simple linen curtain and a glimpse of a wooden table set with artisan ceramics and a single glass of wine. The lighting is warm and golden, evoking an intimate and private atmosphere consistent with the brand's premium hospitality aesthetic." src={privacyInteriorImage} fill priority sizes="(min-width: 768px) 42vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-wine/20 to-transparent"></div>
      </div>
      </section>
      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      {/* Left Sidebar Navigation (Desktop) */}
      <aside className="hidden lg:block lg:col-span-3 sticky top-40 h-fit">
      <nav className="space-y-6">
      <Link className="block text-wine font-semibold border-l-2 border-wine pl-4 transition-all" href="#data-collected">Data Collected</Link>
      <Link className="block text-taupe hover:text-wine pl-4 border-l-2 border-transparent transition-all" href="#how-used">How Data Is Used</Link>
      <Link className="block text-taupe hover:text-wine pl-4 border-l-2 border-transparent transition-all" href="#whatsapp">WhatsApp Routing</Link>
      <Link className="block text-taupe hover:text-wine pl-4 border-l-2 border-transparent transition-all" href="#rights">Contact &amp; Rights</Link>
      </nav>
      </aside>
      {/* Privacy Sections */}
      <div className="lg:col-span-9 space-y-24">
      {/* Data Collected */}
      <section className="scroll-mt-40" id="data-collected">
      <div className="bg-linen p-8 md:p-12 rounded-twelve border border-terracotta/10 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
      <FontAwesomeMaterialIcon name="inventory_2" className="text-olive" />
      <h2 className="text-wine font-headline text-3xl font-semibold">Information We Collect</h2>
      </div>
      <div className="h-px bg-terracotta/20 mb-10 divider-grow"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
      <div className="flex items-start gap-4">
      <div className="w-1.5 h-1.5 rounded-full bg-olive mt-2.5"></div>
      <div>
      <h4 className="text-espresso font-semibold text-sm uppercase tracking-wider mb-1">Identity Details</h4>
      <p className="text-taupe text-sm">Full name for reservation identification and personalized welcome.</p>
      </div>
      </div>
      <div className="flex items-start gap-4">
      <div className="w-1.5 h-1.5 rounded-full bg-olive mt-2.5"></div>
      <div>
      <h4 className="text-espresso font-semibold text-sm uppercase tracking-wider mb-1">WhatsApp &amp; Phone</h4>
      <p className="text-taupe text-sm">Primary contact for real-time booking confirmation and logistical updates.</p>
      </div>
      </div>
      <div className="flex items-start gap-4">
      <div className="w-1.5 h-1.5 rounded-full bg-olive mt-2.5"></div>
      <div>
      <h4 className="text-espresso font-semibold text-sm uppercase tracking-wider mb-1">Optional Email</h4>
      <p className="text-taupe text-sm">Secondary communication channel for detailed receipts or direct inquiries.</p>
      </div>
      </div>
      </div>
      <div className="space-y-6">
      <div className="flex items-start gap-4">
      <div className="w-1.5 h-1.5 rounded-full bg-olive mt-2.5"></div>
      <div>
      <h4 className="text-espresso font-semibold text-sm uppercase tracking-wider mb-1">Dining Preferences</h4>
      <p className="text-taupe text-sm">Guest count, date, time, and specific dietary or seating requests.</p>
      </div>
      </div>
      <div className="flex items-start gap-4">
      <div className="w-1.5 h-1.5 rounded-full bg-olive mt-2.5"></div>
      <div>
      <h4 className="text-espresso font-semibold text-sm uppercase tracking-wider mb-1">Contact Method</h4>
      <p className="text-taupe text-sm">Your preferred channel (WhatsApp or Email) for receiving status updates.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* How Data Is Used */}
      <section className="scroll-mt-40" id="how-used">
      <h2 className="text-wine font-headline text-3xl font-semibold mb-8">How Your Information Is Used</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 border border-terracotta/20 rounded-lg bg-ivory hover:shadow-md transition-shadow">
      <FontAwesomeMaterialIcon name="event_available" className="text-olive mb-4 block" />
      <h3 className="text-espresso font-bold mb-3">Reservation Logic</h3>
      <p className="text-taupe text-sm leading-relaxed">We use your details to verify availability and secure your place at Mediterra.</p>
      </div>
      <div className="p-6 border border-terracotta/20 rounded-lg bg-ivory hover:shadow-md transition-shadow">
      <FontAwesomeMaterialIcon name="forum" className="text-olive mb-4 block" />
      <h3 className="text-espresso font-bold mb-3">Service Inquiries</h3>
      <p className="text-taupe text-sm leading-relaxed">Providing thoughtful, personalized responses to any special requests or questions you share.</p>
      </div>
      <div className="p-6 border border-terracotta/20 rounded-lg bg-ivory hover:shadow-md transition-shadow">
      <FontAwesomeMaterialIcon name="notifications_active" className="text-olive mb-4 block" />
      <h3 className="text-espresso font-bold mb-3">Dining Status</h3>
      <p className="text-taupe text-sm leading-relaxed">Automated and manual confirmation messages so you always know your table status.</p>
      </div>
      </div>
      {/* WhatsApp Special Note */}
      <div className="mt-12 bg-wine/5 p-8 rounded-twelve border border-wine/10" id="whatsapp">
      <div className="flex items-center gap-4 mb-4">
      <FontAwesomeMaterialIcon name="chat_bubble" className="text-wine" />
      <h3 className="text-wine font-semibold text-xl tracking-tight">Important Note on WhatsApp Routing</h3>
      </div>
      <p className="text-espresso/80 text-base leading-relaxed">
                                  Mediterra Marrakech uses WhatsApp exclusively for transactional communication regarding your reservation. We do not use your phone number for mass marketing, unsolicited promotions, or third-party advertising. This channel is strictly reserved for the logistics of your visit.
                              </p>
      </div>
      </section>
      {/* Contact & Rights */}
      <section className="scroll-mt-40" id="rights">
      <div className="bg-linen p-10 rounded-twelve border border-terracotta/10">
      <h2 className="text-wine font-headline text-3xl font-semibold mb-6">Contact and Your Rights</h2>
      <p className="text-taupe mb-10 max-w-xl">
                                  You have the right to access, rectify, or request the deletion of your personal data at any time. If you have questions regarding our privacy practices, please reach out to our concierge team.
                              </p>
      <div className="flex flex-col sm:flex-row items-center gap-6">
      <Link className="w-full sm:w-auto bg-wine text-ivory px-10 py-4 rounded-full font-headline text-sm uppercase tracking-widest hover:opacity-90 text-center" href="/contact">
                                      Contact Concierge
                                  </Link>
      <span className="text-taupe text-sm italic">Typical response time: Under 2 hours</span>
      </div>
      </div>
      </section>
      {/* Related Links */}
      <section className="border-t border-terracotta/20 pt-20">
      <h3 className="text-wine font-headline text-xl mb-8 uppercase tracking-widest text-center">Explore Further</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link className="group block p-8 bg-ivory border border-terracotta/20 rounded-twelve hover:bg-linen transition-colors" href="/reservations">
      <span className="text-olive text-xs font-label uppercase tracking-widest mb-4 block">Planning</span>
      <h4 className="text-espresso font-headline text-lg group-hover:text-wine transition-colors mb-2">Book a Table</h4>
      <p className="text-taupe text-sm">Experience the warmth of our candlelit riad dining.</p>
      </Link>
      <Link className="group block p-8 bg-ivory border border-terracotta/20 rounded-twelve hover:bg-linen transition-colors" href="/terms">
      <span className="text-olive text-xs font-label uppercase tracking-widest mb-4 block">Legal</span>
      <h4 className="text-espresso font-headline text-lg group-hover:text-wine transition-colors mb-2">Terms of Service</h4>
      <p className="text-taupe text-sm">Understand the agreement between you and Mediterra.</p>
      </Link>
      <Link className="group block p-8 bg-ivory border border-terracotta/20 rounded-twelve hover:bg-linen transition-colors" href="/contact">
      <span className="text-olive text-xs font-label uppercase tracking-widest mb-4 block">Support</span>
      <h4 className="text-espresso font-headline text-lg group-hover:text-wine transition-colors mb-2">Direct Contact</h4>
      <p className="text-taupe text-sm">Speak with our team about your upcoming experience.</p>
      </Link>
      </div>
      </section>
      </div>
      </div>
      </main>
    </>
  );
}
