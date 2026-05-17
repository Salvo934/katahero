"use client";

import Link from "next/link";
import { useId, useState } from "react";

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
  /**
   * Talent Board: mostra solo l’intestazione finché non si espande (come il pannello filtri).
   * Home: omettere — scheda sempre completa.
   */
  collapsible?: boolean;
  /** Testo sintesi scout (sezione espansa). */
  summary?: string;
  /** Elenco punti di forza (sezione espansa). */
  strengths?: readonly string[];
};

const footerInteractiveClass =
  "mt-6 block w-full rounded-xl border border-accent/40 py-3 text-center text-sm font-semibold text-accent";

const footerStaticClass =
  "mt-6 rounded-xl border border-accent/40 py-3 text-center text-sm font-semibold text-accent";

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
  collapsible,
  summary,
  strengths,
}: TalentMiniCardProps) {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const photo = photoUrl?.trim();
  const summaryText = summary?.trim() ?? "";
  const strengthItems = strengths?.filter((s) => s.trim()) ?? [];

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

  const detailBlock = (
    <>
      <dl
        className={
          collapsible
            ? "relative mt-0 grid grid-cols-2 gap-2 border-y border-white/7 py-5 text-[13px] sm:gap-3"
            : "relative mt-6 grid grid-cols-2 gap-2 border-y border-white/7 py-5 text-[13px] sm:gap-3"
        }
      >
        <div className="flex flex-col gap-1 rounded-xl border border-white/6 bg-zinc-950/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Ruolo</dt>
          <dd className="font-semibold leading-snug text-zinc-50">{role}</dd>
        </div>
        <div className="flex flex-col gap-1 rounded-xl border border-white/6 bg-zinc-950/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Categoria</dt>
          <dd className="font-semibold leading-snug text-zinc-50">{category}</dd>
        </div>
        <div className="flex flex-col gap-1 rounded-xl border border-white/6 bg-zinc-950/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Disponibilità</dt>
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
        <div className="flex flex-col gap-1 rounded-xl border border-white/6 bg-zinc-950/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Nazionalità</dt>
          <dd className="font-semibold leading-snug text-zinc-50">{nationalityFull}</dd>
        </div>
        <div className="flex flex-col gap-1 rounded-xl border border-white/6 bg-zinc-950/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Mano dominante</dt>
          <dd className="font-semibold leading-snug text-zinc-50">{dominantHand}</dd>
        </div>
        <div className="flex flex-col gap-1 rounded-xl border border-white/6 bg-zinc-950/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Altezza</dt>
          <dd className="font-semibold tabular-nums leading-snug text-zinc-50">
            {heightCm} cm
          </dd>
        </div>
        <div className="col-span-2 flex flex-col gap-1 rounded-xl border border-white/6 bg-zinc-950/35 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Peso</dt>
          <dd className="font-semibold tabular-nums leading-snug text-zinc-50">{weightKg} kg</dd>
        </div>
      </dl>

      <div className="relative mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm sm:p-4">
        <div className="flex flex-col gap-3 border-b border-white/6 pb-3 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Stagione</p>
            <p className="mt-1 font-display text-xl font-bold tabular-nums tracking-tight sm:text-2xl">
              <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                {seasonLabel}
              </span>
            </p>
          </div>
          <div className="hidden h-8 w-px shrink-0 bg-linear-to-b from-transparent via-white/15 to-transparent sm:block" aria-hidden />
          <div className="hidden text-right sm:block sm:min-w-18">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-600">Media</p>
            <p className="mt-0.5 text-[10px] font-medium text-zinc-500">Stagione regolare</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-2.5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/8 bg-linear-to-b from-white/9 to-white/2 px-1.5 py-3 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:px-2 sm:py-3.5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:text-[10px] sm:tracking-wide">
                {s.label}
              </span>
              <span className="font-display text-xl font-bold tabular-nums leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-2xl">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {summaryText ? (
        <div className="relative mt-5 rounded-2xl border border-white/10 bg-black/25 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Sintesi</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{summaryText}</p>
        </div>
      ) : null}

      {strengthItems.length > 0 ? (
        <div className="relative mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Punti di forza</p>
          <ul className="mt-3 space-y-2.5">
            {strengthItems.map((note, i) => (
              <li key={`${i}-${note.slice(0, 48)}`} className="flex gap-2.5 text-sm leading-snug text-zinc-400">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/85 shadow-[0_0_10px_rgba(0,229,160,0.35)]" aria-hidden />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {profileUpdated ? (
        <p className="relative mt-5 inline-flex w-full items-center justify-center rounded-xl border border-white/6 bg-white/3 px-3 py-2 text-center text-[11px] leading-snug text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
          <span>
            Scheda aggiornata il{" "}
            <time dateTime={profileUpdated.dateTime} className="font-semibold text-zinc-300">
              {profileUpdated.label}
            </time>
          </span>
        </p>
      ) : null}

      {footer}
    </>
  );

  return (
    <article
      className="group/card relative w-full overflow-hidden rounded-3xl border border-white/12 bg-linear-to-b from-zinc-900/95 via-zinc-950/95 to-black/90 p-6 shadow-[0_28px_70px_-36px_rgba(0,0,0,0.92),inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/6 backdrop-blur-md transition duration-300 hover:border-white/14 hover:shadow-[0_36px_90px_-38px_rgba(0,0,0,0.95)] hover:ring-white/8 sm:p-7"
      aria-label={ariaLabel}
    >
      <div
        className="pointer-events-none absolute -right-16 top-0 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,229,160,0.11),transparent_68%)] blur-2xl"
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
      <div className="relative flex gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-linear-to-br from-zinc-500 via-zinc-800 to-zinc-950 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-white/15 transition duration-300 group-hover/card:ring-white/25 sm:h-24 sm:w-24">
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
                <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-xl">
                  {photoInitials}
                </span>
              ) : null}
            </>
          )}
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="font-display min-w-0 text-lg font-bold tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] sm:text-xl">
              {nameDisplay}
            </h3>
            {jerseyLabel ? (
              <span
                className="inline-flex shrink-0 items-center rounded-lg border border-accent/35 bg-accent/12 px-2 py-0.5 font-display text-xs font-bold tabular-nums tracking-tight text-accent shadow-[0_0_20px_-6px_rgba(0,229,160,0.55)] sm:text-sm"
                aria-label={`Numero maglia ${String(jerseyNumber).trim()}`}
              >
                {jerseyLabel}
              </span>
            ) : null}
          </div>
          <p className="mt-1.5 text-[12px] leading-snug text-zinc-400">
            {role} · {category} · <span className="font-medium text-zinc-200">{birthYear}</span>
            <span className="text-zinc-600"> · </span>
            <span className="font-medium text-zinc-200">{nationalityCode}</span>
          </p>
          <p className="mt-2 truncate text-[13px] leading-snug text-zinc-500">
            <span className="font-medium text-zinc-600">Club </span>
            <span className="font-semibold text-zinc-200">{clubName}</span>
          </p>
        </div>
      </div>

      {collapsible ? (
        <>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="relative mt-6 inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-2xl border border-white/14 bg-white/7 px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition hover:border-accent/35 hover:bg-white/10"
          >
            <span>{expanded ? "Mostra meno" : "Mostra altro"}</span>
            <span className="text-zinc-500" aria-hidden>
              {expanded ? "▴" : "▾"}
            </span>
          </button>
          <div
            id={panelId}
            role="region"
            aria-label="Dettaglio scheda atleta"
            hidden={!expanded}
            className={expanded ? "mt-6 border-t border-white/8 pt-6" : undefined}
          >
            {detailBlock}
          </div>
        </>
      ) : (
        detailBlock
      )}
    </article>
  );
}
