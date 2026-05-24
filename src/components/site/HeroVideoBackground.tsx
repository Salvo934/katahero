"use client";

import { useEffect, useRef, useState } from "react";

const SRC = "/videos/sfondohero8.mp4";
const DESKTOP_MQ = "(min-width: 1024px)";

export function HeroVideoBackground() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!isDesktop) {
      el.pause();
      el.removeAttribute("src");
      el.load();
      return;
    }

    if (el.getAttribute("src") !== SRC) {
      el.setAttribute("src", SRC);
      el.load();
    }

    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");
    void el.play().catch(() => {});
  }, [isDesktop]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(0,229,160,0.07),transparent_55%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block"
        aria-hidden
      >
        <div className="absolute inset-0 scale-105 transform-gpu will-change-transform">
          <video
            ref={ref}
            className="h-full w-full object-cover"
            muted
            playsInline
            autoPlay
            loop
            preload="none"
            controls={false}
            disablePictureInPicture
            onLoadedData={(e) => {
              if (window.matchMedia(DESKTOP_MQ).matches) void e.currentTarget.play().catch(() => {});
            }}
            onCanPlay={(e) => {
              if (window.matchMedia(DESKTOP_MQ).matches) void e.currentTarget.play().catch(() => {});
            }}
          />
        </div>
      </div>

      <div
        className="absolute inset-0 z-10 bg-linear-to-br from-black/85 via-black/40 to-black/88 lg:from-black/80 lg:via-black/35 lg:to-black/85"
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
        className="pointer-events-none absolute inset-0 z-21 bg-[linear-gradient(to_top,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.72)_32%,transparent_55%)] lg:bg-[linear-gradient(to_top,rgba(5,5,5,0.97)_0%,rgba(5,5,5,0.55)_28%,transparent_48%)]"
        aria-hidden
      />
    </div>
  );
}
