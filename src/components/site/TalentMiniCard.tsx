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
  /** Anteprima home: ancora più densa (implica layout compatto). */
  compactPlus?: boolean;
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
  compactPlus = false,
}: TalentMiniCardProps) {
  const photo = photoUrl?.trim();
  const tight = compactPlus;

  const cardPadding = tight ? "p-3 sm:p-4" : compact ? "p-4 sm:p-5" : "p-6 sm:p-7";
  const glowPos = tight
    ? "-right-10 top-0 h-28 w-28"
    : compact
      ? "-right-12 top-0 h-36 w-36"
      : "-right-16 top-0 h-44 w-44";
  const photoCls = tight
    ? "relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-950 shadow-[0_8px_18px_-10px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-white/15 transition duration-300 group-hover/card:ring-white/25 sm:h-16 sm:w-16"
    : compact
      ? "relative h-[4rem] w-[4rem] shrink-0 overflow-hidden rounded-xl bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-950 shadow-[0_10px_22px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-white/15 transition duration-300 group-hover/card:ring-white/25 sm:h-[4.75rem] sm:w-[4.75rem]"
      : "relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-950 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-white/15 transition duration-300 group-hover/card:ring-white/25 sm:h-24 sm:w-24";
  const headerGap = tight ? "gap-2.5" : compact ? "gap-3" : "gap-4";
  const headlineCls = tight
    ? "font-display min-w-0 text-sm font-bold tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] sm:text-base"
    : compact
      ? "font-display min-w-0 text-base font-bold tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] sm:text-lg"
      : "font-display min-w-0 text-lg font-bold tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] sm:text-xl";
  const jerseyBadgeCls = tight
    ? "inline-flex shrink-0 items-center rounded border border-accent/35 bg-accent/12 px-1 py-px font-display text-[10px] font-bold tabular-nums tracking-tight text-accent shadow-[0_0_14px_-6px_rgba(0,229,160,0.55)] sm:text-[11px]"
    : compact
      ? "inline-flex shrink-0 items-center rounded-md border border-accent/35 bg-accent/12 px-1.5 py-px font-display text-[11px] font-bold tabular-nums tracking-tight text-accent shadow-[0_0_18px_-6px_rgba(0,229,160,0.55)] sm:text-xs"
      : "inline-flex shrink-0 items-center rounded-lg border border-accent/35 bg-accent/12 px-2 py-0.5 font-display text-xs font-bold tabular-nums tracking-tight text-accent shadow-[0_0_20px_-6px_rgba(0,229,160,0.55)] sm:text-sm";
  const metaLineCls = tight
    ? "mt-0.5 text-[10px] leading-snug text-zinc-400"
    : compact
      ? "mt-1 text-[11px] leading-snug text-zinc-400"
      : "mt-1.5 text-[12px] leading-snug text-zinc-400";
  const clubLineCls = tight
    ? "mt-1 truncate text-[11px] leading-snug text-zinc-500"
    : compact
      ? "mt-1.5 truncate text-[12px] leading-snug text-zinc-500"
      : "mt-2 truncate text-[13px] leading-snug text-zinc-500";
  const dlCls = tight
    ? "relative mt-3 grid grid-cols-2 gap-1 border-y border-white/7 py-2.5 text-[11px] sm:gap-1.5"
    : compact
      ? "relative mt-4 grid grid-cols-2 gap-1.5 border-y border-white/7 py-3 text-[12px] sm:gap-2"
      : "relative mt-6 grid grid-cols-2 gap-2 border-y border-white/7 py-5 text-[13px] sm:gap-3";
  const ddCellCls = tight
    ? "flex flex-col gap-px rounded-md border border-white/6 bg-zinc-950/35 px-1.5 py-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm"
    : compact
      ? "flex flex-col gap-0.5 rounded-lg border border-white/6 bg-zinc-950/35 px-2 py-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm"
      : "flex flex-col gap-1 rounded-xl border border-white/6 bg-zinc-950/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm";
  const dtLblCls = tight
    ? "text-[8px] font-semibold uppercase tracking-[0.1em] text-zinc-500"
    : compact
      ? "text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-500"
      : "text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500";
  const seasonOuterCls = tight
    ? "relative mt-2.5 shrink-0 rounded-lg border border-white/10 bg-black/30 p-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm"
    : compact
      ? "relative mt-3.5 shrink-0 rounded-xl border border-white/10 bg-black/30 p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm"
      : "relative mt-5 shrink-0 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm sm:p-4";
  const seasonRowCls = tight
    ? "flex flex-col gap-1.5 border-b border-white/6 pb-1.5 sm:flex-row sm:items-end sm:justify-between sm:gap-2"
    : compact
      ? "flex flex-col gap-2 border-b border-white/6 pb-2 sm:flex-row sm:items-end sm:justify-between sm:gap-2"
      : "flex flex-col gap-3 border-b border-white/6 pb-3 sm:flex-row sm:items-end sm:justify-between sm:gap-3";
  const seasonNumCls = tight
    ? "mt-0.5 font-display text-base font-bold tabular-nums tracking-tight sm:text-lg"
    : compact
      ? "mt-0.5 font-display text-lg font-bold tabular-nums tracking-tight sm:text-xl"
      : "mt-1 font-display text-xl font-bold tabular-nums tracking-tight sm:text-2xl";
  const statGridCls = tight
    ? "mt-2 grid grid-cols-3 gap-1 sm:gap-1.5"
    : compact
      ? "mt-3 grid grid-cols-3 gap-1.5 sm:gap-2"
      : "mt-4 grid grid-cols-3 gap-2 sm:gap-2.5";
  const seasonLblCls = tight
    ? "text-[8px] font-semibold uppercase tracking-[0.12em] text-zinc-500"
    : compact
      ? "text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-500"
      : "text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500";
  const dividerVertCls = tight
    ? "hidden h-6 w-px shrink-0 bg-linear-to-b from-transparent via-white/15 to-transparent sm:block"
    : compact
      ? "hidden h-7 w-px shrink-0 bg-linear-to-b from-transparent via-white/15 to-transparent sm:block"
      : "hidden h-8 w-px shrink-0 bg-linear-to-b from-transparent via-white/15 to-transparent sm:block";
  const statBoxCls = tight
    ? "flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-md border border-white/8 bg-linear-to-b from-white/9 to-white/2 px-0.5 py-1.5 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:py-2"
    : compact
      ? "flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg border border-white/8 bg-linear-to-b from-white/9 to-white/2 px-1 py-2 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:py-2.5"
      : "flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/8 bg-linear-to-b from-white/9 to-white/2 px-1.5 py-3 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:px-2 sm:py-3.5";
  const statLabelCls = tight
    ? "text-[9px] font-semibold uppercase tracking-[0.08em] text-zinc-500"
    : compact
      ? "text-[10px] font-semibold uppercase tracking-[0.1em] text-zinc-500 sm:text-[9px]"
      : "text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:text-[10px] sm:tracking-wide";
  const statValueCls = tight
    ? "font-display text-base font-bold tabular-nums leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-lg"
    : compact
      ? "font-display text-lg font-bold tabular-nums leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-xl"
      : "font-display text-xl font-bold tabular-nums leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-2xl";
  /** Fascia “Scheda aggiornata” in fondo al blocco centrale (`mt-auto` sul wrapper); senza margine top. */
  const updatedBannerCls = tight
    ? "relative inline-flex w-full items-center justify-center rounded-md border border-white/6 bg-white/3 px-2 py-1 text-center text-[9px] leading-snug text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
    : compact
      ? "relative inline-flex w-full items-center justify-center rounded-lg border border-white/6 bg-white/3 px-2.5 py-1.5 text-center text-[10px] leading-snug text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
      : "relative inline-flex w-full items-center justify-center rounded-xl border border-white/6 bg-white/3 px-3 py-2 text-center text-[11px] leading-snug text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]";
  const initialsCls = tight
    ? "absolute inset-0 flex items-center justify-center font-display text-xs font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-sm"
    : compact
      ? "absolute inset-0 flex items-center justify-center font-display text-sm font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-base"
      : "absolute inset-0 flex items-center justify-center font-display text-lg font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-xl";

  const footerInteractiveClass = tight
    ? "block w-full rounded-lg border border-accent/40 py-1.5 text-center text-xs font-semibold text-accent"
    : compact
      ? "block w-full rounded-xl border border-accent/40 py-2.5 text-center text-sm font-semibold text-accent"
      : "block w-full rounded-xl border border-accent/40 py-3 text-center text-sm font-semibold text-accent";
  const footerStaticClass = tight
    ? "rounded-lg border border-accent/40 py-1.5 text-center text-xs font-semibold text-accent"
    : compact
      ? "rounded-xl border border-accent/40 py-2.5 text-center text-sm font-semibold text-accent"
      : "rounded-xl border border-accent/40 py-3 text-center text-sm font-semibold text-accent";
  const footerBlockCls = tight ? "shrink-0 w-full pt-2.5" : compact ? "shrink-0 w-full pt-4" : "shrink-0 w-full pt-5";
  const strengthDdCls = tight
    ? "wrap-anywhere min-h-[3.25rem] text-[11px] font-semibold leading-snug text-zinc-50 line-clamp-3"
    : compact
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

      <div className="mt-auto w-full shrink-0">
        {profileUpdated ? (
          <p className={updatedBannerCls}>
            <span>
              Scheda aggiornata il{" "}
              <time dateTime={profileUpdated.dateTime} className="font-semibold text-zinc-300">
                {profileUpdated.label}
              </time>
            </span>
          </p>
        ) : (
          <div className={`${updatedBannerCls} invisible pointer-events-none select-none`} aria-hidden>
            <span>
              Scheda aggiornata il <span className="font-semibold text-zinc-300">1 gennaio 2026</span>
            </span>
          </div>
        )}
      </div>

        </div>

      <div className={footerBlockCls}>{footer}</div>
      </div>
    </article>
  );
}
