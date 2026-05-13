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
  {
    id: "2",
    slug: "luca-bianchi",
    firstName: "Luca",
    lastName: "Bianchi",
    sport: "Basket",
    role: "Playmaker",
    birthYear: 2005,
    heightCm: 185,
    nationality: "Italia",
    club: "Basket Torino",
    category: "Serie B",
    status: "Free Agent",
    agency: "Independent",
    statsMain: ["11.2 PPG", "2.9 RPG", "6.4 APG", "FG 44%", "3P 35%", "FT 86%"],
    badges: ["Free Agent", "Playmaker"],
    profilePath: "/atleti/luca-bianchi",
    advanced: { ppg: 11.2, rpg: 2.9, apg: 6.4, fgPct: 44, tpPct: 35, ftPct: 86 },
  },
  {
    id: "3",
    slug: "andrea-verdi",
    firstName: "Andrea",
    lastName: "Verdi",
    sport: "Basket",
    role: "Ala piccola",
    birthYear: 2007,
    heightCm: 198,
    nationality: "Italia",
    club: "Olimpia Milano / Next Gen",
    category: "U18 Elite",
    status: "Sotto contratto",
    agency: "Next Talent",
    statsMain: ["9.1 PPG", "5.6 RPG", "2.2 APG", "FG 51%", "3P 33%", "FT 74%"],
    badges: ["U18", "High Potential"],
    profilePath: "/atleti/andrea-verdi",
    advanced: { ppg: 9.1, rpg: 5.6, apg: 2.2, fgPct: 51, tpPct: 33, ftPct: 74 },
  },
  {
    id: "4",
    slug: "sara-conti",
    firstName: "Sara",
    lastName: "Conti",
    sport: "Basket",
    role: "Guardia",
    birthYear: 2004,
    heightCm: 178,
    nationality: "Italia",
    club: "Virtus Segafredo Bologna",
    category: "Serie A1 Femminile",
    status: "Disponibile per valutazioni",
    agency: "Sport Talent Group",
    statsMain: ["13.1 PPG", "4.0 RPG", "3.8 APG", "FG 46%", "3P 39%", "FT 88%"],
    badges: ["Senior", "Disponibile"],
    profilePath: "/atleti/sara-conti",
    advanced: { ppg: 13.1, rpg: 4.0, apg: 3.8, fgPct: 46, tpPct: 39, ftPct: 88 },
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

/** Opzioni filtri principali — derivate / estendibili */
export const FILTER_OPTIONS = {
  sport: ["Tutti", "Basket"] as const,
  role: ["Tutti", "Guardia", "Playmaker", "Ala piccola"] as const,
  category: [
    "Tutte",
    "U19 Eccellenza",
    "Serie B",
    "U18 Elite",
    "Serie A1 Femminile",
  ] as const,
  birthYear: ["Tutti", "2004", "2005", "2006", "2007"] as const,
  nationality: ["Tutte", "Italia"] as const,
  status: ["Tutti", "Disponibile", "Free Agent", "Sotto contratto", "Disponibile per valutazioni"] as const,
  agency: ["Tutte", "Elite Basket Agency", "Independent", "Next Talent", "Sport Talent Group"] as const,
} as const;
