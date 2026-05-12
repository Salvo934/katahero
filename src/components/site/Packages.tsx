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

        <div className="relative mx-auto mt-14 max-w-4xl rounded-2xl border border-white/10 bg-zinc-900/40 p-7 text-center sm:mt-16 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-accent/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent">
              Add-on
            </span>
            <span className="text-xs text-zinc-500">Social &amp; comunicazione</span>
          </div>
          <h3 className="font-display mt-5 text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">
            KataHero Social Kit
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed text-zinc-400 sm:text-base">
            Stesse regole visive delle schede: post e stories allineati al messaggio che mandi a club e sponsor, senza
            ricominciare da capo a ogni uscita importante.
          </p>

          <div className="mt-6 border-t border-white/10 pt-6 text-left">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Può includere
            </p>
            <ul className="mx-auto mt-4 max-w-3xl grid gap-x-8 gap-y-2 text-sm leading-snug text-zinc-300 sm:grid-cols-2">
              {socialKitFeatures.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0 text-accent" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-snug text-zinc-500">
            <span className="text-zinc-400">Ideale per </span>
            staff comunicazione, società e atleti che vogliono post coerenti e veloci da approvare.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappPrefilledUrl(socialKitWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black shadow-[0_8px_32px_-8px_rgba(0,229,160,0.4)] transition hover:brightness-110 sm:flex-initial sm:min-w-[200px]"
            >
              Chiedi il Social Kit
            </a>
            <Link
              href="#contatti"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/5 sm:flex-initial sm:min-w-[200px]"
            >
              Contattaci dal modulo
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          Ogni incarico parte da un confronto: tempi, contenuti e condizioni le definiamo in preventivo. Sfogliare la
          pagina non crea obblighi.
        </p>
      </div>
    </section>
  );
}
