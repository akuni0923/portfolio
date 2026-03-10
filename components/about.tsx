import { Locale, profile, t, uiText } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={t(locale, uiText.about.eyebrow)}
          title={t(locale, uiText.about.title)}
          description={t(locale, uiText.about.description)}
        />
      </Reveal>

      <Reveal delay={0.1} className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-line bg-panel p-6 shadow-soft">
          <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, uiText.about.education)}</h3>
          <p className="mt-3 text-base text-slate-100">{t(locale, profile.school)}</p>
          <p className="mt-2 text-sm text-slate-300">
            {t(locale, uiText.about.major)}: {t(locale, profile.major)}
          </p>
          <p className="mt-1 text-sm text-slate-400">{t(locale, profile.graduation)}</p>
        </article>

        <article className="rounded-2xl border border-line bg-panel p-6 shadow-soft md:col-span-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, uiText.about.direction)}</h3>
          <p className="mt-3 leading-relaxed text-slate-200">{t(locale, uiText.about.directionText)}</p>
        </article>
      </Reveal>
    </section>
  );
}
