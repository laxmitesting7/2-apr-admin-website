import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { linkClickStats } from "@/lib/mock-data";

export default function AdminLinksPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Link click tracking"
        title="Monitor total clicks, unique clicks, click source, user attribution, and conversion after click."
        description="This module is built for attribution visibility across landing pages, in-product upgrade links, and transactional emails."
      />

      <div className="grid gap-5 xl:grid-cols-3">
        {linkClickStats.map((link) => (
          <Panel key={link.title}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{link.source}</p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-950">{link.title}</h2>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>Total clicks: {link.totalClicks}</p>
              <p>Unique clicks: {link.uniqueClicks}</p>
              <p>Conversion rate: {link.conversionRate}</p>
            </div>
          </Panel>
        ))}
      </div>

      <DataTable
        headings={["Link", "Total clicks", "Unique clicks", "Clicks by source", "Conversion"]}
        rows={linkClickStats.map((item) => [
          item.title,
          item.totalClicks,
          item.uniqueClicks,
          item.source,
          item.conversionRate
        ])}
      />
    </div>
  );
}
