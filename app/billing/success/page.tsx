import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";

export default function BillingSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12 text-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Panel tone="dark" className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Payment successful</p>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-white">
              Your BrandName account is ready.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              A welcome email and purchase confirmation email have been sent with account details,
              a login link, billing summary, and next steps.
            </p>
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
              {[
                "Account created",
                "Welcome email sent",
                "Portal access unlocked"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/portal" variant="secondary">
                Open customer portal
              </Button>
              <Button href="/auth/create-password/demo-token" variant="ghost">
                Set password
              </Button>
            </div>
          </Panel>
        </div>
      </Container>
    </div>
  );
}
