 
import { HeroSection } from "./HeroSection";
import { TrustSnapshot } from "./TrustSnapshot";
import { MenuPreview } from "./MenuPreview";
import { AtmosphereGrid } from "./AtmosphereGrid";
import { StorySectionAsymmetric } from "./StorySectionAsymmetric";
import { GuestWords } from "./GuestWords";
import { LocationContact } from "./LocationContact";
import { FinalCTA } from "./FinalCTA";

export function PageContent() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-clip pt-20 selection:bg-wine selection:text-plaster">
      <HeroSection />
      <TrustSnapshot />
      <MenuPreview />
      <AtmosphereGrid />
      <StorySectionAsymmetric />
      <GuestWords />
      <LocationContact />
      <FinalCTA />
    </main>
  );
}
