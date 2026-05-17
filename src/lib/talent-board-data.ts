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
  /** Percorso profilo interno Next.js (es. /atleti/slug) */
  profilePath: string;
  /** URL immagine ritratto (https o percorso /… da public). Opzionale: senza foto si usano le iniziali. */
  photoUrl?: string;
  /** Se impostato, il CTA «Apri profilo completo» apre questo link (sito atleta / profilo esterno) in una nuova scheda. Altrimenti si usa `profilePath`. */
  profileWebsiteUrl?: string;
  /** Punti di forza e osservazioni sul gioco (mostrati come elenco in card) */
  playerNotes?: string[];
  /** Testo lungo sezione «Profilo» sulla card Talent Board */
  scoutLine?: string;
  /** Badge riga finale card (es. Disponibile · Video disponibile …). Se omesso si derivano da status. */
  cardBadgeLabels?: string[];
  /** Data ultimo aggiornamento scheda (YYYY-MM-DD), mostrata in card per affidabilità */
  profileUpdatedAt: string;
  advanced: TalentAthleteAdvancedStats;
};

/** Etichetta stagione mostrata sulle mini card (allineata alla home). */
export const TALENT_BOARD_SEASON_LABEL = "2025-26";

/** Numeri dashboard — editabili */
export const TALENT_BOARD_DASHBOARD_STATS = [
  { key: "athletes", value: "3", label: "Atleti presenti" },
  { key: "updated", value: "9", label: "Profili aggiornati" },
  { key: "agencies", value: "4", label: "Agenzie / referenti" },
  { key: "available", value: "3", label: "Card disponibili" },
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
    cardBadgeLabels: ["Disponibile", "Video disponibile", "Profilo aggiornato", "Agenzia verificata"],
    profilePath: "/atleti/mario-rossi",
    photoUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=480&h=480&fit=crop&q=80",
    profileWebsiteUrl: "https://example.com/atleti/mario-rossi",
    scoutLine: "Guardia alta che tira e difende: scoring affidabile e taglio di squadra per roster U19 di vertice.",
    playerNotes: [
      "Buona mano da tre e tiratore affidabile in catch-and-shoot",
      "Letture offensive in pick-and-roll: sa trovare il roll o il weak-side",
      "Aggressivo in difesa sui portatori, mani attive nei passing lane",
    ],
    profileUpdatedAt: "2026-05-10",
    advanced: { ppg: 14.8, rpg: 4.2, apg: 3.1, fgPct: 47, tpPct: 38, ftPct: 81 },
  },
  {
    id: "2",
    slug: "ilario-simonetti",
    firstName: "Ilario",
    lastName: "Simonetti",
    sport: "Basket",
    role: "Ala piccola",
    birthYear: 2004,
    heightCm: 200,
    nationality: "Italia",
    club: "Benacquista Assicurazioni Latina",
    category: "Serie B",
    status: "Disponibile",
    agency: "Bright Side Agency",
    statsMain: ["16.2 PPG", "6.1 RPG", "2.4 APG", "FG 44%", "3P 36%", "FT 78%"],
    badges: ["Fisico elite", "Highlights recenti"],
    cardBadgeLabels: ["Disponibile", "Video disponibile", "Profilo aggiornato", "Agenzia verificata"],
    profilePath: "/atleti/ilario-simonetti",
    photoUrl: "/foto.jpeg",
    profileWebsiteUrl: "https://ilariosimonetti.katahero.com",
    scoutLine:
      "Ala fisica e produttiva, con volume offensivo, presenza a rimbalzo e capacità di cambiare difensivamente su più ruoli. Profilo adatto a squadre ambiziose di Serie B.",
    playerNotes: [
      "Fisico importante: impatto nel pitturato e al contatto",
      "Tiro dalla media e attacco al ferro con buon timing nei tagli",
      "Versatilità difensiva: può cambiare su esterni e ali piccole",
    ],
    profileUpdatedAt: "2026-05-14",
    advanced: { ppg: 16.2, rpg: 6.1, apg: 2.4, fgPct: 44, tpPct: 36, ftPct: 78 },
  },
  {
    id: "3",
    slug: "andrea-verdi",
    firstName: "Andrea",
    lastName: "Verdi",
    sport: "Basket",
    role: "Centro",
    birthYear: 2004,
    heightCm: 208,
    nationality: "Italia",
    club: "Virtus Bologna Next",
    category: "Next Gen",
    status: "Sotto contratto",
    agency: "Elite Basket Agency",
    statsMain: ["11.4 PPG", "9.8 RPG", "1.2 APG", "FG 58%", "3P 22%", "FT 69%"],
    badges: ["Rimbalzi", "Difensore"],
    cardBadgeLabels: ["Sotto contratto", "Video disponibile", "Profilo aggiornato", "Agenzia verificata"],
    profilePath: "/atleti/andrea-verdi",
    scoutLine: "Centro prototipo “5”: protegge il ferro, domina i rimbalzi e gestisce i doppi — tassello difensivo per play-off.",
    playerNotes: [
      "Anchor difensivo: protezione del ferro e comunicazione in aiuto",
      "Ottimo rimbalzista offensivo, second chance per la squadra",
      "Lettura dei doppi: sa uscire la palla o chiudere sotto canestro",
    ],
    profileUpdatedAt: "2026-05-08",
    advanced: { ppg: 11.4, rpg: 9.8, apg: 1.2, fgPct: 58, tpPct: 22, ftPct: 69 },
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

/** Opzioni filtri — allineate al dataset demo */
export const FILTER_OPTIONS = {
  sport: ["Basket"] as const,
  role: ["Tutti", "Ala piccola", "Centro", "Guardia"] as const,
  category: ["Tutte", "Next Gen", "Serie B", "U18 Femminile", "U19 Eccellenza"] as const,
  birthYear: ["Tutti", "2004", "2006", "2007"] as const,
  nationality: ["Tutte", "Italia"] as const,
  status: ["Tutti", "Disponibile", "In osservazione", "Sotto contratto"] as const,
  agency: ["Tutte", "Bright Side Agency", "Elite Basket Agency", "Rising Stars Italia"] as const,
} as const;
