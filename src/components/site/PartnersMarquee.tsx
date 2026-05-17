"use client";

import { useEffect, useState } from "react";

const partners = [
  {
    name: "DaBoss Tournament",
    href: "https://www.instagram.com/dabosstournament?igsh=MXZwb2MwOTdqbW1neA==",
    logoSrc: "https://www.dabosstournament.com/logo.svg",
    ariaLabel: "DaBoss Tournament su Instagram",
  },
] as const;

function PartnerMark({
  href,
  name,
  logoSrc,
  ariaLabel,
}: {
  href: string;
  name: string;
  logoSrc: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex shrink-0 items-center px-10 py-4 transition-opacity focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:px-14 lg:px-16 xl:px-20"
      aria-label={ariaLabel ?? name}
    >
      <span className="sr-only">{name}</span>
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG partner esterno */}
      <img
        src={logoSrc}
        alt=""
        decoding="async"
        className="h-8 w-auto max-w-[148px] object-contain opacity-55 saturate-0 transition-all duration-300 ease-out hover:opacity-95 hover:saturate-100 sm:h-9 sm:max-w-[168px]"
      />
    </a>
  );
}

const stripTriple = [...partners, ...partners, ...partners];

export function PartnersMarquee() {
  const [preferReducedMotion, setPreferReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPreferReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const marqueeLanes = preferReducedMotion ? (
    <div className="flex flex-wrap justify-center gap-2 px-6 py-10 sm:py-11">
      {partners.map((p) => (
        <PartnerMark
          key={p.name}
          href={p.href}
          name={p.name}
          logoSrc={p.logoSrc}
          ariaLabel={"ariaLabel" in p ? p.ariaLabel : undefined}
        />
      ))}
    </div>
  ) : (
    <div className="kh-partner-marquee relative overflow-hidden py-8 sm:py-10">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-zinc-950 to-transparent sm:w-36"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-zinc-950 to-transparent sm:w-36"
        aria-hidden
      />

      <div className="kh-partner-marquee-track flex w-max items-center">
        <div className="flex shrink-0 items-center">
          {stripTriple.map((p, i) => (
            <PartnerMark
              key={`a-${p.name}-${i}`}
              href={p.href}
              name={p.name}
              logoSrc={p.logoSrc}
              ariaLabel={"ariaLabel" in p ? p.ariaLabel : undefined}
            />
          ))}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {stripTriple.map((p, i) => (
            <PartnerMark
              key={`b-${p.name}-${i}`}
              href={p.href}
              name={p.name}
              logoSrc={p.logoSrc}
              ariaLabel={"ariaLabel" in p ? p.ariaLabel : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-x-clip border-y border-white/6 bg-zinc-950" aria-labelledby="partner-marquee-heading">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="pt-9 pb-6 text-[11px] font-medium uppercase tracking-[0.38em] text-zinc-500 sm:tracking-[0.42em]">
          Partner ufficiali
        </p>

        <h2 id="partner-marquee-heading" className="sr-only">
          Partner ufficiali
        </h2>
      </div>

      {/* Full-bleed: loop infinito su tutta la viewport */}
      <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 pb-10 sm:pb-11">
        {marqueeLanes}
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />
    </section>
  );
}
