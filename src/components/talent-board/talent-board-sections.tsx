import Link from "next/link";
import { TALENT_BOARD_DASHBOARD_STATS } from "@/lib/talent-board-data";

const BOARD_PREVIEW_ROWS = [
  { initials: "MR", title: "Ruolo PG · Serie B", meta: "Club · Disponibile" },
  { initials: "LF", title: "Ruolo SF · U19", meta: "Club · In osservazione" },
  { initials: "GV", title: "Ruolo C · Serie A2", meta: "Club · Agenzia verificata" },
] as const;

function TalentBoardHeroPreviewCard() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-linear-to-br from-accent/20 via-white/5 to-transparent opacity-90 blur-sm"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/12 bg-zinc-900/55 shadow-[0_28px_90px_-40px_rgba(0,0,0,0.95),inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/5 backdrop-blur-xl sm:rounded-3xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_100%_0%,rgba(0,229,160,0.09),transparent_50%)]" aria-hidden />
        <div className="relative border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Board privata</p>
              <p className="mt-1 font-display text-sm font-bold text-white sm:text-base">Il tuo roster in una griglia</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/12 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Esempio
            </span>
          </div>
        </div>
        <div className="relative space-y-2 px-4 py-4 sm:space-y-2.5 sm:px-5 sm:py-5">
          {BOARD_PREVIEW_ROWS.map((row) => (
            <div
              key={row.initials}
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:gap-3.5 sm:px-3.5 sm:py-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-zinc-700/90 to-zinc-900 font-display text-[11px] font-bold text-white ring-1 ring-white/10 sm:h-12 sm:w-12 sm:text-xs">
                {row.initials}
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="truncate text-[13px] font-semibold text-zinc-100 sm:text-sm">{row.title}</p>
                  <span className="hidden h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,160,0.45)] sm:inline" aria-hidden />
                </div>
                <p className="truncate text-[11px] text-zinc-500 sm:text-xs">{row.meta}</p>
              </div>
              <span className="hidden shrink-0 text-lg text-zinc-600 sm:inline" aria-hidden>
                →
              </span>
            </div>
          ))}
        </div>
        <div className="relative border-t border-white/8 px-5 py-3 sm:px-6">
          <p className="text-center text-[11px] leading-snug text-zinc-500">
            Stesse card che compongono una board privata.{" "}
            <span className="font-medium text-zinc-400">Sotto: demo interattiva</span> (come sarà in produzione).
          </p>
        </div>
      </div>
    </div>
  );
}

export function TalentBoardPageHero() {
  const highlights = [
    "Board private roster",
    "Ruolo e categoria",
    "Filtri condivisibili",
    "Scheda digitale completa",
  ] as const;

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-zinc-950 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-16 sm:pb-24 lg:pb-28">
      {/* Campo arena (foto) — leggermente zoom + più scura per leggere copy e pill */}
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-x-14 lg:gap-y-12 xl:gap-x-20">
          <div className="relative text-center lg:col-start-1 lg:row-start-1 lg:text-left">
            <div
              className="pointer-events-none absolute -left-1 top-8 hidden h-28 w-px bg-linear-to-b from-accent/60 via-white/12 to-transparent lg:block xl:-left-2 xl:top-10 xl:h-32"
              aria-hidden
            />

            <p className="mx-auto mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/14 bg-black/45 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:mb-7 sm:px-5 sm:text-[11px] sm:tracking-[0.22em] lg:mx-0">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(0,229,160,0.85)] motion-safe:animate-pulse motion-reduce:animate-none"
                aria-hidden
              />
              <span>KataHero · Talent Board</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Anteprima demo</span>
            </p>

            <h1 className="font-display text-balance text-[clamp(1.9rem,4.2vw+1rem,3.45rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
              <span className="relative inline-block">
                Cerca, filtra, valuta.
                <span
                  className="pointer-events-none absolute -bottom-1 left-0 right-0 mx-auto h-2 max-w-[min(100%,12rem)] rounded-full bg-accent/15 blur-md lg:mx-0 lg:max-w-44"
                  aria-hidden
                />
              </span>
              <span className="mt-2 block sm:mt-2.5">
                <span className="bg-linear-to-r from-white via-zinc-50 to-accent bg-clip-text text-transparent">
                  Tutto da una sola board.
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-[1.0625rem] sm:leading-[1.65] lg:mx-0">
              Puoi creare <strong className="font-semibold text-zinc-200">board private</strong> con tutte le mini schede dei
              tuoi atleti: un unico posto ordinato per il tuo staff e per i contatti che inviti.{" "}
              <span className="text-zinc-500">
                Più sotto trovi una <strong className="font-medium text-zinc-400">demo</strong> (dati basket di esempio) così
                vedi come stanno ricerca, filtri e card.
              </span>
            </p>
          </div>

          <div className="mx-auto w-full max-w-md lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mx-0 lg:max-w-none lg:self-center">
            <TalentBoardHeroPreviewCard />
          </div>

          <div className="text-center lg:col-start-1 lg:row-start-2 lg:text-left">
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

            <p className="mx-auto mt-6 max-w-md border-t border-white/8 pt-6 text-[11px] font-medium uppercase tracking-[0.26em] text-zinc-600 sm:mt-7 lg:mx-0 lg:border-t-0 lg:pt-0">
              Board privata · Anteprima pubblica sotto
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
