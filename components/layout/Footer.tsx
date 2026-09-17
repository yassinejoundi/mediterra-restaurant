import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const pages = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/story" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=12+Derb+El+Ferraine+Medina+Marrakech";
const linkClass = "inline-flex min-h-11 items-center text-sm text-plaster/80 transition-colors hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-linen";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-espresso text-plaster">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-plaster/20 py-16 sm:py-20 lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-24">
          <div className="lg:col-span-8">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-linen/75">A slower evening in Marrakech</p>
            <h2 className="mt-5 max-w-[14ch] text-balance font-heading text-[clamp(2.8rem,5.6vw,5.7rem)] leading-[1.02] tracking-[-0.04em]">
              We&apos;ll save you <span className="italic text-linen">a place at the table.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-sm text-pretty font-body text-base leading-7 text-plaster/75">
              Handmade pasta, a warm welcome, and time to enjoy both. Your evening begins here.
            </p>
            <Link href="/reservations" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-linen px-7 py-3 font-label text-sm font-semibold text-espresso transition-colors hover:bg-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-linen">
              Reserve a Table <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-12 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block font-heading text-4xl italic tracking-[-0.04em] text-plaster transition-colors hover:text-linen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-linen">Mediterra</Link>
            <p className="mt-5 max-w-xs text-pretty font-body text-sm leading-7 text-plaster/70">
              Italian discipline, Marrakech generosity. A romantic Mediterranean table made for evenings that linger.
            </p>
          </div>

          <nav aria-label="Explore" className="lg:col-span-2">
            <h3 className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.2em] text-linen/70">Explore</h3>
            <ul className="space-y-1">
              {pages.map((page) => (
                <li key={page.href}><Link href={page.href} className={linkClass}>{page.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.2em] text-linen/70">Talk to our hosts</h3>
            <div className="flex flex-col items-start gap-1">
              <a href="tel:+212524384217" className={linkClass}>+212 524 38 42 17</a>
              <a href="mailto:ciao@mediterra.ma" className={linkClass}>ciao@mediterra.ma</a>
              <a href="https://wa.me/212661842739" target="_blank" rel="noreferrer" className={linkClass}>
                WhatsApp our team <ArrowUpRight className="ms-2 size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.2em] text-linen/70">Find us</h3>
            <address className="text-sm not-italic leading-7 text-plaster/80">
              12 Derb El Ferraine<br />Medina, Marrakech 40000
            </address>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className={linkClass}>
              <MapPin className="me-2 size-4" aria-hidden="true" /> Open directions
            </a>
            <div className="mt-6 space-y-1 text-sm leading-6 text-plaster/70">
              <p>Tue–Thu · 18:00–23:30</p>
              <p>Fri–Sun · 13:00–00:00</p>
              <p>Monday · Closed</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-plaster/20 py-6 text-xs leading-5 text-plaster/70 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>&copy; {year} Mediterra Marrakech</p>
          <nav aria-label="Legal and help" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/faq" className="hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-linen">FAQ</Link>
            <Link href="/privacy" className="hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-linen">Privacy</Link>
            <Link href="/terms" className="hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-linen">Terms</Link>
          </nav>
          <p>Built by <a href="https://yassinejoundi.com" target="_blank" rel="noreferrer" className="text-linen underline decoration-linen/35 underline-offset-4 transition-colors after:hidden hover:text-plaster focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-linen">Yassine Joundi</a></p>
        </div>
      </div>
    </footer>
  );
}
