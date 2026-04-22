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
};

const tiers: Tier[] = [
  {
    name: "Start",
    heading: "🥉 START",
    tagline: "Il tuo sito online, senza complicazioni",
    blurb: "Perfetto per iniziare ad avere una presenza professionale con un unico link.",
    monthlyEuro: 24.99,
    features: [
      "Sito essenziale e pulito (4–5 sezioni)",
      "Struttura pronta all’uso",
      "Hosting e gestione inclusi",
      "1 piccolo aggiornamento al mese",
      "Ottimizzato per mobile",
    ],
    callout: "Ideale se vuoi qualcosa di semplice, ma fatto bene.",
    highlighted: false,
  },
  {
    name: "Pro",
    heading: "🥈 PRO ⭐",
    tagline: "Profilo professionale che lavora per te",
    blurb:
      "Sito e social allineati: presenti al meglio e dai una ragione concreta a chi vuole contattarti.",
    monthlyEuro: 79,
    features: [
      "Sito completo e personalizzato (6 sezioni)",
      "Struttura pensata per trasformare visite in contatti",
      "2 aggiornamenti mensili su richiesta",
      "Hosting e gestione inclusi",
      "Instagram: 3 post + 4 storie al mese",
      "Design curato e coerente con il tuo profilo",
      "Ottimizzazione per chiarezza e performance",
    ],
    callout: "Pensato per chi vuole usare il proprio profilo per trovare clienti e opportunità.",
    highlighted: true,
  },
  {
    name: "Elite",
    heading: "🥇 ELITE",
    tagline: "Brand forte, opportunità concrete",
    blurb:
      "Il massimo per sito, contenuti e immagine: pensato per chi vuole farsi notare da sponsor e partner seri.",
    monthlyEuro: 159,
    features: [
      "Sito avanzato e completo (7–8 sezioni)",
      "Personalizzazione spinta",
      "4 aggiornamenti mensili su richiesta",
      "Hosting e gestione inclusi",
      "Instagram: 4 post + 8 storie al mese",
      "Supporto prioritario",
      "Ottimizzazione continua",
      "Struttura orientata a sponsor e collaborazioni",
    ],
    callout: "Per atleti che vogliono crescere il proprio brand e ottenere opportunità concrete.",
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

                  <p className="text-sm leading-relaxed text-zinc-400">{t.blurb}</p>

                  <div className="flex flex-1 flex-col border-t border-white/10 pt-5 text-left">
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
          <p className="text-2xl" aria-hidden>
            👉
          </p>
          <p className="font-display mt-3 text-lg font-bold text-white sm:text-xl">Attivazione in 24–48 ore</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Facciamo tutto noi. Tu ti concentri solo sul tuo lavoro
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Un solo link. Tutto quello che ti serve per presentarti, crescere e farti trovare.
          </p>
          <p className="mt-3 text-sm font-medium text-accent sm:text-base">Perfetto per atleti e personal trainer</p>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          I valori sono da intendersi IVA esclusa o inclusa in base alla proposta. Abbonamento mensile o annuale (10
          mensilità all&apos;anno); rinnovo e disdetta secondo condizioni in contratto.
        </p>
      </div>
    </section>
  );
}
