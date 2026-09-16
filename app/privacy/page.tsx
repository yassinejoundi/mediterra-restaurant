import type { Metadata } from "next";
import { Main } from "@/components/privacy/Main";

export const metadata: Metadata = {
  title: "Privacy | Mediterra Marrakech",
  description: "How Mediterra handles the details you share when you enquire or request a table.",
};

export default function Page() {
  return <Main />;
}
