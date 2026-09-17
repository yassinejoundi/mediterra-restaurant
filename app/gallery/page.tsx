import type { Metadata } from "next";

import { FinalCTASection } from "@/components/gallery/FinalCTASection";
import { FoodCraftSection } from "@/components/gallery/FoodCraftSection";
import { HeroSection } from "@/components/gallery/HeroSection";
import { InteriorAtmosphereSection } from "@/components/gallery/InteriorAtmosphereSection";
import { TheTableExperienceSection } from "@/components/gallery/TheTableExperienceSection";

export const metadata: Metadata = {
  title: "Gallery | Mediterra Marrakech",
  description:
    "Step inside Mediterra: candlelit rooms, handmade Italian food, and generous tables in the heart of Marrakech.",
};

export default function Page() {
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
