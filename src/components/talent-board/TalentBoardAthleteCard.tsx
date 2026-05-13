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

function statusPresentation(status: string): { label: string; className: string } {
  const lower = status.toLowerCase();
  if (lower.includes("disponib")) {
    return { label: status, className: "border-accent/25 bg-accent/10 text-accent" };
  }
  if (lower.includes("contratto")) {
    return { label: status, className: "border-amber-400/25 bg-amber-400/8 text-amber-100/95" };
  }
  if (lower.includes("osservaz")) {
    return { label: status, className: "border-sky-400/25 bg-sky-400/8 text-sky-100/95" };
  }
  return { label: status, className: "border-white/10 bg-white/5 text-zinc-300" };
}

const ctaClassName =
  "flex w-full items-center justify-center rounded-full bg-accent py-2.5 text-sm font-bold text-black shadow-[0_8px_24px_-10px_rgba(0,229,160,0.4)] transition duration-200 hover:brightness-105 active:scale-[0.99] active:brightness-100";

const thumbWrapClass =
  "relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-zinc-800 ring-1 ring-white/8 sm:h-28 sm:w-28";

const sectionGap = "space-y-4 sm:space-y-5";

export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  const { advanced: s } = athlete;
  const cta = profileCtaTarget(athlete);
  const photo = athlete.photoUrl?.trim();
  const fullName = `${athlete.firstName} ${athlete.lastName}`;
  const notes = (athlete.playerNotes ?? []).filter(Boolean);
  const scoutLine = athlete.scoutLine?.trim();
  const statusUi = statusPresentation(athlete.status);

  return (
    <article className="group/card flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-zinc-900/40 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.75)] backdrop-blur-md transition duration-300 hover:border-white/12 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.82)]">
      <div className="flex gap-4 p-5 sm:gap-5 sm:p-6 sm:pb-4">
        <div className={thumbWrapClass}>
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element -- URL atleta arbitrario (CDN / siti terzi)
            <img
              src={photo}
              alt={fullName}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover/card:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-600/85 via-zinc-800 to-zinc-950 font-display text-2xl font-bold text-white sm:text-3xl">
              {initials(athlete)}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <p className="min-w-0 text-[11px] leading-snug text-zinc-500">
              <span className="text-zinc-400">{athlete.sport}</span>
              <span className="text-zinc-600"> · </span>
              <span className="text-zinc-300">{athlete.role}</span>
            </p>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${statusUi.className}`}
            >
              {statusUi.label}
            </span>
          </div>
          <h2 className="font-display mt-2 text-base font-bold tracking-tight text-white sm:text-lg">{fullName}</h2>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-400">{athlete.club}</p>
        </div>
      </div>

      <div className={`flex flex-1 flex-col px-5 pb-5 sm:px-6 sm:pb-6 ${sectionGap}`}>
        {scoutLine ? (
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">In sintesi</p>
            <p className="mt-1.5 border-l-2 border-accent/50 pl-3 text-[13px] leading-relaxed text-zinc-200">{scoutLine}</p>
          </div>
        ) : null}

        <dl className="grid gap-3 text-xs sm:grid-cols-2 sm:gap-x-6">
          <div>
            <dt className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Categoria</dt>
            <dd className="mt-0.5 font-medium text-zinc-100">{athlete.category}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Agenzia</dt>
            <dd className="mt-0.5 font-medium text-zinc-100">{athlete.agency}</dd>
          </div>
        </dl>

        <p className="text-xs tabular-nums text-zinc-500">
          {athlete.heightCm} cm · {athlete.birthYear} · {athlete.nationality}
        </p>

        <div className="border-t border-white/8 pt-4">
          <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Media stagione</p>
          <dl className="mt-3 grid grid-cols-3 gap-2">
            {[
              { label: "PPG", value: s.ppg },
              { label: "RPG", value: s.rpg },
              { label: "APG", value: s.apg },
            ].map((row) => (
              <div key={row.label} className="rounded-xl bg-zinc-950/40 py-2.5 text-center ring-1 ring-white/5">
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{row.label}</dt>
                <dd className="font-display mt-1 text-base font-bold tabular-nums text-white">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {notes.length > 0 ? (
          <div className="border-t border-white/8 pt-4">
            <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Perché può fare al caso vostro</p>
            <ul className="mt-3 space-y-2.5">
              {notes.map((line) => (
                <li key={line} className="flex gap-2.5 text-xs leading-relaxed text-zinc-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-500" aria-hidden />
                  <span className="min-w-0">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="border-t border-white/8 pt-4">
          {cta.external ? (
            <a href={cta.href} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
              Scheda professionale
              <span className="sr-only"> (si apre in una nuova scheda)</span>
              <span className="ml-1.5" aria-hidden>
                ↗
              </span>
            </a>
          ) : (
            <Link href={cta.href} className={ctaClassName}>
              Scheda professionale
              <span className="ml-1.5" aria-hidden>
                →
              </span>
            </Link>
          )}
          <p className="mt-3 text-center text-[10px] leading-relaxed text-zinc-600">
            Video, numeri aggiornati e contatti per valutare il fit con il vostro roster.
          </p>
        </div>
      </div>
    </article>
  );
}
