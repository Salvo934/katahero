import { whatsappPackageUrl } from "@/lib/site";

type Tier = {
  name: "Starter" | "Pro" | "Elite";
  tagline: string;
  blurb: string;
  setupLabel: string;
  setupEuro: number;
  setupHint: string;
  subLabel: string;
  monthlyEuro: number;
  /** Aggiornamenti al sito inclusi nell’abbonamento (per mese). */
  updatesPerMonth: number;
  subHint: string;
  features: string[];
  highlighted: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    tagline: "Presenza essenziale, subito professionale",
    blurb:
      "Perfetto per chi vuole ordine visivo e una base solida: logo, palette e pagina che raccontano chi sei, con supporto leggero nel tempo.",
    setupLabel: "Prezzo sito",
    setupEuro: 99,
    setupHint: "Progetto one-shot, consegnato e pronto all’uso",
    subLabel: "Abbonamento",
    monthlyEuro: 9,
    updatesPerMonth: 1,
    subHint: "Assistenza, contenuti e aggiornamenti sito inclusi nel piano",
    features: [
      "Logo, colori e tipografia",
      "One-page o mini-sito (template su misura)",
      "Bio social e link in bio",
      "Pacchetto post starter (template)",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Il brand completo che lavora ogni giorno",
    blurb:
      "Identità forte, piano editoriale e contenuti ricorrenti: il pacchetto più richiesto da atleti e PT che vogliono crescita costante e coerenza su tutti i canali.",
    setupLabel: "Prezzo sito",
    setupEuro: 199,
    setupHint: "Include identità, sito/landing e kit digitale sponsor",
    subLabel: "Abbonamento",
    monthlyEuro: 19,
    updatesPerMonth: 3,
    subHint: "Piano editoriale, contenuti, report e priorità su WhatsApp",
    features: [
      "Identità visiva completa + linee guida",
      "Landing o sito multi-sezione",
      "Piano editoriale 30 giorni + revisioni",
      "Storytelling e tone of voice",
      "Mini media kit digitale (PDF)",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    tagline: "Massima visibilità e partnership",
    blurb:
      "Per chi ha esigenze da sponsor, eventi e stampa: direzione creativa, produzione e supporto premium con tempi dedicati.",
    setupLabel: "Prezzo sito",
    setupEuro: 299,
    setupHint: "Shooting / video, landing avanzata o e-commerce leggero",
    subLabel: "Abbonamento",
    monthlyEuro: 29,
    updatesPerMonth: 4,
    subHint: "Content production, sponsor deck e priorità totale",
    features: [
      "Tutto il Pro, con priorità sui tempi",
      "Direzione creativa e set foto/video",
      "Media kit stampa & digitale per sponsor",
      "Supporto eventi e partnership",
      "Revisioni incluse in fascia premium",
    ],
    highlighted: false,
  },
];

function formatEuro(n: number) {
  return `€${n}`;
}

function updatesLabel(n: number): string {
  if (n === 1) return "1 aggiornamento al sito al mese";
  return `${n} aggiornamenti al sito al mese`;
}

export function Packages() {
  return (
    <section
      id="pacchetti"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-zinc-950 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,229,160,0.07),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Pacchetti</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Prezzi chiari,{" "}
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">modello ibrido</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Investimento iniziale per il <strong className="font-medium text-zinc-200">sito</strong>, più{" "}
            <strong className="font-medium text-zinc-200">abbonamento mensile</strong> per aggiornamenti, contenuti e
            assistenza. Scegli il piano e scrivici su WhatsApp: ti confermiamo i dettagli.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {tiers.map((t) => {
            const waHref = whatsappPackageUrl(t.name, t.setupEuro, t.monthlyEuro);
            return (
              <article
                key={t.name}
                className={`relative flex flex-col rounded-3xl border p-8 transition hover:-translate-y-0.5 ${
                  t.highlighted
                    ? "border-accent/45 bg-linear-to-b from-accent/12 via-zinc-900/80 to-zinc-950 shadow-[0_0_56px_-16px_rgba(0,229,160,0.4)] ring-1 ring-accent/20"
                    : "border-white/10 bg-white/2 hover:border-white/20"
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow-[0_8px_24px_-8px_rgba(0,229,160,0.6)]">
                    Più scelto
                  </span>
                )}

                <header className="text-center lg:text-left">
                  <h3 className="font-display text-2xl font-bold text-white">{t.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent/90">{t.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{t.blurb}</p>
                </header>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{t.setupLabel}</p>
                    <p className="mt-1 font-display text-2xl font-bold text-white">{formatEuro(t.setupEuro)}</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-500">{t.setupHint}</p>
                  </div>
                  <div
                    className={`rounded-2xl border p-4 ${
                      t.highlighted ? "border-accent/35 bg-accent/8" : "border-white/10 bg-white/3"
                    }`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-accent/90">{t.subLabel}</p>
                    <p className="mt-1 font-display text-2xl font-bold text-accent">
                      {formatEuro(t.monthlyEuro)}
                      <span className="text-base font-semibold text-accent/80">/mese</span>
                    </p>
                    <p className="mt-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-[11px] font-medium leading-snug text-zinc-200">
                      <span className="text-accent">Incluso:</span> {updatesLabel(t.updatesPerMonth)}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-400">{t.subHint}</p>
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-3 border-t border-white/10 pt-8 text-sm text-zinc-300">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex justify-center rounded-full px-5 py-3.5 text-center text-sm font-semibold transition ${
                    t.highlighted
                      ? "bg-accent text-black shadow-[0_12px_40px_-12px_rgba(0,229,160,0.55)] hover:brightness-110"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  Scegli {t.name}
                </a>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          I valori sono da intendersi IVA esclusa o inclusa in base alla proposta. L’abbonamento è mensile con rinnovo
          automatico; disdetta secondo condizioni in contratto.
        </p>
      </div>
    </section>
  );
}
