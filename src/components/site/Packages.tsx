import Link from "next/link";
import { whatsappPrefilledUrl } from "@/lib/site";

const socialKitFeatures = [
  "Gameday / Matchday",
  "Post statistiche partita",
  "Recap mensile atleta",
  "Milestone e record personali",
  "Rinnovi e trasferimenti",
  "Nuova firma / nuovo accordo",
  "Convocazioni e premi",
  "Stories pre e post partita",
  "Card sponsor o partnership",
  "Template personalizzati per stagione",
  "Grafiche coordinate con identità atleta, agenzia o società",
];

const socialKitWhatsAppMessage =
  "Ciao! Vorrei informazioni sul KataHero Social Kit (contenuti social per statistiche, gameday, milestone, rinnovi, ecc.).";

type PlanIcon = "player" | "portfolio" | "pro";

function PlanIconMark({ variant, className }: { variant: PlanIcon; className?: string }) {
  const cn = className ?? "";
  if (variant === "player") {
    return (
      <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    );
  }
  if (variant === "portfolio") {
    return (
      <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.5 3.75H9.375c-.621 0-1.125.504-1.125 1.125v6.375m0 0H7.125c-.621 0-1.125.504-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125v-9.75c0-.621-.504-1.125-1.125-1.125h-1.5m-6.75 0V9.375c0-.621.504-1.125 1.125-1.125h7.125c.621 0 1.125.504 1.125 1.125v6.375"
        />
      </svg>
    );
  }
  return (
    <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    </svg>
  );
}

type Plan = {
  name: string;
  badge: string;
  icon: PlanIcon;
  tagline: string;
  description: string;
  featuresSectionTitle: string;
  features: string[];
  idealFor: string;
  ctaLabel: string;
  whatsappMessage: string;
  highlighted: boolean;
};

const plans: Plan[] = [
  {
    name: "Player Card",
    badge: "Singolo atleta",
    icon: "player",
    tagline: "Un link ufficiale quando club, agenti o staff devono capirti in pochi secondi.",
    description:
      "Tutto ciò che serve per presentarti: numeri, video, carriera e contatti in un’unica scheda digitale ottimizzata per mobile — più PDF sintetico da allegare quando serve.",
    featuresSectionTitle: "Cosa include",
    features: [
      "Scheda atleta digitale personalizzata",
      "Dati fisici e sportivi essenziali",
      "Ruolo, squadra, campionato e stagione",
      "Statistiche e metriche principali",
      "Video highlights integrato",
      "Percorso sportivo (palmares / timeline)",
      "Contatto referente chiaro",
      "Link unico da bio, mail e presentazioni",
      "Layout mobile-first",
      "PDF sintetico scaricabile",
    ],
    idealFor:
      "giovani, prospetti, free agent e professionisti che vogliono uscire dalla confusione dei DM e dei file sparsi.",
    ctaLabel: "Crea la tua Player Card",
    whatsappMessage:
      "Ciao! Vorrei creare la mia Player Card KataHero: scheda atleta digitale con link e PDF. Potete darmi i prossimi passi?",
    highlighted: false,
  },
  {
    name: "Agency Portfolio",
    badge: "Agenzia / procuratore",
    icon: "portfolio",
    tagline: "Le tue schede atleta nello stesso posto, con voce e immagine di agenzia coerenti.",
    description:
      "Sostituisci il patchwork di PDF, link telefonati e reel persi nel feed: un portfolio digitale con pagina agenzia e fino a dieci schede giocatore sempre aggiornabili.",
    featuresSectionTitle: "Cosa include",
    features: [
      "Pagina istituzionale agenzia / procuratore",
      "Fino a 10 schede atleta digitali",
      "Dati, statistiche, video e percorso per ogni tesserato",
      "Contatto referente centralizzato",
      "Branding agenzia (colori, logotipo, tono)",
      "PDF dedicato per ogni atleta",
      "Link portfolio unico da condividere",
      "Supporto nella raccolta materiali",
      "Un aggiornamento mensile incluso sulle schede",
    ],
    idealFor:
      "procuratori indipendenti, agenti e piccole strutture che gestiscono un primo gruppo di talenti con ritmo costante.",
    ctaLabel: "Richiedi una demo",
    whatsappMessage:
      "Ciao! Vorrei richiedere una demo per Agency Portfolio KataHero: portfolio con schede atleta. Quando possiamo parlarne?",
    highlighted: true,
  },
  {
    name: "Agency Pro",
    badge: "Roster & organizzazioni",
    icon: "pro",
    tagline: "Per chi deve filtrare, aggiornare e condividere molti profili senza perdere qualità.",
    description:
      "Pensato per scouting e decisioni rapide: roster ampio, filtri per ruolo e caratteristiche, sezioni video mirate, materiali privati quando serve e workflow di aggiornamento strutturato.",
    featuresSectionTitle: "Tutto Agency Portfolio, più",
    features: [
      "Schede su misura per roster numerosi",
      "Filtri per ruolo, anno, altezza, categoria, status e disponibilità",
      "Blocchi video per skill e tratti distintivi in campo",
      "Profilo tecnico e indicazioni ‘best fit’",
      "Area riservata o schede private on demand",
      "Piano di aggiornamento dati periodico",
      "Export PDF professionale per atleta",
      "Supporto prioritario operativo",
      "Personalizzazione grafica avanzata",
      "Report o metriche di utilizzo, dove applicabile",
    ],
    idealFor: "agenzie strutturate, società, academy, settori giovanili e staff che vivono il mercato ogni settimana.",
    ctaLabel: "Parla con noi",
    whatsappMessage:
      "Ciao! Vorrei informazioni su Agency Pro KataHero (soluzione su richiesta) per gestire un roster più ampio. Possiamo fare una call?",
    highlighted: false,
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
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Pacchetti</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
            Lo stesso standard professionale,{" "}
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">dalla scheda al roster</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Tre livelli pensati per come lavori davvero: presentare un atleta, curare un gruppo ristretto o gestire un
            organico ampio. Nessun listino rigido in pagina: dopo un contatto ti proponiamo perimetro, tempi e deliverable
            chiari.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-5">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border px-0 pb-0 pt-0 transition duration-300 ${
                p.highlighted
                  ? "border-accent/40 bg-zinc-900/55 shadow-[0_24px_64px_-28px_rgba(0,229,160,0.38)] ring-1 ring-accent/30 lg:-mt-1 lg:mb-1"
                  : "border-white/10 bg-zinc-900/30 hover:border-white/18 hover:bg-zinc-900/45"
              }`}
            >
              {p.highlighted ? (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-accent px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-black shadow-[0_6px_20px_-6px_rgba(0,229,160,0.6)] sm:right-5 sm:top-5">
                  Più scelto
                </span>
              ) : null}

              <div
                className={`border-b px-6 pb-5 pt-7 sm:px-7 sm:pb-6 sm:pt-8 ${
                  p.highlighted ? "border-accent/20 bg-accent/6" : "border-white/8 bg-black/25"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${
                      p.highlighted
                        ? "bg-accent/20 text-accent ring-accent/35"
                        : "bg-white/5 text-accent ring-white/10"
                    }`}
                  >
                    <PlanIconMark variant={p.icon} className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{p.badge}</p>
                    <h3 className="font-display mt-1.5 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-left text-sm font-medium leading-snug text-zinc-200">{p.tagline}</p>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-5 text-left sm:px-7 sm:pb-7 sm:pt-6">
                <p className="text-sm leading-relaxed text-zinc-500">{p.description}</p>

                <div className="mt-5 rounded-2xl border border-white/6 bg-black/30 p-4 ring-1 ring-white/3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{p.featuresSectionTitle}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-300">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span
                          className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(0,229,160,0.45)]"
                          aria-hidden
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-2xl border border-white/8 bg-white/3 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Ideale per</p>
                  <p className="mt-1.5 text-sm leading-snug text-zinc-200">{p.idealFor}</p>
                </div>
              </div>

              <div className="mt-auto border-t border-white/8 bg-black/20 px-6 pb-6 pt-5 sm:px-7">
                <a
                  href={whatsappPrefilledUrl(p.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-center font-display text-sm font-bold tracking-tight transition ${
                    p.highlighted
                      ? "border border-accent/50 bg-accent text-black shadow-[0_14px_40px_-14px_rgba(0,229,160,0.5)] hover:brightness-110"
                      : "border border-accent/35 bg-accent/90 text-black hover:bg-accent hover:shadow-[0_12px_36px_-14px_rgba(0,229,160,0.4)]"
                  }`}
                >
                  {p.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>

        <article
          className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-accent/25 bg-linear-to-b from-zinc-900/88 to-black/55 p-8 shadow-[0_24px_80px_-40px_rgba(0,229,160,0.22)] ring-1 ring-white/10 sm:mt-20 sm:p-10 lg:p-12"
        >
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />
          <div className="relative text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                Add-on
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                Oltre alle schede digitali
              </span>
            </div>
            <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[1.85rem]">
              KataHero Social Kit
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Grafiche e testi pronti per raccontare partite, numeri, rinnovi e traguardi con la stessa pulizia della
              tua scheda ufficiale — così feed e canali social non diluiscono il messaggio quando la posta in gioco è
              alta.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Pensato per chi già usa Player Card o i portfolio agenziali e vuole continuità visiva tra sito, post e
              stories, senza rifare tutto da zero ogni volta.
            </p>

            <div className="mt-8 rounded-2xl border border-white/8 bg-black/35 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Può includere</p>
              <ul className="mt-4 grid gap-2.5 text-sm leading-relaxed text-zinc-300 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2.5">
                {socialKitFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 rounded-2xl border border-white/8 bg-white/3 px-4 py-3 text-sm leading-snug text-zinc-200">
              <span className="font-semibold text-zinc-100">Ideale per:</span> staff comunicazione, società e atleti che
              vogliono dati e risultati tradotti in post coerenti, veloci da approvare.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-end sm:gap-3">
              <a
                href={whatsappPrefilledUrl(socialKitWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-accent/40 bg-accent px-6 py-3.5 text-center font-display text-sm font-bold text-black shadow-[0_12px_40px_-16px_rgba(0,229,160,0.45)] transition hover:brightness-110 sm:max-w-xs sm:flex-initial"
              >
                Chiedi il Social Kit
              </a>
              <Link
                href="#contatti"
                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10 sm:max-w-xs sm:flex-initial"
              >
                Contattaci dal modulo
              </Link>
            </div>
          </div>
        </article>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-zinc-600 lg:text-left">
          Ambiti di lavoro, tempistiche e condizioni si concordano in preventivo dopo il primo confronto — nessun
          impegno dalla sola navigazione in home.
        </p>
      </div>
    </section>
  );
}
