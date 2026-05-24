"use client";

import { PlanStripeCheckout } from "./PlanStripeCheckout";

export type StartPlanCheckoutProps = {
  monthlyUrl?: string;
  annualUrl?: string;
  whatsappHref: string;
  monthlyPriceCaption?: string;
  annualPriceCaption?: string;
};

export function StartPlanCheckout({
  monthlyUrl,
  annualUrl,
  whatsappHref,
  monthlyPriceCaption,
  annualPriceCaption,
}: StartPlanCheckoutProps) {
  return (
    <PlanStripeCheckout
      modalTitle="Piano Start"
      acquistaLabel="Acquista Start"
      scegliLabel="Scegli Start"
      monthlyUrl={monthlyUrl}
      annualUrl={annualUrl}
      whatsappHref={whatsappHref}
      monthlyPriceCaption={monthlyPriceCaption}
      annualPriceCaption={annualPriceCaption}
    />
  );
}
