import { getOpenGraphImage } from "@/lib/seo";
import { SITE, getSiteUrl } from "@/lib/site";

/**
 * JSON-LD con @graph: Organization, WebSite e ProfessionalService collegati tra loro
 * (rich snippets / Knowledge Graph).
 */
export function JsonLd() {
  const url = getSiteUrl().replace(/\/$/, "");
  const ogImageUrl = getOpenGraphImage().url;
  const orgId = `${url}/#organization`;
  const websiteId = `${url}/#website`;
  const serviceId = `${url}/#professional-service`;

  const sameAs = [
    SITE.social.instagram,
    SITE.social.tiktok,
    SITE.social.linkedin,
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.name,
        url,
        logo: `${url}/icon.png`,
        image: ogImageUrl,
        email: SITE.email,
        telephone: SITE.phoneTel,
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "it-IT",
        publisher: { "@id": orgId },
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: SITE.name,
        description: SITE.description,
        url,
        provider: { "@id": orgId },
        email: SITE.email,
        telephone: SITE.phoneTel,
        areaServed: { "@type": "Country", name: "Italy" },
        serviceType: ["Personal branding", "Brand identity", "Social media content"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
