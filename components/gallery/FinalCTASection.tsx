import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import nightSkyImage from "../../src/assets/images/remote-image-c8e12ff6d473.png";

export function FinalCTASection() {
  return (
    <>
      <section className="relative py-40 overflow-hidden text-center bg-espresso">
      <div className="absolute inset-0 opacity-30">
      <Image className="object-cover" alt="Night sky above a Marrakech courtyard" data-alt="A dramatic, high-contrast photograph of the night sky above a Marrakech courtyard, seen through the silhouette of palm fronds. The atmosphere is quiet and mysterious, with deep blues and blacks punctuated by the tiny warm glow of a distant lantern. A feeling of peaceful seclusion and premium desert nights." src={nightSkyImage} fill sizes="100vw" />
      </div>
      <div className="relative z-10 px-8 max-w-screen-xl mx-auto">
      <ScrollReveal as="h2" className="text-4xl md:text-6xl font-serif text-ivory leading-tight mb-10 reveal-on-scroll">Your table in the garden awaits.</ScrollReveal>
      <ScrollReveal delay={0.12}>
      <Link className="inline-block bg-wine text-ivory px-12 py-5 rounded-full font-label text-base uppercase tracking-widest hover:bg-accent transition-all reveal-on-scroll" href="/reservations" style={{ transitionDelay: "200ms" }}>
                      Reserve a Table
                  </Link>
      </ScrollReveal>
      </div>
      </section>
    </>
  );
}
