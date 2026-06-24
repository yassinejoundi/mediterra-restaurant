import Image from "next/image";
import Link from "next/link";
import pastaPreparationImage from "../../src/assets/images/remote-image-d6e35fba3bc7.jpg";

export function StorySectionAsymmetric() {
  return (
    <>
      <section className="py-24 bg-plaster">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <div className="md:w-5/12 order-2 md:order-1 relative">
      <div className="absolute -inset-4 bg-linen rounded-2xl -z-10 translate-y-6 translate-x-6"></div>
      <div className="editorial-image-container rounded-2xl overflow-hidden shadow-float aspect-square relative">
      <Image alt="Handmade pasta preparation" className="editorial-image object-cover" src={pastaPreparationImage} fill sizes="(min-width: 768px) 42vw, 100vw" />
      </div>
      </div>
      <div className="md:w-7/12 order-1 md:order-2">
      <span className="font-label text-xs tracking-[0.15em] text-olive uppercase mb-4 block">Our Roots</span>
      <h2 className="font-headline text-4xl md:text-6xl text-espresso mb-8 leading-tight">Born from friendship, <br/><span className="italic font-light">Italian discipline,</span> <br/>and Marrakech generosity.</h2>
      <div className="space-y-6 text-taupe font-body text-lg max-w-xl mb-10">
      <p>Mediterra is the culmination of a shared dream: to bring the exacting standards of Italian culinary tradition to the warm, enveloping atmosphere of a Marrakech riad.</p>
      <p>We believe in the beauty of simplicity—a perfectly dressed tomato, pasta rolled until translucent, and the soft glow of candlelight reflecting off terracotta walls.</p>
      </div>
      <Link className="inline-block border border-espresso text-espresso px-8 py-3 rounded-full font-label font-medium hover:bg-espresso hover:text-plaster transition-colors" href="/story">Read Our Story</Link>
      </div>
      </div>
      </section>
    </>
  );
}
