import { activities, Locale, t, uiText } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type ActivitiesProps = {
  locale: Locale;
};

export function Activities({ locale }: ActivitiesProps) {
  return (
    <section id="activities" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={t(locale, uiText.activities.eyebrow)}
          title={t(locale, uiText.activities.title)}
          description={t(locale, uiText.activities.description)}
        />
      </Reveal>

      <div className="space-y-4">
        {activities.map((group, index) => (
          <Reveal key={group.title.en} delay={index * 0.06}>
            <article className="rounded-2xl border border-line bg-panel p-5 shadow-soft">
              <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, group.title)}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.entries.map((entry) => (
                  <li key={entry.en} className="rounded-full bg-[#0a1322] px-3 py-1.5 text-sm text-slate-200">
                    {t(locale, entry)}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
