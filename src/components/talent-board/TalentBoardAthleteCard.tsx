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

export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  const { advanced: s } = athlete;
  const cta = profileCtaTarget(athlete);
  const photo = athlete.photoUrl?.trim();
  const fullName = `${athlete.firstName} ${athlete.lastName}`;

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/35 ring-1 ring-white/5 transition hover:border-white/18 hover:ring-white/10">
      {/* Stessa proporzione foto per tutte le card */}
      <div className="relative aspect-4/5 w-full shrink-0 bg-zinc-800">
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
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-700 to-zinc-900 font-display text-4xl font-bold text-white sm:text-5xl">
            {initials(athlete)}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
          <span className="text-accent">{athlete.category}</span>
          <span className="text-zinc-600"> · </span>
          {athlete.role}
        </p>

        <h2 className="font-display text-lg font-bold leading-tight text-white sm:text-xl">{fullName}</h2>

        <p className="line-clamp-2 text-xs leading-snug text-zinc-400">{athlete.club}</p>

        <dl className="grid grid-cols-3 gap-1 border-y border-white/8 py-3">
          {[
            { label: "PPG", value: s.ppg },
            { label: "RPG", value: s.rpg },
            { label: "APG", value: s.apg },
          ].map((row) => (
            <div key={row.label} className="text-center">
              <dt className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">{row.label}</dt>
              <dd className="font-display text-base font-bold tabular-nums text-white">{row.value}</dd>
            </div>
          ))}
        </dl>

        <p className="text-[11px] leading-snug text-zinc-500">
          {athlete.heightCm} cm · {athlete.birthYear} · {athlete.status}
        </p>

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
