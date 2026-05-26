/**
 * Dati demo Talent Board — modificare qui i numeri e gli atleti.
 * Struttura pronta per collegare filtri e API reali.
 */

export type TalentAthleteAdvancedStats = {
  ppg: number;
  rpg: number;
  apg: number;
  fgPct: number;
  /** % da due punti — opzionale, mostrato in card se presente. */
  twoPct?: number;
  tpPct: number;
  ftPct: number;
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
  { key: "athletes", value: "5", label: "Atleti in board" },
  { key: "updated", value: "5", label: "Schede aggiornate" },
  { key: "agencies", value: "3", label: "Agenzie sul board" },
  { key: "available", value: "5", label: "Card da condividere" },
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
    slug: "matteo-ricci-demo",
    firstName: "Matteo",
    lastName: "Ricci",
    jerseyNumber: 24,
    sport: "Basket",
    role: "Playmaker",
    leagueLabel: "LNP",
    roleCardSuffix: "/ PG",
    birthYear: 2003,
    heightCm: 188,
    dominantHand: "Destra",
    weightKg: 82,
    nationality: "Italia",
    club: "Virtus Olympia",
    category: "Serie B",
    status: "Disponibile",
    agency: "Side Sports Management",
    statsMain: ["12 PPG", "3,2 RPG", "5,8 APG"],
    badges: [],
    profilePath: "/atleti/matteo-ricci-demo",
    photoUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=640&h=640&fit=crop&q=80&auto=format",
    scoutLine:
      "Playmaker rapido che tiene ritmi alti e legge tagli sulla penetrazione. Buona scelta dall’angolo in pick and pop.",
    playerNotes: [
      "Gestione dei ritmi affidabile in transizione.",
      "Difesa perimetrale attiva con buone chiusure sui passaggi ravvicinati.",
    ],
    profileUpdatedAt: "2026-05-02",
    advanced: { ppg: 12, rpg: 3.2, apg: 5.8, fgPct: 44, twoPct: 52, tpPct: 37, ftPct: 82 },
  },
  {
    id: "3",
    slug: "andrea-marino-demo",
    firstName: "Andrea",
    lastName: "Marino",
    jerseyNumber: 15,
    sport: "Basket",
    role: "Centro",
    leagueLabel: "LNP",
    roleCardSuffix: "/ C",
    birthYear: 2002,
    heightCm: 207,
    dominantHand: "Sinistra",
    weightKg: 108,
    nationality: "Italia",
    club: "CUS Mediterraneo",
    category: "Serie B",
    status: "In osservazione",
    agency: "Bright Side Agency",
    statsMain: ["9,4 PPG", "7,8 RPG", "1,4 APG"],
    badges: [],
    profilePath: "/atleti/andrea-marino-demo",
    photoUrl:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=640&h=640&fit=crop&q=80&auto=format",
    scoutLine:
      "Centro fisico orientato allo schermo, difesa degli aiuti corta e rollout verso ferro nei set tradizionali.",
    playerNotes: [
      "Contenzione degli screen solida per minuti da rotazione breve.",
      "Rimbalzo difensivo e secondi possessi affidabili per il ruolo.",
    ],
    profileUpdatedAt: "2026-04-28",
    advanced: { ppg: 9.4, rpg: 7.8, apg: 1.4, fgPct: 58, twoPct: 61, tpPct: 28, ftPct: 65 },
  },
  {
    id: "4",
    slug: "lorenzo-bianchi-demo",
    firstName: "Lorenzo",
    lastName: "Bianchi",
    jerseyNumber: 9,
    sport: "Basket",
    role: "Guardia",
    leagueLabel: "LNP",
    roleCardSuffix: "/ G",
    birthYear: 2005,
    heightCm: 192,
    dominantHand: "Destra",
    weightKg: 86,
    nationality: "Italia",
    club: "Urania Milano",
    category: "Serie B",
    status: "Disponibile",
    agency: "Bright Side Agency",
    statsMain: ["8,1 PPG", "2,4 RPG", "3,2 APG"],
    badges: [],
    profilePath: "/atleti/lorenzo-bianchi-demo",
    photoUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=640&h=640&fit=crop&q=80&auto=format",
    scoutLine:
      "Guardia componibile tra creazione esterna e penetrazioni a metà campo: ottimo piede primo passo e tendenza a caricare sul blocco alto.",
    playerNotes: ["Lettura blocco-drag sul lato forte.", "Gestione cronometro affidabile nell’ultimo quarto."],
    profileUpdatedAt: "2026-05-18",
    advanced: { ppg: 8.1, rpg: 2.4, apg: 3.2, fgPct: 46, twoPct: 54, tpPct: 35, ftPct: 78 },
  },
  {
    id: "5",
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
    profileUpdatedAt: "2026-04-26",
    advanced: { ppg: 6, rpg: 1.9, apg: 1.6, fgPct: 38, twoPct: 49, tpPct: 27, ftPct: 74 },
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
  role: ["Tutti", "Ala piccola", "Playmaker", "Centro", "Guardia"] as const,
  category: ["Tutte", "Serie B"] as const,
  birthYear: ["Tutti", "2005", "2004", "2003", "2002"] as const,
  nationality: ["Tutte", "Italia"] as const,
  status: ["Tutti", "Disponibile", "In osservazione"] as const,
  agency: ["Tutte", "Bright Side Agency", "Side Sports Management", "PLS Agency"] as const,
} as const;
