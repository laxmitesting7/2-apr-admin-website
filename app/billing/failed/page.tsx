import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";

export default function BillingFailedPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12 text-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Panel tone="dark">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Payment issue</p>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-white">
              The payment did not go through.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Show a clear failed-payment state, explain the billing status, and keep the retry
              path one click away.
            </p>
            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
              Billing status: past due. The invoice remains open until payment succeeds or the retry window closes.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/billing/retry" variant="secondary">
                Retry payment
              </Button>
              <Button href="/contact" variant="ghost">
                Contact billing support
              </Button>
            </div>
          </Panel>
        </div>
      </Container>
    </div>
  );
}
