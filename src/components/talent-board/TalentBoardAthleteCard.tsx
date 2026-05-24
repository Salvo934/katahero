"use client";

import type { TalentAthlete } from "@/lib/talent-board-data";
import { TALENT_BOARD_SEASON_LABEL } from "@/lib/talent-board-data";
import { TalentMiniCard } from "@/components/site/TalentMiniCard";
import { ShareTalentCardButton } from "@/components/talent-board/ShareTalentCardButton";
import { getSiteUrl } from "@/lib/site";

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

/** URL assoluto per condivisione: stesso target del CTA profilo, con base sito se link interno. */
function shareCardHref(athlete: TalentAthlete): string {
  const { href, external } = profileCtaTarget(athlete);
  if (external) return href;
  const base = getSiteUrl().replace(/\/$/, "");
  const path = href.startsWith("/") ? href : `/${href}`;
  return `${base}${path}`;
}

function nationalityCodeLabel(nationality: string): string {
  const t = nationality.trim();
  if (t.length <= 4) return t.toUpperCase();
  return t.slice(0, 3).toUpperCase();
}

function availabilityForCard(status: string): { label: string; highlighted: boolean } {
  const s = status.toLowerCase();
  if (s.includes("disponib")) return { label: "Disponibile", highlighted: true };
  if (s.includes("contratto")) return { label: "In contratto", highlighted: false };
  if (s.includes("osservaz")) return { label: "In osservazione", highlighted: false };
  return { label: status, highlighted: false };
}

/** Un solo punto di forza: testo pubblico dedicato → note → scout. */
function strengthForCard(athlete: TalentAthlete, maxLen = 220): string {
  const pinned = athlete.publicCardStrengthLine?.trim();
  if (pinned) return pinned.length > maxLen ? `${pinned.slice(0, maxLen - 1)}…` : pinned;
  const first = athlete.playerNotes?.map((x) => x.trim()).find((x) => x.length > 0);
  if (first) return first.length > maxLen ? `${first.slice(0, maxLen - 1)}…` : first;
  const scout = athlete.scoutLine?.trim();
  if (scout) return scout.length > maxLen ? `${scout.slice(0, maxLen - 1)}…` : scout;
  return "Dettagli sul profilo pubblico completo.";
}

function formatProfileUpdatedShort(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return iso;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("it-IT", { day: "numeric", month: "short", year: "numeric" });
}

function formatSeasonAvg(n: number): string {
  return n.toLocaleString("it-IT", {
    minimumFractionDigits: n % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 2,
  });
}

const shareBtnCls =
  "min-h-9 w-full rounded-md border border-accent/48 bg-accent/11 px-2 py-[0.4375rem] text-[10px] font-bold uppercase tracking-wide text-accent shadow-[0_0_12px_-6px_rgba(0,229,160,0.3)] transition hover:border-accent hover:bg-accent/14 hover:text-white";

/** Stessa card della sezione home (#talent-board); condivisione scheda nell’area sotto il CTA profilo. */
export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  const cta = profileCtaTarget(athlete);
  const fn = athlete.firstName.trim();
  const ln = athlete.lastName.trim();
  const fullName = `${fn} ${ln}`.trim();
  const share = shareCardHref(athlete);
  const avail = availabilityForCard(athlete.status);
  const adv = athlete.advanced;

  return (
    <TalentMiniCard
      ariaLabel={`Scheda Talent Board: ${fullName}`}
      photoUrl={athlete.photoUrl}
      photoAlt={fullName}
      photoInitials={initials(athlete)}
      nameDisplay={fullName}
      jerseyNumber={athlete.jerseyNumber}
      role={athlete.role}
      category={athlete.category}
      birthYear={athlete.birthYear}
      dominantHand={athlete.dominantHand}
      heightCm={athlete.heightCm}
      weightKg={athlete.weightKg}
      strengthPoint={strengthForCard(athlete, 130)}
      nationalityCode={nationalityCodeLabel(athlete.nationality)}
      nationalityFull={athlete.nationality}
      clubName={athlete.club}
      clubLogoUrl={athlete.clubLogoUrl}
      availabilityLabel={avail.label}
      availabilityHighlighted={avail.highlighted}
      stats={[
        { label: "Punti", value: formatSeasonAvg(adv.ppg) },
        { label: "Rimbalzi", value: formatSeasonAvg(adv.rpg) },
        { label: "Assist", value: formatSeasonAvg(adv.apg) },
      ] as const}
      seasonLabel={TALENT_BOARD_SEASON_LABEL}
      profileUpdated={{
        dateTime: athlete.profileUpdatedAt,
        label: formatProfileUpdatedShort(athlete.profileUpdatedAt),
      }}
      profileHref={cta.href}
      profileExternal={cta.external}
      compactPlus
      footerExtra={<ShareTalentCardButton url={share} className={shareBtnCls} />}
    />
  );
}
