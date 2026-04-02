import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { StatusBadge } from "@/components/StatusBadge";
import { adminUsers } from "@/lib/mock-data";

export default function AdminSubscriptionsPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Subscription management"
        title="Monitor active subscriptions, cancellations, upgrades, downgrades, and expirations."
        description="This view gives finance and support teams a direct operating surface for plan-state analysis and intervention."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Active subscriptions", "4,412"],
          ["Canceled subscriptions", "91"],
          ["Past due", "42"],
          ["Upgrades this month", "184"]
        ].map(([label, value]) => (
          <Panel key={label}>
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950">{value}</p>
          </Panel>
        ))}
      </div>

      <DataTable
        headings={["Customer", "Plan", "Status", "Change summary", "Renewal"]}
        rows={adminUsers.map((user) => [
          user.name,
          user.plan,
          <StatusBadge key={`${user.id}-status`} status={user.status} />,
          user.status === "canceled" ? "Cancellation requested" : "No pending change",
          "May 02, 2026"
        ])}
      />
    </div>
  );
}
