import Image from "next/image";
import Link from "next/link";

const caseStudy = {
  label: "Case study",
  title: "Ilario Simonetti",
  coverImage: "/portfolio/ilario-simonetti-case-study.png",
  coverAlt: "Ilario Simonetti in maglia da gioco, ritratto sul parquet",
  role: "Basket · Point guard · #7",
  location: "Italia · Benacquista Assicurazioni Latina",
  liveUrl: "https://ilariosimonetti.katahero.com",
  liveHostname: "ilariosimonetti.katahero.com",
  summary:
    "Sito ufficiale one-page per un atleta under pro: intro cinematografica, highlight YouTube, statistiche di stagione, gallery, biografia lunga, interviste, social e prototipo shop maglia — un solo link da mandare a club, media e tifosi.",
  context: {
    title: "Contesto",
    text:
      "Serveva un hub chiaro oltre i social: numeri aggiornati, video, storia del percorso e punti di contatto in un’unica esperienza mobile-first, coerente con il brand in campo (#7).",
  },
  work: {
    title: "Cosa abbiamo fatto",
    items: [
      "Hero con ruolo, fisico e CTA verso highlight e merchandising",
      "Sezioni Highlights (YouTube), Statistiche (last games + regular season), Foto e Storia narrativa",
      "Interviste e Social (Instagram, TikTok, Facebook) con link diretti",
      "Shop prototipo per maglia ufficiale — UX pronta per integrazione pagamenti",
    ],
  },
  outcome: {
    title: "Risultati",
    text:
      "Un’unica destinazione per scouting e comunicazione: meno attrito nel far arrivare sponsor e giornalisti a video, dati e bio, con look professionale da atleta.",
  },
  stats: [
    { value: "8+", label: "Sezioni (highlights → shop)" },
    { value: "1", label: "Sito ufficiale live" },
    { value: "Mobile", label: "Priorità da smartphone" },
  ],
  quote: {
    text:
      "Dal primo scroll si capisce chi è il giocatore: numeri, video e storia in sequenza, senza perdere il filo tra parquet e personal brand.",
    note: "Case study su progetto pubblico · Ilario Simonetti #7",
  },
};

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-black py-14 sm:py-18"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(0,229,160,0.07),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent sm:text-[11px]">Portfolio</p>
          <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Un progetto, tutto il percorso
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Per ora mostriamo un <strong className="font-medium text-zinc-200">case study</strong> completo: presto
            aggiungeremo altri lavori.
          </p>
        </div>

        <article className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-[0_28px_72px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/5 backdrop-blur-sm sm:mt-12">
          <div className="grid lg:grid-cols-12 lg:gap-0">
            {/* Pannello visivo */}
            <div className="relative flex min-h-[220px] flex-col justify-between bg-linear-to-br from-zinc-900 via-black to-zinc-950 p-6 sm:min-h-[260px] lg:col-span-5 lg:min-h-0 lg:self-stretch lg:p-7">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2248%22%20height%3D%2248%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.05)%22%20d%3D%22M0%2048h48M48%200v48%22%2F%3E%3C%2Fsvg%3E')]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/15 blur-[80px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-[60px]"
                aria-hidden
              />

              <div className="relative">
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-zinc-300 sm:text-[10px]">
                  {caseStudy.label}
                </span>
                <p className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {caseStudy.title}
                </p>
                <p className="mt-1.5 text-xs font-medium text-accent/90 sm:text-sm">{caseStudy.role}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-zinc-500 sm:text-xs">{caseStudy.location}</p>
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-accent transition hover:border-accent/60 hover:bg-accent/15 sm:px-4 sm:py-2 sm:text-xs"
                >
                  Visita il sito
                  <span className="text-zinc-400" aria-hidden>
                    →
                  </span>
                  <span className="sr-only"> (si apre in una nuova scheda)</span>
                </a>
              </div>

              <div className="relative mt-5 w-full lg:mt-6">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-inner ring-1 ring-white/10 sm:aspect-3/4">
                  <Image
                    src={caseStudy.coverImage}
                    alt={caseStudy.coverAlt}
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <p className="mt-2 text-center text-[9px] leading-snug text-zinc-500 sm:text-[10px] lg:text-left">
                  #7 · hub ufficiale per media, club e community
                </p>
              </div>
            </div>

            {/* Contenuto */}
            <div className="flex flex-col justify-center border-t border-white/10 p-6 sm:p-7 lg:col-span-7 lg:border-t-0 lg:border-l lg:border-white/10 lg:py-8 lg:pr-8">
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">{caseStudy.summary}</p>

              <div className="mt-6 space-y-6 sm:mt-7 sm:space-y-7">
                <div>
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px]">
                    {caseStudy.context.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">{caseStudy.context.text}</p>
                </div>

                <div>
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px]">
                    {caseStudy.work.title}
                  </h3>
                  <ul className="mt-2 space-y-2 text-xs text-zinc-300 sm:mt-3 sm:text-sm">
                    {caseStudy.work.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px]">
                    {caseStudy.outcome.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">{caseStudy.outcome.text}</p>
                </div>
              </div>

              <dl className="mt-6 grid grid-cols-1 gap-3 border-y border-white/10 py-5 sm:grid-cols-3 sm:gap-4 sm:py-6">
                {caseStudy.stats.map((s) => (
                  <div key={s.label} className="text-center sm:text-left">
                    <dt className="font-display text-xl font-bold text-white sm:text-2xl">{s.value}</dt>
                    <dd className="mt-0.5 text-[10px] leading-snug text-zinc-500 sm:text-xs">{s.label}</dd>
                  </div>
                ))}
              </dl>

              <figure className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 sm:p-5">
                <blockquote className="text-xs italic leading-relaxed text-zinc-300 sm:text-sm">
                  “{caseStudy.quote.text}”
                </blockquote>
                <figcaption className="mt-2 text-[10px] text-zinc-600 sm:mt-3 sm:text-[11px]">{caseStudy.quote.note}</figcaption>
              </figure>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <p className="text-[11px] text-zinc-600 sm:text-xs">Vuoi un percorso simile sul tuo sport e sui tuoi obiettivi?</p>
                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-stretch sm:gap-2.5">
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:text-sm"
                  >
                    Apri {caseStudy.liveHostname}
                  </a>
                  <Link
                    href="#contatti"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-black shadow-[0_10px_32px_-14px_rgba(0,229,160,0.45)] transition hover:brightness-110 sm:text-sm"
                  >
                    Raccontaci il tuo caso
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
