 
import Link from "next/link";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
export function TopNavBarComponent() {
  return (
    <>
      <header className="bg-plaster dark:bg-espresso border-b border-terracotta/20 sticky top-0 z-50 transition-transform duration-300">
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
      <Link className="font-headline text-2xl font-bold text-espresso dark:text-plaster tracking-tight" href="/">Mediterra</Link>
      <nav className="hidden md:flex space-x-8 items-center">
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors duration-300" href="/menu">Menu</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors duration-300" href="/gallery">Experience</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors duration-300" href="/contact">Private Dining</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors duration-300" href="/story">About</Link>
      </nav>
      <Link className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-wine text-plaster font-headline text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity scale-95 active:opacity-80" href="#reservation-form">
                      Reserve a Table
                  </Link>
      <button className="md:hidden text-espresso p-2 focus:outline-none">
      <FontAwesomeMaterialIcon name="menu" style={{ fontSize: "22px" }} />
      </button>
      </div>
      </header>
    </>
  );
}
