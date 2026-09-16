import type { Metadata } from "next";

import { PageContent } from "@/components/gallery/PageContent";

export const metadata: Metadata = {
  title: "Gallery | Mediterra Marrakech",
  description:
    "Step inside Mediterra: candlelit rooms, handmade Italian food, and generous tables in the heart of Marrakech.",
};

export default function Page() {
  return <PageContent />;
}
