import { getStripeCustomerPortalUrl, whatsappPrefilledUrl } from "@/lib/site";

type Plan = {
  name: string;
  badge: string;
  recommended?: boolean;
  promoPill?: string;
  subtitle: string;
  salesLine: string;
  pricing: {
    activation: string;
    activationNote: string;
    monthlyFromSecond: string;
  };
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
  tier: "starter" | "social" | "pro";
};

const plans: Plan[] = [
  {
    name: "Starter",
    badge: "Singolo atleta",
    promoPill: "Entry",
    subtitle: "Profilo e player card, con presenza social essenziale.",
    salesLine:
      "Un unico prezzo per partire: attivazione e primo mese inclusi. Poi solo il canone mensile — senza sorpese «attivazione + abbonamento».",
    pricing: {
      activation: "€49,99",
      activationNote: "Attivazione + primo mese",
      monthlyFromSecond: "€14,99",
    },
    features: [
      "Creazione del profilo atleta",
      "Player card personalizzata",
      "Inserimento di biografia, ruolo, squadra e statistiche",
      "1 post al mese",
      "2 storie al mese",
      "Aggiornamento delle informazioni principali",
    ],
    ctaLabel: "Attiva Starter",
    whatsappMessage:
      "Ciao! Vorrei attivare Starter KataHero (attivazione + primo mese €49,99, dal secondo mese €14,99/mese). Mi dite tempi e materiali necessari?",
    tier: "starter",
  },
  {
    name: "Player Social",
    badge: "Singolo atleta",
    promoPill: "Social attivo",
    subtitle: "Profilo, card e contenuti social ogni mese.",
    salesLine:
      "Più post, storie e un reel al mese: identità grafica e aggiornamenti regolari per restare visibile su Instagram.",
    pricing: {
      activation: "€59,99",
      activationNote: "Attivazione + primo mese",
      monthlyFromSecond: "€29,99",
    },
    features: [
      "Creazione del profilo atleta",
      "Player card personalizzata",
      "Impostazione grafica",
      "3 post al mese",
      "3 storie al mese",
      "1 reel al mese",
      "Aggiornamento del profilo e delle statistiche",
    ],
    ctaLabel: "Attiva Player Social",
    whatsappMessage:
      "Ciao! Vorrei attivare Player Social KataHero (attivazione + primo mese €59,99, dal secondo mese €29,99/mese). Mi dite tempi e materiali necessari?",
    tier: "social",
  },
  {
    name: "Player Pro",
    badge: "Singolo atleta",
    recommended: true,
    promoPill: "Piano consigliato",
    subtitle: "Presenza premium, più contenuti e supporto prioritario.",
    salesLine:
      "Card premium, grafica completa e massimo volume social: post, storie, reel e grafiche per risultati e traguardi.",
    pricing: {
      activation: "€79,99",
      activationNote: "Attivazione + primo mese",
      monthlyFromSecond: "€59,99",
    },
    features: [
      "Creazione del profilo atleta",
      "Player card personalizzata premium",
      "Impostazione grafica completa",
      "4 post al mese",
      "4 storie al mese",
      "2 reel al mese",
      "Aggiornamento del profilo e delle statistiche",
      "Grafiche per risultati, convocazioni e traguardi",
      "Supporto prioritario",
    ],
    ctaLabel: "Attiva Player Pro",
    whatsappMessage:
      "Ciao! Vorrei attivare Player Pro KataHero (attivazione + primo mese €79,99, dal secondo mese €59,99/mese). Mi dite tempi e materiali necessari?",
    tier: "pro",
  },
];

type AthleteExtraRow = {
  name: string;
  price: string;
};

/** Extra oltre Starter, Player Social e Player Pro (singolo atleta). */
const athletePackageExtras: AthleteExtraRow[] = [
  { name: "1 post extra", price: "€14,99" },
  { name: "1 storia extra", price: "€7,99" },
  { name: "Pacchetto 3 storie", price: "€17,99" },
  { name: "1 reel extra", price: "€29,99" },
  { name: "Reel premium", price: "€39,99" },
  { name: "Aggiornamento semplice del sito", price: "€14,99" },
  { name: "Aggiornamento completo del sito", price: "€39,99" },
  { name: "Cambio squadra", price: "€9,99" },
  { name: "Nuova player card", price: "€24,99" },
  { name: "Aggiornamento sito + nuova card", price: "€59,99" },
];

function planDisplayName(name: string): { brand: string; tier: string } {
  return { brand: "KATA HERO", tier: name };
}

function PlanCard({ plan }: { plan: Plan }) {
  const isRecommended = plan.recommended === true;
  const isSocial = plan.tier === "social";
  const { brand, tier } = planDisplayName(plan.name);

  const cardSurface = isRecommended
    ? "border-accent/40 bg-linear-to-b from-accent/10 via-zinc-900/80 to-zinc-950 shadow-[0_0_0_1px_rgba(0,229,160,0.12),0_28px_72px_-32px_rgba(0,229,160,0.35)] lg:ring-1 lg:ring-accent/25"
    : isSocial
      ? "border-accent/22 bg-linear-to-b from-accent/6 via-zinc-900/75 to-zinc-950"
      : "border-white/12 bg-linear-to-b from-white/6 via-zinc-900/72 to-zinc-950";

  const pricingSurface = isRecommended
    ? "border-accent/30 bg-accent/8"
    : isSocial
      ? "border-accent/20 bg-accent/5"
      : "border-white/10 bg-black/35";

  return (
    <article
      className={`relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border transition duration-300 ${cardSurface} ${isRecommended ? "hover:border-accent/55" : isSocial ? "hover:border-accent/38" : "hover:border-white/22"}`}
    >
      {isRecommended ? (
        <div className="absolute -top-px left-1/2 z-10 -translate-x-1/2">
          <span className="inline-flex rounded-b-lg border border-t-0 border-accent/40 bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
            Piano consigliato
          </span>
        </div>
      ) : null}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${isRecommended ? "via-accent/70" : isSocial ? "via-accent/40" : "via-white/25"} to-transparent`}
        aria-hidden
      />

      <div className="relative grid flex-1 grid-rows-[auto_auto_1fr] gap-5 p-5 pt-8 sm:p-6 sm:pt-8 lg:gap-6 lg:p-6 lg:pt-8">
        <header className="flex min-w-0 flex-col lg:min-h-45">
          <div className="flex min-h-6 flex-wrap items-center gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{plan.badge}</p>
            {plan.promoPill ? (
              <span
                className={`rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wide ${
                  isRecommended
                    ? "border-accent/40 bg-accent/15 text-accent"
                    : isSocial
                      ? "border-accent/25 bg-accent/10 text-accent"
                      : "border-white/15 bg-white/8 text-zinc-300"
                }`}
              >
                {plan.promoPill}
              </span>
            ) : null}
          </div>
          <h3 className="font-display mt-3 min-h-13 min-w-0">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">{brand}</span>
            <span className="mt-1 block text-pretty text-xl font-bold leading-tight text-white lg:text-[1.4rem]">
              {tier}
            </span>
          </h3>
          <p className="mt-2 min-h-10 line-clamp-2 text-sm font-semibold leading-snug text-accent">{plan.subtitle}</p>
          <p className="mt-3 min-h-17.5 line-clamp-3 text-sm leading-relaxed text-zinc-400 lg:text-[13px]">
            {plan.salesLine}
          </p>
        </header>

        <div className={`flex min-h-44 flex-col rounded-xl border p-4 ${pricingSurface} lg:justify-between`}>
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                {plan.pricing.activationNote}
              </p>
              <p className="font-display mt-0.5 text-3xl font-bold tracking-tight text-white">{plan.pricing.activation}</p>
            </div>
            <div
              className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 ${
                isRecommended || isSocial ? "border-accent/25 bg-accent/10" : "border-white/10 bg-white/5"
              }`}
            >
              <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-500">Dal 2° mese</p>
              <p className="font-display text-lg font-bold text-accent">
                {plan.pricing.monthlyFromSecond}
                <span className="ml-1 text-xs font-semibold text-zinc-400">/ mese</span>
              </p>
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-snug text-zinc-500">
            Primo mese incluso nell&apos;attivazione — poi solo il canone mensile.
          </p>
        </div>

        <div className="flex min-h-0 flex-col border-t border-white/10 pt-5 lg:min-h-75">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Include</p>
          <ul className="mt-3 flex-1 space-y-1.5">
            {plan.features.map((f) => (
              <li
                key={f}
                className="flex gap-2 rounded-md px-1.5 py-1.5 text-[13px] leading-snug text-zinc-400 lg:text-sm"
              >
                <span
                  className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded bg-white/8 text-[9px] font-bold text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="min-w-0 text-pretty">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shrink-0 border-t border-white/10 bg-black/25 px-5 py-4 lg:px-6 lg:py-5">
        <a
          href={whatsappPrefilledUrl(plan.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-3 text-center text-sm font-semibold transition hover:brightness-110 ${
            isRecommended
              ? "bg-accent text-black shadow-[0_10px_32px_-12px_rgba(0,229,160,0.55)]"
              : isSocial
                ? "border border-accent/45 bg-accent text-black hover:bg-accent/90"
                : "border border-white/18 bg-white text-black hover:bg-zinc-100"
          }`}
        >
          {plan.ctaLabel}
        </a>
      </div>
    </article>
  );
}

function AthleteExtrasTable({ rows }: { rows: AthleteExtraRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/45 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-72 border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/3">
              <th className="px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:px-5">
                Extra
              </th>
              <th className="px-4 py-3.5 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:px-5">
                Prezzo consigliato
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.name}
                className={`border-b border-white/6 last:border-b-0 ${i % 2 === 1 ? "bg-black/15" : ""}`}
              >
                <td className="px-4 py-4 align-top font-semibold text-zinc-100 sm:px-5">{row.name}</td>
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

function AthleteExtrasSection() {
  return (
    <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Extra</p>
        <h3 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">Servizi aggiuntivi atleta</h3>
        <p className="mt-2 text-sm text-zinc-500">
          Oltre Starter, Player Social e Player Pro — contenuti social, aggiornamenti sito e card.
        </p>
      </div>
      <div className="mt-6">
        <AthleteExtrasTable rows={athletePackageExtras} />
      </div>
    </div>
  );
}

function SubscriptionManagement() {
  const portalUrl = getStripeCustomerPortalUrl();

  return (
    <div id="gestisci-abbonamento" className="mx-auto mt-14 max-w-2xl scroll-mt-24 sm:mt-16">
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-linear-to-br from-zinc-900/80 via-zinc-900/50 to-black/80 p-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:p-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent"
          aria-hidden
        />
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Clienti attivi</p>
        <h3 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">Gestisci il tuo abbonamento</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
          Accedi al portale Stripe per aggiornare il metodo di pagamento, scaricare le fatture o gestire il rinnovo del
          piano Starter, Player Social o Player Pro.
        </p>
        <a
          href={portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/10"
        >
          Gestisci abbonamento
          <span className="ml-2 text-accent" aria-hidden>
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}

function PricingFormulaAndConditions() {
  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-4 sm:mt-12">
      <div className="rounded-2xl border border-accent/25 bg-accent/5 p-5 text-center sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Come funziona il prezzo</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-200 sm:text-base">
          Il <strong className="font-semibold text-white">primo mese è incluso</strong> nel costo di attivazione. Dal
          secondo mese paghi esclusivamente il <strong className="font-semibold text-white">canone mensile</strong> del
          piano scelto — un unico prezzo per partire, senza «attivazione + abbonamento» separati.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Condizioni</p>
        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-zinc-400">
          <li>
            Foto, video, statistiche, testi e informazioni vengono forniti dall&apos;atleta. Il servizio comprende la
            realizzazione grafica, il montaggio e la preparazione dei contenuti.
          </li>
          <li>È inclusa una revisione per contenuto.</li>
          <li>I contenuti mensili non utilizzati non sono cumulabili.</li>
        </ul>
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
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Pacchetti</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
            Starter, Player Social e Player Pro{" "}
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">
              per l&apos;atleta
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Attivazione e primo mese in un unico prezzo:{" "}
            <strong className="font-semibold text-zinc-300">Starter</strong> da €49,99, poi €14,99/mese ·{" "}
            <strong className="font-semibold text-zinc-300">Player Social</strong> da €59,99, poi €29,99/mese ·{" "}
            <strong className="font-semibold text-zinc-300">Player Pro</strong> da €79,99, poi €59,99/mese.
          </p>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 p-0 sm:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-7">
          {plans.map((p) => (
            <li key={p.name} className="min-w-0">
              <PlanCard plan={p} />
            </li>
          ))}
        </ul>

        <PricingFormulaAndConditions />

        <AthleteExtrasSection />

        <SubscriptionManagement />
      </div>
    </section>
  );
}
