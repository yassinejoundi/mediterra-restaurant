import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import tagliatelleImage from "../../src/assets/images/remote-image-56787e49aebb.jpg";

export function MenuPreview() {
  return (
    <>
      <section className="py-24 bg-linen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-plaster rounded-full mix-blend-overlay filter blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4"></div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <ScrollReveal className="editorial-image-container rounded-2xl overflow-hidden shadow-soft aspect-[3/4] relative w-full max-w-md mx-auto lg:mx-0" direction="right">
      <Image alt="Handmade tagliatelle pasta" className="editorial-image object-cover" src={tagliatelleImage} fill sizes="(min-width: 1024px) 448px, 100vw" />
      </ScrollReveal>
      <div className="flex flex-col justify-center">
      <ScrollReveal className="mb-12" direction="left">
      <span className="font-label text-xs tracking-[0.15em] text-olive uppercase mb-3 block">From the Kitchen</span>
      <h2 className="font-headline text-4xl md:text-5xl text-espresso mb-6 leading-tight">Coastal ease meets <br/><span className="italic text-wine">Italian discipline.</span></h2>
      <p className="font-body text-taupe max-w-md text-lg">Our menu celebrates the purity of ingredients. Fresh pasta rolled daily, slow-cooked ragùs, and vibrant Mediterranean flavors.</p>
      </ScrollReveal>
      <StaggerReveal className="space-y-8 mb-12" delay={0.08}>
      <div className="group cursor-pointer">
      <div className="flex justify-between items-baseline mb-2 border-b border-terracotta/20 pb-2 group-hover:border-wine/40 transition-colors">
      <h4 className="font-headline text-xl text-espresso group-hover:text-wine transition-colors">Tagliatelle al Tartufo</h4>
      <span className="font-label text-terracotta">240 MAD</span>
      </div>
      <p className="font-body text-sm text-taupe">Handmade ribbon pasta, fresh black truffle, Parmigiano Reggiano crema.</p>
      </div>
      <div className="group cursor-pointer">
      <div className="flex justify-between items-baseline mb-2 border-b border-terracotta/20 pb-2 group-hover:border-wine/40 transition-colors">
      <h4 className="font-headline text-xl text-espresso group-hover:text-wine transition-colors">Pappardelle with Slow-Cooked Ragù</h4>
      <span className="font-label text-terracotta">190 MAD</span>
      </div>
      <p className="font-body text-sm text-taupe">12-hour braised beef and veal ragù, San Marzano tomatoes, fresh basil.</p>
      </div>
      <div className="group cursor-pointer">
      <div className="flex justify-between items-baseline mb-2 border-b border-terracotta/20 pb-2 group-hover:border-wine/40 transition-colors">
      <h4 className="font-headline text-xl text-espresso group-hover:text-wine transition-colors">Burrata e Pomodorini</h4>
      <span className="font-label text-terracotta">160 MAD</span>
      </div>
      <p className="font-body text-sm text-taupe">Fresh Apulian burrata, confit cherry tomatoes, basil oil, toasted focaccia.</p>
      </div>
      </StaggerReveal>
      <div>
      <ScrollReveal delay={0.12}>
      <Link className="inline-block bg-transparent border border-espresso text-espresso px-8 py-3 rounded-full font-label font-medium hover:bg-espresso hover:text-plaster transition-colors w-max" href="/menu">Explore the Menu</Link>
      </ScrollReveal>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
