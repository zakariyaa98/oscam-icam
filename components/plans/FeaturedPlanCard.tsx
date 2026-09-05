import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { homeFeatures, type FeaturedPlan } from "@/lib/plans";

type FeaturedPlanCardProps = {
  plan: FeaturedPlan;
};

export function FeaturedPlanCard({ plan }: FeaturedPlanCardProps) {
  // Prices in lib/plans.ts are stored as strings like "29€" — split the amount
  // from the currency symbol so the number can be shown large with a small
  // superscript "€", matching a classic pricing-table layout.
  const amount = plan.price.replace(/[^\d.,]/g, "").trim();

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border bg-background-elevated p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] sm:p-9 ${
        // Featured plan gets a strong red highlight; the others stay neutral gray
        // until hovered, so red reads as an accent, not the card's base color.
        plan.featured
          ? "border-2 border-aqua shadow-[0_8px_40px_rgba(227,6,19,0.25)] lg:scale-105"
          : "border-border hover:border-aqua/50"
      }`}
    >
      {plan.badge ? (
        <span className="absolute left-1/2 top-0 z-10 w-max max-w-[88%] -translate-x-1/2 -translate-y-1/2 whitespace-normal text-balance rounded-full bg-aqua px-3.5 py-1.5 text-center text-[10px] font-bold uppercase leading-tight tracking-wide text-white shadow-[0_4px_16px_rgba(227,6,19,0.4)] sm:px-4 sm:text-xs">
          {plan.badge}
        </span>
      ) : null}

      <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{plan.duration}</h3>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">bereits ab</p>

      <p className="mt-2 flex items-end justify-center gap-1 text-foreground">
        <span className="mb-2 text-lg font-semibold text-muted">€</span>
        <span className="text-5xl font-bold leading-none tracking-tight">{amount}</span>
        <span className="mb-1.5 text-sm font-medium text-muted">/{plan.period}</span>
      </p>

      <Button
        href={plan.whatsappLink}
        external
        variant="primary"
        className="mt-6 w-full uppercase tracking-wide"
      >
        Paket wählen
      </Button>

      <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-left">
        {homeFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-muted">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua/10 text-aqua">
              <CheckIcon className="mt-0 h-3 w-3" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
