import Link from "next/link";

export type TalentMiniCardStat = {
  label: string;
  value: string;
};

export type TalentMiniCardProps = {
  ariaLabel?: string;
  /** Ritratto; senza foto si mostra il gradient + `photoInitials`. */
  photoUrl?: string | null;
  /** Alternativa testuale foto (es. nome completo). */
  photoAlt?: string;
  photoInitials?: string;
  nameDisplay: string;
  role: string;
  category: string;
  birthYear: number;
  nationalityCode: string;
  nationalityFull: string;
  clubName: string;
  availabilityLabel: string;
  availabilityHighlighted: boolean;
  stats: readonly [TalentMiniCardStat, TalentMiniCardStat];
  seasonLabel: string;
  /** Senza href il footer è testo statico (come in home). */
  profileHref?: string;
  profileExternal?: boolean;
};

const footerInteractiveClass =
  "mt-6 block w-full rounded-2xl border border-accent/25 bg-accent/8 py-3.5 text-center text-[12px] font-semibold text-accent transition hover:bg-accent/12";

/**
 * Mini scheda Talent Board — stesso layout della card nella sezione home (`#talent-board`).
 */
export function TalentMiniCard({
  ariaLabel,
  photoUrl,
  photoAlt,
  photoInitials,
  nameDisplay,
  role,
  category,
  birthYear,
  nationalityCode,
  nationalityFull,
  clubName,
  availabilityLabel,
  availabilityHighlighted,
  stats,
  seasonLabel,
  profileHref,
  profileExternal,
}: TalentMiniCardProps) {
  const photo = photoUrl?.trim();

  const footer =
    profileHref && profileExternal ? (
      <a
        href={profileHref}
        target="_blank"
        rel="noopener noreferrer"
        className={footerInteractiveClass}
      >
        Tap → profilo completo
        <span className="sr-only"> (si apre in una nuova scheda)</span>
      </a>
    ) : profileHref ? (
      <Link href={profileHref} className={footerInteractiveClass}>
        Tap → profilo completo
      </Link>
    ) : (
      <p className="mt-6 rounded-2xl border border-accent/25 bg-accent/8 py-3.5 text-center text-[12px] font-semibold text-accent">
        Tap → profilo completo
      </p>
    );

  return (
    <article
      className="relative w-full overflow-hidden rounded-3xl border border-white/12 bg-linear-to-b from-zinc-900/90 to-zinc-950/95 p-6 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.95)] ring-1 ring-white/5 sm:p-7"
      aria-label={ariaLabel}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />
      <div className="flex gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-950 ring-1 ring-white/10 sm:h-24 sm:w-24">
          {photo ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element -- URL atleta arbitrario (CDN / siti terzi) */}
              <img
                src={photo}
                alt={photoAlt ?? ""}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.12),transparent_55%)]" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.15),transparent_55%)]" />
              {photoInitials ? (
                <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                  {photoInitials}
                </span>
              ) : null}
            </>
          )}
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">{nameDisplay}</h3>
          <p className="mt-1 text-[12px] leading-snug text-zinc-400">
            {role} · {category} · <span className="text-zinc-300">{birthYear}</span>
            <span className="text-zinc-600"> · </span>
            <span className="text-zinc-300">{nationalityCode}</span>
          </p>
          <p className="mt-2 truncate text-sm text-zinc-500">
            <span className="text-zinc-600">Club </span>
            <span className="font-medium text-zinc-300">{clubName}</span>
          </p>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-white/8 py-5 text-[13px]">
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Ruolo</dt>
          <dd className="font-medium text-zinc-100">{role}</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Categoria</dt>
          <dd className="font-medium text-zinc-100">{category}</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Disponibilità</dt>
          <dd className={availabilityHighlighted ? "font-semibold text-accent" : "font-medium text-zinc-100"}>
            {availabilityLabel}
          </dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Nazionalità</dt>
          <dd className="font-medium text-zinc-100">{nationalityFull}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {stats.map((s) => (
          <div
            key={`${s.label}-${s.value}`}
            className="flex items-baseline gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
          >
            <span className="text-lg font-bold tabular-nums text-white">{s.value}</span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">{s.label}</span>
          </div>
        ))}
        <div className="flex items-center rounded-xl border border-white/8 bg-white/5 px-3 py-2">
          <span className="text-[10px] font-bold uppercase tracking-wide text-zinc-400">Stagione</span>
          <span className="ml-2 text-[11px] font-medium text-zinc-300">{seasonLabel}</span>
        </div>
      </div>

      {footer}
    </article>
  );
}
