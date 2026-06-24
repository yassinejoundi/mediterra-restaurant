"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Story", href: "/story" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-terracotta/15 bg-plaster/90 shadow-[0_10px_30px_rgba(42,33,29,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-heading text-2xl italic tracking-tight text-espresso transition-colors hover:text-wine"
          onClick={() => setIsOpen(false)}
        >
          Mediterra
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 font-headline text-sm font-semibold uppercase tracking-[0.18em] text-taupe transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-wine after:transition-transform hover:text-wine hover:after:scale-x-100",
                  isActive && "text-wine after:scale-x-100"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            href="/reservations"
            className="rounded-full bg-wine px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-plaster shadow-lg shadow-wine/15 transition-all hover:bg-espresso active:scale-95"
          >
            Reserve a Table
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-terracotta/25 bg-linen text-espresso transition-colors hover:border-wine/40 hover:text-wine md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "grid overflow-hidden border-t border-terracotta/15 bg-plaster/95 transition-[grid-template-rows] duration-300 md:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <nav aria-label="Mobile navigation" className="min-h-0">
          <div className="flex flex-col gap-1 px-5 py-5 sm:px-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "border-l-2 border-transparent px-4 py-3 font-headline text-sm font-semibold uppercase tracking-[0.18em] text-taupe transition-colors hover:border-terracotta/40 hover:bg-linen hover:text-wine",
                    isActive && "border-wine bg-linen text-wine"
                  )}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/reservations"
              className="mt-3 rounded-full bg-wine px-5 py-4 text-center font-label text-xs font-bold uppercase tracking-[0.2em] text-plaster shadow-lg shadow-wine/15 transition-colors hover:bg-espresso"
              onClick={() => setIsOpen(false)}
            >
              Reserve a Table
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
