/**
 * Dati demo Talent Board — modificare qui i numeri e gli atleti.
 * Struttura pronta per collegare filtri e API reali.
 */

export type TalentAthleteAdvancedStats = {
  ppg: number;
  rpg: number;
  apg: number;
  fgPct: number;
  tpPct: number;
  ftPct: number;
};

export type TalentAthlete = {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  sport: string;
  role: string;
  birthYear: number;
  heightCm: number;
  nationality: string;
  club: string;
  category: string;
  status: string;
  agency: string;
  /** Righe tipo "14.8 PPG" per la card */
  statsMain: string[];
  badges: string[];
  profilePath: string;
  advanced: TalentAthleteAdvancedStats;
};

/** Numeri dashboard — editabili */
export const TALENT_BOARD_DASHBOARD_STATS = [
  { key: "athletes", value: "12", label: "Atleti presenti" },
  { key: "sports", value: "3", label: "Sport rappresentati" },
  { key: "updated", value: "9", label: "Profili aggiornati" },
  { key: "agencies", value: "4", label: "Agenzie / referenti" },
  { key: "available", value: "6", label: "Card disponibili" },
] as const;

export const DEMO_ATHLETES_BASKETBALL: TalentAthlete[] = [
  {
    id: "1",
    slug: "mario-rossi",
    firstName: "Mario",
    lastName: "Rossi",
    sport: "Basket",
    role: "Guardia",
    birthYear: 2006,
    heightCm: 193,
    nationality: "Italia",
    club: "Stella Azzurra Roma",
    category: "U19 Eccellenza",
    status: "Disponibile",
    agency: "Elite Basket Agency",
    statsMain: ["14.8 PPG", "4.2 RPG", "3.1 APG", "FG 47%", "3P 38%", "FT 81%"],
    badges: ["Top Prospect", "Video aggiornato"],
    profilePath: "/atleti/mario-rossi",
    advanced: { ppg: 14.8, rpg: 4.2, apg: 3.1, fgPct: 47, tpPct: 38, ftPct: 81 },
  },
];

export const FAQ_ITEMS = [
  {
    q: "Cos’è Talent Board?",
    a:
      "È la vetrina digitale di KataHero per scoprire, valutare e contattare atleti attraverso card dinamiche e profili completi collegati.",
  },
  {
    q: "È solo per il basket?",
    a: "No. Talent Board è pensata per tutti gli sport.",
  },
  {
    q: "Posso collegare la card al mio sito personale?",
    a:
      "Sì. Ogni card può portare al sito personale dell’atleta, a un profilo KataHero o a una pagina esterna.",
  },
  {
    q: "Possono usarla agenti e società?",
    a:
      "Sì. Agenti, procuratori e società possono organizzare più atleti nella stessa board e renderli filtrabili per sport, ruolo, status o agenzia.",
  },
  {
    q: "Posso aggiornare dati e statistiche?",
    a: "Sì. Le card sono pensate per essere aggiornabili nel tempo.",
  },
] as const;

/** Opzioni filtri — allineate al dataset demo (un atleta) */
export const FILTER_OPTIONS = {
  sport: ["Tutti", "Basket"] as const,
  role: ["Tutti", "Guardia"] as const,
  category: ["Tutte", "U19 Eccellenza"] as const,
  birthYear: ["Tutti", "2006"] as const,
  nationality: ["Tutte", "Italia"] as const,
  status: ["Tutti", "Disponibile"] as const,
  agency: ["Tutte", "Elite Basket Agency"] as const,
} as const;
