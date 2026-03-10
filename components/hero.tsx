"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { contact, Locale, profile, t, uiText } from "@/lib/data";
import { HeroCanvas } from "@/components/hero-canvas";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 opacity-90">
        <HeroCanvas />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b12]/40 via-[#070b12]/70 to-[#070b12]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 py-24 md:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-accent/85">{t(locale, uiText.hero.eyebrow)}</p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
            {profile.name}
            <span className="block text-xl font-normal text-slate-300 sm:text-2xl md:mt-2">{t(locale, profile.tagline)}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t(locale, profile.focus)} {t(locale, profile.mission)}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-medium text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t(locale, uiText.hero.viewProjects)} <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-6 py-3 text-sm font-medium text-slate-100 transition-all hover:-translate-y-0.5 hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t(locale, uiText.hero.contactMe)}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              aria-label={t(locale, uiText.hero.githubAria)}
            >
              <Github size={16} /> {contact.githubLabel}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              aria-label={t(locale, uiText.hero.emailAria)}
            >
              <Mail size={16} /> {contact.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
