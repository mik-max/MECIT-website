import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights from Engineer Innocent.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Blog posts coming soon.
      </p>
    </section>
  );
}
