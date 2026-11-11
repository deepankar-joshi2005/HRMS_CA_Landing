import {
  Users,
  ShieldCheck,
  UserCheck,
  Laptop,
  Briefcase,
  Coins,
  FileCheck,
  Layers,
  UserPlus,
  Clock,
  CalendarCheck,
} from "lucide-react";

interface RoleDetail {
  name: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  icon: any;
  summary: string;
  responsibilities: string[];
  keyFeatures: string[];
}

interface StatItem {
  label: string;
  value: string;
  icon: any;
  cardStyle: string;
  iconStyle: string;
  valueStyle: string;
}

export interface ModuleData {
  id: string;
  shortName: string;
  category: string;
  badgePill: string;
  gradientText: string;
  headline: {
    line1: string;
    line2: string;
  };
  tagline: string;
  icon: any;
  headerAccent: string;
  overview: string;
  stats: StatItem[];
  roles?: RoleDetail[];
  rolesTitle?: string;
  rolesSubtitle?: string;
  capabilities: {
    title: string;
    description: string;
    icon: any;
    highlights: string[];
  }[];
  benefits: {
    forFirms: string[];
    forClients: string[];
  };
}

// Just the HRMS entry — this standalone site only ever renders the HRMS
// module landing page and its workflow sub-pages.
export const MODULES_DATA: Record<string, ModuleData> = {
  hrms: {
    id: "hrms",
    shortName: "HRMS",
    category: "Workforce & Self-Service Portal",
    badgePill: "HR & WORKFORCE MANAGEMENT",
    gradientText: "text-blue-600 dark:text-blue-400",
    headline: {
      line1: "Human Resource Management System",
      line2: "Multi-Role Workspaces For Firm & Clients",
    },
    tagline:
      "End-to-end employee lifecycle, dedicated role workspaces, and automated HR operations built for your practice and business clients.",
    icon: Users,
    headerAccent: "bg-blue-600",
    overview:
      "Our HRMS module empowers CA firms to run internal staff operations and offer a fully branded, multi-tenant HR portal to their business clients. From recruitment and digital onboarding to attendance biometric syncing, shift rosters, leave management, appraisals, and complete offboarding clearance, every role gets an isolated, dedicated dashboard.",
    stats: [
      {
        value: "6 Roles",
        label: "Dedicated Workspaces",
        icon: ShieldCheck,
        cardStyle: "bg-blue-50/90 dark:bg-blue-950/40 border-blue-200/80 dark:border-blue-900/60",
        iconStyle: "bg-blue-600 text-white",
        valueStyle: "text-blue-900 dark:text-blue-200",
      },
      {
        value: "Hire to Retire",
        label: "Full Employee Lifecycle",
        icon: Users,
        cardStyle: "bg-purple-50/90 dark:bg-purple-950/40 border-purple-200/80 dark:border-purple-900/60",
        iconStyle: "bg-purple-600 text-white",
        valueStyle: "text-purple-900 dark:text-purple-200",
      },
      {
        value: "Self-Service",
        label: "Mobile & Web Portal",
        icon: Laptop,
        cardStyle: "bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-200/80 dark:border-emerald-900/60",
        iconStyle: "bg-emerald-600 text-white",
        valueStyle: "text-emerald-900 dark:text-emerald-200",
      },
      {
        value: "Tenant-Isolated",
        label: "Multi-Tenant Security",
        icon: Layers,
        cardStyle: "bg-amber-50/90 dark:bg-amber-950/40 border-amber-200/80 dark:border-amber-900/60",
        iconStyle: "bg-amber-500 text-white",
        valueStyle: "text-amber-900 dark:text-amber-200",
      },
    ],
    roles: [
      {
        name: "Super Admin / HR Admin",
        badge: "Full Control",
        badgeBg: "bg-blue-100 dark:bg-blue-950/80",
        badgeColor: "text-blue-700 dark:text-blue-300",
        icon: ShieldCheck,
        summary: "Master administrative control over company policies, organizational hierarchies, and employee administration.",
        responsibilities: [
          "Configure company settings, multi-branch structures, departments, and designations.",
          "Digital employee onboarding with document verification and checklist automation.",
          "Issue digital letters (Offer Letter, Appointment, Appraisal, Relieving, Experience).",
          "Setup shift rosters, attendance rules, holiday calendars, and leave encashment policies.",
          "Manage recruitment pipelines, job postings, candidate evaluations, and hiring stages.",
          "Process resignations, conduct clearance handovers, and generate Full & Final (F&F) settlements.",
        ],
        keyFeatures: ["Company Hierarchy", "Letter Generation", "Roster Engine", "Exit Clearance"],
      },
      {
        name: "Manager",
        badge: "Team Management",
        badgeBg: "bg-purple-100 dark:bg-purple-950/80",
        badgeColor: "text-purple-700 dark:text-purple-300",
        icon: UserCheck,
        summary: "Empowers team leaders to supervise subordinates, review workflows, and evaluate performance.",
        responsibilities: [
          "Supervise assigned team members with live attendance and punctuality tracking.",
          "Approve or reject leave requests, attendance regularizations, and shift swap requests.",
          "Review and approve employee travel requests, advances, and expense reimbursement claims.",
          "Define team OKRs, assign milestone goals, and conduct quarterly performance appraisals.",
          "Participate in candidate interview rounds and submit candidate ratings & feedback.",
        ],
        keyFeatures: ["Approval Inboxes", "Team Attendance", "Goal Tracking", "Appraisal Reviews"],
      },
      {
        name: "Employee (Self-Service)",
        badge: "Self-Service",
        badgeBg: "bg-emerald-100 dark:bg-emerald-950/80",
        badgeColor: "text-emerald-700 dark:text-emerald-300",
        icon: Briefcase,
        summary: "Personal workspace for every staff member to access essential workplace records and apply for requests.",
        responsibilities: [
          "Punch attendance online or view biometric punch logs with monthly calendar heatmap.",
          "Check real-time leave balances (Casual, Sick, Earned, Comp-off) and apply for leaves.",
          "Download monthly digital payslips with complete salary breakdown and annual tax sheets.",
          "Submit expense claims with receipt attachments and request travel advances.",
          "Track assigned goals, submit self-appraisal ratings, and review company policies.",
          "Submit digital resignation notices and monitor handover clearance progress.",
        ],
        keyFeatures: ["1-Click Attendance", "Payslip Download", "Leave Application", "Expense Claims"],
      },
      {
        name: "IT Admin",
        badge: "Asset & Security",
        badgeBg: "bg-amber-100 dark:bg-amber-950/80",
        badgeColor: "text-amber-700 dark:text-amber-300",
        icon: Laptop,
        summary: "Supervises hardware allocation, cloud software licenses, and IT security de-provisioning.",
        responsibilities: [
          "Manage IT asset inventory (Laptops, Desktops, Monitors, Mobile Devices, Peripherals).",
          "Allocate, reassign, and track hardware with serial numbers, condition tags, and warranties.",
          "Assign software seats and enterprise cloud tool licenses to onboarded employees.",
          "Manage physical and facility assets: Workstations, desks, lockers, access cards, and parking.",
          "Execute mandatory IT handover clearance and revoke credentials during employee exit.",
        ],
        keyFeatures: ["Hardware Inventory", "Software Licenses", "Access Cards", "IT Clearance"],
      },
      {
        name: "Finance Manager",
        badge: "Disbursement & Approvals",
        badgeBg: "bg-cyan-100 dark:bg-cyan-950/80",
        badgeColor: "text-cyan-700 dark:text-cyan-300",
        icon: Coins,
        summary: "Financial validation gatekeeper for salary releases, expense reimbursements, and final payouts.",
        responsibilities: [
          "Verify computed payroll batches, tax deductions, and statutory contribution summaries.",
          "Authorize and execute salary disbursements with bank-ready payment file generation.",
          "Verify and disburse employee expense reimbursements and travel advance settlements.",
          "Perform financial no-dues verification for resigning staff before settlement clearance.",
          "Maintain clear financial records for audit compliance and company accounting.",
        ],
        keyFeatures: ["Payroll Sign-off", "Reimbursement Payout", "No-Dues Sign-off", "Bank Batching"],
      },
      {
        name: "Auditor",
        badge: "Compliance & Audit",
        badgeBg: "bg-rose-100 dark:bg-rose-950/80",
        badgeColor: "text-rose-700 dark:text-rose-300",
        icon: FileCheck,
        summary: "Dedicated read-only inspection access for internal or external auditors and regulatory reviewers.",
        responsibilities: [
          "Read-only access to employee masters, employment contracts, and statutory documents.",
          "Audit attendance logs, shift history, overtime records, and leave register accuracy.",
          "Verify payroll registers, salary structures, PF/ESI deduction formulas, and TDS calculations.",
          "Generate statutory compliance reports, PF Form 5/10, ESI reports, and onboarding trails.",
          "Review historical audit logs for administrative actions and policy changes.",
        ],
        keyFeatures: ["Read-only Security", "Statutory Audit", "Payroll Verification", "Activity Trails"],
      },
    ],
    capabilities: [
      {
        title: "Recruitment & Onboarding",
        description: "Post openings, screen candidates through customized pipeline stages, and onboard with digital document verification.",
        icon: UserPlus,
        highlights: ["Job Openings & Pipeline", "Automated Offer Letters", "Onboarding Checklists", "Digital Document Locker"],
      },
      {
        title: "Attendance & Shift Roaster",
        description: "Flexible attendance capture with multi-shift scheduling, geofencing, regularization requests, and calendar analytics.",
        icon: Clock,
        highlights: ["Multi-shift Roaster", "Regularization Workflow", "Holiday Calendars", "Biometric Integration Ready"],
      },
      {
        title: "Leave & Encashment Rules",
        description: "Custom leave types (Casual, Sick, Maternity, Paternity, Comp-Off) with automatic accrual and encashment calculation.",
        icon: CalendarCheck,
        highlights: ["Configurable Quotas", "Leave Approval Inboxes", "Comp-off Credits", "Year-end Encashment"],
      },
      {
        title: "Asset & Facility Inventory",
        description: "Track laptops, monitors, software licenses, desks, lockers, and access cards throughout their entire operational life.",
        icon: Laptop,
        highlights: ["Hardware Serial Tracking", "Software Subscriptions", "Workstation & Locker Assignment", "Full Return Clearance"],
      },
    ],
    benefits: {
      forFirms: [
        "Eliminate separate costly HRMS subscriptions for your firm's internal team.",
        "Resell HRMS as an isolated subscription to your business clients for recurring monthly revenue.",
        "Complete visibility into client employee counts for accurate payroll billing.",
      ],
      forClients: [
        "Enterprise-grade HRMS without paying prohibitive enterprise software fees.",
        "Empowers employees with modern self-service apps on mobile and web.",
        "Instant seamless data connectivity with CA firm for flawless monthly payroll processing.",
      ],
    },
  },
};
