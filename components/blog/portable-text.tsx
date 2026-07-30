"use client";

import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity/image";

function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function getVimeoId(url: string) {
  const match = url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
  return match ? match[1] : null;
}

function VideoEmbed({ value }: { value: { url?: string; caption?: string } }) {
  if (!value?.url) return null;

  const ytId = getYouTubeId(value.url);
  const vimeoId = getVimeoId(value.url);

  let iframeSrc = "";
  if (ytId) {
    iframeSrc = `https://www.youtube.com/embed/${ytId}`;
  } else if (vimeoId) {
    iframeSrc = `https://player.vimeo.com/video/${vimeoId}`;
  }

  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-border/60 bg-black/5 shadow-md">
      {iframeSrc ? (
        <div className="relative aspect-video w-full">
          <iframe
            src={iframeSrc}
            title={value.caption || "Embedded video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        </div>
      ) : (
        <div className="p-4 text-center">
          <a
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline font-semibold"
          >
            Watch Video: {value.url}
          </a>
        </div>
      )}
      {value.caption && (
        <figcaption className="p-3 text-center text-xs text-muted-foreground bg-muted/30">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}

const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      const imageUrl = typeof value === "string" ? value : urlForImage(value)?.url();
      if (!imageUrl) return null;

      return (
        <figure className="my-8 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="p-3 text-center text-xs text-muted-foreground bg-muted/30">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    youtubeEmbed: ({ value }: { value: any }) => <VideoEmbed value={value} />,
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="mt-10 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-6 mb-3 text-xl font-semibold tracking-tight sm:text-2xl text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mt-4 mb-2 text-lg font-semibold text-foreground">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-orange-600 pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 leading-relaxed text-muted-foreground/90 font-normal">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ value, children }: { value?: any; children?: React.ReactNode }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="font-semibold text-orange-600 underline decoration-orange-500/40 underline-offset-4 hover:decoration-orange-600"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
  },
};

export function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  if (typeof value === "string") {
    return <p className="mb-5 leading-relaxed text-muted-foreground">{value}</p>;
  }
  return <PortableText value={value} components={portableComponents} />;
}
