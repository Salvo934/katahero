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
        <p className="mx-auto mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-sm sm:text-[11px] sm:tracking-[0.22em]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(0,229,160,0.75)]" aria-hidden />
          <span>KataHero · Talent Board</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400">Demo basket</span>
        </p>

        <h1 className="font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-tight">
          Cerca atleti, affina con i filtri, apri il profilo completo
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Ti portiamo alla griglia di card: lì puoi usare ricerca libera e filtri (ruolo, categoria, numeri, club…). Ogni
          card è il punto di ingresso al profilo digitale dell&apos;atleta. Stato e link sono salvati nell&apos;URL, così puoi
          condividere la stessa vista.
        </p>

        <ol className="mx-auto mt-8 flex max-w-xl flex-col gap-3 text-left sm:mx-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 sm:text-center">
          {[
            { step: "1", title: "Sfoglia la griglia", hint: "Card con dati sintetici in evidenza." },
            { step: "2", title: "Filtra e cerca", hint: "Combina filtri o parole chiave." },
            { step: "3", title: "Apri il profilo", hint: "Scheda completa dell’atleta." },
          ].map((item) => (
            <li
              key={item.step}
              className="flex flex-1 gap-3 rounded-2xl border border-white/12 bg-zinc-900/40 px-4 py-3.5 ring-1 ring-white/5 sm:flex-col sm:items-center sm:gap-1 sm:px-3 sm:py-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent sm:h-7 sm:w-7">
                {item.step}
              </span>
              <span className="min-w-0 sm:text-center">
                <span className="block text-sm font-semibold text-white">{item.title}</span>
                <span className="mt-0.5 block text-[11px] leading-snug text-zinc-500 sm:text-xs">{item.hint}</span>
              </span>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-xl rounded-2xl border border-accent/25 bg-accent/8 px-5 py-4 text-sm font-semibold leading-snug text-accent sm:text-[15px]">
          I dati che vedi sono di esempio per il basket; il percorso è quello che useranno club, scout e società sulla
          Talent Board reale.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#griglia-atleti"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110"
          >
            Vai a griglia e filtri
          </a>
          <Link
            href="/#pacchetti"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/28 hover:bg-white/10"
          >
            Crea la tua card
          </Link>
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
