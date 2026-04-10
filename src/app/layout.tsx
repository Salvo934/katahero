import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/site/JsonLd";
import { getOpenGraphImage, siteVerificationMetadata } from "@/lib/seo";
import { SITE, getSiteUrl } from "@/lib/site";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();

const verification = siteVerificationMetadata();
const og = getOpenGraphImage();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...(verification ?? {}),
  title: {
    default: `${SITE.name} | Personal branding per atleti e personal trainer`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "personal branding",
    "atleti",
    "personal trainer",
    "brand identity",
    "social media",
    "fitness branding",
    "media kit",
    "Italia",
  ],
  authors: [{ name: SITE.name, url: siteUrl }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: { "it-IT": "/" },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: siteUrl,
    siteName: SITE.name,
    title: `${SITE.name} | Personal branding per atleti e PT`,
    description: SITE.description,
    images: [og],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Personal branding sportivo`,
    description: SITE.description,
    images: [og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${syne.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-black font-sans text-zinc-100">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
