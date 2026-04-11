"use client";

import { useEffect, useRef } from "react";

const SRC = "/videos/herosfondo.mp4";

export function HeroVideoBackground() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");
    void el.play().catch(() => {});
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {/* iOS Safari: `transform` sul <video> può lasciare il video nero; lo zoom va sul wrapper */}
        <div className="absolute inset-0 scale-[1.08] transform-gpu will-change-transform sm:scale-105">
          <video
            ref={ref}
            className="h-full w-full object-cover"
            src={SRC}
            muted
            playsInline
            autoPlay
            loop
            preload="auto"
            controls={false}
            disablePictureInPicture
            onLoadedData={(e) => void e.currentTarget.play().catch(() => {})}
            onCanPlay={(e) => void e.currentTarget.play().catch(() => {})}
            aria-hidden
          />
        </div>
      </div>
      {/* Lieve zoom riduce bande ai bordi; overlay stratificati per leggibilità */}
      <div
        className="absolute inset-0 z-10 bg-linear-to-br from-black/85 via-black/40 to-black/88"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-11 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(0,229,160,0.09),transparent_50%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.65)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-21 bg-[linear-gradient(to_top,rgba(5,5,5,0.95)_0%,transparent_35%)]"
        aria-hidden
      />
    </div>
  );
}
