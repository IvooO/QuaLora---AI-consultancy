# Qualora — AI Consultancy & Automation Landing Page for Food Companies

A high-performance, multilingual responsive landing page for Qualora (AI consultancy and workflow automation tailored for food industry businesses), featuring instant EN/NL/FR localization, an interactive 2-minute Food AI Readiness assessment, a discovery call booking workflow, and turnkey GitHub Pages deployment.

## User Review & Critical Decisions

> [!IMPORTANT]
> The clarifying questions were skipped; recommended standards are adopted below to deliver an exceptional, production-grade experience:
> - **Discovery Call Booking**: An interactive modal form capturing company name, sector (processing, bakery, beverage, distribution, etc.), team size, and contact details with instant local confirmation and email dispatch option.
> - **AI Readiness Assessment**: A built-in interactive assessment for food executives (5 quick operational diagnostics on recipe/spec management, quality & traceability, demand planning, supplier documentation, and order desk automation) that produces an actionable score, category breakdown, and time-saving potential, with an option to link to the Claude artifact.
> - **GitHub Pages Readiness**: Vite configured with relative base path (`base: './'`), zero-dependency export verification, and an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`) plus an export-ready production build.

---

## 1. Overview & Core Concept

- **What It Does**: Presents Qualora's unique value proposition: helping food manufacturers, processors, and distributors identify where AI saves time, then deploying working automations tailored to their existing workflows.
- **Target Audience / Persona**: Food industry CEOs, plant managers, operations directors, and quality managers in Belgium, the Netherlands, France, and international markets.
- **Key Value**: Demystifies AI for the food sector, offering practical roadmap generation, staff training, bespoke workflow automations (traceability, HACCP/spec sheets, demand planning), backed by a free initial audit.

---

## 2. User Experience & Visual Design

- **Visual Identity & Color Palette**:
  - Rooted in organic sustainability and precision: Deep Forest Ink (`#10261C`), Sage Background (`#F4F6F2`), Card Surface (`#FFFFFF`), Emerald Green Accent (`#1F7A5C`), Soft Sage Mint (`#DDE9E1`), and Deep Card Emerald (`#1A3A2D`).
  - Dark mode fully supported through clean semantic CSS variables preserving contrast and eye comfort.
- **Typography & Font Pairing**:
  - Display & Headings: `Bricolage Grotesque` (punchy, modern editorial, tight tracking).
  - Body Text: `DM Sans` (clean, ergonomic legibility for technical and business reading).
  - No decorative pills or artificial telemetry clutter; clean typographical hierarchy with editorial numbering (`01. AI Consultancy`, `02. Workflow Automation`).
- **Section Flow & Key User Journey**:
  1. **Top Bar**: Minimalist header conforming to the 3-Zone Top Bar Contract (Wordmark, Nav links `What we do` & `Contact`, and Language selector `NL | FR | EN`).
  2. **Hero Section**: Strong value proposition headline, contextual subhead, primary CTA ("Request a discovery call"), and secondary CTA ("Take the AI readiness test →").
  3. **Core Services**: Two marquee cards (`AI Consultancy` and `Workflow Automation`) detailing high-impact food industry use cases with the promise: *"Every project starts with a free audit."*
  4. **Interactive Food AI Readiness Quiz**: Built-in 5-question diagnostic covering real food business bottlenecks (HACCP compliance & spec lookup, supplier certificate tracking, order intake & ERP matching, production scheduling, cold-chain anomaly monitoring). Instant personalized score & action report.
  5. **Discovery Call & Contact Capture**: Seamless high-conversion booking form with quick slot preferences, sector selection, and immediate feedback.
  6. **Footer**: Clean corporate legal entity notices, VAT/BCE details, language switcher mirror, and copyright.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Full-Featured React Implementation vs Static HTML**:
  - *Chosen Approach*: Build as a modular, lightning-fast React + TypeScript application with Tailwind CSS, while retaining zero external runtime server requirements so it can be compiled to pure static HTML/JS/CSS for GitHub Pages.
  - *Why*: Enables rich micro-interactions (instant multilingual switching without reload, interactive quiz step navigation, form validation, animated modal drawer) while maintaining 100% compatibility with GitHub Pages.
- **Decision 2: Multilingual Architecture**:
  - *Chosen Approach*: Type-safe dictionary covering EN, NL, and FR with automatic browser language detection, URL hash preservation, and persistence in `localStorage`.
  - *Why*: Food companies across the Benelux and European markets operate in multilingual environments; instant language switching is crucial for conversion.
- **Decision 3: GitHub Pages Deployment Strategy**:
  - *Chosen Approach*: Configure `base: './'` in `vite.config.ts`, provide `.github/workflows/deploy.yml` for automated GitHub Actions publishing, and provide an explicit `gh-pages` export script.
  - *Why*: Allows the repository to be pushed directly to GitHub and published with one click without broken asset paths or manual build headaches.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────┐
│                          Qualora App                            │
│                                                                 │
│  ┌───────────────────────┐    ┌───────────────────────────────┐ │
│  │   LanguageProvider    │    │      Assessment State         │ │
│  │ (EN / NL / FR State)  │    │ (5-Step Food Diagnostic Quiz) │ │
│  └───────────┬───────────┘    └───────────────┬───────────────┘ │
│              │                                │                 │
│  ┌───────────▼────────────────────────────────▼───────────────┐ │
│  │                        App Shell                           │ │
│  │  ┌──────────────┐ ┌───────────────┐ ┌────────────────────┐ │ │
│  │  │ Header & Nav │ │  Hero Banner  │ │ Services (Bento)   │ │ │
│  │  └──────────────┘ └───────────────┘ └────────────────────┘ │ │
│  │  ┌──────────────┐ ┌───────────────┐ ┌────────────────────┐ │ │
│  │  │ Readiness    │ │ Contact &     │ │ Footer &           │ │ │
│  │  │ Assessment   │ │ Discovery     │ │ Legal Entity       │ │ │
│  │  └──────────────┘ └───────────────┘ └────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                 GitHub Pages Build Pipeline                │ │
│  │  Vite relative bundle ('./')  ──►  dist/ static directory  │ │
│  │  .github/workflows/deploy.yml ──►  github-pages deployment │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

- **State Management**:
  - `language`: Stored in `localStorage` ('ql'), with fallback to `navigator.language` (nl, fr, en).
  - `quizState`: Current question index, answer selections, calculated score, and sector recommendations.
  - `bookingModal`: Open/closed state, form inputs, validation errors, and submission confirmation.
- **Export & Build**:
  - Build output generated in `dist/` containing `index.html` and bundled assets with relative asset linking.
  - Ready for GitHub Pages hosting out of the box.
