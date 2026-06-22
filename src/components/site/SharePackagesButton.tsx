"use client";

import { PACKAGES_SHARE_PATH } from "@/lib/site";
import { useCallback, useState } from "react";

const SHARE_TITLE = "Pacchetti KataHero";
const SHARE_TEXT =
  "Starter, Player Social e Player Pro — prezzi, include e condizioni per atleti KataHero.";

type Props = {
  /** URL assoluto di fallback (es. dominio produzione). */
  fallbackUrl: string;
};

function resolveShareUrl(fallbackUrl: string): string {
  if (typeof window !== "undefined") {
    return `${window.location.origin}${PACKAGES_SHARE_PATH}`;
  }
  return fallbackUrl;
}

export function SharePackagesButton({ fallbackUrl }: Props) {
  const [status, setStatus] = useState<"idle" | "copied" | "copy-fail">("idle");

  const onShare = useCallback(async () => {
    setStatus("idle");
    const url = resolveShareUrl(fallbackUrl);

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url });
        return;
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2600);
    } catch {
      setStatus("copy-fail");
      window.setTimeout(() => setStatus("idle"), 2600);
    }
  }, [fallbackUrl]);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <button
        type="button"
        onClick={onShare}
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent active:brightness-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-4 shrink-0 opacity-90"
          aria-hidden
        >
          <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.965 9.604a2.968 2.968 0 0 0 0 1.792l6.737 3.367a2.5 2.5 0 1 1-.671 1.341l-6.737-3.367a2.968 2.968 0 0 0 0 1.792l6.737 3.367a2.5 2.5 0 1 1-.671 1.341L6.965 11.396a2.968 2.968 0 0 0 0-1.792l6.737-3.367A2.5 2.5 0 0 1 13 4.5Z" />
        </svg>
        Condividi pacchetti
      </button>
      <p className="min-h-4 text-center text-xs text-zinc-500" role="status" aria-live="polite">
        {status === "idle" ? "Link diretto ai prezzi, senza il resto del sito" : null}
        {status === "copied" ? "Link copiato negli appunti" : null}
        {status === "copy-fail" ? "Copia manuale dal menu del browser" : null}
      </p>
    </div>
  );
}
