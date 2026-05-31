import Link from "next/link";
import { whatsappPrefilledUrl } from "@/lib/site";

type Plan = {
  name: string;
  badge: string;
  promoPill?: string;
  /** Sottotitolo sotto il nome (es. figurina digitale). */
  subtitle?: string;
  /** Per chi è pensato — riga introduttiva. */
  audienceLine?: string;
  /** Frase vendita principale. */
  salesLine: string;
  /** Blocco prezzo opzionale. */
  pricing?: {
    launch: string;
    launchNote: string;
  };
  whyBuyTitle: string;
  whyBuy: string;
  featuresSectionTitle: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
  variant?: "default" | "featured" | "flagship";
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
    whyBuyTitle: "Perché lo comprano",
    whyBuy:
      "Perché non sembra un “sito”. Sembra la loro figurina professionale, con un link personale da mostrare.",
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
    variant: "featured",
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
    whyBuyTitle: "Perché lo comprano",
    whyBuy:
      "Perché non comprano solo un profilo: comprano immagine pronta per Instagram.",
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
            Card e Pro per l&apos;atleta,{" "}
            <span className="bg-linear-to-r from-white to-accent bg-clip-text text-transparent">immagine pronta online</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Due livelli chiari: <strong className="font-semibold text-zinc-300">KATA HERO Card</strong> per la figurina
            digitale con link personale; <strong className="font-semibold text-zinc-300">KATA HERO Pro</strong> aggiunge
            Social Kit e template Instagram per i momenti chiave — grafiche nel sito, condivisione con un click.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/talent-board"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition hover:border-accent/50 hover:bg-accent/18 sm:text-sm"
            >
              Esplora la Talent Board <span aria-hidden>→</span>
            </Link>
            <span className="hidden text-[11px] text-zinc-600 sm:inline">
              Demo pubblica · Thomas Aguzzoli, Ilario Simonetti e altri
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          {plans.map((p) => {
            const v = p.variant ?? "default";
            const cardClass =
              v === "flagship"
                ? "flex h-full min-h-0 flex-col rounded-2xl border border-accent/38 bg-zinc-900/55 p-6 shadow-[0_0_0_1px_rgba(0,229,160,0.1),0_24px_64px_-36px_rgba(0,229,160,0.14)] transition-colors sm:p-8 hover:border-accent/48 hover:bg-zinc-900/62"
                : v === "featured"
                  ? "flex h-full min-h-0 flex-col rounded-2xl border border-white/15 bg-zinc-900/42 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-colors sm:p-8 hover:border-white/22 hover:bg-zinc-900/50 lg:relative lg:z-10 lg:scale-[1.01]"
                  : "flex h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-colors sm:p-8 hover:border-white/16 hover:bg-zinc-900/48";

            return (
              <article key={p.name} className={cardClass}>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{p.badge}</p>
                    {p.promoPill ? (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-px text-[9px] font-bold tracking-wide text-accent">
                        {p.promoPill}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">{p.name}</h3>
                  {p.subtitle ? (
                    <p className="mt-1.5 text-sm font-medium text-accent/90">{p.subtitle}</p>
                  ) : null}
                  {p.audienceLine ? (
                    <p className="mt-3 text-sm leading-snug text-zinc-400">{p.audienceLine}</p>
                  ) : null}
                  <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-200">{p.salesLine}</p>
                </div>

                {p.pricing ? (
                  <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/5 p-4 sm:p-5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {p.pricing.launch}
                      </p>
                      <p className="text-sm font-medium text-zinc-400">{p.pricing.launchNote}</p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 px-4 py-3.5 sm:px-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Investimento</p>
                    <p className="mt-1 text-sm font-medium text-zinc-300">Su preventivo · perimetro su misura</p>
                  </div>
                )}

                <div className="mt-6 flex min-h-0 flex-1 flex-col border-t border-white/10 pt-6">
                  <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {p.featuresSectionTitle}
                  </p>
                  <ul className="mt-4 min-h-0 flex-1 space-y-2.5 text-sm leading-snug text-zinc-300">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                          ✓
                        </span>
                        <span className={f.startsWith("Tutto KATA HERO Card") ? "font-semibold text-zinc-100" : undefined}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 shrink-0 rounded-xl border border-white/8 bg-black/25 px-4 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{p.whyBuyTitle}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{p.whyBuy}</p>
                  </div>
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

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
          Prezzi lancio validi per i primi 20 atleti per ciascun pacchetto, salvo diversa comunicazione.
        </p>
      </div>
    </section>
  );
}
