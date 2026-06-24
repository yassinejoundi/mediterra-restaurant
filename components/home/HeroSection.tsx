import Image from "next/image";
import Link from "next/link";
import heroTableImage from "../../src/assets/images/remote-image-bed4f7bee88c.jpg";

export function HeroSection() {
  return (
    <>
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
      <Image alt="A romantic Mediterranean table in Marrakech" className="object-cover object-center scale-105" data-alt="A beautifully set wooden dining table in a sunlit, earthy-toned Marrakech courtyard, featuring handmade pasta, fresh tomatoes, olive oil, and rustic bread. The scene exudes Mediterranean warmth, romantic editorial hospitality, and coastal Italian ease, perfectly blending riad architecture with Italian culinary traditions. Soft natural lighting, deep warm plaster backgrounds." src={heroTableImage} fill priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/20 to-transparent mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center mt-20">
      <span className="font-label text-sm md:text-base tracking-[0.2em] text-plaster/90 uppercase mb-4">Mediterra Marrakech</span>
      <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg">A romantic Mediterranean<br/><span className="italic font-light">table in Marrakech.</span></h1>
      <p className="font-body text-lg md:text-xl text-plaster max-w-2xl mb-10 font-light drop-shadow-md">Handmade Italian discipline served with the generous spirit of a Marrakech riad. Candlelit, intimate, and beautiful with substance.</p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
      <Link className="bg-wine text-plaster px-8 py-4 rounded-full font-label font-medium text-lg hover:bg-[#722736] transition-all shadow-float hover:-translate-y-1 w-full sm:w-auto" href="/reservations">Reserve a Table</Link>
      <Link className="bg-transparent border border-plaster/50 text-plaster px-8 py-4 rounded-full font-label font-medium text-lg hover:bg-plaster/10 transition-all backdrop-blur-sm w-full sm:w-auto" href="/menu">View Menu</Link>
      </div>
      </div>
      </section>
    </>
  );
}
