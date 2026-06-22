import Link from "next/link";
import { HeroVideoBackground } from "./HeroVideoBackground";

const highlights = [
  { label: "Dati & video", detail: "Profilo completo" },
  { label: "Percorso sportivo", detail: "Storia chiara" },
  { label: "Un solo link", detail: "Pronto per decision maker" },
];

const planTeaser = [
  { name: "Rookie", hint: "Annuale €49,99 · contenuto social omaggio" },
  { name: "Pro", hint: "Annuale €69,99 · più scelto" },
  { name: "Elite", hint: "Annuale €99,99 · più completo" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-[max(6rem,calc(5rem+env(safe-area-inset-top,0px)))] pb-[max(4rem,calc(3.25rem+env(safe-area-inset-bottom,0px)))] sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <HeroVideoBackground />

      <div
        className="pointer-events-none absolute left-1/2 top-[18%] z-22 h-[min(36vh,280px)] w-[min(92vw,440px)] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px] sm:top-[15%] sm:h-[min(40vh,320px)] sm:w-[min(88vw,480px)]"
        aria-hidden
      />

      <div className="relative z-23 mx-auto flex w-full max-w-6xl flex-col gap-8 px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] text-left sm:gap-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:px-8 xl:gap-12">
        <div className="relative min-w-0 max-w-[min(100%,42rem)] lg:max-w-[min(100%,48rem)]">
          <div
            className="pointer-events-none absolute -left-4 top-2 hidden h-[calc(100%-0.25rem)] w-px bg-linear-to-b from-accent/50 via-white/15 to-transparent sm:block lg:-left-5"
            aria-hidden
          />

          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/15 bg-black/45 px-3 py-2 text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-md sm:mb-5 sm:rounded-full sm:px-4 sm:py-1.5 sm:text-[11px] sm:leading-tight sm:tracking-[0.22em]">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent shadow-[0_0_12px_rgba(0,229,160,0.9)]" />
            <span className="min-w-0 text-balance">Agenti · Società · Atleti</span>
          </div>

          <h1
            className="font-display max-w-none text-pretty text-[clamp(1.5rem,5.5vw+0.65rem,3.1rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] sm:max-w-[min(100%,58ch)] sm:leading-[1.07] sm:[text-shadow:0_2px_28px_rgba(0,0,0,0.5)]"
          >
            KataHero aiuta agenti, società e atleti di basket a presentare talenti in modo{" "}
            <span className="bg-linear-to-r from-white via-zinc-50 to-accent bg-clip-text text-transparent">
              professionale, veloce e condivisibile
            </span>
            , con schede digitali e board roster pronte per club, scout e sponsor.
          </h1>

          <ul
            className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-2.5"
            aria-label="Cosa mette in evidenza KataHero"
          >
            {highlights.map((h) => (
              <li
                key={h.label}
                className="flex w-full items-center gap-2 rounded-2xl border border-white/12 bg-black/40 px-3.5 py-2.5 text-xs text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:w-auto sm:bg-black/35 sm:px-4 sm:py-2.5 sm:text-sm"
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

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:max-w-xl sm:flex-row sm:items-center sm:justify-start sm:gap-4">
            <Link
              href="#contatti"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_-8px_rgba(0,229,160,0.65)] transition hover:brightness-110 active:brightness-95 sm:w-auto sm:min-h-0 sm:px-8 sm:text-base"
            >
              Consulenza gratuita
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/talent-board"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/22 bg-white/10 px-5 py-3.5 text-center text-sm font-semibold leading-snug text-white backdrop-blur-md transition hover:border-white/35 hover:bg-white/14 active:bg-white/12 sm:w-auto sm:min-h-0 sm:px-8 sm:text-base"
            >
              Talent Board
            </Link>
          </div>
        </div>

        <div className="w-full shrink-0 lg:max-w-90 lg:pb-0">
          <div className="rounded-2xl border border-white/14 bg-black/55 p-5 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)] ring-1 ring-white/4 backdrop-blur-xl sm:rounded-3xl sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Pacchetti</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Tre livelli per l&apos;atleta: <strong className="font-semibold text-zinc-300">Rookie</strong>,{" "}
              <strong className="font-semibold text-zinc-300">Pro</strong> e{" "}
              <strong className="font-semibold text-zinc-300">Elite</strong> — anteprima qui; dettaglio in sezione
              pacchetti.
            </p>
            <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 sm:mt-5 sm:space-y-2.5 sm:pt-5">
              {planTeaser.map((row) => (
                <li
                  key={row.name}
                  className="rounded-xl border border-white/6 bg-white/4 px-3 py-2.5 sm:rounded-2xl sm:px-3.5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">{row.name}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-zinc-500">{row.hint}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/talent-board"
              className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-accent/35 bg-accent/10 py-3.5 text-sm font-semibold text-accent transition hover:border-accent/50 hover:bg-accent/15 active:bg-accent/20 sm:mt-5 sm:rounded-2xl"
            >
              Vai alla Talent Board
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#pacchetti"
              className="mt-2 block text-center text-[11px] font-semibold text-zinc-500 underline-offset-2 transition hover:text-zinc-300 hover:underline sm:text-xs"
            >
              Dettagli e prezzi pacchetti
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
