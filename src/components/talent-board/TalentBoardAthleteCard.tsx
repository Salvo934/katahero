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
    return {
      label: status,
      className: "border-accent/35 bg-accent/14 text-accent shadow-[0_0_20px_-6px_rgba(0,229,160,0.45)]",
    };
  }
  if (lower.includes("contratto")) {
    return {
      label: status,
      className: "border-amber-400/35 bg-amber-400/12 text-amber-100",
    };
  }
  if (lower.includes("osservaz")) {
    return {
      label: status,
      className: "border-sky-400/30 bg-sky-400/10 text-sky-100",
    };
  }
  return { label: status, className: "border-white/12 bg-white/5 text-zinc-200" };
}

const ctaClassName =
  "relative flex w-full items-center justify-center overflow-hidden rounded-full bg-accent py-2.5 text-sm font-bold text-black shadow-[0_10px_28px_-8px_rgba(0,229,160,0.45)] transition duration-300 ease-out hover:shadow-[0_14px_36px_-10px_rgba(0,229,160,0.55)] hover:brightness-105 active:scale-[0.98] active:brightness-100";

const thumbWrapClass =
  "relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/10 sm:h-28 sm:w-28";

export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  const { advanced: s } = athlete;
  const cta = profileCtaTarget(athlete);
  const photo = athlete.photoUrl?.trim();
  const fullName = `${athlete.firstName} ${athlete.lastName}`;
  const notes = (athlete.playerNotes ?? []).filter(Boolean);
  const scoutLine = athlete.scoutLine?.trim();
  const statusUi = statusPresentation(athlete.status);

  return (
    <article className="group/card relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/7 bg-zinc-900/45 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.85)] ring-1 ring-white/4 backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/12 hover:shadow-[0_32px_56px_-24px_rgba(0,0,0,0.9)] hover:ring-accent/15">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent opacity-80"
        aria-hidden
      />

      <div className="flex gap-3.5 p-4 pb-3 sm:gap-4 sm:p-5 sm:pb-4">
        <div className={thumbWrapClass}>
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element -- URL atleta arbitrario (CDN / siti terzi)
            <img
              src={photo}
              alt={fullName}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover/card:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-600/90 via-zinc-800 to-zinc-950 font-display text-2xl font-bold text-white transition duration-300 group-hover/card:from-zinc-500/80 sm:text-3xl">
              {initials(athlete)}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-start justify-between gap-2">
            <p className="min-w-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              <span className="text-zinc-400">{athlete.sport}</span>
              <span className="text-zinc-600"> · </span>
              <span className="text-zinc-300">{athlete.role}</span>
            </p>
            <span
              className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${statusUi.className}`}
            >
              {statusUi.label}
            </span>
          </div>
          <h2 className="font-display mt-1.5 text-base font-bold tracking-tight text-white sm:text-lg">{fullName}</h2>
          <p className="mt-1 line-clamp-2 text-xs leading-snug text-zinc-400">{athlete.club}</p>

          {scoutLine ? (
            <p className="mt-3 rounded-xl border border-accent/20 bg-accent/8 px-3 py-2.5 text-[12px] font-medium leading-snug text-zinc-100 ring-1 ring-accent/10">
              <span className="mb-0.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-accent/90">In sintesi</span>
              {scoutLine}
            </p>
          ) : null}

          <dl className="mt-3 space-y-2 text-[11px] leading-snug">
            <div className="flex gap-2 rounded-lg bg-white/3 px-2.5 py-1.5 ring-1 ring-white/4">
              <dt className="shrink-0 font-semibold uppercase tracking-[0.12em] text-zinc-500">Categoria</dt>
              <dd className="min-w-0 font-medium text-zinc-100">{athlete.category}</dd>
            </div>
            <div className="flex gap-2 rounded-lg bg-white/3 px-2.5 py-1.5 ring-1 ring-white/4">
              <dt className="shrink-0 font-semibold uppercase tracking-[0.12em] text-zinc-500">Agenzia</dt>
              <dd className="min-w-0 font-medium text-zinc-100">{athlete.agency}</dd>
            </div>
          </dl>

          <p className="mt-2.5 text-[11px] tabular-nums leading-snug text-zinc-500">
            {athlete.heightCm} cm · {athlete.birthYear} · {athlete.nationality}
          </p>
        </div>
      </div>

      <div className="mx-4">
        <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Media stagione</p>
        <dl className="grid grid-cols-3 gap-2 rounded-2xl bg-zinc-950/55 px-2 py-3 ring-1 ring-white/6">
          {[
            { label: "PPG", value: s.ppg },
            { label: "RPG", value: s.rpg },
            { label: "APG", value: s.apg },
          ].map((row) => (
            <div key={row.label} className="text-center">
              <dt className="mx-auto w-fit rounded-md bg-white/4 px-1.5 py-px text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-500">
                {row.label}
              </dt>
              <dd className="font-display mt-1.5 text-sm font-bold tabular-nums text-white sm:text-base">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {notes.length > 0 ? (
        <div className="mx-4 mt-3 rounded-2xl bg-white/2 px-3.5 py-3 ring-1 ring-white/5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Perché può fare al caso vostro</p>
          <ul className="mt-2.5 space-y-2">
            {notes.map((line) => (
              <li key={line} className="flex gap-2.5 text-[11px] leading-relaxed text-zinc-400">
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(0,229,160,0.45)]"
                  aria-hidden
                />
                <span className="min-w-0">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-auto p-4 pt-4 sm:p-5 sm:pt-4">
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
        <p className="mt-2.5 text-center text-[10px] leading-snug text-zinc-600">
          Video, numeri aggiornati e contatti per valutare il fit con il vostro roster.
        </p>
      </div>
    </article>
  );
}
