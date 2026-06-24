 
import { Main } from "./Main";
import { Script } from "./Script";

export function PageContent() {
  return (
    <div className="bg-primary text-text-primary font-body antialiased selection:bg-primary-container selection:text-primary-action min-h-screen flex flex-col">
      <Main />
      <Script />
    </div>
  );
}
