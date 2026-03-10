"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/about";
import { Activities } from "@/components/activities";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Locale, uiText } from "@/lib/data";

const LOCALE_KEY = "portfolio-locale";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    try {
      const savedLocale = window.localStorage.getItem(LOCALE_KEY);
      if (savedLocale === "en" || savedLocale === "ko") {
        setLocale(savedLocale);
        return;
      }
    } catch {
      // Some mobile browsers can block storage access in strict privacy modes.
    }

    try {
      const browserLocale = window.navigator.language.toLowerCase();
      if (browserLocale.startsWith("ko")) {
        setLocale("ko");
      }
    } catch {
      setLocale("en");
    }
  }, []);

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    try {
      window.localStorage.setItem(LOCALE_KEY, nextLocale);
    } catch {
      // Ignore storage failures and keep locale in memory for this session.
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      <Navbar locale={locale} onLocaleChange={handleLocaleChange} />
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <TechStack locale={locale} />
        <Projects locale={locale} />
        <Activities locale={locale} />
        <Contact locale={locale} />
      </main>
      <footer className="border-t border-line/70 px-6 py-6 text-center text-xs text-slate-400 md:px-8">
        © {new Date().getFullYear()} Dahye Lee. {locale === "en" ? uiText.footer.en : uiText.footer.ko}
      </footer>
    </div>
  );
}
