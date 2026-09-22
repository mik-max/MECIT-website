import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { PortableTextRenderer } from "@/components/blog/portable-text";
import { AnchorLink } from "@/components/ui/anchor-link";
import { SITE } from "@/constants/site";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ slug: string }>;
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
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.excerpt || SITE.description,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const coverImageUrl = resolveImageUrl(post.mainImage);

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-orange-600 transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Back to all articles
        </Link>

        {/* Header */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-orange-600/10 px-3.5 py-1 text-xs font-semibold text-orange-600">
              {post.category || "Engineering"}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              {post.readTime || "5 min read"}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border/60 py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <User className="size-4 text-orange-600" />
                <strong className="font-semibold text-foreground">
                  {post.author || "Engineer Innocent"}
                </strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4 text-orange-600" />
                {formatDate(post.publishedAt)}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Cover Image */}
        {coverImageUrl && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-3xl border border-border/60 bg-muted shadow-md">
            <Image
              src={coverImageUrl}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}

        {/* Post Content */}
        <div className="mt-10 max-w-none">
          <PortableTextRenderer value={post.body} />
        </div>

        {/* CTA Footer Banner */}
        <div className="mt-16 rounded-3xl bg-linear-to-r from-slate-900 via-navy-900 to-slate-900 p-8 sm:p-12 text-white shadow-xl text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Have an engineering challenge?</h3>
            <p className="mt-2 text-sm text-white/80 max-w-md">
              Let&apos;s discuss your software, cloud, AI, or energy systems roadmap.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-6 sm:mt-0 shrink-0 bg-orange-600 text-white hover:bg-orange-500 font-semibold px-6 h-12"
          >
            <AnchorLink href="/contact">Get in Touch</AnchorLink>
          </Button>
        </div>
      </div>
    </article>
  );
}
