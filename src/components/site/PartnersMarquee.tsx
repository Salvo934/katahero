"use client";

import { type ReactNode, useEffect, useState } from "react";

const partners = [
  {
    name: "DaBoss Tournament",
    href: "https://www.instagram.com/dabosstournament?igsh=MXZwb2MwOTdqbW1neA==",
    logoSrc: "https://www.dabosstournament.com/logo.svg",
    ariaLabel: "DaBoss Tournament su Instagram",
  },
] as const;

type PartnerEntry = (typeof partners)[number];

/** Con 2+ partner si usa il banner infinito; con uno solo sticker compatto + “pile” decorative. */
const USE_MARQUEE = partners.length >= 2;

function StickerFace({
  logoSrc,
  subdued,
}: {
  logoSrc: string;
  subdued?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border px-5 py-2.5 shadow-lg sm:px-6 sm:py-3 ${subdued ? "border-white/10 bg-zinc-900/50" : "border-white/12 bg-linear-to-br from-zinc-800/95 to-zinc-900/98 ring-2 ring-black/35"}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG partner esterno */}
      <img
        src={logoSrc}
        alt=""
        decoding="async"
        className={`h-7 w-auto max-w-[136px] object-contain transition sm:h-8 sm:max-w-[152px] ${subdued ? "opacity-35 saturate-0" : "opacity-80 saturate-0 duration-300 ease-out group-hover:saturate-100 group-hover:opacity-95"}`}
      />
    </div>
  );
}

function PartnerSticker({
  p,
  echoStack,
}: {
  p: PartnerEntry;
  /** Effetto “pile” dietro quando c&apos;è un solo partner reale. */
  echoStack: boolean;
}) {
  const label = ("ariaLabel" in p ? p.ariaLabel : undefined) ?? p.name;

  return (
    <div className="relative flex justify-center pb-1 pt-0.5">
      {echoStack ? (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-[42%] -translate-y-[35%]"
            aria-hidden
          >
            <div className="rotate-[8deg] scale-95 opacity-[0.22] saturate-0">
              <StickerFace logoSrc={p.logoSrc} subdued />
            </div>
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-[58%] -translate-y-[18%]"
            aria-hidden
          >
            <div className="-rotate-[5deg] scale-90 opacity-[0.14] saturate-0">
              <StickerFace logoSrc={p.logoSrc} subdued />
            </div>
          </div>
        </>
      ) : null}

      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative z-10 -rotate-[2.5deg] shadow-[0_14px_40px_-14px_rgba(0,0,0,0.85)] transition duration-300 ease-out hover:-translate-y-0.5 hover:rotate-0 hover:shadow-[0_22px_50px_-16px_rgba(0,0,0,0.9)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={label}
      >
        <StickerFace logoSrc={p.logoSrc} />
      </a>
    </div>
  );
}

function MarqueeRolling({ strip }: { strip: PartnerEntry[] }) {
  const labelFor = (p: PartnerEntry) => ("ariaLabel" in p ? p.ariaLabel : undefined) ?? p.name;

  return (
    <div className="kh-partner-marquee relative overflow-hidden py-5 sm:py-6">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-zinc-950 to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-zinc-950 to-transparent sm:w-24"
        aria-hidden
      />

      <div className="kh-partner-marquee-track flex w-max items-center">
        <div className="flex shrink-0 items-center">
          {strip.map((p, i) => (
            <a
              key={`a-${p.name}-${i}`}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center px-10 py-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:px-12 lg:px-14"
              aria-label={labelFor(p)}
            >
              <span className="sr-only">{p.name}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logoSrc}
                alt=""
                decoding="async"
                className="h-7 w-auto max-w-[140px] object-contain opacity-55 saturate-0 transition-[filter,opacity] duration-300 hover:opacity-95 hover:saturate-100 sm:h-8 sm:max-w-[156px]"
              />
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {strip.map((p, i) => (
            <span key={`b-${p.name}-${i}`} className="flex shrink-0 items-center px-10 py-2.5 sm:px-12 lg:px-14">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logoSrc}
                alt=""
                decoding="async"
                className="h-7 w-auto max-w-[140px] object-contain opacity-55 saturate-0 sm:h-8 sm:max-w-[156px]"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PartnersMarquee() {
  const [preferReducedMotion, setPreferReducedMotion] = useState(false);

  const stripTriple: PartnerEntry[] = USE_MARQUEE ? [...partners, ...partners, ...partners] : [];

  useEffect(() => {
    if (!USE_MARQUEE) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPreferReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  let content: ReactNode;

  if (USE_MARQUEE) {
    if (preferReducedMotion) {
      content = (
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-5 py-7 sm:py-8">
          {partners.map((p) => (
            <PartnerSticker key={`static-${p.name}`} p={p} echoStack={false} />
          ))}
        </div>
      );
    } else {
      content = (
        <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2">
          <MarqueeRolling strip={stripTriple} />
        </div>
      );
    }
  } else {
    content = (
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-5 pb-3 pt-2 sm:pb-4 lg:gap-x-20">
        {partners.map((p) => (
          <PartnerSticker key={p.name} p={p} echoStack />
        ))}
      </div>
    );
  }

  return (
    <section className="relative overflow-x-clip border-y border-white/6 bg-zinc-950" aria-labelledby="partner-marquee-heading">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="pb-2 pt-5 text-[11px] font-medium uppercase tracking-[0.38em] text-zinc-500 sm:tracking-[0.42em]">
          Partner ufficiali
        </p>
        <h2 id="partner-marquee-heading" className="sr-only">
          Partner ufficiali
        </h2>

        {content}
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />
    </section>
  );
}
