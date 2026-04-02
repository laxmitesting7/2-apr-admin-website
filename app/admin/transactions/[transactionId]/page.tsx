import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { StatusBadge } from "@/components/StatusBadge";
import { adminTransactions } from "@/lib/mock-data";

type AdminTransactionDetailPageProps = {
  params: Promise<{
    transactionId: string;
  }>;
};

export default async function AdminTransactionDetailPage({
  params
}: AdminTransactionDetailPageProps) {
  const { transactionId } = await params;
  const transaction =
    adminTransactions.find((entry) => entry.id === transactionId) ?? adminTransactions[0];

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Transaction detail"
        title={`${transaction.invoice} payment record`}
        description="The detail view surfaces processor metadata, customer context, invoice status, and recovery actions for failures."
      />

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <Panel>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">{transaction.customer}</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950">{transaction.amount}</h2>
            </div>
            <StatusBadge status={transaction.status} />
          </div>
          <div className="mt-6 space-y-4">
            {[
              ["Payment method", transaction.method],
              ["Date", transaction.date],
              ["Processor reference", transaction.id],
              ["Billing interval", "Yearly"]
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span className="text-sm text-slate-500">{label}</span>
                <span className="font-semibold text-slate-950">{value}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Operator actions</h2>
          <div className="mt-6 space-y-4">
            {[
              "Export transaction history",
              "Resend invoice email",
              "Review failed payment recovery",
              "Open customer record"
            ].map((action) => (
              <div key={action} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-900">
                {action}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
