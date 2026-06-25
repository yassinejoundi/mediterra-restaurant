/* eslint-disable */
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
import placeholderImage from "../../src/assets/images/remote-image-769d78f4805e.svg";

export function Main() {
  return (
    <>
      <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
      <Image alt="Mediterra Atmosphere" className="object-cover object-center" data-alt="A warm, cinematic wide shot of a candlelit table setting at a high-end Mediterranean restaurant in Marrakech. Rustic terracotta plates, linen napkins, glowing candlelight illuminating handmade pasta and a glass of deep red wine. Soft atmospheric lighting, rich shadows, and a plaster wall in the background." src={placeholderImage} fill priority sizes="100vw" />
      <div className="absolute inset-0 bg-text-primary/40 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>
      <ScrollReveal className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
      <h1 className="font-headline italic text-4xl md:text-6xl lg:text-7xl text-primary mb-6 text-balance drop-shadow-md">
                          Handmade with Restraint,<br/>
      <span className="font-normal text-3xl md:text-5xl">Served with Marrakech Warmth.</span>
      </h1>
      <p className="font-body text-primary-container text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide">
                          Artisanal pastas crafted daily and wood-fired classics, presented in an intimate, candlelit riad setting.
                      </p>
      <Link className="inline-flex px-8 py-3.5 bg-primary-action text-primary font-body rounded-full hover:bg-opacity-90 transition-all duration-300 items-center gap-3 text-base tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" href="/reservations">
                          Reserve a Table
                          <FontAwesomeMaterialIcon name="arrow_forward" className="text-sm" />
      </Link>
      </ScrollReveal>
      </section>
      {/* Menu Content Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row gap-12 relative">
      {/* SideNavBar (Sticky Category Nav) */}
      <aside className="md:w-64 flex-shrink-0">
      <nav className="hidden md:flex flex-col gap-4 p-6 w-64 bg-linen dark:bg-espresso rounded-r-xl h-fit sticky top-24 shadow-sm">
      <div className="mb-4 pb-4 border-b border-secondary-divider/20">
      <h3 className="font-headline text-wine text-lg mb-1">Menu Sections</h3>
      <p className="text-xs text-taupe font-body">Marrakech Hospitality</p>
      </div>
      <Link className="flex items-center gap-3 text-wine font-bold bg-plaster rounded-lg p-3 translate-x-1 transition-transform font-label uppercase tracking-widest text-xs group" href="#antipasti">
      <FontAwesomeMaterialIcon name="restaurant" className="text-sm" />
                              Antipasti
                          </Link>
      <Link className="flex items-center gap-3 text-taupe hover:bg-sage transition-colors p-3 rounded-lg font-label uppercase tracking-widest text-xs group" href="#pasta">
      <FontAwesomeMaterialIcon name="spoke" className="text-sm group-hover:text-text-primary transition-colors" />
      <span className="group-hover:text-text-primary transition-colors">Handmade Pasta</span>
      </Link>
      <Link className="flex items-center gap-3 text-taupe hover:bg-sage transition-colors p-3 rounded-lg font-label uppercase tracking-widest text-xs group" href="#pizza">
      <FontAwesomeMaterialIcon name="local_pizza" className="text-sm group-hover:text-text-primary transition-colors" />
      <span className="group-hover:text-text-primary transition-colors">Pizza</span>
      </Link>
      <Link className="flex items-center gap-3 text-taupe hover:bg-sage transition-colors p-3 rounded-lg font-label uppercase tracking-widest text-xs group" href="#classics">
      <FontAwesomeMaterialIcon name="dinner_dining" className="text-sm group-hover:text-text-primary transition-colors" />
      <span className="group-hover:text-text-primary transition-colors">Italian Classics</span>
      </Link>
      <Link className="flex items-center gap-3 text-taupe hover:bg-sage transition-colors p-3 rounded-lg font-label uppercase tracking-widest text-xs group" href="#desserts">
      <FontAwesomeMaterialIcon name="icecream" className="text-sm group-hover:text-text-primary transition-colors" />
      <span className="group-hover:text-text-primary transition-colors">Desserts</span>
      </Link>
      <Link className="flex items-center gap-3 text-taupe hover:bg-sage transition-colors p-3 rounded-lg font-label uppercase tracking-widest text-xs group" href="#drinks">
      <FontAwesomeMaterialIcon name="local_bar" className="text-sm group-hover:text-text-primary transition-colors" />
      <span className="group-hover:text-text-primary transition-colors">Drinks</span>
      </Link>
      </nav>
      {/* Mobile Horizontal Scroll Nav */}
      <nav className="md:hidden flex overflow-x-auto gap-3 py-4 sticky top-[73px] bg-primary/95 backdrop-blur-sm z-40 px-2 -mx-4 border-b border-secondary-divider/10 hide-scrollbar">
      <Link className="whitespace-nowrap px-4 py-2 bg-primary-container text-primary-action font-label uppercase tracking-widest text-xs rounded-full border border-primary-action/20" href="#antipasti">Antipasti</Link>
      <Link className="whitespace-nowrap px-4 py-2 text-text-secondary hover:text-text-primary font-label uppercase tracking-widest text-xs rounded-full border border-transparent" href="#pasta">Handmade Pasta</Link>
      <Link className="whitespace-nowrap px-4 py-2 text-text-secondary hover:text-text-primary font-label uppercase tracking-widest text-xs rounded-full border border-transparent" href="#pizza">Pizza</Link>
      <Link className="whitespace-nowrap px-4 py-2 text-text-secondary hover:text-text-primary font-label uppercase tracking-widest text-xs rounded-full border border-transparent" href="#classics">Italian Classics</Link>
      </nav>
      </aside>
      {/* Main Menu Content */}
      <div className="flex-grow space-y-24 pb-16">
      {/* Antipasti Section */}
      <ScrollReveal as="section" className="scroll-mt-32" id="antipasti">
      <div className="mb-10 text-center md:text-left">
      <h2 className="font-headline italic text-3xl md:text-4xl text-primary-action mb-3">Antipasti</h2>
      <p className="font-body text-text-secondary max-w-xl">To begin. Served with house-made focaccia and local olive oil.</p>
      <div className="w-12 h-px bg-secondary-divider/40 mt-6 mx-auto md:mx-0"></div>
      </div>
      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
      {/* Menu Item */}
      <div className="bg-primary-container p-6 rounded-xl border border-secondary-divider/10 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-headline text-lg text-text-primary">Burrata e Pomodorini</h4>
      <span className="font-body text-secondary-divider text-sm font-medium">180 MAD</span>
      </div>
      <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                                      Creamy puglia burrata, blistered cherry tomatoes, fresh basil, aged balsamic glaze.
                                  </p>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-label text-secondary bg-sage/40">Vegetarian</span>
      </div>
      {/* Menu Item */}
      <div className="bg-primary-container p-6 rounded-xl border border-secondary-divider/10 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-headline text-lg text-text-primary">Arancini with Saffron</h4>
      <span className="font-body text-secondary-divider text-sm font-medium">140 MAD</span>
      </div>
      <p className="font-body text-text-secondary text-sm leading-relaxed">
                                      Crispy risotto spheres scented with Taliouine saffron, filled with smoked mozzarella and beef ragù.
                                  </p>
      </div>
      {/* Menu Item */}
      <div className="bg-primary-container p-6 rounded-xl border border-secondary-divider/10 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-headline text-lg text-text-primary">Carpaccio di Manzo</h4>
      <span className="font-body text-secondary-divider text-sm font-medium">210 MAD</span>
      </div>
      <p className="font-body text-text-secondary text-sm leading-relaxed">
                                      Thinly sliced beef tenderloin, rocket, shaved parmesan, capers, lemon olive oil dressing.
                                  </p>
      </div>
      {/* Menu Item */}
      <div className="bg-primary-container p-6 rounded-xl border border-secondary-divider/10 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-headline text-lg text-text-primary">Calamari Fritti</h4>
      <span className="font-body text-secondary-divider text-sm font-medium">190 MAD</span>
      </div>
      <p className="font-body text-text-secondary text-sm leading-relaxed">
                                      Lightly dusted and fried calamari rings served with a preserved lemon aioli.
                                  </p>
      </div>
      </StaggerReveal>
      </ScrollReveal>
      {/* Handmade Pasta Section (Highlighted) */}
      <ScrollReveal as="section" className="scroll-mt-32" id="pasta">
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
      <div>
      <h2 className="font-headline italic text-3xl md:text-4xl text-primary-action mb-3">Handmade Pasta</h2>
      <p className="font-body text-text-secondary max-w-xl">Rolled fresh daily using imported '00' flour and organic farm eggs.</p>
      <div className="w-12 h-px bg-secondary-divider/40 mt-6 mx-auto md:mx-0"></div>
      </div>
      <div className="hidden md:block">
      <span className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-widest text-text-secondary">
      <FontAwesomeMaterialIcon name="stars" className="text-sm" />
                                      House Specialty
                                  </span>
      </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Highlight Image */}
      <div className="lg:col-span-5 h-64 lg:h-full min-h-[300px] rounded-xl overflow-hidden relative shadow-sm">
      <Image alt="Handmade Pasta Craft" className="object-cover" data-alt="Close up shot of a chef's hands dusting flour over fresh ribbons of handmade tagliatelle pasta on a rustic wooden table. Warm soft lighting, editorial style, emphasizing the artisanal craft of Italian cooking in a cozy restaurant setting." src={placeholderImage} fill sizes="(min-width: 1024px) 42vw, 100vw" />
      </div>
      {/* Pasta List */}
      <div className="lg:col-span-7 flex flex-col gap-6">
      <div className="border-b border-secondary-divider/10 pb-6 group">
      <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-headline text-xl text-primary-action group-hover:text-secondary transition-colors">Tagliatelle al Tartufo</h4>
      <span className="font-body text-secondary-divider text-base font-medium">280 MAD</span>
      </div>
      <p className="font-body text-text-secondary text-base leading-relaxed mb-3">
                                          Silky ribbons of pasta tossed in a light parmesan cream, finished with freshly shaved black truffle.
                                      </p>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-label text-text-highlight bg-espresso">Signature</span>
      </div>
      <div className="border-b border-secondary-divider/10 pb-6 group">
      <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-headline text-xl text-primary-action group-hover:text-secondary transition-colors">Pappardelle with Slow-Cooked Ragù</h4>
      <span className="font-body text-secondary-divider text-base font-medium">240 MAD</span>
      </div>
      <p className="font-body text-text-secondary text-base leading-relaxed">
                                          Wide pasta ribbons enveloping a rich, 12-hour braised beef and root vegetable ragù.
                                      </p>
      </div>
      <div className="pb-2 group">
      <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-headline text-xl text-primary-action group-hover:text-secondary transition-colors">Ravioli Ricotta e Spinaci</h4>
      <span className="font-body text-secondary-divider text-base font-medium">220 MAD</span>
      </div>
      <p className="font-body text-text-secondary text-base leading-relaxed">
                                          Hand-pinched parcels filled with fresh ricotta and spinach, served in a burnt butter and sage sauce.
                                      </p>
      </div>
      </div>
      </div>
      </ScrollReveal>
      {/* Pizza Section */}
      <ScrollReveal as="section" className="scroll-mt-32" id="pizza">
      <div className="mb-10 text-center md:text-left">
      <h2 className="font-headline italic text-3xl md:text-4xl text-primary-action mb-3">Pizza</h2>
      <p className="font-body text-text-secondary max-w-xl">Wood-fired, blistered crust, simple honest ingredients.</p>
      <div className="w-12 h-px bg-secondary-divider/40 mt-6 mx-auto md:mx-0"></div>
      </div>
      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10">
      <div className="relative pl-6 border-l border-secondary-divider/20">
      <h4 className="font-headline text-lg text-text-primary mb-1">Margherita Extra</h4>
      <p className="font-body text-text-secondary text-sm leading-relaxed mb-2">San Marzano tomato base, fresh buffalo mozzarella, basil, EVOO.</p>
      <span className="font-body text-secondary-divider text-sm font-medium">160 MAD</span>
      </div>
      <div className="relative pl-6 border-l border-secondary-divider/20">
      <h4 className="font-headline text-lg text-text-primary mb-1">Diavola</h4>
      <p className="font-body text-text-secondary text-sm leading-relaxed mb-2">Tomato base, fior di latte, spicy Calabrian salami, chili flakes.</p>
      <span className="font-body text-secondary-divider text-sm font-medium">180 MAD</span>
      </div>
      <div className="relative pl-6 border-l border-secondary-divider/20">
      <h4 className="font-headline text-lg text-text-primary mb-1">Tartufata</h4>
      <p className="font-body text-text-secondary text-sm leading-relaxed mb-2">White base, mozzarella, mixed wild mushrooms, truffle cream.</p>
      <span className="font-body text-secondary-divider text-sm font-medium">220 MAD</span>
      </div>
      <div className="relative pl-6 border-l border-secondary-divider/20">
      <h4 className="font-headline text-lg text-text-primary mb-1">Prosciutto e Rucola</h4>
      <p className="font-body text-text-secondary text-sm leading-relaxed mb-2">Tomato, mozzarella, finished with fresh rocket and Prosciutto di Parma.</p>
      <span className="font-body text-secondary-divider text-sm font-medium">210 MAD</span>
      </div>
      </StaggerReveal>
      </ScrollReveal>
      {/* Italian Classics Section */}
      <ScrollReveal as="section" className="scroll-mt-32" id="classics">
      <div className="mb-10 text-center md:text-left">
      <h2 className="font-headline italic text-3xl md:text-4xl text-primary-action mb-3">Italian Classics</h2>
      <p className="font-body text-text-secondary max-w-xl">Hearty mains celebrating land and sea.</p>
      <div className="w-12 h-px bg-secondary-divider/40 mt-6 mx-auto md:mx-0"></div>
      </div>
      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-transparent border border-secondary-divider/20 p-8 rounded-xl relative overflow-hidden group hover:border-primary-action/30 transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <FontAwesomeMaterialIcon name="set_meal" className="text-4xl text-primary-action" />
      </div>
      <div className="relative z-10">
      <div className="flex justify-between items-baseline mb-3">
      <h4 className="font-headline text-xl text-text-primary">Pan-Seared Sea Bass</h4>
      <span className="font-body text-secondary-divider text-lg font-medium">320 MAD</span>
      </div>
      <p className="font-body text-text-secondary text-base leading-relaxed">
                                          Fresh local sea bass fillet, Mediterranean vegetable caponata, lemon-caper butter sauce.
                                      </p>
      </div>
      </div>
      <div className="bg-transparent border border-secondary-divider/20 p-8 rounded-xl relative overflow-hidden group hover:border-primary-action/30 transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <FontAwesomeMaterialIcon name="restaurant_menu" className="text-4xl text-primary-action" />
      </div>
      <div className="relative z-10">
      <div className="flex justify-between items-baseline mb-3">
      <h4 className="font-headline text-xl text-text-primary">Osso Buco</h4>
      <span className="font-body text-secondary-divider text-lg font-medium">360 MAD</span>
      </div>
      <p className="font-body text-text-secondary text-base leading-relaxed">
                                          Traditional Milanese braised veal shank, served over saffron risotto with gremolata.
                                      </p>
      </div>
      </div>
      </StaggerReveal>
      </ScrollReveal>
      {/* Reservation CTA Banner */}
      <ScrollReveal as="section" className="bg-espresso text-primary rounded-2xl p-8 md:p-12 text-center my-16 relative overflow-hidden shadow-lg" id="reservations">
      {/* Subtle background pattern or noise could go here */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
      <FontAwesomeMaterialIcon name="local_florist" className="text-text-highlight text-2xl mb-4" />
      <h3 className="font-headline italic text-2xl md:text-3xl mb-4 text-plaster">A Note on Seasonality</h3>
      <p className="font-body text-taupe mb-8 leading-relaxed text-sm md:text-base">
                                  Our menu evolves with the seasons, relying on the freshest produce from local Marrakech markets and select Italian imports. For bespoke dietary requirements or large parties, please contact us directly.
                              </p>
      <a className="inline-flex px-6 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-opacity-90 transition-all items-center gap-2 text-sm tracking-wide shadow-md" href="https://wa.me/2125XXXXXXX" target="_blank" rel="noreferrer">
      <FontAwesomeMaterialIcon name="chat" className="text-sm" />
                                  Reserve via WhatsApp
                              </a>
      </div>
      </ScrollReveal>
      </div>
      </div>
      </main>
    </>
  );
}
