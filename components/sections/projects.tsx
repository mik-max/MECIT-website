"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";
import { cn } from "@/lib/utils";

const FILTERS = ["All", ...PROJECT_CATEGORIES] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="scroll-mt-20 bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
            Case Studies
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects &amp; Impact
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real deployments across industry, technology, AI, and energy.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-colors",
                active === filter
                  ? "border-orange-600 bg-orange-600 text-white"
                  : "border-border text-muted-foreground hover:border-orange-500 hover:text-orange-600"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ title, description, category, image }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                <span className="mt-4 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                  {category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
