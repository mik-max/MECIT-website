export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
};

export type YouTubeEmbedValue = {
  _type: "youtubeEmbed";
  url: string;
  caption?: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author?: string;
  category?: string;
  mainImage?: SanityImage | string;
  publishedAt: string;
  readTime?: string;
  excerpt?: string;
  body?: any[];
};
