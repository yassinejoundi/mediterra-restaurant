 
import { Main } from "./Main";
import { Script } from "./Script";

export function PageContent() {
  return (
    <div className="bg-primary text-charcoal font-body antialiased selection:bg-wine selection:text-primary">
      <Main />
      <Script />
    </div>
  );
}
