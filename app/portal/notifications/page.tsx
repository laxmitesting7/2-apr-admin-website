import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { StatusBadge } from "@/components/StatusBadge";
import { emailLog, notificationFeed } from "@/lib/mock-data";

export default function PortalNotificationsPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Notifications and emails"
        title="Billing reminders, subscription updates, and sent email history."
        description="Customers should be able to review important notifications and confirm which transactional emails have already been sent."
      />

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <Panel>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Notification feed</h2>
          <div className="mt-6 space-y-4">
            {notificationFeed.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-slate-950">{item.title}</p>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                {!item.read ? <StatusBadge status="active" className="mt-4" /> : null}
              </div>
            ))}
          </div>
        </Panel>

        <DataTable
          headings={["Template", "Recipient", "Status", "Sent at", "Trigger"]}
          rows={emailLog.map((email) => [
            <span key={`${email.template}-template`} className="font-semibold text-slate-950">
              {email.template}
            </span>,
            email.recipient,
            <StatusBadge key={`${email.template}-status`} status={email.status} />,
            email.sentAt,
            email.trigger
          ])}
        />
      </div>
    </div>
  );
}
