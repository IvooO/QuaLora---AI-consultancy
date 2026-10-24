import React from 'react';
import { Translations } from '../types';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  t: Translations;
  onOpenBooking: () => void;
  onScrollToQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenBooking, onScrollToQuiz }) => {
  return (
    <section id="top" className="pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Kicker */}
        <p className="text-xs md:text-[13px] font-bold uppercase tracking-[0.08em] text-[#1B5E45] dark:text-[#8FD1B3] mb-4">
          {t.hero.kicker}
        </p>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold tracking-tight text-[#10261C] dark:text-[#EAF1EC] leading-[1.08] max-w-[940px] mb-6 text-balance">
          {t.hero.h1}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-[21px] text-[#4A5F55] dark:text-[#9DB3A7] leading-relaxed max-w-[660px] mb-10">
          {t.hero.subhead}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-base bg-[#1F7A5C] hover:bg-[#17634A] text-[#10261C] hover:text-white dark:bg-[#4DBB93] dark:hover:bg-[#3ca57e] transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            {t.hero.ctaPrimary}
          </button>

          <button
            type="button"
            onClick={onScrollToQuiz}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base bg-transparent text-[#10261C] dark:text-[#EAF1EC] border-2 border-[#10261C] dark:border-[#EAF1EC] hover:bg-[#10261C] hover:text-[#F4F6F2] dark:hover:bg-[#EAF1EC] dark:hover:text-[#0E1913] transition-all cursor-pointer"
          >
            <span>{t.hero.ctaSecondary}</span>
          </button>
        </div>

        {/* Clean Unboxed Food Industry Context Strip */}
        <div className="pt-8 border-t border-[#D9E2DB] dark:border-[#2B4237]">
          <div className="text-xs md:text-sm font-medium text-[#4A5F55] dark:text-[#9DB3A7] flex flex-wrap items-center gap-y-2 gap-x-3">
            <span className="font-bold text-[#10261C] dark:text-[#EAF1EC] tracking-wide uppercase text-[11px]">Specialized for:</span>
            <span>Bakery & Cereals</span>
            <span aria-hidden="true">·</span>
            <span>Meat, Poultry & Fish</span>
            <span aria-hidden="true">·</span>
            <span>Dairy & Plant-Based</span>
            <span aria-hidden="true">·</span>
            <span>Prepared Convenience Foods</span>
            <span aria-hidden="true">·</span>
            <span>Beverages & Brewing</span>
            <span aria-hidden="true">·</span>
            <span>Ingredients & Distribution</span>
          </div>
        </div>
      </div>
    </section>
  );
};
