 
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
export function FinalCTA() {
  return (
    <>
      <section className="py-24 bg-wine text-center px-6">
      <ScrollReveal className="max-w-2xl mx-auto">
      <FontAwesomeMaterialIcon name="local_dining" className="mx-auto block text-brass mb-6" style={{ fontSize: "42px" }} />
      <h2 className="font-headline text-4xl md:text-5xl text-plaster mb-6">Join us for dinner.</h2>
      <p className="font-body text-linen/80 text-lg mb-10">To ensure an intimate experience, all reservations are personally confirmed by our team via WhatsApp.</p>
      <Link className="inline-block bg-plaster text-wine px-10 py-4 rounded-full font-label font-semibold text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" href="/reservations">Reserve a Table</Link>
      </ScrollReveal>
      </section>
    </>
  );
}
