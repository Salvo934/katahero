"use client";

import { useEffect, useRef } from "react";

const SRC = "/videos/sfondohero8.mp4";

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
      {/* Video solo desktop — su mobile resta lo sfondo nero */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block" aria-hidden>
        <div className="absolute inset-0 scale-[1.06] transform-gpu will-change-transform">
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
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 lg:hidden" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(0,229,160,0.07),transparent_55%)]" />
      </div>

      <div
        className="absolute inset-0 z-10 bg-linear-to-br from-black/85 via-black/40 to-black/88 lg:from-black/45 lg:via-black/15 lg:to-black/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-11 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(0,229,160,0.09),transparent_50%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.65)_100%)] lg:bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-21 bg-[linear-gradient(to_top,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.72)_32%,transparent_55%)] lg:bg-[linear-gradient(to_top,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.25)_30%,transparent_52%)]"
        aria-hidden
      />
    </div>
  );
}
