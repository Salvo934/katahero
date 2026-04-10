import { whatsappPackageUrl } from "@/lib/site";

type Tier = {
  name: "Starter" | "Pro" | "Elite";
  /** Titolo con emoji (es. 🥉 Starter) */
  heading: string;
  tagline: string;
  blurb: string;
  setupEuro: number;
  monthlyEuro: number;
  features: string[];
  callout: string;
  highlighted: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    heading: "🥉 Starter",
    tagline: "Il tuo primo passo da atleta o personal trainer",
    blurb:
      "Parti subito con una presenza online pulita, credibile e pronta per essere condivisa con squadre, clienti o contatti.",
    setupEuro: 149,
    monthlyEuro: 5.99,
    features: [
      "Sito one-page professionale (3–4 sezioni)",
      "Identità base (logo, colori, font)",
      "Bio ottimizzata (atleta o personal trainer)",
      "Link in bio pronto per Instagram",
      "Hosting + gestione inclusi",
    ],
    callout: "Perfetto per iniziare e farti trovare online subito",
    highlighted: false,
  },
  {
    name: "Pro",
    heading: "🥈 Pro ⭐",
    tagline: "Il tuo profilo completo da atleta o PT",
    blurb:
      "Diventa credibile agli occhi di squadre, sponsor o clienti con un sito professionale fatto per rappresentarti davvero.",
    setupEuro: 299,
    monthlyEuro: 12.99,
    features: [
      "Sito completo multi-sezione (5–6 sezioni)",
      "Highlights, stats o servizi, risultati, bio, contatti",
      "Design personalizzato e più professionale",
      "Ottimizzato mobile (perfetto da condividere ovunque)",
      "2 aggiornamenti mensili inclusi",
    ],
    callout: "Perfetto per chi vuole fare il salto di livello",
    highlighted: true,
  },
  {
    name: "Elite",
    heading: "🥇 Elite",
    tagline: "Il tuo brand professionale, senza compromessi",
    blurb:
      "Per atleti e personal trainer che vogliono distinguersi davvero e avere un’immagine di alto livello pronta per opportunità importanti.",
    setupEuro: 449,
    monthlyEuro: 19.99,
    features: [
      "Sito completo su misura (7–8 sezioni)",
      "Highlights, stats o servizi, risultati, gallery, contatti",
      "Design premium e personal branding avanzato",
      "Ottimizzato per squadre, sponsor o acquisizione clienti",
      "4 aggiornamenti mensili inclusi",
      "Supporto prioritario",
      "Consulenza su contenuti e posizionamento",
    ],
    callout: "Per chi vuole essere preso sul serio nel proprio settore",
    highlighted: false,
  },
];

function formatSetupEuro(n: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

function formatMonthlyEuro(n: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
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

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto_auto] lg:items-stretch lg:gap-x-6 lg:gap-y-0">
          {tiers.map((t) => {
            const waHref = whatsappPackageUrl(t.name, t.setupEuro, t.monthlyEuro);
            return (
              <article
                key={t.name}
                className={`relative flex flex-col gap-8 rounded-3xl border p-8 transition hover:-translate-y-0.5 lg:grid lg:h-full lg:row-span-5 lg:grid-rows-subgrid ${
                  t.highlighted
                    ? "border-accent/45 bg-linear-to-b from-accent/12 via-zinc-900/80 to-zinc-950 shadow-[0_0_56px_-16px_rgba(0,229,160,0.4)] ring-1 ring-accent/20"
                    : "border-white/10 bg-white/2 hover:border-white/20"
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow-[0_8px_24px_-8px_rgba(0,229,160,0.6)]">
                    Consigliato
                  </span>
                )}

                <header className="min-h-0 text-center lg:text-left">
                  <h3 className="font-display text-2xl font-bold text-white">{t.heading}</h3>
                  <p className="mt-1 text-sm font-medium text-accent/90">{t.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{t.blurb}</p>
                </header>

                <div className="grid min-h-0 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">💰 Una tantum</p>
                    <p className="mt-1 font-display text-2xl font-bold text-white">{formatSetupEuro(t.setupEuro)}</p>
                  </div>
                  <div
                    className={`rounded-2xl border p-4 ${
                      t.highlighted ? "border-accent/35 bg-accent/8" : "border-white/10 bg-white/3"
                    }`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-accent/90">🔁 Abbonamento</p>
                    <p className="mt-1 font-display text-2xl font-bold text-accent">
                      {formatMonthlyEuro(t.monthlyEuro)}
                      <span className="text-base font-semibold text-accent/80">/mese</span>
                    </p>
                  </div>
                </div>

                <ul className="min-h-0 space-y-3 border-t border-white/10 pt-8 text-sm text-zinc-300">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                        ✔
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-medium text-zinc-200">
                  <span aria-hidden>👉 </span>
                  {t.callout}
                </p>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex justify-center rounded-full px-5 py-3.5 text-center text-sm font-semibold transition ${
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

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-accent/25 bg-accent/5 px-6 py-8 text-center ring-1 ring-accent/15 sm:px-8">
          <p className="text-2xl" aria-hidden>
            👉
          </p>
          <p className="font-display mt-3 text-lg font-bold text-white sm:text-xl">Attivazione in 24–48 ore</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Facciamo tutto noi. Tu ti concentri solo sul tuo lavoro
          </p>
          <p className="mt-3 text-sm font-medium text-accent sm:text-base">Perfetto per atleti e personal trainer</p>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          I valori sono da intendersi IVA esclusa o inclusa in base alla proposta. L’abbonamento è mensile con rinnovo
          automatico; disdetta secondo condizioni in contratto.
        </p>
      </div>
    </section>
  );
}
