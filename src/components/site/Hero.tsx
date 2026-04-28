import Link from "next/dist/client/link";
import { HeroVideoBackground } from "./HeroVideoBackground";

const highlights = [
  { label: "Sito & landing", detail: "Chiaro e aggiornabile" },
  { label: "Brand & contenuti", detail: "Stessa voce ovunque" },
  { label: "Sponsor o clienti", detail: "Un solo messaggio" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden pb-14 pt-28 sm:justify-between sm:pb-20 sm:pt-32">
      <HeroVideoBackground />

      <div
        className="pointer-events-none absolute left-1/2 top-[28%] z-22 h-[min(50vh,420px)] w-[min(90vw,520px)] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px] sm:top-[22%]"
        aria-hidden
      />

      <div className="relative z-23 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-8">
        <div className="max-w-3xl lg:max-w-[min(56rem,58%)]">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/15 bg-black/35 px-3 py-2 text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-md sm:rounded-full sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.22em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(0,229,160,0.9)]" />
            <span className="min-w-0 text-balance">ATLETI EMERGENTI · SEMI-PRO · PRO</span>
          </div>

          <h1 className="font-display text-[2.2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[2.75rem] xl:text-7xl">
            Fatti{" "}
            <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
              scegliere
            </span>
            <span className="text-zinc-100">, non solo seguire.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:mt-6 sm:text-lg sm:leading-relaxed">
          Quando arriva l’opportunità, il tuo profilo deve parlare per te.
          Con KataHero hai un sito personale, uno storytelling professionale e contenuti social pronti a presentarti a club, sponsor e nuove collaborazioni.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2 sm:gap-3" aria-label="Cosa ottieni">
            {highlights.map((h) => (
              <li
                key={h.label}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-3.5 py-2 text-xs text-zinc-200 shadow-sm backdrop-blur-sm sm:text-sm"
              >
                <span className="font-medium text-white">{h.label}</span>
                <span className="h-1 w-1 rounded-full bg-accent/80" aria-hidden />
                <span className="text-zinc-500">{h.detail}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#contatti"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-black shadow-[0_0_40px_-8px_rgba(0,229,160,0.65)] transition hover:brightness-110"
            >
              Consulenza gratuita
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="#pacchetti"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/6 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/10"
            >
              Prezzi &amp; pacchetti
            </Link>
          </div>
        </div>

        <div className="mt-12 w-full max-w-md shrink-0 lg:mt-0 lg:max-w-sm">
          <div className="rounded-3xl border border-white/12 bg-black/45 p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Modello ad abbonamento</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Paghi l&apos;abbonamento <strong className="font-medium text-zinc-100">mensile</strong>, oppure{" "}
              <strong className="font-medium text-zinc-100">tutto l&apos;anno</strong> con lo sconto equivalente a{" "}
              <strong className="font-medium text-zinc-100">due mesi</strong>.
            </p>
            <div className="mt-5 flex gap-3 border-t border-white/10 pt-5">
              <div className="flex-1 rounded-2xl bg-white/4 px-3 py-2.5 text-center">
                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Mensile</p>
                <p className="mt-0.5 font-display text-lg font-bold text-white">Abbonamento</p>
              </div>
              <div className="flex-1 rounded-2xl bg-accent/10 px-3 py-2.5 text-center ring-1 ring-accent/25">
                <p className="text-[10px] font-medium uppercase tracking-wider text-accent/90">Annuale</p>
                <p className="mt-0.5 font-display text-lg font-bold text-accent">−2 mesi</p>
              </div>
            </div>
            <Link
              href="#portfolio"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/6"
            >
              Vedi un caso reale
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-5 left-1/2 z-23 hidden -translate-x-1/2 md:block"
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
