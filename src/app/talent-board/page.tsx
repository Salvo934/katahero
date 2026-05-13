import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Talent Board",
  description: `Sfoglia le mini schede degli atleti ${SITE.name}: dati essenziali e link al sito completo di ogni giocatore.`,
  path: "/talent-board",
});

export default function TalentBoardPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1 border-t border-white/10 bg-zinc-950 pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Talent Board</p>
          <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mini schede in arrivo
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Qui raccoglieremo tutte le <strong className="font-medium text-zinc-200">mini card</strong> degli atleti:
            potrai filtrare, confrontare e aprire con un tap il <strong className="font-medium text-zinc-200">sito completo</strong> di
            ciascun giocatore. Stiamo allestendo l’esperienza; intanto puoi vedere un esempio di scheda full nel{" "}
            <Link href="/#portfolio" className="font-semibold text-accent underline-offset-2 hover:underline">
              portfolio
            </Link>
            .
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#talent-board"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/10"
            >
              ← Torna alla presentazione
            </Link>
            <Link
              href="/#contatti"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
