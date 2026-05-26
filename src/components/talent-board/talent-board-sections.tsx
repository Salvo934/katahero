import Link from "next/link";

import { TalentBoardHeroCard3D } from "./TalentBoardHeroCard3D";
import { TalentBoardStatsCarousel } from "./TalentBoardStatsCarousel";

export function TalentBoardPageHero() {
  const highlights = [
    "Card su misura per ogni atleta",
    "Sito completo integrato",
    "Roster con filtri live",
    "Condivisione in un click",
  ] as const;

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-zinc-950 pt-[max(7rem,calc(6.25rem+env(safe-area-inset-top,0px)))] pb-16 sm:pt-[max(7.75rem,calc(6.75rem+env(safe-area-inset-top,0px)))] sm:pb-24 lg:pt-[max(8rem,calc(7rem+env(safe-area-inset-top,0px)))] lg:pb-28">
      {/* Accenti marca */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_55%_at_50%_-18%,rgba(0,229,160,0.09),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_90%_55%,rgba(0,229,160,0.06),transparent_50%)] opacity-80 lg:opacity-100"
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(16rem,34rem)] lg:items-start lg:gap-x-14 xl:gap-x-16">
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <div className="relative mx-auto max-w-xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
              <div
                className="pointer-events-none absolute -left-1 top-2 hidden h-32 w-px bg-linear-to-b from-accent/60 via-white/12 to-transparent lg:block xl:-left-2 xl:top-3 xl:h-36"
                aria-hidden
              />

              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                Per agenzie · procuratori · staff
              </p>

              <h1 className="font-display text-balance text-[clamp(1.9rem,4.2vw+1rem,3.45rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
                <span className="relative inline-block">
                  Creiamo la card interattiva dell&apos;atleta.
                  <span
                    className="pointer-events-none absolute -bottom-1 left-0 right-0 mx-auto h-2 max-w-[min(100%,14rem)] rounded-full bg-accent/15 blur-md lg:mx-0 lg:max-w-48"
                    aria-hidden
                  />
                </span>
                <span className="mt-2 block sm:mt-2.5">
                  <span className="bg-linear-to-r from-white via-zinc-50 to-accent bg-clip-text text-transparent">
                    Apri la card: dentro c&apos;è il sito completo.
                  </span>
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:mt-7 sm:text-[1.0625rem] sm:leading-[1.65] lg:mx-0">
                Ruolo, fisico, numeri e punto di forza — tutto leggibile in pochi secondi. Un click e si apre il{" "}
                <strong className="font-semibold text-zinc-200">sito completo</strong>: highlight, statistiche, percorso sportivo e
                contatti, in un&apos;esperienza mobile-first pensata per chi valuta i talenti.
                <span className="mt-2 block text-zinc-500">
                  La <strong className="font-medium text-zinc-400">Talent Board</strong> riunisce tutte le card del roster: cerca, filtra
                  e condividi con club, scout e partner il profilo giusto —{" "}
                  <strong className="font-medium text-zinc-400">un formato, un link, zero caos</strong>.
                </span>
              </p>
            </div>
          </div>

          <aside className="flex shrink-0 justify-center lg:sticky lg:top-[max(5.5rem,env(safe-area-inset-top,0px))] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-end lg:self-start lg:pt-1 xl:top-28">
            <TalentBoardHeroCard3D />
          </aside>

          <div className="min-w-0 text-center lg:col-start-1 lg:row-start-2 lg:mt-0 lg:text-left">
            <ul
              className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 sm:gap-2.5 lg:mx-0 lg:justify-start"
              aria-label="Cosa fa la Talent Board"
            >
              {highlights.map((label) => (
                <li key={label}>
                  <span className="inline-flex items-center rounded-full border border-white/11 bg-white/6 px-3.5 py-2 text-[11px] font-semibold tracking-wide text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm sm:px-4 sm:text-xs">
                    <span
                      className="mr-2 h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,160,0.5)]"
                      aria-hidden
                    />
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start lg:gap-4">
              <a
                href="#griglia-atleti"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_14px_48px_-16px_rgba(0,229,160,0.58)] transition hover:brightness-110 active:scale-[0.99] sm:w-auto sm:min-w-56"
              >
                Scopri le card del roster
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </a>
              <Link
                href="/#pacchetti"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/18 bg-white/[0.07] px-8 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] backdrop-blur-sm transition hover:border-white/28 hover:bg-white/11 sm:w-auto sm:min-w-48"
              >
                Attiva la tua board
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-600 sm:mt-7 lg:mx-0">
              Card · Sito · Board — presentazione professionale
            </p>
          </div>
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
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Vuoi questo layout sul tuo organico?</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Portiamo le tue Talent Card in una board <strong className="font-medium text-zinc-300">chiusa e aggiornabile</strong>, con gli
          stessi strumenti che hai visto qui sopra: ricerca, filtri, link da inoltrare a società e partner. Nessun contenuto pubblico fuori dalla
          tua autorizzazione.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/#contatti"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110"
          >
            Richiedi informazioni
          </Link>
          <Link
            href="/#pacchetti"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/10"
          >
            Vedi piani e servizi
          </Link>
        </div>
      </div>
    </section>
  );
}
