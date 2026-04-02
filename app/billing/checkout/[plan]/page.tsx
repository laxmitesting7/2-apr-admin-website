import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";
import { StatusBadge } from "@/components/StatusBadge";
import { getPlanBySlug } from "@/lib/mock-data";

type BillingCheckoutPageProps = {
  params: Promise<{
    plan: string;
  }>;
};

export default async function BillingCheckoutPage({ params }: BillingCheckoutPageProps) {
  const { plan: planSlug } = await params;
  const plan = getPlanBySlug(planSlug);

  return (
    <div className="min-h-screen bg-slate-950 py-12 text-white">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Billing</p>
              <h1 className="mt-3 font-display text-5xl font-bold tracking-tight">
                Checkout for the {plan.name} plan
              </h1>
            </div>
            <StatusBadge status="trial" className="border-sky-400/20 bg-sky-400/10 text-sky-300" />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Panel tone="light">
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Account and payment</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Full name</span>
                  <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950" defaultValue="Ava Morgan" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Work email</span>
                  <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950" defaultValue="ava@northstar.ai" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Billing interval</span>
                  <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950" defaultValue="yearly">
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Team seats</span>
                  <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950" defaultValue={plan.slug === "team" ? "8" : "1"} />
                </label>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-semibold text-slate-700">Card number</span>
                  <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950" defaultValue="4242 4242 4242 4242" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Expiry</span>
                  <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950" defaultValue="12/29" />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/billing/success" variant="secondary">
                  Complete purchase
                </Button>
                <Button href="/pricing" variant="ghost" className="bg-slate-950 text-white hover:bg-slate-800">
                  Back to pricing
                </Button>
              </div>
            </Panel>

            <Panel tone="dark">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Order summary</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white">{plan.name}</h2>
              <p className="mt-4 text-slate-300">{plan.description}</p>
              <div className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Plan price</span>
                  <span className="font-semibold text-white">{plan.price}/month</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Yearly equivalent</span>
                  <span className="font-semibold text-white">{plan.yearlyPrice}/month</span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-slate-400">Next step</span>
                  <span className="font-semibold text-white">Welcome email + portal access</span>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </Container>
    </div>
  );
}
