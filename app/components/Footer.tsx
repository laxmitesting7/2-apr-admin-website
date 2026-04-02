import Link from "next/link";
import { Container } from "@/components/Container";

type FooterProps = {
  links: ReadonlyArray<{
    label: string;
    href: string;
  }>;
};

export function Footer({ links }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12 text-white">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-xl font-bold">BrandName</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Screen recording and editing SaaS for product demos, tutorials, onboarding, support,
            internal training, and social-ready clips.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-400">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/pricing" className="transition hover:text-white">
            Pricing
          </Link>
          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}
