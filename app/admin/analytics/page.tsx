import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { adminChartSeries, linkClickStats } from "@/lib/mock-data";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Analytics"
        title="Track signups, conversion, revenue, cancellations, and plan distribution."
        description="The analytics view pairs charts with exact values so operators can move from trend detection to action without leaving the page."
      />

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Purchase funnel</h2>
          <div className="mt-8 space-y-4">
            {[
              ["Landing page visits", "34,200", "100%"],
              ["Pricing clicks", "9,130", "26.7%"],
              ["Checkout starts", "4,082", "11.9%"],
              ["Paid conversions", "1,924", "5.6%"]
            ].map(([label, value, width]) => (
              <div key={label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">{label}</span>
                  <span className="font-semibold text-slate-950">{value}</span>
                </div>
                <div className="mt-3 h-3 rounded-full bg-slate-100">
                  <div className="h-3 rounded-full bg-gradient-to-r from-brand-500 to-emerald-400" style={{ width }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Revenue trend</h2>
          <div className="mt-8 flex items-end gap-4">
            {adminChartSeries.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-[20px] bg-brand-500" style={{ height: `${point.revenue / 1200}px` }} />
                <p className="text-sm font-semibold text-slate-700">{point.label}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <DataTable
        headings={["Top clicked links", "Total clicks", "Unique clicks", "Conversion", "Source"]}
        rows={linkClickStats.map((item) => [
          item.title,
          item.totalClicks,
          item.uniqueClicks,
          item.conversionRate,
          item.source
        ])}
      />
    </div>
  );
}
