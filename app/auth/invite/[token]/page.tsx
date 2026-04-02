import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/Button";
import { StatusBadge } from "@/components/StatusBadge";

type InvitePageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default async function InvitePage({ params }: InvitePageProps) {
  const { token } = await params;

  return (
    <AuthShell
      eyebrow="Invitation"
      title="Invite teammates into the workspace with clear plan context and access expectations."
      description="Invitation UX should explain which workspace the user is joining, their seat access, and any pending setup required before first login."
      asideTitle="Invitation flow details"
      asideItems={[
        "Show company name, inviter, plan, and seat permissions before acceptance.",
        "Route new teammates to password creation if they do not have an account yet.",
        "Apply accepted invitations directly to the portal workspace."
      ]}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">Join Northstar AI</h2>
          <p className="mt-3 text-sm text-slate-600">Invitation token: {token}</p>
        </div>
        <StatusBadge status="trial" />
      </div>

      <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm text-slate-600">Invited by</p>
        <p className="mt-2 text-lg font-semibold text-slate-950">Ava Morgan</p>
        <p className="mt-4 text-sm text-slate-600">Plan access</p>
        <p className="mt-2 text-lg font-semibold text-slate-950">Team seat with branded presets, exports, and shared layouts</p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/auth/create-password/demo-token" variant="secondary" className="justify-center sm:min-w-[220px]">
          Accept invitation
        </Button>
        <Button href="/auth/login" variant="ghost" className="justify-center bg-slate-950 text-white hover:bg-slate-800">
          Use existing account
        </Button>
      </div>
    </AuthShell>
  );
}
