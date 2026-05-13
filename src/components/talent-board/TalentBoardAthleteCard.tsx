import Link from "next/link";
import type { TalentAthlete } from "@/lib/talent-board-data";

function initials(a: TalentAthlete) {
  return `${a.firstName[0] ?? ""}${a.lastName[0] ?? ""}`.toUpperCase();
}

export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/5 transition duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_24px_56px_-36px_rgba(0,229,160,0.12)]">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-800">
        <div className="absolute inset-0 bg-linear-to-br from-zinc-600 via-zinc-800 to-zinc-950" />
        <div className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold tracking-tight text-white/25 transition group-hover:text-accent/35">
          {initials(athlete)}
        </div>
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {athlete.badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-accent/30 bg-black/65 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent backdrop-blur-sm"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
              {athlete.firstName} {athlete.lastName}
            </h3>
            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent">{athlete.sport}</p>
          </div>
          <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-zinc-400">
            {athlete.birthYear}
          </span>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-[12px]">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Ruolo</dt>
            <dd className="mt-0.5 font-medium text-zinc-200">{athlete.role}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Altezza</dt>
            <dd className="mt-0.5 font-medium text-zinc-200">{athlete.heightCm} cm</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Nazionalità</dt>
            <dd className="mt-0.5 font-medium text-zinc-200">{athlete.nationality}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Categoria</dt>
            <dd className="mt-0.5 line-clamp-2 font-medium text-zinc-200">{athlete.category}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Club</dt>
            <dd className="mt-0.5 line-clamp-2 font-medium text-zinc-200">{athlete.club}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Status</dt>
            <dd className="mt-0.5 font-semibold text-zinc-100">{athlete.status}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Agenzia</dt>
            <dd className="mt-0.5 font-medium text-zinc-300">{athlete.agency}</dd>
          </div>
        </dl>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {athlete.statsMain.slice(0, 6).map((s) => (
            <span
              key={s}
              className="rounded-lg border border-white/8 bg-black/35 px-2 py-1 text-[10px] font-semibold tabular-nums text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>

        <Link
          href={athlete.profilePath}
          className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl border border-accent/35 bg-accent/10 text-sm font-semibold text-accent transition hover:border-accent/50 hover:bg-accent/15"
        >
          Apri profilo
        </Link>
      </div>
    </article>
  );
}
