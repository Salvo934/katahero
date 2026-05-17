import Link from "next/link";
import { TALENT_BOARD_DASHBOARD_STATS } from "@/lib/talent-board-data";

export function TalentBoardPageHero() {
  const highlights = ["Ruolo e categoria", "Club e statistiche", "Disponibilità", "Scheda digitale completa"] as const;

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-zinc-950 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-20 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-15%,rgba(0,229,160,0.11),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/12 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[min(55vh,380px)] w-[min(92vw,640px)] -translate-x-1/2 rounded-full bg-accent/6 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/25 to-transparent opacity-80"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-184 text-center">
          <div
            className="pointer-events-none absolute -left-1 top-6 hidden h-24 w-px bg-linear-to-b from-accent/55 via-white/12 to-transparent sm:block lg:-left-3 lg:top-10 lg:h-32"
            aria-hidden
          />

          <p className="mx-auto mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/14 bg-black/40 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:mb-8 sm:px-5 sm:text-[11px] sm:tracking-[0.24em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(0,229,160,0.85)] motion-safe:animate-pulse motion-reduce:animate-none" aria-hidden />
            <span>KataHero · Talent Board</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Demo basket</span>
          </p>

          <h1 className="font-display text-balance text-[clamp(1.85rem,5vw+0.85rem,3.35rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:leading-[1.06]">
            Cerca, filtra, valuta.
            <span className="mt-2 block sm:mt-3">
              <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                Tutto da una sola board.
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:mt-9 sm:text-lg sm:leading-[1.65]">
            Trova atleti per ruolo, categoria, club, statistiche e disponibilità. Ogni card apre una scheda digitale
            completa con dati, video, percorso sportivo, punti di forza e contatti, così agenti, scout e società possono
            analizzare un profilo più velocemente e in un unico posto.
          </p>

          <ul
            className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2 sm:mt-10 sm:gap-2.5"
            aria-label="Cosa puoi fare sulla board"
          >
            {highlights.map((label) => (
              <li key={label}>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-3.5 py-2 text-[11px] font-semibold tracking-wide text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-sm sm:px-4 sm:text-xs">
                  <span className="mr-2 h-1 w-1 shrink-0 rounded-full bg-accent/90 shadow-[0_0_8px_rgba(0,229,160,0.5)]" aria-hidden />
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#griglia-atleti"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_12px_44px_-14px_rgba(0,229,160,0.55)] transition hover:brightness-110 active:scale-[0.99] sm:w-auto sm:min-w-56"
            >
              Esplora la board
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </a>
            <Link
              href="/#pacchetti"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/16 bg-white/6 px-8 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:border-white/26 hover:bg-white/10 sm:w-auto sm:min-w-48"
            >
              Crea la tua card
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-md text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-600 sm:mt-8">
            Ricerca libera · Filtri avanzati · Link condivisibili
          </p>
        </div>
      </div>
    </section>
  );
}

export function TalentBoardStatsStrip() {
  return (
    <section className="border-b border-white/10 bg-zinc-950 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Panoramica board</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TALENT_BOARD_DASHBOARD_STATS.map((s) => (
            <li
              key={s.key}
              className="rounded-2xl border border-white/10 bg-zinc-900/45 px-4 py-4 text-center ring-1 ring-white/5 sm:py-5"
            >
              <p className="font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TalentBoardClosingCta() {
  return (
    <section className="border-t border-white/10 bg-linear-to-b from-zinc-950 to-black py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Vuoi entrare nella Talent Board?</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Crea la tua card atleta e collegala al tuo profilo digitale completo su KataHero.
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
            Crea il tuo profilo
          </Link>
        </div>
      </div>
    </section>
  );
}
