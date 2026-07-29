import type { Metadata } from "next";
import { Services } from "@/components/sections/services";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Consulting services offered by ${SITE.name}.`,
};

export default function ServicePage() {
  return <Services />;
}
