"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const pages = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Story", href: "/story" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        dialog.close();
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (media.matches) setIsOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-espresso/10 bg-plaster/95 backdrop-blur-md">
      <a
        href="#main-content"
        className="absolute start-5 top-2 z-[60] -translate-y-20 rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-plaster focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine motion-reduce:transition-none"
      >
        Skip to content
      </a>

      <div className="mx-auto flex min-h-20 max-w-screen-2xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="shrink-0 font-heading text-[1.8rem] italic leading-none tracking-[-0.045em] text-espresso transition-colors hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
        >
          Mediterra
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-2 lg:flex">
          {pages.map((page) => {
            const active = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex min-h-11 items-center rounded-full px-3.5 font-label text-[0.8rem] font-semibold tracking-[0.04em] text-espresso/75 transition-colors hover:bg-linen hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine",
                  active && "bg-linen text-wine"
                )}
              >
                {page.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/reservations"
          className="hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-wine px-6 font-label text-sm font-semibold text-plaster transition-colors hover:bg-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine lg:inline-flex"
        >
          Reserve a Table <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-label="Open navigation menu"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-espresso/20 px-4 font-label text-sm font-semibold text-espresso transition-colors hover:border-wine hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine lg:hidden"
        >
          Menu <Menu className="size-4" aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Navigation menu"
        onClose={closeMenu}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-y-auto bg-plaster p-0 text-espresso backdrop:bg-espresso/30 lg:hidden"
      >
        <div className="flex min-h-dvh flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8">
          <div className="sticky top-0 z-10 flex min-h-20 shrink-0 items-center justify-between border-b border-espresso/15 bg-plaster">
            <Link href="/" onClick={closeMenu} className="font-heading text-[1.8rem] italic leading-none tracking-[-0.045em] text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">
              Mediterra
            </Link>
            <button
              type="button"
              autoFocus
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-colors hover:border-wine hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mx-auto w-full max-w-3xl flex-1 py-9 sm:py-12">
            <p className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.22em] text-wine">Explore Mediterra</p>
            <ul>
              {pages.map((page, index) => {
                const active = pathname === page.href;
                return (
                  <li key={page.href} className="border-b border-espresso/15">
                    <Link
                      href={page.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className="group flex min-h-16 items-center gap-4 py-3 text-espresso transition-colors hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine sm:min-h-20"
                    >
                      <span className="w-6 shrink-0 self-center font-label text-xs font-semibold text-terracotta">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-heading text-[clamp(2rem,8vw,3.4rem)] leading-none tracking-[-0.035em]">{page.label}</span>
                      <ArrowUpRight className={cn("ms-auto size-5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100", active && "opacity-100")} aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mx-auto w-full max-w-3xl border-t border-espresso/15 pt-6">
            <Link
              href="/reservations"
              onClick={closeMenu}
              className="flex min-h-14 w-full items-center justify-between rounded-full bg-wine px-6 font-label text-sm font-semibold text-plaster transition-colors hover:bg-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              Reserve a Table <ArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
            <p className="mt-5 text-center font-body text-xs text-espresso/65">Handmade Italian dining · Marrakech Medina</p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
