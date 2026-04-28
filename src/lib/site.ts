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
    instagram: "https://www.instagram.com/katahero?igsh=b2tpbmM4bGQyazcw",
    tiktok: "https://www.tiktok.com/@katahero.it",
    linkedin: "https://www.linkedin.com/company/katahero-it/",
  },
} as const;

/**
 * URL canonico del sito (metadata, OG, sitemap, JSON-LD).
 * Su Vercel usa l’host del deploy se `NEXT_PUBLIC_SITE_URL` non è impostato,
 * così `og:image` e le anteprime link puntano al dominio giusto.
 */
export function getSiteUrl(): string {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (typeof process !== "undefined" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (typeof process !== "undefined" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "https://www.katahero.com";
}

/**
 * Link WhatsApp precompilato: nome pacchetto, mensilità e descrizione breve (es. tagline dalla card).
 */
export function whatsappPackageUrl(
  planName: string,
  monthlyEuro: number,
  shortDescription: string,
): string {
  const monthly = new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(monthlyEuro);
  const text = `Ciao! Vorrei informazioni sul pacchetto ${planName} di ${SITE.name}: ${monthly}/mese. ${shortDescription}`;
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

/** Payment Link Stripe — piano Start (test). Sovrascrivi con env in produzione (link live). */
const START_STRIPE_CHECKOUT_MONTHLY_DEFAULT =
  "https://buy.stripe.com/test_aFa8wR0Gf1NE9Ty4GB8IU00";
const START_STRIPE_CHECKOUT_ANNUAL_DEFAULT =
  "https://buy.stripe.com/test_bJe6oJ4WvgIyfdS4GB8IU01";

/**
 * Link Stripe Checkout per il piano Start.
 * `NEXT_PUBLIC_STRIPE_CHECKOUT_START_MONTHLY` / `_ANNUAL` se impostati vincono sui default.
 */
export function getStartStripeCheckoutUrls(): { monthly: string; annual: string } {
  const monthly =
    process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_START_MONTHLY?.trim() || START_STRIPE_CHECKOUT_MONTHLY_DEFAULT;
  const annual =
    process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_START_ANNUAL?.trim() || START_STRIPE_CHECKOUT_ANNUAL_DEFAULT;
  return { monthly, annual };
}

/** Payment Link Stripe — piano Pro (test). Sovrascrivi con env in produzione. */
const PRO_STRIPE_CHECKOUT_MONTHLY_DEFAULT =
  "https://buy.stripe.com/test_8x228tfB93VMaXCgpj8IU02";
const PRO_STRIPE_CHECKOUT_ANNUAL_DEFAULT =
  "https://buy.stripe.com/test_3cI28t2On2RI5Dic938IU03";

/**
 * Stripe Checkout — piano Pro.
 * `NEXT_PUBLIC_STRIPE_CHECKOUT_PRO_MONTHLY` / `_ANNUAL` se impostati vincono sui default.
 */
export function getProStripeCheckoutUrls(): { monthly: string; annual: string } {
  const monthly =
    process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_PRO_MONTHLY?.trim() || PRO_STRIPE_CHECKOUT_MONTHLY_DEFAULT;
  const annual =
    process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_PRO_ANNUAL?.trim() || PRO_STRIPE_CHECKOUT_ANNUAL_DEFAULT;
  return { monthly, annual };
}

/** Payment Link Stripe — piano Elite (test). Sovrascrivi con env in produzione. */
const ELITE_STRIPE_CHECKOUT_MONTHLY_DEFAULT =
  "https://buy.stripe.com/test_dRm6oJcoXeAq7Lq8WR8IU04";
const ELITE_STRIPE_CHECKOUT_ANNUAL_DEFAULT =
  "https://buy.stripe.com/test_bJe00lfB9gIyc1Gb4Z8IU05";

/**
 * Stripe Checkout — piano Elite.
 * `NEXT_PUBLIC_STRIPE_CHECKOUT_ELITE_MONTHLY` / `_ANNUAL` se impostati vincono sui default.
 */
export function getEliteStripeCheckoutUrls(): { monthly: string; annual: string } {
  const monthly =
    process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_ELITE_MONTHLY?.trim() || ELITE_STRIPE_CHECKOUT_MONTHLY_DEFAULT;
  const annual =
    process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_ELITE_ANNUAL?.trim() || ELITE_STRIPE_CHECKOUT_ANNUAL_DEFAULT;
  return { monthly, annual };
}

/** Portale clienti Stripe: disdetta, aggiornamento pagamento, fatture, piano. Sovrascrivibile con env. */
const STRIPE_CUSTOMER_PORTAL_DEFAULT =
  "https://billing.stripe.com/p/login/aFacN55n7eGn0lf45e4ZG00";

export function getStripeCustomerPortalUrl(): string {
  return process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL?.trim() || STRIPE_CUSTOMER_PORTAL_DEFAULT;
}