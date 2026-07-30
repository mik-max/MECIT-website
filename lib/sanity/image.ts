import createImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "./client";

const builder =
  projectId && projectId !== "your_sanity_project_id"
    ? createImageUrlBuilder({ projectId, dataset })
    : null;

export function urlForImage(source: any) {
  if (!builder || !source) return null;
  try {
    return builder.image(source);
  } catch {
    return null;
  }
}
