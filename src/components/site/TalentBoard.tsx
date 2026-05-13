import Link from "next/link";

const showcaseStats = [
  { label: "PPG", value: "12.4" },
  { label: "AST", value: "4.8" },
] as const;

const audience = ["Società & scouting", "Agenzie", "Procuratori"] as const;

function TalentShowcaseCard() {
  return (
    <article
      className="relative w-full overflow-hidden rounded-3xl border border-white/12 bg-linear-to-b from-zinc-900/90 to-zinc-950/95 p-6 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.95)] ring-1 ring-white/5 sm:p-7"
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

      <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-white/8 py-5 text-[13px]">
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
        <div className="flex items-center rounded-xl border border-white/8 bg-white/5 px-3 py-2">
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(0,229,160,0.055),transparent_52%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">KataHero Talent Board</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.45rem] md:leading-[1.14]">
              Meno rumore tra chi{" "}
              <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                cerca e chi presenta
              </span>{" "}
              un talento
            </h2>

            <ul
              className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              aria-label="Destinatari principali"
            >
              {audience.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-300"
                >
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-[1.05rem] sm:leading-relaxed">
              La Talent Board è una <strong className="font-semibold text-zinc-200">vetrina pubblica</strong> di mini
              schede: un unico luogo dove{" "}
              <strong className="font-semibold text-zinc-200">società e scouting</strong> confrontano profili senza
              inseguire file e screenshot, le <strong className="font-semibold text-zinc-200">agenzie</strong> danno
              visibilità ordinata al roster e i <strong className="font-semibold text-zinc-200">procuratori</strong>{" "}
              condividono nomi e numeri con club e partner in modo chiaro e ripetibile.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-[1.05rem] sm:leading-relaxed">
              Ogni scheda riassume <strong className="font-semibold text-zinc-200">ruolo, categoria, anno, nazionalità, club, statistiche chiave e disponibilità</strong>.{" "}
              <strong className="font-semibold text-zinc-200">Un tap</strong> apre il sito completo dell’atleta — foto, video, carriera, social e contatti
              aggiornati, lo stesso standard del profilo KataHero che usi nelle trattative.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-center">
            <div className="relative w-full max-w-84 sm:max-w-92">
              <div className="pointer-events-none absolute -inset-8 rounded-4xl bg-accent/7 blur-3xl" aria-hidden />
              <TalentShowcaseCard />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10 text-center lg:mt-16 lg:pt-12">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-500">
            Scheda dimostrativa: sulla board pubblica i campi saranno quelli reali degli atleti iscritti al servizio.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mx-auto sm:flex-row sm:max-w-xl sm:flex-wrap">
            <Link
              href="/talent-board"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95"
            >
              Esplora Talent Board
              <span className="ml-2" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="#contatti"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
            >
              Proponi i tuoi atleti
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
