 
import Link from "next/link";
export function TopNavBar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-plaster border-b border-terracotta/20 transition-all duration-300" id="main-nav">
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
      <Link className="font-headline text-2xl italic font-semibold text-wine dark:text-linen tracking-tight" href="/">
                      Mediterra
                  </Link>
      <div className="hidden md:flex items-center gap-10">
      <Link className="font-headline text-sm uppercase tracking-widest text-espresso hover:text-wine transition-colors" href="/menu">Menu</Link>
      <Link className="font-headline text-sm uppercase tracking-widest text-espresso hover:text-wine transition-colors" href="/gallery">Experience</Link>
      <Link className="font-headline text-sm uppercase tracking-widest text-espresso hover:text-wine transition-colors" href="/story">Story</Link>
      <Link className="font-headline text-sm uppercase tracking-widest text-espresso hover:text-wine transition-colors" href="/gallery">Gallery</Link>
      <Link className="font-headline text-sm uppercase tracking-widest text-espresso hover:text-wine transition-colors" href="/contact">Contact</Link>
      </div>
      <Link className="bg-wine text-ivory px-6 py-3 rounded-full font-headline text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300" href="/reservations">
                      Reserve a Table
                  </Link>
      </nav>
      </header>
    </>
  );
}
