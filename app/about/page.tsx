import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE.name} — background, experience, and approach.`,
};

export default function AboutPage() {
  return <About headingLevel="h1" />;
}
