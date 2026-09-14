import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { getAllPosts } from "@/lib/sanity/queries";

// Static marketing routes. Nav/footer link to homepage anchors instead of
// these dedicated pages (by design — see components/layout/navigation.tsx),
// so the sitemap is what tells search engines these routes exist.
const STATIC_ROUTES = ["", "/about", "/service", "/projects", "/blog", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
  }));

  const posts = await getAllPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
  }));

  return [...staticEntries, ...postEntries];
}
