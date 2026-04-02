import Image from "next/image";
import { Button } from "@/components/Button";
import { MetricCard } from "@/components/MetricCard";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { StatusBadge } from "@/components/StatusBadge";
import { customerMetrics, demoCustomer, recentActivity } from "@/lib/mock-data";

export default function PortalDashboardPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Dashboard"
        title={`Welcome back, ${demoCustomer.fullName}.`}
        description="This dashboard keeps plan status, renewal timing, quick actions, usage, and recent activity above the fold so customers can self-serve without support friction."
        actions={
          <>
            <Button href="/portal/subscription" variant="secondary">
              Manage subscription
            </Button>
            <Button href="/portal/access" variant="ghost" className="bg-slate-950 text-white hover:bg-slate-800">
              Open access guide
            </Button>
          </>
        }
      />

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel className="overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="bg-slate-950 px-8 py-8 text-white">
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge
                  status="active"
                  className="border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                />
                <span className="text-sm text-slate-400">{demoCustomer.planName} yearly</span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight">
                Keep recording, refining, and publishing without losing billing visibility.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Current plan renews on {demoCustomer.renewalDate}. Billing contact is{" "}
                {demoCustomer.billingContact}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/portal/transactions" variant="primary">
                  View invoices
                </Button>
                <Button href="/portal/account" variant="ghost">
                  Update account
                </Button>
              </div>
            </div>
            <div className="relative min-h-[280px] bg-slate-100">
              <Image
                src="/images/portal-preview.svg"
                alt="Customer portal preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Panel>

        <Panel>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quick actions
          </p>
          <div className="mt-5 space-y-3">
            {[
              "Download app build",
              "Generate shareable link",
              "Upgrade to Team",
              "Contact support"
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <span className="font-medium text-slate-900">{item}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {customerMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} hint={metric.hint} />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <Panel>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Usage summary
          </p>
          <div className="mt-6 space-y-4">
            {[
              { label: "Branded presets applied", value: "76%" },
              { label: "Links clicked", value: "64%" },
              { label: "Exports in 4K", value: "82%" }
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">{item.label}</span>
                  <span className="font-semibold text-slate-900">{item.value}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-400"
                    style={{ width: item.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Recent activity
          </p>
          <div className="mt-6 space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.title}
                className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <div>
                  <p className="font-semibold text-slate-950">{activity.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{activity.type}</p>
                </div>
                <p className="text-sm text-slate-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
