import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Engineer Innocent — background, experience, and approach.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        About content coming soon.
      </p>
    </section>
  );
}
