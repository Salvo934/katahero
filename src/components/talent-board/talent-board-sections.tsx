import Link from "next/link";
import { TALENT_BOARD_DASHBOARD_STATS } from "@/lib/talent-board-data";

export function TalentBoardPageHero() {
  const highlights = [
    "Griglia roster con mini schede",
    "Filtri e ricerca istantanea",
    "Scheda digitale estesa",
    "Board private per chi rappresenta talenti",
  ] as const;

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-zinc-950 pt-[max(7rem,calc(6.25rem+env(safe-area-inset-top,0px)))] pb-16 sm:pt-[max(7.75rem,calc(6.75rem+env(safe-area-inset-top,0px)))] sm:pb-24 lg:pt-[max(8rem,calc(7rem+env(safe-area-inset-top,0px)))] lg:pb-28">
      {/* Campo arena (foto) — leggibile con overlay scuri */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 bg-zinc-950 bg-[url('/sfondoherotalenti.png')] bg-cover bg-position-[26%_50%] bg-no-repeat lg:bg-position-[64%_50%] xl:bg-position-[58%_45%]"
        />
        <div className="absolute inset-0 bg-black/48" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/35 to-black/82" />
        <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/25 to-transparent lg:via-black/20" />
      </div>

      {/* Accenti marca (attenuati sulla foto) */}
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
        <div className="mx-auto max-w-3xl lg:mx-0">
          <div className="relative text-center lg:text-left">
            <div
              className="pointer-events-none absolute -left-1 top-2 hidden h-32 w-px bg-linear-to-b from-accent/60 via-white/12 to-transparent lg:block xl:-left-2 xl:top-3 xl:h-36"
              aria-hidden
            />

            <h1 className="font-display text-balance text-[clamp(1.9rem,4.2vw+1rem,3.45rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
              <span className="relative inline-block">
                Il roster in una sola board.
                <span
                  className="pointer-events-none absolute -bottom-1 left-0 right-0 mx-auto h-2 max-w-[min(100%,14rem)] rounded-full bg-accent/15 blur-md lg:mx-0 lg:max-w-48"
                  aria-hidden
                />
              </span>
              <span className="mt-2 block sm:mt-2.5">
                <span className="bg-linear-to-r from-white via-zinc-50 to-accent bg-clip-text text-transparent">
                  Cerca, filtra, apri la scheda — senza più file sparsi.
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:mt-7 sm:text-[1.0625rem] sm:leading-[1.65] lg:mx-0">
              Questa pagina è l&apos;<strong className="font-semibold text-zinc-200">anteprima interattiva</strong> della
              KataHero Talent Board: una griglia con le <strong className="font-semibold text-zinc-200">mini schede</strong>{" "}
              dei tuoi atleti, filtri per ruolo, categoria e disponibilità, e link diretti al profilo completo con numeri,
              video e percorso. È pensata per chi lavora lato agenzia, scouting o direzione tecnica{" "}
              <span className="text-zinc-500">
                (qui sotto vedi solo <strong className="font-medium text-zinc-400">dati dimostrativi basket</strong> — la
                stessa esperienza, poi, sulla <strong className="font-medium text-zinc-400">board privata del tuo organico</strong>
                ).
              </span>
            </p>
          </div>

          <div className="mt-10 text-center lg:mt-12 lg:text-left">
            <ul
              className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 sm:gap-2.5 lg:mx-0 lg:justify-start"
              aria-label="Cosa puoi fare sulla board"
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
                Esplora la board
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </a>
              <Link
                href="/#pacchetti"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/18 bg-white/[0.07] px-8 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] backdrop-blur-sm transition hover:border-white/28 hover:bg-white/11 sm:w-auto sm:min-w-48"
              >
                Crea la tua card
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-600 sm:mt-7 lg:mx-0">
              Demo pubblica · Board private con Roster HQ
            </p>
          </div>
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
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Board private con il tuo roster</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Crea le mini schede dei tuoi atleti e organizzale nella tua Talent Board riservata — stessa esperienza che provi
          nella demo qui sopra, con i tuoi dati e i tuoi contatti.
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
