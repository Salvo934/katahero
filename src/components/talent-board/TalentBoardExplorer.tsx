"use client";

import { useMemo, useState } from "react";
import { TalentBoardAthleteCard } from "@/components/talent-board/TalentBoardAthleteCard";
import {
  DEMO_ATHLETES_BASKETBALL,
  FAQ_ITEMS,
  FILTER_OPTIONS,
  type TalentAthlete,
} from "@/lib/talent-board-data";

type TalentExplorerFilterState = {
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
};

const defaultFilters: TalentExplorerFilterState = {
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
};

function matchFilters(a: TalentAthlete, f: TalentExplorerFilterState): boolean {
  const q = f.search.trim().toLowerCase();
  if (q) {
    const blob = `${a.firstName} ${a.lastName} ${a.club} ${a.agency} ${a.sport} ${a.role} ${a.category} ${a.status} ${a.nationality}`
      .toLowerCase();
    if (!blob.includes(q)) return false;
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

function SelectFilter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 rounded-xl border border-white/12 bg-zinc-900/80 px-3 text-sm text-white outline-none ring-accent/0 transition focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function NumInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{label}</span>
      <input
        type="number"
        inputMode="decimal"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 rounded-xl border border-white/12 bg-zinc-900/80 px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

export function TalentBoardExplorer() {
  const [f, setF] = useState<TalentExplorerFilterState>(defaultFilters);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const filtered = useMemo(() => DEMO_ATHLETES_BASKETBALL.filter((a) => matchFilters(a, f)), [f]);

  const patch = (partial: Partial<TalentExplorerFilterState>) => setF((prev) => ({ ...prev, ...partial }));

  return (
    <section id="griglia-atleti" className="border-t border-white/10 bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/35 p-5 shadow-inner ring-1 ring-white/5 sm:p-6">
          <h2 className="font-display text-xl font-bold text-white sm:text-2xl">Filtri e ricerca</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Struttura pronta per dati reali: oggi filtri su dataset demo (solo basket).
          </p>

          <div className="mt-6">
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Cerca</span>
              <input
                type="search"
                value={f.search}
                placeholder="Cerca atleta, sport, club, agenzia..."
                onChange={(e) => patch({ search: e.target.value })}
                className="h-11 w-full rounded-xl border border-white/12 bg-zinc-900/80 px-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
              />
            </label>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SelectFilter label="Sport" value={f.sport} onChange={(v) => patch({ sport: v })} options={FILTER_OPTIONS.sport} />
            <SelectFilter label="Ruolo" value={f.role} onChange={(v) => patch({ role: v })} options={FILTER_OPTIONS.role} />
            <SelectFilter
              label="Categoria"
              value={f.category}
              onChange={(v) => patch({ category: v })}
              options={FILTER_OPTIONS.category}
            />
            <SelectFilter
              label="Anno"
              value={f.birthYear}
              onChange={(v) => patch({ birthYear: v })}
              options={FILTER_OPTIONS.birthYear}
            />
            <SelectFilter
              label="Nazionalità"
              value={f.nationality}
              onChange={(v) => patch({ nationality: v })}
              options={FILTER_OPTIONS.nationality}
            />
            <SelectFilter label="Status" value={f.status} onChange={(v) => patch({ status: v })} options={FILTER_OPTIONS.status} />
            <SelectFilter
              label="Agenzia / procuratore"
              value={f.agency}
              onChange={(v) => patch({ agency: v })}
              options={FILTER_OPTIONS.agency}
            />
          </div>

          <div className="mt-5">
            <button
              type="button"
              onClick={() => setAdvancedOpen((o) => !o)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
              aria-expanded={advancedOpen}
            >
              <span>Filtri avanzati</span>
              <span className="text-zinc-500" aria-hidden>
                {advancedOpen ? "▴" : "▾"}
              </span>
            </button>

            {advancedOpen ? (
              <div className="mt-4 grid gap-4 rounded-xl border border-white/8 bg-black/25 p-4 sm:grid-cols-2 lg:grid-cols-4">
                <NumInput label="Altezza min (cm)" value={f.minHeight} onChange={(v) => patch({ minHeight: v })} placeholder="es. 190" />
                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Club attuale</span>
                  <input
                    type="text"
                    value={f.clubContains}
                    placeholder="Contiene..."
                    onChange={(e) => patch({ clubContains: e.target.value })}
                    className="h-10 rounded-xl border border-white/12 bg-zinc-900/80 px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
                  />
                </label>
                <NumInput label="PPG min" value={f.minPpg} onChange={(v) => patch({ minPpg: v })} />
                <NumInput label="RPG min" value={f.minRpg} onChange={(v) => patch({ minRpg: v })} />
                <NumInput label="APG min" value={f.minApg} onChange={(v) => patch({ minApg: v })} />
                <NumInput label="FG% min" value={f.minFg} onChange={(v) => patch({ minFg: v })} />
                <NumInput label="2P% min (futuro)" value={f.min2p} onChange={(v) => patch({ min2p: v })} placeholder="—" />
                <NumInput label="3P% min" value={f.min3p} onChange={(v) => patch({ min3p: v })} />
                <NumInput label="FT% min" value={f.minFt} onChange={(v) => patch({ minFt: v })} />
              </div>
            ) : null}
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            {filtered.length} {filtered.length === 1 ? "atleta" : "atleti"} in vista
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-zinc-500">Nessun atleta con questi filtri. Prova ad allargare la ricerca.</p>
        ) : (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filtered.map((athlete) => (
              <li key={athlete.id}>
                <TalentBoardAthleteCard athlete={athlete} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export function TalentBoardFaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-white/10 bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">Domande frequenti</h2>
        <ul className="mt-10 space-y-2">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="rounded-2xl border border-white/10 bg-zinc-900/40">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">{item.q}</span>
                  <span className="shrink-0 text-accent" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? <p className="border-t border-white/8 px-4 py-4 text-sm leading-relaxed text-zinc-400 sm:px-5">{item.a}</p> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
