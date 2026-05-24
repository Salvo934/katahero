import Link from "next/link";

const blocks = [
  {
    step: "Il problema",
    title: "Troppi profili, troppe informazioni sparse",
    body: [
      "Video su WhatsApp, dati in fogli Excel, curriculum in PDF, link persi nelle chat.",
      "Quando devi presentare un atleta, perdi tempo a cercare, sistemare e inviare tutto da capo.",
    ],
  },
  {
    step: "La soluzione",
    title: "Una board digitale per tutti i tuoi talenti",
    body: [
      "Con KataHero ogni atleta ha una scheda chiara con ruolo, categoria, video, percorso sportivo e contatti.",
      "Tutti i profili sono raccolti in un unico spazio, facili da consultare e condividere.",
    ],
  },
  {
    step: "Il risultato",
    title: "Più ordine, più velocità, più visibilità",
    body: [
      "Mostri i tuoi talenti in modo professionale, aiuti club e scout a valutarli più rapidamente e dai agli atleti una presentazione all'altezza delle loro ambizioni.",
    ],
  },
] as const;

export function Services() {
  return (
    <section
      id="servizi"
      className="relative scroll-mt-24 border-t border-white/10 bg-zinc-950 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,229,160,0.05)_0%,transparent_45%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            Vetrina digitale
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
            Da profili sparsi a talenti pronti da mostrare
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            KataHero raccoglie dati, video e informazioni degli atleti in un&apos;unica vetrina digitale, ordinata e
            professionale. Così ogni talento è facile da trovare, valutare e condividere.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6">
          {blocks.map((b) => (
            <article
              key={b.step}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-zinc-900/35 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:p-7"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-linear-to-r from-transparent via-accent/40 to-transparent opacity-70"
                aria-hidden
              />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{b.step}</p>
              <h3 className="font-display mt-4 text-lg font-bold leading-snug text-white sm:text-xl">
                {b.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-[0.9375rem]">
                {b.body.map((p, i) => (
                  <p key={`${b.step}-${i}`}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-white/12 bg-linear-to-br from-white/4 via-zinc-900/40 to-black/35 px-6 py-8 ring-1 ring-white/8 sm:mt-16 sm:px-10 sm:py-10 lg:text-center">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-[1.05rem]">
            <span className="font-semibold text-white">Pronto a mettere ordine?</span> Ti aiutiamo a costruire la tua{" "}
            <span className="text-zinc-200">vetrina talenti</span>: uno spazio chiaro dove club e scout valutano in fretta{" "}
            <span className="text-zinc-200">i profili che proponi</span>, senza ricostruire il pacco materiale ogni volta.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mx-auto">
            <Link
              href="#contatti"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_12px_40px_-14px_rgba(0,229,160,0.45)] transition hover:brightness-110 sm:flex-initial"
            >
              Richiedi la tua vetrina talenti
              <span className="ml-2 inline" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="#pacchetti"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/18 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/28 hover:bg-white/10 sm:flex-initial"
            >
              Vedi Spotlight, Collective e Roster HQ
            </Link>
          </div>
          <p className="mx-auto mt-5 max-w-md text-[11px] leading-snug text-zinc-600">
            Un solo punto di contatto: raccontiamo bisogni, tempi e pacchetti adatti alla tua agenzia o al singolo profilo.
          </p>
        </div>
      </div>
    </section>
  );
}
