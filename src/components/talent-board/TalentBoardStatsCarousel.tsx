"use client";

import { useEffect, useState } from "react";

import { TALENT_BOARD_DASHBOARD_STATS } from "@/lib/talent-board-data";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function StatsLine({ subdued }: { subdued?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center divide-x divide-white/10 ${subdued ? "select-none opacity-95" : ""}`}
      aria-hidden={subdued}
    >
      {TALENT_BOARD_DASHBOARD_STATS.map((s) => (
        <div
          key={`${subdued ? "echo-" : ""}${s.key}`}
          className="flex min-w-0 shrink-0 items-center gap-3 whitespace-nowrap px-7 py-2 sm:px-9 lg:gap-4 lg:px-11"
        >
          <span className="font-display text-xl font-bold tabular-nums text-white sm:text-2xl">{s.value}</span>
          <span className="max-w-50 text-[11px] font-semibold uppercase leading-snug tracking-wide text-zinc-500 sm:text-[12px]">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Fascia sintetici board: marquee continuo senza interazione; lista statica se motion ridotto. */
export function TalentBoardStatsCarousel() {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return (
      <section className="border-b border-white/10 bg-zinc-950 py-8 sm:py-10" aria-labelledby="talent-board-stats-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="talent-board-stats-heading" className="sr-only">
            Panoramica roster
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-5 sm:gap-x-6">
            {TALENT_BOARD_DASHBOARD_STATS.map((s) => (
              <li
                key={s.key}
                className="flex min-h-19 min-w-42 max-w-[16rem] flex-1 shrink-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-zinc-900/35 px-4 py-4 text-center sm:min-h-0 sm:min-w-48"
              >
                <p className="font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative border-b border-white/10 bg-zinc-950 py-7 sm:py-8"
      aria-label="Indicatori roster in scorrimento automatico"
    >
      <h2 id="talent-board-stats-heading" className="sr-only">
        Panoramica roster
      </h2>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/22 to-transparent" aria-hidden />

      <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2">
        <div className="kh-talent-stats-marquee relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-zinc-950 to-transparent sm:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-zinc-950 to-transparent sm:w-16"
            aria-hidden
          />

          <div className="kh-talent-stats-marquee-track flex w-max items-stretch pt-2 pb-2">
            <StatsLine subdued={false} />
            <StatsLine subdued />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent"
        aria-hidden
      />
    </section>
  );
}
