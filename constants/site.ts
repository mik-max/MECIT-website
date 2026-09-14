// TODO: once the production domain is confirmed, set NEXT_PUBLIC_SITE_URL
// (or hardcode it here) so sitemap.xml / robots.txt / JSON-LD point at the
// real domain instead of the Vercel-assigned one.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const SITE = {
  name: "MECITAC",
  legalName: "MECITAC Nigeria Limited",
  title: "MECITAC — Technology & Engineering Solutions",
  description:
    "Integrated technology and engineering solutions across software, AI, telecommunications, IT infrastructure, cybersecurity, and energy systems.",
  email: "info@mecitacng.com",
  phone: "09022379899",
  location: "Lagos, Nigeria",
  url: SITE_URL,
};
