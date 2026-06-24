 
import Link from "next/link";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
export function TopNavBar() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-plaster dark:bg-espresso shadow-none bg-transparent backdrop-blur-md border-b border-terracotta/10 transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
      <Link className="font-headline text-2xl italic text-espresso dark:text-plaster tracking-tight" href="/">Mediterra</Link>
      <nav className="hidden md:flex space-x-8 items-center">
      <Link className="font-headline text-lg uppercase tracking-wide text-wine border-b border-terracotta pb-1 hover:opacity-80 transition-opacity" href="/">Home</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors hover:opacity-80" href="/menu">Menu</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors hover:opacity-80" href="/story">Story</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors hover:opacity-80" href="/gallery">Gallery</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors hover:opacity-80" href="/contact">Contact</Link>
      </nav>
      <div className="flex items-center gap-4">
      <Link className="hidden md:block bg-wine text-white px-6 py-3 rounded-full font-label font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 duration-150" href="/reservations">Reserve a Table</Link>
      <button className="md:hidden text-espresso hover:opacity-80 transition-opacity">
      <FontAwesomeMaterialIcon name="menu" style={{ fontSize: "22px" }} />
      </button>
      </div>
      </div>
      </header>
    </>
  );
}
