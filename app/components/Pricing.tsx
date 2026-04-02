import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

type Plan = {
  slug?: string;
  name: string;
  price: string;
  yearlyPrice?: string;
  description: string;
  features: ReadonlyArray<string>;
  highlight?: boolean;
};

type PricingProps = {
  plans: ReadonlyArray<Plan>;
};

export function Pricing({ plans }: PricingProps) {
  return (
    <Section id="pricing" tone="light">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <Badge tone="light">Pricing teaser</Badge>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Paid plans for solo creators, fast-moving teams, and orgs that need consistent video at scale.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-slate-600">
          Monthly and yearly billing supported. Secure subscription management, invoices, plan
          changes, and billing history live in the customer portal.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "rounded-[32px] border p-8",
              plan.highlight
                ? "border-brand-500 bg-slate-950 text-white shadow-glow"
                : "border-slate-200 bg-slate-50 text-slate-950"
            )}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-400">
              {plan.name}
            </p>
            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-5xl font-bold">{plan.price}</span>
              <span className={plan.highlight ? "text-slate-400" : "text-slate-500"}>/month</span>
            </div>
            {plan.yearlyPrice ? (
              <p className={cn("mt-2 text-sm", plan.highlight ? "text-slate-400" : "text-slate-500")}>
                or {plan.yearlyPrice}/month billed annually
              </p>
            ) : null}
            <p className={cn("mt-4 leading-7", plan.highlight ? "text-slate-300" : "text-slate-600")}>
              {plan.description}
            </p>
            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={cn(
                    "flex items-start gap-3 text-sm",
                    plan.highlight ? "text-slate-200" : "text-slate-700"
                  )}
                >
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              href={`/billing/checkout/${plan.slug ?? plan.name.toLowerCase()}`}
              variant={plan.highlight ? "primary" : "secondary"}
              className="mt-8 w-full justify-center"
            >
              Choose {plan.name}
            </Button>
          </article>
        ))}
      </div>
    </Section>
  );
}
