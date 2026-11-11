import {
  type LucideIcon,
  UserPlus,
  Users,
  Clock,
  CalendarCheck,
  Wallet,
  Laptop,
  TrendingUp,
  FileCheck,
  GraduationCap,
} from "lucide-react";

export interface SubModule {
  id: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  overview: string;
  roles: string[];
  workflow: string[];
  keyDetails: string[];
}

// Just the HRMS array — this standalone site only ever renders HRMS's own
// workflow sub-pages (/modules/hrms/:subId).
export const SUB_MODULES: Record<string, SubModule[]> = {
  hrms: [
    {
      id: "recruitment",
      title: "Recruitment & Onboarding",
      icon: UserPlus,
      tagline: "From job posting to signed offer letter, with onboarding tasks that route themselves.",
      overview:
        "Job openings move candidates through a tracked pipeline from application to hire, onboarding tasks auto-route to the right department head, and every formal letter is delivered and logged automatically.",
      roles: ["Admin / HR", "Manager", "IT Admin", "Employee"],
      workflow: [
        "HR posts a Job Opening (title, department, location, number of openings and the recruiting manager) with an optional job description file attached.",
        "HR adds each candidate against that opening: name, contact details, a required resume upload, and hiring/joining dates.",
        "The candidate moves through 6 tracked pipeline stages (Applied → Shortlisted → HR Round → Tech Round → Offer → Hired), visible on a live Interview Pipeline matrix with KPI counts.",
        "The recruiting Manager reviews only their own assigned candidates, records interview feedback, and picks a final Hire or Reject decision.",
        "Once hired, HR assigns onboarding tasks (e.g. \"Laptop Allocation\") that the system automatically routes to the right department head based on the configured company hierarchy.",
        "HR uploads and sends formal letters (Offer, Appointment, Promotion, Relieving, Experience, Full & Final Settlement and more), each delivery firing an email, in-app notification and WhatsApp heads-up automatically.",
      ],
      keyDetails: [
        "Candidate status is tracked as Applied / Shortlisted / Rejected / Hired, backed by the 6-stage pipeline flags.",
        "Letters aren't auto-generated: HR uploads the signed document and tags its type; the system handles delivery and the employee's own Document Vault.",
        "Onboarding tasks fail with a clear error if no department head is configured to receive them, so nothing silently falls through.",
        "A company-wide Onboarding Checklist tracks every new joiner's document-upload progress with a completion bar.",
      ],
    },
    {
      id: "employee-management",
      title: "Employee Management",
      icon: Users,
      tagline: "One employee master, a configurable company hierarchy, and an audited document locker.",
      overview:
        "A full employee master built on a configurable company hierarchy (Branch, Department, Designation and Cost Center), with validated bulk Excel onboarding, probation tracking, and document verification.",
      roles: ["Admin / HR", "Employee", "Manager"],
      workflow: [
        "HR configures the company hierarchy once: Branches, Departments (each with a head), Designations and Cost Centers.",
        "New employees are added one at a time or through a validated bulk Excel import that checks for duplicate IDs/emails and enforces a consistent employee-ID format.",
        "Every new hire starts on a 6-month Probation automatically; HR reviews the Probation & Confirmation queue and Confirms or Terminates each one, with a mandatory note logged against their record.",
        "Employees upload KYC and HR documents against HR-defined document types; each upload sits Pending until HR explicitly Verifies or Rejects it, with a reason if rejected.",
        "The Employee grid gives HR 15+ filters (designation, branch, department, joining date, employment status and more), plus Activate/Deactivate/Delete actions and a live headcount trend.",
      ],
      keyDetails: [
        "Employee IDs follow a strict company-specific numbering format, enforced automatically at bulk-import time.",
        "New hires start with a default password and an automatic 6-month probation window from their joining date.",
        "Document verification is a 4-state flow: Not Uploaded → Pending → Verified / Rejected; a verified document locks from further edits.",
        "Employees can edit their own contact details directly from self-service, while job and company fields stay HR-controlled and read-only.",
      ],
    },
    {
      id: "attendance",
      title: "Attendance & Shift Roster",
      icon: Clock,
      tagline: "Geo-tagged punches, one shared rules engine, and a shift roster that notifies itself.",
      overview:
        "Geo-tagged punch in/out with multiple sessions and breaks per day, a single rules engine that classifies every day for both the attendance grid and payroll, and a configurable shift roster with regularization requests.",
      roles: ["Employee", "Manager", "Admin / HR", "Auditor"],
      workflow: [
        "Employees punch in and out from the self-service app; each punch captures GPS coordinates that are reverse-geocoded into a readable address in the background.",
        "The system tracks open \"sessions\" and \"breaks\" per day, so an employee can step out and punch back in multiple times before office hours close for the day.",
        "A shared classification engine turns every day into one status (Holiday, Weekly Off, On Leave, Absent, Full Day, Half Day, or a Late variant of either), using the company's configured attendance policy.",
        "Admin assigns employees to Morning, Evening or Night shifts on a weekly roster grid; every assignment notifies the employee by app, email and WhatsApp.",
        "If a punch was missed or incorrect, the employee files a Regularization Request; once Manager or HR approves it, the underlying attendance record itself is corrected, not just the request.",
      ],
      keyDetails: [
        "The same day-classification engine feeds the Admin attendance matrix, the Manager's team view, and the payroll calculator, so all three always agree on a given day's status.",
        "Attendance policy is configurable per company: grace minutes, minimum hours for a full or half day, the late-mark threshold, and an overtime rate.",
        "Every Nth late day in a month (configurable, default 3) automatically converts into one extra half-day payroll deduction.",
        "A weekly working-days calendar and a company holiday list both feed directly into the classification engine, so holidays and offs are never marked absent.",
      ],
    },
    {
      id: "leave",
      title: "Leave Management",
      icon: CalendarCheck,
      tagline: "Configurable leave types, live balances, and encashment that pays out through payroll.",
      overview:
        "Fully admin-configurable leave types with live balance tracking, a manager or HR approval workflow, audited manual balance overrides, and an encashment path that pays out automatically through payroll.",
      roles: ["Employee", "Manager", "Admin / HR"],
      workflow: [
        "HR defines each leave type: name, annual quota, whether it's paid, and whether unused days carry forward to the next year.",
        "An employee applies for leave; the system checks their live remaining balance (quota plus manual adjustments, minus already-approved leave) before accepting the request.",
        "The request notifies the Manager or HR by app, email and WhatsApp; they approve or reject it with an optional remark, which notifies the employee back.",
        "HR can manually correct any employee's balance through an audited override tool; every change is logged with the old balance, new balance, reason and who made it.",
        "An employee can request to encash unused leave; once HR approves it, the system values the payout and automatically schedules it into the next payroll run that hasn't already been paid.",
      ],
      keyDetails: [
        "Balance is always computed live (annual quota plus manual adjustments, minus approved leave taken), never stored as a static number.",
        "Pending leave requests can still be edited or withdrawn by the employee; approved or rejected requests cannot.",
        "Encashment is valued per day against the employee's Basic salary, and the approved amount is picked up automatically by the payroll engine as a bonus.",
        "Balance overrides are additive and fully audited, never a silent overwrite of an employee's leave history.",
      ],
    },
    {
      id: "payroll-hrms",
      title: "Payroll & Statutory Reports",
      icon: Wallet,
      tagline: "Server-computed monthly payroll, built directly on attendance, with an owner-approval gate.",
      overview:
        "A server-computed monthly payroll engine built directly on top of the attendance classification data, with a detailed salary structure per employee, an optional owner-approval gate before numbers are finalized, and on-demand payslips and statutory summaries.",
      roles: ["Admin / HR", "Finance", "Employee", "Auditor"],
      workflow: [
        "HR sets up each employee's salary structure: earning components like Basic, HRA, DA and allowances, and deduction components like PF, ESI, Professional Tax and TDS.",
        "HR opens Payroll Run for the month; before anything is saved, the screen shows a live, unsaved preview recalculated from attendance recorded so far.",
        "Running payroll computes, for every employee, payable days from their attendance record (full, half, late and absent days), plus any loss-of-pay deduction, overtime pay, and approved leave-encashment bonus due that month.",
        "If the company has an owner login configured, the run isn't saved immediately. It emails the owner a secure approval link first, and only moves forward once they approve it.",
        "Finance marks processed employees as Paid; once every employee for the month is paid, the run automatically completes.",
        "HR generates Payslips, with year-to-date totals, and a Statutory Report covering PF, ESI, Professional Tax and TDS for the month.",
      ],
      keyDetails: [
        "Payable days are derived straight from each day's attendance classification: full, half, late and leave days all count differently toward the final figure.",
        "TDS is the one deduction calculated against a configurable company tax-slab table; PF, Professional Tax and ESI in the statutory report reflect what's entered on the salary structure.",
        "The Statutory Report is a summary for HR's own records, not a government-filing-ready export file.",
        "Salary disbursement is confirmed by Finance against each employee's verified bank details, one employee at a time.",
      ],
    },
    {
      id: "assets-it",
      title: "Assets & IT Management",
      icon: Laptop,
      tagline: "Hardware, software, access cards and facilities, tracked end to end and tied into exit clearance.",
      overview:
        "Full lifecycle tracking for hardware, software licenses, access cards and facilities like desks, lockers and parking, tied directly into IT's exit-clearance sign-off when someone leaves.",
      roles: ["IT Admin", "Admin / HR", "Employee"],
      workflow: [
        "IT Admin logs every hardware asset (serial number, warranty, accessories) and assigns or reassigns it to employees from an available/assigned pool.",
        "Non-IT assets like furniture, stationery and safety gear support split assignment, so one batch of stock can be divided across several employees.",
        "Software licenses, access cards, desks, lockers and parking slots each get their own allocate-then-release workflow, with status tracked throughout.",
        "When an employee resigns, IT Admin's clearance dashboard shows live whether they still hold any assets or active licenses.",
        "The license closure screen flags any license still active past an employee's last working day as overdue, and lets IT Admin revoke it in one click.",
      ],
      keyDetails: [
        "Hardware status moves between Available and Assigned, with a dedicated \"warranty expiring soon\" alert.",
        "Non-IT assets support multi-user split assignment with per-person quantities, plus Damaged and Disposed states.",
        "Access cards carry an access level and an Active / Returned / Blocked status.",
        "A unified account-management view shows every employee login's Active / Locked / Disabled state across the company.",
      ],
    },
    {
      id: "performance",
      title: "Performance & Appraisals",
      icon: TrendingUp,
      tagline: "Goals that track themselves, structured review cycles, and a two-sided appraisal.",
      overview:
        "Manager-assigned goals that automatically derive their status from progress, structured appraisal cycles, and a two-sided review: employee self-appraisal followed by manager scoring and a final recommendation.",
      roles: ["Manager", "Employee"],
      workflow: [
        "A Manager assigns a goal to a direct report: title, description, deadline, and a progress percentage.",
        "Goal status (Not Started, In Progress or Completed) is derived automatically from that progress figure, never set directly.",
        "Manager opens an Appraisal Cycle, Mid-Year or Annual, for a department or a specific list of employees, with its own start and end dates.",
        "Within an active cycle, the employee submits a Self-Appraisal: achievements, a skill self-rating, contributions, challenges and what they've learned.",
        "The Manager reviews it and submits Feedback & Ratings: scores across goals, skills, behaviour and overall performance, written feedback, and a final recommendation.",
      ],
      keyDetails: [
        "Goal status is a pure function of progress: 0% is Not Started, 100% is Completed, anything in between is In Progress.",
        "Appraisal cycles can target every employee, one department, or a hand-picked list of people.",
        "Self-appraisal and manager feedback are two linked documents, closing the loop once per cycle.",
        "The manager's final recommendation is always one of four outcomes: Promote, Hike, Performance Improvement Plan, or No Change.",
      ],
    },
    {
      id: "exit",
      title: "Exit & Offboarding",
      icon: FileCheck,
      tagline: "From resignation to Full & Final settlement, with a clearance checklist across every department.",
      overview:
        "From resignation to Full & Final settlement: a multi-department clearance checklist and an auto-calculated settlement that rides through the normal payroll pipeline.",
      roles: ["Employee", "Manager / Admin", "Finance", "IT Admin"],
      workflow: [
        "An employee submits a Resignation Request with a reason and their expected last working day.",
        "On approval, the system immediately marks the employee Inactive and auto-creates a clearance checklist across IT, Finance, HR and Admin, each starting Pending.",
        "Each department clears its own row (IT checks asset and license returns live, Admin checks desk, locker, parking and access-card returns), and the overall clearance only completes once every department is Cleared.",
        "HR opens Full & Final Settlement, where the system auto-calculates last month's salary and any back-pay for months payroll never processed, based on actual attendance.",
        "HR reviews and adjusts the figures, and marking the settlement Final automatically creates the payout as a payroll entry for that employee.",
      ],
      keyDetails: [
        "Resignation approval sets the employee's account to Inactive immediately; clearance happens afterward, not before.",
        "Overall clearance only flips to Completed once every one of the four department rows shows Cleared.",
        "Last month's salary and any unpaid back-salary are both reconstructed automatically from actual attendance records, not estimated manually.",
        "Finalizing a settlement routes the payout through the normal payroll pipeline, so it's disbursed the same way as any regular month's pay.",
      ],
    },
    {
      id: "training",
      title: "Training & Induction",
      icon: GraduationCap,
      tagline: "A sequence-locked induction program with automatic testing and a two-attempt safety net.",
      overview:
        "A sequence-locked induction program: employees must finish each module's content and pass its test before the next one unlocks, with automatic retry limits and HR override tools.",
      roles: ["Admin / HR", "Employee (Trainee)"],
      workflow: [
        "HR authors Training Modules (video, PDF or PPT content, a category like Induction or Compliance, a pass percentage and a test duration), plus a question bank for each one.",
        "Modules unlock strictly in sequence; a trainee can't open the next module until they've passed the current one's test.",
        "The trainee works through each piece of content; once every item in a module is marked complete, its test unlocks.",
        "The test samples questions at random from the module's bank, times out after the configured duration, and scores automatically against the stored correct answers.",
        "A trainee gets two attempts per module; failing both locks them out until HR manually resets their attempts.",
        "Once every assigned module is passed, HR marks the trainee's onboarding Complete, lifting their trainee status.",
      ],
      keyDetails: [
        "A module needs a minimum question bank size before it can be tested at all; each attempt samples a random subset.",
        "Trainee status moves through In-Training → Pending 2nd Attempt → Passed or Failed → Completed Onboarding.",
        "A short grace period is allowed past the test duration before an attempt is automatically scored as a fail for timing out.",
        "HR can reset a stuck trainee's attempts, restoring their eligibility without touching their earlier content progress.",
      ],
    },
  ],
};
