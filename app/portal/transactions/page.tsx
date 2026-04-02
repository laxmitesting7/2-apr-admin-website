import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { StatusBadge } from "@/components/StatusBadge";
import { transactionHistory } from "@/lib/mock-data";

export default function PortalTransactionsPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Transaction history"
        title="Invoices, billing dates, plan history, and payment status."
        description="User-side billing history should stay dense but readable, with status badges and clear invoice download affordances."
      />

      <DataTable
        headings={["Invoice", "Date", "Plan purchased", "Amount", "Status", "Action"]}
        rows={transactionHistory.map((transaction) => [
          <span key={`${transaction.invoice}-invoice`} className="font-semibold text-slate-950">
            {transaction.invoice}
          </span>,
          transaction.date,
          transaction.plan,
          transaction.amount,
          <StatusBadge key={`${transaction.invoice}-status`} status={transaction.status} />,
          <a key={`${transaction.invoice}-action`} href="/portal/subscription" className="font-medium text-brand-700">
            Download invoice
          </a>
        ])}
      />
    </div>
  );
}
