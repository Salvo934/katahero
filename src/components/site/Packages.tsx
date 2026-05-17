import Link from "next/link";
import { whatsappPrefilledUrl } from "@/lib/site";

const socialKitGroups: { title: string; items: string[] }[] = [
  {
    title: "Match & numeri",
    items: [
      "Gameday / Matchday",
      "Post statistiche partita",
      "Stories pre e post partita",
      "Recap mensile atleta",
    ],
  },
  {
    title: "Carriera & annunci",
    items: [
      "Milestone e record personali",
      "Rinnovi e trasferimenti",
      "Nuova firma / nuovo accordo",
      "Convocazioni e premi",
    ],
  },
  {
    title: "Brand & asset",
    items: [
      "Card sponsor o partnership",
      "Template personalizzati per stagione",
      "Grafiche coordinate con identità atleta, agenzia o società",
    ],
  },
];

const socialKitWhatsAppMessage =
  "Ciao! Vorrei informazioni sul KataHero Social Kit (contenuti social per statistiche, gameday, milestone, rinnovi, ecc.).";

type Plan = {
  name: string;
  badge: string;
  /** Pill opzionale sopra il titolo (es. “Più richiesto”, “Talent Board”). */
  promoPill?: string;
  tagline: string;
  /** Collante con la Talent Board / demo. */
  talentBoardLine: string;
  featuresSectionTitle: string;
  features: string[];
  idealFor: string;
  ctaLabel: string;
  whatsappMessage: string;
  /** Default: bordo standard; featured: leggero enfasi; flagship: Roster HQ + Talent Board. */
  variant?: "default" | "featured" | "flagship";
};

const plans: Plan[] = [
  {
    name: "Spotlight",
    badge: "Singolo atleta",
    tagline:
      "Il profilo che apri quando un club o uno scout ha due minuti — niente allegati, solo decisioni.",
    talentBoardLine:
      "Stessa cura visiva delle mini schede che vedi nella demo Talent Board: un solo standard professionale.",
    featuresSectionTitle: "Cosa include",
    features: [
      "Scheda digitale con link pubblico e PDF sintetico scaricabile",
      "Dati fisici, ruolo, squadra, campionato e statistiche chiave",
      "Video highlights e percorso sportivo in un’unica pagina mobile-first",
      "Contatto referente evidenziato: meno ping-pong su WhatsApp",
      "Pronta da incollare in bio, firma mail e presentazioni",
    ],
    idealFor:
      "prospetti U19–U23, free agent e professionisti che vogliono uscire dalla giungla di DM e file incompleti.",
    ctaLabel: "Richiedi Spotlight",
    whatsappMessage:
      "Ciao! Vorrei informazioni sul pacchetto Spotlight di KataHero (scheda atleta digitale con link e PDF). Tempi e materiali necessari?",
    variant: "default",
  },
  {
    name: "Collective",
    badge: "Agenzia · procuratore",
    promoPill: "Più richiesto",
    tagline:
      "Un dominio visivo unico: il tuo marchio e le schede dei talenti, ordinati come in un vero dossier digitale.",
    talentBoardLine:
      "Pensato per roster fino a dieci profili: quando il volume esplode, Roster HQ apre la Talent Board privata con filtri e inviti.",
    featuresSectionTitle: "Cosa include",
    features: [
      "Pagina istituzionale branded (colori, logo, tono comunicativo)",
      "Fino a 10 schede atleta complete (dati, statistiche, video, timeline)",
      "URL portfolio unico da inviare a società e sponsor",
      "PDF professionale per ogni assistito",
      "Supporto alla raccolta materiali e un aggiornamento mensile incluso sulle schede",
      "Base solida per chi negozia trasferimenti o gestisce un primo gruppo organizzato",
    ],
    idealFor:
      "procuratori, agenti federati e boutique agency che vogliono credibilità immediata senza strumenti dispersivi.",
    ctaLabel: "Richiedi Collective",
    whatsappMessage:
      "Ciao! Siamo un’agenzia interessata a Collective di KataHero (fino a 10 schede + pagina brand). Possiamo vedere una demo?",
    variant: "featured",
  },
  {
    name: "Roster HQ",
    badge: "Roster & organizzazioni",
    promoPill: "Con Talent Board",
    tagline:
      "La tua operatività ha bisogno di una board: filtri, aggiornamenti e presentazione al livello più alto.",
    talentBoardLine:
      "Talent Board privata con le stesse mini schede e logica della demo su /talent-board — ma con i tuoi atleti e accessi controllati.",
    featuresSectionTitle: "Cosa include",
    features: [
      "KataHero Talent Board privata: ricerca, filtri (ruolo, età, disponibilità, metriche…) e condivisione mirata",
      "Roster esteso e perimetri su misura per academy, società multi-livello e grandi agenzie",
      "Blocchi video dedicati a skill, tratti di campo e “best fit” per ruolo",
      "Piano di aggiornamento dati ricorrente + supporto operativo prioritario",
      "Export PDF avanzato e personalizzazione grafica coordinata al brand",
      "Tutto ciò che serve quando il mercato ti chiama ogni settimana, non una volta all’anno",
    ],
    idealFor:
      "strutture che vivono scouting, trasferimenti e relazioni club in continuo movimento.",
    ctaLabel: "Parla di Talent Board & Roster HQ",
    whatsappMessage:
      "Ciao! Vorremmo Roster HQ di KataHero con Talent Board privata sul nostro organico. Possiamo fissare una call e capire il perimetro?",
    variant: "flagship",
  },
];

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
            Dal singolo talento alla{" "}
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">Talent Board</span>{" "}
            del roster
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Parti con <strong className="font-semibold text-zinc-300">Spotlight</strong> per mettere il singolo talento al
            centro; passa a <strong className="font-semibold text-zinc-300">Collective</strong> quando gestisci più profili con
            un marchio unico; apri <strong className="font-semibold text-zinc-300">Roster HQ</strong> quando ti serve una{" "}
            <strong className="font-semibold text-zinc-300">Talent Board</strong> privata come nella demo pubblica — filtri,
            inviti mirati, ritmo da mercato vero. Nessun listino pubblico: tempi e investimento si definiscono in preventivo
            dopo un confronto diretto.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/talent-board"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition hover:border-accent/50 hover:bg-accent/18 sm:text-sm"
            >
              Prova la demo Talent Board <span aria-hidden>→</span>
            </Link>
            <span className="hidden text-[11px] text-zinc-600 sm:inline">Dati basket di esempio · gratis in anteprima</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {plans.map((p) => {
            const v = p.variant ?? "default";
            const cardClass =
              v === "flagship"
                ? "flex h-full min-h-0 flex-col rounded-2xl border border-accent/38 bg-zinc-900/55 p-6 shadow-[0_0_0_1px_rgba(0,229,160,0.1),0_24px_64px_-36px_rgba(0,229,160,0.14)] transition-colors sm:p-7 hover:border-accent/48 hover:bg-zinc-900/62 hover:shadow-[0_0_0_1px_rgba(0,229,160,0.14),0_28px_72px_-32px_rgba(0,229,160,0.18)] lg:relative lg:z-10"
                : v === "featured"
                  ? "flex h-full min-h-0 flex-col rounded-2xl border border-white/15 bg-zinc-900/42 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-colors sm:p-7 hover:border-white/22 hover:bg-zinc-900/50"
                  : "flex h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-colors sm:p-7 hover:border-white/16 hover:bg-zinc-900/48";

            return (
            <article
              key={p.name}
              className={cardClass}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{p.badge}</p>
                  {p.promoPill ? (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-px text-[9px] font-bold tracking-wide text-accent">
                      {p.promoPill}
                    </span>
                  ) : null}
                </div>
                <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-white sm:text-[1.35rem]">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm font-medium leading-snug text-zinc-300">{p.tagline}</p>
                <p className="mt-3 border-l-2 border-accent/45 pl-3 text-xs leading-relaxed text-zinc-400">
                  {p.talentBoardLine}
                </p>
              </div>

              <div className="mt-5 flex min-h-0 flex-1 flex-col border-t border-white/10 pt-6 sm:mt-6">
                <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {p.featuresSectionTitle}
                </p>
                <ul className="mt-4 min-h-0 flex-1 space-y-2.5 text-sm leading-snug text-zinc-300">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 shrink-0 text-sm leading-snug text-zinc-500">
                  <span className="text-zinc-400">Ideale per </span>
                  {p.idealFor}
                </p>
              </div>

              <a
                href={whatsappPrefilledUrl(p.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full shrink-0 items-center justify-center rounded-full bg-accent px-5 py-3.5 text-center text-sm font-semibold text-black shadow-[0_8px_28px_-10px_rgba(0,229,160,0.4)] transition hover:brightness-110"
              >
                {p.ctaLabel}
              </a>
            </article>
            );
          })}
        </div>

        <article
          className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-white/12 bg-zinc-900/45 shadow-[0_28px_90px_-48px_rgba(0,0,0,0.95)] ring-1 ring-white/5 sm:mt-16"
          aria-labelledby="social-kit-heading"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/55 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accent/9 blur-3xl sm:-right-16 sm:-top-20"
            aria-hidden
          />

          <div className="relative grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)]">
            <div className="flex flex-col justify-between border-b border-white/10 p-6 text-left sm:p-8 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-10 lg:pr-8">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Add-on
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    Social &amp; comunicazione
                  </span>
                </div>

                <h3
                  id="social-kit-heading"
                  className="font-display mt-5 text-2xl font-bold tracking-tight text-white sm:text-[1.75rem] sm:leading-snug"
                >
                  KataHero{" "}
                  <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                    Social Kit
                  </span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Stesse regole visive delle schede: post e stories allineati al messaggio che mandi a club e sponsor, senza
                  ricominciare da capo a ogni uscita importante.
                </p>

                <p className="mt-5 rounded-2xl border border-white/8 bg-black/30 px-4 py-3 text-sm leading-snug text-zinc-500">
                  <span className="font-medium text-zinc-400">Ideale per </span>
                  staff comunicazione, società e atleti che vogliono contenuti coerenti, veloci da approvare.
                </p>
              </div>

              <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={whatsappPrefilledUrl(socialKitWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full flex-1 items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95 sm:w-auto sm:min-h-0 sm:flex-initial"
                >
                  Chiedi il Social Kit
                </a>
                <Link
                  href="#contatti"
                  className="inline-flex min-h-12 w-full flex-1 items-center justify-center rounded-full border border-white/18 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/28 hover:bg-white/10 active:bg-white/8 sm:w-auto sm:min-h-0 sm:flex-initial"
                >
                  Modulo contatti
                </Link>
              </div>
            </div>

            <div className="bg-black/22 p-6 sm:p-8 lg:p-10 lg:pl-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Può includere</p>
              <div className="mt-5 space-y-6">
                {socialKitGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-accent/90">{group.title}</p>
                    <ul className="mt-2.5 space-y-2 text-sm leading-snug text-zinc-300">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          Ogni incarico parte da un confronto: tempi, contenuti e condizioni le definiamo in preventivo. Sfogliare la
          pagina non crea obblighi.
        </p>
      </div>
    </section>
  );
}
