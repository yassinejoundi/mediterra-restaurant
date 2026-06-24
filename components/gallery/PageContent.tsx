 
import { HeroSection } from "./HeroSection";
import { FiltersSection } from "./FiltersSection";
import { InteriorAtmosphereSection } from "./InteriorAtmosphereSection";
import { FoodCraftSection } from "./FoodCraftSection";
import { TheTableExperienceSection } from "./TheTableExperienceSection";
import { NoteBlock } from "./NoteBlock";
import { FinalCTASection } from "./FinalCTASection";
import { Script } from "./Script";

export function PageContent() {
  return (
    <div className="bg-ivory text-espresso font-body antialiased selection:bg-wine selection:text-white">
      <HeroSection />
      <FiltersSection />
      <InteriorAtmosphereSection />
      <FoodCraftSection />
      <TheTableExperienceSection />
      <NoteBlock />
      <FinalCTASection />
      <Script />
    </div>
  );
}
