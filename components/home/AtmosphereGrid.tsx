import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
import courtyardDiningImage from "../../src/assets/images/remote-image-30fd0718db85.jpg";
import candlelitCornerImage from "../../src/assets/images/remote-image-d20c98e51f28.png";
import tableSettingImage from "../../src/assets/images/remote-image-e7a60693eaa4.png";

export function AtmosphereGrid() {
  return (
    <>
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
      <span className="font-label text-xs tracking-[0.15em] text-olive uppercase mb-3 block">Atmosphere</span>
      <h2 className="font-headline text-4xl md:text-5xl text-espresso mb-6">Romantic &amp; <span className="italic text-wine">Intimate</span></h2>
      <p className="font-body text-taupe text-lg">Candlelit but not dramatic, intimate but not exclusive. A beautiful space designed for conversation and lingering.</p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-16">
      <ScrollReveal className="md:col-span-7 editorial-image-container rounded-2xl overflow-hidden shadow-soft h-[500px]" direction="right">
      <Image alt="Courtyard dining at dusk" className="editorial-image w-full h-full object-cover" src={courtyardDiningImage} />
      </ScrollReveal>
      <ScrollReveal className="md:col-span-5 grid grid-rows-2 gap-6 md:gap-8 h-[500px]" direction="left" delay={0.08}>
      <div className="editorial-image-container rounded-2xl overflow-hidden shadow-soft h-full">
      <Image alt="Candlelit corner" className="editorial-image w-full h-full object-cover object-center" src={candlelitCornerImage} />
      </div>
      <div className="editorial-image-container rounded-2xl overflow-hidden shadow-soft h-full">
      <Image alt="Mediterranean table setting" className="editorial-image w-full h-full object-cover" src={tableSettingImage} />
      </div>
      </ScrollReveal>
      </div>
      <div className="text-center">
      <Link className="inline-flex items-center gap-2 font-label text-wine hover:text-espresso transition-colors border-b border-wine/30 pb-1" href="/gallery">
                      View Gallery <FontAwesomeMaterialIcon name="arrow_forward" style={{ fontSize: "18px" }} />
      </Link>
      </div>
      </section>
    </>
  );
}
