import type { Metadata } from "next";
import { SITE, getSiteUrl } from "@/lib/site";

/**
 * Percorso pubblico dell’immagine OG (default: `public/og.png`).
 * Per anteprime più leggibili su Instagram (card spesso su sfondo scuro), puoi usare una variante
 * più luminosa e impostare `NEXT_PUBLIC_OG_IMAGE_PATH=/nome-file.png`.
 */
function ogImagePath(): string {
  const p = process.env.NEXT_PUBLIC_OG_IMAGE_PATH?.trim();
  if (!p) return "/og.png";
  return p.startsWith("/") ? p : `/${p}`;
}

function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Descriptor OG/Twitter con URL assoluti HTTPS (`url` + `secure_url`).
 * Meta/Instagram (stesso crawler di Facebook) richiedono spesso URL assoluti per mostrare l’immagine.
 */
export function getOpenGraphImage() {
  const url = absoluteUrl(ogImagePath());
  return {
    url,
    secureUrl: url,
    width: 1200,
    height: 630,
    alt: `${SITE.name} — personal branding per atleti e personal trainer`,
    type: "image/png",
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
