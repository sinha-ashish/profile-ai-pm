export type Lang = "en" | "fr";

export type DashCardT = { tag: string; title: string; callout: string; body: string };
export type InstinctT = { tag: string; headline: string; body: string; closing: string };
export type PrincipleT = { n: string; title: string; body: string; visual?: "crisis" };
export type ExpertiseT = { icon: string; title: string; body: string };
export type TimelineT = { dateStrong: string; date: string; role: string; company: string; body: string; chips: string[] };
export type SkillGroupT = { title: string; items: string[] };
export type CertT = { icon: string; title: string; sub: string };
export type TierT = { dot: string; title: string; desc: string; bar: number };
export type FitSubBlockT = { subLabel: string; subBody: string };
export type FitBlockT = { label: string; body: string } | { label: string; subBlocks: FitSubBlockT[] };
export type StudioCardT = { tag: string; title: string; problem: string; judgement: string; url: string; cta: string };

export type Translation = {
  nav: { index: string; dashboard: string; manual: string; studio: string; writing: string; resume: string; cta: string };
  studio: { label: string; h2: string; intro: string; livePill: string; cards: StudioCardT[]; moreLabel: string };
  hero: { badge: string; h1: string; h1Html?: string; sub: string; cta: string; linkedin: string };
  dashboard: { label: string; h2: string; cards: DashCardT[]; complianceTags: string[]; sprintLabel: string; sprintCaption: string; partnersCaption: string; csatCaption: string; adoptionCaption: string };
  expertise: { label: string; h2: string; items: ExpertiseT[] };
  instinct: { label: string; h2: string; cards: InstinctT[] };
  manual: { label: string; h2: string; principles: PrincipleT[] };
  architecture: {
    label: string; h2: string;
    leftBadge: string; leftTitle: string; tiers: TierT[];
    rightLabel: string; rightTitle: string; rightSubtitle: string; rightBody: string; steps: string[];
  };
  experience: { label: string; h2: string; timeline: TimelineT[] };
  skills: { label: string; h2: string; groups: SkillGroupT[]; certs: CertT[] };
  writing: { label: string; h2: string; intro: string };
  fit: { label: string; h2: string; blocks: FitBlockT[] };
  contact: { h2: string; body: string };
  crisis: { title: string; subtitle: string; steps: string[] };
  footer: { tagline: string };
};

const en: Translation = {
  nav: { index: "Index", dashboard: "Dashboard", manual: "Manual", studio: "Studio", writing: "Writing", resume: "Resume", cta: "Let's talk" },
  studio: {
    label: "Studio — Things I've Actually Shipped",
    h2: "I build the tool that forces an honest answer.",
    intro: "Three working products, live and deployed. Each takes something most teams accept as messy or hand-waved — what AI is really worth, how a go-to-market actually holds together, whether the books truly reconcile — and imposes structured judgement on it. Built solo, on my own synthesised methodology, no employer artefacts. This is what applied AI fluency looks like when it's real.",
    livePill: "Live",
    cards: [
      {
        tag: "AI Economics",
        title: "Baseline AI",
        problem: "The AI ROI Ledger. Estimate an initiative's value and cost, track real usage, then reconcile what was promised against what was measured.",
        judgement: "Know what your AI is worth — not just what it costs.",
        url: "https://baseline-ai-psi.vercel.app/",
        cta: "Open →",
      },
      {
        tag: "Product Strategy",
        title: "Horizon GTM",
        problem: "A go-to-market strategy engine that turns a launch from a slide deck of good intentions into a structured, pressure-tested plan.",
        judgement: "Strategy is only real when it survives contact with structure.",
        url: "https://horizon-gtm.vercel.app/",
        cta: "Open →",
      },
      {
        tag: "Autonomous Finance",
        title: "Semantic Reconciliation Engine",
        problem: "Reconciles ledgers against ingested invoices and receipts — reading meaning, not just numbers — resolving forex settlement, dates, and merchant identity across formats, with its reasoning shown in full.",
        judgement: "The machine should explain why the numbers disagree, not just flag that they do.",
        url: "https://the-semantic-reconciliation-engine.vercel.app/",
        cta: "Open →",
      },
    ],
    moreLabel: "More incoming",
  },
  hero: {
    badge: "Senior AI Product Leader · Paris",
    h1: "What gets enterprise AI out of the demo — and into production?",
    sub: "9 years building the governance, delivery cadence, and cross-functional discipline that makes AI dependable at scale. I run the squads, clear the blockers, and ship the use cases.",
    cta: "Get in touch",
    linkedin: "View LinkedIn →",
  },
  dashboard: {
    label: "Execution Dashboard",
    h2: "Results that show up on the P&L, not just the roadmap.",
    cards: [
      { tag: "Performance Metric", title: "AI Production Pipeline", callout: "15+ GenAI Use Cases | 100+ Hrs/Wk Automated", body: "Orchestrating cross-functional engineering squads to rapidly deploy advanced AI capabilities directly into enterprise delivery pipelines." },
      { tag: "Risk Mitigation", title: "Enterprise Compliance Architecture", callout: "€30M Portfolio Guardrailing", body: "Architecting and deploying a unified AI governance infrastructure aligned with the EU AI Act to secure compliant live production deployments." },
      { tag: "Growth & Adoption", title: "Platform Scale & Adoption", callout: "150+ Institutional Partners | 87% CSAT", body: "Architected the 0-to-1 product strategy and go-to-market for an EU-funded deep tech learning platform — scaling institutional adoption from zero to a 150+ partner network across Europe, and driving 55% growth in active adoption within 6 months." },
      { tag: "Agile Velocity", title: "Agile Delivery & Speed", callout: "80/40 Delivery Rule", body: "Architecting high-velocity deployment frameworks that push stable, high-signal iterations to staging environments rapidly — collapsing traditional 3-week enterprise roadmaps to under 2 weeks by moving feedback loops earlier." },
    ],
    complianceTags: ["EU AI Act — Tier II", "Data Lineage", "Model Cards", "Audit Trail"],
    sprintLabel: "Sprint Signal",
    sprintCaption: "80% complete · 40% of standard time",
    partnersCaption: "0 → 150 Partners",
    csatCaption: "CSAT",
    adoptionCaption: "55% adoption growth · 6mo",
  },
  expertise: {
    label: "Core Expertise",
    h2: "The intersection of AI delivery, governance, and product strategy.",
    items: [
      { icon: "🧠", title: "Agentic AI & GenAI Delivery", body: "Agent orchestration, RAG pipelines, vector databases, MCP, and AI observability — applied in enterprise production, not just prototypes." },
      { icon: "⚖️", title: "EU AI Act Governance", body: "Hands-on framework design for compliant AI deployment — risk classification, guardrail systems, and model lifecycle governance aligned to EU regulation." },
      { icon: "📦", title: "Portfolio & Roadmap Ownership", body: "Managing multi-million-euro cross-functional portfolios using SAFe® 6, Lean Portfolio Management, and data-driven CAPEX/OPEX optimisation." },
      { icon: "☁️", title: "Cloud-Native Architecture", body: "Google Cloud (Cloud Digital Leader certified), Vertex AI, AWS Bedrock, Azure DevOps — choosing and integrating the right stack for enterprise AI at scale." },
      { icon: "🔁", title: "Token Economics & AI Ops", body: "Modelling token consumption, optimising inference costs, and building the observability infrastructure that keeps AI systems accountable in production." },
      { icon: "🌍", title: "Cross-Cultural Team Leadership", body: "Building and aligning high-performing squads across 5 countries and 6 teams. Bilingual (English / French), multicultural by design." },
    ],
  },
  instinct: {
    label: "Operating Instinct",
    h2: "Four moments that define how I make decisions.",
    cards: [
      { tag: "Ambiguity", headline: "No brief. Two weeks. An unfamiliar stack.", body: "Brought a business-critical problem from an internal enterprise client at global scale, inside a Group IT model where business units operate with governance on par with external procurement. No clean brief, a two-week window, an unfamiliar tech stack. Proposed a working prototype targeting the core user journeys before being asked, validated it immediately, then ran a 3-day hackathon with tech leads and engineers — functional user journeys delivered in five days.", closing: "Sceptical stakeholders became advocates because they understood why, not just what." },
      { tag: "Decided Not to Build", headline: "The use case I killed before it shipped.", body: "Scoped a centralised AI agent for infrastructure performance monitoring and compliance dashboards — covering historical trend analysis, active correction recommendations, and 1-click semi-automated remediation across ServiceNow, ScienceLogic, log analysis, and security and accessibility code scans. The data integration complexity across disparate systems was too high to justify proceeding. Parked it, redirected the team, and kept a dedicated squad of three engineers exploring feasibility in parallel — while the rest of the portfolio continued shipping. This sits alongside 15+ use cases already confirmed in production, not rolled into that count.", closing: "Knowing what not to build — and when to stop — is the same muscle as knowing what to ship first." },
      { tag: "Growth Mechanics", headline: "Distribution through trust, not spend.", body: "Scaled a 0-to-1 EU-funded platform from zero to a 150+ partner network by aligning with research institutions people already trusted, rather than competing for cold attention. Redesigned onboarding separately for creators and learners to remove first-use friction, and built a free certification mechanic that gave both sides a reason to return.", closing: "The platform was discovered through channels people already trusted — not sold to them cold." },
      { tag: "Builder's Instinct", headline: "I build my own tools before I'm asked to.", body: "Outside the core role, vibe-coded an AI-powered personal system that manages interview prep, positioning, and application content as a structured, reusable, swappable database — the same instinct now directed at enterprise AI delivery: spot the process running on scripts and good intentions, and build the infrastructure that makes it repeatable.", closing: "I built a personal AI Studio before I knew the name for it." },
    ],
  },
  manual: {
    label: "The Leadership Vault — Operating Principles",
    h2: "How decisions actually get made in the squad.",
    principles: [
      { n: "01", title: "Problem Obsession Over Feature Attachment", body: "Our objective is not to release meticulously built features; it is to solve the business problem. When a blocker hits — like an unavailable model — we do not panic. We pivot, explore, and often end up interfacing a more powerful or cost-effective alternative.", visual: "crisis" },
      { n: "02", title: "High-Trust, Ego-Free Execution", body: "I intentionally build self-aware, transparent engineering squads. We prioritize the right outcome over being the loudest voice in the room. Feedback loops are instant, and we move faster because we do not waste time protecting egos." },
      { n: "03", title: "Long-Range Strategic Instinct", body: "I look past immediate roadmaps to anchor product decisions in long-term enterprise scale. I don't just solve the visible ticket; I architect structural solutions that prevent the next ten friction points." },
      { n: "04", title: "Model & Token Fluency", body: "I model user session token metrics, context window spend, and routing optimization to scale AI capability without sacrificing performance or cost discipline. Real fluency across model tiers and multi-model routing — knowing when a lightweight model is the right call versus when a task genuinely needs frontier-level reasoning." },
    ],
  },
  architecture: {
    label: "Architecture Vault",
    h2: "The framework that gets AI use cases from concept to compliant production.",
    leftBadge: "Tri-Tier AI Execution Framework",
    leftTitle: "Right-sized infrastructure for right-sized risk",
    tiers: [
      { dot: "bg-[#D97706]", title: "Tier 1 — Internal Productivity", desc: "Lightweight models · ROI-tracked · API usage capped", bar: 35 },
      { dot: "bg-accent2", title: "Tier 2 — High-Risk / Confidential", desc: "Enterprise cloud only · AWS Bedrock / Vertex AI / Azure · Hard-encrypted", bar: 90 },
      { dot: "bg-[#7C3AED]", title: "Tier 3 — Lightweight Operations", desc: "Fast-track admin workflows · HR & Finance · Business compliance", bar: 60 },
    ],
    rightLabel: "Cross-Functional De-Risking",
    rightTitle: "Clearing the Path to Production",
    rightSubtitle: "How AI use cases actually get to live deployment",
    rightBody: "The architecture is only half the problem. The other half is navigating the org — aligning security teams on encryption standards before they become blockers, working with legal on EU AI Act parameters in parallel with engineering rather than sequentially, and building shared language between compliance and product so governance doesn't feel like a gate. This is the work that makes the Tri-Tier framework operational rather than theoretical.",
    steps: [
      "Map stakeholder risk posture",
      "Build parallel legal + security path",
      "Embed compliance in Definition of Done",
      "Ship with governance built in, not bolted on",
    ],
  },
  experience: {
    label: "Career Timeline",
    h2: "Nine years of building. Always closer to the outcome than the process.",
    timeline: [
      { dateStrong: "Mar 2024", date: "Present", role: "Senior Product Lead", company: "Capgemini · Paris", body: "Led cross-functional AI squads integrating 15+ GenAI use cases into production pipelines. Built the EU AI Act guardrailing framework, architected the 5-module enterprise finance product, and instituted the agile PM capability-building framework securing €200k+ in annual savings. Currently orchestrating expanded cross-functional delivery across 5 countries and 6 teams.", chips: ["EU AI Act", "€30M Portfolio", "RAG", "Vertex AI", "AWS Bedrock", "SAFe® 6"] },
      { dateStrong: "Sep 2021", date: "Aug 2023", role: "Digital Product Owner", company: "EIT Manufacturing · Paris", body: "Built an EU-funded deep tech learning platform from zero to 150+ institutional partners. Full product lifecycle ownership: roadmap, API expansion, release governance, post-launch analytics. Achieved 87% CSAT and +55% active adoption in 6 months.", chips: ["0-to-1", "API Expansion", "87% CSAT", "150+ Partners"] },
      { dateStrong: "Aug 2019", date: "Jul 2021", role: "Digital Product Analyst", company: "FizzyHomes · Paris", body: "Drove full digital infrastructure overhaul in partnership with Commercial and IT leadership. UX redesign based on user journey mapping generated a 27% uplift in conversion rates and established a self-serve analytics infrastructure for Sales & Marketing.", chips: ["UX Research", "+27% Conversion", "Analytics"] },
      { dateStrong: "Apr 2017", date: "Aug 2018", role: "Senior Associate & Data Analyst", company: "Airbnb & Zomato · Gurugram", body: "Translated global product frameworks into market-specific execution roadmaps for 1,000+ partner clients. Engineered behavioural data insights defining 70+ product enhancements across 5 countries.", chips: ["Data Analytics", "Product Execution", "70+ Enhancements"] },
    ],
  },
  skills: {
    label: "Skills & Certifications",
    h2: "The toolkit.",
    groups: [
      { title: "Strategy & Execution", items: ["Product Vision & Roadmap Ownership", "Backlog Prioritisation", "Go-to-Market (GTM)", "Value Stream Mapping", "Use Case Prioritisation"] },
      { title: "AI & Data", items: ["Agent Orchestration & MCP", "RAG & Vector Databases", "Model Versioning & Lifecycle", "AI Observability", "Token Cost Economics"] },
      { title: "Frameworks & Governance", items: ["SAFe® 6.0 & Scrum", "EU AI Act Compliance", "Lean Portfolio Management", "CAPEX/OPEX Optimisation", "P&L Ownership"] },
    ],
    certs: [
      { icon: "🏆", title: "PMP", sub: "PMI · 2023" },
      { icon: "📐", title: "SAFe® Agilist", sub: "Scaled Agile · Mar 2026" },
      { icon: "⚙️", title: "SAFe® DevOps Practitioner", sub: "Scaled Agile · Sep 2025" },
      { icon: "☁️", title: "Cloud Digital Leader", sub: "Google · Oct 2025" },
      { icon: "🔷", title: "AZ-900 Azure Essentials", sub: "Microsoft · Jul 2025" },
    ],
  },
  writing: {
    label: "Writing",
    h2: "Notes from inside enterprise AI delivery.",
    intro: "Articles published roughly every week — on AI delivery, enterprise product, and execution frameworks.",
  },
  fit: {
    label: "Working Philosophy",
    h2: "How I work best.",
    blocks: [
      { label: "Environment", body: "High autonomy, fast sign-off culture. I do my best work when squads are empowered to move without multi-layered bureaucracy — slower organizational velocity is fine; that's exactly the zone where I add the most value. What's non-negotiable is the freedom to act on that velocity once I'm in." },
      { label: "Ownership", body: "Genuine product ownership, not delivery-management-in-name-only. I want to shape the roadmap, not just orchestrate someone else's." },
      { label: "Culture", body: "Fiercely user-obsessed, growth-centered teams that default to giving each other the benefit of the doubt. Ego-free isn't a slogan here — it's an operating requirement." },
      { label: "WHAT I BRING", subBlocks: [
        { subLabel: "Applied AI Fluency", subBody: "Through sustained, hands-on development and deployment of GenAI prototypes across a wide range of use cases — not just directing delivery but building directly inside it — I've developed genuine technical fluency across the AI stack: architecture, guardrailing, compliance frameworks, and the economics of running AI at enterprise scale. I'm actively refining the methodologies behind that economic layer, grounded in the Tri-Tier routing framework and token consumption modelling I've built and iterated in production. This isn't fluency by proximity. It's fluency by doing." },
        { subLabel: "Executive AI Arbitrage", subBody: "We're in an unprecedented moment for senior leadership: the pressure to adopt AI is real, but so is the risk of deploying it badly. Most COMEX-level leaders are — rightly — more pragmatic and risk-calibrated than the hype cycle suggests. I'm uniquely placed to operate at that interface: translating AI capability into ROI-justified, risk-calibrated decisions that executives can actually act on, advising on use-case prioritisation, model selection, and budget allocation based on genuine understanding of what AI can and can't do reliably in production. I've done this from inside the delivery layer, which means the advice is grounded in what actually ships — not what looks good in a deck." },
      ] },
    ],
  },
  contact: {
    h2: "Let's build something that matters.",
    body: "Enterprise AI delivery, governance, and product strategy at scale. Reach out if you're working on something serious.",
  },
  crisis: {
    title: "Crisis Resolution Flowchart",
    subtitle: "Emotionally Disassociated Triage Framework",
    steps: ["Step 1: Ruthless Triage", "Step 2: Map Stakeholder Impact", "Step 3: Enforce Hackathon Mode", "Step 4: Deploy Bare Minimum Necessity"],
  },
  footer: { tagline: "Enterprise AI Product Leader · Paris, France" },
};

const fr: Translation = {
  nav: { index: "Accueil", dashboard: "Tableau de bord", manual: "Manuel", writing: "Articles", resume: "CV", cta: "Discutons" },
  hero: {
    badge: "Senior Leader Produit IA · Paris",
    h1: "Comment passer de la démo à la production en IA d'entreprise ?",
    sub: "9 ans à piloter des squads pluridisciplinaires sur des portefeuilles €30M+. Je construis la gouvernance, la cadence de livraison et la rigueur opérationnelle qui rendent l'IA d'entreprise fiable — pas seulement impressionnante en démo.",
    cta: "Me contacter",
    linkedin: "Voir LinkedIn →",
  },
  dashboard: {
    label: "Tableau de bord — Résultats",
    h2: "Des résultats qui s'affichent sur le P&L, pas seulement sur la roadmap.",
    cards: [
      { tag: "Indicateur de performance", title: "Pipeline IA en production", callout: "15+ cas d'usage GenAI | 100+ h/sem automatisées", body: "Pilotage de squads d'ingénierie pluridisciplinaires pour déployer des capacités IA avancées directement dans les pipelines de livraison enterprise." },
      { tag: "Maîtrise des risques", title: "Architecture de conformité enterprise", callout: "Portefeuille €30M sécurisé", body: "Conception et déploiement d'une infrastructure de gouvernance IA unifiée, alignée sur le règlement IA de l'UE, pour garantir des déploiements en production conformes et auditables." },
      { tag: "Croissance & Adoption", title: "Adoption à l'échelle", callout: "150+ partenaires institutionnels | 87% CSAT", body: "Stratégie produit 0-to-1 et go-to-market pour une plateforme deep tech financée par l'UE — passage de zéro à 150+ partenaires institutionnels en Europe, avec +55% d'adoption active en 6 mois." },
      { tag: "Vélocité Agile", title: "Livraison agile & vitesse", callout: "Règle de livraison 80/40", body: "Cadres de déploiement haute vélocité qui poussent des itérations stables en environnement de staging rapidement — réduisant les cycles enterprise de 3 semaines à moins de 2 semaines en avançant les boucles de feedback." },
    ],
    complianceTags: ["EU AI Act — Tier II", "Traçabilité des données", "Model Cards", "Piste d'audit"],
    sprintLabel: "Signal Sprint",
    sprintCaption: "80% livré · 40% du temps standard",
    partnersCaption: "0 → 150 partenaires",
    csatCaption: "CSAT",
    adoptionCaption: "+55% d'adoption · 6 mois",
  },
  expertise: {
    label: "Expertises clés",
    h2: "À l'intersection de la livraison IA, de la gouvernance et de la stratégie produit.",
    items: [
      { icon: "🧠", title: "IA Agentique & Livraison GenAI", body: "Orchestration d'agents, pipelines RAG, bases vectorielles, MCP et observabilité IA — appliqués en production enterprise, pas seulement en prototype." },
      { icon: "⚖️", title: "Gouvernance EU AI Act", body: "Conception de frameworks pour un déploiement IA conforme — classification des risques, systèmes de guardrails et gouvernance du cycle de vie des modèles alignés sur la réglementation européenne." },
      { icon: "📦", title: "Ownership Portfolio & Roadmap", body: "Pilotage de portefeuilles pluridisciplinaires de plusieurs millions d'euros via SAFe® 6, Lean Portfolio Management et optimisation CAPEX/OPEX pilotée par la donnée." },
      { icon: "☁️", title: "Architecture cloud-native", body: "Google Cloud (Cloud Digital Leader certifié), Vertex AI, AWS Bedrock, Azure DevOps — choix et intégration du stack adapté à l'IA enterprise à l'échelle." },
      { icon: "🔁", title: "Token Economics & AI Ops", body: "Modélisation de la consommation de tokens, optimisation des coûts d'inférence et construction de l'infrastructure d'observabilité qui rend les systèmes IA responsables en production." },
      { icon: "🌍", title: "Leadership multiculturel", body: "Construction et alignement de squads performantes sur 5 pays et 6 équipes. Bilingue (anglais / français), multiculturel par design." },
    ],
  },
  instinct: {
    label: "Instinct opérationnel",
    h2: "Quatre moments qui définissent comment je prends mes décisions.",
    cards: [
      { tag: "Ambiguïté", headline: "Pas de brief. Deux semaines. Un stack inconnu.", body: "Un problème critique apporté par un client enterprise interne à l'échelle mondiale, dans un modèle Group IT où les business units opèrent avec une gouvernance comparable à un appel d'offres externe. Pas de brief structuré, une fenêtre de deux semaines, un stack technologique inconnu. J'ai proposé un prototype fonctionnel ciblant les parcours utilisateurs clés avant qu'on me le demande, validé immédiatement, puis organisé un hackathon de 3 jours avec les tech leads et ingénieurs — des parcours utilisateurs fonctionnels livrés en cinq jours.", closing: "Les parties prenantes sceptiques sont devenues des ambassadeurs — parce qu'elles comprenaient le pourquoi, pas seulement le quoi." },
      { tag: "Décision de ne pas construire", headline: "Le cas d'usage que j'ai arrêté avant qu'il parte en production.", body: "J'ai cadré un agent IA centralisé pour le monitoring des performances d'infrastructure et les tableaux de bord de conformité — couvrant l'analyse de tendances historiques, des recommandations de correction active et des remédiations semi-automatisées en un clic sur ServiceNow, ScienceLogic, l'analyse de logs, et les audits de sécurité et d'accessibilité. La complexité d'intégration des données entre systèmes disparates était trop élevée pour justifier la poursuite. Mis en pause, équipe redirigée, et une squad dédiée de trois ingénieurs maintenue pour explorer la faisabilité en parallèle — pendant que le reste du portefeuille continuait à livrer. Ce cas d'usage côtoie 15+ cas d'usage déjà confirmés en production, sans être comptabilisé dans ce chiffre.", closing: "Savoir quoi ne pas construire — et quand s'arrêter — c'est le même muscle que savoir quoi livrer en premier." },
      { tag: "Mécaniques de croissance", headline: "La distribution par la confiance, pas par le budget.", body: "Passage de zéro à 150+ partenaires institutionnels pour une plateforme EU-funded en s'appuyant sur des institutions de recherche déjà reconnues, plutôt qu'en cherchant à capter une attention froide. Refonte de l'onboarding séparément pour les créateurs et les apprenants afin de supprimer les frictions à la première utilisation, et construction d'un module de certification gratuit donnant aux deux parties une raison de revenir.", closing: "La plateforme a été découverte via des canaux déjà reconnus — pas vendue à froid." },
      { tag: "Instinct constructeur", headline: "Je construis mes propres outils avant qu'on me le demande.", body: "En dehors du rôle principal, j'ai développé un système personnel propulsé par l'IA pour gérer la préparation aux entretiens, le positionnement et les contenus candidature comme une base de données structurée, réutilisable et adaptable — le même instinct appliqué à la livraison IA enterprise : repérer le processus qui tourne sur des scripts et de la bonne volonté, et construire l'infrastructure qui le rend reproductible.", closing: "J'ai construit un AI Studio personnel avant de connaître le nom." },
    ],
  },
  manual: {
    label: "Le Vault du Leadership — Principes opérationnels",
    h2: "Comment les décisions se prennent vraiment dans la squad.",
    principles: [
      { n: "01", title: "Obsession du problème, pas attachement aux features", body: "L'objectif n'est pas de livrer des features méticuleusement construites ; c'est de résoudre le problème métier. Quand un blocage arrive — un modèle indisponible par exemple — on ne panique pas. On pivote, on explore, et on finit souvent par interfacer une alternative plus puissante ou plus économique.", visual: "crisis" },
      { n: "02", title: "Exécution sans ego, à haute confiance", body: "Je construis intentionnellement des squads d'ingénierie transparentes et conscientes d'elles-mêmes. Nous priorisons le bon résultat plutôt que d'être la voix la plus forte. Les boucles de feedback sont instantanées, et nous avançons plus vite parce que nous ne perdons pas de temps à protéger les egos." },
      { n: "03", title: "Instinct stratégique long terme", body: "Je regarde au-delà des roadmaps immédiates pour ancrer les décisions produit dans l'échelle enterprise à long terme. Je ne résous pas seulement le ticket visible ; j'architecture des solutions structurelles qui préviennent les dix prochains points de friction." },
      { n: "04", title: "Maîtrise des modèles et des tokens", body: "Je modélise les métriques de tokens par session utilisateur, la consommation de contexte et l'optimisation du routing pour passer à l'échelle sans sacrifier la performance ni la discipline de coût. Une vraie maîtrise des tiers de modèles et du routing multi-modèles — savoir quand un modèle léger suffit, et quand une tâche exige vraiment un raisonnement de niveau frontier." },
    ],
  },
  architecture: {
    label: "Vault Architecture",
    h2: "Le cadre qui fait passer les cas d'usage IA du concept à la production conforme.",
    leftBadge: "Framework Tri-Tier d'exécution IA",
    leftTitle: "Une infrastructure calibrée pour un risque calibré",
    tiers: [
      { dot: "bg-[#D97706]", title: "Tier 1 — Productivité interne", desc: "Modèles légers · Suivi ROI · Usage API plafonné", bar: 35 },
      { dot: "bg-accent2", title: "Tier 2 — Données confidentielles", desc: "Cloud enterprise uniquement · AWS Bedrock / Vertex AI / Azure · Chiffrement renforcé", bar: 90 },
      { dot: "bg-[#7C3AED]", title: "Tier 3 — Opérations légères", desc: "Workflows admin accélérés · RH & Finance · Conformité métier", bar: 60 },
    ],
    rightLabel: "Dérisquage transversal",
    rightTitle: "Dégager le chemin vers la production",
    rightSubtitle: "Comment les cas d'usage IA atteignent réellement le déploiement",
    rightBody: "L'architecture n'est que la moitié du problème. L'autre moitié, c'est naviguer dans l'organisation — aligner les équipes sécurité sur les standards de chiffrement avant qu'ils deviennent des blocages, travailler avec le juridique sur les paramètres du règlement IA de l'UE en parallèle de l'ingénierie plutôt qu'en séquence, et construire un langage commun entre conformité et produit pour que la gouvernance ne soit plus une porte, mais une fondation. C'est ce travail qui rend le framework Tri-Tier opérationnel plutôt que théorique.",
    steps: [
      "Cartographier la posture de risque des parties prenantes",
      "Construire le chemin juridique + sécurité en parallèle",
      "Intégrer la conformité dans la définition de terminé",
      "Livrer avec la gouvernance intégrée, pas rajoutée",
    ],
  },
  experience: {
    label: "Parcours professionnel",
    h2: "Neuf ans de construction. Toujours plus proche du résultat que du processus.",
    timeline: [
      { dateStrong: "Mars 2024", date: "Présent", role: "Senior Product Lead", company: "Capgemini · Paris", body: "Pilotage de squads IA pluridisciplinaires intégrant 15+ cas d'usage GenAI dans les pipelines de production. Construction du framework de guardrailing EU AI Act, architecture du produit finance enterprise à 5 modules, et mise en place du framework agile de montée en compétence PM générant €200k+ d'économies annuelles. Aujourd'hui, orchestration d'une livraison transversale étendue sur 5 pays et 6 équipes.", chips: ["EU AI Act", "Portefeuille €30M", "RAG", "Vertex AI", "AWS Bedrock", "SAFe® 6"] },
      { dateStrong: "Sept. 2021", date: "Août 2023", role: "Digital Product Owner", company: "EIT Manufacturing · Paris", body: "Construction d'une plateforme d'apprentissage deep tech financée par l'UE, de zéro à 150+ partenaires institutionnels. Ownership complet du cycle de vie produit : roadmap, extension API, gouvernance des releases, analytics post-lancement. 87% CSAT et +55% d'adoption active en 6 mois.", chips: ["0-to-1", "Extension API", "87% CSAT", "150+ partenaires"] },
      { dateStrong: "Août 2019", date: "Juil. 2021", role: "Digital Product Analyst", company: "FizzyHomes · Paris", body: "Refonte complète de l'infrastructure digitale en partenariat avec les directions commerciale et IT. Refonte UX basée sur le mapping des parcours utilisateurs : +27% de conversion et mise en place d'une infrastructure analytics self-serve pour les équipes Sales & Marketing.", chips: ["Recherche UX", "+27% conversion", "Analytics"] },
      { dateStrong: "Avr. 2017", date: "Août 2018", role: "Senior Associate & Data Analyst", company: "Airbnb & Zomato · Gurugram", body: "Traduction des frameworks produit globaux en roadmaps d'exécution spécifiques aux marchés pour 1 000+ clients partenaires. Insights comportementaux définissant 70+ améliorations produit sur 5 pays.", chips: ["Data Analytics", "Exécution produit", "70+ améliorations"] },
    ],
  },
  skills: {
    label: "Compétences & Certifications",
    h2: "La boîte à outils.",
    groups: [
      { title: "Stratégie & Exécution", items: ["Vision produit & ownership roadmap", "Priorisation du backlog", "Go-to-Market (GTM)", "Value Stream Mapping", "Priorisation des cas d'usage"] },
      { title: "IA & Données", items: ["Orchestration d'agents & MCP", "RAG & bases vectorielles", "Versioning & cycle de vie modèles", "Observabilité IA", "Économie des tokens"] },
      { title: "Cadres & Gouvernance", items: ["SAFe® 6.0 & Scrum", "Conformité EU AI Act", "Lean Portfolio Management", "Optimisation CAPEX/OPEX", "Ownership P&L"] },
    ],
    certs: [
      { icon: "🏆", title: "PMP", sub: "PMI · 2023" },
      { icon: "📐", title: "SAFe® Agilist", sub: "Scaled Agile · Mars 2026" },
      { icon: "⚙️", title: "SAFe® DevOps Practitioner", sub: "Scaled Agile · Sept. 2025" },
      { icon: "☁️", title: "Cloud Digital Leader", sub: "Google · Oct. 2025" },
      { icon: "🔷", title: "AZ-900 Azure Essentials", sub: "Microsoft · Juil. 2025" },
    ],
  },
  writing: {
    label: "Articles",
    h2: "Notes depuis l'intérieur de la livraison IA enterprise.",
    intro: "Articles publiés environ toutes les semaines — sur la livraison IA, le produit enterprise et les cadres d'exécution.",
  },
  fit: {
    label: "Philosophie de travail",
    h2: "Dans quel environnement je performe.",
    blocks: [
      { label: "Environnement", body: "Forte autonomie, culture de validation rapide. Je donne le meilleur de moi-même quand les squads sont habilitées à avancer sans bureaucratie à plusieurs niveaux — une vélocité organisationnelle initiale plus lente me convient ; c'est exactement là où j'apporte le plus de valeur. Ce qui n'est pas négociable, c'est la liberté d'agir sur cette vélocité une fois en poste." },
      { label: "Ownership", body: "Un ownership produit réel, pas de la gestion de livraison déguisée. Je veux façonner la roadmap, pas seulement orchestrer celle de quelqu'un d'autre." },
      { label: "Culture", body: "Des équipes farouchement centrées sur l'utilisateur, orientées croissance, qui accordent par défaut le bénéfice du doute. L'absence d'ego n'est pas un slogan ici — c'est une exigence opérationnelle." },
      { label: "CE QUE J'APPORTE", subBlocks: [
        { subLabel: "Maîtrise IA appliquée", subBody: "À travers un développement et un déploiement continus et pratiques de prototypes GenAI sur un large éventail de cas d'usage — pas seulement en pilotant la livraison, mais en construisant directement à l'intérieur — j'ai développé une véritable maîtrise technique de la stack IA : architecture, guardrailing, cadres de conformité, et économie du déploiement de l'IA à l'échelle enterprise. J'affine activement les méthodologies derrière cette couche économique, ancrées dans le framework de routage Tri-Tier et la modélisation de consommation de tokens que j'ai construits et itérés en production. Ce n'est pas une maîtrise par proximité. C'est une maîtrise par la pratique." },
        { subLabel: "Arbitrage IA exécutif", subBody: "Nous traversons un moment sans précédent pour le leadership senior : la pression d'adopter l'IA est réelle, mais le risque de la déployer mal l'est tout autant. La plupart des dirigeants COMEX sont — à juste titre — plus pragmatiques et calibrés au risque que le cycle de hype ne le suggère. Je suis uniquement positionné pour opérer à cette interface : traduire la capacité IA en décisions justifiées par le ROI et calibrées au risque sur lesquelles les dirigeants peuvent réellement agir, conseiller sur la priorisation des cas d'usage, la sélection des modèles et l'allocation budgétaire sur la base d'une compréhension genuine de ce que l'IA peut et ne peut pas faire de manière fiable en production. Je l'ai fait depuis l'intérieur de la couche de livraison, ce qui signifie que le conseil est ancré dans ce qui se livre réellement — pas dans ce qui est impressionnant en présentation." },
      ] },
    ],
  },
  contact: {
    h2: "Construisons quelque chose qui compte.",
    body: "Livraison IA enterprise, gouvernance et stratégie produit à l'échelle. Contactez-moi si vous travaillez sur quelque chose d'ambitieux.",
  },
  crisis: {
    title: "Schéma de résolution de crise",
    subtitle: "Cadre de triage émotionnellement dissocié",
    steps: ["Étape 1 : Triage sans concession", "Étape 2 : Cartographier l'impact parties prenantes", "Étape 3 : Mode hackathon imposé", "Étape 4 : Déployer le strict nécessaire"],
  },
  footer: { tagline: "Leader Produit IA Enterprise · Paris, France" },
};

export const translations: Record<Lang, Translation> = { en, fr };
