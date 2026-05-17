"use client";

import { useEffect, useState } from "react";

const partners = [
  {
    name: "DaBoss Tournament",
    href: "https://www.dabosstournament.com",
    logoSrc: "https://www.dabosstournament.com/logo.svg",
  },
] as const;

function PartnerRibbonLabel() {
  return (
    <div className="relative lg:max-w-70">
      <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Partner ufficiali</p>
      <h2
        id="partner-marquee-heading"
        className="font-display mt-3 text-lg font-bold leading-snug tracking-tight text-white sm:text-xl"
      >
        Gioco di squadra
      </h2>
      <p className="mt-3 text-[13px] leading-relaxed text-zinc-500 sm:text-sm">
        Collaborazioni scelte: chi organizza sul territorio e crede nella stessa cura nel presentare chi gioca sul parquet.
      </p>
      <div
        className="pointer-events-none absolute top-10 -left-1 hidden h-16 w-px bg-linear-to-b from-accent/50 via-white/15 to-transparent lg:block xl:-left-2"
        aria-hidden
      />
    </div>
  );
}

function PartnerLinkCard({
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
      className="group relative flex shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/4 px-5 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:border-accent/30 hover:bg-white/7 hover:shadow-[0_0_32px_-12px_rgba(0,229,160,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-6 sm:py-3"
    >
      <span
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      >
        <span className="absolute inset-y-[-20%] left-[-35%] w-1/2 rotate-[-18deg] bg-linear-to-r from-transparent via-accent/15 to-transparent blur-sm transition-all duration-500 group-hover:left-[115%]" />
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element -- logo SVG esterno */}
      <img
        src={logoSrc}
        alt=""
        className="relative h-9 w-auto max-w-[120px] object-contain brightness-105 sm:h-10 sm:max-w-[132px]"
        decoding="async"
      />
      <span className="relative whitespace-nowrap font-display text-[13px] font-semibold tracking-tight text-zinc-400 transition group-hover:text-white sm:text-sm">
        {name}
      </span>
      <span
        className="relative shrink-0 text-[10px] font-bold uppercase tracking-wider text-zinc-600 transition group-hover:text-accent/95"
        aria-hidden
      >
        ↗
      </span>
    </a>
  );
}

/** Tre ripetizioni nella mezza striscia (×2 = loop senza cuciture). */
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

  const marqueeBody = preferReducedMotion ? (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-8 sm:px-6 lg:justify-start lg:pl-10 lg:pr-8 xl:gap-6">
      {partners.map((p) => (
        <PartnerLinkCard key={p.name} href={p.href} name={p.name} logoSrc={p.logoSrc} />
      ))}
    </div>
  ) : (
    <div className="relative min-h-23 flex-1 py-5 lg:py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent sm:w-28" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-zinc-950 via-zinc-950/80 to-transparent sm:w-28" aria-hidden />
      <div className="kh-partner-marquee relative overflow-hidden lg:translate-y-0">
        <div className="kh-partner-marquee-track flex w-max items-center gap-6 xl:gap-10">
          <div className="flex shrink-0 items-center gap-6 xl:gap-10" aria-hidden={false}>
            {stripTriple.map((p, i) => (
              <PartnerLinkCard key={`a-${p.name}-${i}`} href={p.href} name={p.name} logoSrc={p.logoSrc} />
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-6 xl:gap-10" aria-hidden>
            {stripTriple.map((p, i) => (
              <PartnerLinkCard key={`b-${p.name}-${i}`} href={p.href} name={p.name} logoSrc={p.logoSrc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-zinc-950"
      aria-labelledby="partner-marquee-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[52px_52px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(0,229,160,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-stretch">
        <aside className="relative z-10 border-b border-white/10 px-6 py-7 sm:px-8 lg:flex lg:w-[min(100%,22rem)] lg:shrink-0 lg:flex-col lg:justify-center lg:border-b-0 lg:border-white/10 lg:border-r lg:py-9 lg:pl-10 lg:pr-10">
          <PartnerRibbonLabel />
        </aside>

        <div className="relative min-w-0 flex-1 bg-linear-to-br from-transparent via-zinc-950/30 to-transparent">
          {marqueeBody}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/12 to-transparent"
        aria-hidden
      />
    </section>
  );
}
