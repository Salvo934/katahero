import type { TalentAthlete } from "@/lib/talent-board-data";

/** Stato filtri — serializzabile su URL */
export type TalentFilterState = {
  search: string;
  sport: string;
  role: string;
  category: string;
  birthYear: string;
  nationality: string;
  status: string;
  agency: string;
  minHeight: string;
  clubContains: string;
  minPpg: string;
  minRpg: string;
  minApg: string;
  minFg: string;
  min2p: string;
  min3p: string;
  minFt: string;
  sort: TalentSortId;
};

export type TalentSortId =
  | "relevance"
  | "nome-az"
  | "nome-za"
  | "ppg-desc"
  | "ppg-asc"
  | "anno-asc"
  | "anno-desc"
  | "altezza-desc";

export const DEFAULT_TALENT_FILTERS: TalentFilterState = {
  search: "",
  sport: "Basket",
  role: "Tutti",
  category: "Tutte",
  birthYear: "Tutti",
  nationality: "Tutte",
  status: "Tutti",
  agency: "Tutte",
  minHeight: "",
  clubContains: "",
  minPpg: "",
  minRpg: "",
  minApg: "",
  minFg: "",
  min2p: "",
  min3p: "",
  minFt: "",
  sort: "relevance",
};

export const SORT_LABELS: { id: TalentSortId; label: string }[] = [
  { id: "relevance", label: "Pertinenza" },
  { id: "nome-az", label: "Nome A → Z" },
  { id: "nome-za", label: "Nome Z → A" },
  { id: "ppg-desc", label: "PPG più alto" },
  { id: "ppg-asc", label: "PPG più basso" },
  { id: "anno-asc", label: "Anno · più giovani" },
  { id: "anno-desc", label: "Anno · più esperti" },
  { id: "altezza-desc", label: "Altezza decrescente" },
];

const Q_KEYS = {
  q: "q",
  sport: "sp",
  role: "ro",
  category: "ca",
  birthYear: "ye",
  nationality: "na",
  status: "st",
  agency: "ag",
  club: "club",
  minHeight: "hmin",
  minPpg: "ppg",
  minRpg: "rpg",
  minApg: "apg",
  minFg: "fg",
  min2p: "p2",
  min3p: "tp",
  minFt: "ft",
  sort: "sort",
} as const;

function isSortId(s: string): s is TalentSortId {
  return SORT_LABELS.some((x) => x.id === s);
}

export function parseTalentFilters(sp: URLSearchParams): TalentFilterState {
  const get = (k: string) => sp.get(k)?.trim() ?? "";
  const sortRaw = get(Q_KEYS.sort);
  return normalizeParsedFilters({
    ...DEFAULT_TALENT_FILTERS,
    search: fsearchTrim(get(Q_KEYS.q)),
    sport: get(Q_KEYS.sport) || DEFAULT_TALENT_FILTERS.sport,
    role: get(Q_KEYS.role) || DEFAULT_TALENT_FILTERS.role,
    category: get(Q_KEYS.category) || DEFAULT_TALENT_FILTERS.category,
    birthYear: get(Q_KEYS.birthYear) || DEFAULT_TALENT_FILTERS.birthYear,
    nationality: get(Q_KEYS.nationality) || DEFAULT_TALENT_FILTERS.nationality,
    status: get(Q_KEYS.status) || DEFAULT_TALENT_FILTERS.status,
    agency: get(Q_KEYS.agency) || DEFAULT_TALENT_FILTERS.agency,
    minHeight: get(Q_KEYS.minHeight),
    clubContains: get(Q_KEYS.club),
    minPpg: get(Q_KEYS.minPpg),
    minRpg: get(Q_KEYS.minRpg),
    minApg: get(Q_KEYS.minApg),
    minFg: get(Q_KEYS.minFg),
    min2p: get(Q_KEYS.min2p),
    min3p: get(Q_KEYS.min3p),
    minFt: get(Q_KEYS.minFt),
    sort: sortRaw && isSortId(sortRaw) ? sortRaw : DEFAULT_TALENT_FILTERS.sort,
  });
}

export function normalizeParsedFilters(f: TalentFilterState): TalentFilterState {
  const sort = isSortId(f.sort) ? f.sort : DEFAULT_TALENT_FILTERS.sort;
  return { ...f, sort };
}

function fsearchTrim(s: string): string {
  return s.trim().slice(0, 200);
}

export function serializeTalentFilters(f: TalentFilterState): string {
  const p = new URLSearchParams();
  const set = (key: string, value: string, defaultVal: string) => {
    if (value && value !== defaultVal) p.set(key, value);
  };

  if (f.search.trim()) p.set(Q_KEYS.q, f.search.trim().slice(0, 200));
  set(Q_KEYS.sport, f.sport, DEFAULT_TALENT_FILTERS.sport);
  set(Q_KEYS.role, f.role, DEFAULT_TALENT_FILTERS.role);
  set(Q_KEYS.category, f.category, DEFAULT_TALENT_FILTERS.category);
  set(Q_KEYS.birthYear, f.birthYear, DEFAULT_TALENT_FILTERS.birthYear);
  set(Q_KEYS.nationality, f.nationality, DEFAULT_TALENT_FILTERS.nationality);
  set(Q_KEYS.status, f.status, DEFAULT_TALENT_FILTERS.status);
  set(Q_KEYS.agency, f.agency, DEFAULT_TALENT_FILTERS.agency);
  if (f.clubContains.trim()) p.set(Q_KEYS.club, f.clubContains.trim());
  if (f.minHeight.trim()) p.set(Q_KEYS.minHeight, f.minHeight.trim());
  if (f.minPpg.trim()) p.set(Q_KEYS.minPpg, f.minPpg.trim());
  if (f.minRpg.trim()) p.set(Q_KEYS.minRpg, f.minRpg.trim());
  if (f.minApg.trim()) p.set(Q_KEYS.minApg, f.minApg.trim());
  if (f.minFg.trim()) p.set(Q_KEYS.minFg, f.minFg.trim());
  if (f.min2p.trim()) p.set(Q_KEYS.min2p, f.min2p.trim());
  if (f.min3p.trim()) p.set(Q_KEYS.min3p, f.min3p.trim());
  if (f.minFt.trim()) p.set(Q_KEYS.minFt, f.minFt.trim());
  if (f.sort !== DEFAULT_TALENT_FILTERS.sort) p.set(Q_KEYS.sort, f.sort);

  return p.toString();
}

export function countAdvancedFiltersActive(f: TalentFilterState): number {
  let n = 0;
  if (f.minHeight.trim()) n++;
  if (f.clubContains.trim()) n++;
  if (f.minPpg.trim()) n++;
  if (f.minRpg.trim()) n++;
  if (f.minApg.trim()) n++;
  if (f.minFg.trim()) n++;
  if (f.min2p.trim()) n++;
  if (f.min3p.trim()) n++;
  if (f.minFt.trim()) n++;
  return n;
}

export function hasNonDefaultFilters(f: TalentFilterState): boolean {
  const d = DEFAULT_TALENT_FILTERS;
  return (
    f.search.trim() !== "" ||
    f.sport !== d.sport ||
    f.role !== d.role ||
    f.category !== d.category ||
    f.birthYear !== d.birthYear ||
    f.nationality !== d.nationality ||
    f.status !== d.status ||
    f.agency !== d.agency ||
    countAdvancedFiltersActive(f) > 0 ||
    f.sort !== d.sort
  );
}

export function matchTalentAthlete(a: TalentAthlete, f: TalentFilterState): boolean {
  const q = f.search.trim().toLowerCase();
  if (q) {
    const blob = `${a.firstName} ${a.lastName} ${a.club} ${a.agency} ${a.sport} ${a.role} ${a.category} ${a.status} ${a.nationality} ${a.badges.join(" ")}`
      .toLowerCase();
    const tokens = q.split(/\s+/).filter(Boolean);
    if (!tokens.length || !tokens.every((t) => blob.includes(t))) return false;
  }
  if (f.sport !== "Tutti" && a.sport !== f.sport) return false;
  if (f.role !== "Tutti" && a.role !== f.role) return false;
  if (f.category !== "Tutte" && a.category !== f.category) return false;
  if (f.birthYear !== "Tutti" && String(a.birthYear) !== f.birthYear) return false;
  if (f.nationality !== "Tutte" && a.nationality !== f.nationality) return false;
  if (f.status !== "Tutti" && a.status !== f.status) return false;
  if (f.agency !== "Tutte" && a.agency !== f.agency) return false;

  if (f.clubContains.trim() && !a.club.toLowerCase().includes(f.clubContains.trim().toLowerCase())) return false;

  const minH = Number(f.minHeight);
  if (f.minHeight !== "" && !Number.isNaN(minH) && a.heightCm < minH) return false;

  const minPpg = Number(f.minPpg);
  if (f.minPpg !== "" && !Number.isNaN(minPpg) && a.advanced.ppg < minPpg) return false;
  const minRpg = Number(f.minRpg);
  if (f.minRpg !== "" && !Number.isNaN(minRpg) && a.advanced.rpg < minRpg) return false;
  const minApg = Number(f.minApg);
  if (f.minApg !== "" && !Number.isNaN(minApg) && a.advanced.apg < minApg) return false;
  const minFg = Number(f.minFg);
  if (f.minFg !== "" && !Number.isNaN(minFg) && a.advanced.fgPct < minFg) return false;
  const min3p = Number(f.min3p);
  if (f.min3p !== "" && !Number.isNaN(min3p) && a.advanced.tpPct < min3p) return false;
  const minFt = Number(f.minFt);
  if (f.minFt !== "" && !Number.isNaN(minFt) && a.advanced.ftPct < minFt) return false;

  return true;
}

function fullName(a: TalentAthlete) {
  return `${a.firstName} ${a.lastName}`.toLowerCase();
}

export function sortTalentAthletes(list: TalentAthlete[], sort: TalentSortId, searchQuery: string): TalentAthlete[] {
  const q = searchQuery.trim().toLowerCase();
  const next = [...list];

  if (sort === "relevance" && q) {
    const tokens = q.split(/\s+/).filter(Boolean);
    return next.sort((a, b) => {
      const score = (x: TalentAthlete) => {
        const name = fullName(x);
        let s = 0;
        if (name.startsWith(q)) s += 100;
        else if (name.includes(q)) s += 50;
        for (const t of tokens) {
          if (fullName(x).includes(t)) s += 30;
          if (x.club.toLowerCase().includes(t)) s += 15;
          if (x.role.toLowerCase().includes(t)) s += 10;
          if (x.agency.toLowerCase().includes(t)) s += 8;
        }
        return s;
      };
      return score(b) - score(a) || fullName(a).localeCompare(fullName(b), "it");
    });
  }

  const byName = (a: TalentAthlete, b: TalentAthlete) => fullName(a).localeCompare(fullName(b), "it");
  switch (sort) {
    case "nome-az":
      return next.sort(byName);
    case "nome-za":
      return next.sort((a, b) => byName(b, a));
    case "ppg-desc":
      return next.sort((a, b) => b.advanced.ppg - a.advanced.ppg || byName(a, b));
    case "ppg-asc":
      return next.sort((a, b) => a.advanced.ppg - b.advanced.ppg || byName(a, b));
    case "anno-asc":
      return next.sort((a, b) => b.birthYear - a.birthYear || byName(a, b));
    case "anno-desc":
      return next.sort((a, b) => a.birthYear - b.birthYear || byName(a, b));
    case "altezza-desc":
      return next.sort((a, b) => b.heightCm - a.heightCm || byName(a, b));
    default:
      return next.sort(byName);
  }
}

export function buildFilterChips(f: TalentFilterState): { id: string; label: string }[] {
  const d = DEFAULT_TALENT_FILTERS;
  const chips: { id: string; label: string }[] = [];
  if (f.search.trim()) chips.push({ id: "q", label: `Ricerca: “${f.search.trim().slice(0, 36)}${f.search.trim().length > 36 ? "…" : ""}”` });
  if (f.sport !== d.sport) chips.push({ id: "sp", label: f.sport });
  if (f.role !== d.role) chips.push({ id: "ro", label: f.role });
  if (f.category !== d.category) chips.push({ id: "ca", label: f.category });
  if (f.birthYear !== d.birthYear) chips.push({ id: "ye", label: `Anno ${f.birthYear}` });
  if (f.nationality !== d.nationality) chips.push({ id: "na", label: f.nationality });
  if (f.status !== d.status) chips.push({ id: "st", label: f.status });
  if (f.agency !== d.agency) chips.push({ id: "ag", label: f.agency });
  if (f.clubContains.trim()) chips.push({ id: "club", label: `Club: ${f.clubContains.trim()}` });
  if (f.minHeight.trim()) chips.push({ id: "hmin", label: `≥ ${f.minHeight} cm` });
  if (f.minPpg.trim()) chips.push({ id: "ppg", label: `PPG ≥ ${f.minPpg}` });
  if (f.minRpg.trim()) chips.push({ id: "rpg", label: `RPG ≥ ${f.minRpg}` });
  if (f.minApg.trim()) chips.push({ id: "apg", label: `APG ≥ ${f.minApg}` });
  if (f.minFg.trim()) chips.push({ id: "fg", label: `FG% ≥ ${f.minFg}` });
  if (f.min3p.trim()) chips.push({ id: "tp", label: `3P% ≥ ${f.min3p}` });
  if (f.minFt.trim()) chips.push({ id: "ft", label: `FT% ≥ ${f.minFt}` });
  if (f.min2p.trim()) chips.push({ id: "p2", label: `2P% ≥ ${f.min2p}` });
  if (f.sort !== d.sort) {
    const lbl = SORT_LABELS.find((s) => s.id === f.sort)?.label ?? f.sort;
    chips.push({ id: "sort", label: `Ordine: ${lbl}` });
  }
  return chips;
}

export function clearChip(id: string, patch: (p: Partial<TalentFilterState>) => void) {
  const d = DEFAULT_TALENT_FILTERS;
  const map: Record<string, Partial<TalentFilterState>> = {
    q: { search: "" },
    sp: { sport: d.sport },
    ro: { role: d.role },
    ca: { category: d.category },
    ye: { birthYear: d.birthYear },
    na: { nationality: d.nationality },
    st: { status: d.status },
    ag: { agency: d.agency },
    club: { clubContains: "" },
    hmin: { minHeight: "" },
    ppg: { minPpg: "" },
    rpg: { minRpg: "" },
    apg: { minApg: "" },
    fg: { minFg: "" },
    tp: { min3p: "" },
    ft: { minFt: "" },
    p2: { min2p: "" },
    sort: { sort: d.sort },
  };
  patch(map[id] ?? {});
}
