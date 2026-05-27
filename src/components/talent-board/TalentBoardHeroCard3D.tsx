"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import React, { useCallback, useEffect, useRef, useState } from "react";

const CARD_IMAGE = "/talent-board-hero-card-ilario.png";
const PLAYER_CARD_URL = "https://ilariosimonetti7.katahero.com/ilario-simonetti";

/** Figurina interattiva nella hero Talent Board — tilt 3D e link alla player card completa. */
export function TalentBoardHeroCard3D() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [rotate, setRotate] = useState({ x: 5, y: -12 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (reducedMotion) return;
      const el = frameRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      setRotate({
        x: -ny * 12,
        y: nx * 18,
      });
    },
    [reducedMotion],
  );

  const resetTilt = useCallback(() => {
    setRotate({ x: 5, y: -12 });
    setHovered(false);
  }, []);

  const tiltStyle: CSSProperties | undefined = reducedMotion
    ? undefined
    : {
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${hovered ? 1.02 : 1})`,
        transformStyle: "preserve-3d",
      };

  return (
    <div
      className="mx-auto w-full max-w-[min(98vw,40rem)] sm:max-w-2xl lg:mx-0 lg:max-w-none"
      style={reducedMotion ? undefined : { perspective: "1400px" }}
    >
      <figure className="relative m-0 w-full">
        <a
          href={PLAYER_CARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apri la player card completa di Ilario Simonetti (si apre in una nuova scheda)"
          className="group/card block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={resetTilt}
        >
          <div className="relative px-2 pb-10 pt-2 sm:px-3 sm:pb-12">
            <div
              className="pointer-events-none absolute top-[18%] left-1/2 -z-30 h-44 w-[88%] -translate-x-1/2 rounded-full bg-accent/16 blur-3xl kh-hero-card-glow sm:h-52"
              aria-hidden
            />

            <div
              className="pointer-events-none absolute bottom-3 left-1/2 -z-10 h-5 w-[74%] -translate-x-1/2 rounded-[100%] border border-accent/25 bg-accent/8 shadow-[0_0_40px_rgba(0,229,160,0.12)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-1 left-1/2 -z-10 h-3 w-[58%] -translate-x-1/2 rounded-[100%] bg-black/70 blur-xl"
              aria-hidden
            />

            <div
              className="pointer-events-none absolute inset-x-[10%] top-[10%] aspect-video -rotate-8 rounded-2xl bg-linear-to-br from-zinc-800/70 via-zinc-900/80 to-black/90 opacity-35 shadow-[0_24px_48px_rgba(0,0,0,0.55)] ring-1 ring-white/6"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-[6%] top-[5%] aspect-video -rotate-3 rounded-2xl bg-linear-to-br from-zinc-700/50 via-zinc-900/70 to-black/85 opacity-50 shadow-[0_28px_56px_rgba(0,0,0,0.6)] ring-1 ring-white/8"
              aria-hidden
            />

            <div className={reducedMotion ? "relative z-10" : "kh-hero-card-float relative z-10"}>
              <div
                ref={frameRef}
                onPointerMove={onPointerMove}
                className={
                  reducedMotion
                    ? "relative isolate"
                    : "relative isolate cursor-pointer touch-manipulation transition-[transform] duration-300 ease-out will-change-transform"
                }
                style={tiltStyle}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-950 shadow-[0_40px_80px_rgba(0,0,0,0.88),0_18px_40px_rgba(0,229,160,0.18)] transition-shadow duration-300 group-hover/card:shadow-[0_48px_96px_rgba(0,0,0,0.92),0_24px_52px_rgba(0,229,160,0.28)]">
                  <Image
                    src={CARD_IMAGE}
                    alt="Esempio figurina digitale: Ilario Simonetti, numero 7 — stile della scheda giocatore condivisibile"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width:640px) 98vw,(max-width:1024px) 50vw,42rem"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/25 via-transparent to-transparent opacity-45 mix-blend-overlay"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 transition duration-300 group-hover/card:ring-accent/25"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </a>

        <figcaption className="mt-1 flex items-center justify-center gap-3 sm:justify-end lg:mt-0">
          <a
            href={PLAYER_CARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-end"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,229,160,0.8)]" aria-hidden />
              Live
            </span>
            <span className="hidden h-3 w-px bg-white/12 sm:inline" aria-hidden />
            <span className="text-sm font-semibold text-zinc-200 transition group-hover/link:text-white">
              Ilario Simonetti
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent transition-transform duration-300 group-hover/link:translate-x-0.5">
              Apri card
              <span aria-hidden>↗</span>
            </span>
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
