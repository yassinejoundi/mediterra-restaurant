import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
import riadCourtyardImage from "../../src/assets/images/remote-image-44e6ac15d212.png";
import candlelitCornerImage from "../../src/assets/images/remote-image-d20c98e51f28.png";
import seatingNookImage from "../../src/assets/images/remote-image-f83d6d634a88.png";

export function InteriorAtmosphereSection() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-8 mb-32 reveal-on-scroll">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div className="max-w-2xl">
      <span className="text-accent font-label text-sm uppercase tracking-widest mb-4 block">Section 01</span>
      <h2 className="text-4xl font-serif text-espresso">Interior Atmosphere</h2>
      <p className="text-taupe mt-4 text-lg">Intimate riad corners, where soft architectural arches meet the whispers of climbing jasmine and the warm glow of hand-forged lanterns.</p>
      </div>
      <Link className="flex items-center gap-2 text-wine border-b border-wine pb-1 font-label text-sm uppercase tracking-widest hover:opacity-70 transition-all" href="/reservations">
                      Reserve a Table <FontAwesomeMaterialIcon name="arrow_forward" className="text-sm" />
      </Link>
      </ScrollReveal>
      <StaggerReveal className="gallery-masonry">
      {/* Large Image 1 */}
      <div className="break-inside-avoid mb-8 group">
      <div className="rounded-xl overflow-hidden bg-linen relative aspect-[4/5]">
      <Image className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Marrakech riad restaurant courtyard at twilight" data-alt="A cinematic, wide-angle interior photograph of a Marrakech riad restaurant courtyard at twilight. Symmetrical white arches frame a central courtyard with candlelit tables, lush potted olive trees, and intricate zellige tilework. The lighting is warm and amber from hanging lanterns and table candles, creating a romantic and intimate atmosphere against a deep blue evening sky." src={riadCourtyardImage} fill sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <p className="mt-4 text-accent font-label text-xs uppercase tracking-widest">The Courtyard at Dusk</p>
      </div>
      {/* Detail Image 2 */}
      <div className="break-inside-avoid mb-8 group">
      <div className="rounded-xl overflow-hidden bg-linen relative aspect-[4/3]">
      <Image className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Candlelit restaurant corner" src={candlelitCornerImage} fill sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <p className="mt-4 text-accent font-label text-xs uppercase tracking-widest">Romantic Corners &amp; Verdant Shrines</p>
      </div>
      {/* Vertical Image 3 */}
      <div className="break-inside-avoid mb-8 group">
      <div className="rounded-xl overflow-hidden bg-linen relative aspect-[3/4]">
      <Image className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Cozy seating nook in a Marrakech riad" data-alt="An editorial close-up of a cozy seating nook in a Marrakech riad. Soft linen cushions in cream and sand rest against a textured warm plaster wall. A single copper lantern sits on a low wooden table, casting dancing shadows. The scene is bathed in the golden, soft light of late afternoon sun filtering through a carved window screen." src={seatingNookImage} fill sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <p className="mt-4 text-accent font-label text-xs uppercase tracking-widest">The Alcove</p>
      </div>
      </StaggerReveal>
      </section>
    </>
  );
}
