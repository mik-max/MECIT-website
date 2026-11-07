const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const SITE = {
  name: "Technogenix",
  legalName: "Technogenix LTD",
  title: "Technogenix — Technology & Engineering Solutions",
  description:
    "Integrated technology and engineering solutions across software, AI, telecommunications, IT infrastructure, cybersecurity, and energy systems.",
  email: "info@technogenixng.com.ng",
  phone: "09022379886",
  whatsapp: "+2349022379886",
  location: "44 Ogundele Avenue, Ogba, Lagos.",
  url: SITE_URL,
};
