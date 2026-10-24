export type Language = 'en' | 'nl' | 'fr';

export interface Translations {
  nav: {
    services: string;
    readiness: string;
    contact: string;
    bookCall: string;
  };
  hero: {
    kicker: string;
    h1: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    foodSectors: string;
  };
  services: {
    kicker: string;
    title: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    freeAudit: string;
    solutionsKicker: string;
    solutionsTitle: string;
    solutionItems: Array<{
      tag: string;
      title: string;
      desc: string;
      impact: string;
    }>;
  };
  quiz: {
    kicker: string;
    title: string;
    subtitle: string;
    questionCount: string;
    startBtn: string;
    nextBtn: string;
    prevBtn: string;
    seeResultsBtn: string;
    retakeBtn: string;
    externalLink: string;
    externalLinkDesc: string;
    scoreTitle: string;
    estimatedSavings: string;
    hoursPerWeek: string;
    auditCta: string;
    questions: Array<{
      id: string;
      category: string;
      question: string;
      options: Array<{
        label: string;
        points: number;
        hint: string;
      }>;
    }>;
    tiers: {
      starter: {
        title: string;
        desc: string;
        focus: string;
      };
      intermediate: {
        title: string;
        desc: string;
        focus: string;
      };
      advanced: {
        title: string;
        desc: string;
        focus: string;
      };
    };
  };
  contact: {
    title: string;
    desc: string;
    emailLabel: string;
    phoneLabel: string;
    openModalBtn: string;
    guarantee: string;
  };
  modal: {
    title: string;
    subtitle: string;
    companyLabel: string;
    companyPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    sectorLabel: string;
    sectors: string[];
    challengeLabel: string;
    challengePlaceholder: string;
    submitBtn: string;
    cancelBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  footer: {
    entity: string;
    vat: string;
    note: string;
    allRightsReserved: string;
    ghPagesGuide: string;
  };
}
