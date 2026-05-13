import Link from "next/link";
import { TALENT_BOARD_DASHBOARD_STATS } from "@/lib/talent-board-data";

export function TalentBoardPageHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-zinc-950 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-16 sm:pt-28 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(0,229,160,0.09),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-tight">
          KataHero Talent Board
        </h1>
        <p className="mt-4 text-lg font-medium text-zinc-300 sm:text-xl">
          La dashboard digitale per scoprire, valutare e contattare atleti.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Mini card dinamiche con sport, ruolo, categoria, nazionalità, statistiche, status e link al profilo completo
          dell’atleta.
        </p>
        <p className="mx-auto mt-8 max-w-xl rounded-2xl border border-accent/25 bg-accent/8 px-5 py-4 text-sm font-semibold leading-snug text-accent sm:text-base">
          Una card per farsi trovare. Un profilo completo per farsi scegliere.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#griglia-atleti"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110"
          >
            Esplora gli atleti
          </a>
          <Link
            href="/#pacchetti"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/28 hover:bg-white/10"
          >
            Crea la tua card
          </Link>
        </div>
        <p className="mt-6 text-[12px] font-medium uppercase tracking-wider text-zinc-600">In vetrina: basket</p>
      </div>
    </section>
  );
}

export function TalentBoardStatsStrip() {
  return (
    <section className="border-b border-white/10 bg-zinc-950 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Panoramica board</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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

const audienceCards = [
  {
    title: "Agli atleti",
    body: "Per presentarsi in modo professionale con una card dinamica e un profilo completo sempre aggiornabile.",
  },
  {
    title: "Agli agenti",
    body: "Per organizzare e condividere i propri atleti in una board chiara, filtrabile e professionale.",
  },
  {
    title: "Alle società",
    body: "Per cercare, valutare e contattare profili sportivi in modo più rapido.",
  },
  {
    title: "Agli sponsor",
    body: "Per scoprire atleti da supportare, valorizzare o coinvolgere in collaborazioni.",
  },
] as const;

export function TalentBoardAudienceSection() {
  return (
    <section className="border-t border-white/10 bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">A chi serve</h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audienceCards.map((c) => (
            <li
              key={c.title}
              className="rounded-2xl border border-white/10 bg-zinc-900/35 p-6 ring-1 ring-white/5 transition hover:border-white/16"
            >
              <h3 className="font-display text-lg font-bold text-accent">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "1",
    title: "Scopri la card",
    body: "Visualizza subito dati essenziali, status, statistiche e agenzia.",
  },
  {
    n: "2",
    title: "Apri il profilo completo",
    body: "Accedi al sito personale dell’atleta con foto, video, carriera, social e contatti.",
  },
  {
    n: "3",
    title: "Contatta o condividi",
    body: "Usa il link per parlare con agente, società, sponsor o collaboratori.",
  },
] as const;

export function TalentBoardHowSection() {
  return (
    <section className="border-t border-white/10 bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">Come funziona</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-zinc-900/40 p-6 pt-12 ring-1 ring-white/5"
            >
              <span className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent ring-1 ring-accent/30">
                {s.n}
              </span>
              <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.body}</p>
            </li>
          ))}
        </ol>
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
