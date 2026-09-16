import { ReservationHero } from "./ReservationHero";
import { ReservationForm } from "./ReservationForm";

export function Main() {
  return (
    <main id="main-content" tabIndex={-1}>
      <ReservationHero />
      <ReservationForm />
    </main>
  );
}
