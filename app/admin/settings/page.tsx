import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Admin settings"
        title="Billing, email, tracking, and export defaults."
        description="This settings area groups internal configuration for subscription handling, analytics windows, and notification behavior."
      />

      <div className="grid gap-5 xl:grid-cols-3">
        {[
          {
            title: "Billing integrations",
            description: "Stripe keys, webhook health, retry policy, and invoice export defaults."
          },
          {
            title: "Email operations",
            description: "Template ownership, resend permissions, sender domains, and failure queue routing."
          },
          {
            title: "Tracking and analytics",
            description: "Date range defaults, attribution windows, CSV exports, and click deduplication rules."
          }
        ].map((item) => (
          <Panel key={item.title}>
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">{item.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
          </Panel>
        ))}
      </div>
    </div>
  );
}
