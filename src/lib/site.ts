export const SITE = {
  name: "KataHero",
  description:
    "Studio di personal branding per atleti e personal trainer: identità visiva, contenuti social, media kit e strategia digitale su misura.",
  tagline: "Sito e brand che ti fanno riconoscere — e scegliere — prima degli altri.",
  phoneDisplay: "+39 327 459 7773",
  phoneTel: "+393274597773",
  whatsappUrl: "https://wa.me/393274597773",
  email: "salvo.bonaita9808@gmail.com",
  locale: "it_IT",
  social: {
    instagram: "https://www.instagram.com/katahero.it/",
    tiktok: "https://www.tiktok.com/@katahero.it",
    linkedin: "https://www.linkedin.com/company/katahero-it/",
  },
} as const;

export function getSiteUrl(): string {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return "https://katahero.it";
}

/** Link WhatsApp con testo che indica il pacchetto scelto (sito + abbonamento). */
export function whatsappPackageUrl(
  planName: string,
  setupEuro: number,
  monthlyEuro: number,
): string {
  const text = `Ciao! Vorrei informazioni sul pacchetto ${planName} di ${SITE.name} (sito €${setupEuro} + abbonamento €${monthlyEuro}/mese).`;
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(text)}`;
}
