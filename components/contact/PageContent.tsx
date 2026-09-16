import { ContactDetails } from "./ContactDetails";
import { ContactFinalCta } from "./ContactFinalCta";
import { ContactHero } from "./ContactHero";
import { VisitSection } from "./VisitSection";

export function PageContent() {
  return (
    <div className="bg-plaster font-body text-espresso antialiased selection:bg-wine selection:text-plaster">
      <main>
        <ContactHero />
        <ContactDetails />
        <VisitSection />
        <ContactFinalCta />
      </main>
    </div>
  );
}
