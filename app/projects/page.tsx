import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Projects & Impact",
  description: `Selected projects and impact from ${SITE.name}.`,
};

export default function ProjectsPage() {
  return <Projects headingLevel="h1" />;
}
