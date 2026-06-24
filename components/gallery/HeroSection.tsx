 
import Link from "next/link";
export function HeroSection() {
  return (
    <>
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8 relative z-10">
      <div className="max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-serif text-espresso leading-tight mb-8 reveal-on-scroll">
                          A warm Mediterranean room, handmade food, and quiet Marrakech evenings.
                      </h1>
      <div className="flex flex-wrap items-center gap-6 reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
      <Link className="bg-wine text-ivory px-8 py-4 rounded-full font-label text-base uppercase tracking-widest hover:shadow-xl transition-all" href="/reservations">
                              Reserve a Table
                          </Link>
      </div>
      </div>
      </div>
      {/* Decorative Sun-drenched Riad Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-linen to-sage/20 -z-10 opacity-60"></div>
      <div className="absolute -right-20 top-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </header>
    </>
  );
}
