"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type AppShellProps = {
  title: string;
  subtitle: string;
  items: Array<{
    label: string;
    href: string;
  }>;
  children: React.ReactNode;
  accent?: "portal" | "admin";
};

export function AppShell({
  title,
  subtitle,
  items,
  children,
  accent = "portal"
}: AppShellProps) {
  const pathname = usePathname();
  const accentClass =
    accent === "admin"
      ? "from-emerald-400 via-brand-500 to-cyan-400"
      : "from-brand-400 via-brand-500 to-violet-400";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-200 bg-slate-950 px-5 py-6 text-white">
          <Link href="/" className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4">
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-black text-white shadow-glow",
                accentClass
              )}
            >
              BN
            </span>
            <div>
              <p className="font-display text-lg font-bold">{title}</p>
              <p className="text-xs text-slate-400">{subtitle}</p>
            </div>
          </Link>

          <nav className="mt-8 space-y-2" aria-label={`${title} navigation`}>
            {items.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && item.href !== "/portal" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                    isActive
                      ? "bg-white text-slate-950"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "h-2.5 w-2.5 rounded-full",
                      isActive ? "bg-emerald-400" : "bg-white/15"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">System</p>
            <p className="mt-3 text-sm text-slate-300">
              Stripe-style subscription UX, email flows, analytics, and transaction views are all wired into this front-end architecture.
            </p>
          </div>
        </aside>

        <div className="flex flex-col">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-100/90 px-6 py-4 backdrop-blur xl:px-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                Updated Apr 02, 2026
              </div>
            </div>
          </header>
          <main className="flex-1 px-6 py-8 xl:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
