import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects & Impact",
  description: "Selected projects and impact from Engineer Innocent.",
};

export default function ProjectsPage() {
  return <Projects />;
}
