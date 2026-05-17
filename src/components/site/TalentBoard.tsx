import Link from "next/link";
import { TalentMiniCard } from "@/components/site/TalentMiniCard";
import { TALENT_BOARD_SEASON_LABEL } from "@/lib/talent-board-data";

const audience = ["Società & scouting", "Agenzie", "Procuratori"] as const;

export function TalentBoard() {
  return (
    <section
      id="talent-board"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-zinc-950 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(0,229,160,0.055),transparent_52%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">KataHero Talent Board</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.45rem] md:leading-[1.14]">
              Meno rumore tra chi{" "}
              <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                cerca e chi presenta
              </span>{" "}
              un talento
            </h2>

            <ul
              className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              aria-label="Destinatari principali"
            >
              {audience.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-300"
                >
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-[1.05rem] sm:leading-relaxed">
              La Talent Board è una <strong className="font-semibold text-zinc-200">vetrina pubblica</strong> di mini
              schede: un unico luogo dove{" "}
              <strong className="font-semibold text-zinc-200">società e scouting</strong> confrontano profili senza
              inseguire file e screenshot, le <strong className="font-semibold text-zinc-200">agenzie</strong> danno
              visibilità ordinata al roster e i <strong className="font-semibold text-zinc-200">procuratori</strong>{" "}
              condividono nomi e numeri con club e partner in modo chiaro e ripetibile.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-[1.05rem] sm:leading-relaxed">
              Ogni scheda riassume{" "}
              <strong className="font-semibold text-zinc-200">
                ruolo, categoria, anno, nazionalità, club, statistiche chiave e disponibilità
              </strong>
              . <strong className="font-semibold text-zinc-200">Un tap</strong> apre il sito completo dell’atleta —
              foto, video, carriera, social e contatti aggiornati, lo stesso standard del profilo KataHero che usi nelle
              trattative.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-center">
            <div className="relative w-full max-w-84 sm:max-w-92">
              <div className="pointer-events-none absolute -inset-8 rounded-4xl bg-accent/7 blur-3xl" aria-hidden />
              <TalentMiniCard
                ariaLabel="Esempio di mini scheda Talent Board"
                nameDisplay="Mario Rossi"
                jerseyNumber={11}
                role="Playmaker"
                category="U19"
                birthYear={2006}
                dominantHand="Destra"
                heightCm={188}
                weightKg={82}
                nationalityCode="ITA"
                nationalityFull="Italia"
                clubName="Benacquista Ass. Latina"
                availabilityLabel="Disponibile"
                availabilityHighlighted
                stats={[
                  { label: "Punti", value: "12,4" },
                  { label: "Rimbalzi", value: "5,2" },
                  { label: "Assist", value: "4,8" },
                ]}
                seasonLabel={TALENT_BOARD_SEASON_LABEL}
              />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10 text-center lg:mt-16 lg:pt-12">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-500">
            Scheda dimostrativa: sulla{" "}
            <Link href="/talent-board" className="font-medium text-zinc-400 underline-offset-2 hover:text-white hover:underline">
              Talent Board
            </Link>{" "}
            trovi le mini card degli atleti (oggi in vetrina il basket) e i link ai profili completi.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mx-auto sm:flex-row sm:max-w-xl sm:flex-wrap">
            <Link
              href="/talent-board"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95 sm:flex-initial"
            >
              Esplora Talent Board
              <span className="ml-2" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="#contatti"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
            >
              Proponi i tuoi atleti
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
