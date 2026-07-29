import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Engineer Innocent.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Contact form coming soon.
      </p>
    </section>
  );
}
