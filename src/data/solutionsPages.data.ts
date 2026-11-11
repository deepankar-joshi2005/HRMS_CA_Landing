import {
  type LucideIcon,
  Cloud,
  Settings,
  HeartPulse,
  Factory,
  Landmark,
  ShoppingCart,
  HardHat,
  Briefcase,
  Building2,
  Globe,
  UserCog,
  Wallet,
  UserSearch,
  Lightbulb,
  Sparkles,
  Store,
} from "lucide-react";

// Content for every clickable item in the Solutions mega-menu (BY INDUSTRY /
// BY COMPANY SIZE / BY PROFESSION) plus the two PeopleOS cards that don't
// already have a real destination (FIRA AI, Marketplace — "PeopleOS" itself
// just links to /modules/hrms, which already exists). Each entry renders on
// its own page via SolutionDetailPage (/solutions/:id).
//
// Grounded in what HRMS actually does: `capabilityIds` point at real entries
// in SUB_MODULES.hrms (src/data/moduleSubPages.data.ts) and `roleName` points
// at a real role in MODULES_DATA.hrms.roles (ModuleDetailPage.tsx) — nothing
// here is invented functionality.

export interface SolutionPage {
  id: string;
  group: "industry" | "company-size" | "profession" | "peopleos";
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
  capabilityIds: string[];
  highlights: string[];
  cta: { headline: string; blurb: string };
}

export const SOLUTIONS_PAGES: SolutionPage[] = [
  // ───────────────────────── BY INDUSTRY ─────────────────────────
  {
    id: "saas-tech",
    group: "industry",
    menuLabel: "SaaS / Tech",
    menuDesc: "For software teams",
    icon: Cloud,
    heroEyebrow: "BY INDUSTRY",
    heroTitle: "HRMS for SaaS & Tech Teams",
    heroSubtitle: "Headcount that grows fast, a laptop and a login for every hire, and attendance that doesn't get in the way.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "Tech companies onboard and offboard faster than most businesses their CA firm serves, and most of what they own is a laptop and a handful of software licences rather than physical stock. HRMS was built around exactly that: a validated bulk-Excel import for fast hiring rounds, and an Assets & IT module that tracks hardware and software licences through their full lifecycle, right down to revoking an overdue licence in one click when someone leaves.",
    fit: {
      heading: "Why CA firms set this up for their tech clients",
      body: "A CA firm already runs payroll and compliance for its tech clients; adding HRMS means the client's own HR admin can run hiring, onboarding and IT asset tracking themselves, with the firm staying in view of headcount for accurate payroll, without taking on IT support.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Fast, validated onboarding for every new hire" },
      { image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "One record per laptop, from assignment to return" },
      { image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Software licences tracked, not forgotten about" },
    ],
    capabilityIds: ["employee-management", "assets-it", "recruitment", "training"],
    highlights: [
      "Bulk Excel onboarding with duplicate-ID and email checks",
      "Hardware + software licence tracking, assignment to return",
      "License closure flags anything still active after someone's last day",
      "Sequence-locked induction so new hires are productive, not lost",
    ],
    cta: {
      headline: "Set HRMS up for your tech clients",
      blurb: "Hiring, hardware and licences, handled the way a software team actually moves.",
    },
  },
  {
    id: "it-services",
    group: "industry",
    menuLabel: "IT Services",
    menuDesc: "For IT & ITeS",
    icon: Settings,
    heroEyebrow: "BY INDUSTRY",
    heroTitle: "HRMS for IT & ITeS",
    heroSubtitle: "Shift rosters for round-the-clock delivery, and a clean, logged handover every time someone exits.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "IT services and ITeS teams run on shifts and on client-facing deadlines, and attrition tends to run higher than most industries. HRMS's shift roster puts every employee on a Morning, Evening or Night shift with an automatic notification, and the exit workflow creates a clearance checklist across IT, Finance, HR and Admin the moment a resignation is approved — so a laptop or an access card is never the thing holding up someone's last day.",
    fit: {
      heading: "Why CA firms set this up for their ITeS clients",
      body: "Attendance here directly drives payroll (payable days, late marks, overtime), so a CA firm running payroll for an ITeS client gets numbers straight from the same attendance records the client's own admin already maintains — nothing re-entered by hand.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Shift rosters that notify every employee automatically" },
      { image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "IT clearance dashboard before anyone's last day" },
      { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Payroll computed straight from recorded attendance" },
    ],
    capabilityIds: ["attendance", "assets-it", "exit", "employee-management"],
    highlights: [
      "Weekly shift roster: Morning / Evening / Night, app + email + WhatsApp alerts",
      "A single rules engine classifies every day for attendance and payroll alike",
      "Exit triggers a 4-department clearance checklist automatically",
      "Overdue licences flagged and revoked in one click at exit",
    ],
    cta: {
      headline: "Set HRMS up for your IT services clients",
      blurb: "Shift-based attendance, payroll and a clean exit process, in one workspace.",
    },
  },
  {
    id: "healthcare-pharma",
    group: "industry",
    menuLabel: "Healthcare & Pharma",
    menuDesc: "For care providers",
    icon: HeartPulse,
    heroEyebrow: "BY INDUSTRY",
    heroTitle: "HRMS for Healthcare & Pharma",
    heroSubtitle: "Round-the-clock shift coverage, document-verified staff records, and leave that never leaves a shift uncovered.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "Clinics, diagnostics and healthcare teams run shifts that can't simply go unstaffed, and every hire usually comes with certificates and IDs that need to be checked before they're trusted. HRMS's document verification is a 4-state flow — Not Uploaded → Pending → Verified / Rejected — so HR explicitly signs off on every document, and once verified it locks from further edits.",
    fit: {
      heading: "Why CA firms set this up for healthcare clients",
      body: "Leave balance is always computed live against each employee's configured quota, so a manager approving a request can see the real remaining balance before a shift goes short-staffed — the kind of detail a CA firm's own HR admin can hand straight to the client without extra setup.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Verified documents, locked once approved" },
      { image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Shift coverage that notifies staff ahead of time" },
      { image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Leave balances calculated live, never guessed" },
    ],
    capabilityIds: ["attendance", "leave", "employee-management", "exit"],
    highlights: [
      "4-state document verification with a mandatory rejection reason",
      "Weekly shift roster across Morning / Evening / Night",
      "Live leave balance: quota plus adjustments, minus approved leave",
      "Probation and confirmation queue for every new hire",
    ],
    cta: {
      headline: "Set HRMS up for your healthcare clients",
      blurb: "Verified records and shift coverage a care team can rely on.",
    },
  },
  {
    id: "manufacturing",
    group: "industry",
    menuLabel: "Manufacturing",
    menuDesc: "For plants & shop floors",
    icon: Factory,
    heroEyebrow: "BY INDUSTRY",
    heroTitle: "HRMS for Manufacturing",
    heroSubtitle: "Shop-floor attendance that drives payroll directly, and tool crates split across a whole shift at once.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "A shop floor runs on punch-in accuracy and physical stock, not spreadsheets. HRMS's attendance engine turns every day into one status — Full Day, Half Day, Late, Absent, Leave — and every Nth late day in a month (configurable) automatically converts into a half-day payroll deduction, so the numbers Finance sees already match what actually happened on the floor.",
    fit: {
      heading: "Why CA firms set this up for manufacturing clients",
      body: "Non-IT assets like tools, safety gear and uniforms support split assignment, so one batch of stock can be divided across several workers at once — a detail office-only HR tools usually miss, but one a CA firm's manufacturing clients notice immediately.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Attendance that feeds payroll directly, no re-entry" },
      { image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Safety gear and tools, split across a shift" },
      { image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Leave encashment paid out through the same payroll run" },
    ],
    capabilityIds: ["attendance", "payroll-hrms", "assets-it", "leave"],
    highlights: [
      "One shared classification engine for attendance, payroll and audits",
      "Every Nth late day converts to a half-day deduction automatically",
      "Non-IT assets support multi-worker split assignment",
      "Damaged and Disposed states for stock that doesn't come back",
    ],
    cta: {
      headline: "Set HRMS up for your manufacturing clients",
      blurb: "Shop-floor attendance, payroll and stock, all in one place.",
    },
  },
  {
    id: "financial-services",
    group: "industry",
    menuLabel: "Financial Services",
    menuDesc: "For BFSI",
    icon: Landmark,
    heroEyebrow: "BY INDUSTRY",
    heroTitle: "HRMS for Financial Services",
    heroSubtitle: "Statutory payroll you can account for, and a read-only Auditor seat built right in.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "BFSI clients tend to care about two things more than most: accuracy and auditability. HRMS computes PF, ESI, Professional Tax and TDS against each employee's salary structure and a configurable tax-slab table, and ships with a dedicated Auditor role — read-only access to employee masters, attendance, payroll registers and the full activity trail, without the ability to change anything.",
    fit: {
      heading: "Why CA firms set this up for financial-services clients",
      body: "An optional owner-approval gate holds a month's payroll run until the company's owner approves it over a secure email link — the kind of sign-off control a CA firm's finance-sector clients usually ask for explicitly.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A read-only seat for internal or external audits" },
      { image: "https://images.unsplash.com/photo-1581094651181-35942459ef62?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "PF, ESI and TDS calculated from the salary structure" },
      { image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "An owner-approval gate before a run is final" },
    ],
    capabilityIds: ["payroll-hrms", "employee-management", "performance", "exit"],
    highlights: [
      "Dedicated Auditor role: read-only, nothing can be changed",
      "PF / ESI / TDS computed against configurable statutory rules",
      "Optional secure owner-approval link before payroll finalises",
      "Full activity trail for administrative actions and policy changes",
    ],
    cta: {
      headline: "Set HRMS up for your BFSI clients",
      blurb: "Payroll you can account for, and an audit trail that's already there.",
    },
  },
  {
    id: "retail",
    group: "industry",
    menuLabel: "Retail",
    menuDesc: "For stores & chains",
    icon: ShoppingCart,
    heroEyebrow: "BY INDUSTRY",
    heroTitle: "HRMS for Retail",
    heroSubtitle: "One hierarchy across every store, and onboarding fast enough for seasonal hiring.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "A retail chain's workforce is spread across branches, each with its own staffing swings around festive seasons. HRMS's company hierarchy is configured once — Branches, Departments with a head each, Designations and Cost Centers — so every store's staff roll up into one headcount view instead of a separate spreadsheet per location.",
    fit: {
      heading: "Why CA firms set this up for retail clients",
      body: "Fast, validated bulk-Excel onboarding matters most exactly when a retail client needs it most — ahead of a seasonal hiring push — and the 15+ filters on the employee grid (branch, department, joining date, status) let a multi-store client find anyone in seconds.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "One headcount view across every branch" },
      { image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Fast onboarding ahead of a seasonal hiring push" },
      { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Shift rosters for store-floor staff" },
    ],
    capabilityIds: ["employee-management", "attendance", "recruitment", "exit"],
    highlights: [
      "Branch, Department, Designation and Cost Center hierarchy",
      "15+ filters on the employee grid: branch, department, status and more",
      "Bulk Excel onboarding for fast seasonal hiring",
      "Live headcount trend across every store",
    ],
    cta: {
      headline: "Set HRMS up for your retail clients",
      blurb: "Every branch, one employee master, onboarding that keeps up with the season.",
    },
  },
  {
    id: "construction",
    group: "industry",
    menuLabel: "Construction",
    menuDesc: "For project crews",
    icon: HardHat,
    heroEyebrow: "BY INDUSTRY",
    heroTitle: "HRMS for Construction Crews",
    heroSubtitle: "Geo-tagged site punches, equipment split across a crew, and payroll that follows the crew, not a desk.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "Construction crews don't punch in from an office, so HRMS's attendance captures GPS coordinates on every punch, reverse-geocoded into a readable site address in the background — proof of where someone actually was, not just that they tapped a button.",
    fit: {
      heading: "Why CA firms set this up for construction clients",
      body: "Non-IT assets with split assignment cover tools and safety gear issued across a crew, and the recruitment pipeline's hire/joining dates make it straightforward for a CA firm to onboard crew hired for a specific project without building anything custom.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Geo-tagged punches, proof of where work happened" },
      { image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Safety gear and tools split across a crew" },
      { image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Payroll built from the attendance a crew actually logged" },
    ],
    capabilityIds: ["attendance", "assets-it", "recruitment", "payroll-hrms"],
    highlights: [
      "GPS-captured, reverse-geocoded punches for every session",
      "Regularization requests correct the record, not just a flag",
      "Non-IT assets split across a crew with per-person quantities",
      "Payable days derived straight from each day's attendance",
    ],
    cta: {
      headline: "Set HRMS up for your construction clients",
      blurb: "Site attendance, crew equipment and payroll, built for work that isn't at a desk.",
    },
  },

  // ─────────────────────── BY COMPANY SIZE ───────────────────────
  {
    id: "small-business",
    group: "company-size",
    menuLabel: "Small Business",
    menuDesc: "Growing businesses",
    icon: Briefcase,
    heroEyebrow: "BY COMPANY SIZE",
    heroTitle: "HRMS for Small Businesses",
    heroSubtitle: "Everything HRMS does, from the first 10 employees, at ₹999 a month.",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "A business with up to 10 employees gets the entire HRMS feature set from day one on the Starter plan — the same recruitment, attendance, leave, payroll and exit workflows as every other tier, priced for a team still getting off spreadsheets.",
    fit: {
      heading: "Why this is usually the easiest HRMS client to onboard",
      body: "A small team's entire company hierarchy — a branch, a department or two, a handful of designations — is configured in minutes, and every employee gets self-service from their very first day: attendance, leave, and payslips once payroll runs.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Full HRMS feature set, no tier gates" },
      { image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Set up a small team's hierarchy in minutes" },
      { image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Self-service from every employee's first day" },
    ],
    capabilityIds: ["employee-management", "attendance", "leave", "payroll-hrms"],
    highlights: [
      "₹999/month, up to 10 employees, every module included",
      "Employee self-service portal from day one",
      "Company hierarchy configured in minutes",
      "The same payroll engine as every larger plan",
    ],
    cta: {
      headline: "Set a small client up on HRMS Starter",
      blurb: "Off spreadsheets, onto HRMS, in one onboarding session.",
    },
  },
  {
    id: "enterprise",
    group: "company-size",
    menuLabel: "Enterprise",
    menuDesc: "Large organizations",
    icon: Building2,
    heroEyebrow: "BY COMPANY SIZE",
    heroTitle: "HRMS for Large Organizations",
    heroSubtitle: "Six isolated role workspaces, a real department hierarchy, and priority onboarding support.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "At 100+ employees, a company stops being one admin doing everything — it needs HR Admin, Managers, Finance, IT Admin, Employees and an Auditor working in their own isolated dashboards, each seeing exactly what their role needs and nothing more.",
    fit: {
      heading: "Why larger clients need the full role split",
      body: "Managers approve only their own team's leave and attendance; Finance confirms disbursement against verified bank details; IT Admin runs clearance at exit — the kind of separation a 100-person-plus company already expects, without a CA firm having to explain why it's missing.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Six role workspaces, each scoped to its own work" },
      { image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Department and branch hierarchy at real scale" },
      { image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A dedicated Auditor seat for larger compliance needs" },
    ],
    capabilityIds: ["employee-management", "performance", "payroll-hrms", "exit"],
    highlights: [
      "6 isolated role workspaces: HR Admin, Manager, Employee, IT Admin, Finance, Auditor",
      "Department and branch hierarchy built for multi-location scale",
      "Structured Mid-Year / Annual appraisal cycles by department",
      "Priority onboarding support on the Enterprise plan",
    ],
    cta: {
      headline: "Set a large client up on HRMS Enterprise",
      blurb: "Every role gets its own dashboard — nobody sees more than their job needs.",
    },
  },
  {
    id: "global-companies",
    group: "company-size",
    menuLabel: "Global Companies",
    menuDesc: "Workforce across borders",
    icon: Globe,
    heroEyebrow: "BY COMPANY SIZE",
    heroTitle: "HRMS for Multi-Branch Companies",
    heroSubtitle: "One dashboard for every branch, one employee master, one consistent experience wherever a team sits.",
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "HRMS's company hierarchy is built for multi-branch operations: every Branch, Department and Cost Center rolls into one employee master, so a company running several locations across India sees one consistent dashboard, not a separate system per office.",
    fit: {
      heading: "What's grounded in the product today",
      body: "Multi-branch hierarchy, tenant isolation and a single payroll engine are real, shipped features. Statutory configuration (PF, ESI, Professional Tax, TDS) is built around Indian compliance — so this page describes multi-location reach across India, not multi-country payroll, which isn't something HRMS does today.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "One employee master across every branch" },
      { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A single, tenant-isolated dashboard per company" },
      { image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Consistent policy, applied the same way everywhere" },
    ],
    capabilityIds: ["employee-management", "attendance", "payroll-hrms", "leave"],
    highlights: [
      "Branch, Department and Cost Center hierarchy, configured once",
      "Every business client's data isolated in its own tenant",
      "One payroll engine, applied consistently across every branch",
      "Built around Indian statutory compliance (PF, ESI, Professional Tax, TDS)",
    ],
    cta: {
      headline: "Set a multi-branch client up on HRMS",
      blurb: "One dashboard for every location, built on India's statutory rules.",
    },
  },

  // ───────────────────────── BY PROFESSION ─────────────────────────
  {
    id: "chro",
    group: "profession",
    menuLabel: "CHRO",
    menuDesc: "People leaders",
    icon: UserCog,
    heroEyebrow: "BY PROFESSION",
    heroTitle: "HRMS for HR Leaders",
    heroSubtitle: "Master administrative control over the whole employee lifecycle, from hiring to exit.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "The HR Admin role is built for exactly this seat: configure company settings, branch structures, departments and designations; run digital onboarding with document verification; issue every formal letter; set attendance rules and holiday calendars; run recruitment pipelines; and process exits through to Full & Final settlement.",
    fit: {
      heading: "What's already on the HR Admin's dashboard",
      body: "Company Hierarchy, Letter Generation, the Roster Engine and Exit Clearance are the four key features tied to this role today — all of it in one login, not spread across separate tools.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "One login for the whole employee lifecycle" },
      { image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Every formal letter, issued and logged" },
      { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Exit clearance across every department" },
    ],
    capabilityIds: ["recruitment", "employee-management", "exit", "training"],
    highlights: [
      "Configure branches, departments and designations once",
      "Issue Offer, Appointment, Appraisal, Relieving and Experience letters",
      "Set up shift rosters, attendance rules and leave encashment policy",
      "Run resignations through to Full & Final settlement",
    ],
    cta: {
      headline: "Give your HR lead the HR Admin seat",
      blurb: "Full administrative control, from the first job posting to the last clearance sign-off.",
    },
  },
  {
    id: "cfo",
    group: "profession",
    menuLabel: "CFO",
    menuDesc: "Finance leaders",
    icon: Wallet,
    heroEyebrow: "BY PROFESSION",
    heroTitle: "HRMS for Finance Leaders",
    heroSubtitle: "A financial validation gatekeeper for salary releases, reimbursements and final payouts.",
    heroImage: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "The Finance Manager role verifies computed payroll batches, tax deductions and statutory contribution summaries, then authorizes salary disbursement with bank-ready payment files — the same role that performs no-dues verification before a resigning employee's final settlement goes out.",
    fit: {
      heading: "What's already on the Finance seat's dashboard",
      body: "Payroll Sign-off, Reimbursement Payout, No-Dues Sign-off and Bank Batching are the four key features here, and an optional owner-approval gate means a month's numbers don't finalize until whoever's accountable has actually seen them.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A financial gatekeeper before anything disburses" },
      { image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Bank-ready payment files, net pay and account details" },
      { image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "No-dues verification before a final settlement" },
    ],
    capabilityIds: ["payroll-hrms", "exit", "employee-management", "performance"],
    highlights: [
      "Verify payroll batches, tax deductions and statutory summaries",
      "Authorize disbursement with bank-ready payment files",
      "Confirm reimbursements against verified bank details",
      "No-dues sign-off as part of every exit's Full & Final settlement",
    ],
    cta: {
      headline: "Give your finance lead the Finance seat",
      blurb: "Every payout verified before it goes out, not after.",
    },
  },
  {
    id: "ta-talent-acquisition",
    group: "profession",
    menuLabel: "TA (Talent Acquisition)",
    menuDesc: "Hiring teams",
    icon: UserSearch,
    heroEyebrow: "BY PROFESSION",
    heroTitle: "HRMS for Talent Acquisition",
    heroSubtitle: "A live pipeline from job posting to signed offer letter, with onboarding tasks that route themselves.",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "Every opening runs through 6 tracked pipeline stages — Applied → Shortlisted → HR Round → Tech Round → Offer → Hired — visible on a live Interview Pipeline matrix with KPI counts, so a hiring team always knows exactly where every candidate stands.",
    fit: {
      heading: "What happens the moment someone's hired",
      body: "Once hired, onboarding tasks (like laptop allocation) auto-route to the right department head based on the company's configured hierarchy, and every formal letter — Offer, Appointment, Promotion — goes out with an automatic email, in-app and WhatsApp notification.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A live pipeline matrix across every opening" },
      { image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Onboarding tasks that route to the right department head" },
      { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Offer letters delivered and logged automatically" },
    ],
    capabilityIds: ["recruitment", "employee-management", "training", "performance"],
    highlights: [
      "6-stage tracked pipeline: Applied → Shortlisted → HR → Tech → Offer → Hired",
      "Managers review only their own assigned candidates",
      "Onboarding tasks auto-route by department hierarchy",
      "Letters delivered with email, in-app and WhatsApp notification",
    ],
    cta: {
      headline: "Give your hiring team the Recruitment workflow",
      blurb: "From job posting to signed offer letter, tracked end to end.",
    },
  },
  {
    id: "founder",
    group: "profession",
    menuLabel: "Founder",
    menuDesc: "Business owners",
    icon: Lightbulb,
    heroEyebrow: "BY PROFESSION",
    heroTitle: "HRMS for Founders & Owners",
    heroSubtitle: "Oversight on your terms — approve what matters, without running the HR desk yourself.",
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "A founder rarely wants to run attendance, letters or leave approvals day to day — but still wants the one decision that matters most: has payroll gone out correctly. If an owner login is configured, a month's payroll run isn't saved until the owner approves it over a secure, one-time email link.",
    fit: {
      heading: "Why this matters for a founder specifically",
      body: "Every other role — HR Admin, Manager, Finance, IT Admin — handles the day-to-day in their own dashboard, each scoped to just their own work, so a founder gets one meaningful sign-off moment instead of a stream of decisions that aren't theirs to make.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "One secure approval link, not a daily dashboard to run" },
      { image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Every other role scoped to its own work" },
      { image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "The one number a founder actually needs to see" },
    ],
    capabilityIds: ["payroll-hrms", "employee-management", "performance", "exit"],
    highlights: [
      "Optional owner-approval gate before any payroll run finalizes",
      "Approve over a secure, one-time email link — no dashboard required",
      "6 role workspaces mean the founder isn't the one running HR",
      "Full visibility without being the bottleneck for every decision",
    ],
    cta: {
      headline: "Give your founder the one approval that matters",
      blurb: "Sign off on payroll from an email link — everything else runs without you.",
    },
  },

  // ───────────────────────── PEOPLEOS EXTRAS ─────────────────────────
  {
    id: "fira-ai",
    group: "peopleos",
    menuLabel: "FIRA AI",
    menuDesc: "AI woven across every workflow to save your team hours each week.",
    icon: Sparkles,
    heroEyebrow: "PEOPLEOS",
    heroTitle: "FIRA AI",
    heroSubtitle: "Where AI is actually in the product today — a WhatsApp sales assistant, and real-time translation across the app.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "FIRA AI is two shipped features, not a slide full of promises. A WhatsApp sales and onboarding bot answers inbound questions about plans, pricing and features automatically, so a prospect messaging late at night still gets a real answer. And a built-in auto-translate layer runs across both the CA-Management and HRMS interfaces in English, Japanese and German, so a client's team isn't limited to one language to use the product.",
    fit: {
      heading: "Said plainly: what's live, and what's next",
      body: "The WhatsApp assistant and auto-translate are both live today. Deeper AI — assistants inside the CRM, Compliance or Payroll workflows — isn't shipped yet; we'd rather tell you that directly than list features that don't exist.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A WhatsApp assistant that answers pricing and plan questions instantly" },
      { image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Real-time translation across the whole interface" },
      { image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Built to grow — more workflows, over time" },
    ],
    capabilityIds: [],
    highlights: [
      "WhatsApp sales & onboarding bot answers plan and pricing questions",
      "Auto-translate across the app: English, Japanese, German",
      "Honest roadmap — no invented AI features",
      "Built on top of the automated email/WhatsApp notifications already in HRMS",
    ],
    cta: {
      headline: "See where AI actually shows up today",
      blurb: "Two real features, not a marketing slide — and more on the way.",
    },
  },
  {
    id: "marketplace",
    group: "peopleos",
    menuLabel: "Marketplace",
    menuDesc: "Connect the apps your team already runs on.",
    icon: Store,
    comingSoon: true,
    heroEyebrow: "PEOPLEOS · COMING SOON",
    heroTitle: "Marketplace",
    heroSubtitle: "Integrations with the accounting, banking and communication tools CA firms already use — on the roadmap, not shipped yet.",
    heroImage: "https://images.unsplash.com/photo-1556155092-490a1ba16284?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    overview:
      "Right now, every CA firm and business client on this platform works inside one connected system — CRM, Compliance, Payroll, Finance Tracker and HRMS all in one place, with WhatsApp and email notifications built in rather than bolted on. A Marketplace for third-party integrations (accounting software, banking portals, other tools a firm already relies on) is a direction we're exploring, not a feature available today.",
    fit: {
      heading: "What exists in its place right now",
      body: "Bank payment files already export in a bank-agnostic format ready for whichever bank portal a firm or client uses, and WhatsApp notifications are wired directly into every module — the groundwork a Marketplace would eventually sit on top of.",
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "Bank-ready payment files, already exportable today" },
      { image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "WhatsApp and email notifications, built into every module" },
      { image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?fm=jpg&q=60&w=900&auto=format&fit=crop", caption: "A connected platform today, open to more tomorrow" },
    ],
    capabilityIds: [],
    highlights: [
      "Not shipped yet — on the exploratory roadmap",
      "Bank-agnostic payment file export already works today",
      "WhatsApp and email notifications built into every module",
      "Tell us what you'd want connected — it shapes what we build next",
    ],
    cta: {
      headline: "Tell us what you'd want to connect",
      blurb: "Marketplace isn't live yet — what you ask for shapes what gets built first.",
    },
  },
];

export function getSolutionPage(id: string | undefined): SolutionPage | undefined {
  if (!id) return undefined;
  return SOLUTIONS_PAGES.find((s) => s.id === id);
}
