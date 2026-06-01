/**
 * Dati demo Talent Board — modificare qui i numeri e gli atleti.
 * Struttura pronta per collegare filtri e API reali.
 */

export type TalentAthleteAdvancedStats = {
  ppg: number;
  rpg?: number;
  apg?: number;
  fgPct?: number;
  /** % da due punti — opzionale, mostrato in card se presente. */
  twoPct?: number;
  tpPct?: number;
  ftPct?: number;
};

export type TalentAthlete = {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  /** Numero di maglia in card (es. 11 → «#11»). */
  jerseyNumber?: number | string;
  sport: string;
  role: string;
  birthYear: number;
  heightCm: number;
  /** Mano dominante (es. Destra, Sinistra, Ambidestro). */
  dominantHand: string;
  /** Peso in kg. */
  weightKg: number;
  nationality: string;
  club: string;
  /** Logo società in card Talent Board (percorso in `public/`, es. `/latinalogo.png`). */
  clubLogoUrl?: string;
  category: string;
  /** Liga / circuito abbreviato in card (es. LNP). */
  leagueLabel?: string;
  /** Testo dopo il ruolo in card (es. «/ SF»). */
  roleCardSuffix?: string;
  /** Frase punto di forza esatta sulla card pubblica — altrimenti si deriva da `playerNotes` / scout. */
  publicCardStrengthLine?: string;
  /** Sottostringa della frase evidenziazata col colore accent (per es. vicino al ferro). */
  strengthAccentPhrase?: string;
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
export const TALENT_BOARD_SEASON_LABEL = "25/26";

/** Numeri dashboard — editabili */
export const TALENT_BOARD_DASHBOARD_STATS = [
  { key: "athletes", value: "4", label: "Atleti in board" },
  { key: "updated", value: "4", label: "Schede aggiornate" },
  { key: "agencies", value: "3", label: "Agenzie sul board" },
  { key: "available", value: "4", label: "Card da condividere" },
] as const;

export const DEMO_ATHLETES_BASKETBALL: TalentAthlete[] = [
  {
    id: "1",
    slug: "ilario-simonetti",
    firstName: "Ilario",
    lastName: "Simonetti",
    jerseyNumber: 7,
    sport: "Basket",
    role: "Ala piccola",
    leagueLabel: "LNP",
    roleCardSuffix: "/ SF",
    birthYear: 2004,
    heightCm: 200,
    dominantHand: "Destra",
    weightKg: 98,
    nationality: "Italia",
    club: "Benacquista Assicurazioni Latina",
    clubLogoUrl: "/latinalogo.png",
    category: "Serie B",
    status: "Disponibile",
    agency: "Bright Side Agency",
    statsMain: ["5.7 PPG", "1.8 RPG", "1 APG", "FG 49%", "3P 31%", "FT 52%"],
    badges: ["Fisico elite", "Highlights recenti"],
    cardBadgeLabels: ["Disponibile", "Video disponibile", "Profilo aggiornato", "Agenzia verificata"],
    profilePath: "/atleti/ilario-simonetti",
    photoUrl: "/foto.jpeg",
    profileWebsiteUrl: "https://ilariosimonetti7.katahero.com/ilario-simonetti",
    publicCardStrengthLine: "Ala fisica, versatile, efficiente vicino al ferro.",
    strengthAccentPhrase: "vicino al ferro",
    scoutLine:
      "Ala fisica e produttiva, con volume offensivo, presenza a rimbalzo e capacità di cambiare difensivamente su più ruoli. Profilo adatto a squadre ambiziose di Serie B.",
    playerNotes: [
      "Fisico importante: impatto nel pitturato e al contatto",
      "Tiro dalla media e attacco al ferro con buon timing nei tagli",
      "Versatilità difensiva: può cambiare su esterni e ali piccole",
    ],
    profileUpdatedAt: "2026-05-14",
    advanced: { ppg: 5.7, rpg: 1.8, apg: 1, fgPct: 49.3, twoPct: 63, tpPct: 31, ftPct: 52 },
  },
  {
    id: "2",
    slug: "francesco-spinelli",
    firstName: "Francesco",
    lastName: "Spinelli",
    jerseyNumber: 9,
    sport: "Basket",
    role: "Guardia",
    leagueLabel: "LNP",
    roleCardSuffix: "/ PG",
    birthYear: 2005,
    heightCm: 197,
    dominantHand: "Sinistra",
    weightKg: 87,
    nationality: "Italia",
    club: "Aurora Desio",
    clubLogoUrl: "/aurora-desio-logo.png",
    category: "Serie B",
    status: "Disponibile",
    agency: "PLS Agency",
    statsMain: ["6 PPG", "1,9 RPG", "1,6 APG", "2P 49%", "3P 27%", "FT 74%"],
    badges: ["Serie B Girone A", "Under 21"],
    cardBadgeLabels: ["Disponibile", "35 gare", "Serie B 25/26", "Profilo aggiornato"],
    profilePath: "/atleti/francesco-spinelli",
    profileWebsiteUrl: "https://francescospinelli9.katahero.com",
    photoUrl: "/francesco-spinelli.png",
    publicCardStrengthLine: "Play/guardia che detta ritmi e crea dal pick and roll.",
    strengthAccentPhrase: "pick and roll",
    scoutLine:
      "Play/guardia classe 2005 (29/09/2005): 35 gare in Serie B Girone A 25/26 con Aurora Desio, 16'5 di media. Medie ufficiali LNP: 6 PPG, 1,9 RPG, 1,6 APG — 2P 49%, 3P 27%, FT 74%.",
    playerNotes: [
      "Percorso in B con Virtus Pozzuoli, Virtus Arechi Salerno e Malvin PSA Sant'Antimo",
      "Gestione del pick and roll e scelta tiro/passaggio in transizione",
      "Tiro da tre in crescita con buona percentuale ai liberi (74%)",
    ],
    profileUpdatedAt: "2026-05-27",
    advanced: { ppg: 6, rpg: 1.9, apg: 1.6, fgPct: 38, twoPct: 49, tpPct: 27, ftPct: 74 },
  },
  {
    id: "3",
    slug: "thomas-aguzzoli",
    firstName: "Thomas",
    lastName: "Aguzzoli",
    jerseyNumber: 5,
    sport: "Basket",
    role: "Ala piccola",
    leagueLabel: "FIP",
    roleCardSuffix: "/ SF",
    birthYear: 2000,
    heightCm: 195,
    dominantHand: "Destra",
    weightKg: 90,
    nationality: "Italia",
    club: "Bk4.0 Barcellona",
    clubLogoUrl: "/barcellona-basket-logo.png",
    category: "B Interregionale",
    status: "Disponibile",
    agency: "Non indicata",
    statsMain: ["14.5 PPG", "5 RPG", "2.8 APG"],
    badges: ["B Interregionale 25/26", "Top scorer"],
    cardBadgeLabels: ["Disponibile", "34 gare", "B IR 25/26", "Profilo aggiornato"],
    profilePath: "/atleti/thomas-aguzzoli",
    profileWebsiteUrl: "https://thomasaguzzoli5.katahero.com",
    photoUrl: "/thomas-aguzzoli.png",
    publicCardStrengthLine: "Ala atletica, difesa perimetrale e tiro dalla distanza.",
    strengthAccentPhrase: "tiro dalla distanza",
    scoutLine:
      "Ala piccola classe 2000 (195 cm, 90 kg): 14,5 PPG in 34 gare di B Interregionale 25/26 con Bk4.0 Barcellona — fonte PlayBasket. Profilo atletico, difesa perimetrale e tiro esterno tra i punti di forza.",
    playerNotes: [
      "14,5 PPG e season high 28 punti in B Interregionale 25/26",
      "195 cm: atletismo, lunghe leve e versatilità difensiva",
      "Esperienze in Serie B, C Gold, Viola Reggio Calabria e Monopoli",
    ],
    profileUpdatedAt: "2026-05-27",
    advanced: { ppg: 14.5, rpg: 5, apg: 2.8 },
  },
  {
    id: "4",
    slug: "antonio-sorbara",
    firstName: "Antonio",
    lastName: "Sorbara",
    jerseyNumber: 39,
    sport: "Basket",
    role: "Ala piccola",
    leagueLabel: "FIP",
    roleCardSuffix: "/ SF",
    birthYear: 2005,
    heightCm: 186,
    dominantHand: "Destra",
    weightKg: 85,
    nationality: "Italia",
    club: "Scuola Basket Viola",
    clubLogoUrl: "/scuola-basket-viola-logo.png",
    category: "Divisione Regionale 1",
    status: "Disponibile",
    agency: "Non indicata",
    statsMain: ["16.4 PPG", "3.5 RPG", "2.5 APG"],
    badges: ["Divisione Regionale 1 25/26", "Top scorer"],
    cardBadgeLabels: ["Disponibile", "23 gare", "DR1 25/26", "Profilo aggiornato"],
    profilePath: "/atleti/antonio-sorbara",
    photoUrl: "/antonio-sorbara.png",
    profileWebsiteUrl: "https://antoniosorbara.katahero.com",
    publicCardStrengthLine: "Scoring e leadership: top scorer in DR1 Calabria 25/26.",
    strengthAccentPhrase: "top scorer",
    scoutLine:
      "Ala piccola classe 2005 (186 cm): 16,4 PPG in 23 gare di Divisione Regionale 1 Maschile Calabria 25/26 con Scuola Basket Viola — fonte PlayBasket. Season high 38 punti; 378 punti totali in campionato.",
    playerNotes: [
      "16,4 PPG e season high 38 in DR1 Calabria 25/26",
      "Percorso da Viola RC (Serie B), Botteghelle (Serie D), Stingers RC e Peppino Cocuzza (Serie C)",
      "Esperienze fuori regione: Cefalù in DR1 e maturazione in contesti ad alto ritmo",
    ],
    profileUpdatedAt: "2026-05-27",
    advanced: { ppg: 16.4, rpg: 3.5, apg: 2.5 },
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
  role: ["Tutti", "Ala piccola", "Guardia"] as const,
  category: ["Tutte", "Serie B", "B Interregionale", "Divisione Regionale 1"] as const,
  birthYear: ["Tutti", "2005", "2004", "2000"] as const,
  nationality: ["Tutte", "Italia"] as const,
  status: ["Tutti", "Disponibile"] as const,
  agency: ["Tutte", "Bright Side Agency", "PLS Agency", "Non indicata"] as const,
} as const;
