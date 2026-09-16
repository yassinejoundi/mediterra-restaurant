import { StoryBeginning } from "./StoryBeginning";
import { StoryDiscipline } from "./StoryDiscipline";
import { StoryFinalCta } from "./StoryFinalCta";
import { StoryGenerosity } from "./StoryGenerosity";
import { StoryHero } from "./StoryHero";
import { StorySubstance } from "./StorySubstance";

export function PageContent() {
  return (
    <div className="bg-plaster font-body text-espresso antialiased">
      <main>
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
