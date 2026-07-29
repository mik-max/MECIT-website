import type { Metadata } from "next";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Consulting services offered by Engineer Innocent.",
};

export default function ServicePage() {
  return <Services />;
}
