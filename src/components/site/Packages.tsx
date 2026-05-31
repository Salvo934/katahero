import { whatsappPrefilledUrl } from "@/lib/site";

/** Da stringa tipo «€99,99» → equivalente mensile (12 mesi). */
function monthlyEquivalentFromLaunch(launch: string): string | null {
  const normalized = launch.replace(/[^\d,]/g, "").replace(",", ".");
  const annual = Number(normalized);
  if (!Number.isFinite(annual) || annual <= 0) return null;
  return (annual / 12).toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

type Plan = {
  name: string;
  badge: string;
  promoPill?: string;
  subtitle?: string;
  audienceLine?: string;
  salesLine: string;
  pricing: {
    launch: string;
    launchNote: string;
  };
  whyBuyTitle: string;
  whyBuy: string;
  featuresSectionTitle: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
  tier: "card" | "pro";
};

const plans: Plan[] = [
  {
    name: "KATA HERO Card",
    badge: "Singolo atleta",
    promoPill: "Lancio · primi 20",
    subtitle: "La tua figurina digitale da atleta.",
    audienceLine:
      "Per chi vuole una card professionale e un profilo online da condividere ovunque.",
    salesLine:
      "La tua card digitale personalizzata con profilo atleta online: un solo link per presentarti in modo professionale a squadre, sponsor, scout e follower.",
    pricing: {
      launch: "€99,99",
      launchNote: "Prezzo lancio primi 20 atleti · /anno",
    },
    whyBuyTitle: "Perché dovresti comprarlo",
    whyBuy:
      "Perché non è solo un “sito”. È la tua figurina professionale, con un link personale da condividere ovunque.",
    featuresSectionTitle: "Include",
    features: [
      "Card digitale personalizzata",
      "Profilo atleta online per 12 mesi",
      "Link personale da mettere in bio Instagram",
      "Foto principale",
      "Bio atleta",
      "Ruolo, numero, squadra, altezza, anno",
      "Social link",
      "Contatto diretto",
      "3 aggiornamenti gratuiti all’anno: ottobre, febbraio, giugno",
    ],
    ctaLabel: "Attiva la KATA HERO Card",
    whatsappMessage:
      "Ciao! Vorrei attivare la KATA HERO Card (€99,99/anno lancio). Mi dite tempi e materiali necessari?",
    tier: "card",
  },
  {
    name: "KATA HERO Pro",
    badge: "Singolo atleta",
    promoPill: "Card + Social Kit",
    subtitle: "Il tuo profilo atleta + contenuti social pronti.",
    audienceLine:
      "Per chi vuole curare la propria immagine anche su Instagram, senza dover creare grafiche da zero.",
    salesLine:
      "Oltre alla card e al profilo online, nel tuo sito trovi le grafiche social già pronte: le apri e le condividi con un click nei momenti importanti della stagione.",
    pricing: {
      launch: "€149,99",
      launchNote: "Prezzo lancio primi 20 atleti · /anno",
    },
    whyBuyTitle: "Perché dovresti comprarlo",
    whyBuy:
      "Perché non compri solo un profilo: è come avere un social media manager dentro il tuo sito — grafiche pronte, immagine curata e contenuti da condividere con un click su Instagram.",
    featuresSectionTitle: "Include",
    features: [
      "Tutto KATA HERO Card, più:",
      "Social Kit nel tuo sito web personale",
      "Grafiche personalizzate sempre nel profilo — condividibili con un click su Instagram",
      "Template pronti: Match Day, grande prestazione, compleanno",
      "Nuova stagione / nuova squadra, thank you post partita",
      "5 aggiornamenti gratuiti all’anno: ottobre, dicembre, febbraio, aprile, giugno",
    ],
    ctaLabel: "Attiva KATA HERO Pro",
    whatsappMessage:
      "Ciao! Vorrei attivare KATA HERO Pro (€149,99/anno lancio, card + Social Kit). Mi dite tempi e materiali necessari?",
    tier: "pro",
  },
];

const packageExtras = [
  {
    name: "Aggiornamento extra",
    description: "Modifica foto, bio, dati, social o numero fuori dalle finestre incluse",
    price: "€9,99",
  },
  {
    name: "Cambio squadra",
    description: "Aggiornamento squadra, campionato, numero e dati principali",
    price: "€24,99",
  },
  {
    name: "Nuova card",
    description: "Creazione di una nuova card digitale personalizzata",
    price: "€39,99",
  },
  {
    name: "Video highlight",
    description: "Inserimento di un video o reel nel profilo atleta",
    price: "€29,99",
  },
  {
    name: "Social Kit Extra",
    description: "5 template social aggiuntivi personalizzati",
    price: "€59,99",
  },
  {
    name: "Consegna prioritaria",
    description: "Lavorazione in giornata",
    price: "+ €34,99",
  },
] as const;

function FeatureCheck({ highlight }: { highlight?: boolean }) {
  return (
    <span
      className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded text-[9px] font-bold ${
        highlight ? "bg-accent/20 text-accent" : "bg-white/8 text-accent"
      }`}
      aria-hidden
    >
      ✓
    </span>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const monthlyLaunch = monthlyEquivalentFromLaunch(plan.pricing.launch);
  const isPro = plan.tier === "pro";

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border transition duration-300 ${
        isPro
          ? "border-accent/35 bg-linear-to-b from-accent/9 via-zinc-900/75 to-zinc-950 shadow-[0_0_0_1px_rgba(0,229,160,0.08),0_28px_80px_-40px_rgba(0,229,160,0.22)] hover:border-accent/50"
          : "border-white/12 bg-linear-to-b from-white/7 via-zinc-900/70 to-zinc-950 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.85)] hover:border-white/20"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${isPro ? "via-accent/70" : "via-white/25"} to-transparent`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl ${isPro ? "bg-accent/15" : "bg-white/5"}`}
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col p-6 sm:p-8">
        <header>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{plan.badge}</p>
            {plan.promoPill ? (
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[9px] font-bold tracking-wide ${
                  isPro
                    ? "border-accent/40 bg-accent/15 text-accent"
                    : "border-white/15 bg-white/8 text-zinc-300"
                }`}
              >
                {plan.promoPill}
              </span>
            ) : null}
          </div>
          <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-white">{plan.name}</h3>
          <p className="mt-1.5 text-sm font-semibold text-accent">{plan.subtitle}</p>
          <div className="mt-4 space-y-3">
            <p className="text-sm leading-relaxed text-zinc-400">{plan.audienceLine}</p>
            <p className="text-sm leading-relaxed text-zinc-200">{plan.salesLine}</p>
          </div>
        </header>

        <div
          className={`mt-6 rounded-2xl border p-4 sm:p-5 ${
            isPro ? "border-accent/30 bg-accent/7" : "border-white/10 bg-black/30"
          }`}
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Investimento annuo</p>
              <p className="font-display mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {plan.pricing.launch}
              </p>
              <p className="mt-1 text-xs leading-snug text-zinc-500">{plan.pricing.launchNote}</p>
            </div>
            <div
              className={`shrink-0 rounded-xl border px-3.5 py-2.5 text-right ${
                isPro ? "border-accent/25 bg-accent/10" : "border-white/10 bg-white/5"
              }`}
            >
              <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-500">Al mese</p>
              <p className="font-display text-xl font-bold text-accent sm:text-2xl">€{monthlyLaunch}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-1 flex-col border-t border-white/10 pt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {plan.featuresSectionTitle}
          </p>
          <ul className="mt-3 flex-1 space-y-1.5">
            {plan.features.map((f) => {
              const highlight = f.startsWith("Tutto KATA HERO Card");
              return (
                <li
                  key={f}
                  className={`flex gap-2.5 rounded-lg border px-3 py-2 text-sm leading-snug ${
                    highlight
                      ? "border-accent/25 bg-accent/8 font-semibold text-zinc-100"
                      : "border-white/6 bg-white/3 text-zinc-300"
                  }`}
                >
                  <FeatureCheck highlight={highlight} />
                  <span>{f}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 rounded-xl border border-white/8 bg-black/35 px-4 py-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{plan.whyBuyTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{plan.whyBuy}</p>
          </div>
        </div>
      </div>

      <div className="relative shrink-0 border-t border-white/10 bg-black/20 px-6 py-5 sm:px-8 sm:py-6">
        <a
          href={whatsappPrefilledUrl(plan.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3.5 text-center text-sm font-semibold transition hover:brightness-110 ${
            isPro
              ? "bg-accent text-black shadow-[0_10px_32px_-12px_rgba(0,229,160,0.55)]"
              : "border border-white/18 bg-white text-black hover:bg-zinc-100"
          }`}
        >
          {plan.ctaLabel}
        </a>
      </div>
    </article>
  );
}

function PackageExtrasTable() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/45 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-136 border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/3">
              <th className="px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:px-5">
                Extra
              </th>
              <th className="px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:px-5">
                Cosa include
              </th>
              <th className="px-4 py-3.5 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:px-5">
                Prezzo
              </th>
            </tr>
          </thead>
          <tbody>
            {packageExtras.map((row, i) => (
              <tr
                key={row.name}
                className={`border-b border-white/6 last:border-b-0 ${i % 2 === 1 ? "bg-black/15" : ""}`}
              >
                <td className="px-4 py-4 align-top font-semibold text-zinc-100 sm:px-5 sm:whitespace-nowrap">
                  {row.name}
                </td>
                <td className="px-4 py-4 align-top leading-relaxed text-zinc-400 sm:px-5">{row.description}</td>
                <td className="px-4 py-4 align-top text-right font-display text-base font-bold text-accent sm:px-5 sm:whitespace-nowrap">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
            Card e Pro per l&apos;atleta,{" "}
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">immagine pronta online</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Due livelli chiari: <strong className="font-semibold text-zinc-300">KATA HERO Card</strong> per la figurina
            digitale con link personale; <strong className="font-semibold text-zinc-300">KATA HERO Pro</strong> aggiunge
            Social Kit e template Instagram per i momenti chiave — grafiche nel sito, condivisione con un click.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-8">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl sm:mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Extra</p>
            <h3 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">
              Servizi aggiuntivi oltre il pacchetto
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Aggiungi solo ciò che ti serve, quando ti serve — oltre agli aggiornamenti già inclusi in Card e Pro.
            </p>
          </div>
          <PackageExtrasTable />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          Prezzi lancio validi per i primi 20 atleti per ciascun pacchetto, salvo diversa comunicazione.
        </p>
      </div>
    </section>
  );
}
