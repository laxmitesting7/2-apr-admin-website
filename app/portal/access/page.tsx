import { Button } from "@/components/Button";
import { DataTable } from "@/components/DataTable";
import { PageIntro } from "@/components/PageIntro";
import { Panel } from "@/components/Panel";
import { accessModules, appFeatureMatrix, demoCustomer } from "@/lib/mock-data";

export default function PortalAccessPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Usage and access"
        title="Software access instructions, download paths, and plan entitlements."
        description="This screen explains how to activate the app, which features are available by plan, and how to hand off shared standards across the workspace."
        actions={
          <Button href={demoCustomer.downloadUrl} variant="secondary">
            Download latest build
          </Button>
        }
      />

      <div className="grid gap-5 xl:grid-cols-3">
        {accessModules.map((module) => (
          <Panel key={module.title}>
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">{module.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{module.description}</p>
          </Panel>
        ))}
      </div>

      <DataTable
        headings={["Feature", "Starter", "Pro", "Team"]}
        rows={appFeatureMatrix.map((item) => [item.feature, item.starter, item.pro, item.team])}
      />
    </div>
  );
}
