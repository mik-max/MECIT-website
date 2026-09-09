import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error(
    "NEXT_PUBLIC_SANITY_PROJECT_ID is not set. The Sanity CLI reads .env, not .env.local — make sure a .env file exists with this value before running `sanity dev`/`sanity deploy`."
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
