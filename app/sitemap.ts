import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://grs-nu.vercel.app";
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/our-story", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/our-team", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/our-governance", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/funding-stream", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/make-a-referral", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact-us", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/feedback-and-complaint", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
