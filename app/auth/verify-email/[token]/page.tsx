import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/Button";
import { Panel } from "@/components/Panel";

type VerifyEmailPageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default async function VerifyEmailPage({ params }: VerifyEmailPageProps) {
  const { token } = await params;

  return (
    <AuthShell
      eyebrow="Verification"
      title="Verify email before billing, account recovery, and team access continue."
      description="This checkpoint protects purchase access, account recovery, and collaborative permissions without creating an intimidating step."
      asideTitle="Why verification matters"
      asideItems={[
        "Secures billing notifications and invoice delivery.",
        "Reduces account recovery friction later.",
        "Confirms invited teammates are joining the correct workspace."
      ]}
    >
      <Panel className="border-brand-200 bg-brand-50 shadow-none">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Token</p>
        <p className="mt-3 text-sm text-slate-700">{token}</p>
      </Panel>

      <div className="mt-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Email verified</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Your email is ready for login, billing reminders, password recovery, and purchase updates.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/portal" variant="secondary" className="justify-center sm:min-w-[220px]">
          Continue to portal
        </Button>
        <Button href="/auth/login" variant="ghost" className="justify-center bg-slate-950 text-white hover:bg-slate-800">
          Back to login
        </Button>
      </div>
    </AuthShell>
  );
}
