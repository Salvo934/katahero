import Link from "next/link";
import { TalentMiniCard } from "@/components/site/TalentMiniCard";
import { TALENT_BOARD_SEASON_LABEL } from "@/lib/talent-board-data";

const audience = ["Agenzie", "Procuratori", "Staff scouting"] as const;

const talentBoardHighlights = [
  "Roster in un solo posto",
  "Condivisione controllata",
  "Presentazione ai club",
] as const;

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
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">KataHero · Talent Board</p>
            <p className="mt-2 text-xs font-medium text-zinc-500 sm:text-[0.8125rem]">
              Per chi rappresenta talenti e deve essere credibile nei confronti dei club
            </p>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-white sm:mt-6 sm:text-4xl md:text-[2.45rem] md:leading-[1.14]">
              <span className="block">Un roster che si presenta da solo.</span>
              <span className="mt-1.5 block sm:mt-2">
                <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                  Una board privata, zero caos.
                </span>
              </span>
            </h2>

            <ul
              className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              aria-label="Elementi principali Talent Board"
            >
              {talentBoardHighlights.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-300"
                >
                  {label}
                </li>
              ))}
            </ul>

            <ul
              className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              aria-label="Destinatari principali"
            >
              {audience.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-500"
                >
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-[1.05rem] sm:leading-relaxed">
              Aggrega il tuo roster su <strong className="font-semibold text-zinc-200">board private</strong>: stesso formato per
              ogni atleta, ricerca e filtri quando servono, e link al profilo completo da condividere in modo mirato con chi
              conta — senza inseguire PDF, chat sparse o versioni diverse della stessa scheda.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-[1.05rem] sm:leading-relaxed">
              La card qui accanto è il profilo pubblico realmente pubblicato di{" "}
              <strong className="font-semibold text-zinc-200">Ilario Simonetti</strong>. Nella pagina{" "}
              <Link href="/talent-board" className="font-medium text-zinc-300 underline-offset-2 hover:text-white hover:underline">
                Talent Board
              </Link>{" "}
              trovi la stessa esperienza interattiva con ricerca e filtri — il flusso che userai con il{" "}
              <strong className="font-semibold text-zinc-200">tuo roster</strong> in board privata.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-center">
            <div className="relative w-full max-w-80 sm:max-w-86">
              <div className="pointer-events-none absolute -inset-8 rounded-4xl bg-accent/7 blur-3xl" aria-hidden />
              <TalentMiniCard
                ariaLabel="Mini scheda Talent Board · Ilario Simonetti"
                photoUrl="/foto.jpeg"
                photoAlt="Ilario Simonetti"
                photoInitials="IS"
                nameDisplay="Ilario Simonetti"
                role="Ala piccola"
                category="Serie B"
                birthYear={2004}
                dominantHand="Destra"
                heightCm={200}
                weightKg={98}
                strengthPoint="Fisico importante: impatto nel pitturato e al contatto."
                nationalityCode="ITA"
                nationalityFull="Italia"
                clubName="Benacquista Assicurazioni Latina"
                clubLogoUrl="/latinalogo.png"
                availabilityLabel="Disponibile"
                availabilityHighlighted
                stats={[
                  { label: "Punti", value: "5,7" },
                  { label: "Rimbalzi", value: "1,8" },
                  { label: "Assist", value: "1,0" },
                ]}
                seasonLabel={TALENT_BOARD_SEASON_LABEL}
                compactPlus
              />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10 text-center lg:mt-16 lg:pt-12">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-500">
            La pagina Talent Board mostra <strong className="font-medium text-zinc-400">Ilario Simonetti</strong> come profilo
            pubblicato; lì esplori ricerca, filtri e condivisione delle schede. Per una{" "}
            <strong className="font-medium text-zinc-400">board private</strong> con tutto il tuo roster vedi i{" "}
            <Link href="/#pacchetti" className="font-medium text-zinc-400 underline-offset-2 hover:text-white hover:underline">
              pacchetti
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mx-auto sm:flex-row sm:max-w-xl sm:flex-wrap">
            <Link
              href="/talent-board"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-[0_10px_36px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95 sm:flex-initial"
            >
              Apri Talent Board interattiva
              <span className="ml-2" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="#contatti"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
            >
              Parla di board private
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
