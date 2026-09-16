import { PageContent } from "@/components/reservations/PageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations | Mediterra Marrakech",
  description: "Request a table at Mediterra in Marrakech for handmade Italian food, candlelit warmth, and an evening to linger.",
};

export default function Page() {
  return <PageContent />;
}
