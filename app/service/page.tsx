import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Consulting services offered by Engineer Innocent.",
};

export default function ServicePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Services content coming soon.
      </p>
    </section>
  );
}
