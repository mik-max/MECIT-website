import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Engineer Innocent.",
};

export default function ContactPage() {
  return <Contact />;
}
