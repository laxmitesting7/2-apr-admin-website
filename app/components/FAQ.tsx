"use client";

import { useState } from "react";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: ReadonlyArray<FAQItem>;
};

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Section id="faq" tone="light">
      <div className="max-w-3xl">
        <Badge tone="light">FAQ</Badge>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Clear answers for teams evaluating recording, editing, billing, and rollout.
        </h2>
      </div>

      <div className="mt-14 space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="text-lg font-semibold text-slate-950">{item.question}</span>
                <span
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-2xl border transition",
                    isOpen
                      ? "border-brand-200 bg-brand-50 text-brand-700"
                      : "border-slate-200 bg-slate-50 text-slate-500"
                  )}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={cn("h-5 w-5 transition", isOpen && "rotate-45")}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {isOpen ? (
                <div className="px-6 pb-6">
                  <p className="max-w-4xl leading-7 text-slate-600">{item.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
