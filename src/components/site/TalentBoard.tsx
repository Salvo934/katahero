import Link from "next/link";

const journey = [
  { label: "Scoperta", hint: "Trova chi cerchi in pochi scroll, senza documenti sparsi." },
  { label: "Valutazione", hint: "Ruolo, contesto e numeri leggibili prima del passo successivo." },
  { label: "Contatto", hint: "Dal dato sintetico al canale giusto sul profilo completo." },
] as const;

const miniFields = [
  "Ruolo",
  "Categoria",
  "Anno di nascita",
  "Nazionalità",
  "Club",
  "Statistiche principali",
  "Disponibilità",
] as const;

const fullProfileItems = [
  "Foto e identità visiva dell’atleta",
  "Video e highlight integrati",
  "Carriera e percorso sportivo",
  "Social collegati e aggiornati",
  "Contatti e referenze chiare",
  "Contenuti e numeri aggiornati nel tempo",
] as const;

function MiniCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/14 bg-linear-to-b from-zinc-900/95 to-black/80 p-4 shadow-[0_24px_64px_-32px_rgba(0,0,0,0.95)] ring-1 ring-inset ring-white/5 backdrop-blur-md ${className ?? ""}`}
    >
      <div className="flex gap-3">
        <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-xl bg-linear-to-br from-zinc-600 to-zinc-900 ring-1 ring-white/12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display truncate text-[0.95rem] font-bold tracking-tight text-white">A. Rossi</p>
          <p className="mt-1 text-[10px] font-medium leading-snug text-zinc-500">
            Playmaker · U19 · <span className="text-zinc-400">2006</span>
            <span className="text-zinc-600"> · </span>
            <span className="text-zinc-400">ITA</span>
          </p>
          <p className="mt-1 truncate text-[11px] text-zinc-500">
            Club: <span className="text-zinc-300">Benacquista Latina</span>
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="rounded-md border border-white/10 bg-white/6 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
              12.4 PPG
            </span>
            <span className="rounded-md border border-white/10 bg-white/6 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
              4.8 AST
            </span>
            <span className="rounded-md border border-accent/25 bg-accent/12 px-2 py-0.5 text-[10px] font-semibold text-accent">
              Disponibile
            </span>
          </div>
        </div>
      </div>
      <p className="mt-3.5 w-full rounded-xl border border-accent/30 bg-accent/10 py-2.5 text-center text-[11px] font-semibold text-accent">
        Apri profilo completo →
      </p>
    </div>
  );
}

export function TalentBoard() {
  return (
    <section
      id="talent-board"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-zinc-950 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_0%,rgba(0,229,160,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.35)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">KataHero Talent Board</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.65rem] md:leading-[1.12]">
            La vetrina digitale per{" "}
            <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
              scoprire, valutare e contattare
            </span>{" "}
            gli atleti
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            <strong className="font-semibold text-zinc-200">KataHero Talent Board</strong> è una vetrina pensata per
            rendere più semplice la <strong className="font-semibold text-zinc-200">scoperta</strong>, la{" "}
            <strong className="font-semibold text-zinc-200">valutazione</strong> e il{" "}
            <strong className="font-semibold text-zinc-200">contatto</strong> con i talenti — meno attrito tra chi cerca
            informazioni e chi deve essere valutato nel modo giusto.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Ogni atleta ha una <strong className="font-semibold text-zinc-200">mini scheda</strong> con dati rapidi:
            ruolo, categoria, anno, nazionalità, club, statistiche principali e disponibilità.{" "}
            <strong className="font-semibold text-zinc-200">Cliccando sulla card</strong>, l’utente passa al{" "}
            <strong className="font-semibold text-zinc-200">profilo completo</strong> — foto, video, carriera, social,
            contatti e contenuti aggiornati, la stessa esperienza curata del sito atleta.
          </p>

          <ul
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9"
            aria-label="Tre fasi del percorso sulla Talent Board"
          >
            {journey.map(({ label, hint }, i) => (
              <li key={label} className="flex items-center gap-2">
                {i > 0 ? (
                  <span className="hidden text-zinc-700 sm:inline" aria-hidden>
                    ·
                  </span>
                ) : null}
                <span
                  className="inline-flex max-w-full flex-col rounded-2xl border border-white/10 bg-black/35 px-4 py-2.5 text-left shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm sm:rounded-full sm:px-5 sm:py-2 sm:text-center"
                  title={hint}
                >
                  <span className="text-xs font-bold text-white">{label}</span>
                  <span className="mt-0.5 text-[11px] leading-snug text-zinc-500 sm:hidden">{hint}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/12 bg-zinc-900/35 shadow-[0_28px_80px_-48px_rgba(0,0,0,0.9)] ring-1 ring-white/5 sm:mt-16">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/45 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/8 blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-3 lg:items-center lg:gap-8 lg:p-10 xl:gap-10">
            <div className="lg:pr-2">
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">Nella mini scheda</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Tutto ciò che serve a club, staff e osservatori per inquadrare il giocatore in pochi secondi.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Campi nella mini scheda">
                {miniFields.map((field) => (
                  <li
                    key={field}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-300"
                  >
                    {field}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto flex w-full max-w-[20rem] justify-center lg:mx-0 lg:max-w-none">
              <div className="pointer-events-none absolute -inset-6 rounded-4xl bg-accent/5 blur-2xl" aria-hidden />
              <div className="relative w-full space-y-4">
                <MiniCardPreview className="relative z-10 -rotate-1" />
                <MiniCardPreview className="relative z-0 -mt-10 ml-6 scale-[0.96] rotate-2 opacity-[0.88] lg:-mt-12 lg:ml-8" />
              </div>
            </div>

            <div className="lg:pl-2">
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">Nel profilo completo</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                L’esperienza estesa dopo il tap: narrativa, media e aggiornamenti in un solo posto.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm leading-snug text-zinc-300">
                {fullProfileItems.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/talent-board"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95 sm:flex-initial"
          >
            Esplora Talent Board
            <span className="ml-2" aria-hidden>
              →
            </span>
          </Link>
          <Link
            href="#contatti"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/18 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/28 hover:bg-white/10 sm:flex-initial"
          >
            Vuoi comparire sulla board?
          </Link>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-center text-[11px] font-medium uppercase tracking-wider text-zinc-600">
          Anteprima grafica · i dati sulla board saranno quelli reali degli atleti
        </p>
      </div>
    </section>
  );
}
