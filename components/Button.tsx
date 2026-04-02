import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-white text-slate-950 hover:bg-slate-100 shadow-[0_12px_24px_rgba(255,255,255,0.12)]",
  secondary:
    "bg-brand-500 text-white hover:bg-brand-400 shadow-[0_12px_30px_rgba(37,99,235,0.28)]",
  ghost: "bg-transparent text-white ring-1 ring-white/15 hover:bg-white/5"
};

export function Button({
  children,
  href,
  className,
  variant = "primary"
}: ButtonProps) {
  const baseClassName = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClassName}>
        {children}
      </Link>
    );
  }

  return <button className={baseClassName}>{children}</button>;
}
