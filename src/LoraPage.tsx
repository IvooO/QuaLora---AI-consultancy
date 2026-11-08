import React, { useState, useEffect } from 'react';

interface LoraPageProps {
  onBackToQualora: () => void;
  initialLang?: 'nl' | 'en';
}

export const LoraPage: React.FC<LoraPageProps> = ({ onBackToQualora, initialLang = 'nl' }) => {
  const [lang, setLang] = useState<'nl' | 'en'>(() => {
    try {
      const saved = localStorage.getItem('lora-lang');
      if (saved === 'nl' || saved === 'en') return saved;
      return (navigator.language || 'nl').slice(0, 2) === 'nl' ? 'nl' : 'en';
    } catch {
      return initialLang;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lora-lang', lang);
    } catch {
      // Ignore
    }
    document.title =
      lang === 'nl'
        ? 'Lora — de assistent voor leveranciersvragenlijsten | een toepassing van Qualora'
        : 'Lora — the supplier questionnaire assistant | a Qualora application';
  }, [lang]);

  return (
    <div className="lora-root min-h-screen text-[#16180F] dark:text-[#EEF0E6] bg-[#F7F6F1] dark:bg-[#12150F] font-sans antialiased selection:bg-[#1E7253] selection:text-white transition-colors duration-200">
      <style>{`
        .lora-root {
          --l-bg: #F7F6F1;
          --l-bg2: #FFFFFF;
          --l-ink: #16180F;
          --l-soft: #4B4E45;
          --l-line: #DCDAD0;
          --l-green: #1E7253;
          --l-green-d: #155840;
          --l-amber: #B57614;
          --l-red: #A5341F;
          --l-violet: #6B4A8F;
          --l-tint: rgba(30,114,83,.07);
          --l-on-green: #FFFFFF;
          --l-serif: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
          --l-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Helvetica, Arial, sans-serif;
        }
        @media (prefers-color-scheme: dark) {
          .lora-root {
            --l-bg: #12150F;
            --l-bg2: #1A1E16;
            --l-ink: #EEF0E6;
            --l-soft: #A9AD9F;
            --l-line: #2D3226;
            --l-green: #4FB88F;
            --l-green-d: #6CCBA5;
            --l-amber: #E0A23A;
            --l-red: #E5735E;
            --l-violet: #B497D6;
            --l-tint: rgba(79,184,143,.1);
            --l-on-green: #0B1A13;
          }
        }
        .lora-font-serif {
          font-family: var(--l-serif);
        }
        @keyframes lora-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes lora-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .lora-bar-grow {
          transform-origin: left;
          animation: lora-grow 1.3s 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .lora-row {
          animation: lora-up 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .lora-row:nth-of-type(1) { animation-delay: 0.5s; }
        .lora-row:nth-of-type(2) { animation-delay: 0.65s; }
        .lora-row:nth-of-type(3) { animation-delay: 0.8s; }
        .lora-row:nth-of-type(4) { animation-delay: 0.95s; }
      `}</style>

      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F7F6F1]/85 dark:bg-[#12150F]/85 border-b border-[#DCDAD0] dark:border-[#2D3226] transition-colors">
        <div className="max-w-[1120px] mx-auto px-6 h-17 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBackToQualora}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-[#DCDAD0] dark:border-[#2D3226] hover:bg-[#1E7253] hover:text-white dark:hover:bg-[#4FB88F] dark:hover:text-[#0B1A13] transition-all cursor-pointer"
            >
              <span>← Qualora</span>
            </button>
            <a href="#lora-top" className="lora-font-serif text-2xl font-semibold tracking-tight text-[#16180F] dark:text-[#EEF0E6]">
              Lora<span className="text-[#1E7253] dark:text-[#4FB88F]">.</span>
              <span className="hidden sm:inline-block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#1E7253] dark:text-[#4FB88F] border border-[#DCDAD0] dark:border-[#2D3226] rounded-full px-2.5 py-0.5 ml-2.5 align-middle">
                {lang === 'nl' ? 'Een toepassing van Qualora' : 'A Qualora application'}
              </span>
            </a>
          </div>

          <nav className="flex items-center gap-5 sm:gap-7 text-[15px] font-medium text-[#4B4E45] dark:text-[#A9AD9F]">
            <a href="#lora-wat" className="hidden md:inline hover:text-[#16180F] dark:hover:text-[#EEF0E6] transition-colors">
              {lang === 'nl' ? 'Wat je krijgt' : 'What you get'}
            </a>
            <a href="#lora-bewijs" className="hidden md:inline hover:text-[#16180F] dark:hover:text-[#EEF0E6] transition-colors">
              {lang === 'nl' ? 'Voorbeeld' : 'Example'}
            </a>
            <a href="#lora-docs" className="hidden md:inline hover:text-[#16180F] dark:hover:text-[#EEF0E6] transition-colors">
              {lang === 'nl' ? 'Documenten' : 'Documents'}
            </a>
            <a href="#lora-pilot" className="hidden md:inline hover:text-[#16180F] dark:hover:text-[#EEF0E6] transition-colors">
              Pilot
            </a>

            {/* Language Selector */}
            <div className="inline-flex gap-1 bg-[#DCDAD0]/40 dark:bg-[#2D3226]/50 p-1 rounded-full border border-[#DCDAD0] dark:border-[#2D3226]">
              <button
                type="button"
                onClick={() => setLang('nl')}
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  lang === 'nl'
                    ? 'bg-[#16180F] text-[#F7F6F1] dark:bg-[#EEF0E6] dark:text-[#12150F]'
                    : 'text-[#4B4E45] dark:text-[#A9AD9F]'
                }`}
              >
                NL
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#16180F] text-[#F7F6F1] dark:bg-[#EEF0E6] dark:text-[#12150F]'
                    : 'text-[#4B4E45] dark:text-[#A9AD9F]'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="mailto:hello@qualora.be?subject=Gesprek%20Qualora"
              className="inline-flex items-center justify-center px-4.5 py-2 rounded-full font-semibold text-sm bg-[#1E7253] hover:bg-[#155840] text-white dark:bg-[#4FB88F] dark:text-[#0B1A13] dark:hover:bg-[#6CCBA5] transition-all shadow-xs"
            >
              {lang === 'nl' ? 'Plan een gesprek' : 'Book a call'}
            </a>
          </nav>
        </div>
      </header>

      <main id="lora-top">
        {/* Hero Section */}
        <section className="max-w-[1120px] mx-auto px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E7253] dark:text-[#4FB88F] mb-3">
              {lang === 'nl' ? 'Een toepassing van Qualora · QA & voedselveiligheid' : 'A Qualora application · QA & food safety'}
            </p>
            <h1 className="lora-font-serif text-4xl sm:text-5xl lg:text-[54px] font-semibold leading-[1.06] text-[#16180F] dark:text-[#EEF0E6] tracking-tight mb-5 text-balance">
              {lang === 'nl' ? (
                <>
                  De vragenlijst van je retailer.{' '}
                  <span className="text-[#1E7253] dark:text-[#4FB88F] underline decoration-[#1E7253]/30 underline-offset-4">
                    Nog dezelfde dag klaar voor review,
                  </span>{' '}
                  elk antwoord met een bron.
                </>
              ) : (
                <>
                  Your retailer’s questionnaire.{' '}
                  <span className="text-[#1E7253] dark:text-[#4FB88F] underline decoration-[#1E7253]/30 underline-offset-4">
                    Ready for review the same day,
                  </span>{' '}
                  every answer with a source.
                </>
              )}
            </h1>
            <p className="text-lg md:text-[19px] text-[#4B4E45] dark:text-[#A9AD9F] leading-relaxed max-w-[60ch] mb-8">
              {lang === 'nl'
                ? 'Lora beantwoordt de kwaliteitsvragenlijsten van je klanten rechtstreeks uit je Google Docs en Word-documenten: specificaties, HACCP-plan, inspectieverslagen. Wat niet te bewijzen is, meldt ze. Jij beoordeelt, ondertekent en verzendt, in je eigen tempo. Zo wordt elke QA-manager een super QA-manager.'
                : 'Lora answers your customers’ quality questionnaires straight from your Google Docs and Word documents: specifications, HACCP plan, inspection reports. What can’t be proven, she flags. You review, sign and send, at your own pace. That turns every QA manager into a super QA manager.'}
            </p>
            <div className="flex flex-wrap gap-3.5 mb-10">
              <a
                href="https://form.typeform.com/to/RcNgG6Kb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-base bg-[#1E7253] hover:bg-[#155840] text-white dark:bg-[#4FB88F] dark:text-[#0B1A13] dark:hover:bg-[#6CCBA5] transition-all shadow-sm hover:shadow-md"
              >
                {lang === 'nl' ? 'Zet je op de wachtlijst' : 'Join the waitlist'}
              </a>
              <a
                href="mailto:hello@qualora.be?subject=Contact%20Sales%20-%20Lora"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-base border-2 border-[#16180F] dark:border-[#EEF0E6] text-[#16180F] dark:text-[#EEF0E6] hover:bg-[#16180F] hover:text-[#F7F6F1] dark:hover:bg-[#EEF0E6] dark:hover:text-[#12150F] transition-all"
              >
                {lang === 'nl' ? 'Contacteer sales' : 'Contact sales'}
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-5 border-t border-[#DCDAD0] dark:border-[#2D3226] text-sm text-[#4B4E45] dark:text-[#A9AD9F] list-none p-0 m-0">
              <li className="flex items-center gap-1.5">
                <span className="text-[#1E7253] dark:text-[#4FB88F] font-bold">✓</span>
                {lang === 'nl' ? 'Werkt met Google Docs en Word' : 'Works with Google Docs and Word'}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#1E7253] dark:text-[#4FB88F] font-bold">✓</span>
                {lang === 'nl' ? 'Alleen-lezen toegang' : 'Read-only access'}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#1E7253] dark:text-[#4FB88F] font-bold">✓</span>
                {lang === 'nl' ? 'Lora verzendt nooit zelf' : 'Lora never sends anything herself'}
              </li>
            </ul>
          </div>

          {/* Interactive Live Review Board Preview */}
          <div className="bg-white dark:bg-[#1A1E16] border border-[#DCDAD0] dark:border-[#2D3226] rounded-2xl overflow-hidden shadow-2xl transform -rotate-0.5 hover:rotate-0 transition-transform duration-300">
            <div className="bg-[#1E7253]/10 dark:bg-[#4FB88F]/15 flex justify-between items-center px-5 py-3.5 border-b border-[#DCDAD0] dark:border-[#2D3226] text-xs sm:text-sm text-[#4B4E45] dark:text-[#A9AD9F]">
              <span>
                <strong className="text-[#16180F] dark:text-[#EEF0E6]">Retailer audit 2026</strong> · 77 {lang === 'nl' ? 'vragen' : 'questions'}
              </span>
              <span className="font-semibold text-[#1E7253] dark:text-[#4FB88F]">
                62 {lang === 'nl' ? 'klaar · 15 voor jou' : 'ready · 15 for you'}
              </span>
            </div>
            <div className="h-1 bg-[#DCDAD0] dark:bg-[#2D3226]">
              <div className="h-full w-[80%] bg-[#1E7253] dark:bg-[#4FB88F] lora-bar-grow" />
            </div>

            <div className="divide-y divide-[#DCDAD0] dark:divide-[#2D3226] text-sm">
              <div className="lora-row grid grid-cols-[34px_1fr_auto] gap-3 items-start p-4 hover:bg-[#F7F6F1]/50 dark:hover:bg-[#12150F]/50 transition-colors">
                <span className="font-mono text-[#4B4E45] dark:text-[#A9AD9F]">4.2</span>
                <div>
                  <div className="font-medium text-[#16180F] dark:text-[#EEF0E6]">
                    {lang === 'nl' ? 'Is er een allergenenbeheersplan?' : 'Is there an allergen management plan?'}
                  </div>
                  <small className="block text-xs text-[#4B4E45] dark:text-[#A9AD9F] mt-0.5">
                    HACCP-plan v7, §3.4
                  </small>
                </div>
                <span className="text-[11.5px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1E7253]/15 text-[#1E7253] dark:bg-[#4FB88F]/20 dark:text-[#4FB88F]">
                  {lang === 'nl' ? 'Onderbouwd' : 'Supported'}
                </span>
              </div>

              <div className="lora-row grid grid-cols-[34px_1fr_auto] gap-3 items-start p-4 hover:bg-[#F7F6F1]/50 dark:hover:bg-[#12150F]/50 transition-colors">
                <span className="font-mono text-[#4B4E45] dark:text-[#A9AD9F]">4.7</span>
                <div>
                  <div className="font-medium text-[#16180F] dark:text-[#EEF0E6]">
                    {lang === 'nl' ? 'Wanneer was de laatste interne audit?' : 'When was the last internal audit?'}
                  </div>
                  <small className="block text-xs text-[#4B4E45] dark:text-[#A9AD9F] mt-0.5">
                    {lang === 'nl' ? 'Verslag van maart gevonden, ondertekende versie ontbreekt' : 'March report found, signed version missing'}
                  </small>
                </div>
                <span className="text-[11.5px] font-semibold px-2.5 py-0.5 rounded-full bg-[#B57614]/15 text-[#B57614] dark:bg-[#E0A23A]/20 dark:text-[#E0A23A]">
                  {lang === 'nl' ? 'Gedeeltelijk' : 'Partial'}
                </span>
              </div>

              <div className="lora-row grid grid-cols-[34px_1fr_auto] gap-3 items-start p-4 hover:bg-[#F7F6F1]/50 dark:hover:bg-[#12150F]/50 transition-colors">
                <span className="font-mono text-[#4B4E45] dark:text-[#A9AD9F]">6.1</span>
                <div>
                  <div className="font-medium text-[#16180F] dark:text-[#EEF0E6]">
                    {lang === 'nl' ? 'Maximale nitrietdosering in chorizo?' : 'Maximum nitrite dose in chorizo?'}
                  </div>
                  <small className="block text-xs text-[#4B4E45] dark:text-[#A9AD9F] mt-0.5">
                    {lang === 'nl' ? 'Drie documenten, drie waarden' : 'Three documents, three values'}
                  </small>
                </div>
                <span className="text-[11.5px] font-semibold px-2.5 py-0.5 rounded-full bg-[#6B4A8F]/15 text-[#6B4A8F] dark:bg-[#B497D6]/20 dark:text-[#B497D6]">
                  {lang === 'nl' ? 'Tegenstrijdig' : 'Conflicting'}
                </span>
              </div>

              <div className="lora-row grid grid-cols-[34px_1fr_auto] gap-3 items-start p-4 hover:bg-[#F7F6F1]/50 dark:hover:bg-[#12150F]/50 transition-colors">
                <span className="font-mono text-[#4B4E45] dark:text-[#A9AD9F]">8.3</span>
                <div>
                  <div className="font-medium text-[#16180F] dark:text-[#EEF0E6]">
                    {lang === 'nl' ? 'Is de leverancier GFSI-gecertificeerd?' : 'Is the supplier GFSI-certified?'}
                  </div>
                  <small className="block text-xs text-[#4B4E45] dark:text-[#A9AD9F] mt-0.5">
                    {lang === 'nl' ? 'Geen certificaat in de map' : 'No certificate in the folder'}
                  </small>
                </div>
                <span className="text-[11.5px] font-semibold px-2.5 py-0.5 rounded-full bg-[#A5341F]/15 text-[#A5341F] dark:bg-[#E5735E]/20 dark:text-[#E5735E]">
                  {lang === 'nl' ? 'Niet gevonden' : 'Not found'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Documents */}
        <section id="lora-docs" className="py-20 bg-white dark:bg-[#1A1E16] border-y border-[#DCDAD0] dark:border-[#2D3226] transition-colors">
          <div className="max-w-[1120px] mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E7253] dark:text-[#4FB88F] mb-3">
              {lang === 'nl' ? 'Werkt met je documenten' : 'Works with your documents'}
            </p>
            <h2 className="lora-font-serif text-3xl sm:text-4xl font-semibold text-[#16180F] dark:text-[#EEF0E6] mb-4">
              {lang === 'nl' ? 'Google Docs en Word, rechtstreeks in de cloud.' : 'Google Docs and Word, straight from the cloud.'}
            </h2>
            <p className="text-lg text-[#4B4E45] dark:text-[#A9AD9F] max-w-[60ch] mb-12">
              {lang === 'nl'
                ? 'Je documenten blijven waar ze staan. Lora leest ze mee, zonder export en zonder losse uploads.'
                : 'Your documents stay where they are. Lora reads them in place, with no exports and no loose uploads.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F7F6F1] dark:bg-[#12150F] border border-[#DCDAD0] dark:border-[#2D3226] rounded-xl p-6">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E7253] dark:text-[#4FB88F]" aria-hidden="true">
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path d="M14 3v5h5M9 13h6M9 17h6" />
                </svg>
                <h3 className="lora-font-serif text-xl font-semibold mt-4 mb-2 text-[#16180F] dark:text-[#EEF0E6]">
                  Google Docs
                </h3>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F] leading-relaxed">
                  {lang === 'nl'
                    ? 'Specificaties, HACCP-plan en inspectieverslagen in Google Docs worden uitgelezen, met bronvermelding tot op sectie.'
                    : 'Specifications, HACCP plan and inspection reports in Google Docs are read directly, with the source cited down to the section.'}
                </p>
              </div>

              <div className="bg-[#F7F6F1] dark:bg-[#12150F] border border-[#DCDAD0] dark:border-[#2D3226] rounded-xl p-6">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E7253] dark:text-[#4FB88F]" aria-hidden="true">
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path d="M14 3v5h5M9 13h6M9 17h6" />
                </svg>
                <h3 className="lora-font-serif text-xl font-semibold mt-4 mb-2 text-[#16180F] dark:text-[#EEF0E6]">
                  Word
                </h3>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F] leading-relaxed">
                  {lang === 'nl'
                    ? 'Ook je Word-documenten in de cloud. Bij elk antwoord noemt Lora documentnaam, versie en sectie.'
                    : 'Your cloud-hosted Word documents too. For every answer, Lora names the document, version and section.'}
                </p>
              </div>

              <div className="bg-[#F7F6F1] dark:bg-[#12150F] border border-[#DCDAD0] dark:border-[#2D3226] rounded-xl p-6">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E7253] dark:text-[#4FB88F]" aria-hidden="true">
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path d="M14 3v5h5M9 13h6M9 17h6" />
                </svg>
                <h3 className="lora-font-serif text-xl font-semibold mt-4 mb-2 text-[#16180F] dark:text-[#EEF0E6]">
                  {lang === 'nl' ? 'Alleen-lezen' : 'Read-only'}
                </h3>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F] leading-relaxed">
                  {lang === 'nl'
                    ? 'Leesrechten volstaan. Niets wordt getraind op je data en niets gaat naar je klant zonder jouw akkoord.'
                    : 'Read access is enough. Nothing is trained on your data and nothing goes to your customer without your approval.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: What you get */}
        <section id="lora-wat" className="py-20 transition-colors">
          <div className="max-w-[1120px] mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E7253] dark:text-[#4FB88F] mb-3">
              {lang === 'nl' ? 'Wat je krijgt' : 'What you get'}
            </p>
            <h2 className="lora-font-serif text-3xl sm:text-4xl font-semibold text-[#16180F] dark:text-[#EEF0E6] mb-4">
              {lang === 'nl' ? 'Geen ingevuld formulier. Een onderbouwd dossier.' : 'Not a filled-in form. A documented file.'}
            </h2>
            <p className="text-lg text-[#4B4E45] dark:text-[#A9AD9F] max-w-[60ch] mb-12">
              {lang === 'nl'
                ? 'Elke vraag krijgt precies één status, en elke status is te controleren. Zo besteed je je tijd aan de vragen die jouw oordeel nodig hebben.'
                : 'Every question gets exactly one status, and every status can be checked. You spend your time on the questions that need your judgement.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-[#1A1E16] border border-[#DCDAD0] dark:border-[#2D3226] border-t-4 border-t-[#1E7253] dark:border-t-[#4FB88F] rounded-xl p-6 shadow-xs">
                <h3 className="lora-font-serif text-xl font-semibold text-[#16180F] dark:text-[#EEF0E6] mb-2">
                  {lang === 'nl' ? 'Onderbouwd' : 'Supported'}
                </h3>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F] leading-relaxed">
                  {lang === 'nl'
                    ? 'Een document in je eigen set zegt het, met naam, versie en sectie erbij.'
                    : 'A document in your own set says so, with name, version and section.'}
                </p>
              </div>

              <div className="bg-white dark:bg-[#1A1E16] border border-[#DCDAD0] dark:border-[#2D3226] border-t-4 border-t-[#B57614] dark:border-t-[#E0A23A] rounded-xl p-6 shadow-xs">
                <h3 className="lora-font-serif text-xl font-semibold text-[#16180F] dark:text-[#EEF0E6] mb-2">
                  {lang === 'nl' ? 'Gedeeltelijk' : 'Partial'}
                </h3>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F] leading-relaxed">
                  {lang === 'nl'
                    ? 'Er is verwant bewijs, maar het beantwoordt de vraag niet volledig. Je ziet meteen wat ontbreekt.'
                    : 'There is related evidence, but it doesn’t fully answer the question. You see at once what’s missing.'}
                </p>
              </div>

              <div className="bg-white dark:bg-[#1A1E16] border border-[#DCDAD0] dark:border-[#2D3226] border-t-4 border-t-[#A5341F] dark:border-t-[#E5735E] rounded-xl p-6 shadow-xs">
                <h3 className="lora-font-serif text-xl font-semibold text-[#16180F] dark:text-[#EEF0E6] mb-2">
                  {lang === 'nl' ? 'Niet gevonden' : 'Not found'}
                </h3>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F] leading-relaxed">
                  {lang === 'nl'
                    ? 'Geen bron? Dan staat het bij jou, in plaats van als zelfverzekerd “ja” in de bijlage.'
                    : 'No source? Then it lands with you, instead of as a confident “yes” in the attachment.'}
                </p>
              </div>

              <div className="bg-white dark:bg-[#1A1E16] border border-[#DCDAD0] dark:border-[#2D3226] border-t-4 border-t-[#6B4A8F] dark:border-t-[#B497D6] rounded-xl p-6 shadow-xs">
                <h3 className="lora-font-serif text-xl font-semibold text-[#16180F] dark:text-[#EEF0E6] mb-2">
                  {lang === 'nl' ? 'Tegenstrijdig' : 'Conflicting'}
                </h3>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F] leading-relaxed">
                  {lang === 'nl'
                    ? 'Twee documenten spreken elkaar tegen. Lora kiest niet: ze legt ze naast elkaar en vraagt een beslissing.'
                    : 'Two documents contradict each other. Lora doesn’t pick: she lays them side by side and asks for a decision.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Real world case study */}
        <section id="lora-bewijs" className="py-20 bg-white dark:bg-[#1A1E16] border-y border-[#DCDAD0] dark:border-[#2D3226] transition-colors">
          <div className="max-w-[1120px] mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E7253] dark:text-[#4FB88F] mb-3">
              {lang === 'nl' ? 'Voorbeeld uit de praktijk' : 'Example from practice'}
            </p>
            <h2 className="lora-font-serif text-3xl sm:text-4xl font-semibold text-[#16180F] dark:text-[#EEF0E6] mb-4">
              {lang === 'nl' ? 'Eén vraag. Drie antwoorden.' : 'One question. Three answers.'}
            </h2>
            <p className="text-lg text-[#4B4E45] dark:text-[#A9AD9F] max-w-[60ch] mb-12">
              {lang === 'nl'
                ? 'Een retailer vraagt naar de maximale dosering nitriet in chorizo. Wat er in de documenten van het bedrijf staat, spreekt elkaar tegen.'
                : 'A retailer asks for the maximum nitrite dose in chorizo. What the company’s documents say contradicts itself.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#F7F6F1] dark:bg-[#12150F] border border-[#DCDAD0] dark:border-[#2D3226] rounded-xl p-6">
                <p className="text-xs uppercase tracking-wider text-[#4B4E45] dark:text-[#A9AD9F] font-semibold">
                  {lang === 'nl' ? 'Productspecificatie' : 'Product specification'}
                </p>
                <p className="lora-font-serif text-3xl font-semibold text-[#16180F] dark:text-[#EEF0E6] my-2">
                  150 mg/kg
                </p>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F]">
                  {lang === 'nl' ? 'De versie die bovenaan de documentenmap staat.' : 'The version at the top of the document folder.'}
                </p>
              </div>

              <div className="bg-[#F7F6F1] dark:bg-[#12150F] border border-[#DCDAD0] dark:border-[#2D3226] rounded-xl p-6">
                <p className="text-xs uppercase tracking-wider text-[#4B4E45] dark:text-[#A9AD9F] font-semibold">
                  {lang === 'nl' ? 'Kopie in de FAVV-map' : 'Copy in the FASFC folder'}
                </p>
                <p className="lora-font-serif text-3xl font-semibold text-[#16180F] dark:text-[#EEF0E6] my-2">
                  120 mg/kg
                </p>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F]">
                  {lang === 'nl' ? 'Hetzelfde document, andere waarde.' : 'Same document, different value.'}
                </p>
              </div>

              <div className="bg-[#F7F6F1] dark:bg-[#12150F] border-2 border-[#1E7253] dark:border-[#4FB88F] rounded-xl p-6">
                <p className="text-xs uppercase tracking-wider text-[#1E7253] dark:text-[#4FB88F] font-bold">
                  Verordening (EU) 2023/2108
                </p>
                <p className="lora-font-serif text-3xl font-semibold text-[#16180F] dark:text-[#EEF0E6] my-2">
                  80 mg/kg
                </p>
                <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F]">
                  {lang === 'nl' ? 'Toegevoegde hoeveelheid, verplicht sinds 9 oktober 2025.' : 'Added amount, mandatory since 9 October 2025.'}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-r-xl border-l-4 border-[#1E7253] dark:border-[#4FB88F] bg-[#1E7253]/10 dark:bg-[#4FB88F]/10">
              <p className="text-base text-[#16180F] dark:text-[#EEF0E6] leading-relaxed">
                {lang === 'nl' ? (
                  <>
                    Lora kiest niet. Ze legt de waarden naast elkaar, citeert de verordening, meldt het gemeten restgehalte uit de FAVV-analyse en zet de vraag op <strong className="text-[#6B4A8F] dark:text-[#B497D6]">tegenstrijdig</strong> tot iemand beslist.
                  </>
                ) : (
                  <>
                    Lora doesn’t pick. She lays the values side by side, cites the regulation, reports the measured residue from the FASFC analysis and marks the question <strong className="text-[#6B4A8F] dark:text-[#B497D6]">conflicting</strong> until someone decides.
                  </>
                )}
              </p>
              <p className="text-sm text-[#4B4E45] dark:text-[#A9AD9F] mt-2">
                {lang === 'nl'
                  ? 'Je documenten zijn het probleem, niet je antwoord. Een retailer vraagt bewijs, geen geruststelling.'
                  : 'Your documents are the problem, not your answer. A retailer asks for evidence, not reassurance.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section: Pilot */}
        <section id="lora-pilot" className="bg-[#1E7253] dark:bg-[#12150F] text-white dark:text-[#EEF0E6] py-16 transition-colors border-t border-[#DCDAD0] dark:border-[#2D3226]">
          <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#A9AD9F] dark:text-[#4FB88F] font-bold mb-2">
                Pilot
              </p>
              <h2 className="lora-font-serif text-3xl sm:text-4xl font-semibold mb-4 text-white dark:text-[#EEF0E6]">
                {lang === 'nl'
                  ? 'Eén vragenlijst. Nog dezelfde dag klaar voor review. Vaste prijs.'
                  : 'One questionnaire. Ready for review the same day. Fixed price.'}
              </h2>
              <p className="text-base text-white/90 dark:text-[#A9AD9F] leading-relaxed max-w-[52ch]">
                {lang === 'nl'
                  ? 'Je krijgt de antwoorden, het reviewrapport met de statussen en de lijst van wat je niet kan bewijzen. Bevalt het niet, dan stopt het daar.'
                  : 'You get the answers, the review report with the statuses and the list of what you can’t prove. If you don’t like it, it ends there.'}
              </p>
            </div>
            <div>
              <a
                href="mailto:hello@qualora.be?subject=Pilot%20leveranciersvragenlijst"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-base bg-white text-[#1E7253] hover:bg-[#F7F6F1] dark:bg-[#4FB88F] dark:text-[#0B1A13] dark:hover:bg-[#6CCBA5] transition-all shadow-md"
              >
                {lang === 'nl' ? 'Start de pilot' : 'Start the pilot'}
              </a>
              <p className="text-sm text-white/80 dark:text-[#A9AD9F] mt-3.5 leading-relaxed">
                hello@qualora.be<br />+32 (0)2 588 42 10
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#DCDAD0] dark:border-[#2D3226] py-8 text-sm text-[#4B4E45] dark:text-[#A9AD9F]">
        <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          <div>
            <span className="lora-font-serif text-lg font-semibold text-[#16180F] dark:text-[#EEF0E6]">
              Lora
            </span>
            <br />
            {lang === 'nl'
              ? 'Een toepassing van Qualora · AI-ondersteund QA-werk voor de voedingssector · België'
              : 'A Qualora application · AI-supported QA work for the food industry · Belgium'}
          </div>
          <div>
            <a href="mailto:hello@qualora.be" className="hover:underline">hello@qualora.be</a>
            <br />
            <a href="tel:+3225884210" className="hover:underline">+32 (0)2 588 42 10</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
