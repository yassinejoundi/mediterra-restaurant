/* eslint-disable */
import Link from "next/link";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
export function GuestWords() {
  return (
    <>
      <section className="py-24 px-6 md:px-12 bg-linen/50">
      <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="font-headline text-3xl md:text-4xl text-espresso mb-16 italic">Words from our guests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-plaster p-8 rounded-2xl shadow-soft text-left border border-terracotta/10">
      <div className="flex gap-1.5 text-brass mb-4">
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      </div>
      <p className="font-body text-espresso italic mb-6">"The most romantic dinner we had in Marrakech. The truffle tagliatelle was incredible, and the atmosphere felt like a hidden sanctuary."</p>
      <span className="font-label text-sm text-taupe uppercase tracking-wider block">— Sarah L., London</span>
      </div>
      <div className="bg-plaster p-8 rounded-2xl shadow-soft text-left border border-terracotta/10 mt-0 md:mt-8">
      <div className="flex gap-1.5 text-brass mb-4">
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      </div>
      <p className="font-body text-espresso italic mb-6">"Exceptional service via WhatsApp to book, and even better food. A perfect escape from the medina bustle into Italian elegance."</p>
      <span className="font-label text-sm text-taupe uppercase tracking-wider block">— Marc D., Paris</span>
      </div>
      <div className="bg-plaster p-8 rounded-2xl shadow-soft text-left border border-terracotta/10 mt-0 md:mt-16">
      <div className="flex gap-1.5 text-brass mb-4">
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      <FontAwesomeMaterialIcon name="star" className="text-base" />
      </div>
      <p className="font-body text-espresso italic mb-6">"You can taste the quality of the ingredients. The wine list perfectly complements the Mediterranean menu. Highly recommend."</p>
      <span className="font-label text-sm text-taupe uppercase tracking-wider block">— Elena R., Milan</span>
      </div>
      </div>
      <Link className="bg-wine text-white px-8 py-4 rounded-full font-label font-medium text-lg hover:bg-[#722736] transition-colors shadow-float" href="/reservations">Reserve a Table</Link>
      </div>
      </section>
    </>
  );
}
