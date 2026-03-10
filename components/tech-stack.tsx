import { Locale, t, techStack, uiText } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type TechStackProps = {
  locale: Locale;
};

export function TechStack({ locale }: TechStackProps) {
  return (
    <section id="tech" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={t(locale, uiText.tech.eyebrow)}
          title={t(locale, uiText.tech.title)}
          description={t(locale, uiText.tech.description)}
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, index) => (
          <Reveal key={group.title.en} delay={index * 0.05}>
            <article className="rounded-2xl border border-line bg-panel p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:border-accent/30">
              <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, group.title)}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line/80 bg-[#0c1526]/90 px-3 py-1 text-xs text-slate-200 transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
