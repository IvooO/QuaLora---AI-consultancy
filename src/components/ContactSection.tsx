import React from 'react';
import { Translations } from '../types';
import { Mail, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  t: Translations;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t, onOpenBooking }) => {
  return (
    <section id="contact" className="bg-[#1F7A5C] dark:bg-[#1A3A2D] text-[#10261C] dark:text-[#EAF1EC] py-20 md:py-24 transition-colors">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[760px] mb-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-[#10261C]/90 dark:text-[#DDE9E1] leading-relaxed mb-8">
            {t.contact.desc}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-[#10261C] hover:bg-black text-[#F4F6F2] dark:bg-[#EAF1EC] dark:text-[#0E1913] dark:hover:bg-white transition-all cursor-pointer shadow-md hover:shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.contact.openModalBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Coordinates & Booking Links */}
        <div className="pt-8 border-t border-[#10261C]/15 dark:border-[#2B4237] flex flex-wrap items-center justify-between gap-6 text-sm font-semibold">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:hello@qualora.be"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span>hello@qualora.be</span>
            </a>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <a
              href="tel:+3225884210"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span>+32 (0)2 588 42 10</span>
            </a>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span>Direct Booking Link</span>
            </button>
          </div>

          <div className="text-xs flex items-center gap-1.5 opacity-85">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.contact.guarantee}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
