import Link from "next/link";
import type { TalentAthlete } from "@/lib/talent-board-data";

function initials(a: TalentAthlete) {
  return `${a.firstName[0] ?? ""}${a.lastName[0] ?? ""}`.toUpperCase();
}

function profileCtaTarget(athlete: TalentAthlete): { href: string; external: boolean } {
  const raw = athlete.profileWebsiteUrl?.trim();
  if (raw) {
    try {
      const u = new URL(raw);
      if (u.protocol === "http:" || u.protocol === "https:") {
        return { href: u.toString(), external: true };
      }
    } catch {
      /* URL non valido: fallback interno */
    }
  }
  return { href: athlete.profilePath, external: false };
}

const ctaClassName =
  "mt-auto flex w-full items-center justify-center rounded-xl bg-accent py-2.5 text-sm font-bold text-black transition hover:brightness-110 active:brightness-95";

const thumbClass =
  "relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-white/12 bg-zinc-800 sm:h-28 sm:w-28";

export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  const { advanced: s } = athlete;
  const cta = profileCtaTarget(athlete);
  const photo = athlete.photoUrl?.trim();
  const fullName = `${athlete.firstName} ${athlete.lastName}`;
  const notes = (athlete.playerNotes ?? []).filter(Boolean);

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/35 ring-1 ring-white/5 transition hover:border-white/18 hover:ring-white/10">
      <div className="flex gap-3 p-4 pb-3">
        <div className={thumbClass}>
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element -- URL atleta arbitrario (CDN / siti terzi)
            <img
              src={photo}
              alt={fullName}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-700 to-zinc-900 font-display text-2xl font-bold text-white sm:text-3xl">
              {initials(athlete)}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            <span className="text-zinc-400">{athlete.sport}</span>
            <span className="text-zinc-600"> · </span>
            {athlete.role}
          </p>
          <h2 className="font-display mt-1 text-base font-bold leading-tight text-white sm:text-lg">{fullName}</h2>
          <p className="mt-1 line-clamp-2 text-xs leading-snug text-zinc-400">{athlete.club}</p>

          <dl className="mt-3 space-y-1.5 text-[11px] leading-snug">
            <div className="flex gap-1.5">
              <dt className="shrink-0 font-semibold uppercase tracking-wider text-zinc-600">Categoria</dt>
              <dd className="min-w-0 font-medium text-zinc-200">{athlete.category}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="shrink-0 font-semibold uppercase tracking-wider text-zinc-600">Agenzia</dt>
              <dd className="min-w-0 font-medium text-zinc-200">{athlete.agency}</dd>
            </div>
          </dl>

          <p className="mt-2 text-[11px] leading-snug text-zinc-500">
            {athlete.heightCm} cm · {athlete.birthYear} · {athlete.status}
          </p>
        </div>
      </div>

      <dl className="grid grid-cols-3 gap-1 border-y border-white/8 px-4 py-2.5">
        {[
          { label: "PPG", value: s.ppg },
          { label: "RPG", value: s.rpg },
          { label: "APG", value: s.apg },
        ].map((row) => (
          <div key={row.label} className="text-center">
            <dt className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">{row.label}</dt>
            <dd className="font-display text-sm font-bold tabular-nums text-white sm:text-base">{row.value}</dd>
          </div>
        ))}
      </dl>

      {notes.length > 0 ? (
        <div className="border-b border-white/8 px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Sul gioco</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[11px] leading-relaxed text-zinc-400 marker:text-accent">
            {notes.map((line) => (
              <li key={line} className="pl-0.5">
                {line}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-auto flex flex-col gap-3 p-4 pt-3">
        {cta.external ? (
          <a href={cta.href} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
            Apri profilo
            <span className="sr-only"> (si apre in una nuova scheda)</span>
            <span className="ml-1" aria-hidden>
              ↗
            </span>
          </a>
        ) : (
          <Link href={cta.href} className={ctaClassName}>
            Apri profilo
            <span className="ml-1" aria-hidden>
              →
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}
