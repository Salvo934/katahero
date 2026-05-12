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
  tagline: string;
  featuresSectionTitle: string;
  features: string[];
  idealFor: string;
  ctaLabel: string;
  whatsappMessage: string;
};

const plans: Plan[] = [
  {
    name: "Player Card",
    badge: "Singolo atleta",
    tagline: "Il link che apri quando qualcuno deve valutarti in fretta — senza file sparsi o DM lunghi.",
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
  },
  {
    name: "Agency Portfolio",
    badge: "Agenzia / procuratore",
    tagline: "Un solo indirizzo per il tuo marchio e per le schede dei tuoi assistiti — ordinato e riconoscibile.",
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
  },
  {
    name: "Agency Pro",
    badge: "Roster & organizzazioni",
    tagline: "Gestisci molti profili con filtri, aggiornamenti e materiali che reggono il confronto con club e scouting.",
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
            Tre modi di presentare il basket,{" "}
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">
              con la stessa cura professionale
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Player Card per chi deve emergere con un link pulito. Agency Portfolio quando rappresenti più atleti sotto
            un&apos;unica immagine. Agency Pro quando roster, filtri e aggiornamenti sono parte del lavoro quotidiano.
            Qui trovi cosa include ogni perimetro; tempi e condizioni economiche li allineiamo in preventivo dopo un primo
            contatto — senza costringerti a listini fissi online.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {plans.map((p) => (
            <article
              key={p.name}
              className="flex h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-colors sm:p-7 hover:border-white/16 hover:bg-zinc-900/50"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{p.badge}</p>
                <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-white sm:text-[1.35rem]">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm font-medium leading-snug text-zinc-300">{p.tagline}</p>
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
          ))}
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
