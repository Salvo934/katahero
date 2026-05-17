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

function seasonStatTriple(athlete: TalentAthlete): readonly [TalentMiniCardStat, TalentMiniCardStat, TalentMiniCardStat] {
  const fmt = (n: number) =>
    n.toLocaleString("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return [
    { label: "Punti", value: fmt(athlete.advanced.ppg) },
    { label: "Rimbalzi", value: fmt(athlete.advanced.rpg) },
    { label: "Assist", value: fmt(athlete.advanced.apg) },
  ];
}

function nationalityCodeLabel(nationality: string): string {
  const t = nationality.trim();
  if (t.length <= 4) return t.toUpperCase();
  return t.slice(0, 3).toUpperCase();
}

function formatProfileUpdatedLong(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return iso;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
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
  const fullName = `${fn} ${ln}`.trim();
  const avail = availabilityForCard(athlete.status);

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
      nationalityCode={nationalityCodeLabel(athlete.nationality)}
      nationalityFull={athlete.nationality}
      clubName={athlete.club}
      availabilityLabel={avail.label}
      availabilityHighlighted={avail.highlighted}
      stats={seasonStatTriple(athlete)}
      seasonLabel={TALENT_BOARD_SEASON_LABEL}
      profileUpdated={{
        dateTime: athlete.profileUpdatedAt,
        label: formatProfileUpdatedLong(athlete.profileUpdatedAt),
      }}
      profileHref={cta.href}
      profileExternal={cta.external}
      collapsible
      summary={athlete.scoutLine}
      strengths={athlete.playerNotes}
    />
  );
}
