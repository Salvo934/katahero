import Link from "next/link";
import type { TalentAthlete } from "@/lib/talent-board-data";

function initials(a: TalentAthlete) {
  return `${a.firstName[0] ?? ""}${a.lastName[0] ?? ""}`.toUpperCase();
}

export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  const { advanced: s } = athlete;

  return (
    <article className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/12 bg-zinc-950 shadow-[0_32px_100px_-48px_rgba(0,0,0,0.95)] ring-1 ring-white/7 transition duration-300 hover:border-accent/25 hover:shadow-[0_40px_100px_-40px_rgba(0,229,160,0.14)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/55 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/12 blur-3xl transition duration-500 group-hover:bg-accent/16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-emerald-500/5 blur-3xl"
        aria-hidden
      />

      <div className="relative grid lg:grid-cols-12 lg:gap-0">
        {/* Pannello visivo */}
        <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden bg-linear-to-br from-zinc-800 via-zinc-900 to-black lg:col-span-5 lg:min-h-[400px]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath fill='none' stroke='rgba(255,255,255,0.06)' d='M0 30h60M30 0v60'/%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"
            aria-hidden
          />

          <div className="relative z-10 flex flex-wrap gap-2 p-5 sm:p-6">
            <span className="rounded-full border border-accent/35 bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              In vetrina
            </span>
            {athlete.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-200 backdrop-blur-md"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-8 pt-2 lg:pb-12">
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-accent/20 blur-2xl transition duration-500 group-hover:bg-accent/28" aria-hidden />
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-white/12 bg-linear-to-br from-white/10 to-zinc-900/80 font-display text-5xl font-extrabold tracking-tight text-white shadow-[0_0_80px_-12px_rgba(0,229,160,0.35)] ring-2 ring-accent/20 transition duration-300 group-hover:scale-[1.02] group-hover:ring-accent/40 sm:h-40 sm:w-40 sm:text-6xl">
                {initials(athlete)}
              </div>
            </div>
            <p className="mt-6 text-center font-display text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
              {athlete.sport}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-px border-t border-white/10 bg-white/10">
            {[
              { label: "PPG", value: s.ppg },
              { label: "RPG", value: s.rpg },
              { label: "APG", value: s.apg },
            ].map((row) => (
              <div key={row.label} className="bg-black/50 px-2 py-3 text-center backdrop-blur-sm sm:py-4">
                <p className="font-display text-xl font-bold tabular-nums text-white sm:text-2xl">{row.value}</p>
                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-accent">{row.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contenuto */}
        <div className="relative flex flex-col justify-center border-t border-white/10 bg-zinc-900/25 p-6 sm:p-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:border-white/10 lg:py-10">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            <span className="text-accent">{athlete.category}</span>
            <span aria-hidden className="text-zinc-700">
              ·
            </span>
            <span>{athlete.role}</span>
            <span aria-hidden className="text-zinc-700">
              ·
            </span>
            <span>Nato {athlete.birthYear}</span>
          </div>

          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.35rem] md:leading-tight">
            {athlete.firstName}{" "}
            <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">{athlete.lastName}</span>
          </h2>

          <p className="mt-3 text-sm font-medium leading-snug text-zinc-400">{athlete.club}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-black/30 px-4 py-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Altezza</dt>
              <dd className="mt-1 font-display text-lg font-bold text-white">{athlete.heightCm} cm</dd>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/30 px-4 py-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Nazionalità</dt>
              <dd className="mt-1 font-semibold text-zinc-100">{athlete.nationality}</dd>
            </div>
            <div className="col-span-2 rounded-2xl border border-white/8 bg-black/30 px-4 py-3 sm:col-span-1">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Status</dt>
              <dd className="mt-1 font-semibold text-zinc-100">{athlete.status}</dd>
            </div>
            <div className="col-span-2 rounded-2xl border border-accent/15 bg-accent/5 px-4 py-3 sm:col-span-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-accent/80">Agenzia</dt>
              <dd className="mt-1 font-medium text-zinc-100">{athlete.agency}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold tabular-nums text-zinc-200">FG {s.fgPct}%</span>
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold tabular-nums text-zinc-200">3P {s.tpPct}%</span>
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold tabular-nums text-zinc-200">FT {s.ftPct}%</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={athlete.profilePath}
              className="group/cta inline-flex h-12 flex-1 items-center justify-center rounded-2xl bg-accent px-6 text-sm font-bold text-black shadow-[0_12px_40px_-12px_rgba(0,229,160,0.55)] transition hover:brightness-110 active:brightness-95"
            >
              Apri profilo completo
              <span className="ml-2 transition-transform group-hover/cta:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
            <p className="text-center text-[11px] leading-snug text-zinc-600 sm:max-w-48 sm:text-left">
              Highlight, carriera, social e contatti sul sito KataHero.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
