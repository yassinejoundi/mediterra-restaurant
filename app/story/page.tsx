import type { Metadata } from "next";

import { StoryBeginning } from "@/components/story/StoryBeginning";
import { StoryDiscipline } from "@/components/story/StoryDiscipline";
import { StoryFinalCta } from "@/components/story/StoryFinalCta";
import { StoryGenerosity } from "@/components/story/StoryGenerosity";
import { StoryHero } from "@/components/story/StoryHero";
import { StorySubstance } from "@/components/story/StorySubstance";

export const metadata: Metadata = {
  title: "Our Story | Mediterra, Italian Restaurant in Marrakech",
  description:
    "Born from friendship, Italian discipline, and Marrakech generosity. Handmade pasta, warm hospitality, and a room made for slower evenings.",
};

export default function Page() {
  return (
    <div className="bg-plaster font-body text-espresso antialiased">
      <main id="main-content" tabIndex={-1}>
        <StoryHero />
        <StoryBeginning />
        <StoryDiscipline />
        <StoryGenerosity />
        <StorySubstance />
        <StoryFinalCta />
      </main>
    </div>
  );
}
