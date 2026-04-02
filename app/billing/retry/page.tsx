import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";

export default function BillingRetryPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12 text-white">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Panel tone="light">
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-950">
              Retry your payment and restore active status.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              This flow supports failed payment recovery, card updates, and reactivation after a payment lapse.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Card number</span>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950" defaultValue="4000 0566 5566 5556" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Expiry date</span>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950" defaultValue="08/30" />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/billing/success" variant="secondary">
                Retry and pay invoice
              </Button>
              <Button href="/portal/subscription" variant="ghost" className="bg-slate-950 text-white hover:bg-slate-800">
                Back to subscription
              </Button>
            </div>
          </Panel>
        </div>
      </Container>
    </div>
  );
}
