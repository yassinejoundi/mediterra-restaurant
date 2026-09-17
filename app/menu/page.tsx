import type { Metadata } from "next";

import { Main } from "@/components/menu/Main";

export const metadata: Metadata = {
  title: "Menu | Mediterra Marrakech",
  description:
    "Explore handmade pasta, wood-fired pizza, Italian classics, desserts, and drinks at Mediterra in Marrakech.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-plaster font-body text-espresso selection:bg-linen selection:text-wine">
      <Main />
    </div>
  );
}
