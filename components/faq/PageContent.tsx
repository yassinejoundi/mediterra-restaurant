 
import { Main } from "./Main";
import { Script } from "./Script";

export function PageContent() {
  return (
    <div className="bg-primary text-primary-on font-body antialiased min-h-screen flex flex-col">
      <Main />
      <Script />
    </div>
  );
}
