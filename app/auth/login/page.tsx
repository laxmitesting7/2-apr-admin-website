import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/Button";

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Authentication"
      title="Log in to BrandName and continue editing, exporting, and managing billing."
      description="This screen is optimized for fast return access with clear recovery routes for reset, verification, and support."
      asideTitle="Login UX priorities"
      asideItems={[
        "Minimal form with support for email verification resend and forgot password.",
        "First-time buyers can enter through the welcome email login link.",
        "Successful login lands the customer in the portal dashboard."
      ]}
    >
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Welcome back</h2>
        <p className="mt-3 text-sm text-slate-600">Use your account email and password to access the portal.</p>
      </div>

      <form className="mt-8 space-y-5">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Email</span>
          <input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="ava@northstar.ai" />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Password</span>
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400" defaultValue="temporary-password" />
        </label>

        <div className="flex items-center justify-between gap-3 text-sm">
          <a href="/auth/forgot-password" className="font-medium text-brand-700">
            Forgot password
          </a>
          <a href="/auth/verify-email/demo-token" className="font-medium text-slate-500">
            Resend verification
          </a>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/portal" variant="secondary" className="justify-center sm:min-w-[220px]">
            Log in
          </Button>
          <Button href="/auth/sign-up" variant="ghost" className="justify-center bg-slate-950 text-white hover:bg-slate-800">
            Create account
          </Button>
        </div>
      </form>
    </AuthShell>
  );
}
