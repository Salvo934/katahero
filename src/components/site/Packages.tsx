import { getStripeCustomerPortalUrl, whatsappPrefilledUrl } from "@/lib/site";

/** Da stringa tipo «€89,99» → equivalente mensile (12 mesi). */
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
  subtitle: string;
  salesLine: string;
  pricing: {
    launch: string;
    launchNote: string;
    delivery: string;
  };
  whyBuyTitle: string;
  whyBuy: string;
  featuresSectionTitle: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
  tier: "player" | "pro" | "elite";
};

const plans: Plan[] = [
  {
    name: "KATA HERO Card Player",
    badge: "Singolo atleta",
    promoPill: "Entry · hero",
    subtitle: "Solo la hero card, senza sito completo.",
    salesLine:
      "Hero card con foto, dati e statistiche in evidenza: un link leggero per club e scout. Senza sito completo, video hub o Social Kit.",
    pricing: {
      launch: "€29,99",
      launchNote: "Solo hero · senza sito · /anno",
      delivery: "Consegna entro 72h",
    },
    whyBuyTitle: "Perché dovresti comprarlo",
    whyBuy:
      "Parti subito con un’immagine da pro da condividere ovunque, senza investire nel sito atleta completo.",
    featuresSectionTitle: "Include",
    features: [
      "Hero card personalizzata (figurina + dati)",
      "Foto, nome, ruolo, numero e squadra",
      "Statistiche principali in hero",
      "Link dedicato per condividere",
      "Senza sito completo né Social Kit",
    ],
    ctaLabel: "Attiva Card Player",
    whatsappMessage:
      "Ciao! Vorrei attivare KATA HERO Card Player (€29,99/anno, solo hero card senza sito completo). Mi dite tempi e materiali necessari?",
    tier: "player",
  },
  {
    name: "KATA HERO Pro",
    badge: "Singolo atleta",
    promoPill: "Sito completo",
    subtitle: "Sito atleta completo · senza Social Kit.",
    salesLine:
      "Sito web completo per 12 mesi: hero, profilo, statistiche, video e contatti in un link. Senza Social Media Kit per Instagram.",
    pricing: {
      launch: "€89,99",
      launchNote: "Sito completo · no Social Kit · /anno",
      delivery: "Consegna entro 72h",
    },
    whyBuyTitle: "Perché dovresti comprarlo",
    whyBuy:
      "Tutta la presenza online da atleta in un link: massimo per scouting e contatti, senza pagare il pacchetto social Instagram.",
    featuresSectionTitle: "Include",
    features: [
      "Tutto Card Player, più:",
      "Sito web atleta completo · 12 mesi",
      "Profilo, statistiche, video hub e contatti",
      "Dominio dedicato · link in bio",
      "Senza Social Media Kit Instagram",
      "3 aggiornamenti/anno: ott, feb, giu",
    ],
    ctaLabel: "Attiva KATA HERO Pro",
    whatsappMessage:
      "Ciao! Vorrei attivare KATA HERO Pro (€89,99/anno, sito completo senza Social Kit). Mi dite tempi e materiali necessari?",
    tier: "pro",
  },
  {
    name: "KATA HERO Elite",
    badge: "Singolo atleta",
    promoPill: "Sito + Social Kit IG",
    subtitle: "Sito completo + Social Media Kit Instagram.",
    salesLine:
      "Sito completo Pro più Social Media Kit: grafiche e template nel profilo, condivisibili con un click su Instagram.",
    pricing: {
      launch: "€149,99",
      launchNote: "Sito + Social Kit IG · /anno",
      delivery: "Consegna entro 48h",
    },
    whyBuyTitle: "Perché dovresti comprarlo",
    whyBuy:
      "Sito professionale e Instagram insieme: contenuti social già pronti per Match Day, grandi prestazioni e fine stagione.",
    featuresSectionTitle: "Include",
    features: [
      "Tutto KATA HERO Pro, più:",
      "Social Media Kit Instagram nel sito",
      "Grafiche personalizzate · 1 click",
      "Template: Match Day, MVP, compleanno",
      "Nuova squadra · thank you post partita",
      "5 aggiornamenti/anno: ott, dic, feb, apr, giu",
    ],
    ctaLabel: "Attiva KATA HERO Elite",
    whatsappMessage:
      "Ciao! Vorrei attivare KATA HERO Elite (€149,99/anno, sito completo + Social Media Kit Instagram). Mi dite tempi e materiali necessari?",
    tier: "elite",
  },
];

type PackageExtraRow = {
  name: string;
  description: string;
  price: string;
};

/** Extra oltre Card Player, Pro ed Elite (singolo atleta). */
const athletePackageExtras: PackageExtraRow[] = [
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
];

/** Extra board, roster e servizi avanzati. */
const boardPackageExtras: PackageExtraRow[] = [
  {
    name: "Scheda giocatore aggiuntiva",
    description: "Nuova scheda atleta in board o profilo, oltre al pacchetto o alla fascia roster",
    price: "€90/anno",
  },
  {
    name: "Aggiornamento extra scheda",
    description: "Modifica foto, dati, statistiche o contenuti fuori dalle finestre incluse nel piano",
    price: "€15–€25",
  },
  {
    name: "Bio professionale riscritta",
    description: "Riscrittura testo bio e pitch per club, scout e presentazioni istituzionali",
    price: "€30",
  },
  {
    name: "Inserimento video highlight extra",
    description: "Aggiunta o sostituzione di un video / reel nel profilo atleta",
    price: "€20",
  },
  {
    name: "Traduzione profilo EN/IT",
    description: "Versione bilingue del profilo (inglese e italiano) per mercato estero",
    price: "€30",
  },
  {
    name: "Priorità Talent Board",
    description: "Maggiore visibilità del profilo in board pubblica o dedicata (posizionamento in evidenza)",
    price: "€100–€200/anno",
  },
  {
    name: "Social Media Kit",
    description: "Piano annuale aggiuntivo: 8 post al mese con grafiche personalizzate per Instagram",
    price: "+ €250/anno",
  },
];

const rosterTiers = [
  { players: "fino a 10", annual: "€900", perAthleteYear: "€90", perAthleteMonth: "€7,50" },
  { players: "fino a 20", annual: "€1.500", perAthleteYear: "€75", perAthleteMonth: "€6,25" },
  { players: "fino a 30", annual: "€2.100", perAthleteYear: "€70", perAthleteMonth: "€5,83" },
  { players: "fino a 40", annual: "€2.700", perAthleteYear: "€67,50", perAthleteMonth: "€5,63" },
  { players: "fino a 50", annual: "€3.300", perAthleteYear: "€66", perAthleteMonth: "€5,50" },
] as const;

const rosterFeatures = [
  "Creazione schede atleta e gestione contenuti",
  "Foto, video, bio, statistiche e contatti",
  "Board dedicata con link condivisibile",
  "Profili pubblici o privati per il roster",
  "Assistenza dedicata e 2 aggiornamenti annuali",
] as const;

const ROSTER_WHATSAPP_MESSAGE =
  "Ciao! Vorrei informazioni sul pacchetto KATA HERO Roster (board digitale per agenzia/club). Mi indicate tempi, materiali e fascia giocatori.";

function tierIncludesPrefix(tier: Plan["tier"]): string {
  if (tier === "pro") return "Tutto Card Player";
  if (tier === "elite") return "Tutto KATA HERO Pro";
  return "";
}

function planDisplayName(name: string): { brand: string; tier: string } {
  const stripped = name.replace(/^KATA HERO\s+/i, "").trim();
  return { brand: "KATA HERO", tier: stripped || name };
}

function PlanCard({ plan }: { plan: Plan }) {
  const monthlyLaunch = monthlyEquivalentFromLaunch(plan.pricing.launch);
  const isElite = plan.tier === "elite";
  const isPro = plan.tier === "pro";
  const includesPrefix = tierIncludesPrefix(plan.tier);
  const { brand, tier } = planDisplayName(plan.name);

  const cardSurface = isElite
    ? "border-accent/40 bg-linear-to-b from-accent/10 via-zinc-900/80 to-zinc-950 shadow-[0_0_0_1px_rgba(0,229,160,0.12),0_28px_72px_-32px_rgba(0,229,160,0.35)] lg:ring-1 lg:ring-accent/25"
    : isPro
      ? "border-accent/22 bg-linear-to-b from-accent/6 via-zinc-900/75 to-zinc-950"
      : "border-white/12 bg-linear-to-b from-white/6 via-zinc-900/72 to-zinc-950";

  const pricingSurface = isElite
    ? "border-accent/30 bg-accent/8"
    : isPro
      ? "border-accent/20 bg-accent/5"
      : "border-white/10 bg-black/35";

  return (
    <article
      className={`relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border transition duration-300 ${cardSurface} ${isElite ? "hover:border-accent/55" : isPro ? "hover:border-accent/38" : "hover:border-white/22"}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${isElite ? "via-accent/70" : isPro ? "via-accent/40" : "via-white/25"} to-transparent`}
        aria-hidden
      />

      <div className="relative grid flex-1 grid-rows-[auto_auto_1fr] gap-5 p-5 sm:p-6 lg:gap-6 lg:p-6">
        {/* Riga 1 — titolo e copy (altezza uniforme su desktop) */}
        <header className="flex min-w-0 flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{plan.badge}</p>
            {plan.promoPill ? (
              <span
                className={`rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wide ${
                  isElite
                    ? "border-accent/40 bg-accent/15 text-accent"
                    : isPro
                      ? "border-accent/25 bg-accent/10 text-accent"
                      : "border-white/15 bg-white/8 text-zinc-300"
                }`}
              >
                {plan.promoPill}
              </span>
            ) : null}
          </div>
          <h3 className="font-display mt-3 min-w-0">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">{brand}</span>
            <span className="mt-1 block text-pretty text-xl font-bold leading-tight text-white lg:text-[1.4rem]">
              {tier}
            </span>
          </h3>
          <p className="mt-2 text-sm font-semibold leading-snug text-accent">{plan.subtitle}</p>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400 lg:min-h-18 lg:text-[13px]">
            {plan.salesLine}
          </p>
        </header>

        {/* Riga 2 — prezzo (altezza uniforme su desktop) */}
        <div className={`rounded-xl border p-4 ${pricingSurface} lg:min-h-40 lg:flex lg:flex-col lg:justify-between`}>
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Investimento annuo</p>
              <p className="font-display mt-0.5 text-3xl font-bold tracking-tight text-white">{plan.pricing.launch}</p>
              <p className="mt-1 text-[11px] leading-snug text-zinc-500">{plan.pricing.launchNote}</p>
            </div>
            {monthlyLaunch ? (
              <div
                className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 ${
                  isElite || isPro ? "border-accent/25 bg-accent/10" : "border-white/10 bg-white/5"
                }`}
              >
                <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-500">Al mese</p>
                <p className="font-display text-lg font-bold text-accent">€{monthlyLaunch}</p>
              </div>
            ) : null}
          </div>
          <p
            className={`mt-3 inline-flex max-w-full items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
              isElite || isPro
                ? "border-accent/30 bg-accent/10 text-accent"
                : "border-white/12 bg-white/5 text-zinc-300"
            }`}
          >
            <span className="size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,160,0.8)]" aria-hidden />
            {plan.pricing.delivery}
          </p>
        </div>

        {/* Riga 3 — feature + perché (riempie lo spazio, CTA in basso) */}
        <div className="flex min-h-0 flex-col border-t border-white/10 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {plan.featuresSectionTitle}
          </p>
          <ul className="mt-3 flex-1 space-y-1.5">
            {plan.features.map((f) => {
              const highlight = includesPrefix !== "" && f.startsWith(includesPrefix);
              return (
                <li
                  key={f}
                  className={`flex gap-2 rounded-md px-1.5 py-1.5 text-[13px] leading-snug lg:text-sm ${
                    highlight
                      ? "border border-accent/25 bg-accent/8 font-semibold text-zinc-100"
                      : "text-zinc-400"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded text-[9px] font-bold ${
                      highlight ? "bg-accent/20 text-accent" : "bg-white/8 text-accent"
                    }`}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="min-w-0 text-pretty">{f}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 rounded-lg border border-white/8 bg-black/30 px-3.5 py-3 lg:min-h-22">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{plan.whyBuyTitle}</p>
            <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-zinc-400">{plan.whyBuy}</p>
          </div>
        </div>
      </div>

      <div className="shrink-0 border-t border-white/10 bg-black/25 px-5 py-4 lg:px-6 lg:py-5">
        <a
          href={whatsappPrefilledUrl(plan.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-3 text-center text-sm font-semibold transition hover:brightness-110 ${
            isElite
              ? "bg-accent text-black shadow-[0_10px_32px_-12px_rgba(0,229,160,0.55)]"
              : isPro
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

function RosterPackage() {
  return (
    <div id="roster" className="mt-16 scroll-mt-24 sm:mt-20">
      <div className="mb-8 text-center lg:mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Agenzie · Club · Academy</p>
        <h3 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">
          KATA HERO <span className="text-accent">Roster</span>
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          Per procuratori, agenzie, club e academy che vogliono presentare più giocatori con una board digitale
          professionale.
        </p>
      </div>

      <article className="relative overflow-hidden rounded-2xl border border-white/14 bg-linear-to-br from-zinc-900/90 via-zinc-950 to-black shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)] lg:rounded-[1.75rem]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          aria-hidden
        />

        <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:p-10">
          <div className="flex min-w-0 flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Board gestita</p>
              <span className="rounded-full border border-accent/35 bg-accent/12 px-2.5 py-0.5 text-[9px] font-bold tracking-wide text-accent">
                Talent Board dedicata
              </span>
            </div>
            <p className="font-display mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">
              Il tuo roster in affitto sulla Talent Board KataHero
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
              Presenta il tuo organico con una board digitale professionale, creata e gestita da noi. Tu ci invii i
              materiali dei giocatori: noi creiamo le schede atleta, organizziamo i contenuti e attiviamo una board
              dedicata pronta da condividere con club, scout, direttori sportivi e società.
            </p>

            <div className="mt-6 rounded-xl border border-accent/30 bg-accent/8 p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Come un affitto annuale</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                Paghi un canone fisso all&apos;anno per riservare i posti dei tuoi atleti nella board: più giocatori
                includi, più conveniente diventa il costo per singolo profilo — come affittare spazio professionale sul
                catalogo KataHero invece di gestire decine di link sparsi.
              </p>
            </div>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Include</p>
            <ul className="mt-3 space-y-2">
              {rosterFeatures.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm leading-snug text-zinc-400">
                  <span
                    className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded bg-accent/20 text-[9px] font-bold text-accent"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-col">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Prezzi annuali</p>
            <p className="mt-1 text-xs text-zinc-500">Canone roster · fatturazione annuale</p>

            <div className="mt-4 overflow-hidden rounded-xl border border-white/12 bg-black/40">
              <div className="overflow-x-auto">
                <table className="w-full min-w-80 border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/4">
                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                        Giocatori
                      </th>
                      <th className="px-4 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                        / anno
                      </th>
                      <th className="hidden px-4 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:table-cell">
                        / atleta · anno
                      </th>
                      <th className="hidden px-4 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-accent md:table-cell">
                        / atleta · mese
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rosterTiers.map((row, i) => (
                      <tr
                        key={row.players}
                        className={`border-b border-white/6 last:border-b-0 ${i % 2 === 1 ? "bg-white/2" : ""}`}
                      >
                        <td className="px-4 py-3.5 font-semibold text-zinc-100">{row.players} giocatori</td>
                        <td className="px-4 py-3.5 text-right font-display text-base font-bold text-white">
                          {row.annual}
                        </td>
                        <td className="hidden px-4 py-3.5 text-right text-zinc-400 sm:table-cell">{row.perAthleteYear}</td>
                        <td className="hidden px-4 py-3.5 text-right font-semibold text-accent md:table-cell">
                          {row.perAthleteMonth}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              Il costo mensile per atleta cala all&apos;aumentare dei posti in board — il canone annuale resta quello della
              fascia scelta.
            </p>

            <a
              href={whatsappPrefilledUrl(ROSTER_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-center text-sm font-semibold text-black shadow-[0_12px_40px_-14px_rgba(0,229,160,0.55)] transition hover:brightness-110"
            >
              Richiedi preventivo Roster
            </a>
            <a
              href="/talent-board"
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
            >
              Vedi esempio Talent Board
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function PackageExtrasTable({ rows }: { rows: PackageExtraRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/45 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
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
            {rows.map((row, i) => (
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

function PackageExtrasSection() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <div>
        <h4 className="font-display text-lg font-semibold text-white sm:text-xl">Extra singolo atleta</h4>
        <p className="mt-1.5 text-sm text-zinc-500">
          Oltre Card Player, Pro ed Elite — aggiornamenti e add-on sul profilo personale.
        </p>
        <div className="mt-4">
          <PackageExtrasTable rows={athletePackageExtras} />
        </div>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold text-white sm:text-xl">Extra board e servizi avanzati</h4>
        <p className="mt-1.5 text-sm text-zinc-500">
          Per roster, Talent Board e profili istituzionali — schede aggiuntive, visibilità e Social Media Kit esteso.
        </p>
        <div className="mt-4">
          <PackageExtrasTable rows={boardPackageExtras} />
        </div>
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
          piano Card Player, Pro, Elite o Roster.
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
            Card Player, Pro ed Elite{" "}
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">
              per l&apos;atleta
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            <strong className="font-semibold text-zinc-300">Card Player</strong> — hero card (€29,99).{" "}
            <strong className="font-semibold text-zinc-300">Pro</strong> — sito completo senza Social Kit (€89,99).{" "}
            <strong className="font-semibold text-zinc-300">Elite</strong> — sito + Social Kit Instagram (€149,99).
          </p>
        </div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 p-0 sm:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-7">
          {plans.map((p) => (
            <li key={p.name} className="min-w-0">
              <PlanCard plan={p} />
            </li>
          ))}
        </ul>

        <RosterPackage />

        <div className="mx-auto mt-14 max-w-4xl sm:mt-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Extra</p>
            <h3 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">
              Servizi aggiuntivi oltre il pacchetto
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Due liste: extra sul pacchetto atleta e servizi per board / roster — prezzi indicativi, preventivo su richiesta.
            </p>
          </div>
          <div className="mt-8">
            <PackageExtrasSection />
          </div>
        </div>

        <SubscriptionManagement />

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          Prezzi lancio validi per i primi 20 atleti per ciascun pacchetto, salvo diversa comunicazione.
        </p>
      </div>
    </section>
  );
}
