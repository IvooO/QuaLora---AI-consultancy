import React from 'react';
import { Translations } from '../types';
import { Check, Sparkles, FileText, ShoppingBag, FlaskConical, TrendingUp } from 'lucide-react';

interface ServicesProps {
  t: Translations;
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ t, onOpenBooking }) => {
  return (
    <section id="services" className="bg-white dark:bg-[#16251D] py-20 md:py-24 border-y border-[#D9E2DB] dark:border-[#2B4237] transition-colors">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Header */}
        <p className="text-xs md:text-[13px] font-bold uppercase tracking-[0.08em] text-[#1B5E45] dark:text-[#8FD1B3] mb-3">
          {t.services.kicker}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#10261C] dark:text-[#EAF1EC] leading-[1.12] max-w-[780px] mb-12">
          {t.services.title}
        </h2>

        {/* The Two Core Marquee Dark Cards from the original spec */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Card 1: AI Consultancy */}
          <div className="bg-[#1A3A2D] dark:bg-[#0E1913] text-[#F4F6F2] dark:text-[#EAF1EC] rounded-[22px] p-8 md:p-10 border border-[#2B4237] shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#8FD1B3] font-bold mb-3">
                01. Capability
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-[#F4F6F2]">
                {t.services.card1Title}
              </h3>
              <p className="text-base md:text-lg text-[#DDE9E1] leading-relaxed">
                {t.services.card1Desc}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#2B4237]/60 flex items-center justify-between text-sm text-[#8FD1B3]">
              <span>Executive Briefing & Roadmaps</span>
              <Check className="w-5 h-5 text-[#4DBB93]" />
            </div>
          </div>

          {/* Card 2: Workflow Automation */}
          <div className="bg-[#1A3A2D] dark:bg-[#0E1913] text-[#F4F6F2] dark:text-[#EAF1EC] rounded-[22px] p-8 md:p-10 border border-[#2B4237] shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#8FD1B3] font-bold mb-3">
                02. Implementation
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-[#F4F6F2]">
                {t.services.card2Title}
              </h3>
              <p className="text-base md:text-lg text-[#DDE9E1] leading-relaxed">
                {t.services.card2Desc}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#2B4237]/60 flex items-center justify-between text-sm text-[#8FD1B3]">
              <span>ERP & Document Integration</span>
              <Check className="w-5 h-5 text-[#4DBB93]" />
            </div>
          </div>
        </div>

        {/* Free Audit Banner Note */}
        <div className="p-5 rounded-xl bg-[#F4F6F2] dark:bg-[#1F3A2E]/50 border border-[#D9E2DB] dark:border-[#2B4237] flex flex-wrap items-center justify-between gap-4 mb-16">
          <p className="font-bold text-[#10261C] dark:text-[#EAF1EC] text-base md:text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1F7A5C] dark:bg-[#4DBB93]"></span>
            {t.services.freeAudit}
          </p>
          <button
            type="button"
            onClick={onOpenBooking}
            className="text-sm font-bold text-[#1B5E45] dark:text-[#8FD1B3] hover:underline cursor-pointer"
          >
            {t.contact.openModalBtn} →
          </button>
        </div>

        {/* Concrete Food Industry Automation Solutions */}
        <div className="pt-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#1B5E45] dark:text-[#8FD1B3] mb-2">
            {t.services.solutionsKicker}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#10261C] dark:text-[#EAF1EC] mb-8">
            {t.services.solutionsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.solutionItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F4F6F2] dark:bg-[#1F3A2E]/30 rounded-2xl p-6 border border-[#D9E2DB] dark:border-[#2B4237] hover:border-[#1F7A5C] dark:hover:border-[#4DBB93] transition-colors"
              >
                <div className="text-xs font-semibold text-[#1B5E45] dark:text-[#8FD1B3] mb-2">
                  {item.tag}
                </div>
                <h4 className="font-display text-xl font-bold text-[#10261C] dark:text-[#EAF1EC] mb-2.5">
                  {item.title}
                </h4>
                <p className="text-sm text-[#4A5F55] dark:text-[#9DB3A7] leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="text-xs font-bold text-[#10261C] dark:text-[#EAF1EC] bg-white dark:bg-[#16251D] px-3 py-1.5 rounded-lg inline-block border border-[#D9E2DB] dark:border-[#2B4237]">
                  {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
