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
    monthlyEuro: 8.99,
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
    heading: "🥈 Pro ⭐",
    tagline: "Il tuo profilo che converte clienti",
    blurb:
      "Il piano più scelto da chi vuole trasformare il proprio link in uno strumento di lavoro.",
    monthlyEuro: 18.99,
    features: [
      "Sito completo e più personalizzato (6–7 sezioni)",
      "Struttura pensata per presentarti al meglio",
      "2 aggiornamenti al mese su richiesta",
      "Design più curato e ottimizzato",
      "Maggiore attenzione a performance e chiarezza",
    ],
    callout: "Perfetto se vuoi fare sul serio e attirare clienti.",
    highlighted: true,
  },
  {
    name: "Elite",
    heading: "🥇 ELITE",
    tagline: "Il tuo brand, pronto per crescere",
    blurb: "Pensato per chi vuole distinguersi davvero e avere un supporto costante.",
    monthlyEuro: 28.99,
    features: [
      "Sito avanzato e completo (7–8 sezioni)",
      "Personalizzazione più spinta",
      "4 aggiornamenti al mese su richiesta",
      "Supporto prioritario",
      "Ottimizzazione continua del contenuto",
      "Struttura pensata anche per sponsor e collaborazioni",
    ],
    callout: "Ideale se vuoi un’immagine professionale e sempre aggiornata.",
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

function TierPricing({
  monthlyEuro,
  highlighted,
}: {
  monthlyEuro: number;
  highlighted: boolean;
}) {
  const annual = annualEuro(monthlyEuro);
  const saving = monthlyEuro * 2;

  return (
    <div
      className={`rounded-2xl border px-5 py-5 ${
        highlighted
          ? "border-accent/40 bg-zinc-900/60 ring-1 ring-accent/25"
          : "border-white/12 bg-zinc-900/40"
      }`}
    >
      <div className="space-y-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Mensile</p>
          <p className="mt-1.5 font-display text-3xl font-bold tabular-nums tracking-tight text-white">
            {formatEuro(monthlyEuro)}
            <span className="text-lg font-semibold text-zinc-400">/mese</span>
          </p>
        </div>

        <div className="h-px w-full bg-white/10" aria-hidden />

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
            Annuale <span className="font-normal normal-case tracking-normal text-zinc-500">(2 mesi in regalo)</span>
          </p>
          <p className="mt-1.5 font-display text-2xl font-bold tabular-nums tracking-tight text-accent sm:text-3xl">
            {formatEuro(annual)}
            <span className="text-base font-semibold text-accent/80">/anno</span>
          </p>
          <p className="mt-2 text-xs leading-snug text-zinc-500">
            Risparmi <span className="font-medium text-zinc-300">{formatEuro(saving)}</span> rispetto a 12 mensilità
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

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:gap-8 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((t) => {
            const waHref = whatsappPackageUrl(t.name, t.monthlyEuro, t.tagline);
            return (
              <article
                key={t.name}
                className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                  t.highlighted
                    ? "border-accent/50 bg-linear-to-b from-accent/12 to-zinc-950 pt-9 shadow-[0_0_48px_-20px_rgba(0,229,160,0.45)] ring-1 ring-accent/20"
                    : "border-white/10 bg-zinc-950/80 pt-6 hover:border-white/18"
                }`}
              >
                {t.highlighted && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow-[0_8px_24px_-8px_rgba(0,229,160,0.6)]">
                    Consigliato
                  </span>
                )}

                <div className="flex flex-1 flex-col gap-5">
                  <div className="text-center">
                    <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{t.heading}</h3>
                    <p className="mt-2 text-sm font-medium leading-snug text-accent/90">{t.tagline}</p>
                  </div>

                  <TierPricing monthlyEuro={t.monthlyEuro} highlighted={t.highlighted} />

                  <p className="text-center text-sm leading-relaxed text-zinc-400">{t.blurb}</p>

                  <ul className="space-y-2.5 border-t border-white/10 pt-5 text-sm leading-relaxed text-zinc-300">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                          ✔
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-center text-sm font-medium leading-snug text-zinc-200">
                    <span aria-hidden>👉 </span>
                    {t.callout}
                  </p>
                </div>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex w-full shrink-0 justify-center rounded-full px-5 py-3.5 text-center text-sm font-semibold transition ${
                    t.highlighted
                      ? "bg-accent text-black shadow-[0_12px_40px_-12px_rgba(0,229,160,0.55)] hover:brightness-110"
                      : "border border-white/20 bg-transparent text-white hover:bg-white/10"
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
