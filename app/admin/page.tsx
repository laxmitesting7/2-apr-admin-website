import Image from "next/image";
import { DataTable } from "@/components/DataTable";
import { MetricCard } from "@/components/MetricCard";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { adminChartSeries, adminMetrics, adminTransactions, adminUsers } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Admin dashboard"
        title="Revenue, subscriptions, signups, failed payments, and churn in one operating view."
        description="This overview is optimized for fast operator scanning: metric cards first, then trends, then the latest users and transactions."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {adminMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} hint={metric.hint} />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Revenue and signup trend
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950">
              Last 4 months
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {adminChartSeries.map((point) => (
              <div key={point.label} className="flex flex-col items-center gap-4">
                <div className="flex h-48 items-end gap-2">
                  <div className="w-4 rounded-full bg-brand-500" style={{ height: `${point.signups / 4}px` }} />
                  <div className="w-4 rounded-full bg-emerald-400" style={{ height: `${point.revenue / 1200}px` }} />
                  <div className="w-4 rounded-full bg-slate-300" style={{ height: `${point.cancellations * 5}px` }} />
                </div>
                <p className="text-sm font-semibold text-slate-700">{point.label}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="overflow-hidden p-0">
          <div className="relative min-h-[360px]">
            <Image src="/images/admin-preview.svg" alt="Admin analytics preview" fill className="object-cover" />
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <DataTable
          headings={["Recent signups", "Plan", "Created", "Last login"]}
          rows={adminUsers.map((user) => [user.name, user.plan, user.createdAt, user.lastLogin])}
        />
        <DataTable
          headings={["Recent transactions", "Customer", "Amount", "Status"]}
          rows={adminTransactions.map((transaction) => [
            transaction.invoice,
            transaction.customer,
            transaction.amount,
            transaction.status
          ])}
        />
      </div>
    </div>
  );
}
