 
export function FiltersSection() {
  return (
    <>
      <section className="sticky top-20 z-40 bg-ivory/80 backdrop-blur-md py-6 border-y border-accent/10 mb-12">
      <div className="max-w-screen-xl mx-auto px-8 flex flex-wrap gap-4 items-center justify-center md:justify-start">
      <span className="text-taupe font-label text-xs uppercase tracking-widest mr-2">Filter by</span>
      <button className="px-6 py-2 rounded-full border border-olive bg-olive text-white font-label text-sm transition-all">All Moments</button>
      <button className="px-6 py-2 rounded-full border border-taupe text-taupe hover:border-olive hover:text-olive font-label text-sm transition-all">Interior Atmosphere</button>
      <button className="px-6 py-2 rounded-full border border-taupe text-taupe hover:border-olive hover:text-olive font-label text-sm transition-all">Food &amp; Craft</button>
      <button className="px-6 py-2 rounded-full border border-taupe text-taupe hover:border-olive hover:text-olive font-label text-sm transition-all">The Table Experience</button>
      </div>
      </section>
    </>
  );
}
