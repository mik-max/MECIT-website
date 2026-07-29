import type { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About",
  description: "About Engineer Innocent — background, experience, and approach.",
};

export default function AboutPage() {
  return <About />;
}
