"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TalentBoardAthleteCard } from "@/components/talent-board/TalentBoardAthleteCard";
import {
  buildFilterChips,
  clearChip,
  countAdvancedFiltersActive,
  DEFAULT_TALENT_FILTERS,
  hasNonDefaultFilters,
  matchTalentAthlete,
  normalizeParsedFilters,
  parseTalentFilters,
  serializeTalentFilters,
  sortTalentAthletes,
  SORT_LABELS,
  type TalentFilterState,
} from "@/lib/talent-board-filters";
import { DEMO_ATHLETES_BASKETBALL, FAQ_ITEMS, FILTER_OPTIONS } from "@/lib/talent-board-data";

function ExplorerSkeleton() {
  return (
    <section className="border-t border-white/10 bg-zinc-950 py-16 sm:py-20" aria-busy="true">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-48 animate-pulse rounded-2xl border border-white/10 bg-zinc-900/50" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-6 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.95)] ring-1 ring-white/5 sm:p-7"
            >
              <div className="flex gap-4">
                <div className="h-20 w-20 shrink-0 animate-pulse rounded-2xl bg-zinc-800 sm:h-24 sm:w-24" />
                <div className="min-w-0 flex-1 space-y-2 pt-0.5">
                  <div className="h-5 w-28 animate-pulse rounded bg-zinc-700/60 sm:h-6 sm:w-32" />
                  <div className="h-3 w-full animate-pulse rounded bg-zinc-700/40" />
                  <div className="h-4 max-w-[80%] animate-pulse rounded bg-zinc-700/45" />
                </div>
              </div>
              <div className="mt-6 space-y-3 border-y border-white/8 py-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-10 animate-pulse rounded bg-zinc-800/80" />
                  <div className="h-10 animate-pulse rounded bg-zinc-800/80" />
                  <div className="h-10 animate-pulse rounded bg-zinc-800/80" />
                  <div className="h-10 animate-pulse rounded bg-zinc-800/80" />
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <div className="h-11 w-24 animate-pulse rounded-xl bg-zinc-800/70" />
                <div className="h-11 w-24 animate-pulse rounded-xl bg-zinc-800/70" />
                <div className="h-11 w-28 animate-pulse rounded-xl bg-zinc-800/60" />
              </div>
              <div className="mt-6 h-12 animate-pulse rounded-2xl bg-accent/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function IconSliders({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M8 12h8M10 18h4" />
    </svg>
  );
}

function SelectFilter({
  label,
  value,
  onChange,
  options,
  id,
  hideLabel,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  id: string;
  hideLabel?: boolean;
}) {
  return (
    <label className="group flex flex-col gap-1.5" htmlFor={id}>
      {!hideLabel ? (
        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{label}</span>
      ) : (
        <span className="sr-only">{label}</span>
      )}
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-white/12 bg-zinc-900/90 pl-3 pr-10 text-sm text-white outline-none transition group-hover:border-white/18 focus:border-accent/45 focus:ring-2 focus:ring-accent/15"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {SORT_LABELS.find((s) => s.id === o)?.label ?? o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500" aria-hidden>
          ▾
        </span>
      </div>
    </label>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  id,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  id: string;
}) {
  return (
    <label className="group flex flex-col gap-1.5" htmlFor={id}>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{label}</span>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-white/12 bg-zinc-900/90 pl-3 pr-10 text-sm text-white outline-none transition group-hover:border-white/18 focus:border-accent/45 focus:ring-2 focus:ring-accent/15"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500" aria-hidden>
          ▾
        </span>
      </div>
    </label>
  );
}

function NumInput({
  label,
  value,
  onChange,
  placeholder,
  id,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  id: string;
}) {
  return (
    <label className="flex flex-col gap-1.5" htmlFor={id}>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{label}</span>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-xl border border-white/12 bg-zinc-900/90 px-3 text-sm text-white outline-none transition hover:border-white/16 placeholder:text-zinc-600 focus:border-accent/45 focus:ring-2 focus:ring-accent/15"
      />
    </label>
  );
}

/** Keeps #fragment when syncing query params so the viewport does not jump (e.g. after Esplora → #griglia-atleti). */
function talentBoardHref(pathname: string, qs: string) {
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  return qs ? `${pathname}?${qs}${hash}` : `${pathname}${hash}`;
}

function TalentBoardExplorerInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [f, setF] = useState<TalentFilterState>(() => parseTalentFilters(new URLSearchParams(searchParams.toString())));
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [filtersPanelOpen, setFiltersPanelOpen] = useState(false);

  useEffect(() => {
    if (!filtersPanelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFiltersPanelOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filtersPanelOpen]);
  useEffect(() => {
    setF(parseTalentFilters(new URLSearchParams(searchParams.toString())));
  }, [searchParams]);

  const patch = useCallback(
    (partial: Partial<TalentFilterState>) => {
      setF((prev) => {
        const next = normalizeParsedFilters({ ...prev, ...partial });
        const qs = serializeTalentFilters(next);
        queueMicrotask(() => router.replace(talentBoardHref(pathname, qs), { scroll: false }));
        return next;
      });
    },
    [pathname, router],
  );

  const patchChip = useCallback(
    (chipId: string) => {
      clearChip(chipId, (delta) => {
        setF((prev) => {
          const next = normalizeParsedFilters({ ...prev, ...delta });
          const qs = serializeTalentFilters(next);
          queueMicrotask(() => router.replace(talentBoardHref(pathname, qs), { scroll: false }));
          return next;
        });
      });
    },
    [pathname, router],
  );

  const resetAll = useCallback(() => {
    setF(DEFAULT_TALENT_FILTERS);
    router.replace(talentBoardHref(pathname, ""), { scroll: false });
    setAdvancedOpen(false);
    setFiltersPanelOpen(false);
  }, [pathname, router]);

  const filtered = useMemo(() => DEMO_ATHLETES_BASKETBALL.filter((a) => matchTalentAthlete(a, f)), [f]);
  const sorted = useMemo(() => sortTalentAthletes(filtered, f.sort, f.search), [filtered, f.sort, f.search]);
  const chips = useMemo(() => buildFilterChips(f), [f]);
  const advCount = countAdvancedFiltersActive(f);
  const hasActive = hasNonDefaultFilters(f);
  const panelBadgeCount = useMemo(() => chips.filter((c) => c.id !== "q").length, [chips]);

  return (
    <section id="griglia-atleti" className="scroll-mt-24 border-t border-white/10 bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-zinc-900/30 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] ring-1 ring-white/5">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/45 to-transparent"
            aria-hidden
          />
          <div className="relative p-5 sm:p-7 lg:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <h2 className="font-display text-xl font-bold text-white sm:text-2xl">Ricerca nella board</h2>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-500">
                  Più parole = tutte devono comparire (AND). Filtri e ordinamento sono nel pannello. Lo stato resta
                  nell&apos;URL.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
              <label className="relative min-w-0 flex-1">
                <span className="sr-only">Ricerca libera</span>
                <IconSearch className="pointer-events-none absolute bottom-3 left-3.5 h-5 w-5 text-zinc-500 sm:bottom-3.5" />
                <input
                  type="search"
                  value={f.search}
                  placeholder="Cerca atleta, sport, club, agenzia…"
                  onChange={(e) => patch({ search: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") patch({ search: "" });
                  }}
                  className="h-12 w-full rounded-2xl border border-white/12 bg-zinc-950/80 py-3 pl-11 pr-24 text-sm text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] outline-none placeholder:text-zinc-600 focus:border-accent/45 focus:ring-2 focus:ring-accent/15 sm:h-13"
                  autoComplete="off"
                  enterKeyHint="search"
                />
                {f.search ? (
                  <button
                    type="button"
                    onClick={() => patch({ search: "" })}
                    className="absolute bottom-2.5 right-2 rounded-lg border border-white/12 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-zinc-400 hover:bg-white/10 hover:text-white sm:bottom-3"
                  >
                    Cancella
                  </button>
                ) : null}
              </label>

              <button
                type="button"
                onClick={() => setFiltersPanelOpen((o) => !o)}
                aria-expanded={filtersPanelOpen}
                aria-controls="talent-board-filter-panels"
                id="talent-board-filters-trigger"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl border border-white/14 bg-white/7 px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition hover:border-accent/35 hover:bg-white/10 sm:h-13 sm:px-6"
              >
                <IconSliders className="h-5 w-5 text-accent" />
                <span>Filtri</span>
                {panelBadgeCount > 0 ? (
                  <span className="flex min-w-5.5 items-center justify-center rounded-full bg-accent px-1.5 py-0.5 text-[11px] font-bold leading-none text-black">
                    {panelBadgeCount}
                  </span>
                ) : null}
                <span className="text-zinc-500" aria-hidden>
                  {filtersPanelOpen ? "▴" : "▾"}
                </span>
              </button>
            </div>

            {chips.length > 0 ? (
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Attivi</p>
                <ul className="flex flex-wrap gap-2" aria-live="polite">
                  {chips.map((c) => (
                    <li key={`${c.id}-${c.label}`}>
                      <button
                        type="button"
                        onClick={() => patchChip(c.id)}
                        className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-accent/28 bg-accent/10 py-1.5 pl-3 pr-2 text-left text-[11px] font-semibold text-accent transition hover:bg-accent/16"
                      >
                        <span className="min-w-0 truncate">{c.label}</span>
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/35 text-sm text-zinc-300"
                          aria-hidden
                        >
                          ×
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div
              id="talent-board-filter-panels"
              role="region"
              aria-labelledby="talent-board-filters-trigger"
              hidden={!filtersPanelOpen}
              className={
                filtersPanelOpen
                  ? "mt-6 space-y-5 rounded-2xl border border-white/12 bg-black/40 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] ring-1 ring-white/5 sm:p-6"
                  : "hidden"
              }
            >
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="w-full min-w-0 sm:max-w-xs">
                  <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    Ordina risultati
                  </span>
                  <SelectFilter
                    id="tb-sort"
                    label="Ordina risultati"
                    hideLabel
                    value={f.sort}
                    onChange={(v) => patch({ sort: v as TalentFilterState["sort"] })}
                    options={SORT_LABELS.map((s) => s.id)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={resetAll}
                    disabled={!hasActive}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/14 bg-white/5 px-4 text-sm font-semibold text-zinc-200 transition enabled:hover:border-white/25 enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Azzera tutto
                  </button>
                  <button
                    type="button"
                    onClick={() => setFiltersPanelOpen(false)}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/14 bg-transparent px-4 text-sm font-semibold text-zinc-400 transition hover:border-white/22 hover:text-white"
                  >
                    Chiudi
                  </button>
                </div>
              </div>

              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Profilo</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <FilterSelect
                    id="tb-sport"
                    label="Sport"
                    value={f.sport}
                    onChange={(v) => patch({ sport: v })}
                    options={FILTER_OPTIONS.sport}
                  />
                  <FilterSelect id="tb-role" label="Ruolo" value={f.role} onChange={(v) => patch({ role: v })} options={FILTER_OPTIONS.role} />
                  <FilterSelect
                    id="tb-cat"
                    label="Categoria"
                    value={f.category}
                    onChange={(v) => patch({ category: v })}
                    options={FILTER_OPTIONS.category}
                  />
                  <FilterSelect
                    id="tb-year"
                    label="Anno"
                    value={f.birthYear}
                    onChange={(v) => patch({ birthYear: v })}
                    options={FILTER_OPTIONS.birthYear}
                  />
                  <FilterSelect
                    id="tb-nat"
                    label="Nazionalità"
                    value={f.nationality}
                    onChange={(v) => patch({ nationality: v })}
                    options={FILTER_OPTIONS.nationality}
                  />
                  <FilterSelect
                    id="tb-status"
                    label="Status"
                    value={f.status}
                    onChange={(v) => patch({ status: v })}
                    options={FILTER_OPTIONS.status}
                  />
                  <FilterSelect
                    id="tb-ag"
                    label="Agenzia / procuratore"
                    value={f.agency}
                    onChange={(v) => patch({ agency: v })}
                    options={FILTER_OPTIONS.agency}
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setAdvancedOpen((o) => !o)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-zinc-950/50 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-accent/30 hover:text-white"
                  aria-expanded={advancedOpen}
                >
                  <span>Filtri avanzati</span>
                  {advCount > 0 ? (
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">{advCount}</span>
                  ) : null}
                  <span className="text-zinc-500" aria-hidden>
                    {advancedOpen ? "▴" : "▾"}
                  </span>
                </button>

                {advancedOpen ? (
                  <div className="mt-4 space-y-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 sm:p-5">
                    <div>
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Fisico &amp; club</p>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <NumInput
                          id="tb-hmin"
                          label="Altezza min (cm)"
                          value={f.minHeight}
                          onChange={(v) => patch({ minHeight: v })}
                          placeholder="es. 190"
                        />
                        <label className="flex flex-col gap-1.5 sm:col-span-2" htmlFor="tb-club">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Club attuale</span>
                          <input
                            id="tb-club"
                            type="text"
                            value={f.clubContains}
                            placeholder="Contiene nel nome..."
                            onChange={(e) => patch({ clubContains: e.target.value })}
                            className="h-11 rounded-xl border border-white/12 bg-zinc-900/90 px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-accent/45 focus:ring-2 focus:ring-accent/15"
                          />
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Statistiche (min)</p>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <NumInput id="tb-ppg" label="PPG" value={f.minPpg} onChange={(v) => patch({ minPpg: v })} />
                        <NumInput id="tb-rpg" label="RPG" value={f.minRpg} onChange={(v) => patch({ minRpg: v })} />
                        <NumInput id="tb-apg" label="APG" value={f.minApg} onChange={(v) => patch({ minApg: v })} />
                        <NumInput id="tb-fg" label="FG %" value={f.minFg} onChange={(v) => patch({ minFg: v })} />
                        <NumInput id="tb-p2" label="2P % (futuro)" value={f.min2p} onChange={(v) => patch({ min2p: v })} placeholder="—" />
                        <NumInput id="tb-tp" label="3P %" value={f.min3p} onChange={(v) => patch({ min3p: v })} />
                        <NumInput id="tb-ft" label="FT %" value={f.minFt} onChange={(v) => patch({ minFt: v })} />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <p className="mt-6 border-t border-white/10 pt-5 text-sm font-medium text-zinc-400" aria-live="polite">
              <span className="tabular-nums text-white">{sorted.length}</span>{" "}
              {sorted.length === 1 ? "atleta in vista" : "atleti in vista"}
              {filtered.length < DEMO_ATHLETES_BASKETBALL.length ? <span className="text-zinc-600"> · sul totale demo</span> : null}
            </p>
          </div>
        </div>

        {sorted.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-white/15 bg-zinc-900/25 px-6 py-14 text-center">
            <p className="font-display text-lg font-semibold text-white">Nessun risultato</p>
            <p className="mt-2 text-sm text-zinc-500">Prova a togliere un filtro o usa una ricerca meno stretta.</p>
            <button
              type="button"
              onClick={resetAll}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black hover:brightness-110"
            >
              Ripristina tutto
            </button>
          </div>
        ) : (
          <ul className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {sorted.map((athlete) => (
              <li key={athlete.id} className="flex h-full min-h-0 min-w-0">
                <TalentBoardAthleteCard athlete={athlete} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export function TalentBoardExplorer() {
  return (
    <Suspense fallback={<ExplorerSkeleton />}>
      <TalentBoardExplorerInner />
    </Suspense>
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
                {isOpen ? (
                  <p className="border-t border-white/8 px-4 py-4 text-sm leading-relaxed text-zinc-400 sm:px-5">{item.a}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
