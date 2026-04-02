import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { StatusBadge } from "@/components/StatusBadge";
import { emailLog, emailTemplates } from "@/lib/mock-data";

export default function AdminEmailsPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Email and notification logs"
        title="Track transactional delivery, failures, triggers, and resend options."
        description="Internal teams should be able to confirm welcome emails, payment emails, failures, and queue state without leaving the admin panel."
      />

      <div className="grid gap-5 xl:grid-cols-3">
        {emailTemplates.map((template) => (
          <Panel key={template.slug}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{template.subject}</p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-950">{template.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{template.preview}</p>
          </Panel>
        ))}
      </div>

      <DataTable
        headings={["Template", "Recipient", "Status", "Sent at", "Trigger", "Action"]}
        rows={emailLog.map((email) => [
          email.template,
          email.recipient,
          <StatusBadge key={`${email.template}-status`} status={email.status} />,
          email.sentAt,
          email.trigger,
          <a key={`${email.template}-action`} href="/admin/emails" className="font-medium text-brand-700">
            Resend
          </a>
        ])}
      />
    </div>
  );
}
