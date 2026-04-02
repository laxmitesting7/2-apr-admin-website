"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

type HeaderProps = {
  links: ReadonlyArray<{
    label: string;
    href: string;
  }>;
};

export function Header({ links }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex min-h-[84px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 via-brand-500 to-emerald-400 text-sm font-black text-white shadow-glow">
            BN
          </span>
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-white">BrandName</p>
            <p className="text-xs text-white/50">Screen recording and editing SaaS</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/auth/login" variant="ghost">
            Sign in
          </Button>
          <Button href="/auth/sign-up" variant="secondary">
            Start free trial
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-3 text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-slate-950/95 lg:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-5 py-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Button href="/auth/login" variant="ghost" className="justify-center">
              Sign in
            </Button>
            <Button href="/auth/sign-up" variant="secondary" className="justify-center">
              Start free trial
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
