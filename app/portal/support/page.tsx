import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { supportChannels } from "@/lib/mock-data";
import { faqItems } from "@/lib/site-content";

export default function PortalSupportPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Support"
        title="Contact support, browse help, and resolve billing or access issues quickly."
        description="A premium SaaS support area should combine self-serve content with clear escalation routes for billing, onboarding, and subscription problems."
        actions={
          <Button href="/contact" variant="secondary">
            Contact support
          </Button>
        }
      />

      <div className="grid gap-5 xl:grid-cols-3">
        {supportChannels.map((channel) => (
          <Panel key={channel.title}>
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">{channel.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{channel.description}</p>
          </Panel>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {faqItems.map((item) => (
          <Panel key={item.question}>
            <h2 className="text-lg font-semibold text-slate-950">{item.question}</h2>
            <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
          </Panel>
        ))}
      </div>
    </div>
  );
}
