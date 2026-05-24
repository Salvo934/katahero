"use client";

import { useCallback, useState } from "react";

type Props = {
  /** URL assoluto della player card / profilo da condividere. */
  url: string;
  className?: string;
};

export function ShareTalentCardButton({ url, className }: Props) {
  const [status, setStatus] = useState<"idle" | "copied" | "copy-fail">("idle");

  const onShare = useCallback(async () => {
    setStatus("idle");

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ url });
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
  }, [url]);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-px">
      <button type="button" onClick={onShare} className={className}>
        Condividi card
      </button>
      <p
        className="min-h-[14px] text-center text-[8px] tabular-nums leading-tight text-accent/90 sm:min-h-4 sm:text-[9px]"
        role="status"
        aria-live="polite"
      >
        {status === "copied" ? "Copiato negli appunti" : null}
        {status === "copy-fail" ? "Copia manuale dal menu" : null}
      </p>
    </div>
  );
}
