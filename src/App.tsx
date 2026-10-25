/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS, TYPEFORM_FEEDBACK_URL } from './data/translations';

export default function App() {
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
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('ql', lang);
    } catch {
      // Ignore
    }
  }, [lang]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <div>
      {/* Top Bar */}
      <div
        className="c"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <a href="#top" className="d" style={{ fontSize: '26px' }}>
          Qualora.
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
          }}
        >
          {t.h1}
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '620px', margin: '0 0 32px' }}>
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
          <p style={{ margin: '28px 0 0', fontWeight: 700 }}>{t.fa}</p>
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
            }}
          >
            {t.ct}
          </h2>
          <p style={{ maxWidth: '620px', margin: '0 0 24px' }}>{t.cd}</p>
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
        }}
      >
        <span>Qualora SRL / BV · BCE / BTW BE 0123.456.789</span>
        <span>{t.ft}</span>
      </footer>
    </div>
  );
}
