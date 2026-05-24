"use client";

import { createPortal } from "react-dom";
import { useEffect, useId, useMemo, useState } from "react";

type Billing = "monthly" | "annual";

type Props = {
  /** Titolo modale, es. "Piano Pro" */
  modalTitle: string;
  /** Testo pulsante principale, es. "Acquista Pro" */
  acquistaLabel: string;
  /** Se non ci sono link Stripe, pulsante WhatsApp, es. "Scegli Pro" */
  scegliLabel: string;
  monthlyUrl?: string;
  annualUrl?: string;
  whatsappHref: string;
  monthlyPriceCaption?: string;
  annualPriceCaption?: string;
};

export function PlanStripeCheckout({
  modalTitle,
  acquistaLabel,
  scegliLabel,
  monthlyUrl,
  annualUrl,
  whatsappHref,
  monthlyPriceCaption,
  annualPriceCaption,
}: Props) {
  const titleId = useId();
  const hasMonthly = Boolean(monthlyUrl);
  const hasAnnual = Boolean(annualUrl);
  const hasStripe = hasMonthly || hasAnnual;
  const showBillingChoice = hasMonthly && hasAnnual;

  const defaultBilling: Billing = useMemo(() => {
    if (hasMonthly) return "monthly";
    if (hasAnnual) return "annual";
    return "monthly";
  }, [hasMonthly, hasAnnual]);

  const [billing, setBilling] = useState<Billing>(defaultBilling);
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const checkoutHref =
    billing === "monthly" && monthlyUrl
      ? monthlyUrl
      : billing === "annual" && annualUrl
        ? annualUrl
        : monthlyUrl || annualUrl;

  const singleCheckoutHref = monthlyUrl || annualUrl;

  if (!hasStripe) {
    return (
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/4 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/7"
      >
        {scegliLabel}
      </a>
    );
  }

  const optionBase =
    "flex w-full flex-col rounded-2xl border px-4 py-4 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const optionInactive =
    "border-white/10 bg-black/35 hover:border-white/20 hover:bg-black/45 active:scale-[0.99]";
  const optionActive =
    "border-accent/50 bg-accent/12 shadow-[0_0_0_1px_rgba(0,229,160,0.2)_inset] ring-1 ring-accent/30";

  const modal =
    mounted && modalOpen ? (
      createPortal(
        <div
          className="fixed inset-0 z-200 flex items-end justify-center p-4 sm:items-center sm:p-6"
          role="presentation"
        >
          <button
            type="button"
            className="kh-modal-backdrop-in absolute inset-0 bg-linear-to-b from-black/88 via-black/78 to-black/85 backdrop-blur-md"
            aria-label="Chiudi"
            onClick={() => setModalOpen(false)}
          />
          <div
            className="kh-modal-panel-in relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/14 bg-zinc-950/95 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_32px_100px_-24px_rgba(0,0,0,0.85),0_0_80px_-30px_rgba(0,229,160,0.18)] backdrop-blur-xl sm:p-7"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-accent/55 to-transparent"
              aria-hidden
            />
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 id={titleId} className="font-display text-lg font-bold text-white sm:text-xl">
                  {modalTitle}
                </h2>
                <p className="mt-1.5 text-sm leading-snug text-zinc-400">
                  Scegli se pagare mese per mese o con l&apos;annuale (−2 mesi).
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="shrink-0 rounded-xl border border-white/12 bg-white/4 px-2.5 py-1.5 text-sm text-zinc-400 transition hover:border-white/22 hover:bg-white/8 hover:text-white"
                aria-label="Chiudi finestra"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {hasMonthly ? (
                <button
                  type="button"
                  aria-pressed={billing === "monthly"}
                  onClick={() => setBilling("monthly")}
                  className={`${optionBase} ${billing === "monthly" ? optionActive : optionInactive}`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Mensile</span>
                  {monthlyPriceCaption ? (
                    <span className="mt-1 font-display text-lg font-bold tabular-nums text-white">
                      {monthlyPriceCaption}
                    </span>
                  ) : null}
                  <span className="mt-1 text-xs text-zinc-500">Fatturazione ogni mese, massima flessibilità.</span>
                </button>
              ) : null}
              {hasAnnual ? (
                <button
                  type="button"
                  aria-pressed={billing === "annual"}
                  onClick={() => setBilling("annual")}
                  className={`${optionBase} ${billing === "annual" ? optionActive : optionInactive}`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Annuale</span>
                  <span className="mt-0.5 text-[11px] font-medium text-accent/90">2 mesi in regalo · paghi 10 mensilità</span>
                  {annualPriceCaption ? (
                    <span className="mt-1 font-display text-lg font-bold tabular-nums text-accent">
                      {annualPriceCaption}
                    </span>
                  ) : null}
                </button>
              ) : null}
            </div>

            <a
              href={checkoutHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setModalOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-accent/45 bg-accent px-5 py-3.5 text-center font-display text-sm font-bold text-black shadow-[0_16px_48px_-12px_rgba(0,229,160,0.5)] transition hover:brightness-110 hover:shadow-[0_20px_56px_-12px_rgba(0,229,160,0.55)] active:brightness-95"
            >
              Paga ora
            </a>
          </div>
        </div>,
        document.body,
      )
    ) : null;

  return (
    <div className="mt-6 flex w-full shrink-0 flex-col gap-4">
      {showBillingChoice ? (
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex w-full items-center justify-center rounded-2xl border border-accent/40 bg-accent px-5 py-3.5 text-center font-display text-sm font-bold tracking-tight text-black shadow-[0_12px_40px_-16px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95"
        >
          {acquistaLabel}
        </button>
      ) : (
        <a
          href={singleCheckoutHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-2xl border border-accent/40 bg-accent px-5 py-3.5 text-center font-display text-sm font-bold tracking-tight text-black shadow-[0_12px_40px_-16px_rgba(0,229,160,0.45)] transition hover:brightness-110 active:brightness-95"
        >
          {acquistaLabel}
        </a>
      )}

      {modal}

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/12 bg-transparent py-3 text-sm font-medium text-zinc-300 transition hover:border-white/22 hover:bg-white/4 hover:text-white"
      >
        <span className="text-base opacity-90" aria-hidden>
          💬
        </span>
        Info su WhatsApp
      </a>
    </div>
  );
}
