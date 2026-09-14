import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name}.`,
};

export default function ContactPage() {
  return <Contact headingLevel="h1" />;
}
