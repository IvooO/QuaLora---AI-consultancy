/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS, TYPEFORM_FEEDBACK_URL } from './data/translations';
import { LoraPage } from './LoraPage';

export default function App() {
  const [view, setView] = useState<'qualora' | 'lora'>(() => {
    if (typeof window !== 'undefined' && (window.location.hash === '#lora-app' || window.location.hash === '#lora-page')) {
      return 'lora';
    }
    return 'qualora';
  });

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

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#lora-app' || window.location.hash === '#lora-page') {
        setView('lora');
      } else if (window.location.hash === '#top' || window.location.hash === '#services' || window.location.hash === '#contact' || window.location.hash === '') {
        setView('qualora');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (view === 'qualora') {
      document.documentElement.lang = lang;
      try {
        localStorage.setItem('ql', lang);
      } catch {
        // Ignore
      }
      const titles: Record<Language, string> = {
        en: 'Qualora – AI consultancy and workflow automation for food companies',
        nl: 'Qualora – AI-advies en workflowautomatisering voor voedingsbedrijven',
        fr: 'Qualora – Conseil en IA et automatisation des workflows pour entreprises alimentaires'
      };
      document.title = titles[lang] || titles.en;
    }
  }, [lang, view]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (view === 'lora') {
    return (
      <LoraPage
        initialLang={lang === 'fr' ? 'en' : lang}
        onBackToQualora={() => {
          setView('qualora');
          window.location.hash = 'top';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div>
      {/* Top Bar with Precision Designer Optical Alignment */}
      <div className="c top-nav">
        <a href="#top" className="brand-logo-link" aria-label="Qualora">
          <img
            src="./assets/qualora-logo.png"
            alt="Qualora"
            className="brand-logo-img light-logo"
            width={426}
            height={101}
            loading="eager"
            decoding="async"
          />
          <img
            src="./assets/qualora-logo-dark.png"
            alt="Qualora"
            className="brand-logo-img dark-logo"
            width={426}
            height={101}
            loading="eager"
            decoding="async"
          />
        </a>
        <nav>
          <a href="#services">{t.n1}</a>
          <a href="#contact">{t.n2}</a>
          <div className="lang" role="group" aria-label="Language">
            <button
              type="button"
              data-l="nl"
              aria-pressed={lang === 'nl'}
              onClick={() => setLang('nl')}
            >
              NL
            </button>
            <button
              type="button"
              data-l="fr"
              aria-pressed={lang === 'fr'}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <button
              type="button"
              data-l="en"
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Header */}
      <header
        id="top"
        className="c"
        style={{ paddingTop: '64px', paddingBottom: '96px' }}
      >
        <p className="eb">{t.he}</p>
        <h1
          className="d"
          style={{
            fontSize: 'clamp(38px, 7vw, 68px)',
            marginBottom: '22px',
            maxWidth: '920px',
            lineHeight: 1.06,
          }}
        >
          {t.h1}
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '620px', margin: '0 0 32px', lineHeight: 1.55 }}>
          {t.hs}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          <a href="#contact" className="btn g">
            {t.b1}
          </a>
          <a
            href={TYPEFORM_FEEDBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn o"
          >
            {t.b2}
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" style={{ background: 'var(--card)' }}>
        <div className="c sec">
          <p className="eb">{t.e1}</p>
          <h2
            className="d"
            style={{
              fontSize: 'clamp(30px, 5vw, 42px)',
              marginBottom: '32px',
              maxWidth: '780px',
              lineHeight: 1.12,
            }}
          >
            {t.t1}
          </h2>
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
          >
            <div className="dk">
              <h3>{t.c1t}</h3>
              <p>{t.c1d}</p>
            </div>
            <div className="dk">
              <h3>{t.c2t}</h3>
              <p>{t.c2d}</p>
            </div>
          </div>
          <p style={{ margin: '28px 0 0', fontWeight: 700, fontSize: '17px' }}>{t.fa}</p>
        </div>
      </section>

      {/* Lora Section */}
      <section id="lora">
        <div className="c" style={{ paddingTop: 0, paddingBottom: '80px' }}>
          <div
            className="dk"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px 40px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ maxWidth: '620px' }}>
              <p className="eb" style={{ color: 'var(--acc)' }}>
                {t.le}
              </p>
              <h3 className="d" style={{ fontSize: '30px', margin: '0 0 10px', lineHeight: 1.15 }}>
                {t.lt}
              </h3>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, opacity: 0.92 }}>
                {t.ld}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setView('lora');
                window.location.hash = 'lora-app';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn g cursor-pointer"
            >
              {t.lb}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{ background: 'var(--acc)', color: '#10261C' }}
      >
        <div className="c" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
          <h2
            className="d"
            style={{
              fontSize: 'clamp(30px, 5vw, 44px)',
              marginBottom: '14px',
              maxWidth: '760px',
              lineHeight: 1.12,
            }}
          >
            {t.ct}
          </h2>
          <p style={{ maxWidth: '620px', margin: '0 0 24px', fontSize: '19px', lineHeight: 1.5 }}>
            {t.cd}
          </p>
          <p style={{ margin: 0, fontWeight: 700, fontSize: '20px' }}>
            <a
              href="mailto:hello@qualora.be"
              style={{ textDecoration: 'underline' }}
            >
              hello@qualora.be
            </a>{' '}
            ·{' '}
            <a href="tel:+3225884210" style={{ textDecoration: 'underline' }}>
              +32 (0)2 588 42 10
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="c"
        style={{
          paddingTop: '28px',
          paddingBottom: '36px',
          fontSize: '14px',
          color: 'var(--mute)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 24px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>Qualora SRL / BV · BCE / BTW BE 0123.456.789</span>
        <span>{t.ft}</span>
      </footer>
    </div>
  );
}
