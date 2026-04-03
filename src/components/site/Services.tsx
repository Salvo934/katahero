import Link from "next/link";

function IconAthlete({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function IconPt({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

const audiences = [
  {
    id: "atleti",
    badge: "Atleti",
    title: "Il tuo sito, la tua storia completa",
    icon: IconAthlete,
    accent: "from-emerald-500/20 to-transparent",
    ring: "ring-emerald-500/25",
    lead:
      "I social sono confusionari: feed, storie e algoritmi mescolano tutto e non raccontano davvero carriera, numeri e valore per gli sponsor. Noi realizziamo **siti web** pensati per la **visibilità** di chi compete: un punto fermo dove mostrare chi sei, cosa hai fatto e dove vuoi arrivare.",
    points: [
      "Struttura chiara: carriera, risultati, prossimi match o obiettivi stagionali",
      "Aggiornamenti **foto e video** (highlight, backstage, comunicati) senza perdere il filo",
      "**Statistiche** e numeri sempre leggibili: chi ti segue capisce il percorso",
      "Sezione **sponsor / partnership** e materiali ordinati per chi vuole investire su di te",
      "Organizzazione dei contenuti: meno rumore dei social, **un solo link** che racconta tutto",
    ],
  },
  {
    id: "pt",
    badge: "Personal trainer",
    title: "Da visibilità a clienti — con portfolio ordinato",
    icon: IconPt,
    accent: "from-violet-500/20 to-transparent",
    ring: "ring-violet-500/25",
    lead:
      "Anche per i PT i social spesso non bastano: post sparsi, prove social sepolte, messaggio poco chiaro. Costruiamo un **sito** che ti fa **trovare**, spiega servizi e metodo e mette in fila un **portfolio** credibile — così la visibilità diventa richieste e appuntamenti.",
    points: [
      "Presenza online **professionale**: servizi, zone, contatti e call to action chiare",
      "**Portfolio** organizzato: prima/dopo, percorsi, specializzazioni",
      "Sezioni pensate per **convertire** chi cerca un PT nella tua città o online",
      "Recensioni, risultati e autorità raccontati con ordine — non solo nel feed",
      "Base solida per ads, Google e passaparola: tutto punta al sito",
    ],
  },
];

function RichLine({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={part} className="font-semibold text-zinc-200">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </>
  );
}

export function Services() {
  return (
    <section
      id="servizi"
      className="relative scroll-mt-24 border-t border-white/10 bg-zinc-950 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,229,160,0.05)_0%,transparent_45%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Servizi</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Siti web che danno ordine alla tua visibilità
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            I social vanno bene per il giorno dopo giorno, ma sono <strong className="font-medium text-zinc-200">rumorosi</strong>:
            non raccontano in modo completo carriera, numeri, sponsor o il tuo metodo. Il sito è la{" "}
            <strong className="font-medium text-zinc-200">casa</strong> in cui mettere tutto — aggiornabile, leggibile,
            pronta per chi vuole seguirti o collaborare con te.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-8">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <article
                key={a.id}
                className={`relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:p-10 ${a.ring} ring-1`}
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-linear-to-br ${a.accent} blur-3xl`}
                  aria-hidden
                />
                <div className="relative">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                    {a.badge}
                  </span>
                  <div className="mt-6 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/25">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">{a.title}</h3>
                    </div>
                  </div>
                  <p className="relative mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    <RichLine text={a.lead} />
                  </p>
                  <ul className="relative mt-8 space-y-3 border-t border-white/10 pt-8 text-sm text-zinc-300">
                    {a.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>
                          <RichLine text={point} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/2 px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="max-w-2xl text-sm text-zinc-400">
            Oltre al sito: su misura possiamo integrare identità, contenuti, media kit e supporto — sempre con lo stesso filo
            narrativo.
          </p>
          <Link
            href="#pacchetti"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/10"
          >
            Vedi i pacchetti
          </Link>
        </div>
      </div>
    </section>
  );
}
