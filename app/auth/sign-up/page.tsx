import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/Button";

export default function SignUpPage() {
  return (
    <AuthShell
      eyebrow="Authentication"
      title="Start your BrandName workspace with a premium onboarding flow."
      description="Create your account, choose the right plan, and move from checkout to customer portal without friction."
      asideTitle="Included in the first-time flow"
      asideItems={[
        "Successful purchase creates the account and sends a welcome email.",
        "Users can set a password, verify email, and land directly in the dashboard onboarding state.",
        "Starter, Pro, and Team plans support monthly or yearly billing."
      ]}
    >
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Create account</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Start with a 14-day free trial or continue to paid checkout with Stripe-style subscription setup.
        </p>
      </div>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Full name</span>
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="Ava Morgan" />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Company name</span>
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="Northstar AI" />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Work email</span>
            <input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="ava@northstar.ai" />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Plan</span>
            <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="pro">
              <option value="starter">Starter</option>
              <option value="pro">Pro</option>
              <option value="team">Team</option>
            </select>
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Password</span>
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="temporary-password" />
        </label>

        <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          After purchase, the user receives a welcome email with account details, login instructions, and a password setup link if required.
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/billing/checkout/pro" variant="secondary" className="justify-center sm:min-w-[220px]">
            Continue to checkout
          </Button>
          <Button href="/auth/login" variant="ghost" className="justify-center bg-slate-950 text-white hover:bg-slate-800">
            Already have an account
          </Button>
        </div>
      </form>
    </AuthShell>
  );
}
