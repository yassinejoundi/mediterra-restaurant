import type { Metadata } from "next";
import { Main } from "@/components/faq/Main";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Mediterra Marrakech",
  description: "Answers about reservations, the menu and visiting Mediterra in Marrakech.",
};

export default function Page() {
  return <Main />;
}
