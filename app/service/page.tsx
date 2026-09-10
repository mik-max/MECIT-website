import type { Metadata } from "next";
import { ServicesDetail } from "@/components/sections/services-detail";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Integrated technology and engineering services from ${SITE.name} — software, cloud & security, AI, energy systems, IT operations, and consulting.`,
};

export default function ServicePage() {
  return <ServicesDetail />;
}
