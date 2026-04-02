import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { StatusBadge } from "@/components/StatusBadge";
import { adminUsers, transactionHistory } from "@/lib/mock-data";

type AdminUserDetailPageProps = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function AdminUserDetailPage({ params }: AdminUserDetailPageProps) {
  const { userId } = await params;
  const user = adminUsers.find((entry) => entry.id === userId) ?? adminUsers[0];

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="User detail"
        title={`${user.name} account overview`}
        description="Operators can review account creation, plan state, billing history, activity, and link interaction from one page."
      />

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <Panel>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">{user.email}</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950">
                {user.plan} plan
              </h2>
            </div>
            <StatusBadge status={user.status} />
          </div>
          <div className="mt-6 space-y-4">
            {[
              ["Account created", user.createdAt],
              ["Last login", user.lastLogin],
              ["Workspace role", "Owner"],
              ["Link clicks", "184 total / 91 unique"]
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <span className="text-sm text-slate-500">{label}</span>
                <span className="font-semibold text-slate-950">{value}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">
            Recent billing activity
          </h2>
          <div className="mt-6 space-y-4">
            {transactionHistory.slice(0, 3).map((transaction) => (
              <div key={transaction.invoice} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-slate-950">{transaction.invoice}</p>
                  <StatusBadge status={transaction.status} />
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  {transaction.plan} • {transaction.amount} • {transaction.date}
                </p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
