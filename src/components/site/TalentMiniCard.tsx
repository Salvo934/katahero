import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
  /** Nome squadra / società attuale. */
  clubName: string;
  /** Logo squadra (`/…` da `public`), opzionale. Senza logo si mostra un segnaposto con iniziali. */
  clubLogoUrl?: string;
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
  /** Contenuto aggiuntivo sotto «Apri profilo completo» (es. condivisione scheda su Talent Board). */
  footerExtra?: ReactNode;
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
  clubLogoUrl,
  availabilityLabel,
  availabilityHighlighted,
  stats,
  seasonLabel,
  profileUpdated,
  profileHref,
  profileExternal,
  footerExtra,
  compact = false,
  compactPlus = false,
}: TalentMiniCardProps) {
  const photo = photoUrl?.trim();
  const clubLogo = clubLogoUrl?.trim();
  const tight = compactPlus;

  const cardRounding = tight ? "rounded-xl" : compact ? "rounded-[1.25rem]" : "rounded-[1.375rem]";
  const cardPadding = tight ? "p-3 sm:p-3.5" : compact ? "p-3 sm:p-4" : "p-6 sm:p-7";
  const glowPos = tight
    ? "-right-9 top-0 h-[5.25rem] w-[5.25rem]"
    : compact
      ? "-right-12 top-0 h-36 w-36"
      : "-right-16 top-0 h-44 w-44";
  const photoCls = tight
    ? "relative h-[5.25rem] w-[5.25rem] shrink-0 overflow-hidden rounded-xl bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_10px_22px_-12px_rgba(0,0,0,0.62)] ring-2 ring-white/22 transition duration-300 group-hover/card:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22),0_12px_28px_-12px_rgba(0,0,0,0.55)] group-hover/card:ring-white/32 sm:h-[5.75rem] sm:w-[5.75rem]"
    : compact
      ? "relative h-[5.5rem] w-[5.5rem] shrink-0 overflow-hidden rounded-xl bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),0_10px_24px_-12px_rgba(0,0,0,0.72)] ring-2 ring-white/18 transition duration-300 group-hover/card:ring-white/28 sm:h-[6.25rem] sm:w-[6.25rem]"
      : "relative h-[6.5rem] w-[6.5rem] shrink-0 overflow-hidden rounded-2xl bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.11),0_12px_28px_-14px_rgba(0,0,0,0.75)] ring-[2.5px] ring-white/16 transition duration-300 group-hover/card:ring-white/24 sm:h-[7.5rem] sm:w-[7.5rem]";
  const photoAthleteImgCls = tight
    ? "absolute inset-0 h-[104%] w-full min-h-[100%] object-cover object-[center_22%] transition duration-500 ease-out group-hover/card:scale-[1.05]"
    : compact
      ? "absolute inset-0 h-[103%] w-full min-h-full -translate-y-px object-cover object-[center_26%] transition duration-500 ease-out group-hover/card:scale-[1.045]"
      : "absolute inset-0 h-full w-full object-cover object-[center_25%] transition duration-500 ease-out group-hover/card:scale-[1.06]";
  const photoAthleteRadialOverlayCls = tight
    ? "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-8%,rgba(255,255,255,0.07),transparent_55%)]"
    : compact
      ? "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-5%,rgba(255,255,255,0.1),transparent_58%)]"
      : "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_18%,rgba(255,255,255,0.12),transparent_60%)]";
  const photoAthleteFloorOverlayCls = tight
    ? "pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-linear-to-t from-black/26 to-transparent"
    : compact
      ? "pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-black/33 to-transparent"
      : "pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/38 to-transparent";
  const headerGap = tight ? "gap-3.5" : compact ? "gap-3" : "gap-4";
  const headlineCls = tight
    ? "font-display min-w-0 text-sm font-bold tracking-tight text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.35)] sm:text-[0.9375rem]"
    : compact
      ? "font-display min-w-0 text-base font-bold tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] sm:text-lg"
      : "font-display min-w-0 text-lg font-bold tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] sm:text-xl";
  const jerseyBadgeCls = tight
    ? "inline-flex shrink-0 items-center rounded border border-accent/35 bg-accent/12 px-1 py-px font-display text-[11px] font-bold tabular-nums tracking-tight text-accent"
    : compact
      ? "inline-flex shrink-0 items-center rounded-md border border-accent/35 bg-accent/12 px-1.5 py-px font-display text-[11px] font-bold tabular-nums tracking-tight text-accent shadow-[0_0_18px_-6px_rgba(0,229,160,0.55)] sm:text-xs"
      : "inline-flex shrink-0 items-center rounded-lg border border-accent/35 bg-accent/12 px-2 py-0.5 font-display text-xs font-bold tabular-nums tracking-tight text-accent shadow-[0_0_20px_-6px_rgba(0,229,160,0.55)] sm:text-sm";
  const metaLineCls = tight
    ? "mt-0.5 truncate text-[11px] leading-snug text-zinc-500"
    : compact
      ? "mt-1 text-[11px] leading-snug text-zinc-400"
      : "mt-1.5 text-[12px] leading-snug text-zinc-400";
  const clubBlockCls = tight ? "mt-1.5 min-w-0" : compact ? "mt-1.5 min-w-0" : "mt-2 min-w-0";
  const clubMicroLblCls = tight
    ? "mb-0 text-[8px] font-semibold uppercase tracking-[0.12em] text-zinc-500"
    : compact
      ? "mb-px text-[8px] font-semibold uppercase tracking-[0.15em] text-zinc-500"
      : "mb-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500";
  const clubLogoSlotCls = tight
    ? "relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-white/15 bg-black/35"
    : compact
      ? "relative h-8 w-8 shrink-0 overflow-hidden rounded-md border border-white/15 bg-black/35"
      : "relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-black/35";
  const clubNameTrimCls = tight
    ? "min-w-0 flex-1 truncate text-[12px] font-semibold leading-tight text-zinc-300"
    : compact
      ? "min-w-0 flex-1 truncate text-[11px] font-semibold leading-tight text-zinc-200"
      : "min-w-0 flex-1 truncate text-[12px] font-semibold leading-tight text-zinc-100";
  const clubInitialsSz = tight ? "text-[11px]" : compact ? "text-[10px]" : "text-[11px]";
  const dlCls = tight
    ? "relative mt-3 grid grid-cols-2 gap-x-1.5 gap-y-1 border-y border-white/8 py-2.5 text-[12px] [grid-auto-rows:minmax(2.3125rem,auto)] sm:gap-x-2 sm:gap-y-1.5 sm:py-3"
    : compact
      ? "relative mt-4 grid grid-cols-2 gap-1.5 border-y border-white/7 py-3 text-[12px] [grid-auto-rows:minmax(3.25rem,auto)] sm:gap-2"
      : "relative mt-6 grid grid-cols-2 gap-2 border-y border-white/7 py-5 text-[13px] [grid-auto-rows:minmax(3.5rem,auto)] sm:gap-3";
  const ddCellCls = tight
    ? "flex min-h-[2.3125rem] flex-col justify-center gap-px rounded-md border border-white/6 bg-zinc-950/35 px-1.5 py-1 shadow-none sm:min-h-[2.375rem]"
    : compact
      ? "flex min-h-[3.25rem] flex-col justify-center gap-0.5 rounded-lg border border-white/7 bg-zinc-950/40 px-2 py-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm"
      : "flex min-h-[3.5rem] flex-col justify-center gap-1 rounded-xl border border-white/7 bg-zinc-950/40 px-3 py-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm";
  const dtLblCls = tight
    ? "text-[8px] font-semibold uppercase tracking-[0.08em] text-zinc-500"
    : compact
      ? "text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-500"
      : "text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500";
  const ddBodyCls = "min-w-0 font-semibold leading-snug text-zinc-100";
  const seasonOuterCls = tight
    ? "relative mt-2.5 shrink-0 rounded-lg border border-white/10 bg-black/28 p-2 shadow-none sm:p-2.5"
    : compact
      ? "relative mt-3.5 shrink-0 rounded-[1rem] border border-white/10 bg-linear-to-br from-black/45 via-black/30 to-transparent p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm ring-1 ring-white/5"
      : "relative mt-5 shrink-0 rounded-2xl border border-white/10 bg-linear-to-br from-black/48 via-black/32 to-transparent p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm ring-1 ring-white/5 sm:p-4";
  const seasonHeadRowCls = tight
    ? "flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-px border-b border-white/8 pb-1 leading-none"
    : compact
      ? "flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5 border-b border-white/6 pb-1.5"
      : "flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5 border-b border-white/6 pb-2";
  const seasonLeadCls = tight
    ? "text-[9px] font-semibold uppercase tracking-[0.1em] text-zinc-500 sm:text-[10px]"
    : compact
      ? "text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500"
      : "text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500";
  const seasonYearWrapCls = tight
    ? "inline font-display text-base font-bold tabular-nums tracking-tight sm:text-[1.125rem]"
    : compact
      ? "inline font-display text-xl font-bold tabular-nums tracking-tight sm:text-2xl"
      : "inline font-display text-2xl font-bold tabular-nums tracking-tight sm:text-3xl";
  const statGridCls = tight
    ? "mt-1.5 grid grid-cols-3 gap-1.5 sm:gap-2"
    : compact
      ? "mt-2 grid grid-cols-3 gap-1.5 sm:gap-2"
      : "mt-2.5 grid grid-cols-3 gap-2 sm:gap-2.5";
  const statBoxCls = tight
    ? "flex min-h-[2.75rem] min-w-0 flex-col items-center justify-center gap-0 rounded-md border border-white/10 bg-black/25 px-1 py-1.5 text-center sm:min-h-[2.8125rem]"
    : compact
      ? "flex min-h-[3.5rem] min-w-0 flex-col items-center justify-center gap-1 rounded-xl border border-white/9 bg-linear-to-b from-white/10 via-white/4 to-transparent px-1 py-2 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] backdrop-blur-sm sm:py-2.5"
      : "flex min-h-[3.875rem] min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/9 bg-linear-to-b from-white/10 via-white/4 to-transparent px-1.5 py-3 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] backdrop-blur-sm sm:min-h-[4rem] sm:px-2 sm:py-3.5";
  const statLabelCls = tight
    ? "text-[10px] font-semibold uppercase leading-none tracking-[0.06em] text-zinc-500"
    : compact
      ? "text-[10px] font-semibold uppercase tracking-[0.1em] text-zinc-500 sm:text-[9px]"
      : "text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:text-[10px] sm:tracking-wide";
  const statValueCls = tight
    ? "font-display text-[1.125rem] font-bold tabular-nums leading-none text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.35)] sm:text-[1.25rem]"
    : compact
      ? "font-display text-lg font-bold tabular-nums leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-xl"
      : "font-display text-xl font-bold tabular-nums leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-2xl";
  /** Fascia “Scheda aggiornata” in fondo al blocco centrale (`mt-auto` sul wrapper); senza margine top. */
  const updatedBannerCls = tight
    ? "relative inline-flex w-full items-center justify-center rounded border border-white/8 bg-black/25 px-2 py-1 text-center text-[9px] leading-snug text-zinc-500"
    : compact
      ? "relative inline-flex w-full items-center justify-center rounded-lg border border-white/6 bg-white/3 px-2.5 py-1.5 text-center text-[10px] leading-snug text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
      : "relative inline-flex w-full items-center justify-center rounded-xl border border-white/6 bg-white/3 px-3 py-2 text-center text-[11px] leading-snug text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]";
  const initialsCls = tight
    ? "absolute inset-0 flex items-center justify-center font-display text-xs font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-[0.8125rem]"
    : compact
      ? "absolute inset-0 flex items-center justify-center font-display text-sm font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-base"
      : "absolute inset-0 flex items-center justify-center font-display text-lg font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-xl";

  const footerInteractiveClass = tight
    ? "block w-full rounded-md border border-accent/40 py-1.5 text-center text-xs font-semibold text-accent leading-tight"
    : compact
      ? "block w-full rounded-xl border border-accent/40 py-2.5 text-center text-sm font-semibold text-accent"
      : "block w-full rounded-xl border border-accent/40 py-3 text-center text-sm font-semibold text-accent";
  const footerStaticClass = tight
    ? "rounded-md border border-accent/40 py-1.5 text-center text-xs font-semibold text-accent leading-tight"
    : compact
      ? "rounded-xl border border-accent/40 py-2.5 text-center text-sm font-semibold text-accent"
      : "rounded-xl border border-accent/40 py-3 text-center text-sm font-semibold text-accent";
  const strengthCellCls = tight
    ? "col-span-2 flex min-h-[3.625rem] flex-col gap-0 rounded-md border border-white/6 bg-zinc-950/35 px-2 py-1.5 sm:min-h-[3.75rem]"
    : compact
      ? "col-span-2 flex min-h-[5.625rem] flex-col gap-0 rounded-xl border border-white/7 bg-zinc-950/40 px-2 py-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm"
      : "col-span-2 flex min-h-[6.5rem] flex-col gap-0.5 rounded-xl border border-white/7 bg-zinc-950/40 px-3 py-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm";

  const strengthDdCls = tight
    ? "wrap-anywhere mt-0 min-h-0 min-w-0 text-[12px] font-semibold leading-snug text-zinc-100 line-clamp-3"
    : compact
      ? "wrap-anywhere mt-0 min-h-[3.25rem] min-w-0 text-[13px] font-semibold leading-snug text-zinc-100 line-clamp-4"
      : "wrap-anywhere mt-0 min-h-[4rem] min-w-0 font-semibold leading-snug text-zinc-100 line-clamp-4";

  const footerBlockCls = tight ? "shrink-0 w-full pt-2.5" : compact ? "shrink-0 w-full pt-4" : "shrink-0 w-full pt-5";
  const footerExtraWrapCls = tight ? "mt-2.5 space-y-1.5 border-t border-white/10 pt-2.5" : "mt-2.5 space-y-1.5 border-t border-white/10 pt-2.5";

  const jerseyLabel =
    jerseyNumber !== undefined && jerseyNumber !== null && String(jerseyNumber).trim() !== ""
      ? `#${String(jerseyNumber).trim()}`
      : null;

  const clubInitialsBadge = (() => {
    const parts = clubName.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0]![0] ?? ""}${parts[1]![0] ?? ""}`.toUpperCase().slice(0, 2);
    }
    return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
  })();

  const clubImgSizes = tight ? "40px" : compact ? "34px" : "40px";

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
      className={`group/card relative flex h-full min-h-0 w-full flex-col overflow-hidden ${cardRounding} border border-white/10 bg-linear-to-b from-zinc-900/94 via-zinc-950/96 to-black/92 shadow-[0_26px_64px_-32px_rgba(0,0,0,0.92),inset_0_1px_0_0_rgba(255,255,255,0.07)] ring-1 ring-white/7 backdrop-blur-md transition duration-300 hover:border-accent/25 hover:shadow-[0_34px_88px_-36px_rgba(0,0,0,0.94),0_0_0_1px_rgba(0,229,160,0.06)] hover:ring-white/10 ${cardPadding}`}
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
                  className={photoAthleteImgCls}
                  loading="lazy"
                  decoding="async"
                />
                <div className={photoAthleteRadialOverlayCls} />
                <div className={photoAthleteFloorOverlayCls} />
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
            <div className={clubBlockCls} role="group" aria-label={`Squadra attuale: ${clubName}`}>
              <p className={clubMicroLblCls}>Squadra attuale</p>
              <div className="mt-1 flex min-w-0 items-center gap-1.5 sm:gap-2">
                <div className={clubLogoSlotCls}>
                  {clubLogo ? (
                    <Image src={clubLogo} alt="" fill className="object-contain p-px" sizes={clubImgSizes} />
                  ) : (
                    <span
                      className={`absolute inset-0 flex items-center justify-center font-display ${clubInitialsSz} font-bold tracking-wide text-zinc-500`}
                      aria-hidden
                    >
                      {clubInitialsBadge}
                    </span>
                  )}
                </div>
                <p className={clubNameTrimCls}>{clubName}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <dl className={`${dlCls} min-h-0 shrink-0`}>
            <div className={ddCellCls}>
              <dt className={dtLblCls}>Ruolo</dt>
              <dd className={ddBodyCls}>{role}</dd>
            </div>
            <div className={ddCellCls}>
              <dt className={dtLblCls}>Categoria</dt>
              <dd className={ddBodyCls}>{category}</dd>
            </div>
            <div className={ddCellCls}>
              <dt className={dtLblCls}>Disponibilità</dt>
              <dd
                className={
                  availabilityHighlighted
                    ? "min-w-0 font-bold leading-snug text-accent [text-shadow:0_0_24px_rgba(0,229,160,0.22)]"
                    : ddBodyCls
                }
              >
                {availabilityLabel}
              </dd>
            </div>
            <div className={ddCellCls}>
              <dt className={dtLblCls}>Nazionalità</dt>
              <dd className={ddBodyCls}>{nationalityFull}</dd>
            </div>
            <div className={ddCellCls}>
              <dt className={dtLblCls}>Mano dominante</dt>
              <dd className={ddBodyCls}>{dominantHand}</dd>
            </div>
            <div className={ddCellCls}>
              <dt className={dtLblCls}>Altezza · Peso</dt>
              <dd className={`tabular-nums ${ddBodyCls}`}>
                <span className="whitespace-nowrap">{heightCm} cm</span>
                <span className="text-zinc-600"> · </span>
                <span className="whitespace-nowrap">{weightKg} kg</span>
              </dd>
            </div>
            <div className={strengthCellCls}>
              <dt className={dtLblCls}>Punto di forza</dt>
              <dd className={strengthDdCls}>{strengthPoint}</dd>
            </div>
          </dl>

          <div className={seasonOuterCls}>
            <div className={seasonHeadRowCls}>
              <span className={seasonLeadCls}>Media stagione</span>
              <span className={seasonYearWrapCls}>
                <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                  {seasonLabel}
                </span>
              </span>
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

        <div className={footerBlockCls}>
          {footer}
          {footerExtra ? <div className={footerExtraWrapCls}>{footerExtra}</div> : null}
        </div>
      </div>
    </article>
  );
}
