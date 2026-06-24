import Image from "next/image";
import Link from "next/link";
import pastaPreparationImage from "../../src/assets/images/remote-image-d6e35fba3bc7.jpg";
import saladImage from "../../src/assets/images/remote-image-0d1c43243736.png";

export function FoodCraftSection() {
  return (
    <>
      <section className="bg-linen py-32 mb-32 reveal-on-scroll">
      <div className="max-w-screen-xl mx-auto px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
      <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl relative">
      <Image className="object-cover" alt="Handmade pasta preparation" src={pastaPreparationImage} fill sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="absolute -bottom-8 -right-8 w-64 h-80 rounded-xl overflow-hidden border-8 border-linen shadow-xl hidden lg:block">
      <Image className="object-cover" alt="Mediterranean salad in a ceramic bowl" data-alt="Close-up photograph of a hand-thrown ceramic bowl filled with bright, zesty Mediterranean salad. Vibrant green herbs, deep red cherry tomatoes, and crumbles of white feta cheese are drizzled with glistening golden olive oil. The lighting is natural and bright, emphasizing fresh textures and an artisanal, high-end culinary aesthetic." src={saladImage} fill sizes="256px" />
      </div>
      </div>
      <div>
      <span className="text-accent font-label text-sm uppercase tracking-widest mb-4 block">Section 02</span>
      <h2 className="text-4xl md:text-5xl font-serif text-espresso leading-tight">Food &amp; Craft</h2>
      <p className="text-taupe mt-6 text-lg leading-relaxed">
                              Our kitchen is a sanctuary of tradition. From the dusting of flour on ancient oak tables to the golden pour of cold-pressed Moroccan oil, every plate is a testament to the slow, beautiful art of the Mediterranean table.
                          </p>
      <div className="mt-10">
      <Link className="inline-block bg-espresso text-ivory px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest hover:bg-wine transition-all" href="/menu">
                                  View the Menu
                              </Link>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
