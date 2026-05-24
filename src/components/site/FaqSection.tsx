"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/talent-board-data";

export function FaqSection() {
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
