/* eslint-disable */
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
import ambienceImage from "../../src/assets/images/remote-image-30fd0718db85.jpg";
import courtyardTableImage from "../../src/assets/images/remote-image-1fb9b0c953df.png";

export function Main() {
  return (
    <>
      <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
      <Image alt="Mediterra Ambience" className="object-cover brightness-90" src={ambienceImage} fill priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-plaster via-plaster/60 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 py-20">
      <div className="max-w-2xl">
      <h1 className="font-headline text-5xl md:text-7xl text-espresso mb-6 leading-[1.1]">
                              Find Mediterra in Marrakech and plan your evening with confidence.
                          </h1>
      <p className="text-taupe text-lg md:text-xl mb-8 font-body max-w-lg">
                              123 Rue de la Kasbah, Medina, Marrakech 40000, Morocco
                          </p>
      <div className="flex flex-wrap gap-4">
      <Link className="inline-flex items-center gap-2 border border-accent text-accent px-8 py-3 rounded-full font-label uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300" href="/contact">
      <FontAwesomeMaterialIcon name="near_me" className="text-sm" />
                                  Get Directions
                              </Link>
      </div>
      </div>
      </div>
      </section>
      {/* Contact Cards */}
      <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* WhatsApp Card */}
      <div className="bg-surface p-8 rounded-xl editorial-shadow border border-accent/10 flex flex-col items-start h-full">
      <FontAwesomeMaterialIcon name="chat" className="text-wine text-2xl mb-6" />
      <h3 className="font-headline text-xl text-espresso mb-2">WhatsApp Us</h3>
      <p className="text-taupe mb-8 text-sm leading-relaxed">Direct messaging for table updates and quick inquiries.</p>
      <a className="mt-auto bg-wine text-background px-6 py-2 rounded-full text-sm font-label uppercase tracking-wider hover:opacity-90 transition-all" href="https://wa.me/2125XXXXXXX" target="_blank" rel="noreferrer">
                                  Message Now
                              </a>
      </div>
      {/* Call Card */}
      <div className="bg-surface p-8 rounded-xl editorial-shadow border border-accent/10 flex flex-col items-start h-full">
      <FontAwesomeMaterialIcon name="call" className="text-wine text-2xl mb-6" />
      <h3 className="font-headline text-xl text-espresso mb-2">Call Us</h3>
      <p className="text-taupe mb-8 text-sm leading-relaxed">Available for direct calls during our opening hours.</p>
      <p className="mt-auto font-label text-espresso font-semibold text-lg">+212 5XX-XXXXXX</p>
      </div>
      {/* Email Card */}
      <div className="bg-surface p-8 rounded-xl editorial-shadow border border-accent/10 flex flex-col items-start h-full">
      <FontAwesomeMaterialIcon name="mail" className="text-wine text-2xl mb-6" />
      <h3 className="font-headline text-xl text-espresso mb-2">Email</h3>
      <p className="text-taupe mb-8 text-sm leading-relaxed">For events, group bookings, or media inquiries.</p>
      <a className="mt-auto font-label text-accent border-b border-accent/30 hover:border-accent transition-all" href="mailto:hello@mediterra.com">hello@mediterra.com</a>
      </div>
      {/* Instagram Card */}
      <div className="bg-surface p-8 rounded-xl editorial-shadow border border-accent/10 flex flex-col items-start h-full">
      <FontAwesomeMaterialIcon name="photo_camera" className="text-wine text-2xl mb-6" />
      <h3 className="font-headline text-xl text-espresso mb-2">Instagram</h3>
      <p className="text-taupe mb-8 text-sm leading-relaxed">Follow our story and daily inspirations in the Medina.</p>
      <a className="mt-auto font-label text-espresso flex items-center gap-2 hover:text-accent transition-colors" href="https://www.instagram.com/mediterra.marrakech" target="_blank" rel="noreferrer">
                                  @mediterra.marrakech
                                  <FontAwesomeMaterialIcon name="open_in_new" className="text-sm" />
      </a>
      </div>
      </div>
      </div>
      </section>
      {/* Opening Hours & Table Reservations */}
      <section className="py-24 border-y border-accent/10 bg-[#FAF7F2]">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
      <h2 className="font-headline text-4xl text-espresso leading-tight">Opening Hours</h2>
      <div className="space-y-4 max-w-md">
      <div className="flex justify-between items-center py-3 border-b border-accent/10">
      <span className="font-label text-espresso font-medium">Tuesday – Sunday</span>
      <span className="font-body text-taupe">19:00 — 23:30</span>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-accent/10">
      <span className="font-label text-espresso font-medium">Monday</span>
      <span className="font-body text-accent italic">Closed</span>
      </div>
      </div>
      <div className="pt-4">
      <Link className="inline-block bg-wine text-background px-10 py-4 rounded-full font-label uppercase tracking-widest hover:shadow-lg transition-all" href="/reservations">
                                  Reserve a Table
                              </Link>
      </div>
      </div>
      <div className="relative group">
      <div className="absolute -inset-4 bg-accent/5 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
      <div className="relative overflow-hidden rounded-xl h-[400px]">
      <Image className="object-cover" alt="Candlelit table in a Marrakech riad courtyard" data-alt="A warm, atmospheric photo of a candlelit table in a Marrakech Riad courtyard at night. Soft terracotta walls, olive trees in large ceramic pots, and delicate linen tablecloths. The lighting is intimate and romantic with glowing lanterns." src={courtyardTableImage} fill sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
      </div>
      </div>
      </section>
      {/* Arrival & Directions */}
      <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
      <div className="lg:col-span-3 h-[500px] rounded-2xl overflow-hidden shadow-sm border border-accent/20">
      <div className="w-full h-full bg-[#E5E2D9] relative flex items-center justify-center">
      {/* Map Placeholder */}
      <div className="text-center p-8">
      <FontAwesomeMaterialIcon name="map" className="text-4xl text-accent/40 mb-4" />
      <p className="font-headline text-xl text-taupe">Interactive Medina Map</p>
      <div className="mt-4" data-location="Marrakech" style={{  }}></div>
      </div>
      {/* Simulated Map UI */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
      <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-espresso"><FontAwesomeMaterialIcon name="add" /></button>
      <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-espresso"><FontAwesomeMaterialIcon name="remove" /></button>
      </div>
      </div>
      </div>
      <div className="lg:col-span-2 space-y-10">
      <div>
      <h2 className="font-headline text-3xl text-espresso mb-6">Arrival &amp; Directions</h2>
      <div className="space-y-8">
      <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-sage flex-shrink-0 flex items-center justify-center">
      <FontAwesomeMaterialIcon name="local_taxi" className="text-olive text-xl" />
      </div>
      <div>
      <h4 className="font-label font-bold text-espresso mb-1 uppercase tracking-wider text-sm">Arriving by Taxi</h4>
      <p className="text-taupe text-sm leading-relaxed">Ask to be dropped at Bab Laksour. From there, it's a pleasant 4-minute walk through the main thoroughfare.</p>
      </div>
      </div>
      <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-sage flex-shrink-0 flex items-center justify-center">
      <FontAwesomeMaterialIcon name="directions_walk" className="text-olive text-xl" />
      </div>
      <div>
      <h4 className="font-label font-bold text-espresso mb-1 uppercase tracking-wider text-sm">Walking from Jemaa el-Fnaa</h4>
      <p className="text-taupe text-sm leading-relaxed">Head north-west towards the Kasbah. Our subtle brass plaque marks the entrance to our sanctuary.</p>
      </div>
      </div>
      </div>
      </div>
      <Link className="w-full flex items-center justify-center gap-3 bg-espresso text-background py-4 rounded-xl font-label uppercase tracking-widest hover:bg-black transition-colors" href="/contact">
      <FontAwesomeMaterialIcon name="map" />
                                  Open Google Maps
                              </Link>
      </div>
      </div>
      </div>
      </section>
      {/* Personalized Service Section */}
      <section className="container mx-auto px-6 md:px-12 py-12">
      <div className="bg-espresso text-background rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
      
      </div>
      <div className="max-w-2xl relative z-10">
      <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">Every table is personally managed.</h2>
      <p className="font-body text-surface/80 text-lg mb-10 leading-relaxed">
                              To ensure the most intimate and curated experience, all reservation requests at Mediterra are personally handled by our host team via WhatsApp. We look forward to welcoming you soon.
                          </p>
      <Link className="inline-block bg-wine text-background px-12 py-5 rounded-full font-label uppercase tracking-widest hover:scale-105 transition-transform" href="/reservations">
                              Reserve a Table
                          </Link>
      </div>
      </div>
      </section>
      {/* Quick Links */}
      <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-accent/10 border border-accent/10 rounded-2xl overflow-hidden">
      <Link className="bg-surface p-10 text-center group flex flex-col items-center transition-colors hover:bg-background" href="/faq">
      <FontAwesomeMaterialIcon name="help_outline" className="text-accent text-2xl mb-4 transition-transform group-hover:-translate-y-1" />
      <p className="font-headline text-espresso">FAQ</p>
      </Link>
      <Link className="bg-surface p-10 text-center group flex flex-col items-center transition-colors hover:bg-background" href="/menu">
      <FontAwesomeMaterialIcon name="restaurant_menu" className="text-accent text-2xl mb-4 transition-transform group-hover:-translate-y-1" />
      <p className="font-headline text-espresso">Menu</p>
      </Link>
      <Link className="bg-surface p-10 text-center group flex flex-col items-center transition-colors hover:bg-background" href="/gallery">
      <FontAwesomeMaterialIcon name="gallery_thumbnail" className="text-accent text-2xl mb-4 transition-transform group-hover:-translate-y-1" />
      <p className="font-headline text-espresso">Gallery</p>
      </Link>
      <Link className="bg-surface p-10 text-center group flex flex-col items-center transition-colors hover:bg-background" href="/reservations">
      <FontAwesomeMaterialIcon name="event_seat" className="text-accent text-2xl mb-4 transition-transform group-hover:-translate-y-1" />
      <p className="font-headline text-espresso">Reservations</p>
      </Link>
      </div>
      </div>
      </section>
      </main>
    </>
  );
}
