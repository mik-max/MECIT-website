import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Impact",
  description: "Selected projects and impact from Engineer Innocent.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">
        Projects &amp; Impact
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Project case studies coming soon.
      </p>
    </section>
  );
}
