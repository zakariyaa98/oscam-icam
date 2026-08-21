import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { homeFeatures, type FeaturedPlan } from "@/lib/plans";

type FeaturedPlanCardProps = {
  plan: FeaturedPlan;
};

export function FeaturedPlanCard({ plan }: FeaturedPlanCardProps) {
  return (
    <div
      className={`relative flex h-full flex-col gap-7 rounded-3xl border bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] sm:p-9 ${
        // This card sits on a white surface, so the border uses "aqua-dim" — the
        // same blue family, tuned dark enough to read clearly against white.
        plan.featured
          ? "border-2 border-aqua-dim shadow-[0_8px_40px_rgba(26,159,255,0.25)] lg:scale-105"
          : "border-black/10 hover:border-aqua-dim/50"
      }`}
    >
      {plan.badge ? (
        <span className="absolute left-1/2 top-0 z-10 w-max max-w-[88%] -translate-x-1/2 -translate-y-1/2 whitespace-normal text-balance rounded-full bg-aqua px-3.5 py-1.5 text-center text-[10px] font-bold uppercase leading-tight tracking-wide text-black shadow-[0_4px_16px_rgba(26,159,255,0.4)] sm:px-4 sm:text-xs">
          {plan.badge}
        </span>
      ) : null}

      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-lg font-semibold uppercase tracking-wide text-[#4b5563]">{plan.duration}</h3>
        <p className="text-xs uppercase tracking-widest text-[#6b7280]">bereits ab</p>
        <p className="text-5xl font-bold text-[#111111]">{plan.price}</p>
      </div>

      <ul className="flex flex-col gap-3">
        {homeFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-[#4b5563]">
            <CheckIcon className="text-aqua-dim" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button href="/plans" variant={plan.featured ? "primary" : "outline-dark"} className="mt-auto w-full">
        Details ansehen
      </Button>
    </div>
  );
}
