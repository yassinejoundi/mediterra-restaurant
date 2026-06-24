import Link from "next/link";
export function TopNavBar() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-plaster dark:bg-espresso shadow-none">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
      <Link className="font-headline text-2xl italic font-serif text-espresso dark:text-plaster style_universal_hover" href="/">
                      Mediterra
                  </Link>
      <div className="hidden md:flex items-center space-gap-8 gap-8">
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors" href="/">Home</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors" href="/menu">Menu</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors" href="/story">Story</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-wine border-b border-terracotta pb-1" href="/gallery">Gallery</Link>
      <Link className="font-headline text-lg uppercase tracking-wide text-taupe hover:text-espresso transition-colors" href="/contact">Contact</Link>
      </div>
      <Link className="bg-wine text-ivory px-6 py-2 rounded-full font-label text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all" href="/reservations">
                      Reserve a Table
                  </Link>
      </div>
      </nav>
    </>
  );
}
