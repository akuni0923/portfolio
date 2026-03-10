"use client";

import { motion } from "framer-motion";
import { Check, Copy, Github, Mail } from "lucide-react";
import { useState } from "react";
import { contact, Locale, t, uiText } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type ContactProps = {
  locale: Locale;
};

export function Contact({ locale }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={t(locale, uiText.contact.eyebrow)}
          title={t(locale, uiText.contact.title)}
          description={t(locale, uiText.contact.description)}
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl border border-line bg-panel p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-200 transition-colors hover:text-accent"
              aria-label={t(locale, uiText.contact.openGithub)}
            >
              <Github size={17} /> {contact.githubLabel}
            </a>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-slate-200 transition-all hover:border-accent/60 hover:text-accent"
                aria-label={t(locale, uiText.contact.sendEmail)}
              >
                <Mail size={16} /> {contact.email}
              </a>
              <motion.button
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-slate-300 transition-colors hover:border-accent/60 hover:text-accent"
                aria-label={t(locale, uiText.contact.copyAria)}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? t(locale, uiText.contact.copied) : t(locale, uiText.contact.copyEmail)}
              </motion.button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
