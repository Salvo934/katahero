import Link from "next/dist/client/link";

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

const athleteOffer = {
  badge: "Per atleti",
  title: "Il tuo profilo ufficiale, oltre il feed",
  lead:
    "I social mescolano tutto in una sequenza infinita: **carriera**, **numeri** e **valore per sponsor** si perdono tra storie e reel. Ti serve un **sito** ordinato e aggiornabile — il link che mandi a club, agenti e brand quando contano le cose serie.",
  pillars: [
    { label: "Carriera", hint: "Percorso e risultati" },
    { label: "Valore", hint: "Cosa offri a chi investe su di te" },
    { label: "Prossimi step", hint: "Match, obiettivi, calendario" },
  ],
  points: [
    "Struttura **chiara**: biografia, palmares, media e obiettivi stagionali sempre trovabili",
    "**Foto e video** (highlight, backstage, comunicati) integrati senza che il messaggio si disperda",
    "**Statistiche e risultati** leggibili: chi ti valuta capisce il percorso in pochi scroll",
    "Sezione **sponsor / partnership** con loghi, testi e materiali pronti per decisioni rapide",
    "**Storytelling** coerente: stessa voce sul sito e sui social, senza contraddizioni",
    "**Un solo link** professionale da mettere in bio, firme mail e presentazioni",
  ],
};

function RichLine({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-zinc-200">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
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
            Ordine alla tua visibilità — prima di club e sponsor
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Il feed è utile ogni giorno, ma è <strong className="font-medium text-zinc-200">rumoroso</strong>: non
            sostituisce una vetrina dove carriera, numeri e collaborazioni si capiscono in un colpo d&apos;occhio. Il
            sito è il <strong className="font-medium text-zinc-200">punto di riferimento</strong> che usi quando la
            posta in gioco è alta.
          </p>
        </div>

        <article className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-accent/20 bg-linear-to-b from-zinc-900/80 to-black/50 p-8 shadow-[0_24px_80px_-40px_rgba(0,229,160,0.35)] ring-1 ring-white/10 sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-linear-to-br from-emerald-500/15 to-transparent blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                  {athleteOffer.badge}
                </span>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/30">
                  <IconAthlete className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl lg:text-[1.65rem]">
                    {athleteOffer.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                <RichLine text={athleteOffer.lead} />
              </p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tre pilastri del profilo">
                {athleteOffer.pillars.map((p) => (
                  <li
                    key={p.label}
                    className="rounded-2xl border border-white/10 bg-white/4 px-3 py-2 text-left shadow-sm backdrop-blur-sm"
                  >
                    <p className="text-xs font-semibold text-white">{p.label}</p>
                    <p className="text-[11px] text-zinc-500">{p.hint}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Cosa mettiamo in fila</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
                {athleteOffer.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 rounded-2xl border border-white/5 bg-black/25 px-4 py-3 sm:px-4 sm:py-3.5"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/15 text-[10px] font-bold text-accent"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>
                      <RichLine text={point} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/2 px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="max-w-2xl text-sm text-zinc-400">
            Oltre al sito: identità, piani editoriali, media kit e supporto continuativo — con la stessa linea
            narrativa ovunque.
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
