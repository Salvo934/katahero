import type { MetadataRoute } from "next";
import { DEMO_ATHLETES_BASKETBALL } from "@/lib/talent-board-data";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  const athleteEntries = DEMO_ATHLETES_BASKETBALL.map((a) => ({
    url: `${base}/atleti/${a.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  return [
    {
      url: base,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/talent-board`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...athleteEntries,
    {
      url: `${base}/termini-e-condizioni`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/minori`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/compila-scheda`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/pacchetti`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
