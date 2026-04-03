import { SITE, getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const url = getSiteUrl();
  const org = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: SITE.description,
    url,
    email: SITE.email,
    telephone: SITE.phoneTel,
    areaServed: { "@type": "Country", name: "Italy" },
    serviceType: ["Personal branding", "Brand identity", "Social media content"],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url,
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
