"use client";

import { useMemo, useState } from "react";

type Billing = "monthly" | "annual";

type Props = {
  monthlyUrl?: string;
  annualUrl?: string;
  whatsappHref: string;
  /** Es. "24,99 €/mese" — mostrato nel selettore */
  monthlyPriceCaption?: string;
  /** Es. "249,90 €/anno" */
  annualPriceCaption?: string;
};

export function StartPlanCheckout({
  monthlyUrl,
  annualUrl,
  whatsappHref,
  monthlyPriceCaption,
  annualPriceCaption,
}: Props) {
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
    billing === "monthly" && monthlyUrl
      ? monthlyUrl
      : billing === "annual" && annualUrl
        ? annualUrl
        : monthlyUrl || annualUrl;

  if (!hasStripe) {
    return (
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.07]"
      >
        Scegli Start
      </a>
    );
  }

  const showToggle = hasMonthly && hasAnnual;

  const optionBase =
    "flex w-full flex-col rounded-2xl border px-3 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 sm:py-3.5";
  const optionInactive = "border-white/10 bg-black/30 hover:border-white/16 hover:bg-black/40";
  const optionActive = "border-accent/45 bg-accent/[0.08] ring-1 ring-accent/25 shadow-[0_0_0_1px_rgba(0,229,160,0.12)_inset]";

  return (
    <div className="mt-6 flex w-full shrink-0 flex-col gap-4">
      {showToggle ? (
        <div className="text-left">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Come paghi</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
            <button
              type="button"
              aria-pressed={billing === "monthly"}
              onClick={() => setBilling("monthly")}
              className={`${optionBase} ${billing === "monthly" ? optionActive : optionInactive}`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Mensile</span>
              {monthlyPriceCaption ? (
                <span className="mt-1 font-display text-base font-bold tabular-nums text-white sm:text-lg">
                  {monthlyPriceCaption}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              aria-pressed={billing === "annual"}
              onClick={() => setBilling("annual")}
              className={`${optionBase} ${billing === "annual" ? optionActive : optionInactive}`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Annuale</span>
              <span className="mt-0.5 text-[10px] font-medium text-accent/90">2 mesi in regalo</span>
              {annualPriceCaption ? (
                <span className="mt-1 font-display text-base font-bold tabular-nums text-accent sm:text-lg">
                  {annualPriceCaption}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      ) : null}

      <a
        href={checkoutHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-2xl border border-accent/40 bg-accent px-5 py-3.5 text-center font-display text-sm font-bold tracking-tight text-black shadow-[0_12px_40px_-16px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95"
      >
        Acquista Start
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/12 bg-transparent py-3 text-sm font-medium text-zinc-300 transition hover:border-white/22 hover:bg-white/[0.04] hover:text-white"
      >
        <span className="text-base opacity-90" aria-hidden>
          💬
        </span>
        Info su WhatsApp
      </a>
    </div>
  );
}
