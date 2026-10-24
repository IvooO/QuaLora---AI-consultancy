import React from 'react';
import { Language, Translations } from '../types';
import { Globe, Moon, Sun, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
  onOpenBooking: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  t,
  onOpenBooking,
  isDark,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F4F6F2]/90 dark:bg-[#0E1913]/90 border-b border-[#D9E2DB] dark:border-[#2B4237] transition-colors">
      <div className="max-w-[1120px] mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#top" 
          className="text-2xl font-bold tracking-tight text-[#10261C] dark:text-[#EAF1EC] font-display whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
        >
          Qualora<span className="text-[#1F7A5C] dark:text-[#4DBB93]">.</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#4A5F55] dark:text-[#9DB3A7]">
          <a 
            href="#services" 
            className="hover:text-[#10261C] dark:hover:text-[#EAF1EC] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.services}
          </a>
          <a 
            href="#readiness" 
            className="hover:text-[#10261C] dark:hover:text-[#EAF1EC] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.readiness}
          </a>
          <a 
            href="#contact" 
            className="hover:text-[#10261C] dark:hover:text-[#EAF1EC] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: Actions (Language Switcher, Theme Toggle, Primary Action) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div 
            className="flex items-center gap-1 bg-[#DDE9E1]/60 dark:bg-[#1F3A2E]/60 p-1 rounded-full border border-[#D9E2DB] dark:border-[#2B4237]" 
            role="group" 
            aria-label="Language selection"
          >
            {(['nl', 'fr', 'en'] as Language[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => onLanguageChange(l)}
                aria-pressed={lang === l}
                className={`text-xs font-bold uppercase px-2.5 py-1 rounded-full transition-all duration-150 min-h-[30px] flex items-center ${
                  lang === l
                    ? 'bg-[#10261C] text-[#F4F6F2] dark:bg-[#EAF1EC] dark:text-[#0E1913] shadow-xs'
                    : 'text-[#4A5F55] dark:text-[#9DB3A7] hover:text-[#10261C] dark:hover:text-[#EAF1EC]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#4A5F55] dark:text-[#9DB3A7] hover:text-[#10261C] dark:hover:text-[#EAF1EC] border border-[#D9E2DB] dark:border-[#2B4237] hover:bg-white dark:hover:bg-[#16251D] transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#8FD1B3]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4.5 py-2 text-sm font-bold rounded-full bg-[#1F7A5C] hover:bg-[#17634A] text-[#10261C] hover:text-white dark:bg-[#4DBB93] dark:hover:bg-[#3ca57e] transition-all whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>{t.nav.bookCall}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
