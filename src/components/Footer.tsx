import React from 'react';
import { Language, Translations } from '../types';
import { ArrowUp, Github } from 'lucide-react';

interface FooterProps {
  t: Translations;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenGhGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  t,
  lang,
  onLanguageChange,
  onOpenGhGuide,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D9E2DB] dark:border-[#2B4237] py-10 transition-colors">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#D9E2DB]/60 dark:border-[#2B4237]/60">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-[#10261C] dark:text-[#EAF1EC]">
              Qualora<span className="text-[#1F7A5C] dark:text-[#4DBB93]">.</span>
            </span>
            <span className="text-xs text-[#4A5F55] dark:text-[#9DB3A7]">
              — AI consultancy & workflow automation for food companies
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#4A5F55] dark:text-[#9DB3A7]">
            <button
              type="button"
              onClick={onOpenGhGuide}
              className="inline-flex items-center gap-1.5 hover:text-[#10261C] dark:hover:text-[#EAF1EC] transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>{t.footer.ghPagesGuide}</span>
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#10261C] dark:hover:text-[#EAF1EC] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 text-xs text-[#4A5F55] dark:text-[#9DB3A7] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span>{t.footer.entity}</span>
            <span aria-hidden="true">·</span>
            <span>{t.footer.vat}</span>
          </div>

          <div className="italic text-[#4A5F55]/80 dark:text-[#9DB3A7]/80">
            {t.footer.note}
          </div>
        </div>
      </div>
    </footer>
  );
};
