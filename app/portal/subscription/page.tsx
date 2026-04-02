import { Button } from "@/components/Button";
import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { StatusBadge } from "@/components/StatusBadge";
import { demoCustomer, subscriptionTimeline } from "@/lib/mock-data";
import { pricingPlans } from "@/lib/site-content";

export default function PortalSubscriptionPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Subscription and billing"
        title="Upgrade, downgrade, cancel, reactivate, and review billing state."
        description="The billing experience needs clear badges, invoice impact context, and reversible destructive actions wherever possible."
      />

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <Panel>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">Current plan</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950">
                {demoCustomer.planName} {demoCustomer.interval}
              </h2>
            </div>
            <StatusBadge status="active" />
          </div>

          <div className="mt-6 space-y-4">
            {subscriptionTimeline.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <span className="text-sm text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-950">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/billing/checkout/team" variant="secondary">
              Upgrade plan
            </Button>
            <Button href="/billing/checkout/starter" variant="ghost" className="bg-slate-950 text-white hover:bg-slate-800">
              Downgrade plan
            </Button>
            <Button href="/billing/failed" variant="ghost" className="bg-rose-600 text-white hover:bg-rose-500">
              Cancel subscription
            </Button>
          </div>
        </Panel>

        <Panel>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Plan comparison</h2>
          <div className="mt-6 space-y-4">
            {pricingPlans.map((plan) => (
              <div key={plan.slug} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{plan.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{plan.description}</p>
                  </div>
                  <p className="font-display text-3xl font-bold text-slate-950">{plan.price}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <DataTable
        headings={["Plan state", "Description", "Recommended UX"]}
        rows={[
          ["Active", "Customer has current access and good standing.", "Show manage plan, invoices, and upgrade action."],
          ["Trial", "Customer is evaluating before first paid renewal.", "Highlight renewal date and conversion CTA."],
          ["Past due", "A payment failed and retry is required.", "Emphasize retry payment and contact support."],
          ["Canceled", "Plan is set to end or already ended.", "Offer reactivation until access ends."],
          ["Expired", "Access has ended after cancellation or failed renewal.", "Route to new checkout or reactivation flow."]
        ]}
      />
    </div>
  );
}
