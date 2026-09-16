import type { Metadata } from "next";

import { PageContent } from "@/components/story/PageContent";

export const metadata: Metadata = {
  title: "Our Story | Mediterra — Italian Restaurant in Marrakech",
  description:
    "Born from friendship, Italian discipline, and Marrakech generosity. Handmade pasta, warm hospitality, and a room made for slower evenings.",
};

export default function Page() {
  return <PageContent />;
}
