"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SOURCES = [
  "/videos/herosfondo.mp4",
  "/videos/sfondohero2.mp4",
  "/videos/sfondohero1.mp4",
] as const;

const ROTATION_MS = 7500;
const FADE_MS = 2000;

function useMobileHeroSources() {
  const [sources, setSources] = useState<readonly string[]>(SOURCES);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => {
      setSources(mq.matches ? SOURCES.slice(0, 1) : SOURCES);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return sources;
}

export function HeroVideoBackground() {
  const sources = useMobileHeroSources();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setActive((a) => Math.min(a, sources.length - 1));
  }, [sources.length]);

  const setRef = useCallback((el: HTMLVideoElement | null, index: number) => {
    refs.current[index] = el;
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
      el.setAttribute("playsinline", "");
      el.setAttribute("webkit-playsinline", "");
    }
  }, []);

  useEffect(() => {
    if (sources.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % sources.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [sources.length]);

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.muted = true;
        void v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {sources.map((src, i) => (
        <div
          key={src}
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden transition-opacity ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            transitionDuration: `${FADE_MS}ms`,
            zIndex: i === active ? 2 : 1,
          }}
          aria-hidden
        >
          {/* iOS Safari: `transform` sul <video> può lasciare il video nero; lo zoom va sul wrapper */}
          <div className="absolute inset-0 scale-[1.08] transform-gpu will-change-transform sm:scale-105">
            <video
              ref={(el) => setRef(el, i)}
              className="h-full w-full object-cover"
              src={src}
              muted
              playsInline
              autoPlay
              loop
              preload={i === active ? "auto" : "none"}
              controls={false}
              disablePictureInPicture
              onLoadedData={(e) => {
                if (i === active) void e.currentTarget.play().catch(() => {});
              }}
              onCanPlay={(e) => {
                if (i === active) void e.currentTarget.play().catch(() => {});
              }}
              aria-hidden
            />
          </div>
        </div>
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
