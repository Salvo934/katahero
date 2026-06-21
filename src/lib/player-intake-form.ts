import { whatsappPrefilledUrl } from "@/lib/site";

export type PlayerPackageTier = "starter" | "social" | "player-pro" | "non-so";

export type PlayerIntakeFormData = {
  firstName: string;
  lastName: string;
  birthYear: string;
  phone: string;
  email: string;
  instagram: string;
  referent: string;
  jerseyNumber: string;
  role: string;
  heightCm: string;
  weightKg: string;
  dominantHand: string;
  nationality: string;
  club: string;
  category: string;
  league: string;
  season: string;
  marketStatus: string;
  agency: string;
  ppg: string;
  rpg: string;
  apg: string;
  mpg: string;
  gamesPlayed: string;
  fgPct: string;
  tpPct: string;
  ftPct: string;
  bioPitch: string;
  strengths: string;
  growthAreas: string;
  idealFit: string;
  marketGoal: string;
  opportunityTypes: string[];
  geographicZones: string;
  highlightsUrl: string;
  videoLinks: string;
  photoLinks: string;
  careerPath: string;
  palmares: string;
  packageTier: PlayerPackageTier;
  notes: string;
  isMinor: boolean;
  privacyConsent: boolean;
};

export const INITIAL_PLAYER_INTAKE: PlayerIntakeFormData = {
  firstName: "",
  lastName: "",
  birthYear: "",
  phone: "",
  email: "",
  instagram: "",
  referent: "",
  jerseyNumber: "",
  role: "",
  heightCm: "",
  weightKg: "",
  dominantHand: "",
  nationality: "Italia",
  club: "",
  category: "",
  league: "LNP",
  season: "25/26",
  marketStatus: "",
  agency: "",
  ppg: "",
  rpg: "",
  apg: "",
  mpg: "",
  gamesPlayed: "",
  fgPct: "",
  tpPct: "",
  ftPct: "",
  bioPitch: "",
  strengths: "",
  growthAreas: "",
  idealFit: "",
  marketGoal: "",
  opportunityTypes: [],
  geographicZones: "",
  highlightsUrl: "",
  videoLinks: "",
  photoLinks: "",
  careerPath: "",
  palmares: "",
  packageTier: "non-so",
  notes: "",
  isMinor: false,
  privacyConsent: false,
};

export const OPPORTUNITY_OPTIONS = [
  "Tryout / workout",
  "Prestito",
  "Trasferimento",
  "Showcase / eventi",
  "Estero",
] as const;

export const PACKAGE_LABELS: Record<PlayerPackageTier, string> = {
  starter: "Starter — pagina presentazione + Social Kit (non sito completo)",
  social: "Player Social — sito quasi completo + Social Media Kit",
  "player-pro": "Player Pro — sito atleta completo + Social Media Kit",
  "non-so": "Non so ancora — vorrei consiglio",
};

const WHATSAPP_MAX = 3600;

function line(label: string, value: string | undefined): string | null {
  const v = value?.trim();
  if (!v) return null;
  return `${label}: ${v}`;
}

function block(title: string, lines: (string | null)[]): string {
  const body = lines.filter(Boolean).join("\n");
  if (!body) return "";
  return `\n*${title}*\n${body}`;
}

function truncate(text: string, max = 480): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

export function buildPlayerIntakeWhatsAppMessage(data: PlayerIntakeFormData): string {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ").trim() || "Atleta";

  const parts = [
    `Ciao! Sono ${fullName} e vorrei richiedere la mia Player Card KataHero.`,
    block("Contatti", [
      line("Telefono", data.phone),
      line("Email", data.email),
      line("Instagram", data.instagram),
      line("Referente", data.referent),
      data.isMinor ? "Minorenne: sì (modulo genitore/tutore da inviare)" : null,
    ]),
    block("Profilo", [
      line("Nome", fullName),
      line("Anno nascita", data.birthYear),
      line("Maglia", data.jerseyNumber ? `#${data.jerseyNumber.replace(/^#/, "")}` : ""),
      line("Ruolo", data.role),
      line("Altezza", data.heightCm ? `${data.heightCm} cm` : ""),
      line("Peso", data.weightKg ? `${data.weightKg} kg` : ""),
      line("Mano", data.dominantHand),
      line("Nazionalità", data.nationality),
      line("Club", data.club),
      line("Categoria", data.category),
      line("Campionato", data.league),
      line("Stagione", data.season),
      line("Status mercato", data.marketStatus),
      line("Agenzia", data.agency),
    ]),
    block("Statistiche", [
      line("PPG", data.ppg),
      line("RPG", data.rpg),
      line("APG", data.apg),
      line("MPG", data.mpg),
      line("Partite", data.gamesPlayed),
      line("FG%", data.fgPct),
      line("3PT%", data.tpPct),
      line("FT%", data.ftPct),
    ]),
    block("Pitch", [
      data.bioPitch ? `Bio:\n${truncate(data.bioPitch)}` : null,
      data.strengths ? `Punti di forza:\n${truncate(data.strengths)}` : null,
      data.growthAreas ? `Aree di crescita:\n${truncate(data.growthAreas)}` : null,
      data.idealFit ? `Fit ideale:\n${truncate(data.idealFit)}` : null,
    ]),
    block("Mercato", [
      data.marketGoal ? `Obiettivo:\n${truncate(data.marketGoal)}` : null,
      data.opportunityTypes.length
        ? `Opportunità: ${data.opportunityTypes.join(", ")}`
        : null,
      line("Zone", data.geographicZones),
    ]),
    block("Materiali", [
      line("Highlights", data.highlightsUrl),
      data.videoLinks ? `Altri video:\n${truncate(data.videoLinks, 300)}` : null,
      data.photoLinks ? `Foto / link:\n${truncate(data.photoLinks, 300)}` : null,
    ]),
    block("Percorso", [
      data.careerPath ? truncate(data.careerPath, 600) : null,
      data.palmares ? `Palmares:\n${truncate(data.palmares, 400)}` : null,
    ]),
    block("Pacchetto", [PACKAGE_LABELS[data.packageTier]]),
    data.notes.trim() ? block("Note", [truncate(data.notes, 400)]) : "",
    "\n*Materiali da inviare in chat:* 1 foto avatar (card + sito) · 3–4 foto gallery · fino a 3 clip se disponibili.",
  ].filter(Boolean);

  let message = parts.join("\n");
  if (message.length > WHATSAPP_MAX) {
    message = `${message.slice(0, WHATSAPP_MAX - 40)}\n\n…(messaggio abbreviato)`;
  }
  return message;
}

export function playerIntakeWhatsAppUrl(data: PlayerIntakeFormData): string {
  return whatsappPrefilledUrl(buildPlayerIntakeWhatsAppMessage(data));
}

export function validatePlayerIntake(data: PlayerIntakeFormData): string | null {
  if (!data.firstName.trim()) return "Inserisci il nome.";
  if (!data.lastName.trim()) return "Inserisci il cognome.";
  if (!data.phone.trim()) return "Inserisci un numero di telefono.";
  if (!data.role.trim()) return "Indica il ruolo (es. Playmaker, Ala piccola).";
  if (!data.club.trim()) return "Indica il club attuale.";
  if (!data.category.trim()) return "Indica la categoria (es. Serie B, A2).";
  if (!data.bioPitch.trim() && !data.strengths.trim()) {
    return "Scrivi almeno una breve bio o i punti di forza.";
  }
  if (!data.privacyConsent) {
    return "Devi accettare l'informativa privacy per inviare la richiesta.";
  }
  return null;
}
