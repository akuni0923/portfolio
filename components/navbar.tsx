"use client";

import { Locale, navItems, t, uiText } from "@/lib/data";

type NavbarProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function Navbar({ locale, onLocaleChange }: NavbarProps) {
  return (
    <nav aria-label="Primary" className="sticky top-0 z-40 border-b border-line/70 bg-[#070b12]/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="text-sm font-medium tracking-wide text-slate-100 transition-colors hover:text-accent">
          Dahye Lee
        </a>
        <div className="flex items-center gap-3 md:gap-6">
          <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition-colors hover:text-slate-100" href={item.href}>
                  {t(locale, item.label)}
                </a>
              </li>
            ))}
          </ul>

          <div className="inline-flex rounded-full border border-line bg-panel p-1" role="group" aria-label="Language toggle">
            <button
              type="button"
              onClick={() => onLocaleChange("en")}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${
                locale === "en" ? "bg-slate-100 text-slate-900" : "text-slate-300 hover:text-slate-100"
              }`}
            >
              {uiText.language.en}
            </button>
            <button
              type="button"
              onClick={() => onLocaleChange("ko")}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${
                locale === "ko" ? "bg-slate-100 text-slate-900" : "text-slate-300 hover:text-slate-100"
              }`}
            >
              {uiText.language.ko}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
