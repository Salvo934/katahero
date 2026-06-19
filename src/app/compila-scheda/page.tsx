import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PlayerIntakeForm } from "@/components/site/PlayerIntakeForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Compila la tua scheda",
  description:
    "Modulo per atleti: invia dati, statistiche, video e obiettivi per la Player Card KataHero. Il riepilogo arriva su WhatsApp.",
  path: "/compila-scheda",
});

export default function CompilaSchedaPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1 pt-[max(5.5rem,calc(4.5rem+env(safe-area-inset-top,0px)))] sm:pt-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,229,160,0.12),transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <header className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">Atleti</p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Compila la tua{" "}
              <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                Player Card
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Raccontaci chi sei in campo: profilo, numeri, pitch, video e pacchetto. Basato sulla struttura delle schede
              KataHero come{" "}
              <a
                href="https://alfonsozampogna16.katahero.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-white"
              >
                alfonsozampogna16.katahero.com
              </a>
              .
            </p>
            <Link
              href="/#pacchetti"
              className="mt-4 inline-block text-xs font-semibold text-zinc-500 underline-offset-2 transition hover:text-accent hover:underline"
            >
              Confronta Starter, Player Social e Player Pro →
            </Link>
          </header>

          <div className="mt-10 sm:mt-12">
            <PlayerIntakeForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
