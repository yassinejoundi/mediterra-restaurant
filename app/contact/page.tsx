import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactFinalCta } from "@/components/contact/ContactFinalCta";
import { ContactHero } from "@/components/contact/ContactHero";
import { VisitSection } from "@/components/contact/VisitSection";

export const metadata: Metadata = {
  title: "Contact & Location | Mediterra Marrakech",
  description:
    "Find Mediterra in the Marrakech Medina, view opening hours, get directions, or contact our host team by phone, WhatsApp, or email.",
};

export default function Page() {
  return (
    <div className="bg-plaster font-body text-espresso antialiased selection:bg-wine selection:text-plaster">
      <main id="main-content" tabIndex={-1}>
        <ContactHero />
        <ContactDetails />
        <VisitSection />
        <ContactFinalCta />
      </main>
    </div>
  );
}
