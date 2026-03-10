import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 max-w-3xl space-y-3 md:mb-12">
      <p className="text-xs uppercase tracking-[0.24em] text-accent/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>
    </header>
  );
}
