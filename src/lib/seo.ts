import type { Metadata } from "next";
import { SITE, getSiteUrl } from "@/lib/site";

/** File in `public/anteprima.jpg` — unica immagine per anteprime link (OG + Twitter). */
const OG_IMAGE_PATH = "/anteprima.jpg" as const;

function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Un solo asset per Open Graph e Twitter Card.
 * Next.js emette i meta equivalenti a:
 * og:image, og:image:secure_url, og:image:type, og:image:width, og:image:height
 */
export function getOpenGraphImage() {
  const url = absoluteUrl(OG_IMAGE_PATH);
  return {
    url,
    secureUrl: url,
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: `${SITE.name} — Katahero.com`,
  };
}

/**
 * Metadata per pagine interne: canonical, Open Graph e Twitter allineati al `metadataBase` del layout root.
 * Il `title` usa il template `%s | ${SITE.name}` definito nel layout.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: `/${string}`;
  ogType?: "website" | "article";
  robots?: Metadata["robots"];
}): Metadata {
  const fullTitle = `${opts.title} | ${SITE.name}`;
  const pageUrl = absoluteUrl(opts.path);
  const og = getOpenGraphImage();

  return {
    title: opts.title,
    description: opts.description,
    robots: opts.robots ?? { index: true, follow: true },
    alternates: {
      canonical: opts.path,
    },
    openGraph: {
      type: opts.ogType ?? "website",
      locale: SITE.locale,
      url: pageUrl,
      siteName: SITE.name,
      title: fullTitle,
      description: opts.description,
      images: [og],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: [og],
    },
  };
}

/** Verifica proprietà sito (Google Search Console): imposta `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. */
export function siteVerificationMetadata(): Pick<Metadata, "verification"> | undefined {
  const token = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  if (!token) return undefined;
  return { verification: { google: token } };
}
