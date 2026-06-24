import Link from "next/link";
export function TopNavBar() {
  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 w-full sticky top-0 z-50 bg-plaster dark:bg-espresso bg-transparent flat no shadows">
      <Link className="font-headline text-2xl italic text-espresso dark:text-plaster" href="/">Mediterra</Link>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
      <Link className="font-headline text-headline-sm uppercase tracking-widest text-taupe hover:text-espresso transition-colors duration-300" href="/">Home</Link>
      <Link className="font-headline text-headline-sm uppercase tracking-widest text-taupe hover:text-espresso transition-colors duration-300" href="/menu">Menu</Link>
      <Link className="font-headline text-headline-sm uppercase tracking-widest text-taupe hover:text-espresso transition-colors duration-300" href="/story">Story</Link>
      <Link className="font-headline text-headline-sm uppercase tracking-widest text-taupe hover:text-espresso transition-colors duration-300" href="/gallery">Gallery</Link>
      <Link className="font-headline text-headline-sm uppercase tracking-widest text-wine border-b border-terracotta pb-1" href="/contact">Contact</Link>
      </div>
      <Link className="bg-wine text-plaster px-6 py-2.5 rounded-full font-label text-sm uppercase tracking-wider hover:opacity-90 transition-all Active: opacity-80" href="/reservations">
                  Reserve a Table
              </Link>
      </nav>
    </>
  );
}
