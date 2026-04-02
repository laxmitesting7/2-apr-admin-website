import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "light" | "dark";
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  tone = "light"
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 sm:py-28",
        tone === "light" ? "bg-white text-slate-900" : "bg-slate-950 text-white",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
