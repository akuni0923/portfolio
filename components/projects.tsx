"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Locale, projects, t, uiText } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type ProjectsProps = {
  locale: Locale;
};

export function Projects({ locale }: ProjectsProps) {
  const [activeId, setActiveId] = useState(projects[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeProject = useMemo(() => projects.find((project) => project.id === activeId) ?? projects[0], [activeId]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={t(locale, uiText.projects.eyebrow)}
          title={t(locale, uiText.projects.title)}
          description={t(locale, uiText.projects.description)}
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {projects.map((project, index) => {
            const isActive = project.id === activeId;

            return (
              <Reveal key={project.id} delay={index * 0.08}>
                <motion.button
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                  className={`group w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-accent/55 bg-[linear-gradient(180deg,rgba(19,35,58,0.92),rgba(11,21,37,0.95))] shadow-glow"
                      : "border-line bg-panel hover:border-accent/25"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">{t(locale, project.title)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{t(locale, project.summary)}</p>
                    </div>
                    <ArrowUpRight className="mt-1 shrink-0 text-slate-400 transition-colors group-hover:text-accent" size={18} />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-line/80 bg-[#0c1526]/90 px-3 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="h-full rounded-2xl border border-line bg-panel p-6 shadow-soft">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id + locale}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, y: -8 }}
                transition={{ duration: 0.32 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent/85">{t(locale, uiText.projects.detail)}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-100">{t(locale, activeProject.title)}</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, uiText.projects.challenge)}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">{t(locale, activeProject.challenge)}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, uiText.projects.solution)}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">{t(locale, activeProject.solution)}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, uiText.projects.architecture)}</h4>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {activeProject.architecture.map((step, index) => (
                      <span key={step} className="rounded-full border border-line/70 bg-[#0b1220] px-3 py-1.5 text-xs text-slate-200">
                        {step}
                        {index < activeProject.architecture.length - 1 ? "  ->" : ""}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, uiText.projects.role)}</h4>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      {activeProject.role.map((item) => (
                        <li key={item.en} className="leading-relaxed">
                          {t(locale, item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, uiText.projects.features)}</h4>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      {activeProject.features.map((item) => (
                        <li key={item.en}>{t(locale, item)}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{t(locale, uiText.projects.notes)}</h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-300">
                    {activeProject.notes.map((item) => (
                      <li key={item.en}>{t(locale, item)}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
