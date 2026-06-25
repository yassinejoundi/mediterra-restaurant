import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
import plasterWallImage from "../../src/assets/images/remote-image-4c65ca53255a.png";
import marrakechMapImage from "../../src/assets/images/remote-image-414f8a072520.png";

export function LocationContact() {
  return (
    <>
      <section className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <ScrollReveal className="bg-linen rounded-3xl overflow-hidden shadow-soft flex flex-col md:flex-row">
      <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-[url('/placeholder')] bg-cover bg-center relative" data-alt="A subtle, textured plaster wall in warm ivory, typical of Marrakech riads, catching soft dappled sunlight through foliage, creating a calm, minimalist backdrop for text." style={{ backgroundImage: `url(${plasterWallImage.src})` }}>
      <div className="absolute inset-0 bg-linen/90 backdrop-blur-sm"></div>
      <div className="relative z-10">
      <h2 className="font-headline text-3xl md:text-4xl text-espresso mb-8">Find Us</h2>
      <div className="space-y-6 mb-10">
      <div className="flex items-start gap-4">
      <FontAwesomeMaterialIcon name="location_on" className="text-wine text-lg mt-1" />
      <div>
      <h4 className="font-label font-semibold text-espresso mb-1">Mediterra Restaurant</h4>
      <p className="font-body text-taupe">123 Rue de la Kasbah, Medina<br/>Marrakech 40000, Morocco</p>
      </div>
      </div>
      <div className="flex items-start gap-4">
      <FontAwesomeMaterialIcon name="schedule" className="text-wine text-lg mt-1" />
      <div>
      <h4 className="font-label font-semibold text-espresso mb-1">Opening Hours</h4>
      <p className="font-body text-taupe">Tuesday - Sunday<br/>Dinner: 19:00 - 23:30<br/>Closed Mondays</p>
      </div>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
      <a className="bg-[#25D366] text-white px-6 py-3 rounded-full font-label font-medium flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors" href="https://wa.me/2125XXXXXXX" target="_blank" rel="noreferrer">
      <FontAwesomeMaterialIcon name="chat" style={{ fontSize: "20px" }} /> WhatsApp
                              </a>
      <Link className="border border-espresso text-espresso px-6 py-3 rounded-full font-label font-medium flex items-center justify-center gap-2 hover:bg-espresso hover:text-plaster transition-colors" href="/contact">
      <FontAwesomeMaterialIcon name="directions" style={{ fontSize: "20px" }} /> Get Directions
                              </Link>
      </div>
      </div>
      </div>
      <div className="md:w-1/2 h-80 md:h-auto bg-sage relative">
      {/* Map Placeholder */}
      <div className="w-full h-full flex items-center justify-center bg-linen relative">
      <Image className="w-full h-full object-cover opacity-80 mix-blend-multiply" alt="Stylized map of Marrakech Medina showing the Mediterra restaurant location" data-alt="A stylized, minimal map of Marrakech Medina showing the location of Mediterra restaurant. The map uses warm earthy tones, soft terracotta paths, and olive green markers, fitting the premium Mediterranean design system." data-location="Marrakech" src={marrakechMapImage} />
      </div>
      </div>
      </ScrollReveal>
      </section>
    </>
  );
}
