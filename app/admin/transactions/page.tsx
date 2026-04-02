import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { StatusBadge } from "@/components/StatusBadge";
import { adminTransactions } from "@/lib/mock-data";

export default function AdminTransactionsPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Transaction management"
        title="Review invoice status, payment methods, failures, and exports."
        description="Admins need precise payment visibility with quick export paths and a clear route into individual transaction detail."
      />

      <DataTable
        headings={["Invoice", "Customer", "Amount", "Payment method", "Status", "Date", "Detail"]}
        rows={adminTransactions.map((transaction) => [
          transaction.invoice,
          transaction.customer,
          transaction.amount,
          transaction.method,
          <StatusBadge key={`${transaction.id}-status`} status={transaction.status} />,
          transaction.date,
          <Link key={`${transaction.id}-link`} href={`/admin/transactions/${transaction.id}`} className="font-medium text-brand-700">
            Open
          </Link>
        ])}
      />
    </div>
  );
}
