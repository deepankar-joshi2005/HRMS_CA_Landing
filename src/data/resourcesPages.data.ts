import {
  type LucideIcon,
  Newspaper,
  BookOpen,
  FileText,
  ShieldCheck,
  BarChart3,
  Calculator,
  ArrowLeftRight,
  ListChecks,
  Star,
  Headphones,
  Megaphone,
} from "lucide-react";

// Content for every clickable item in the Resources mega-menu (LEARN /
// EXPLORE FIRA / THE FIRA ADVANTAGE) — the reference layout's own "Blog /
// Glossary / HR Templates / Compliance / Report", "Free Tools / Alternatives
// / Listicles" and "Customer Stories / Customer Experience / Keka Samachar"
// columns, renamed where the copy named Keka specifically (Keka Samachar →
// FIRA Samachar), and corrected where the reference copy made a claim this
// product can't back (Compliance "India & US" → "India", since every
// statutory calculation here — PF, ESI, Professional Tax, TDS — is Indian
// law; "24x7 support" → "Direct support", since WhatsApp + ticket support is
// real but a specific SLA isn't). Two items (Blog, Customer Stories) are
// marked comingSoon rather than filled with invented posts or testimonials.

export interface ResourcePage {
  id: string;
  group: "learn" | "explore" | "advantage";
  menuLabel: string;
  menuDesc: string;
  icon: LucideIcon;
  comingSoon?: boolean;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  overview: string;
  fit: { heading: string; body: string };
  gallery: { image: string; caption: string }[];
  listTitle?: string;
  list?: { title: string; body: string }[];
  capabilityIds: string[];
  highlights: string[];
  cta: { headline: string; blurb: string };
}

export const RESOURCES_PAGES: ResourcePage[] = [
  // ───────────────────────────── LEARN ─────────────────────────────
  {
    id: "blog",
    group: "learn",
    menuLabel: "Blog",
    menuDesc: "Playbooks & news",
    icon: Newspaper,
    comingSoon: true,
    heroEyebrow: "LEARN · COMING SOON",
    heroTitle: "The FIRA Blog",
    heroSubtitle: "Practical playbooks for running a CA practice — not live yet, but here's exactly what it'll cover.",
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "There's no blog here yet, and rather than fill this page with placeholder posts we'd rather tell you that directly. When it launches, it'll be written by people who've actually built the compliance deadlines, payroll runs and HRMS workflows you use — not generic HR content.",
    fit: {
      heading: "What it'll actually cover",
      body: "Running monthly payroll without errors, keeping GST/TDS/ROC deadlines from slipping, setting up HRMS for a new business client, and the practice-management decisions a growing CA firm actually faces.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Written from real workflows, not generic HR advice" },
      { image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Payroll, compliance and HRMS, explained plainly" },
      { image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Planned, not published yet — check back" },
    ],
    listTitle: "Planned topics",
    list: [
      { title: "Closing a monthly payroll run without surprises", body: "What to check in attendance data before you run payroll for a client." },
      { title: "A GST/TDS/ROC deadline checklist that doesn't slip", body: "How the Compliance Tool's recurring templates are meant to be used." },
      { title: "Onboarding a business client onto HRMS", body: "The real steps from a won CRM lead to a working HR workspace." },
      { title: "When to move a client off Excel payroll onto HRMS", body: "The signals that a client has outgrown the Excel-upload payroll flow." },
    ],
    capabilityIds: [],
    highlights: [
      "Not live yet — no placeholder posts here",
      "Will be written from real product workflows",
      "Focused on CA-practice work, not generic HR content",
      "Topics already planned, listed below",
    ],
    cta: {
      headline: "Want to know when it launches?",
      blurb: "Start a free trial and we'll let you know the moment the blog goes live.",
    },
  },
  {
    id: "glossary",
    group: "learn",
    menuLabel: "Glossary",
    menuDesc: "HR terms A-Z",
    icon: BookOpen,
    heroEyebrow: "LEARN",
    heroTitle: "HR & Payroll Glossary",
    heroSubtitle: "The terms you'll actually see inside HRMS, explained in plain language.",
    heroImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "Every term below is one you'll run into inside HRMS itself — on a payslip, a leave form, or an exit checklist — not a generic HR dictionary entry. If a screen uses a term you don't recognise, it's probably here.",
    fit: {
      heading: "Why this list, specifically",
      body: "These are the exact fields and calculations HRMS's payroll, leave and exit workflows use — pulled from the product, not a stock glossary.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Plain-language terms, straight from the product" },
      { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "The same words you'll see on a payslip" },
      { image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "No jargon left unexplained" },
    ],
    listTitle: "Common terms",
    list: [
      { title: "CTC", body: "Cost to Company — an employee's total annual cost, before it's split into earning and deduction components on their salary structure." },
      { title: "PF / ESI", body: "Provident Fund and Employee State Insurance — statutory contributions calculated automatically from an employee's salary components." },
      { title: "TDS", body: "Tax Deducted at Source — calculated against a configurable company tax-slab table as part of monthly payroll." },
      { title: "Loss of Pay (LOP)", body: "A deduction applied when an employee's payable days fall short, derived straight from their attendance record." },
      { title: "F&F Settlement", body: "Full & Final Settlement — the final payout calculated when an employee exits, covering last month's salary and any unpaid back-pay." },
      { title: "FOIR", body: "Fixed Obligation to Income Ratio — the share of income already committed to loan EMIs, used by Finance Tracker to rate a client's financial health." },
      { title: "Probation", body: "The 6-month window every new hire starts in automatically, ending in HR confirming or terminating them." },
      { title: "Regularization", body: "An employee's request to correct a missed or incorrect attendance punch, which corrects the underlying record once approved." },
    ],
    capabilityIds: ["payroll-hrms", "leave", "exit"],
    highlights: [
      "Every term is one HRMS actually uses on-screen",
      "Grounded in the real payroll, leave and exit workflows",
      "No generic HR-industry jargon that doesn't apply here",
      "Growing as the product grows",
    ],
    cta: {
      headline: "See these terms in the actual product",
      blurb: "The fastest way to understand them is to see a real payslip and leave form.",
    },
  },
  {
    id: "hr-templates",
    group: "learn",
    menuLabel: "HR Templates",
    menuDesc: "Ready-to-use docs",
    icon: FileText,
    heroEyebrow: "LEARN",
    heroTitle: "HR Letters & Documents",
    heroSubtitle: "The formal letters HRMS issues and tracks for you — not a download page, a built-in workflow.",
    heroImage: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "Instead of a library of blank templates to fill in yourself, HRMS tracks each of these as a real document type: HR uploads the signed letter and tags its type, and the system handles delivery (email, in-app, WhatsApp) and files it in the employee's own Document Vault automatically.",
    fit: {
      heading: "Why this isn't just a download page",
      body: "A template you download and lose track of doesn't help on audit day. A letter HRMS delivers and logs does — every issued letter stays attached to the employee's record, findable later.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Every letter delivered and logged, not just downloaded" },
      { image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Filed straight into the employee's Document Vault" },
      { image: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Findable later, not lost in a downloads folder" },
    ],
    listTitle: "Letter types HRMS tracks",
    list: [
      { title: "Offer Letter", body: "Issued once a candidate clears the hiring pipeline and is marked Hired." },
      { title: "Appointment Letter", body: "The formal confirmation of employment terms once someone joins." },
      { title: "Appraisal Letter", body: "Tied to a completed appraisal cycle's final recommendation." },
      { title: "Relieving & Experience Letters", body: "Issued as part of the exit and Full & Final settlement process." },
      { title: "Full & Final Settlement Statement", body: "The document behind an employee's final payout at exit." },
    ],
    capabilityIds: ["recruitment", "exit"],
    highlights: [
      "Every letter type delivered by email, in-app and WhatsApp",
      "Filed automatically into the employee's Document Vault",
      "Tied to real workflow events — hiring, appraisal, exit",
      "Not a static download, a tracked record",
    ],
    cta: {
      headline: "See letter delivery in action",
      blurb: "Set up HRMS for a client and issue a real letter end to end.",
    },
  },
  {
    id: "compliance",
    group: "learn",
    menuLabel: "Compliance",
    menuDesc: "India",
    icon: ShieldCheck,
    heroEyebrow: "LEARN",
    heroTitle: "Compliance, Built for India",
    heroSubtitle: "GST, TDS, ROC and Income Tax filing templates, plus statutory payroll calculations — all Indian law, nothing else.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "This platform is built around Indian statutory compliance specifically: a 90+ template catalog across GST, TDS, Income Tax, ROC, Audit and Accounting in the Compliance Tool, and PF, ESI, Professional Tax and TDS calculated automatically inside HRMS payroll. It doesn't cover any other country's tax or labour law.",
    fit: {
      heading: "Said plainly",
      body: "If a client operates outside India, the statutory parts of this platform (tax slabs, PF/ESI rates, filing templates) won't apply to them — this is an India-only compliance engine, by design.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "90+ GST, TDS, ROC and Income Tax filing templates" },
      { image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "PF, ESI, Professional Tax and TDS, calculated automatically" },
      { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Indian statutory compliance, not a generic engine" },
    ],
    capabilityIds: ["payroll-hrms"],
    highlights: [
      "90+ filing templates across GST, TDS, ROC, Income Tax, Audit, Accounting",
      "PF, ESI, Professional Tax and TDS computed inside HRMS payroll",
      "Deadline reminders by email and WhatsApp, automatically",
      "India-only — not built for other countries' statutory rules",
    ],
    cta: {
      headline: "See the Compliance Tool's full template catalog",
      blurb: "90+ ready-made filing templates, filtered to what each client actually needs.",
    },
  },
  {
    id: "report",
    group: "learn",
    menuLabel: "Report",
    menuDesc: "In-depth research",
    icon: BarChart3,
    heroEyebrow: "LEARN",
    heroTitle: "Reports Across the Platform",
    heroSubtitle: "Statutory summaries, firm-wide dashboards and client-facing advisory reports — where the real numbers live.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "\"Report\" isn't one feature here — it's three real ones: HRMS's monthly Statutory Report (PF, ESI, Professional Tax, TDS for HR's own records), the Super Admin's platform-wide reports, and Finance Tracker's client-facing PDF advisory report covering health score, loan eligibility and investment projection.",
    fit: {
      heading: "Why it's split across the platform",
      body: "Each report serves a different audience — HR needs a statutory summary, the platform owner needs billing and usage numbers, and a client needs a report they can actually read — so each lives inside the module it belongs to, not one generic reporting tool.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "HRMS's monthly statutory summary" },
      { image: "https://images.unsplash.com/photo-1552581234-26160f608093?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Platform-wide numbers for the Super Admin" },
      { image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A client-facing PDF a client can actually read" },
    ],
    capabilityIds: ["payroll-hrms"],
    highlights: [
      "HRMS Statutory Report: PF, ESI, Professional Tax, TDS for the month",
      "Platform-wide billing and usage reports for the Super Admin",
      "Finance Tracker's PDF advisory report, sent by email or WhatsApp",
      "Each report lives in the module it actually belongs to",
    ],
    cta: {
      headline: "See a real report, not a mockup",
      blurb: "Run a payroll cycle and generate the Statutory Report it produces.",
    },
  },

  // ─────────────────────────── EXPLORE FIRA ───────────────────────────
  {
    id: "free-tools",
    group: "explore",
    menuLabel: "Free Tools",
    menuDesc: "Calculators & generators",
    icon: Calculator,
    heroEyebrow: "EXPLORE FIRA",
    heroTitle: "Calculators Built Into Finance Tracker",
    heroSubtitle: "A loan calculator, a health score and an investment projection — not standalone tools, part of the product.",
    heroImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "These calculators live inside Personal Finance Tracker, available once a CA firm is on the platform: a Loan Calculator with a full repayment schedule and side-by-side scenario comparison, a Loan Eligibility Estimator, and an Investment Projection across 1, 3, 5 and 10 years — all built on a client's actual profile, not a generic public calculator.",
    fit: {
      heading: "Why they're not a free public page",
      body: "Each calculator works from a client's real profile — income, existing EMIs, savings — captured in the 5-step onboarding form, which is what makes the numbers worth anything.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A full repayment schedule, not just a monthly EMI" },
      { image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Investment projection across four time horizons" },
      { image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Built on a client's real profile, not generic inputs" },
    ],
    capabilityIds: [],
    highlights: [
      "Loan Calculator: full repayment schedule, scenario comparison",
      "Loan Eligibility Estimator, adjustable rate and tenure",
      "Investment Projection across 1, 3, 5 and 10 years",
      "All computed from a client's actual profile data",
    ],
    cta: {
      headline: "Use these tools on a real client profile",
      blurb: "They're inside Personal Finance Tracker, part of every CA firm licence.",
    },
  },
  {
    id: "alternatives",
    group: "explore",
    menuLabel: "Alternatives",
    menuDesc: "Switching options",
    icon: ArrowLeftRight,
    heroEyebrow: "EXPLORE FIRA",
    heroTitle: "Switching Off Spreadsheets",
    heroSubtitle: "What actually changes when a CA firm moves off Excel-based payroll, CRM and compliance tracking.",
    heroImage: "https://images.unsplash.com/photo-1521791055366-0d553872125f?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "Most firms we're built for aren't switching from another SaaS product — they're switching off a mix of Excel sheets, WhatsApp reminders and a notebook of deadlines. That move is specific: leads stop living in someone's inbox, deadlines get reminders attached automatically, and payroll comes from a bulk-Excel upload instead of being rebuilt by hand each month.",
    fit: {
      heading: "What doesn't change",
      body: "Clients who only need simple Excel-based payroll (no HRMS) still work from an Excel upload — the switch replaces the manual recalculation and reminder-chasing around it, not the Excel workflow itself.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Leads stop living in someone's personal inbox" },
      { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Deadlines get reminders attached automatically" },
      { image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Payroll from an upload, not a rebuild each month" },
    ],
    capabilityIds: [],
    highlights: [
      "CRM replaces leads tracked in an inbox or notebook",
      "Compliance Tool replaces a manual deadline spreadsheet",
      "Payroll still starts from Excel — the manual recalculation goes away",
      "No HRMS required — clients without it keep the Excel flow",
    ],
    cta: {
      headline: "See what switching actually looks like",
      blurb: "A 14-day free trial, run against your own client list.",
    },
  },
  {
    id: "listicles",
    group: "explore",
    menuLabel: "Listicles",
    menuDesc: "Curated roundups",
    icon: ListChecks,
    heroEyebrow: "EXPLORE FIRA",
    heroTitle: "Short Lists From Real Workflows",
    heroSubtitle: "Quick roundups pulled from how the product actually works — not generic listicle filler.",
    heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "A few short, practical lists grounded in real product workflows — the kind of thing worth skimming before you do the task for the first time.",
    fit: {
      heading: "Why these specific lists",
      body: "Each one maps to a workflow that genuinely has a few steps worth double-checking, pulled from the actual module documentation, not invented for the sake of a listicle.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Quick, skimmable, grounded in the real product" },
      { image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Worth reading before you do the task the first time" },
      { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Not filler — pulled from actual workflows" },
    ],
    listTitle: "Current roundups",
    list: [
      { title: "4 documents HRMS can issue automatically", body: "Offer, Appointment, Relieving and Experience letters — all delivered and logged, not just downloaded." },
      { title: "3 ways a CRM lead becomes a client", body: "Won manually, converted with HRMS, or onboarded directly, bypassing the CRM entirely." },
      { title: "5 things that change an employee's payable days", body: "Full day, half day, late marks, leave and loss-of-pay — each counted differently by the payroll engine." },
      { title: "3 roles that see payroll before it's final", body: "HR sets up the structure, Finance verifies it, and an optional owner approval gate can hold the run until signed off." },
    ],
    capabilityIds: [],
    highlights: [
      "Short, skimmable lists — not full articles",
      "Grounded in real module workflows, not invented",
      "Growing alongside the product itself",
      "A quick primer before you do a task the first time",
    ],
    cta: {
      headline: "See the full workflow behind any of these",
      blurb: "Every list links back to the real module it's pulled from.",
    },
  },

  // ───────────────────────── THE FIRA ADVANTAGE ─────────────────────────
  {
    id: "customer-stories",
    group: "advantage",
    menuLabel: "Customer Stories",
    menuDesc: "Proven business outcomes",
    icon: Star,
    comingSoon: true,
    heroEyebrow: "THE FIRA ADVANTAGE · COMING SOON",
    heroTitle: "Customer Stories",
    heroSubtitle: "We'd rather wait for real firms to tell this story than write one for them.",
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "This page is empty on purpose. As CA firms go live on the platform and are willing to share their results, their stories will go here — with their name attached, not an invented quote. Until then, here's what the product is actually built to change for a firm day to day.",
    fit: {
      heading: "What's real today, while this page fills in",
      body: "A firm running CRM, Compliance, Finance Tracker and Payroll in one workspace sees its pipeline, deadlines and client payroll from a single dashboard instead of four separate tools — that's the shape of the outcome a future story here would describe.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Real stories, not invented quotes" },
      { image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Attached to a firm's actual name, when it's ready" },
      { image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "One workspace, four modules, today" },
    ],
    capabilityIds: [],
    highlights: [
      "No invented testimonials — this page waits for real ones",
      "One dashboard across CRM, Compliance, Finance Tracker and Payroll",
      "Will carry a firm's real name once they're willing to share",
      "Honest placeholder, not filled with fiction",
    ],
    cta: {
      headline: "Be one of the first stories here",
      blurb: "Start a free trial — if it works for your firm, we'd love to tell people.",
    },
  },
  {
    id: "customer-experience",
    group: "advantage",
    menuLabel: "Customer Experience",
    menuDesc: "Direct support, not a ticket queue",
    icon: Headphones,
    heroEyebrow: "THE FIRA ADVANTAGE",
    heroTitle: "Support That's Actually Reachable",
    heroSubtitle: "A WhatsApp line on every page, and a real support-ticket system inside the dashboard.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "Every public page carries a direct WhatsApp button — no chatbot menu to get through first. Once you're inside the platform, Firm Admins and Super Admins also have a dedicated Support page for raising and tracking tickets, separate from the WhatsApp line.",
    fit: {
      heading: "What we won't claim",
      body: "We don't promise a specific round-the-clock SLA here — what's real is a direct WhatsApp line and an in-app ticket system, not a guess at a number that isn't backed by a support team roster.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A WhatsApp button on every public page" },
      { image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A real ticket system inside the dashboard" },
      { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "No chatbot menu between you and a real answer" },
    ],
    capabilityIds: [],
    highlights: [
      "Direct WhatsApp support button on every public page",
      "A WhatsApp sales/onboarding bot for quick plan and pricing questions",
      "In-app Support ticket system for Firm Admins and Super Admins",
      "No overstated SLA — just the channels that are actually there",
    ],
    cta: {
      headline: "Message us on WhatsApp right now",
      blurb: "The same button is on every page of this site.",
    },
  },
  {
    id: "fira-samachar",
    group: "advantage",
    menuLabel: "FIRA Samachar",
    menuDesc: "Product news & updates",
    icon: Megaphone,
    heroEyebrow: "THE FIRA ADVANTAGE",
    heroTitle: "FIRA Samachar",
    heroSubtitle: "What's actually shipped recently — a real changelog, not a press-release feed.",
    heroImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "\"Samachar\" means news — and this is the platform's own update log, entries added as things actually ship, not a marketing newsletter.",
    fit: {
      heading: "How this stays honest",
      body: "Every entry below corresponds to something that was actually built and shipped, not a roadmap promise — roadmap items live elsewhere, clearly marked as not live yet.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1552581234-26160f608093?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A real changelog, updated as things ship" },
      { image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Each entry is something that actually shipped" },
      { image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Not a marketing newsletter" },
    ],
    listTitle: "Recent updates",
    list: [
      { title: "Runtime auto-translate", body: "English, Japanese and German translation added across both the CA-Management and HRMS interfaces." },
      { title: "HR-Admin Engage & Content surface", body: "Announcements, Polls, Posts, Articles, Quick Links and Tax Content added to the HR Admin dashboard, with matching employee-facing pages." },
      { title: "Landing page module deep-dives", body: "28 sub-pages added across the platform's 5 modules, each grounded in the real workflow it documents." },
      { title: "Premium dashboard redesign", body: "A colour-matched redesign rolled out across all four roles — Super Admin, CA Firm Admin, CA Firm Staff and Business Client Admin." },
    ],
    capabilityIds: [],
    highlights: [
      "Updated as features actually ship, not on a schedule",
      "No roadmap promises mixed in with shipped work",
      "Covers both CA-Management and HRMS",
      "A real changelog, not a newsletter",
    ],
    cta: {
      headline: "See what's shipped, straight from the dashboard",
      blurb: "Start a free trial and you'll see every update land in the product itself.",
    },
  },
];

export function getResourcePage(id: string | undefined): ResourcePage | undefined {
  if (!id) return undefined;
  return RESOURCES_PAGES.find((r) => r.id === id);
}
