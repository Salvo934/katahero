import Link from "next/link";

import { TalentBoardHeroCard3D } from "./TalentBoardHeroCard3D";
import { TalentBoardStatsCarousel } from "./TalentBoardStatsCarousel";

export function TalentBoardPageHero() {
  const pathways = [
    { label: "Atleta", detail: "Card interattiva · un link per club e scout" },
    { label: "Agenzia", detail: "Board privata · cerca, filtra, condividi" },
  ] as const;

  return (
    <section className="relative isolate overflow-x-hidden border-b border-white/10 bg-zinc-950 pt-[max(7rem,calc(6.25rem+env(safe-area-inset-top,0px)))] pb-16 sm:pt-[max(7.75rem,calc(6.75rem+env(safe-area-inset-top,0px)))] sm:pb-24 lg:pt-[max(5.75rem,calc(5rem+env(safe-area-inset-top,0px)))] lg:pb-16 xl:pt-[max(6.75rem,calc(6rem+env(safe-area-inset-top,0px)))] xl:pb-20">
      {/* Accenti marca */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_55%_at_50%_-18%,rgba(0,229,160,0.09),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_88%_42%,rgba(0,229,160,0.11),transparent_62%)]"
        aria-hidden
      />
      {/* Fine grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[44px_44px] opacity-[0.35] mask-[linear-gradient(to_bottom,black,transparent_92%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/14 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-36 left-1/2 h-[min(58vh,420px)] w-[min(96vw,680px)] -translate-x-1/2 rounded-full bg-accent/7 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/28 to-transparent opacity-75"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-10 xl:gap-x-14">
          <div className="min-w-0">
            <div className="relative mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <div
                className="pointer-events-none absolute -left-4 top-1 hidden h-[calc(100%-0.5rem)] w-px bg-linear-to-b from-accent/55 via-white/12 to-transparent lg:block xl:-left-5"
                aria-hidden
              />

              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/14 bg-black/45 px-3 py-2 text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-md sm:rounded-full sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em] lg:mb-4">
                <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent shadow-[0_0_12px_rgba(0,229,160,0.9)]" />
                <span className="min-w-0 text-balance">Atleti · agenzie · procuratori</span>
              </div>

              <h1 className="font-display text-balance text-[clamp(1.85rem,4.5vw+0.75rem,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] sm:leading-[1.06] lg:max-w-[18ch] lg:text-[clamp(1.85rem,2.1vw+1rem,2.65rem)] xl:max-w-[20ch] xl:text-[clamp(2rem,2.2vw+1rem,2.85rem)]">
                <span className="block">La tua card.</span>
                <span className="mt-1 block sm:mt-1.5">Il tuo roster.</span>
                <span className="mt-2 block bg-linear-to-r from-white via-zinc-50 to-accent bg-clip-text text-transparent sm:mt-2.5">
                  Pronti da condividere.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-pretty text-[0.9375rem] leading-relaxed text-zinc-400 sm:mt-6 sm:text-base sm:leading-[1.65] lg:mx-0 lg:mt-5 lg:max-w-md xl:max-w-lg">
                Video, numeri e contatti in un link professionale. Roster privato con filtri e condivisione controllata — zero caos.
              </p>

              <ul
                className="mx-auto mt-6 flex max-w-xl flex-col gap-2 sm:mt-7 lg:mx-0 lg:max-w-lg"
                aria-label="Due percorsi Talent Board"
              >
                {pathways.map((item) => (
                  <li
                    key={item.label}
                    className="flex w-full items-center gap-2 rounded-2xl border border-white/12 bg-black/40 px-3.5 py-2.5 text-left text-xs text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:px-4 sm:py-3 sm:text-sm"
                  >
                    <span className="font-semibold text-white">{item.label}</span>
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,160,0.65)]"
                      aria-hidden
                    />
                    <span className="text-zinc-500">{item.detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start xl:mt-9">
                <a
                  href="#griglia-atleti"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_-8px_rgba(0,229,160,0.65)] transition hover:brightness-110 active:scale-[0.99] sm:w-auto sm:px-8"
                >
                  Scopri le card del roster
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </a>
                <Link
                  href="/#pacchetti"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/22 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/35 hover:bg-white/14 sm:w-auto"
                >
                  Richiedi la tua card
                </Link>
              </div>
            </div>
          </div>

          <aside className="relative flex w-full justify-center lg:justify-end lg:pt-2">
            <div
              className="pointer-events-none absolute top-[12%] right-0 bottom-[18%] left-0 -z-10 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(0,229,160,0.14),transparent_68%)]"
              aria-hidden
            />
            <TalentBoardHeroCard3D />
          </aside>
        </div>
      </div>
    </section>
  );
}

export function TalentBoardStatsStrip() {
  return <TalentBoardStatsCarousel />;
}

export function TalentBoardClosingCta() {
  return (
    <section className="border-t border-white/10 bg-linear-to-b from-zinc-950 to-black py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Atleta o agenzia: attiva il tuo percorso</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Richiedi la card personale oppure apri una board privata con tutto il tuo organico — stessi strumenti che vedi in questa pagina.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/#pacchetti"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110"
          >
            Richiedi la tua card
          </Link>
          <Link
            href="/#pacchetti"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/10"
          >
            Attiva roster privato
          </Link>
        </div>
      </div>
    </section>
  );
}
