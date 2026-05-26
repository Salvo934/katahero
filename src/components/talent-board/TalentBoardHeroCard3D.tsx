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
  const [rotate, setRotate] = useState({ x: 4, y: -10 });

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
      const maxX = 6;
      const maxY = 11;
      setRotate({
        x: -ny * maxX * 2,
        y: nx * maxY * 2,
      });
    },
    [reducedMotion],
  );

  const resetTilt = useCallback(() => {
    setRotate({ x: 4, y: -10 });
  }, []);

  const tiltStyle: CSSProperties | undefined = reducedMotion
    ? undefined
    : {
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
      };

  return (
    <div
      className="mx-auto lg:mx-0 lg:justify-self-end"
      style={reducedMotion ? undefined : { perspective: "1150px" }}
    >
      <figure className="relative m-0 w-full max-w-[min(96vw,34rem)] sm:max-w-xl lg:max-w-136 lg:origin-top-right lg:scale-110">
        <a
          href={PLAYER_CARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apri la player card completa di Ilario Simonetti (si apre in una nuova scheda)"
          className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div
            ref={frameRef}
            onPointerMove={onPointerMove}
            onPointerLeave={reducedMotion ? undefined : resetTilt}
            className={
              reducedMotion
                ? "relative isolate"
                : "relative isolate cursor-pointer touch-manipulation rounded-2xl transition-[transform] duration-200 ease-out will-change-transform"
            }
            style={tiltStyle}
          >
          <div
            className="pointer-events-none absolute inset-x-[12%] -bottom-[10%] top-[36%] -z-10 rounded-4xl bg-accent/25 blur-[52px]"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-black/60 shadow-[0_42px_90px_-52px_rgba(0,0,0,0.92),0_22px_50px_-28px_rgba(0,229,160,0.12)] ring-1 ring-white/6">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-linear-to-br from-white/14 via-transparent to-transparent opacity-35" />
            <div className="relative aspect-5/3 w-full sm:aspect-16/10">
              <Image
                src={CARD_IMAGE}
                alt="Esempio figurina digitale: Ilario Simonetti, numero 7 — stile della scheda giocatore condivisibile"
                fill
                className="object-contain object-center bg-black/70"
                sizes="(max-width:640px) 96vw,(max-width:1024px) 36rem,34rem"
                priority
              />
            </div>
          </div>
          </div>
        </a>
        <figcaption className="mt-4 text-pretty text-center text-[11px] leading-relaxed text-zinc-500 sm:text-xs lg:text-right">
          Clicca per aprire la{" "}
          <strong className="font-medium text-zinc-400">player card</strong>: video, numeri e contatti in un link.
        </figcaption>
      </figure>
    </div>
  );
}
