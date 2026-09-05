import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { discountPercent, pricingFeatures, type DeviceTier, type PricingDuration } from "@/lib/plans";

type PricingCardProps = {
  tier: DeviceTier;
  duration: PricingDuration;
  recommended?: boolean;
};

export function PricingCard({ tier, duration, recommended }: PricingCardProps) {
  const discount = discountPercent(tier.originalPrice, tier.price);
  const highlight = Boolean(duration.featured && recommended);

  return (
    <div
      className={`relative flex h-full flex-col gap-6 rounded-3xl border bg-background-elevated p-8 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] sm:p-9 ${
        // The recommended/popular plan gets a strong red highlight; every other
        // card stays neutral gray until hovered, so red reads as an accent.
        highlight
          ? "border-2 border-aqua shadow-[0_8px_40px_rgba(227,6,19,0.25)] lg:scale-105"
          : recommended
            ? "border-aqua hover:border-aqua"
            : "border-border hover:border-aqua/50"
      }`}
    >
      {recommended ? (
        <span className="absolute left-1/2 top-0 z-10 w-max max-w-[88%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-aqua px-3.5 py-1.5 text-center text-[10px] font-bold uppercase leading-tight tracking-wide text-white shadow-[0_4px_16px_rgba(227,6,19,0.4)] sm:px-4 sm:text-xs">
          Unsere Empfehlung
        </span>
      ) : null}

      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{tier.label}</h3>
        <div className="mt-1 flex flex-col items-center gap-1">
          <span className="text-base text-muted line-through decoration-2">{tier.originalPrice}€</span>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-foreground">{tier.price}€</span>
            <span className="rounded-full bg-aqua px-2.5 py-1 text-xs font-bold text-white shadow-[0_2px_10px_rgba(227,6,19,0.35)]">
              -{discount}%
            </span>
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {pricingFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-muted">
            <CheckIcon className="text-aqua" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col items-center gap-4 pt-2">
        <ul className="flex flex-col items-center gap-1 text-xs text-muted">
          <li>✔ Termin meist innerhalb weniger Tage</li>
          <li>✔ Der Preis bleibt, wie er ist</li>
          <li>✔ Sichere Zahlungsabwicklung</li>
        </ul>

        <div className="flex w-full flex-col items-center gap-2">
          <Button href={tier.whatsappLink} external variant="primary" className="w-full">
            {recommended ? "Jetzt anfragen" : "Dieses Paket wählen"}
          </Button>
          <p className="text-xs text-muted">Zufriedenheitsgarantie für die Support-Leistung</p>
        </div>
      </div>
    </div>
  );
}
