import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { Packages } from "@/components/site/Packages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pacchetti atleta",
  description:
    "Rookie, Pro e Elite: prezzi, include, extra e condizioni per la presenza digitale dell'atleta KataHero.",
  path: "/pacchetti",
});

export default function PacchettiPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1 pt-[max(5.5rem,calc(4.5rem+env(safe-area-inset-top,0px)))] sm:pt-28">
        <div className="relative mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-zinc-500">
            <Link href="/" className="font-semibold underline-offset-2 transition hover:text-accent hover:underline">
              ← Torna al sito KataHero
            </Link>
          </p>
        </div>
        <Packages />
      </main>
      <Footer />
    </div>
  );
}
