import Link from "next/link";

const showcaseStats = [
  { label: "PPG", value: "12.4" },
  { label: "AST", value: "4.8" },
] as const;

function TalentShowcaseCard() {
  return (
    <article
      className="relative overflow-hidden rounded-3xl border border-white/12 bg-linear-to-b from-zinc-900/90 to-zinc-950/95 p-6 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.95)] ring-1 ring-white/5 sm:p-7"
      aria-label="Esempio di mini scheda Talent Board"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />
      <div className="flex gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-950 ring-1 ring-white/10 sm:h-24 sm:w-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.15),transparent_55%)]" />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">A. Rossi</h3>
          <p className="mt-1 text-[12px] leading-snug text-zinc-400">
            Playmaker · U19 · <span className="text-zinc-300">2006</span>
            <span className="text-zinc-600"> · </span>
            <span className="text-zinc-300">ITA</span>
          </p>
          <p className="mt-2 truncate text-sm text-zinc-500">
            <span className="text-zinc-600">Club </span>
            <span className="font-medium text-zinc-300">Benacquista Ass. Latina</span>
          </p>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-white/8 py-5 text-[13px]">
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Ruolo</dt>
          <dd className="font-medium text-zinc-100">Playmaker</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Categoria</dt>
          <dd className="font-medium text-zinc-100">U19</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Disponibilità</dt>
          <dd className="font-semibold text-accent">Disponibile</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Nazionalità</dt>
          <dd className="font-medium text-zinc-100">Italia</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {showcaseStats.map((s) => (
          <div
            key={s.label}
            className="flex items-baseline gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
          >
            <span className="text-lg font-bold tabular-nums text-white">{s.value}</span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">{s.label}</span>
          </div>
        ))}
        <div className="flex items-center rounded-xl border border-white/8 bg-white/4 px-3 py-2">
          <span className="text-[10px] font-bold uppercase tracking-wide text-zinc-400">Stagione</span>
          <span className="ml-2 text-[11px] font-medium text-zinc-300">2025-26</span>
        </div>
      </div>

      <p className="mt-6 rounded-2xl border border-accent/25 bg-accent/8 py-3.5 text-center text-[12px] font-semibold text-accent">
        Tap → profilo completo
      </p>
    </article>
  );
}

export function TalentBoard() {
  return (
    <section
      id="talent-board"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-zinc-950 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_70%_10%,rgba(0,229,160,0.06),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,380px)] lg:items-center lg:gap-14 xl:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">KataHero Talent Board</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight">
              Vetrina digitale per{" "}
              <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                scoprire, valutare e contattare
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Una board pubblica dove ogni atleta ha una <strong className="font-semibold text-zinc-200">mini scheda</strong>{" "}
              con ruolo, categoria, anno, nazionalità, club, statistiche principali e disponibilità. Un tap apre il{" "}
              <strong className="font-semibold text-zinc-200">profilo completo</strong> — foto, video, carriera, social e
              contatti aggiornati.
            </p>
            <p className="mt-4 text-sm font-medium tracking-wide text-zinc-500">
              Scoperta <span className="text-zinc-700">·</span> Valutazione <span className="text-zinc-700">·</span>{" "}
              Contatto
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="pointer-events-none absolute -inset-10 rounded-4xl bg-accent/6 blur-3xl" aria-hidden />
            <TalentShowcaseCard />
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-zinc-500 lg:mt-12 lg:text-left">
          Esempio visivo: in produzione le card useranno i dati reali degli atleti iscritti alla Talent Board.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
          <Link
            href="/talent-board"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95"
          >
            Esplora Talent Board
            <span className="ml-2" aria-hidden>
              →
            </span>
          </Link>
          <Link
            href="#contatti"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
          >
            Vuoi comparire sulla board?
          </Link>
        </div>
      </div>
    </section>
  );
}
