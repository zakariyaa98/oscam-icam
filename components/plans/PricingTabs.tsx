import { PricingCard } from "@/components/plans/PricingCard";
import { pricingDurations } from "@/lib/plans";

// Simple, tab-free pricing grid: one clean card per support package, showing its
// lowest ("bereits ab") price. All packages, prices and features come from
// lib/plans.ts unchanged.
export function PricingTabs() {
  return (
    <div className="grid w-full items-start gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
      {pricingDurations.map((duration) => (
        <PricingCard
          key={duration.id}
          tier={duration.tiers[0]}
          duration={duration}
          recommended={duration.featured}
        />
      ))}
    </div>
  );
}
