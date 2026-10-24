import { Language, Translations } from '../types';

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      services: "What we do",
      readiness: "AI Readiness Test",
      contact: "Contact",
      bookCall: "Book Call",
    },
    hero: {
      kicker: "AI consultancy · Workflow automation",
      h1: "AI consultancy and workflow automation for food companies.",
      subhead: "We help food companies find where AI saves time, then put it to work.",
      ctaPrimary: "Request a discovery call",
      ctaSecondary: "Take the AI readiness test →",
      foodSectors: "Bakery & Confectionery · Dairy & Cheese · Meat & Prepared Foods · Beverage · Distribution & Logistics",
    },
    services: {
      kicker: "What we do",
      title: "From first question to working solution.",
      card1Title: "AI consultancy",
      card1Desc: "A clear view of where AI pays off in your business, a practical roadmap and training for your team.",
      card2Title: "Workflow automation",
      card2Desc: "Automation built around the way your team already works, with your people in control.",
      freeAudit: "Every project starts with a free audit.",
      solutionsKicker: "Industry Use Cases",
      solutionsTitle: "Practical AI automations built for the food plant & back office.",
      solutionItems: [
        {
          tag: "Quality & Compliance",
          title: "Certificate of Analysis (COA) Auto-Intake",
          desc: "Automatically extract allergen specs, microbiological thresholds, and lab data from incoming supplier PDFs into your ERP or QA database.",
          impact: "Saves 12+ hours/week in quality admin"
        },
        {
          tag: "Supply Chain & Order Desk",
          title: "Intelligent Order Intake & SKU Matching",
          desc: "Parse customer purchase orders from email, PDF, or EDI and match irregular customer item codes to exact ERP inventory items instantly.",
          impact: "Eliminates 95% of manual order re-keying"
        },
        {
          tag: "R&D & Formulation",
          title: "Recipe & Specification Copilot",
          desc: "Query complex multi-ingredient databases, calculate nutritional profiles, and check EU/FDA labeling compliance in seconds.",
          impact: "4x faster new product sign-off"
        },
        {
          tag: "Production & Ops",
          title: "Yield & Shelf-Life Variance Prediction",
          desc: "Anticipate raw ingredient batch variability and optimize batch production schedules to minimize food waste and buffer inventory.",
          impact: "Measurable reduction in spoilage"
        }
      ]
    },
    quiz: {
      kicker: "Food Industry Diagnostic",
      title: "Is your food business ready for AI automation?",
      subtitle: "Answer 5 operational questions to evaluate your potential time savings and receive a prioritized automation roadmap.",
      questionCount: "Question",
      startBtn: "Start 2-Minute Assessment",
      nextBtn: "Next Question →",
      prevBtn: "← Previous",
      seeResultsBtn: "Calculate AI Readiness Score",
      retakeBtn: "Retake Diagnostic",
      externalLink: "Open Comprehensive Claude Artifact Test",
      externalLinkDesc: "Prefer the deep diagnostic questionnaire?",
      scoreTitle: "Your Food AI Readiness Score",
      estimatedSavings: "Estimated Immediate Potential",
      hoursPerWeek: "Hours saved / week across team",
      auditCta: "Claim Your Free Audit Based on Results",
      questions: [
        {
          id: "specs",
          category: "Recipe & Specification Management",
          question: "How does your team currently manage raw material specifications, allergens, and lab certificates?",
          options: [
            { label: "Paper binders or scattered folders; QA team manually verifies each document", points: 10, hint: "Prime candidate for automated document extraction" },
            { label: "Centralized shared drive/Excel with semi-manual cross-checking", points: 20, hint: "Ready for smart spec parsing and compliance alerts" },
            { label: "Modern ERP / PLM system with digital spec repositories", points: 30, hint: "Ideal for deep AI assistant integration and anomaly detection" }
          ]
        },
        {
          id: "orders",
          category: "Customer Orders & Invoicing",
          question: "How do customer purchase orders arrive and enter your ERP / invoicing system?",
          options: [
            { label: "Mostly PDFs or emails typed manually into the ERP by customer service", points: 10, hint: "Highest immediate ROI: 80%+ time reclaimed" },
            { label: "Mix of EDI and manual data entry for irregular orders", points: 20, hint: "Strong candidate for exception-handling automation" },
            { label: "Fully automated EDI across 90%+ of our order volume", points: 30, hint: "Ready for predictive ordering and automated fulfillment logic" }
          ]
        },
        {
          id: "traceability",
          category: "Batch Traceability & HACCP",
          question: "How quickly can your plant complete a full upward/downward batch traceability mock-recall?",
          options: [
            { label: "Several hours to a full day piecing together paper lot records and emails", points: 10, hint: "High operational risk; automation provides instant visibility" },
            { label: "1 to 2 hours using ERP queries and warehouse logs", points: 20, hint: "Can be accelerated to minutes with unified workflow triggers" },
            { label: "Under 15 minutes with barcode/digital lot tracking", points: 30, hint: "Ready for automated AI yield and predictive shelf-life modeling" }
          ]
        },
        {
          id: "planning",
          category: "Production & Demand Planning",
          question: "How do you forecast production schedules against perishable raw materials and customer demand?",
          options: [
            { label: "Weekly planning meetings based on gut feeling and historical spreadsheets", points: 10, hint: "Immediate opportunity to eliminate waste and stockouts" },
            { label: "Basic MRP / ERP scheduling adjusted manually each morning", points: 20, hint: "Ready for AI-driven dynamic re-scheduling" },
            { label: "Advanced forecasting software factoring in seasonality and lead times", points: 30, hint: "Poised for full supply chain autonomous workflow loops" }
          ]
        },
        {
          id: "readiness",
          category: "Team Culture & Technology",
          question: "What is your management and operations team's stance on adopting practical AI tools?",
          options: [
            { label: "Curious but skeptical; we need simple, no-fuss tools that integrate quietly", points: 10, hint: "We focus on human-in-the-loop, zero-disruption automations" },
            { label: "Several individuals already experiment with ChatGPT for email and summaries", points: 20, hint: "Team is primed for custom domain-specific tools" },
            { label: "Strategic priority from leadership; actively seeking implementation partners", points: 30, hint: "Ready for rapid multi-department deployment" }
          ]
        }
      ],
      tiers: {
        starter: {
          title: "High-Impact Quick-Win Stage",
          desc: "Your organization has significant manual overhead in administrative, QA, and order-entry workflows. Simple, low-friction AI automations can unlock rapid time savings without disrupting daily factory operations.",
          focus: "Priority: COA document extraction & customer order email auto-intake."
        },
        intermediate: {
          title: "Automation Accelerator Stage",
          desc: "You have sound digital systems and structured data in place. Introducing targeted AI workflow automations will eliminate departmental bottlenecks between QA, procurement, and production.",
          focus: "Priority: Spec validation copilot, ERP reconciliation & yield prediction."
        },
        advanced: {
          title: "Scale & Enterprise Optimization Stage",
          desc: "Your foundational operations are highly digitalized. You are positioned to leverage bespoke AI agents for end-to-end supply chain responsiveness and autonomous compliance auditing.",
          focus: "Priority: End-to-end predictive demand, dynamic scheduling & supplier scorecards."
        }
      }
    },
    contact: {
      title: "Request a discovery call.",
      desc: "Tell us about your company. The call includes a free audit of where AI can help.",
      emailLabel: "Direct Email",
      phoneLabel: "Phone & WhatsApp",
      openModalBtn: "Schedule Free Discovery Call",
      guarantee: "100% confidential · No sales pitch · Concrete recommendations"
    },
    modal: {
      title: "Request Your Free AI Audit",
      subtitle: "30-minute discovery call tailored specifically to your food business operations.",
      companyLabel: "Company Name",
      companyPlaceholder: "e.g. Delvaux Food Solutions",
      nameLabel: "Your Name & Role",
      namePlaceholder: "e.g. Marc Dubois, Operations Director",
      emailLabel: "Work Email",
      emailPlaceholder: "marc@delvauxfood.be",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+32 470 00 00 00",
      sectorLabel: "Food Subsector",
      sectors: [
        "Bakery, Pastry & Cereals",
        "Meat, Poultry & Fish Processing",
        "Dairy, Cheese & Plant-Based",
        "Prepared Meals, Soups & Convenience",
        "Confectionery, Chocolate & Snacks",
        "Beverages, Brewing & Juices",
        "Ingredients, Spices & Additives",
        "Food Logistics & Distribution",
        "Other Food Business"
      ],
      challengeLabel: "What process takes too much manual time today?",
      challengePlaceholder: "e.g., checking incoming supplier certificates, re-keying customer orders, updating allergen sheets...",
      submitBtn: "Confirm & Request Free Audit",
      cancelBtn: "Cancel",
      successTitle: "Discovery Request Received!",
      successDesc: "Thank you. We will review your company profile and get back to you within 24 business hours with suggested time slots for your free audit.",
      closeBtn: "Done"
    },
    footer: {
      entity: "Qualora SRL / BV",
      vat: "BCE / BTW BE 0123.456.789",
      note: "Working name, to be confirmed.",
      allRightsReserved: "All rights reserved.",
      ghPagesGuide: "GitHub Pages Instructions"
    }
  },
  nl: {
    nav: {
      services: "Wat we doen",
      readiness: "AI-Readiness Test",
      contact: "Contact",
      bookCall: "Gesprek Boeken",
    },
    hero: {
      kicker: "AI-advies · Workflowautomatisering",
      h1: "AI-advies en workflowautomatisering voor voedingsbedrijven.",
      subhead: "We helpen voedingsbedrijven ontdekken waar AI tijd bespaart en zetten het daarna aan het werk.",
      ctaPrimary: "Vraag een kennismakingsgesprek aan",
      ctaSecondary: "Doe de AI-readiness test →",
      foodSectors: "Bakkerij & Zoetwaren · Zuivel & Kaas · Vlees & Bereide Gerechten · Dranken · Distributie & Logistiek",
    },
    services: {
      kicker: "Wat we doen",
      title: "Van eerste vraag tot werkende oplossing.",
      card1Title: "AI-advies",
      card1Desc: "Een helder beeld van waar AI loont in uw bedrijf, een praktische roadmap en training voor uw team.",
      card2Title: "Workflowautomatisering",
      card2Desc: "Automatisering rond de manier waarop uw team al werkt, met uw mensen aan het stuur.",
      freeAudit: "Elk project begint met een gratis audit.",
      solutionsKicker: "Praktijkvoorbeelden",
      solutionsTitle: "Concret toepasbare AI-automatiseringen voor fabriek en administratie.",
      solutionItems: [
        {
          tag: "Kwaliteit & Compliance",
          title: "Automatische COA- & Certificaatinname",
          desc: "Haal automatisch allergeenspecificaties, microbiologische normen en labo-resultaten uit inkomende PDF's naar uw ERP of kwaliteitssysteem.",
          impact: "Bespaart 12+ uur/week op kwaliteitsadministratie"
        },
        {
          tag: "Orderdesk & Verkoop",
          title: "Slimme Orderinname & Artikelmatching",
          desc: "Lees bestelbonnen uit e-mails of PDF's en koppel afwijkende klantcodes automatisch aan de exacte interne ERP-artikelen.",
          impact: "Voorkomt 95% van handmatig overtypen"
        },
        {
          tag: "R&D & Recepturen",
          title: "Recept- & Specificatie-Assistent",
          desc: "Doorzoek complexe ingrediëntendatabanken, bereken voedingswaarden en verifieer etiketteringsnormen in seconden.",
          impact: "4x snellere goedkeuring van nieuwe recepten"
        },
        {
          tag: "Productie & Planning",
          title: "Voorspelling van Rendement & Houdbaarheid",
          desc: "Anticipeer op variabiliteit van grondstoffen en optimaliseer productieseries om bederf en buffervoorraad te beperken.",
          impact: "Meetbare afname van voedselverspilling"
        }
      ]
    },
    quiz: {
      kicker: "Diagnose voor Voedingsbedrijven",
      title: "Is uw voedingsbedrijf klaar voor AI-automatisering?",
      subtitle: "Beantwoord 5 korte operationele vragen om uw potentiële tijdwinst in kaart te brengen en ontvang een prioriteitenplan.",
      questionCount: "Vraag",
      startBtn: "Start de 2-Minuten Scan",
      nextBtn: "Volgende Vraag →",
      prevBtn: "← Vorige",
      seeResultsBtn: "Bereken AI-Readiness Score",
      retakeBtn: "Opnieuw Scannen",
      externalLink: "Open Uitgebreide Claude Artifact Test",
      externalLinkDesc: "Liever de diepgaande diagnostische vragenlijst?",
      scoreTitle: "Uw Food AI Readiness Score",
      estimatedSavings: "Geschat Direct Potentieel",
      hoursPerWeek: "Uur besparing / week over het team",
      auditCta: "Vraag Gratis Audit Aan op Basis van Resultaat",
      questions: [
        {
          id: "specs",
          category: "Receptuur & Specificatiebeheer",
          question: "Hoe beheert uw team vandaag grondstoffenspecificaties, allergenen en analysecertificaten?",
          options: [
            { label: "Papieren mappen of losse mappen; kwaliteitsdienst controleert elk document manueel", points: 10, hint: "Ideaal startpunt voor automatische documentextractie" },
            { label: "Gedeelde schijf / Excel met gedeeltelijk handmatige kruiscontroles", points: 20, hint: "Klaar voor slimme parsing en automatische afwijkingswaarschuwingen" },
            { label: "Modern ERP / PLM-systeem met digitale specificatiemodules", points: 30, hint: "Geschikt voor geavanceerde AI-assistenten en kwaliteitsdetectie" }
          ]
        },
        {
          id: "orders",
          category: "Klantorders & Facturatie",
          question: "Hoe komen bestellingen binnen en hoe belanden ze in uw ERP-systeem?",
          options: [
            { label: "Voornamelijk via PDF of e-mail, handmatig overgetypt door de binnendienst", points: 10, hint: "Grootste directe ROI: 80%+ tijdwinst" },
            { label: "Mix van EDI en handmatige verwerking voor uitzonderingen", points: 20, hint: "Uitstekend voor automatische uitzonderingsafhandeling" },
            { label: "Volledig geautomatiseerde EDI voor meer dan 90% van het volume", points: 30, hint: "Klaar voor voorspellende orderintake en geautomatiseerde logistiek" }
          ]
        },
        {
          id: "traceability",
          category: "Traceerbaarheid & FAVV / IFS / BRC",
          question: "Hoe snel kan uw bedrijf een volledige opwaartse en neerwaartse traceeroefening afronden?",
          options: [
            { label: "Enkele uren tot een halve dag aan papierwerk en zoekwerk in e-mails", points: 10, hint: "Verhoogd operationeel risico; AI creëert direct overzicht" },
            { label: "1 tot 2 uur met ERP-zoekopdrachten en magazijnrapporten", points: 20, hint: "Kan versneld worden tot minuten via gekoppelde workflows" },
            { label: "Binnen 15 minuten dankzij digitale barcodes en partijbeheer", points: 30, hint: "Klaar voor voorspellende houdbaarheids- en rendementsmodellen" }
          ]
        },
        {
          id: "planning",
          category: "Productie & Vraagplanning",
          question: "Hoe stemt u de productieplanning af op verse grondstoffen en klantvraag?",
          options: [
            { label: "Wekelijks overleg op basis van ervaring en historische spreadsheets", points: 10, hint: "Directe kans om derving en manco's te reduceren" },
            { label: "Standaard MRP / ERP-planning, elke ochtend manueel bijgesteld", points: 20, hint: "Klaar voor dynamische AI-herplanning" },
            { label: "Geavanceerde planningssoftware met seizoenscorrecties", points: 30, hint: "Klaar voor end-to-end autonome supply-chain workflows" }
          ]
        },
        {
          id: "readiness",
          category: "Team & Technologie",
          question: "Hoe staat uw management en operationele team tegenover praktische AI-hulpmiddelen?",
          options: [
            { label: "Nieuwsgierig maar nuchter; we willen eenvoudige tools zonder gedoe", points: 10, hint: "Wij focussen op human-in-the-loop zonder verstoring van de vloer" },
            { label: "Verschillende collega's gebruiken al ChatGPT voor e-mails en teksten", points: 20, hint: "Team is klaar voor branchespecifieke workflows" },
            { label: "Strategische prioriteit van de directie; zoeken implementatiepartner", points: 30, hint: "Klaar voor snelle uitrol over meerdere afdelingen" }
          ]
        }
      ],
      tiers: {
        starter: {
          title: "Fase 1: Snelle Administratieve Winst",
          desc: "Uw organisatie ervaart veel handmatige last bij orderinvoer, specificatiecontrole en labodocumenten. Eenvoudige, niet-verstorende AI-automatiseringen leveren meteen merkbare tijdwinst op.",
          focus: "Prioriteit: Automatische COA-extractie & slimme orderinname uit e-mail/PDF."
        },
        intermediate: {
          title: "Fase 2: Versnelling van Bedrijfsprocessen",
          desc: "Uw digitale basis staat stevig. Gerichte AI-workflows heffen de knelpunten op tussen kwaliteitszorg, aankoop en productie.",
          focus: "Prioriteit: Specificatie-assistent, ERP-matching en rendementsprognoses."
        },
        advanced: {
          title: "Fase 3: Geavanceerde Schaalbaarheid",
          desc: "Uw bedrijfsprocessen zijn vergevorderd gedigitaliseerd. U bent klaar voor gespecialiseerde AI-agents voor proactieve supply chain en autonome auditondersteuning.",
          focus: "Prioriteit: Dynamische productieplanning en proactief leveranciersbeheer."
        }
      }
    },
    contact: {
      title: "Vraag een kennismakingsgesprek aan.",
      desc: "Vertel ons over uw bedrijf. Het gesprek bevat een gratis audit van waar AI kan helpen.",
      emailLabel: "Directe E-mail",
      phoneLabel: "Telefoon & WhatsApp",
      openModalBtn: "Plan Vrijblijvend Gesprek",
      guarantee: "100% vertrouwelijk · Geen verkoopspraatje · Concrete aanbevelingen"
    },
    modal: {
      title: "Vraag uw Gratis AI-Audit Aan",
      subtitle: "Kennismaking van 30 minuten specifiek afgestemd op uw voedingsactiviteiten.",
      companyLabel: "Bedrijfsnaam",
      companyPlaceholder: "bijv. Bakkerij Van Damme NV",
      nameLabel: "Uw Naam & Functie",
      namePlaceholder: "bijv. Peter De Smet, Operationeel Directeur",
      emailLabel: "Zakelijk E-mailadres",
      emailPlaceholder: "peter@vandamme.be",
      phoneLabel: "Telefoonnummer",
      phonePlaceholder: "+32 470 12 34 56",
      sectorLabel: "Voedingsdeelsector",
      sectors: [
        "Bakkerij, Banket & Granen",
        "Vlees-, Gevogelte- & Visverwerking",
        "Zuivel, Kaas & Plantaardige Alternatieven",
        "Bereide Gerechten, Soepen & Gemaksvoeding",
        "Chocolade, Zoetwaren & Snacks",
        "Dranken, Brouwerij & Sappen",
        "Ingrediënten, Specerijen & Additieven",
        "Voedingsdistributie & Groothandel",
        "Ander Voedingsbedrijf"
      ],
      challengeLabel: "Welk proces kost vandaag te veel handmatige tijd?",
      challengePlaceholder: "bijv. controleren van grondstoffenspecificaties, overtypen van klantorders, bijwerken van allergenenbladen...",
      submitBtn: "Bevestig & Vraag Gratis Audit Aan",
      cancelBtn: "Annuleren",
      successTitle: "Aanvraag Goed Ontvangen!",
      successDesc: "Hartelijk dank. We bekijken uw bedrijfsprofiel en nemen binnen 24 uur contact met u op met concrete tijdsvoorstellen voor de gratis audit.",
      closeBtn: "Klaar"
    },
    footer: {
      entity: "Qualora SRL / BV",
      vat: "BCE / BTW BE 0123.456.789",
      note: "Werknaam, nog te bevestigen.",
      allRightsReserved: "Alle rechten voorbehouden.",
      ghPagesGuide: "GitHub Pages Handleiding"
    }
  },
  fr: {
    nav: {
      services: "Ce que nous faisons",
      readiness: "Test de Maturité IA",
      contact: "Contact",
      bookCall: "Réserver un Appel",
    },
    hero: {
      kicker: "Conseil en IA · Automatisation des workflows",
      h1: "Conseil en IA et automatisation des workflows pour les entreprises alimentaires.",
      subhead: "Nous aidons les entreprises alimentaires à trouver où l’IA fait gagner du temps, puis à la mettre au travail.",
      ctaPrimary: "Demander un appel de découverte",
      ctaSecondary: "Faire le test de maturité IA →",
      foodSectors: "Boulangerie & Céréales · Produits Laitiers & Fromages · Viandes & Plats Préparés · Boissons · Distribution & Logistique",
    },
    services: {
      kicker: "Ce que nous faisons",
      title: "De la première question à la solution qui fonctionne.",
      card1Title: "Conseil en IA",
      card1Desc: "Une vision claire de là où l’IA est rentable dans votre entreprise, une feuille de route pratique et une formation pour votre équipe.",
      card2Title: "Automatisation des workflows",
      card2Desc: "Une automatisation construite autour de la façon dont votre équipe travaille déjà, avec vos équipes aux commandes.",
      freeAudit: "Chaque projet commence par un audit gratuit.",
      solutionsKicker: "Cas d'Usage Sectoriels",
      solutionsTitle: "Des automatisations IA concrètes conçues pour l'usine et l'administration.",
      solutionItems: [
        {
          tag: "Qualité & Conformité",
          title: "Traitement Automatique des Bulletins d'Analyse (COA)",
          desc: "Extrayez automatiquement les spécifications allergènes, les normes microbiologiques et les données labo des PDF fournisseurs vers votre ERP/logiciel qualité.",
          impact: "Économise 12+ heures/semaine d'administration qualité"
        },
        {
          tag: "Commandes & ADV",
          title: "Saisie Intelligente des Commandes & Matching ERP",
          desc: "Analysez les bons de commande reçus par e-mail ou PDF et associez automatiquement les références clients disparates aux codes articles ERP exacts.",
          impact: "Élimine 95% des resaisies manuelles"
        },
        {
          tag: "R&D & Formulation",
          title: "Copilote Recettes & Fiches Techniques",
          desc: "Interrogez les bases de données d'ingrédients, calculez les profils nutritionnels et validez l'étiquetage réglementaire européen en quelques secondes.",
          impact: "Validation des nouveaux produits 4x plus rapide"
        },
        {
          tag: "Production & Planification",
          title: "Prévision du Rendement & Gestion des DLC",
          desc: "Anticipez la variabilité des matières premières et optimisez les séquences de fabrication pour réduire le gaspillage alimentaire.",
          impact: "Réduction mesurable des pertes de production"
        }
      ]
    },
    quiz: {
      kicker: "Diagnostic Industrie Alimentaire",
      title: "Votre entreprise agroalimentaire est-elle prête pour l'IA ?",
      subtitle: "Répondez à 5 questions opérationnelles pour évaluer vos gains de temps potentiels et obtenir une feuille de route prioritaire.",
      questionCount: "Question",
      startBtn: "Démarrer l'Évaluation (2 min)",
      nextBtn: "Question Suivante →",
      prevBtn: "← Précédent",
      seeResultsBtn: "Calculer mon Score de Maturité",
      retakeBtn: "Recommencer le Diagnostic",
      externalLink: "Ouvrir l'Artefact Claude Approfondi",
      externalLinkDesc: "Vous souhaitez le questionnaire diagnostique complet ?",
      scoreTitle: "Votre Score de Maturité IA Alimentaire",
      estimatedSavings: "Potentiel Immédiat Estimé",
      hoursPerWeek: "Heures économisées / semaine pour l'équipe",
      auditCta: "Demander l'Audit Gratuit Basé sur ces Résultats",
      questions: [
        {
          id: "specs",
          category: "Gestion des Recettes & Spécifications",
          question: "Comment votre équipe gère-t-elle les fiches techniques matières premières, allergènes et certificats d'analyse ?",
          options: [
            { label: "Classeurs papier ou dossiers dispersés ; l'équipe qualité vérifie tout manuellement", points: 10, hint: "Candidat prioritaire pour l'extraction automatique de documents" },
            { label: "Dossier partagé / Excel avec vérifications semi-manuelles", points: 20, hint: "Prêt pour l'analyse intelligente et les alertes de non-conformité" },
            { label: "ERP / PLM moderne avec modules de spécifications centralisés", points: 30, hint: "Idéal pour l'intégration de copilotes IA avancés" }
          ]
        },
        {
          id: "orders",
          category: "Commandes Clients & Facturation",
          question: "Comment les commandes clients arrivent-elles et sont-elles saisies dans votre ERP ?",
          options: [
            { label: "Principalement par PDF ou e-mail, resaisies à la main par l'ADV", points: 10, hint: "ROI immédiat maximal : plus de 80% de temps récupéré" },
            { label: "Mélange d'EDI et de saisie manuelle pour les cas particuliers", points: 20, hint: "Idéal pour l'automatisation des exceptions" },
            { label: "EDI entièrement automatisé sur plus de 90% des volumes", points: 30, hint: "Prêt pour les prévisions de commande et l'allocation intelligente" }
          ]
        },
        {
          id: "traceability",
          category: "Traçabilité & Normes IFS / BRC",
          question: "Combien de temps prend un exercice complet de traçabilité amont/aval dans votre usine ?",
          options: [
            { label: "Plusieurs heures voire une demi-journée de recherche dans les papiers et mails", points: 10, hint: "Risque opérationnel ; l'IA offre une visibilité instantanée" },
            { label: "1 à 2 heures via des requêtes ERP et les feuilles de stock", points: 20, hint: "Peut être ramené à quelques minutes grâce aux flux connectés" },
            { label: "Moins de 15 minutes avec traçabilité par codes-barres informatisée", points: 30, hint: "Prêt pour l'optimisation prédictive des rendements et DLC" }
          ]
        },
        {
          id: "planning",
          category: "Planification de Production & Demande",
          question: "Comment ajustez-vous votre ordonnancement face à la fraîcheur des matières premières et à la demande ?",
          options: [
            { label: "Réunion hebdomadaire basée sur l'expérience et des fichiers Excel historiques", points: 10, hint: "Opportunité immédiate d'éviter ruptures et pertes" },
            { label: "Calcul des besoins ERP standard, réajusté chaque matin à la main", points: 20, hint: "Prêt pour le réordonnancement dynamique par IA" },
            { label: "Logiciel de prévision avancé intégrant saisonnalité et délais", points: 30, hint: "Prêt pour des boucles de chaîne d'approvisionnement autonomes" }
          ]
        },
        {
          id: "readiness",
          category: "Culture d'Équipe & Technologie",
          question: "Quelle est l'attitude de votre direction et de vos équipes envers les outils IA pratiques ?",
          options: [
            { label: "Curieux mais pragmatiques ; nous voulons des outils simples sans friction", points: 10, hint: "Nous privilégions des automatisations transparentes avec l'humain aux commandes" },
            { label: "Plusieurs collègues utilisent déjà ChatGPT pour rédiger des e-mails ou synthèses", points: 20, hint: "L'équipe est mûre pour des outils métiers dédiés" },
            { label: "Priorité stratégique de la direction ; nous cherchons un partenaire de déploiement", points: 30, hint: "Prêt pour un déploiement rapide multi-départements" }
          ]
        }
      ],
      tiers: {
        starter: {
          title: "Étape 1 : Gains Administratifs Immédiats",
          desc: "Votre entreprise supporte une lourde charge manuelle en administration, contrôle qualité et saisie des commandes. Des automatisations IA simples et non intrusives libèrent rapidement des heures précieuses.",
          focus: "Priorité : Extraction des COA et saisie intelligente des commandes clients."
        },
        intermediate: {
          title: "Étape 2 : Accélération des Flux Opérationnels",
          desc: "Votre socle numérique est robuste. Des automatisations IA ciblées éliminent les goulots d'étranglement entre la qualité, les achats et la production.",
          focus: "Priorité : Assistant fiches techniques, réconciliation ERP et prévisions de rendement."
        },
        advanced: {
          title: "Étape 3 : Optimisation & Échelle Entreprise",
          desc: "Vos opérations sont hautement numérisées. Vous êtes prêts à déployer des agents IA dédiés pour la réactivité de la supply chain et l'assistance continue aux audits.",
          focus: "Priorité : Planification dynamique et gestion proactive des fournisseurs."
        }
      }
    },
    contact: {
      title: "Demander un appel de découverte.",
      desc: "Parlez-nous de votre entreprise. L’appel comprend un audit gratuit des endroits où l’IA peut aider.",
      emailLabel: "E-mail Direct",
      phoneLabel: "Téléphone & WhatsApp",
      openModalBtn: "Prendre Rendez-vous Gratuitement",
      guarantee: "100% confidentiel · Aucun discours commercial agressif · Recommandations concrètes"
    },
    modal: {
      title: "Demandez Votre Audit IA Gratuit",
      subtitle: "Échange de 30 minutes taillé sur mesure pour vos opérations agroalimentaires.",
      companyLabel: "Nom de l'entreprise",
      companyPlaceholder: "ex. Délices & Saveurs SA",
      nameLabel: "Votre nom & fonction",
      namePlaceholder: "ex. Claire Laurent, Directrice des Opérations",
      emailLabel: "E-mail professionnel",
      emailPlaceholder: "claire@delicesetsaveurs.be",
      phoneLabel: "Numéro de téléphone",
      phonePlaceholder: "+32 470 00 00 00",
      sectorLabel: "Sous-secteur agroalimentaire",
      sectors: [
        "Boulangerie, Pâtisserie & Céréales",
        "Transformation Viande, Volaille & Poisson",
        "Produits Laitiers, Fromages & Alternatifs Végétaux",
        "Plats Cuisinés, Soupes & Traiteur",
        "Confiserie, Chocolat & Biscuiterie",
        "Boissons, Brasserie & Jus",
        "Ingrédients, Épices & Additifs",
        "Distribution & Négoce Alimentaire",
        "Autre Entreprise Agroalimentaire"
      ],
      challengeLabel: "Quel processus vous prend aujourd'hui trop de temps manuel ?",
      challengePlaceholder: "ex. vérifier les certificats d'analyse fournisseurs, resaisir les commandes reçues par PDF, mettre à jour les allergènes...",
      submitBtn: "Confirmer & Demander l'Audit Gratuit",
      cancelBtn: "Annuler",
      successTitle: "Demande Bien Reçue !",
      successDesc: "Merci beaucoup. Nous analysons votre profil d'activité et revenons vers vous d'ici 24 heures ouvrées avec des créneaux pour l'audit gratuit.",
      closeBtn: "Fermer"
    },
    footer: {
      entity: "Qualora SRL / BV",
      vat: "BCE / BTW BE 0123.456.789",
      note: "Nom de travail, à confirmer.",
      allRightsReserved: "Tous droits réservés.",
      ghPagesGuide: "Guide de Publication GitHub Pages"
    }
  }
};
