"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SOURCES = [
  "/videos/herosfondo.mp4",
  "/videos/sfondohero2.mp4",
  "/videos/sfondohero1.mp4",
] as const;

const ROTATION_MS = 7500;
const FADE_MS = 2000;

export function HeroVideoBackground() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  const setRef = useCallback((el: HTMLVideoElement | null, index: number) => {
    refs.current[index] = el;
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % SOURCES.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {SOURCES.map((src, i) => (
        <video
          key={src}
          ref={(el) => setRef(el, i)}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-[1.08] object-cover transition-opacity ease-in-out sm:scale-105"
          style={{
            opacity: i === active ? 1 : 0,
            transitionDuration: `${FADE_MS}ms`,
            zIndex: i === active ? 2 : 1,
          }}
          src={src}
          muted
          playsInline
          loop
          preload="auto"
          aria-hidden
        />
      ))}
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
