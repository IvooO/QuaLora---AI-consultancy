/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AiReadinessQuiz } from './components/AiReadinessQuiz';
import { ContactSection } from './components/ContactSection';
import { DiscoveryModal } from './components/DiscoveryModal';
import { GitHubPagesGuideModal } from './components/GitHubPagesGuideModal';
import { Footer } from './components/Footer';

export default function App() {
  // Initialize language from localStorage or browser preferences
  const [lang, setLang] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('ql') as Language;
      if (stored && (stored === 'nl' || stored === 'fr' || stored === 'en')) {
        return stored;
      }
      const navLang = (navigator.language || 'en').slice(0, 2).toLowerCase() as Language;
      if (navLang === 'nl' || navLang === 'fr' || navLang === 'en') {
        return navLang;
      }
    } catch {
      // Fallback
    }
    return 'en';
  });

  // Dark mode theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const storedTheme = localStorage.getItem('ql_theme');
      if (storedTheme) return storedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isGhGuideOpen, setIsGhGuideOpen] = useState(false);

  // Sync language with document element
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('ql', lang);
    } catch {
      // Ignore
    }

    // Update document title dynamically
    const titles: Record<Language, string> = {
      en: "Qualora – AI consultancy and workflow automation for food companies",
      nl: "Qualora – AI-advies en workflowautomatisering voor voedingsbedrijven",
      fr: "Qualora – Conseil en IA et automatisation des workflows pour entreprises alimentaires"
    };
    document.title = titles[lang] || titles.en;
  }, [lang]);

  // Sync theme with document root
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('ql_theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore
    }
  }, [isDark]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToQuiz = () => {
    const el = document.getElementById('readiness');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F2] dark:bg-[#0E1913] text-[#10261C] dark:text-[#EAF1EC] transition-colors duration-200">
      {/* Top Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        t={t}
        onOpenBooking={() => setIsBookingOpen(true)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          t={t}
          onOpenBooking={() => setIsBookingOpen(true)}
          onScrollToQuiz={scrollToQuiz}
        />

        {/* Services Section */}
        <Services
          t={t}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Interactive Food AI Readiness Assessment */}
        <AiReadinessQuiz
          t={t}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Contact & Discovery Section */}
        <ContactSection
          t={t}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        t={t}
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenGhGuide={() => setIsGhGuideOpen(true)}
      />

      {/* Discovery Booking Modal */}
      <DiscoveryModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        t={t}
      />

      {/* GitHub Pages Deployment Guide Modal */}
      <GitHubPagesGuideModal
        isOpen={isGhGuideOpen}
        onClose={() => setIsGhGuideOpen(false)}
      />
    </div>
  );
}
