 
import Link from "next/link";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
export function TopNavigationGeneratedFromJSON() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent shadow-none transition-all duration-300" id="top-nav">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
      <Link className="font-headline text-2xl italic font-serif text-espresso hover:opacity-80 transition-opacity" href="/">Mediterra</Link>
      <div className="hidden md:flex gap-8 items-center">
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors hover:opacity-80" href="/">Home</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors hover:opacity-80" href="/menu">Menu</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-wine border-b border-terracotta pb-1 hover:opacity-80 transition-opacity" href="/story">Story</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors hover:opacity-80" href="/gallery">Gallery</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors hover:opacity-80" href="/contact">Contact</Link>
      </div>
      <Link className="font-headline text-lg uppercase tracking-wide text-wine hover:opacity-80 transition-opacity flex items-center gap-2" href="/reservations">
      <span>Reserve a Table</span>
      <FontAwesomeMaterialIcon name="arrow_forward" className="text-sm" />
      </Link>
      </div>
      </nav>
    </>
  );
}
