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
import { DEMO_ATHLETES_BASKETBALL, FILTER_OPTIONS } from "@/lib/talent-board-data";

function ExplorerSkeleton() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 py-8 sm:py-12 pb-14 sm:pb-16"
      aria-busy="true"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-28 animate-pulse rounded-xl border border-white/10 bg-zinc-900/45 sm:h-32" />
        <div className="mt-8 grid grid-cols-1 gap-7 md:mt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="animate-pulse overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 p-3 shadow-[0_22px_56px_-32px_rgba(0,0,0,0.92)] ring-1 ring-white/5 sm:p-3.5"
            >
              <div className="flex gap-3">
                <div className="size-21 shrink-0 rounded-xl bg-zinc-800/95 ring-2 ring-white/20 sm:size-23" />
                <div className="min-w-0 flex-1 space-y-2 pt-0.5">
                  <div className="h-4 w-32 rounded bg-zinc-700/55 sm:h-5 sm:w-40" />
                  <div className="h-3 w-full max-w-[90%] rounded bg-zinc-700/35" />
                  <div className="h-3 w-full max-w-[75%] rounded bg-zinc-700/35" />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 border-y border-white/8 py-2.5">
                <div className="h-12 rounded-md bg-zinc-800/70" />
                <div className="h-12 rounded-md bg-zinc-800/70" />
                <div className="col-span-2 h-12 rounded-md bg-zinc-800/70" />
                <div className="col-span-2 h-14 rounded-md bg-zinc-800/65" />
              </div>
              <div className="mt-2.5 rounded-lg border border-white/8 bg-black/25 p-2 sm:p-2.5">
                <div className="flex justify-center border-b border-white/10 pb-1.5">
                  <div className="h-3 w-44 max-w-[90%] rounded bg-zinc-700/45" />
                </div>
                <div className="mt-1.5 grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-md bg-zinc-800/75" />
                  <div className="h-12 rounded-md bg-zinc-800/75" />
                  <div className="h-12 rounded-md bg-zinc-800/75" />
                </div>
              </div>
              <div className="mt-2 h-8 rounded-md border border-white/6 bg-white/4" />
              <div className="mt-2.5 h-9 rounded-lg bg-accent/12" />
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
    <section
      id="griglia-atleti"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-zinc-950 py-8 sm:py-12 pb-14 sm:pb-16 lg:pb-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-white/12 bg-zinc-950/32 shadow-[0_16px_48px_-36px_rgba(0,0,0,0.85)] ring-1 ring-white/5 backdrop-blur-sm sm:rounded-2xl">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
            aria-hidden
          />
          <div className="relative p-2.5 sm:p-4">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <h2 className="font-display text-base font-bold text-white sm:text-lg">Griglia roster</h2>
                <p className="mt-0.5 max-w-3xl text-[11px] leading-snug text-zinc-500 sm:text-xs sm:leading-relaxed">
                  Ogni atleta ha una <strong className="font-medium text-zinc-400">mini scheda</strong> con dati, ruolo e link al profilo
                  completo. Ricerca e filtri restano salvati nell&apos;URL — condividi la vista che ti serve. Due parole cercate → entrambe
                  devono comparire nei campi del profilo.
                </p>
              </div>
            </div>

            <div className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2.5">
              <label className="relative min-w-0 flex-1">
                <span className="sr-only">Ricerca libera</span>
                <IconSearch className="pointer-events-none absolute bottom-2 left-2.5 h-3.5 w-3.5 text-zinc-500 sm:bottom-2.5 sm:left-3 sm:h-4 sm:w-4" />
                <input
                  type="search"
                  value={f.search}
                  placeholder="Nome, ruolo, club, agenzia…"
                  onChange={(e) => patch({ search: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") patch({ search: "" });
                  }}
                  className="h-10 w-full rounded-lg border border-white/12 bg-zinc-950/75 py-2 pl-9 pr-19 text-[13px] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] outline-none placeholder:text-zinc-600 focus:border-accent/45 focus:ring-2 focus:ring-accent/15 sm:h-10 sm:pl-10 sm:text-sm sm:pr-24"
                  autoComplete="off"
                  enterKeyHint="search"
                />
                {f.search ? (
                  <button
                    type="button"
                    onClick={() => patch({ search: "" })}
                    className="absolute bottom-1.5 right-1.5 rounded-md border border-white/12 bg-white/5 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-400 hover:bg-white/10 hover:text-white sm:bottom-2 sm:right-2"
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
                className="inline-flex h-10 shrink-0 items-center justify-center gap-1 rounded-lg border border-white/14 bg-white/7 px-3 text-[13px] font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition hover:border-accent/35 hover:bg-white/10 sm:gap-1.5 sm:px-4 sm:text-sm"
              >
                <IconSliders className="h-4 w-4 text-accent sm:h-4.5 sm:w-4.5" />
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
              <div className="mt-2 flex flex-col gap-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Filtri attivi</p>
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
                  ? "mt-3 space-y-3 rounded-lg border border-white/12 bg-black/35 p-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] ring-1 ring-white/5 sm:space-y-4 sm:p-4"
                  : "hidden"
              }
            >
              <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
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

            <p className="mt-2.5 border-t border-white/10 pt-2 text-[11px] font-medium text-zinc-400 sm:text-xs sm:pt-2.5" aria-live="polite">
              <span className="tabular-nums text-white">{sorted.length}</span>{" "}
              {sorted.length === 1 ? "atleta in elenco" : "atleti in elenco"}
              {filtered.length < DEMO_ATHLETES_BASKETBALL.length ? (
                <span className="text-zinc-600"> · dopo filtro</span>
              ) : null}
            </p>
          </div>
        </div>

        {sorted.length === 0 ? (
          <div className="mt-8 rounded-xl border border-dashed border-white/25 bg-black/28 px-4 py-10 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:mt-10 sm:px-6">
            <p className="font-display text-lg font-semibold text-white">Nessuno in questa combinazione</p>
            <p className="mt-2 text-sm text-zinc-500">
              Riduci filtri o accorcia la ricerca: nessun atleta corrisponde ai criteri attuali.
            </p>
            <button
              type="button"
              onClick={resetAll}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:brightness-110"
            >
              Ripristina tutto
            </button>
          </div>
        ) : (
          <ul
            className={
              sorted.length === 1
                ? "mt-8 grid grid-cols-1 justify-items-center gap-8 md:mt-10"
                : "mt-8 grid grid-cols-1 items-stretch gap-7 md:mt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8 xl:gap-10"
            }
          >
            {sorted.map((athlete) => (
              <li
                key={athlete.id}
                className={
                  sorted.length === 1
                    ? "flex h-full min-h-0 w-full max-w-90 flex-col justify-center sm:max-w-100"
                    : "flex h-full min-h-0 min-w-0 flex-col"
                }
              >
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
