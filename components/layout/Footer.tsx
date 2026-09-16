import Link from "next/link";

const mainPages = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Story", href: "/story" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
];

const secondaryPages = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const launchYear = 2026;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightYear = currentYear === launchYear ? `${launchYear}` : `${launchYear} - ${currentYear}`;

  return (
    <footer className="mt-auto border-t border-terracotta/20 bg-linen text-espresso">
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-5 lg:px-12 lg:py-16">
        <div className="space-y-4 lg:col-span-1">
          <Link href="/" className="font-heading text-2xl italic tracking-tight text-wine transition-colors hover:text-espresso">
            Mediterra
          </Link>
          <p className="max-w-xs font-body text-sm leading-6 text-taupe">
            Premium Mediterranean dining in the heart of Marrakech.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-label text-xs font-bold uppercase tracking-[0.22em] text-espresso">Contact</h2>
          <div className="space-y-2 font-body text-sm leading-6 text-taupe">
            <p>
              12 Derb El Ferraine,
              <br />
              Medina, Marrakech 40000
            </p>
            <a href="tel:+212524384217" className="block transition-colors hover:text-wine">
              +212 524 38 42 17
            </a>
            <a href="mailto:ciao@mediterra.ma" className="block transition-colors hover:text-wine">
              ciao@mediterra.ma
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-label text-xs font-bold uppercase tracking-[0.22em] text-espresso">Opening Hours</h2>
          <div className="space-y-2 font-body text-sm leading-6 text-taupe">
            <p>Tuesday - Thursday: 18:00 - 23:30</p>
            <p>Friday - Sunday: 13:00 - 00:00</p>
            <p>Monday: Closed</p>
          </div>
        </div>

        <nav className="space-y-4" aria-label="Footer main pages">
          <h2 className="font-label text-xs font-bold uppercase tracking-[0.22em] text-espresso">Main Pages</h2>
          <ul className="space-y-2 font-body text-sm text-taupe">
            {mainPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="transition-colors hover:text-wine">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="space-y-4" aria-label="Footer secondary pages">
          <h2 className="font-label text-xs font-bold uppercase tracking-[0.22em] text-espresso">Secondary Pages</h2>
          <ul className="space-y-2 font-body text-sm text-taupe">
            {secondaryPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="transition-colors hover:text-wine">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-terracotta/15 px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 font-body text-xs leading-5 text-taupe sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {copyrightYear} Mediterra Marrakech. A Mediterranean Story.</p>
          <p>
            Built by{" "}
            <a
              href="https://yassinejoundi.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-wine underline-offset-4 transition-colors hover:text-espresso hover:underline"
            >
              Yassine Joundi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
