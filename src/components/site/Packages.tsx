import Link from "next/dist/client/link";
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
  tagline: string;
  description: string;
  featuresSectionTitle: string;
  features: string[];
  idealFor: string;
  pricingLabel: string;
  ctaLabel: string;
  whatsappMessage: string;
  highlighted: boolean;
};

const plans: Plan[] = [
  {
    name: "Player Card",
    tagline: "Per giocatori che vogliono presentare il proprio profilo sportivo in modo ordinato e professionale.",
    description:
      "Una scheda atleta digitale con dati, statistiche, video, percorso sportivo e contatti raccolti in un unico link, pronta da condividere con club, agenti, società e staff tecnici.",
    featuresSectionTitle: "Include:",
    features: [
      "Scheda atleta digitale personalizzata",
      "Dati fisici e sportivi",
      "Ruolo, squadra, campionato e stagione",
      "Statistiche principali",
      "Video highlights integrato",
      "Percorso sportivo",
      "Contatto referente",
      "Link unico condivisibile",
      "Ottimizzazione mobile",
      "PDF sintetico scaricabile",
    ],
    idealFor: "giocatori, prospetti, free agent e atleti che vogliono avere un profilo professionale da condividere.",
    pricingLabel: "Da 149€",
    ctaLabel: "Crea la tua Player Card",
    whatsappMessage:
      "Ciao! Vorrei creare la mia Player Card KataHero (da 149€): scheda atleta digitale con link e PDF. Potete darmi i prossimi passi?",
    highlighted: false,
  },
  {
    name: "Agency Portfolio",
    tagline:
      "Per procuratori, agenti e piccole agenzie che vogliono presentare più atleti con un formato professionale.",
    description:
      "Un portfolio digitale con schede atleta dedicate, pensato per sostituire materiali sparsi tra PDF, video, pagine di lega e messaggi WhatsApp.",
    featuresSectionTitle: "Include:",
    features: [
      "Pagina agenzia / procuratore personalizzata",
      "Fino a 10 schede atleta digitali",
      "Dati, statistiche, video e percorso per ogni giocatore",
      "Contatto referente centralizzato",
      "Branding agenzia o procuratore",
      "PDF per ogni atleta",
      "Link portfolio condivisibile",
      "Supporto nella raccolta materiali",
      "1 aggiornamento mensile incluso",
    ],
    idealFor: "procuratori indipendenti, agenti e agenzie che gestiscono un primo gruppo di atleti.",
    pricingLabel: "Da 99€/mese",
    ctaLabel: "Richiedi una demo",
    whatsappMessage:
      "Ciao! Vorrei richiedere una demo per Agency Portfolio KataHero (da 99€/mese): portfolio con schede atleta. Quando possiamo parlarne?",
    highlighted: true,
  },
  {
    name: "Agency Pro",
    tagline:
      "Per agenzie, società e academy che vogliono gestire e presentare un roster più ampio in modo strutturato.",
    description:
      "Una soluzione avanzata per organizzare più atleti, filtrarli per ruolo e caratteristiche, aggiornare i materiali e condividere schede professionali con club, scout e staff tecnici.",
    featuresSectionTitle: "Include tutto Agency Portfolio, più:",
    features: [
      "Schede atleta su misura per roster più ampi",
      "Filtri per ruolo, anno, altezza, categoria, status e disponibilità",
      "Sezioni video per skill o caratteristiche di gioco",
      "Profilo tecnico e Best Fit per ogni atleta",
      "Area riservata o schede private su richiesta",
      "Aggiornamenti periodici dei dati",
      "PDF professionale per ogni atleta",
      "Supporto prioritario",
      "Personalizzazione grafica avanzata",
      "Report o statistiche di visualizzazione, se disponibili",
    ],
    idealFor: "agenzie strutturate, società sportive, academy, settori giovanili e gruppi squadra.",
    pricingLabel: "Su richiesta",
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Pacchetti</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Dalla{" "}
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">Player Card</span> al
            roster completo
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Tre livelli per atleti singoli, agenzie e organizzazioni che devono presentare talenti con chiarezza —
            scrivici per il piano giusto o una demo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex h-full flex-col rounded-3xl border px-6 pb-6 pt-10 sm:px-7 sm:pb-7 sm:pt-11 ${
                p.highlighted
                  ? "border-accent/35 bg-zinc-900/50 ring-1 ring-accent/25 shadow-[0_20px_60px_-28px_rgba(0,229,160,0.45)]"
                  : "border-white/10 bg-zinc-900/35 hover:border-white/16"
              }`}
            >
              {p.highlighted ? (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black shadow-[0_8px_24px_-8px_rgba(0,229,160,0.55)]">
                  Consigliato
                </span>
              ) : null}

              <div className="flex flex-1 flex-col gap-4 text-center">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">{p.name}</h3>
                  <p className="mt-2 text-sm font-medium leading-snug text-zinc-400">{p.tagline}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Investimento</p>
                  <p className="mt-1 font-display text-[1.65rem] font-bold leading-none tabular-nums tracking-tight text-white sm:text-[1.75rem]">
                    {p.pricingLabel}
                  </p>
                </div>

                <p className="text-left text-sm leading-relaxed text-zinc-400">{p.description}</p>

                <div className="flex flex-1 flex-col border-t border-white/10 pt-5 text-left">
                  <p className="mb-3 text-sm font-semibold text-zinc-100">{p.featuresSectionTitle}</p>
                  <ul className="flex-1 space-y-2.5 text-sm leading-relaxed text-zinc-300">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-snug text-zinc-200">
                    <span className="font-semibold text-zinc-100">Ideale per:</span> {p.idealFor}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex w-full shrink-0 flex-col gap-3">
                <a
                  href={whatsappPrefilledUrl(p.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-accent/40 bg-accent px-5 py-3.5 text-center font-display text-sm font-bold tracking-tight text-black shadow-[0_12px_40px_-16px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95"
                >
                  {p.ctaLabel}
                </a>
                <Link
                  href="#contatti"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-transparent py-3 text-sm font-medium text-zinc-300 transition hover:border-white/22 hover:bg-white/4 hover:text-white"
                >
                  Preferisci email / modulo
                </Link>
              </div>
            </article>
          ))}
        </div>

        <article
          className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-accent/25 bg-linear-to-b from-zinc-900/85 to-black/55 p-8 shadow-[0_24px_80px_-40px_rgba(0,229,160,0.22)] ring-1 ring-white/10 sm:p-10 lg:p-12"
        >
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />
          <div className="relative text-left">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[1.85rem]">
              KataHero Social Kit
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Contenuti social personalizzati per comunicare in modo professionale statistiche, gameday, rinnovi,
              trasferimenti, milestone e aggiornamenti degli atleti.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Il Social Kit è pensato per agenzie, società e atleti che vogliono mantenere una comunicazione coerente
              anche fuori dalla scheda digitale, con grafiche pronte per post, stories e canali ufficiali.
            </p>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm font-semibold text-zinc-100">Può includere:</p>
              <ul className="mt-4 grid gap-2.5 text-sm leading-relaxed text-zinc-300 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2.5">
                {socialKitFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm leading-snug text-zinc-200">
              <span className="font-semibold text-zinc-100">Ideale per:</span> chi vuole trasformare dati, risultati e
              aggiornamenti sportivi in contenuti social professionali e coerenti.
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-lg font-bold text-white sm:text-xl">Su richiesta</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsappPrefilledUrl(socialKitWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-accent/40 bg-accent px-6 py-3.5 text-center font-display text-sm font-bold text-black shadow-[0_12px_40px_-16px_rgba(0,229,160,0.45)] transition hover:brightness-110"
                >
                  Chiedi il Social Kit
                </a>
                <Link
                  href="#contatti"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  Contattaci dal modulo
                </Link>
              </div>
            </div>
          </div>
        </article>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          I valori sono indicativi e da intendersi IVA esclusa o inclusa secondo preventivo. Player Card come progetto
          una tantum; Agency Portfolio come canone ricorrente salvo diverso accordo; Agency Pro su misura.
        </p>
      </div>
    </section>
  );
}
