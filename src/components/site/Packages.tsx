import { whatsappPackageUrl } from "@/lib/site";

type Tier = {
  name: "Start" | "Pro" | "Elite";
  heading: string;
  tagline: string;
  blurb: string;
  monthlyEuro: number;
  features: string[];
  callout: string;
  highlighted: boolean;
  /** Titolo sopra l’elenco feature (es. “Cosa ottieni”). */
  featuresSectionTitle?: string;
};

const tiers: Tier[] = [
  {
    name: "Start",
    heading: "🥉 START",
    tagline: "La base per presentarti online in modo chiaro e professionale",
    blurb: "",
    monthlyEuro: 24.99,
    featuresSectionTitle: "🎯 Cosa ottieni",
    features: [
      "Sito essenziale e curato (4–5 sezioni)",
      "Struttura chiara: chi sei, cosa fai, come contattarti",
      "Hosting e gestione tecnica inclusi",
      "1 aggiornamento al mese su richiesta",
      "Ottimizzato per mobile e facile da condividere (anche da Instagram)",
    ],
    callout: "Ideale se vuoi qualcosa di semplice, ma fatto bene.",
    highlighted: false,
  },
  {
    name: "Pro",
    heading: "🥈 PRO ⭐",
    tagline: "Costruisci un’immagine da atleta professionista online",
    blurb: "",
    monthlyEuro: 79,
    featuresSectionTitle: "🎯 Cosa ottieni",
    features: [
      "Sito personale completo e personalizzato (6 sezioni)",
      "Struttura pensata per farti presentare al meglio",
      "Ottimizzazione del tuo profilo Instagram",
      "Sistema di contenuti per valorizzare la tua immagine",
      "Instagram: 1 contenuto a settimana (4–5 al mese) pronto da pubblicare",
      "Design coerente tra sito e social",
      "Hosting e gestione inclusi",
      "2 aggiornamenti mensili su richiesta",
    ],
    callout: "Ideale se vuoi costruire una presenza online solida.",
    highlighted: true,
  },
  {
    name: "Elite",
    heading: "🥇 ELITE",
    tagline: "Massimizza la tua visibilità e accelera la tua crescita",
    blurb: "",
    monthlyEuro: 149,
    featuresSectionTitle: "🎯 Cosa ottieni",
    features: [
      "Tutto incluso nel piano PRO",
      "Instagram: 2 contenuti a settimana (8–10 al mese) pronti da pubblicare",
      "Maggiore varietà e frequenza di contenuti",
      "Direzione strategica più avanzata",
      "Priorità nella gestione e supporto",
    ],
    callout: "Ideale se vuoi crescere più velocemente rispetto agli altri.",
    highlighted: false,
  },
];

function formatEuro(n: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

function annualEuro(monthlyEuro: number) {
  return monthlyEuro * 10;
}

/** Stesso blocco prezzi per tutti i tier — niente varianti per “highlighted”. */
function TierPricing({ monthlyEuro }: { monthlyEuro: number }) {
  const annual = annualEuro(monthlyEuro);
  const saving = monthlyEuro * 2;

  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
      <div className="space-y-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Mensile</p>
          <p className="mt-1 font-display text-[1.65rem] font-bold leading-none tabular-nums tracking-tight text-white sm:text-[1.75rem]">
            {formatEuro(monthlyEuro)}
            <span className="text-base font-semibold text-zinc-500">/mese</span>
          </p>
        </div>

        <div className="h-px bg-white/10" aria-hidden />

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Annuale <span className="font-normal normal-case tracking-normal text-accent/90">(2 mesi in regalo)</span>
          </p>
          <p className="mt-1 font-display text-[1.65rem] font-bold leading-none tabular-nums tracking-tight text-accent sm:text-[1.75rem]">
            {formatEuro(annual)}
            <span className="text-base font-semibold text-accent/75">/anno</span>
          </p>
          <p className="mt-2 text-xs leading-snug text-zinc-500">
            Risparmi <span className="font-medium text-zinc-300">{formatEuro(saving)}</span> vs 12 mensilità
          </p>
        </div>
      </div>
    </div>
  );
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
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">abbonamento flessibile</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Paghi <strong className="font-medium text-zinc-200">ogni mese</strong> oppure{" "}
            <strong className="font-medium text-zinc-200">l&apos;anno intero</strong> con due mesi in regalo. Scegli il
            piano e scrivici su WhatsApp: ti confermiamo i dettagli.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((t) => {
            const waHref = whatsappPackageUrl(t.name, t.monthlyEuro, t.tagline);
            return (
              <article
                key={t.name}
                className={`relative flex h-full flex-col rounded-3xl border px-6 pb-6 pt-10 sm:px-7 sm:pb-7 sm:pt-11 ${
                  t.highlighted
                    ? "border-accent/35 bg-zinc-900/50 ring-1 ring-accent/25 shadow-[0_20px_60px_-28px_rgba(0,229,160,0.45)]"
                    : "border-white/10 bg-zinc-900/35 hover:border-white/16"
                }`}
              >
                {t.highlighted ? (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black shadow-[0_8px_24px_-8px_rgba(0,229,160,0.55)]">
                    Consigliato
                  </span>
                ) : null}

                <div className="flex flex-1 flex-col gap-4 text-center">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white">{t.heading}</h3>
                    <p className="mt-2 text-sm font-medium leading-snug text-zinc-400">{t.tagline}</p>
                  </div>

                  <TierPricing monthlyEuro={t.monthlyEuro} />

                  {t.blurb ? <p className="text-sm leading-relaxed text-zinc-400">{t.blurb}</p> : null}

                  <div className="flex flex-1 flex-col border-t border-white/10 pt-5 text-left">
                    {t.featuresSectionTitle ? (
                      <p className="mb-3 text-sm font-semibold text-zinc-100">{t.featuresSectionTitle}</p>
                    ) : null}
                    <ul className="flex-1 space-y-2.5 text-sm leading-relaxed text-zinc-300">
                      {t.features.map((f) => (
                        <li key={f} className="flex gap-3">
                          <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                            ✔
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-center text-sm font-medium leading-snug text-zinc-200">
                      <span aria-hidden>👉 </span>
                      {t.callout}
                    </p>
                  </div>
                </div>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex w-full shrink-0 items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                    t.highlighted
                      ? "bg-accent text-black shadow-[0_12px_32px_-12px_rgba(0,229,160,0.5)] hover:brightness-110"
                      : "border border-white/18 bg-white/5 text-white hover:border-white/28 hover:bg-white/10"
                  }`}
                >
                  Scegli {t.name}
                </a>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-accent/25 bg-accent/5 px-6 py-8 text-center ring-1 ring-accent/15 sm:px-8">
          <p className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
            In 24–48 ore hai una presenza online completa
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Sito personale & contenuti social progettati per valorizzare la tua immagine da atleta.
          </p>
          <p className="mt-3 text-sm font-medium text-zinc-200 sm:text-base">Tu ti concentri sulla performance.</p>
          <p className="mt-2 text-sm font-medium text-zinc-200 sm:text-base">
            Noi costruiamo come vieni percepito online.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Un solo link. Tutto il tuo valore in un posto.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
            E contenuti social pensati per farti emergere ogni settimana.
          </p>
          <p className="mt-5 text-sm font-medium text-accent sm:text-base">
            <span aria-hidden>👉 </span>
            Perfetto per chi vuole essere preso più sul serio online
          </p>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          I valori sono da intendersi IVA esclusa o inclusa in base alla proposta. Abbonamento mensile o annuale (10
          mensilità all&apos;anno); rinnovo e disdetta secondo condizioni in contratto.
        </p>
      </div>
    </section>
  );
}
