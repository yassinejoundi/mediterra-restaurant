 
import Link from "next/link";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
export function TopNavBar() {
  return (
    <>
      <header className="bg-plaster dark:bg-espresso w-full sticky top-0 z-50 border-b border-terracotta/20 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
      <Link className="text-2xl font-headline italic text-espresso dark:text-plaster hover:opacity-80 transition-opacity" href="/">
                      Mediterra
                  </Link>
      <nav className="hidden md:flex gap-8 items-center">
      <Link className="text-taupe hover:text-espresso transition-colors font-body tracking-wide hover:opacity-80" href="/">Home</Link>
      <Link className="text-wine font-bold border-b-2 border-wine pb-1 font-body tracking-wide scale-95 duration-150" href="/menu">Menu</Link>
      <Link className="text-taupe hover:text-espresso transition-colors font-body tracking-wide hover:opacity-80" href="/gallery">Gallery</Link>
      <Link className="text-taupe hover:text-espresso transition-colors font-body tracking-wide hover:opacity-80" href="/contact">Contact</Link>
      </nav>
      <Link className="hidden md:inline-flex px-6 py-2.5 bg-wine text-plaster font-body rounded-full hover:opacity-90 transition-opacity items-center gap-2 text-sm tracking-wide" href="/reservations">
                      Reserve a Table
                  </Link>
      <button className="md:hidden text-text-primary p-2">
      <FontAwesomeMaterialIcon name="menu" />
      </button>
      </div>
      </header>
    </>
  );
}
