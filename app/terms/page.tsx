import type { Metadata } from "next";
import { Main } from "@/components/terms/Main";

export const metadata: Metadata = {
  title: "Terms | Mediterra Marrakech",
  description: "Plain-language information about Mediterra's website and reservation requests.",
};

export default function Page() {
  return <Main />;
}
