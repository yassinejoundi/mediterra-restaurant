/* eslint-disable */
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
import courtyardHeroImage from "../../src/assets/images/remote-image-da9c51ebc9d0.png";
import foundersImage from "../../src/assets/images/remote-image-ee92d89c3e02.png";
import pastaCraftImage from "../../src/assets/images/remote-image-3fe1c3c0012e.png";
import courtyardDiningImage from "../../src/assets/images/remote-image-30fd0718db85.jpg";
import candlelitTableImage from "../../src/assets/images/remote-image-3d08dbc38a4d.png";

export function Main() {
  return (
    <>
      <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <ScrollReveal className="lg:col-span-5 space-y-8 z-10 relative" direction="right">
      <h1 className="font-headline text-5xl lg:text-7xl font-light italic leading-tight text-wine">
                              Born from friendship, Italian discipline, and Marrakech generosity.
                          </h1>
      <p className="font-body text-xl text-taupe font-light max-w-md">
                              A meeting of two worlds, creating an intimate dining experience rooted in craft and warmth.
                          </p>
      <Link className="inline-flex items-center gap-3 bg-wine text-primary px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[0.98]" href="/reservations">
                              Reserve a Table
                          </Link>
      </ScrollReveal>
      <ScrollReveal className="lg:col-span-7 relative" direction="left" delay={0.08}>
      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/5 relative">
      <Image className="object-cover" alt="Sun-drenched Marrakech riad courtyard dining area" data-alt="A sun-drenched outdoor courtyard dining area in a luxurious Marrakech riad. High-end lifestyle photography, warm Mediterranean aesthetic. Olive trees in terracotta pots, elegant wooden tables set with linen napkins and fresh bread. Soft natural light, shadows casting geometric patterns. The mood is relaxed, warm, and inviting. Deep terracotta walls and warm ivory accents." src={courtyardHeroImage} fill priority sizes="(min-width: 1024px) 58vw, 100vw" />
      </div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-linen rounded-full -z-10 blur-3xl opacity-50"></div>
      </ScrollReveal>
      </div>
      </section>
      {/* Section 1: The Beginning */}
      <section className="bg-linen py-32 mb-32 border-y border-terracotta/20 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <ScrollReveal className="order-2 md:order-1 relative" direction="right">
      <div className="aspect-[3/4] rounded-lg overflow-hidden border border-taupe/20 p-2 bg-primary transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out shadow-sm relative">
      <Image className="object-cover rounded" alt="Founders sharing recipes in a warm kitchen" data-alt="Two men, one Italian and one Moroccan, sharing a laugh over a rustic wooden table in a warmly lit kitchen. They are looking over handwritten recipes. Warm, cinematic lighting, editorial documentary style. Soft focus background showing subtle kitchen elements. The mood is collaborative, genuine, and passionate." src={foundersImage} fill sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      </ScrollReveal>
      <ScrollReveal className="order-1 md:order-2 space-y-8" direction="left" delay={0.08}>
      <span className="font-label text-olive text-sm uppercase tracking-widest">The Beginning</span>
      <h2 className="font-headline text-4xl lg:text-5xl font-light text-charcoal">Two paths converging in the medina.</h2>
      <div className="space-y-6 text-taupe font-body text-lg font-light leading-relaxed">
      <p>
                                      It started with a shared devotion to Italian craft. An Italian living in Marrakech, seeking the authentic flavors of home, and a Moroccan chef with a profound respect for culinary discipline.
                                  </p>
      <p>
                                      Together, they created Mediterra—not as a fusion concept, but as a space where Italian recipes are respected implicitly, served within the deep, soulful hospitality of a Moroccan riad.
                                  </p>
      </div>
      <Link className="inline-flex items-center gap-2 text-wine font-label uppercase tracking-widest text-sm hover:opacity-70 transition-opacity border-b border-wine pb-1" href="/menu">
                                  View Menu <FontAwesomeMaterialIcon name="arrow_right_alt" className="text-sm" />
      </Link>
      </ScrollReveal>
      </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/30 to-transparent -z-10"></div>
      </section>
      {/* Section 2: Italian Discipline */}
      <section className="max-w-screen-2xl mx-auto px-8 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <ScrollReveal className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pr-12" direction="right">
      <span className="font-label text-terracotta text-sm uppercase tracking-widest flex items-center gap-2">
      <span className="w-8 h-[1px] bg-terracotta"></span>
                              Italian Discipline
                          </span>
      <h2 className="font-headline text-4xl lg:text-5xl font-light italic text-wine">Patience, restraint, and recipes respected.</h2>
      <p className="font-body text-lg text-taupe font-light leading-relaxed">
                              Our pasta is made by hand daily, demanding simplicity and patience. We source the finest olive oils, perfect our dough hydration, and finish dishes tableside. It is an exercise in restraint—allowing pristine ingredients to speak clearly without unnecessary embellishment.
                          </p>
      <div>
      <Link className="inline-block px-6 py-3 border border-taupe/30 rounded-full text-charcoal font-label text-sm uppercase tracking-widest hover:bg-linen transition-colors duration-300" href="/menu">
                                  Explore the Menu
                              </Link>
      </div>
      </ScrollReveal>
      <ScrollReveal className="lg:col-span-7" direction="left" delay={0.08}>
      <div className="aspect-video lg:aspect-[16/10] rounded-xl overflow-hidden shadow-lg shadow-charcoal/5 group relative">
      <Image className="object-cover transition-transform duration-1000 group-hover:scale-105" alt="Chef dusting flour over handmade pasta" data-alt="Close-up, detailed editorial photography of a chef's hands delicately dusting flour over fresh, handmade pappardelle pasta on a rustic wooden table. Warm, low-key lighting highlighting the texture of the flour, pasta, and wood. A soft glow from a candle is visible in the blurred background. Artisan, tactile, high-end food photography." src={pastaCraftImage} fill sizes="(min-width: 1024px) 58vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      </ScrollReveal>
      </div>
      </section>
      {/* Section 3: Marrakech Generosity */}
      <section className="max-w-screen-2xl mx-auto px-8 mb-32">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-16">
      <ScrollReveal className="lg:col-span-7" direction="right">
      <div className="grid grid-cols-2 gap-4 h-full">
      <div className="space-y-4">
      <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md relative">
      <Image className="object-cover" alt="Outdoor courtyard dining in a Marrakech riad at dusk" data-alt="Editorial lifestyle photography of an intimate outdoor courtyard dining area in a Marrakech riad at dusk. Mediterranean influence, olive trees in terracotta pots, warm glowing lanterns, linen-draped tables, romantic and peaceful." src={courtyardDiningImage} fill sizes="(min-width: 1024px) 29vw, 50vw" />
      </div>
      <div className="aspect-square rounded-xl overflow-hidden shadow-md bg-linen/50 p-6 flex flex-col justify-end border border-taupe/10">
      <FontAwesomeMaterialIcon name="local_fire_department" className="text-brass text-2xl mb-4 opacity-70" />
      <p className="font-headline italic text-xl text-charcoal">"Hospitality is not a service, it is a feeling."</p>
      </div>
      </div>
      <div className="pt-12 space-y-4">
      <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md relative">
      <Image className="object-cover" alt="Candlelit table in a warm dining room" data-alt="A beautifully set table in a dimly lit, warm-toned dining room. Focus on a glowing candle, a crystal wine glass reflecting the light, and a crisp linen napkin. The background is softly blurred, showing a Moroccan archway and a waiter in the distance. Romantic, elegant, atmospheric, editorial style." src={candlelitTableImage} fill sizes="(min-width: 1024px) 29vw, 50vw" />
      </div>
      </div>
      </div>
      </ScrollReveal>
      <ScrollReveal className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-12" direction="left" delay={0.08}>
      <span className="font-label text-brass text-sm uppercase tracking-widest flex items-center gap-2">
      <span className="w-8 h-[1px] bg-brass"></span>
                              Marrakech Generosity
                          </span>
      <h2 className="font-headline text-4xl lg:text-5xl font-light text-charcoal">The soulful environment of the riad.</h2>
      <p className="font-body text-lg text-taupe font-light leading-relaxed">
                              Italian discipline meets the profound warmth of Moroccan hospitality. From the welcome ritual to the texture of the linen and the soft glow of candlelight, every detail is designed to make you feel cared for. It is an intimate, beautiful space meant for lingering.
                          </p>
      <div>
      <Link className="inline-block px-6 py-3 bg-linen text-wine border border-terracotta/20 rounded-full font-label text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300" href="/gallery">
                                  View Gallery
                              </Link>
      </div>
      </ScrollReveal>
      </div>
      </section>
      {/* Section 4: Beauty With Substance */}
      <ScrollReveal as="section" className="max-w-screen-xl mx-auto px-8 mb-32 text-center space-y-12">
      <div className="max-w-2xl mx-auto space-y-8">
      <FontAwesomeMaterialIcon name="spa" className="mx-auto text-4xl text-terracotta opacity-50" />
      <h2 className="font-headline text-3xl lg:text-4xl font-light italic text-wine">Intentional and authentic, never staged.</h2>
      <p className="font-body text-xl text-taupe font-light leading-relaxed">
                          A beautiful room, real food, a personal evening. We believe in beauty with substance, where the atmosphere enhances the meal, but never overshadows the connection between the people sharing it.
                      </p>
      </div>
      </ScrollReveal>
      {/* Closing Invitation */}
      <section className="bg-wine text-primary py-32 rounded-3xl mx-4 lg:mx-8 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-charcoal/20 via-transparent to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <ScrollReveal className="relative z-10 max-w-2xl mx-auto text-center space-y-10 px-8">
      <h2 className="font-headline text-4xl lg:text-6xl font-light">Join us for an evening.</h2>
      <p className="font-body text-linen/80 text-lg font-light">
                           Experience the meeting of Italian craft and Marrakech warmth.
                       </p>
      <Link className="inline-flex items-center gap-3 bg-primary text-wine px-10 py-5 rounded-full font-label text-sm uppercase tracking-widest hover:bg-linen transition-all duration-300 transform hover:scale-[0.98] shadow-lg shadow-charcoal/20" href="/reservations">
                          Reserve a Table
                      </Link>
      </ScrollReveal>
      </section>
      </main>
    </>
  );
}
