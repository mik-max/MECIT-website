import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { SITE } from "@/constants/site";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";


export const metadata: Metadata = {
  title: "Blog & Knowledge Base",
  description: `Articles, videos, and engineering insights from ${SITE.name}.`,
};

function resolveImageUrl(image: any): string {
  if (!image) return "/images/projects/smart-grid.png";
  if (typeof image === "string") return image;
  const sanityUrl = urlForImage(image)?.url();
  return sanityUrl || "/images/projects/smart-grid.png";
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-orange-600 uppercase flex items-center justify-center gap-2">
            <BookOpen className="size-4" /> Knowledge Base & Insights
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Engineering Articles &amp; Video Guides
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Practical knowledge, architectural deep-dives, and video walkthroughs across software, cloud, AI, and energy systems.
          </p>
        </div>

        {/* Featured Post Hero */}
        {featuredPost && (
          <div className="mt-14 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all hover:shadow-md lg:grid lg:grid-cols-12">
            <div className="relative aspect-video w-full overflow-hidden bg-muted lg:col-span-7 lg:aspect-auto lg:min-h-96">
              <Image
                src={resolveImageUrl(featuredPost.mainImage)}
                alt={featuredPost.title}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-600">
                    {featuredPost.category || "Featured"}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3.5" />
                    {featuredPost.readTime || "5 min read"}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3.5 text-orange-600" />
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug.current}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-500 group"
                >
                  Read Article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Remaining Posts */}
        {remainingPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              More Knowledge &amp; Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {remainingPosts.map((post) => (
                <article
                  key={post._id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xs transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <Image
                      src={resolveImageUrl(post.mainImage)}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-xs font-semibold text-orange-600">
                          {post.category || "Engineering"}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="size-3" />
                          {post.readTime || "5 min"}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-semibold tracking-tight line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3 text-orange-600" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="font-medium text-orange-600 hover:underline flex items-center gap-1"
                      >
                        Read post <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
