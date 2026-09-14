import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Sanity Studio is an authoring tool, not public content.
      disallow: "/studio",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
