"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  INITIAL_PLAYER_INTAKE,
  OPPORTUNITY_OPTIONS,
  PACKAGE_LABELS,
  playerIntakeWhatsAppUrl,
  validatePlayerIntake,
  type PlayerIntakeFormData,
  type PlayerPackageTier,
} from "@/lib/player-intake-form";
import { SITE } from "@/lib/site";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/12 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-accent/45 focus:ring-2 focus:ring-accent/15";
const labelClass = "block text-xs font-semibold uppercase tracking-wider text-zinc-400";
const sectionClass =
  "rounded-2xl border border-white/10 bg-white/2 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] sm:rounded-3xl sm:p-6";

function Field({
  id,
  label,
  required,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {hint ? <p className="mt-1 text-[11px] leading-snug text-zinc-500">{hint}</p> : null}
      {children}
    </div>
  );
}

function Section({
  step,
  title,
  description,
  children,
}: {
  step: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className={sectionClass}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">{step}</p>
      <h2 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5">{children}</div>
    </section>
  );
}

export function PlayerIntakeForm() {
  const [form, setForm] = useState<PlayerIntakeFormData>(INITIAL_PLAYER_INTAKE);
  const [error, setError] = useState<string | null>(null);

  const set =
    <K extends keyof PlayerIntakeFormData>(key: K, value: PlayerIntakeFormData[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      setError(null);
    };

  const toggleOpportunity = (option: string) => {
    setForm((prev) => {
      const has = prev.opportunityTypes.includes(option);
      return {
        ...prev,
        opportunityTypes: has
          ? prev.opportunityTypes.filter((o) => o !== option)
          : [...prev.opportunityTypes, option],
      };
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationError = validatePlayerIntake(form);
    if (validationError) {
      setError(validationError);
      return;
    }
    window.open(playerIntakeWhatsAppUrl(form), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8" noValidate>
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-4 sm:p-5">
        <p className="text-sm leading-relaxed text-zinc-300">
          Compila i campi come nella{" "}
          <a
            href="https://alfonsozampogna16.katahero.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-2 hover:text-white"
          >
            scheda esempio Alfonso Zampogna
          </a>
          . All&apos;invio si apre WhatsApp con il riepilogo verso{" "}
          <span className="font-medium text-white">{SITE.phoneDisplay}</span>.
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          Se hai meno di 18 anni, spunta l&apos;opzione in fondo e invia anche il{" "}
          <Link href="/minori" className="text-accent underline underline-offset-2 hover:text-white">
            modulo genitore/tutore
          </Link>
          .
        </p>
      </div>

      <Section
        step="01 · Contatti"
        title="Anagrafica e contatti"
        description="Come in «Canali diretti» sulla player card: chi sei e come ricontattarti."
      >
        <Field id="firstName" label="Nome" required>
          <input
            id="firstName"
            className={inputClass}
            value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            autoComplete="given-name"
            required
          />
        </Field>
        <Field id="lastName" label="Cognome" required>
          <input
            id="lastName"
            className={inputClass}
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            autoComplete="family-name"
            required
          />
        </Field>
        <Field id="birthYear" label="Anno di nascita">
          <input
            id="birthYear"
            className={inputClass}
            inputMode="numeric"
            placeholder="2000"
            value={form.birthYear}
            onChange={(e) => set("birthYear", e.target.value)}
          />
        </Field>
        <Field id="phone" label="Telefono / WhatsApp" required>
          <input
            id="phone"
            className={inputClass}
            type="tel"
            placeholder="+39 …"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            autoComplete="tel"
            required
          />
        </Field>
        <Field id="email" label="Email">
          <input
            id="email"
            className={inputClass}
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
          />
        </Field>
        <Field id="instagram" label="Instagram">
          <input
            id="instagram"
            className={inputClass}
            placeholder="@username"
            value={form.instagram}
            onChange={(e) => set("instagram", e.target.value)}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field id="referent" label="Referente" hint="Agente, genitore o procuratore se diverso da te.">
            <input
              id="referent"
              className={inputClass}
              value={form.referent}
              onChange={(e) => set("referent", e.target.value)}
            />
          </Field>
        </div>
      </Section>

      <Section
        step="02 · Profilo"
        title="Profilo sportivo"
        description="Hero card: maglia, ruolo, fisico, club e status di mercato."
      >
        <Field id="jerseyNumber" label="Numero maglia">
          <input
            id="jerseyNumber"
            className={inputClass}
            placeholder="16"
            value={form.jerseyNumber}
            onChange={(e) => set("jerseyNumber", e.target.value)}
          />
        </Field>
        <Field id="role" label="Ruolo" required>
          <input
            id="role"
            className={inputClass}
            placeholder="Playmaker / Play"
            value={form.role}
            onChange={(e) => set("role", e.target.value)}
            required
          />
        </Field>
        <Field id="heightCm" label="Altezza (cm)">
          <input
            id="heightCm"
            className={inputClass}
            inputMode="numeric"
            placeholder="186"
            value={form.heightCm}
            onChange={(e) => set("heightCm", e.target.value)}
          />
        </Field>
        <Field id="weightKg" label="Peso (kg)">
          <input
            id="weightKg"
            className={inputClass}
            inputMode="decimal"
            value={form.weightKg}
            onChange={(e) => set("weightKg", e.target.value)}
          />
        </Field>
        <Field id="dominantHand" label="Mano dominante">
          <select
            id="dominantHand"
            className={inputClass}
            value={form.dominantHand}
            onChange={(e) => set("dominantHand", e.target.value)}
          >
            <option value="">Seleziona</option>
            <option value="Destra">Destra</option>
            <option value="Sinistra">Sinistra</option>
            <option value="Ambidestro">Ambidestro</option>
          </select>
        </Field>
        <Field id="nationality" label="Nazionalità">
          <input
            id="nationality"
            className={inputClass}
            value={form.nationality}
            onChange={(e) => set("nationality", e.target.value)}
          />
        </Field>
        <Field id="club" label="Club attuale" required>
          <input
            id="club"
            className={inputClass}
            placeholder="Moncada Energy Agrigento"
            value={form.club}
            onChange={(e) => set("club", e.target.value)}
            required
          />
        </Field>
        <Field id="category" label="Categoria" required>
          <input
            id="category"
            className={inputClass}
            placeholder="Serie B · Girone A"
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            required
          />
        </Field>
        <Field id="league" label="Campionato / lega">
          <input
            id="league"
            className={inputClass}
            value={form.league}
            onChange={(e) => set("league", e.target.value)}
          />
        </Field>
        <Field id="season" label="Stagione">
          <input
            id="season"
            className={inputClass}
            placeholder="25/26"
            value={form.season}
            onChange={(e) => set("season", e.target.value)}
          />
        </Field>
        <Field id="marketStatus" label="Status mercato">
          <input
            id="marketStatus"
            className={inputClass}
            placeholder="In roster · Serie B 25/26"
            value={form.marketStatus}
            onChange={(e) => set("marketStatus", e.target.value)}
          />
        </Field>
        <Field id="agency" label="Agenzia">
          <input
            id="agency"
            className={inputClass}
            placeholder="Su richiesta / nome agenzia"
            value={form.agency}
            onChange={(e) => set("agency", e.target.value)}
          />
        </Field>
      </Section>

      <Section
        step="03 · Numeri"
        title="Statistiche stagione"
        description="Medie e percentuali come nella sezione «Statistiche» (fonte LNP o campionato attuale)."
      >
        <Field id="ppg" label="PPG">
          <input id="ppg" className={inputClass} inputMode="decimal" value={form.ppg} onChange={(e) => set("ppg", e.target.value)} />
        </Field>
        <Field id="rpg" label="RPG">
          <input id="rpg" className={inputClass} inputMode="decimal" value={form.rpg} onChange={(e) => set("rpg", e.target.value)} />
        </Field>
        <Field id="apg" label="APG">
          <input id="apg" className={inputClass} inputMode="decimal" value={form.apg} onChange={(e) => set("apg", e.target.value)} />
        </Field>
        <Field id="mpg" label="Minuti (MPG)">
          <input id="mpg" className={inputClass} inputMode="decimal" value={form.mpg} onChange={(e) => set("mpg", e.target.value)} />
        </Field>
        <Field id="gamesPlayed" label="Partite giocate">
          <input
            id="gamesPlayed"
            className={inputClass}
            inputMode="numeric"
            value={form.gamesPlayed}
            onChange={(e) => set("gamesPlayed", e.target.value)}
          />
        </Field>
        <Field id="fgPct" label="FG%">
          <input id="fgPct" className={inputClass} placeholder="32.9" value={form.fgPct} onChange={(e) => set("fgPct", e.target.value)} />
        </Field>
        <Field id="tpPct" label="3PT%">
          <input id="tpPct" className={inputClass} placeholder="31" value={form.tpPct} onChange={(e) => set("tpPct", e.target.value)} />
        </Field>
        <Field id="ftPct" label="FT%">
          <input id="ftPct" className={inputClass} placeholder="86" value={form.ftPct} onChange={(e) => set("ftPct", e.target.value)} />
        </Field>
      </Section>

      <Section
        step="04 · Pitch"
        title="Pitch scout"
        description="Bio in hero, punti di forza, fit ideale — come «Pitch scout per il club» e «Fit tecnico»."
      >
        <div className="sm:col-span-2">
          <Field id="bioPitch" label="Bio / presentazione" hint="2–4 frasi: chi sei, percorso, cosa porti oggi.">
            <textarea
              id="bioPitch"
              className={`${inputClass} min-h-28 resize-y`}
              value={form.bioPitch}
              onChange={(e) => set("bioPitch", e.target.value)}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="strengths" label="Punti di forza">
            <textarea
              id="strengths"
              className={`${inputClass} min-h-24 resize-y`}
              placeholder="Un punto per riga: regia, tiro, esperienza…"
              value={form.strengths}
              onChange={(e) => set("strengths", e.target.value)}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="growthAreas" label="Aree di crescita / da verificare">
            <textarea
              id="growthAreas"
              className={`${inputClass} min-h-20 resize-y`}
              value={form.growthAreas}
              onChange={(e) => set("growthAreas", e.target.value)}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="idealFit" label="Fit ideale / sistema che esalta il valore">
            <textarea
              id="idealFit"
              className={`${inputClass} min-h-20 resize-y`}
              value={form.idealFit}
              onChange={(e) => set("idealFit", e.target.value)}
            />
          </Field>
        </div>
      </Section>

      <Section
        step="05 · Mercato"
        title="Status mercato"
        description="Obiettivo, tipi di opportunità e zone — come la sezione «Status mercato»."
      >
        <div className="sm:col-span-2">
          <Field id="marketGoal" label="Obiettivo / disponibilità">
            <textarea
              id="marketGoal"
              className={`${inputClass} min-h-20 resize-y`}
              placeholder="Es. play titolare Serie B, open a prestito in A2…"
              value={form.marketGoal}
              onChange={(e) => set("marketGoal", e.target.value)}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <p className={labelClass}>Tipo opportunità</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {OPPORTUNITY_OPTIONS.map((option) => {
              const active = form.opportunityTypes.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleOpportunity(option)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    active
                      ? "border-accent/50 bg-accent/15 text-accent"
                      : "border-white/12 bg-black/30 text-zinc-400 hover:border-white/25 hover:text-zinc-200"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
        <div className="sm:col-span-2">
          <Field id="geographicZones" label="Zone valutate">
            <input
              id="geographicZones"
              className={inputClass}
              placeholder="Italia centro-nord, Serie B / A2…"
              value={form.geographicZones}
              onChange={(e) => set("geographicZones", e.target.value)}
            />
          </Field>
        </div>
      </Section>

      <Section
        step="06 · Media"
        title="Video e materiali"
        description="Link highlights YouTube, clip aggiuntive e riferimenti foto (Drive, WeTransfer, ecc.)."
      >
        <div className="sm:col-span-2">
          <Field id="highlightsUrl" label="Link highlights principale">
            <input
              id="highlightsUrl"
              className={inputClass}
              type="url"
              placeholder="https://youtube.com/…"
              value={form.highlightsUrl}
              onChange={(e) => set("highlightsUrl", e.target.value)}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="videoLinks" label="Altri video (uno per riga)">
            <textarea
              id="videoLinks"
              className={`${inputClass} min-h-20 resize-y`}
              value={form.videoLinks}
              onChange={(e) => set("videoLinks", e.target.value)}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="photoLinks" label="Foto / materiali grafici">
            <textarea
              id="photoLinks"
              className={`${inputClass} min-h-20 resize-y`}
              placeholder="Link cartella foto, logo club, ecc."
              value={form.photoLinks}
              onChange={(e) => set("photoLinks", e.target.value)}
            />
          </Field>
        </div>
      </Section>

      <Section
        step="07 · Storia"
        title="Percorso e palmares"
        description="Timeline carriera e titoli — come «Percorso» e «Palmares» sulla scheda."
      >
        <div className="sm:col-span-2">
          <Field id="careerPath" label="Percorso (stagioni e club)">
            <textarea
              id="careerPath"
              className={`${inputClass} min-h-32 resize-y`}
              placeholder="2025-26 · Serie B · Moncada Agrigento&#10;2024-25 · A2 · JuVi Cremona…"
              value={form.careerPath}
              onChange={(e) => set("careerPath", e.target.value)}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="palmares" label="Palmares / riconoscimenti">
            <textarea
              id="palmares"
              className={`${inputClass} min-h-24 resize-y`}
              value={form.palmares}
              onChange={(e) => set("palmares", e.target.value)}
            />
          </Field>
        </div>
      </Section>

      <section className={sectionClass}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">08 · Pacchetto</p>
        <h2 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">Quale pacchetto ti interessa?</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Card Player, Pro o Elite — come in sezione pacchetti del sito KataHero.
        </p>
        <fieldset className="mt-5 space-y-2">
          {(Object.keys(PACKAGE_LABELS) as PlayerPackageTier[]).map((tier) => (
            <label
              key={tier}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition ${
                form.packageTier === tier
                  ? "border-accent/45 bg-accent/10"
                  : "border-white/10 bg-black/30 hover:border-white/20"
              }`}
            >
              <input
                type="radio"
                name="packageTier"
                className="mt-1 accent-accent"
                checked={form.packageTier === tier}
                onChange={() => set("packageTier", tier)}
              />
              <span className="text-sm text-zinc-200">{PACKAGE_LABELS[tier]}</span>
            </label>
          ))}
        </fieldset>
        <div className="mt-5">
          <Field id="notes" label="Note aggiuntive">
            <textarea
              id="notes"
              className={`${inputClass} min-h-20 resize-y`}
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
            />
          </Field>
        </div>
        <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3">
          <input
            type="checkbox"
            className="mt-1 accent-accent"
            checked={form.isMinor}
            onChange={(e) => set("isMinor", e.target.checked)}
          />
          <span className="text-sm text-zinc-300">
            Sono minorenne / sto compilando per un atleta minorenne — invierò anche il modulo genitore/tutore (
            <Link href="/minori" className="text-accent underline underline-offset-2 hover:text-white">
              info qui
            </Link>
            ).
          </span>
        </label>
      </section>

      {error ? (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
          {error}
        </p>
      ) : null}

      <section className={`${sectionClass} mt-2`}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">Invio</p>
        <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
          <input
            id="privacyConsent"
            type="checkbox"
            className="mt-1 accent-accent"
            checked={form.privacyConsent}
            onChange={(e) => set("privacyConsent", e.target.checked)}
            required
          />
          <span className="text-sm leading-relaxed text-zinc-300">
            Dichiaro di aver letto l&apos;{" "}
            <Link href="/privacy" className="font-medium text-accent underline underline-offset-2 hover:text-white">
              informativa privacy
            </Link>{" "}
            e autorizzo KataHero a utilizzare i dati inseriti esclusivamente per valutare la richiesta e ricontattarmi.
            <span className="text-accent"> *</span>
          </span>
        </label>
        <button
          type="submit"
          className="mt-4 flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-black shadow-[0_12px_40px_-12px_rgba(37,211,102,0.55)] transition hover:brightness-110 active:brightness-95 sm:text-base"
        >
          Invia su WhatsApp
          <span aria-hidden>→</span>
        </button>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-zinc-500">
          Si aprirà WhatsApp con il messaggio precompilato verso {SITE.phoneDisplay}. Puoi aggiungere foto o file prima di
          inviare.
        </p>
      </section>
    </form>
  );
}
