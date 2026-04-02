import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

type AuthShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  asideTitle: string;
  asideItems: string[];
};

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  asideTitle,
  asideItems
}: AuthShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 pb-16 pt-10 text-white">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 via-brand-500 to-emerald-400 text-sm font-black text-white shadow-glow">
              BN
            </span>
            <div>
              <p className="font-display text-lg font-bold tracking-tight text-white">BrandName</p>
              <p className="text-xs text-white/50">Record once. Polish quickly. Publish everywhere.</p>
            </div>
          </Link>
          <Button href="/pricing" variant="ghost">
            View pricing
          </Button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-panel">
            <Badge>{eyebrow}</Badge>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{description}</p>

            <div className="mt-10 rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm font-semibold text-white">{asideTitle}</p>
              <ul className="mt-5 space-y-4">
                {asideItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white p-8 text-slate-950 shadow-glow">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
