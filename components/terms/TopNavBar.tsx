import Link from "next/link";
export function TopNavBar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-plaster border-b border-terracotta/20 transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
      <Link className="font-headline text-2xl font-bold text-wine tracking-tight" href="/">Mediterra</Link>
      <div className="hidden md:flex items-center space-x-10">
      <Link className="font-headline text-lg uppercase tracking-wide text-espresso hover:text-wine transition-colors duration-300" href="/menu">Menu</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-espresso hover:text-wine transition-colors duration-300" href="/gallery">Experience</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-espresso hover:text-wine transition-colors duration-300" href="/story">Story</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-espresso hover:text-wine transition-colors duration-300" href="/contact">Contact</Link>
      </div>
      <Link className="bg-wine text-plaster px-8 py-3 rounded-full font-headline text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all active:scale-95 shadow-sm" href="/reservations">
                      Reserve a Table
                  </Link>
      </div>
      </nav>
    </>
  );
}
