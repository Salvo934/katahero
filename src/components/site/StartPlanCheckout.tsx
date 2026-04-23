"use client";

import { useMemo, useState } from "react";

type Billing = "monthly" | "annual";

type Props = {
  monthlyUrl?: string;
  annualUrl?: string;
  whatsappHref: string;
};

export function StartPlanCheckout({ monthlyUrl, annualUrl, whatsappHref }: Props) {
  const hasMonthly = Boolean(monthlyUrl);
  const hasAnnual = Boolean(annualUrl);
  const hasStripe = hasMonthly || hasAnnual;

  const defaultBilling: Billing = useMemo(() => {
    if (hasMonthly) return "monthly";
    if (hasAnnual) return "annual";
    return "monthly";
  }, [hasMonthly, hasAnnual]);

  const [billing, setBilling] = useState<Billing>(defaultBilling);

  const checkoutHref =
    billing === "monthly" && monthlyUrl ? monthlyUrl : billing === "annual" && annualUrl ? annualUrl : monthlyUrl || annualUrl;

  if (!hasStripe) {
    return (
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/10"
      >
        Scegli Start
      </a>
    );
  }

  const showToggle = hasMonthly && hasAnnual;

  return (
    <div className="mt-6 flex w-full shrink-0 flex-col gap-3">
      {showToggle ? (
        <div
          className="flex rounded-full border border-white/15 bg-black/30 p-1"
          role="group"
          aria-label="Periodo di pagamento"
        >
          <button
            type="button"
            aria-pressed={billing === "monthly"}
            onClick={() => setBilling("monthly")}
            className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition sm:text-sm ${
              billing === "monthly"
                ? "bg-accent text-black shadow-[0_8px_24px_-12px_rgba(0,229,160,0.45)]"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Mensile
          </button>
          <button
            type="button"
            aria-pressed={billing === "annual"}
            onClick={() => setBilling("annual")}
            className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition sm:text-sm ${
              billing === "annual"
                ? "bg-accent text-black shadow-[0_8px_24px_-12px_rgba(0,229,160,0.45)]"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Annuale (−2 mesi)
          </button>
        </div>
      ) : null}

      <a
        href={checkoutHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-black shadow-[0_12px_32px_-12px_rgba(0,229,160,0.5)] transition hover:brightness-110"
      >
        Acquista Start
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-xs font-medium text-zinc-500 underline-offset-2 hover:text-zinc-300 hover:underline"
      >
        Preferisci WhatsApp?
      </a>
    </div>
  );
}
