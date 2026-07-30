import { sanityClient, isSanityConfigured } from "./client";
import type { BlogPost } from "@/types/blog";

export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  category,
  mainImage,
  publishedAt,
  readTime,
  excerpt
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author,
  category,
  mainImage,
  publishedAt,
  readTime,
  excerpt,
  body
}`;

const SAMPLE_POSTS: BlogPost[] = [
  {
    _id: "sample-1",
    title: "Building Resilient Cloud & IoT Architectures for Energy Grids",
    slug: { current: "resilient-cloud-iot-energy-grids" },
    author: "Engineer Innocent",
    category: "Energy & Smart Grids",
    publishedAt: "2026-07-28T10:00:00Z",
    readTime: "6 min read",
    excerpt:
      "A deep dive into real-time microgrid telemetry, zero-downtime cloud infrastructure, and predictive sensor automation.",
    mainImage: "/images/projects/smart-grid.png",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Modern power systems demand microsecond response times and bulletproof cloud backends. In this article, we break down how edge IoT telemetry paired with serverless cloud processing optimizes power distribution.",
          },
        ],
      },
      {
        _type: "youtubeEmbed",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        caption: "Technical overview of smart microgrid integration",
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Key Architectural Principles" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "1. Zero-Trust Cloud Infrastructure: Ensuring all grid telemetry data is encrypted end-to-end.\n2. Edge Computing: Running machine learning inference directly on substation controllers.",
          },
        ],
      },
    ],
  },
  {
    _id: "sample-2",
    title: "Scaling Industrial AI & Machine Learning in Production",
    slug: { current: "scaling-industrial-ai-machine-learning" },
    author: "Engineer Innocent",
    category: "AI & Machine Learning",
    publishedAt: "2026-07-15T14:30:00Z",
    readTime: "8 min read",
    excerpt:
      "How to move predictive maintenance models out of Jupyter Notebooks into scalable, production-grade microservices.",
    mainImage: "/images/projects/ai-analytics.png",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Deploying AI models in heavy industrial settings requires strict uptime, graceful failovers, and seamless integration with existing SCADA systems.",
          },
        ],
      },
    ],
  },
  {
    _id: "sample-3",
    title: "Modernizing Legacy IT & Network Telecom Infrastructure",
    slug: { current: "modernizing-legacy-it-telecom" },
    author: "Engineer Innocent",
    category: "IT Infrastructure",
    publishedAt: "2026-07-02T09:15:00Z",
    readTime: "5 min read",
    excerpt:
      "Practical strategies for upgrading enterprise network topologies without interrupting core operations.",
    mainImage: "/images/projects/factory-automation.png",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Telecom and enterprise network upgrades require systematic staging, high-availability router configurations, and continuous security auditing.",
          },
        ],
      },
    ],
  },
];

export async function getAllPosts(): Promise<BlogPost[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const posts = await sanityClient.fetch<BlogPost[]>(postsQuery);
      if (posts && posts.length > 0) return posts;
    } catch (err) {
      console.error("Error fetching Sanity posts, using fallback:", err);
    }
  }
  return SAMPLE_POSTS;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (isSanityConfigured && sanityClient) {
    try {
      const post = await sanityClient.fetch<BlogPost>(postBySlugQuery, { slug });
      if (post) return post;
    } catch (err) {
      console.error(`Error fetching post '${slug}' from Sanity:`, err);
    }
  }
  return SAMPLE_POSTS.find((p) => p.slug.current === slug) || null;
}
