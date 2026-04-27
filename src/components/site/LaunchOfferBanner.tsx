import Link from "next/dist/client/link";

export function LaunchOfferBanner() {
  return (
    <section
      className="relative mt-12 scroll-mt-4 border-b border-white/10 bg-zinc-950 pt-6 pb-10 sm:mt-16 sm:pt-8 sm:pb-12 lg:mt-20 lg:pt-10"
      aria-labelledby="launch-offer-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,229,160,0.07)_50%,transparent_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-accent/30 bg-linear-to-br from-accent/15 via-zinc-900/95 to-zinc-950 shadow-[0_0_56px_-24px_rgba(0,229,160,0.4)] ring-1 ring-white/5 sm:rounded-3xl">
          <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6 lg:p-7">
            <div
              className="flex h-18 w-18 shrink-0 flex-col items-center justify-center rounded-2xl bg-black/50 shadow-inner ring-1 ring-accent/35 sm:h-24 sm:w-24"
              aria-hidden
            >
              <span className="font-display text-3xl font-bold leading-none text-accent sm:text-4xl">10</span>
              <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">posti</span>
            </div>

            <div className="min-w-0 flex-1">
              <span className="inline-flex items-center rounded-full bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-accent ring-1 ring-accent/35">
                Lancio · Early access
              </span>
              <h2
                id="launch-offer-heading"
                className="font-display mt-3 text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl"
              >
                Listino bloccato per i primi progetti confermati
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                Se entri tra i <strong className="font-semibold text-zinc-200">primi 10 clienti</strong>, Start, Pro ed
                Elite restano ai <strong className="font-semibold text-zinc-200">prezzi che vedi in pagina</strong>{" "}
                — niente sorprese dopo. Quando i posti finiscono, il listino può aggiornarsi.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-stretch gap-3 sm:items-end">
              <p className="text-center text-[11px] leading-tight text-zinc-500 sm:text-right">
                Zero impegno dalla home:
                <br />
                <span className="text-zinc-400">controlli i pacchetti e ci scrivi quando vuoi.</span>
              </p>
              <Link
                href="#pacchetti"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_32px_-14px_rgba(0,229,160,0.55)] transition hover:brightness-110"
              >
                Vedi prezzi e pacchetti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
