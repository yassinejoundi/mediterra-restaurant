import type { Metadata } from "next";

import { Main } from "@/components/reservations/Main";

export const metadata: Metadata = {
  title: "Reservations | Mediterra Marrakech",
  description: "Request a table at Mediterra in Marrakech for handmade Italian food, candlelit warmth, and an evening to linger.",
};

export default function Page() {
  return (
    <div className="bg-plaster text-espresso font-body antialiased">
      <Main />
    </div>
  );
}
