import { AtmosphereGrid } from "@/components/home/AtmosphereGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { GuestWords } from "@/components/home/GuestWords";
import { HeroSection } from "@/components/home/HeroSection";
import { LocationContact } from "@/components/home/LocationContact";
import { MenuPreview } from "@/components/home/MenuPreview";
import { StorySectionAsymmetric } from "@/components/home/StorySectionAsymmetric";
import { TrustSnapshot } from "@/components/home/TrustSnapshot";

export default function Page() {
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
