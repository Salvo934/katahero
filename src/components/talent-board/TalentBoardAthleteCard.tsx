import Link from "next/link";
import type { TalentAthlete } from "@/lib/talent-board-data";
import { SITE } from "@/lib/site";

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

function mediaSeasonLine(athlete: TalentAthlete): string {
  const { statsMain, advanced: s } = athlete;
  if (statsMain.length >= 3) return statsMain.slice(0, 3).join(" · ");
  const fmt = (n: number) =>
    n.toLocaleString("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return `${fmt(s.ppg)} PPG · ${fmt(s.rpg)} RPG · ${fmt(s.apg)} APG`;
}

function cardBadgeDisplayLabels(athlete: TalentAthlete): string[] {
  if (athlete.cardBadgeLabels?.length) return athlete.cardBadgeLabels;
  const st = athlete.status.toLowerCase();
  const head =
    st.includes("disponib") ? "Disponibile" : st.includes("contratto") ? "Sotto contratto" : st.includes("osservaz") ? "In osservazione" : athlete.status;
  const hasVideoHint = athlete.badges.some((b) => /video|highlight/i.test(b));
  return [head, hasVideoHint ? "Video disponibile" : "Video su richiesta", "Profilo aggiornato", "Agenzia verificata"];
}

function referralMailto(athlete: TalentAthlete, fullName: string): string {
  const subject = `Talent Board — ${fullName}`;
  const body = `Ciao,\n\nvorrei informazioni sul profilo di ${fullName} (${athlete.role}, ${athlete.club}, ${athlete.category}).\n\n`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function formatProfileUpdatedShort(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return iso;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("it-IT", { day: "numeric", month: "short", year: "numeric" });
}

function statusCompact(status: string): { label: string; pillClass: string } {
  const s = status.toLowerCase();
  if (s.includes("disponib")) {
    return {
      label: "Disponibile",
      pillClass: "border-accent/35 bg-accent/12 text-accent",
    };
  }
  if (s.includes("contratto")) {
    return {
      label: "In contratto",
      pillClass: "border-amber-400/28 bg-amber-400/10 text-amber-100",
    };
  }
  if (s.includes("osservaz")) {
    return {
      label: "Osservazione",
      pillClass: "border-white/14 bg-white/[0.06] text-zinc-300",
    };
  }
  return {
    label: status.length > 20 ? `${status.slice(0, 18)}…` : status,
    pillClass: "border-white/12 bg-white/[0.05] text-zinc-400",
  };
}

const btnPrimary =
  "inline-flex min-h-9 flex-1 items-center justify-center gap-1 rounded-xl bg-accent px-2 py-2 text-[11px] font-bold text-black shadow-[0_6px_20px_-10px_rgba(0,229,160,0.45)] transition hover:brightness-105 active:scale-[0.99] sm:text-xs";
const btnSecondary =
  "inline-flex min-h-9 flex-1 items-center justify-center rounded-xl border border-white/16 bg-white/[0.06] px-2 py-2 text-[11px] font-semibold text-zinc-100 transition hover:border-white/26 hover:bg-white/10 sm:text-xs";
/** Card compatta da listing (molti risultati): foto bassa, testo truncato, dettaglio sulla scheda completa. */
export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  const cta = profileCtaTarget(athlete);
  const photo = athlete.photoUrl?.trim();
  const fullName = `${athlete.firstName} ${athlete.lastName}`;
  const notes = (athlete.playerNotes ?? []).filter(Boolean);
  const scoutLine = athlete.scoutLine?.trim();
  const badges = cardBadgeDisplayLabels(athlete).slice(0, 2);
  const metaCore = `${athlete.role} · ${athlete.heightCm} cm · ${athlete.birthYear}`;
  const clubRow = `${athlete.club} · ${athlete.category}`;
  const updatedShort = formatProfileUpdatedShort(athlete.profileUpdatedAt);
  const status = statusCompact(athlete.status);
  const summary = scoutLine ?? notes[0] ?? null;

  return (
    <article className="group/card flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/8 bg-zinc-900/35 shadow-[0_12px_36px_-28px_rgba(0,0,0,0.85)] backdrop-blur-sm transition duration-200 hover:border-white/14 hover:bg-zinc-900/45 hover:shadow-[0_16px_44px_-28px_rgba(0,0,0,0.9)]">
      <div className="relative h-21 w-full shrink-0 overflow-hidden bg-zinc-800 sm:h-24">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element -- URL atleta arbitrario (CDN / siti terzi)
          <img
            src={photo}
            alt={fullName}
            className="h-full w-full object-cover object-top transition duration-300 ease-out group-hover/card:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-zinc-600/80 via-zinc-800 to-zinc-950 font-display text-lg font-bold text-white sm:text-xl">
            {initials(athlete)}
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black/55 to-transparent" aria-hidden />
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-1.5 p-3 sm:gap-2 sm:p-3.5">
        <div className="flex min-w-0 items-start justify-between gap-2">
          <h2 className="font-display min-w-0 text-[0.9375rem] font-bold leading-snug tracking-tight text-white sm:text-base">
            <span className="line-clamp-2" title={fullName}>
              {fullName}
            </span>
          </h2>
          <span
            className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide sm:text-[10px] ${status.pillClass}`}
            title={athlete.status}
          >
            {status.label}
          </span>
        </div>

        <p className="line-clamp-1 text-[11px] leading-snug text-zinc-500" title={metaCore}>
          {metaCore} · {athlete.nationality}
        </p>
        <p className="line-clamp-1 text-[11px] font-medium leading-snug text-zinc-300" title={clubRow}>
          {clubRow}
        </p>
        <p className="text-[11px] font-semibold tabular-nums tracking-tight text-white" title={mediaSeasonLine(athlete)}>
          {mediaSeasonLine(athlete)}
        </p>

        {summary ? (
          <p className="line-clamp-2 text-[11px] leading-snug text-zinc-400" title={summary}>
            {summary}
          </p>
        ) : (
          <p className="text-[11px] text-zinc-600">—</p>
        )}

        <div className="flex min-h-5.5 flex-wrap gap-1">
          {badges.map((b) => (
            <span
              key={b}
              className="max-w-full truncate rounded-md border border-white/8 bg-white/4 px-1.5 py-0.5 text-[9px] font-medium text-zinc-400 sm:text-[10px]"
              title={b}
            >
              {b}
            </span>
          ))}
        </div>

        <p className="text-[10px] text-zinc-600">
          Agg. <time dateTime={athlete.profileUpdatedAt}>{updatedShort}</time>
          <span className="text-zinc-700"> · </span>
          <span className="line-clamp-1 text-zinc-500" title={athlete.agency}>
            {athlete.agency}
          </span>
        </p>

        <div className="mt-auto grid grid-cols-2 gap-1.5 pt-1" aria-label="Azioni">
          {cta.external ? (
            <a href={cta.href} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Profilo
              <span className="sr-only"> {fullName}, si apre in nuova scheda</span>
              <span aria-hidden>↗</span>
            </a>
          ) : (
            <Link href={cta.href} className={btnPrimary}>
              Profilo
              <span className="sr-only">{fullName}</span>
              <span aria-hidden>→</span>
            </Link>
          )}
          <a href={referralMailto(athlete, fullName)} className={btnSecondary}>
            Contatta
          </a>
        </div>
      </div>
    </article>
  );
}
