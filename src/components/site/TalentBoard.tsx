import Link from "next/link";

const highlights = [
  {
    title: "Lettura veloce",
    hint: "Ruolo, squadra e numeri chiave senza aprire chat o file allegati.",
  },
  {
    title: "Stessa identità KataHero",
    hint: "Mini schede allineate al design delle Player Card e del portfolio.",
  },
  {
    title: "Approfondimento in un tap",
    hint: "Da ogni card al sito completo dell’atleta — highlight, bio e contatti.",
  },
];

function MiniCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/12 bg-zinc-900/80 p-4 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.9)] ring-1 ring-white/5 backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="flex gap-3">
        <div className="h-14 w-14 shrink-0 rounded-xl bg-linear-to-br from-zinc-700 to-zinc-900 ring-1 ring-white/10" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm font-bold text-white">Nome atleta</p>
          <p className="mt-0.5 text-[11px] font-medium text-zinc-500">PG · Serie A</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="rounded-md border border-white/8 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
              PPG 14.2
            </span>
            <span className="rounded-md border border-white/8 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
              AST 5.1
            </span>
          </div>
        </div>
      </div>
      <p className="mt-3 border-t border-white/8 pt-3 text-center text-[11px] font-semibold text-accent">
        Scheda completa →
      </p>
    </div>
  );
}

export function TalentBoard() {
  return (
    <section
      id="talent-board"
      className="relative scroll-mt-24 border-t border-white/10 bg-zinc-950 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_80%_20%,rgba(0,229,160,0.06),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Talent Board</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight">
              Scopri i talenti,{" "}
              <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">una mini scheda alla volta</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              La Talent Board è uno spazio pubblico dove chiunque può sfogliare le <strong className="font-medium text-zinc-200">mini schede</strong>{" "}
              dei giocatori: dati essenziali, ruolo e contesto competitivo in pochi secondi. Ogni card include il{" "}
              <strong className="font-medium text-zinc-200">link al sito completo</strong> dell’atleta — la stessa vetrina
              professionale che usi con club, scouting e sponsor.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li
                  key={h.title}
                  className="flex gap-3 rounded-2xl border border-white/8 bg-black/30 px-4 py-3.5 backdrop-blur-sm sm:px-5"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/15 text-[10px] font-bold text-accent"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{h.title}</p>
                    <p className="mt-0.5 text-sm leading-snug text-zinc-500">{h.hint}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/talent-board"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95"
              >
                Esplora Talent Board
                <span className="ml-2" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="#contatti"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/28 hover:bg-white/10"
              >
                Vuoi comparire sulla board?
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-4 rounded-4xl bg-accent/5 blur-2xl"
              aria-hidden
            />
            <div className="relative space-y-4">
              <MiniCardPreview className="relative z-10 rotate-[-1.5deg] transform" />
              <MiniCardPreview className="relative z-0 -mt-8 ml-6 mr-2 rotate-2 scale-[0.97] opacity-90 sm:-mt-10 sm:ml-10" />
              <p className="pt-2 text-center text-[11px] font-medium uppercase tracking-wider text-zinc-600">
                Anteprima stile · dati reali sulla board
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
