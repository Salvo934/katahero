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
  /** Nome e cognome (senza abbreviazioni). */
  nameDisplay: string;
  /** Numero di maglia accanto al nome (mostrato come «#n»). */
  jerseyNumber?: number | string;
  role: string;
  category: string;
  birthYear: number;
  dominantHand: string;
  heightCm: number;
  weightKg: number;
  /** Punto di forza in evidenza (testo scouting). Peso mostrato insieme all’altezza. */
  strengthPoint: string;
  nationalityCode: string;
  nationalityFull: string;
  clubName: string;
  availabilityLabel: string;
  availabilityHighlighted: boolean;
  /** Media stagione: punti (PPG), rimbalzi (RPG), assist (APG). */
  stats: readonly [TalentMiniCardStat, TalentMiniCardStat, TalentMiniCardStat];
  /** Es. 25/26 — mostrata sopra le statistiche. */
  seasonLabel: string;
  /** Aggiornamento scheda (solo Talent Board). */
  profileUpdated?: {
    dateTime: string;
    /** Es. 17 maggio 2026 */
    label: string;
  };
  /** Senza href il footer è testo statico (come in home). */
  profileHref?: string;
  profileExternal?: boolean;
  /** Layout più compatto (es. grid Talent Board desktop). */
  compact?: boolean;
};

const profileCtaLabel = "Apri profilo completo →";

/**
 * Mini scheda Talent Board — stesso layout della card nella sezione home (`#talent-board`).
 */
export function TalentMiniCard({
  ariaLabel,
  photoUrl,
  photoAlt,
  photoInitials,
  nameDisplay,
  jerseyNumber,
  role,
  category,
  birthYear,
  dominantHand,
  heightCm,
  weightKg,
  strengthPoint,
  nationalityCode,
  nationalityFull,
  clubName,
  availabilityLabel,
  availabilityHighlighted,
  stats,
  seasonLabel,
  profileUpdated,
  profileHref,
  profileExternal,
  compact = false,
}: TalentMiniCardProps) {
  const photo = photoUrl?.trim();

  const cardPadding = compact ? "p-4 sm:p-5" : "p-6 sm:p-7";
  const glowPos = compact
    ? "-right-12 top-0 h-36 w-36"
    : "-right-16 top-0 h-44 w-44";
  const photoCls = compact
    ? "relative h-[4rem] w-[4rem] shrink-0 overflow-hidden rounded-xl bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-950 shadow-[0_10px_22px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-white/15 transition duration-300 group-hover/card:ring-white/25 sm:h-[4.75rem] sm:w-[4.75rem]"
    : "relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-950 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-white/15 transition duration-300 group-hover/card:ring-white/25 sm:h-24 sm:w-24";
  const headerGap = compact ? "gap-3" : "gap-4";
  const headlineCls = compact
    ? "font-display min-w-0 text-base font-bold tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] sm:text-lg"
    : "font-display min-w-0 text-lg font-bold tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] sm:text-xl";
  const jerseyBadgeCls = compact
    ? "inline-flex shrink-0 items-center rounded-md border border-accent/35 bg-accent/12 px-1.5 py-px font-display text-[11px] font-bold tabular-nums tracking-tight text-accent shadow-[0_0_18px_-6px_rgba(0,229,160,0.55)] sm:text-xs"
    : "inline-flex shrink-0 items-center rounded-lg border border-accent/35 bg-accent/12 px-2 py-0.5 font-display text-xs font-bold tabular-nums tracking-tight text-accent shadow-[0_0_20px_-6px_rgba(0,229,160,0.55)] sm:text-sm";
  const metaLineCls = compact ? "mt-1 text-[11px] leading-snug text-zinc-400" : "mt-1.5 text-[12px] leading-snug text-zinc-400";
  const clubLineCls = compact ? "mt-1.5 truncate text-[12px] leading-snug text-zinc-500" : "mt-2 truncate text-[13px] leading-snug text-zinc-500";
  const dlCls = compact
    ? "relative mt-4 grid grid-cols-2 gap-1.5 border-y border-white/7 py-3 text-[12px] sm:gap-2"
    : "relative mt-6 grid grid-cols-2 gap-2 border-y border-white/7 py-5 text-[13px] sm:gap-3";
  const ddCellCls = compact
    ? "flex flex-col gap-0.5 rounded-lg border border-white/6 bg-zinc-950/35 px-2 py-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm"
    : "flex flex-col gap-1 rounded-xl border border-white/6 bg-zinc-950/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm";
  const dtLblCls = compact
    ? "text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-500"
    : "text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500";
  const seasonOuterCls = compact
    ? "relative mt-3.5 shrink-0 rounded-xl border border-white/10 bg-black/30 p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm"
    : "relative mt-5 shrink-0 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm sm:p-4";
  const seasonRowCls = compact
    ? "flex flex-col gap-2 border-b border-white/6 pb-2 sm:flex-row sm:items-end sm:justify-between sm:gap-2"
    : "flex flex-col gap-3 border-b border-white/6 pb-3 sm:flex-row sm:items-end sm:justify-between sm:gap-3";
  const seasonNumCls = compact
    ? "mt-0.5 font-display text-lg font-bold tabular-nums tracking-tight sm:text-xl"
    : "mt-1 font-display text-xl font-bold tabular-nums tracking-tight sm:text-2xl";
  const statGridCls = compact ? "mt-3 grid grid-cols-3 gap-1.5 sm:gap-2" : "mt-4 grid grid-cols-3 gap-2 sm:gap-2.5";
  const seasonLblCls = compact
    ? "text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-500"
    : "text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500";
  const dividerVertCls = compact
    ? "hidden h-7 w-px shrink-0 bg-linear-to-b from-transparent via-white/15 to-transparent sm:block"
    : "hidden h-8 w-px shrink-0 bg-linear-to-b from-transparent via-white/15 to-transparent sm:block";
  const statBoxCls = compact
    ? "flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg border border-white/8 bg-linear-to-b from-white/9 to-white/2 px-1 py-2 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:py-2.5"
    : "flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/8 bg-linear-to-b from-white/9 to-white/2 px-1.5 py-3 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:px-2 sm:py-3.5";
  const statLabelCls = compact
    ? "text-[10px] font-semibold uppercase tracking-[0.1em] text-zinc-500 sm:text-[9px]"
    : "text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:text-[10px] sm:tracking-wide";
  const statValueCls = compact
    ? "font-display text-lg font-bold tabular-nums leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-xl"
    : "font-display text-xl font-bold tabular-nums leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-2xl";
  const updatedCls = compact
    ? "relative mt-3.5 inline-flex w-full items-center justify-center rounded-lg border border-white/6 bg-white/3 px-2.5 py-1.5 text-center text-[10px] leading-snug text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
    : "relative mt-5 inline-flex w-full items-center justify-center rounded-xl border border-white/6 bg-white/3 px-3 py-2 text-center text-[11px] leading-snug text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]";
  const initialsCls = compact
    ? "absolute inset-0 flex items-center justify-center font-display text-sm font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-base"
    : "absolute inset-0 flex items-center justify-center font-display text-lg font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-xl";

  const footerInteractiveClass = compact
    ? "block w-full rounded-xl border border-accent/40 py-2.5 text-center text-sm font-semibold text-accent"
    : "block w-full rounded-xl border border-accent/40 py-3 text-center text-sm font-semibold text-accent";
  const footerStaticClass = compact
    ? "rounded-xl border border-accent/40 py-2.5 text-center text-sm font-semibold text-accent"
    : "rounded-xl border border-accent/40 py-3 text-center text-sm font-semibold text-accent";
  const strengthDdCls = compact
    ? "wrap-anywhere min-h-[4.5rem] font-semibold leading-snug text-zinc-50 line-clamp-4"
    : "wrap-anywhere min-h-[6rem] font-semibold leading-snug text-zinc-50 line-clamp-4";

  const jerseyLabel =
    jerseyNumber !== undefined && jerseyNumber !== null && String(jerseyNumber).trim() !== ""
      ? `#${String(jerseyNumber).trim()}`
      : null;

  const footer =
    profileHref && profileExternal ? (
      <a
        href={profileHref}
        target="_blank"
        rel="noopener noreferrer"
        className={footerInteractiveClass}
      >
        {profileCtaLabel}
        <span className="sr-only"> (si apre in una nuova scheda)</span>
      </a>
    ) : profileHref ? (
      <Link href={profileHref} className={footerInteractiveClass}>
        {profileCtaLabel}
      </Link>
    ) : (
      <p className={footerStaticClass}>
        {profileCtaLabel}
      </p>
    );

  return (
    <article
      className={`group/card relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-3xl border border-white/12 bg-linear-to-b from-zinc-900/95 via-zinc-950/95 to-black/90 shadow-[0_28px_70px_-36px_rgba(0,0,0,0.92),inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/6 backdrop-blur-md transition duration-300 hover:border-white/14 hover:shadow-[0_36px_90px_-38px_rgba(0,0,0,0.95)] hover:ring-white/8 ${cardPadding}`}
      aria-label={ariaLabel}
    >
      <div
        className={`pointer-events-none absolute ${glowPos} rounded-full bg-[radial-gradient(circle_at_center,rgba(0,229,160,0.11),transparent_68%)] blur-2xl`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <div className={`relative flex shrink-0 ${headerGap}`}>
          <div className={photoCls}>
          {photo ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element -- URL atleta arbitrario (CDN / siti terzi) */}
              <img
                src={photo}
                alt={photoAlt ?? ""}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover/card:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.14),transparent_58%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/45 to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.18),transparent_58%)]" />
              {photoInitials ? (
                <span className={initialsCls}>
                  {photoInitials}
                </span>
              ) : null}
            </>
          )}
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className={headlineCls}>
              {nameDisplay}
            </h3>
            {jerseyLabel ? (
              <span
                className={jerseyBadgeCls}
                aria-label={`Numero maglia ${String(jerseyNumber).trim()}`}
              >
                {jerseyLabel}
              </span>
            ) : null}
          </div>
          <p className={metaLineCls}>
            {role} · {category} · <span className="font-medium text-zinc-200">{birthYear}</span>
            <span className="text-zinc-600"> · </span>
            <span className="font-medium text-zinc-200">{nationalityCode}</span>
          </p>
          <p className={clubLineCls}>
            <span className="font-medium text-zinc-600">Club </span>
            <span className="font-semibold text-zinc-200">{clubName}</span>
          </p>
        </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
      <dl className={`${dlCls} min-h-0 shrink-0`}>
        <div className={ddCellCls}>
          <dt className={dtLblCls}>Ruolo</dt>
          <dd className="font-semibold leading-snug text-zinc-50">{role}</dd>
        </div>
        <div className={ddCellCls}>
          <dt className={dtLblCls}>Categoria</dt>
          <dd className="font-semibold leading-snug text-zinc-50">{category}</dd>
        </div>
        <div className={ddCellCls}>
          <dt className={dtLblCls}>Disponibilità</dt>
          <dd
            className={
              availabilityHighlighted
                ? "font-bold leading-snug text-accent [text-shadow:0_0_24px_rgba(0,229,160,0.22)]"
                : "font-semibold leading-snug text-zinc-50"
            }
          >
            {availabilityLabel}
          </dd>
        </div>
        <div className={ddCellCls}>
          <dt className={dtLblCls}>Nazionalità</dt>
          <dd className="font-semibold leading-snug text-zinc-50">{nationalityFull}</dd>
        </div>
        <div className={ddCellCls}>
          <dt className={dtLblCls}>Mano dominante</dt>
          <dd className="font-semibold leading-snug text-zinc-50">{dominantHand}</dd>
        </div>
        <div className={ddCellCls}>
          <dt className={dtLblCls}>Altezza · Peso</dt>
          <dd className="font-semibold tabular-nums leading-snug text-zinc-50">
            <span className="whitespace-nowrap">{heightCm} cm</span>
            <span className="text-zinc-600"> · </span>
            <span className="whitespace-nowrap">{weightKg} kg</span>
          </dd>
        </div>
        <div className={`col-span-2 ${ddCellCls}`}>
          <dt className={dtLblCls}>Punto di forza</dt>
          <dd className={strengthDdCls}>{strengthPoint}</dd>
        </div>
      </dl>

      <div className={seasonOuterCls}>
        <div className={seasonRowCls}>
          <div>
            <p className={seasonLblCls}>Stagione</p>
            <p className={seasonNumCls}>
              <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                {seasonLabel}
              </span>
            </p>
          </div>
          <div className={dividerVertCls} aria-hidden />
          <div className="hidden text-right sm:block sm:min-w-18">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-600">Media</p>
            <p className="mt-0.5 text-[10px] font-medium text-zinc-500">Stagione regolare</p>
          </div>
        </div>
        <div className={statGridCls}>
          {stats.map((s) => (
            <div key={s.label} className={statBoxCls}>
              <span className={statLabelCls}>{s.label}</span>
              <span className={statValueCls}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {profileUpdated ? (
        <p className={`${updatedCls} shrink-0`}>
          <span>
            Scheda aggiornata il{" "}
            <time dateTime={profileUpdated.dateTime} className="font-semibold text-zinc-300">
              {profileUpdated.label}
            </time>
          </span>
        </p>
      ) : null}

        </div>

      <div className={footerBlockCls}>{footer}</div>
      </div>
    </article>
  );
}
