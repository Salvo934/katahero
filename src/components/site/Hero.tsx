import Link from "next/link";
import { HeroVideoBackground } from "./HeroVideoBackground";

const highlights = [
  { label: "Dati & video", detail: "Profilo completo" },
  { label: "Percorso sportivo", detail: "Storia chiara" },
  { label: "Un solo link", detail: "Pronto per decision maker" },
];

const planTeaser = [
  { name: "Player Card", hint: "Scheda atleta singola" },
  { name: "Agency Portfolio", hint: "Portfolio fino a 10 atleti" },
  { name: "Agency Pro", hint: "Roster strutturato e filtri" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <HeroVideoBackground />

      <div
        className="pointer-events-none absolute left-1/2 top-[20%] z-22 h-[min(40vh,320px)] w-[min(88vw,480px)] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px] sm:top-[15%]"
        aria-hidden
      />

      <div className="relative z-23 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 text-left sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:px-8 xl:gap-12">
        <div className="relative min-w-0 max-w-[min(100%,42rem)] lg:max-w-[min(100%,48rem)]">
          <div
            className="pointer-events-none absolute -left-4 top-2 hidden h-[calc(100%-0.25rem)] w-px bg-linear-to-b from-accent/50 via-white/15 to-transparent sm:block lg:-left-5"
            aria-hidden
          />

          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/15 bg-black/40 px-3 py-2 text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-md sm:mb-5 sm:rounded-full sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent shadow-[0_0_12px_rgba(0,229,160,0.9)]" />
            <span className="min-w-0 text-balance">Agenti · Società · Staff tecnico</span>
          </div>

          <h1
            className="font-display max-w-[min(100%,52ch)] text-pretty text-[clamp(1.75rem,3.6vw+0.75rem,3.1rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:leading-[1.07] [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]"
          >
            KataHero trasforma dati, video e percorso sportivo di un atleta in una{" "}
            <span className="bg-linear-to-r from-white via-zinc-50 to-accent bg-clip-text text-transparent">
              scheda digitale professionale
            </span>
            , pronta da condividere con club, scout, agenti e società
          </h1>

          <ul
            className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5"
            aria-label="Cosa mette in evidenza KataHero"
          >
            {highlights.map((h) => (
              <li
                key={h.label}
                className="flex items-center gap-2 rounded-2xl border border-white/12 bg-black/35 px-3.5 py-2 text-xs text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <span className="font-semibold text-white">{h.label}</span>
                <span
                  className="h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,160,0.65)]"
                  aria-hidden
                />
                <span className="text-zinc-500">{h.detail}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-start sm:gap-4">
            <Link
              href="#contatti"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_-8px_rgba(0,229,160,0.65)] transition hover:brightness-110 sm:px-8 sm:text-base"
            >
              Consulenza gratuita
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="#pacchetti"
              className="inline-flex items-center justify-center rounded-full border border-white/22 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/35 hover:bg-white/12 sm:px-8 sm:text-base"
            >
              Pacchetti &amp; Social Kit
            </Link>
          </div>
        </div>

        <div className="w-full shrink-0 lg:max-w-90 lg:pb-0">
          <div className="rounded-3xl border border-white/14 bg-black/50 p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)] ring-1 ring-white/4 backdrop-blur-xl sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Pacchetti</p>
            <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
              Tre livelli più Social Kit opzionale — dettagli e ambiti nella sezione dedicata.
            </p>
            <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
              {planTeaser.map((row) => (
                <li
                  key={row.name}
                  className="rounded-2xl border border-white/6 bg-white/4 px-3.5 py-2.5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">{row.name}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-zinc-500">{row.hint}</p>
                </li>
              ))}
            </ul>
            <Link
              href="#pacchetti"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-accent/35 bg-accent/10 py-3 text-sm font-semibold text-accent transition hover:border-accent/50 hover:bg-accent/15"
            >
              Vedi pacchetti e Social Kit
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#portfolio"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/12 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/22 hover:bg-white/6 hover:text-white"
            >
              Esempio in portfolio
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-4 left-1/2 z-23 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-500">Scroll</span>
          <div className="h-9 w-5 rounded-full border border-white/25 bg-white/5 p-1 backdrop-blur-sm">
            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-accent shadow-[0_0_12px_rgba(0,229,160,0.6)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
