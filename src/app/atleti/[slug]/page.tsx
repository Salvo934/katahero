import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { DEMO_ATHLETES_BASKETBALL } from "@/lib/talent-board-data";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return DEMO_ATHLETES_BASKETBALL.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props) {
  const { slug } = params;
  const athlete = DEMO_ATHLETES_BASKETBALL.find((a) => a.slug === slug);
  const name = athlete ? `${athlete.firstName} ${athlete.lastName}` : "Atleta";
  return pageMetadata({
    title: name,
    description: athlete
      ? `Profilo ${name} — ${athlete.club} · ${SITE.name}`
      : `Profilo atleta — ${SITE.name}`,
    path: `/atleti/${slug}`,
  });
}

export default function AthleteProfilePage({ params }: Props) {
  const { slug } = params;
  const athlete = DEMO_ATHLETES_BASKETBALL.find((a) => a.slug === slug);

  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1 border-t border-white/10 bg-zinc-950 pt-24 pb-16 sm:pt-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {athlete ? (
            <>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Profilo atleta · demo</p>
              <h1 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
                {athlete.firstName} {athlete.lastName}
              </h1>
              <p className="mt-2 text-zinc-400">
                {athlete.sport} · {athlete.role} · {athlete.club}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-zinc-500">
                Pagina profilo completo in costruzione: qui collegherai foto, video, carriera, social e contatti KataHero.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display text-3xl font-bold text-white">Atleta non trovato</h1>
              <p className="mt-3 text-zinc-500">Questo slug non è nel dataset demo.</p>
            </>
          )}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/talent-board#griglia-atleti"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/18 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              ← Torna alla Talent Board
            </Link>
            <Link
              href="/#contatti"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black hover:brightness-110"
            >
              Contatti
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
