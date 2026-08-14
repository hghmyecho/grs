import type { MetadataRoute } from "next";
import { DISCIPLINES } from "@/lib/content/disciplines";
import { STREAMS } from "@/lib/content/streams";
import { LOCATIONS } from "@/lib/content/locations";
import { CAREERS } from "@/lib/content/careers";

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
    { path: "/join-us", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/book-online", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/calculator", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/covid-19-safety", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/disciplinary-summary", priority: 0.4, changeFrequency: "monthly" as const },
    ...DISCIPLINES.map((d) => ({
      path: `/${d.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...STREAMS.map((s) => ({
      path: `/${s.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...LOCATIONS.map((l) => ({
      path: `/${l.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...CAREERS.map((c) => ({
      path: `/${c.slug}`,
      priority: 0.4,
      changeFrequency: "monthly" as const,
    })),
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
