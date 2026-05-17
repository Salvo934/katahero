import Link from "next/link";
import type { TalentAthlete } from "@/lib/talent-board-data";
import { SITE } from "@/lib/site";

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

function contactAvailabilityPhrase(status: string): string {
  const s = status.toLowerCase();
  if (s.includes("disponib")) return "Disponibile al contatto";
  if (s.includes("contratto")) return "Sotto contratto — contatto tramite agenzia";
  if (s.includes("osservaz")) return "In osservazione — contatto su richiesta";
  return `${status} — verifica disponibilità`;
}

function mediaSeasonLine(athlete: TalentAthlete): string {
  const { statsMain, advanced: s } = athlete;
  if (statsMain.length >= 3) return statsMain.slice(0, 3).join(" · ");
  const fmt = (n: number) =>
    n.toLocaleString("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return `${fmt(s.ppg)} PPG · ${fmt(s.rpg)} RPG · ${fmt(s.apg)} APG`;
}

function cardBadgeDisplayLabels(athlete: TalentAthlete): string[] {
  if (athlete.cardBadgeLabels?.length) return athlete.cardBadgeLabels;
  const st = athlete.status.toLowerCase();
  const head =
    st.includes("disponib") ? "Disponibile" : st.includes("contratto") ? "Sotto contratto" : st.includes("osservaz") ? "In osservazione" : athlete.status;
  const hasVideoHint = athlete.badges.some((b) => /video|highlight/i.test(b));
  return [head, hasVideoHint ? "Video disponibile" : "Video su richiesta", "Profilo aggiornato", "Agenzia verificata"];
}

function referralMailto(athlete: TalentAthlete, fullName: string): string {
  const subject = `Talent Board — ${fullName}`;
  const body = `Ciao,\n\nvorrei informazioni sul profilo di ${fullName} (${athlete.role}, ${athlete.club}, ${athlete.category}).\n\n`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function formatProfileUpdatedLabel(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return iso;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
}

const thumbWrapClass =
  "relative h-[5.5rem] w-[5.5rem] shrink-0 overflow-hidden rounded-2xl bg-zinc-800 ring-1 ring-white/8 sm:h-24 sm:w-24";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">{children}</p>
  );
}

const btnPrimary =
  "inline-flex w-full items-center justify-center rounded-full bg-accent py-3 text-sm font-bold text-black shadow-[0_8px_24px_-10px_rgba(0,229,160,0.4)] transition hover:brightness-105 active:scale-[0.99]";
const btnSecondary =
  "inline-flex w-full items-center justify-center rounded-full border border-white/18 bg-white/5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-white/28 hover:bg-white/10";
const btnDisabled =
  "inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/[0.03] py-3 text-sm font-semibold text-zinc-600 opacity-80";

export function TalentBoardAthleteCard({ athlete }: { athlete: TalentAthlete }) {
  const cta = profileCtaTarget(athlete);
  const photo = athlete.photoUrl?.trim();
  const fullName = `${athlete.firstName} ${athlete.lastName}`;
  const notes = (athlete.playerNotes ?? []).filter(Boolean);
  const scoutLine = athlete.scoutLine?.trim();
  const badgesRow = cardBadgeDisplayLabels(athlete);
  const metaCore = `${athlete.role} · ${athlete.heightCm} cm · ${athlete.birthYear} · ${athlete.nationality}`;
  const clubRow = `${athlete.club} · ${athlete.category}`;
  const updatedLabel = formatProfileUpdatedLabel(athlete.profileUpdatedAt);

  /** Altezze fisse delle sezioni = stessa silhouette; `flex-1` + scroll sul contenuto sotto il titolo. */
  const scrollRegion = "min-h-0 flex-1 overflow-y-auto overscroll-y-contain [scrollbar-width:thin]";

  return (
    <article className="group/card flex h-full min-h-0 w-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-zinc-900/40 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.75)] backdrop-blur-md transition duration-300 hover:border-white/12 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.82)]">
      <header className="flex h-44 shrink-0 gap-4 border-b border-white/8 p-5 sm:h-52 sm:gap-5 sm:p-6">
        <div className={thumbWrapClass}>
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element -- URL atleta arbitrario (CDN / siti terzi)
            <img
              src={photo}
              alt={fullName}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover/card:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-600/85 via-zinc-800 to-zinc-950 font-display text-xl font-bold text-white sm:text-2xl">
              {initials(athlete)}
            </div>
          )}
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center overflow-y-auto overscroll-y-contain [scrollbar-width:thin]">
          <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">{fullName}</h2>
          <p className="mt-2 text-[13px] leading-snug text-zinc-400">{metaCore}</p>
          <p className="mt-2 text-[13px] font-semibold leading-snug text-accent">{contactAvailabilityPhrase(athlete.status)}</p>
          <p className="mt-2 text-[13px] leading-snug text-zinc-200">{clubRow}</p>
          <p className="mt-2 text-[12px] leading-snug text-zinc-500">
            Rappresentato da <span className="font-medium text-zinc-400">{athlete.agency}</span>
          </p>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-5">
        <div className="flex min-h-0 flex-1 flex-col gap-5 sm:gap-6">
          <section className="flex h-36 shrink-0 flex-col gap-2 sm:h-40">
            <SectionLabel>Profilo</SectionLabel>
            <div className={scrollRegion}>
              <p className={`text-[13px] leading-relaxed ${scoutLine ? "text-zinc-300" : "text-zinc-600"}`}>
                {scoutLine ?? "—"}
              </p>
            </div>
          </section>

          <section className="flex h-18 shrink-0 flex-col justify-center gap-2">
            <SectionLabel>Media stagione</SectionLabel>
            <p className="text-sm font-medium tabular-nums tracking-tight text-white">{mediaSeasonLine(athlete)}</p>
          </section>

          <section className="flex h-52 shrink-0 flex-col gap-3 sm:h-56">
            <SectionLabel>Perché può fare al caso vostro</SectionLabel>
            <ul className={`flex flex-col gap-2.5 ${scrollRegion}`}>
              {notes.length > 0 ? (
                notes.map((line) => (
                  <li key={line} className="flex gap-2.5 text-[13px] leading-relaxed text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))
              ) : (
                <li className="text-[13px] text-zinc-600">—</li>
              )}
            </ul>
          </section>

          <section className="flex h-22 shrink-0 flex-col gap-2 sm:h-24">
            <SectionLabel>Badge</SectionLabel>
            <div className={scrollRegion}>
              <p className="text-[13px] leading-relaxed text-zinc-300">{badgesRow.join(" · ")}</p>
              <p className="mt-2 text-[11px] leading-snug text-zinc-500">
                Scheda aggiornata il <time dateTime={athlete.profileUpdatedAt}>{updatedLabel}</time>
              </p>
            </div>
          </section>
        </div>

        <section className="mt-auto shrink-0 border-t border-white/8 pt-5" aria-label="Azioni">
          <span className="sr-only">CTA</span>
          <div className="flex flex-col gap-2.5">
            {cta.external ? (
              <a href={cta.href} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Apri profilo
                <span className="sr-only"> (si apre in una nuova scheda)</span>
                <span className="ml-1.5" aria-hidden>
                  ↗
                </span>
              </a>
            ) : (
              <Link href={cta.href} className={btnPrimary}>
                Apri profilo
                <span className="ml-1.5" aria-hidden>
                  →
                </span>
              </Link>
            )}
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <a href={referralMailto(athlete, fullName)} className={btnSecondary}>
                Contatta referente
              </a>
              <button type="button" disabled className={btnDisabled} title="Funzione in arrivo sulla Talent Board">
                Salva atleta
              </button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
