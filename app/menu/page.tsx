import type { Metadata } from "next";

import { PageContent } from "@/components/menu/PageContent";

export const metadata: Metadata = {
  title: "Menu | Mediterra Marrakech",
  description:
    "Explore handmade pasta, wood-fired pizza, Italian classics, desserts, and drinks at Mediterra in Marrakech.",
};

export default function Page() {
  return <PageContent />;
}
