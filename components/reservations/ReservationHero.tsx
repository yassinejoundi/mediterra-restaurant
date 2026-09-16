import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function ReservationHero() {
  return (
    <section aria-labelledby="reservation-title" className="relative isolate min-h-[680px] overflow-hidden bg-espresso pt-20 text-plaster sm:min-h-[720px] lg:min-h-[760px]">
      <Image
        src="/images/reservations/candlelit-table.png"
        alt="Candlelit table with handmade pasta, focaccia, and warm plaster surroundings"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[64%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/95 via-espresso/75 to-espresso/15 lg:to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/10" />

      <div className="mx-auto flex min-h-[600px] max-w-screen-2xl flex-col justify-center px-5 pb-24 pt-20 sm:min-h-[640px] sm:px-8 lg:min-h-[680px] lg:px-12">
        <div className="max-w-[760px]">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-linen">
            <span className="h-px w-9 bg-brass" aria-hidden="true" />
            Mediterra · Marrakech
          </p>
          <h1 id="reservation-title" className="max-w-[11ch] text-balance font-heading text-[clamp(3.5rem,8.3vw,8.5rem)] font-normal leading-[0.97] tracking-[-0.055em]">
            Make room for <span className="italic text-linen">the evening.</span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-plaster/90 sm:text-lg sm:leading-8">
            A candlelit table, pasta made by hand, and time to settle in. Share the details of your visit; our host team will confirm your table personally.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="#reservation-form" className="inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-plaster px-7 py-3 text-sm font-semibold text-wine transition-colors hover:bg-linen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster">
              Request a table <ArrowDownRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/menu" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-plaster/55 px-6 py-3 text-sm font-semibold text-plaster transition-colors hover:bg-plaster/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plaster">
              Explore the menu <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 border-t border-plaster/20 bg-espresso/25 backdrop-blur-sm">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 text-xs font-medium uppercase tracking-[0.16em] text-plaster/85 sm:px-8 lg:px-12">
          <span>Italian craft</span><span className="size-1 rounded-full bg-brass" aria-hidden="true" />
          <span>Marrakech warmth</span><span className="size-1 rounded-full bg-brass" aria-hidden="true" />
          <span>An evening to linger</span>
        </div>
      </div>
    </section>
  );
}
