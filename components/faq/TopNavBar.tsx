import Link from "next/link";
export function TopNavBar() {
  return (
    <>
      <header className="bg-plaster dark:bg-espresso border-b border-terracotta/20 docked full-width top-0 sticky z-50 transition-colors duration-300">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-full mx-auto">
      <Link className="text-2xl font-headline italic text-wine dark:text-linen" href="/">Mediterra</Link>
      <nav className="hidden md:flex space-x-8 items-center">
      <Link className="text-taupe dark:text-sage hover:text-wine font-body tracking-tight transition-colors duration-300" href="/menu">Menu</Link>
      <Link className="text-taupe dark:text-sage hover:text-wine font-body tracking-tight transition-colors duration-300" href="/gallery">Experience</Link>
      <Link className="text-taupe dark:text-sage hover:text-wine font-body tracking-tight transition-colors duration-300" href="/reservations">Reservations</Link>
      <Link className="text-taupe dark:text-sage hover:text-wine font-body tracking-tight transition-colors duration-300" href="/contact">Private Dining</Link>
      <Link className="text-wine dark:text-plaster font-bold border-b border-wine font-body tracking-tight transition-colors duration-300" href="/contact">Contact</Link>
      </nav>
      <Link className="bg-wine text-plaster px-6 py-2.5 rounded-full font-body font-medium tracking-wide hover:opacity-90 transition-opacity duration-300 shadow-sm text-sm" href="/reservations">Book a Table</Link>
      </div>
      </header>
    </>
  );
}
