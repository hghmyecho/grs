import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://grs-nu.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/theme-editor",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
