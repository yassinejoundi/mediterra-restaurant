 
import { Main } from "./Main";
import { Script } from "./Script";

export function PageContent() {
  return (
    <div className="bg-ivory text-espresso font-body antialiased selection:bg-wine/10 selection:text-wine">
      <Main />
      <Script />
    </div>
  );
}
