import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

// Next.js only inlines NEXT_PUBLIC_ vars into the client bundle; the
// Sanity CLI's own bundler (used for `sanity dev`/`sanity deploy`) only
// inlines SANITY_STUDIO_ vars. Check both so this config works in either
// build context.
const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

if (!projectId) {
  throw new Error(
    "Sanity projectId is not set. Define NEXT_PUBLIC_SANITY_PROJECT_ID (for Next.js) and SANITY_STUDIO_PROJECT_ID (for the Sanity CLI) in .env — the CLI reads .env, not .env.local, and only inlines SANITY_STUDIO_-prefixed vars."
  );
}

export default defineConfig({
  name: "default",
  title: "MECIT Knowledge Base",

  projectId,
  dataset,

  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
