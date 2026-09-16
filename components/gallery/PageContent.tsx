import { FinalCTASection } from "./FinalCTASection";
import { FoodCraftSection } from "./FoodCraftSection";
import { HeroSection } from "./HeroSection";
import { InteriorAtmosphereSection } from "./InteriorAtmosphereSection";
import { TheTableExperienceSection } from "./TheTableExperienceSection";

export function PageContent() {
  return (
    <div className="bg-plaster font-body text-espresso antialiased selection:bg-wine selection:text-plaster">
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <InteriorAtmosphereSection />
        <FoodCraftSection />
        <TheTableExperienceSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
