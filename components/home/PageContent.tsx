 
import type { CSSProperties } from "react";

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
    <div className="font-body antialiased selection:bg-wine selection:text-white min-h-screen flex flex-col relative overflow-x-hidden pt-24" style={{ "--font-headline": "var(--font-heading)", "--font-display": "var(--font-heading)" } as CSSProperties}>
      <HeroSection />
      <TrustSnapshot />
      <MenuPreview />
      <AtmosphereGrid />
      <StorySectionAsymmetric />
      <GuestWords />
      <LocationContact />
      <FinalCTA />
    </div>
  );
}
