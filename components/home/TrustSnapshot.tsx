 
import Link from "next/link";
import { FontAwesomeMaterialIcon } from "../FontAwesomeMaterialIcon";
export function TrustSnapshot() {
  return (
    <>
      <section className="py-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center mb-16">
      <div className="flex flex-col items-center group">
      <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center mb-4 text-wine group-hover:scale-110 transition-transform duration-500">
      <FontAwesomeMaterialIcon name="restaurant" style={{ fontSize: "24px" }} />
      </div>
      <h3 className="font-headline text-lg text-espresso mb-2">Handmade Pasta</h3>
      <p className="font-body text-sm text-taupe">Rolled fresh daily</p>
      </div>
      <div className="flex flex-col items-center group">
      <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center mb-4 text-wine group-hover:scale-110 transition-transform duration-500">
      <FontAwesomeMaterialIcon name="local_fire_department" style={{ fontSize: "24px" }} />
      </div>
      <h3 className="font-headline text-lg text-espresso mb-2">Romantic Dining</h3>
      <p className="font-body text-sm text-taupe">Candlelit atmosphere</p>
      </div>
      <div className="flex flex-col items-center group">
      <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center mb-4 text-wine group-hover:scale-110 transition-transform duration-500">
      <FontAwesomeMaterialIcon name="wb_sunny" style={{ fontSize: "24px" }} />
      </div>
      <h3 className="font-headline text-lg text-espresso mb-2">Mediterranean Warmth</h3>
      <p className="font-body text-sm text-taupe">Coastal Italian ease</p>
      </div>
      <div className="flex flex-col items-center group">
      <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center mb-4 text-wine group-hover:scale-110 transition-transform duration-500">
      <FontAwesomeMaterialIcon name="chat" style={{ fontSize: "24px" }} />
      </div>
      <h3 className="font-headline text-lg text-espresso mb-2">WhatsApp RSVP</h3>
      <p className="font-body text-sm text-taupe">Personal confirmation</p>
      </div>
      </div>
      <div className="text-center">
      <Link className="inline-flex items-center gap-2 font-label text-wine hover:text-espresso transition-colors border-b border-wine/30 pb-1" href="/gallery">
                      View Gallery <FontAwesomeMaterialIcon name="arrow_forward" style={{ fontSize: "18px" }} />
      </Link>
      </div>
      </section>
    </>
  );
}
