import type { TalentAthlete } from "@/lib/talent-board-data";
import { TALENT_BOARD_SEASON_LABEL } from "@/lib/talent-board-data";
import { TalentMiniCard, type TalentMiniCardStat } from "@/components/site/TalentMiniCard";

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

function parseStatEntry(raw: string): { value: string; label: string } {
  const t = raw.trim();
  const m = /^([\d.,]+)\s+(.+)$/.exec(t);
  if (m) return { value: m[1], label: m[2].trim().replace(/\s+/g, " ") };
  const parts = t.split(/\s+/);
  if (parts.length >= 2) return { value: parts[0], label: parts.slice(1).join(" ") };
  return { value: t, label: "" };
}

function twoStatChips(athlete: TalentAthlete): readonly [TalentMiniCardStat, TalentMiniCardStat] {
  const fmt = (n: number) =>
    n.toLocaleString("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const parsed = (athlete.statsMain ?? []).map(parseStatEntry).filter((x) => x.label.length > 0);
  const fallback: [TalentMiniCardStat, TalentMiniCardStat] = [
    { label: "PPG", value: fmt(athlete.advanced.ppg) },
    { label: "APG", value: fmt(athlete.advanced.apg) },
  ];
  return [parsed[0] ?? fallback[0], parsed[1] ?? fallback[1]];
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

/** Stessa mini scheda della sezione Talent Board in home (`TalentMiniCard`). */
export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  const cta = profileCtaTarget(athlete);
  const fn = athlete.firstName.trim();
  const ln = athlete.lastName.trim();
  const nameDisplay = fn.length ? `${fn.slice(0, 1)}. ${ln}` : ln;
  const fullName = `${fn} ${ln}`.trim();
  const avail = availabilityForCard(athlete.status);

  return (
    <TalentMiniCard
      ariaLabel={`Scheda Talent Board: ${fullName}`}
      photoUrl={athlete.photoUrl}
      photoAlt={fullName}
      photoInitials={initials(athlete)}
      nameDisplay={nameDisplay}
      role={athlete.role}
      category={athlete.category}
      birthYear={athlete.birthYear}
      nationalityCode={nationalityCodeLabel(athlete.nationality)}
      nationalityFull={athlete.nationality}
      clubName={athlete.club}
      availabilityLabel={avail.label}
      availabilityHighlighted={avail.highlighted}
      stats={twoStatChips(athlete)}
      seasonLabel={TALENT_BOARD_SEASON_LABEL}
      profileHref={cta.href}
      profileExternal={cta.external}
    />
  );
}
