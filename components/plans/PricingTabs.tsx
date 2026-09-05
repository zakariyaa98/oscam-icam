import { FeaturedPlanCard } from "@/components/plans/FeaturedPlanCard";
import { featuredPlans } from "@/lib/plans";

// Same clean pricing table as the home page (PlansPreview): one card per plan
// from lib/plans.ts, no tabs. Prices and plans come from the project data
// unchanged; feature list is the project's own homeFeatures.
export function PricingTabs() {
  return (
    <div className="grid w-full items-start gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-4">
      {featuredPlans.map((plan) => (
        <FeaturedPlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}
