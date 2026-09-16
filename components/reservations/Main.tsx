import { ReservationHero } from "./ReservationHero";
import { ReservationForm } from "./ReservationForm";
import { ReservationVisit } from "./ReservationVisit";

export function Main() {
  return (
    <main id="main-content" tabIndex={-1}>
      <ReservationHero />
      <ReservationForm />
      <ReservationVisit />
    </main>
  );
}
