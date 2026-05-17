"use client";

import { useEffect, useState } from "react";

const partners = [
  {
    name: "DaBoss Tournament",
    href: "https://www.dabosstournament.com",
    logoSrc: "https://www.dabosstournament.com/logo.svg",
  },
] as const;

function PartnerLink({
  href,
  name,
  logoSrc,
}: {
  href: string;
  name: string;
  logoSrc: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex shrink-0 items-center gap-4 px-10 py-3 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- logo SVG esterno */}
      <img src={logoSrc} alt="" className="h-10 w-auto max-w-[140px] object-contain sm:h-11" decoding="async" />
      <span className="whitespace-nowrap font-display text-sm font-semibold tracking-tight text-zinc-400 transition group-hover:text-zinc-200 sm:text-base">
        {name}
      </span>
    </a>
  );
}

export function PartnersMarquee() {
  const [preferReducedMotion, setPreferReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPreferReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /** Tre copie nella striscia = loop fluido quando la sezione ripete due strisce identiche (= 50%). */
  const strip = [...partners, ...partners, ...partners];

  if (preferReducedMotion) {
    return (
      <section
        className="relative border-y border-white/10 bg-linear-to-r from-black/95 via-zinc-950/95 to-black/95 backdrop-blur-sm"
        aria-labelledby="partner-marquee-heading"
      >
        <h2 id="partner-marquee-heading" className="sr-only">
          Partner di KataHero
        </h2>
        <div className="flex flex-wrap justify-center gap-2 py-4 sm:py-5">
          {partners.map((p) => (
            <PartnerLink key={p.name} href={p.href} name={p.name} logoSrc={p.logoSrc} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative border-y border-white/10 bg-linear-to-r from-black/95 via-zinc-950/95 to-black/95 backdrop-blur-sm"
      aria-labelledby="partner-marquee-heading"
    >
      <h2 id="partner-marquee-heading" className="sr-only">
        Partner di KataHero
      </h2>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-zinc-950 to-transparent sm:w-24" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-zinc-950 to-transparent sm:w-24" aria-hidden />

      <div className="kh-partner-marquee overflow-hidden py-3 sm:py-4">
        <div className="kh-partner-marquee-track flex w-max items-center">
          <div className="flex shrink-0">
            {strip.map((p, i) => (
              <PartnerLink key={`a-${p.name}-${i}`} href={p.href} name={p.name} logoSrc={p.logoSrc} />
            ))}
          </div>
          <div className="flex shrink-0" aria-hidden>
            {strip.map((p, i) => (
              <PartnerLink key={`b-${p.name}-${i}`} href={p.href} name={p.name} logoSrc={p.logoSrc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
