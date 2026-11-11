import {
  type LucideIcon,
  User,
  Users,
  ShieldCheck,
  Building2,
  Building,
  UserCog,
  Wallet,
  Briefcase,
  FileSearch,
} from "lucide-react";

// Everything the HRMS standalone landing page (/modules/hrms) needs on top of
// MODULES_DATA (headline, stats, capabilities, benefits) and SUB_MODULES (the
// "inside the module" workflows): the module's accent colours, who uses it,
// which automated notifications it sends, its own pricing and FAQs.

// Navbar items of the module landing page, each pointing at a section id on it.
export const MODULE_SECTIONS = [
  { id: "top", label: "Home" },
  { id: "features", label: "Features" },
  { id: "workflows", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
] as const;

export function scrollToModuleSection(id: string) {
  if (id === "top") {
    // Already at the top: nothing to do.
    if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export interface ModuleTheme {
  text: string;
  iconBg: string;
  bullet: string;
  border: string;
  pill: string;
  solid: string;
  ring: string;
}

export interface ModulePlan {
  name: string;
  icon: LucideIcon;
  tag: string;
  fit: string;
  price?: string;
  priceNote?: string;
  lines: string[];
  highlight?: boolean;
}

export interface ModuleAudience {
  icon: LucideIcon;
  title: string;
  desc: string;
  iconBg: string;
}

export interface ModuleLandingData {
  theme: ModuleTheme;
  // Short two-line hero heading, in the same style as the main landing page.
  hero: { line1: string; line2: string };
  audienceTitle: string;
  audience: ModuleAudience[];
  notifications: { title: string; desc: string };
  pricing: { title: string; subtitle: string; plans: ModulePlan[]; footnote: string };
  faqs: { q: string; a: string }[];
}

const BLUE_THEME: ModuleTheme = {
  text: "text-blue-600 dark:text-blue-400",
  iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
  bullet: "bg-blue-500",
  border: "hover:border-blue-300 dark:hover:border-blue-700",
  pill: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-400",
  solid: "bg-blue-600 text-white",
  ring: "border-blue-300 dark:border-blue-700 ring-1 ring-blue-200 dark:ring-blue-900",
};

// Just the HRMS entry — this standalone site only ever renders the HRMS
// module landing page and its workflow sub-pages.
export const MODULE_LANDING: Record<string, ModuleLandingData> = {
  hrms: {
    hero: { line1: "Run HR for every client", line2: "from hiring to payslips" },
    theme: BLUE_THEME,
    audienceTitle: "A workspace for every person in the company",
    audience: [
      {
        icon: ShieldCheck,
        title: "HR Admin",
        desc: "Runs the whole employee lifecycle: hiring, records, attendance rules, leave policies, letters and exits.",
        iconBg: "bg-blue-500/20 text-blue-400",
      },
      {
        icon: UserCog,
        title: "Managers",
        desc: "Approve their team's leave and attendance requests, run interviews, set goals and score appraisals.",
        iconBg: "bg-teal-500/20 text-teal-400",
      },
      {
        icon: Wallet,
        title: "Finance",
        desc: "Reviews payroll, confirms salary disbursement and handles reimbursements against verified bank details.",
        iconBg: "bg-amber-500/20 text-amber-400",
      },
      {
        icon: Briefcase,
        title: "IT Admin",
        desc: "Allocates laptops and other assets, and handles IT clearance when someone leaves.",
        iconBg: "bg-purple-500/20 text-purple-400",
      },
      {
        icon: User,
        title: "Employees",
        desc: "Self-service: mark attendance, apply for leave, download payslips and letters, and update their own profile.",
        iconBg: "bg-blue-500/20 text-blue-300",
      },
      {
        icon: FileSearch,
        title: "Auditor",
        desc: "Read-only access to records, attendance and payroll history for audits, without being able to change anything.",
        iconBg: "bg-rose-500/20 text-rose-400",
      },
    ],
    notifications: {
      title: "Every HR update reaches the employee automatically",
      desc: "Leave approvals, attendance requests, shift changes, new payslips and issued letters go out by email, in-app and WhatsApp, branded with your company's own name.",
    },
    pricing: {
      title: "Priced by the size of your team",
      subtitle: "One monthly price per company, based on how many employees you have. Every feature is in every plan.",
      plans: [
        {
          name: "Starter",
          icon: User,
          tag: "1–10 Employees",
          fit: "Small teams getting off spreadsheets.",
          price: "₹999",
          priceNote: "/month",
          lines: ["Up to 10 employees", "All HRMS modules included", "Employee self-service portal"],
        },
        {
          name: "Growth",
          icon: Users,
          tag: "Most Popular",
          fit: "Growing companies with managers and teams.",
          price: "₹3,999",
          priceNote: "/month",
          lines: ["11–50 employees", "All HRMS modules included", "Manager approvals and appraisals"],
          highlight: true,
        },
        {
          name: "Business",
          icon: Building,
          tag: "51–100 Employees",
          fit: "Multi-department organisations.",
          price: "₹7,999",
          priceNote: "/month",
          lines: ["51–100 employees", "All HRMS modules included", "Department and branch hierarchy"],
        },
        {
          name: "Enterprise",
          icon: Building2,
          tag: "101+ Employees",
          fit: "Large and multi-location companies.",
          price: "₹14,999",
          priceNote: "/month",
          lines: ["101+ employees", "All HRMS modules included", "Priority onboarding support"],
        },
      ],
      footnote:
        "HRMS is set up for a business client by their CA firm, which picks the plan when onboarding them. Prices are indicative and confirmed at onboarding.",
    },
    faqs: [
      {
        q: "Who sets up HRMS for my company?",
        a: "Your CA firm onboards your business onto the platform and enables HRMS for you. You then get your own HR Admin login and invite your employees.",
      },
      {
        q: "Can other companies or my CA firm see my employee data?",
        a: "No. Every business client's HRMS data lives in its own isolated tenant, separate even from other clients of the same CA firm.",
      },
      {
        q: "Does HRMS run payroll?",
        a: "Yes. Payroll is computed from attendance and each employee's salary structure, with payslips employees can download themselves.",
      },
      {
        q: "Can employees use it on their phones?",
        a: "Yes. The self-service portal works on mobile and web, so employees can mark attendance, apply for leave and download payslips anywhere.",
      },
    ],
  },
};
