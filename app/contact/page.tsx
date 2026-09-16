import type { Metadata } from "next";

import { PageContent } from "@/components/contact/PageContent";

export const metadata: Metadata = {
  title: "Contact & Location | Mediterra Marrakech",
  description:
    "Find Mediterra in the Marrakech Medina, view opening hours, get directions, or contact our host team by phone, WhatsApp, or email.",
};

export default function Page() {
  return <PageContent />;
}
