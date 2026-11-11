import { useState } from "react";
import { Link } from "react-router-dom";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useHeaderBottom } from "../../hooks/useHeaderBottom";
import { mainSiteHref } from "../../lib/mainSite";
import {
  ChevronDown,
  ArrowRight,
  X,
  Sliders,
  Clock,
  FileText,
  DollarSign,
  Users,
  CalendarCheck,
  Laptop,
  FileCheck,
  UserPlus,
  TrendingUp,
  GraduationCap,
} from "lucide-react";

// Same mega-menu shell/behaviour as the other header menus. Columns mirror
// the 3 real, clickable suites on /products (Payroll Suite / HR Suite /
// Talent Suite). HR Suite and Talent Suite point at pages this standalone
// site actually has; Payroll Suite and everything else point back at the
// main app.
const PRODUCTS_COLUMNS = [
  {
    heading: "PAYROLL SUITE",
    items: [
      { icon: Sliders, title: "Salary Structure", desc: "CTC & statutory components", href: "/modules/payroll/salary-structure", external: true },
      { icon: Clock, title: "Payroll Run Execution", desc: "Draft to Completed", href: "/modules/payroll/payroll-run", external: true },
      { icon: FileText, title: "Payslips & Exports", desc: "On-demand PDFs & Excel", href: "/modules/payroll/payslips-exports", external: true },
      { icon: DollarSign, title: "Bank Payment Files", desc: "Ready-to-upload net pay", href: "/modules/payroll/payment-files", external: true },
    ],
  },
  {
    heading: "HR SUITE",
    items: [
      { icon: Users, title: "Employee Management", desc: "Master, hierarchy & docs", href: "/employee-management", external: false },
      { icon: Clock, title: "Attendance & Shift Roster", desc: "Geo-tagged punches", href: "/attendance", external: false },
      { icon: CalendarCheck, title: "Leave Management", desc: "Balances & encashment", href: "/leave", external: false },
      { icon: Laptop, title: "Assets & IT Management", desc: "Hardware to exit clearance", href: "/assets-it", external: false },
      { icon: FileCheck, title: "Exit & Offboarding", desc: "Resignation to F&F", href: "/exit", external: false },
    ],
  },
  {
    heading: "TALENT SUITE",
    items: [
      { icon: UserPlus, title: "Recruitment & Onboarding", desc: "Job post to offer letter", href: "/recruitment", external: false },
      { icon: TrendingUp, title: "Performance & Appraisals", desc: "Goals & review cycles", href: "/performance", external: false },
      { icon: GraduationCap, title: "Training & Induction", desc: "Sequence-locked program", href: "/training", external: false },
    ],
  },
];

export default function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useBodyScrollLock(open);
  const headerBottom = useHeaderBottom(open);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`inline-flex items-center gap-1 transition-colors hover:text-violet-300 ${open ? "text-violet-300" : ""}`}
      >
        Products
        <ChevronDown size={14} className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <button type="button" aria-label="Close Products menu" onClick={close} className="fixed inset-0 z-40 cursor-default" />

          <div className="fixed inset-x-0 bottom-0 z-50" style={{ top: headerBottom }}>
            <div className="flex h-full flex-col overflow-y-auto border-t border-white/10 bg-white shadow-2xl">
              <div className="flex w-full flex-1 flex-col justify-center px-6 py-10 sm:px-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_1fr_1fr_280px]">
                  {PRODUCTS_COLUMNS.map((col) => (
                    <div key={col.heading}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{col.heading}</p>
                      <div className="mt-3 space-y-1">
                        {col.items.map((item) =>
                          item.external ? (
                            <a
                              key={item.title}
                              href={mainSiteHref(item.href)}
                              onClick={close}
                              className="-mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50"
                            >
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                <item.icon size={16} />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                                <span className="block text-xs leading-snug text-slate-500">{item.desc}</span>
                              </span>
                            </a>
                          ) : (
                            <Link
                              key={item.title}
                              to={item.href}
                              onClick={close}
                              className="-mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50"
                            >
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                <item.icon size={16} />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                                <span className="block text-xs leading-snug text-slate-500">{item.desc}</span>
                              </span>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ))}

                  <a
                    href={mainSiteHref("/products")}
                    onClick={close}
                    className="group relative flex flex-col justify-end overflow-hidden rounded-xl"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1713946598691-173f44f13dc9?fm=jpg&q=60&w=900&auto=format&fit=crop"
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/45" />
                    <div className="relative p-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">Products</span>
                      <h4 className="mt-2 text-lg font-bold leading-snug text-white">The modern HR platform</h4>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
                        Browse All Products
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between bg-slate-900 px-6 py-3 text-xs font-medium text-slate-300 sm:px-12">
                <div className="flex items-center gap-5">
                  <a href={mainSiteHref("/signup")} onClick={close} className="transition-colors hover:text-white">
                    Book a Demo
                  </a>
                  <a href={mainSiteHref("/products")} onClick={close} className="transition-colors hover:text-white">
                    All Products
                  </a>
                  <a href={mainSiteHref("/#pricing")} onClick={close} className="transition-colors hover:text-white">
                    Pricing
                  </a>
                </div>
                <button type="button" onClick={close} className="inline-flex items-center gap-1 transition-colors hover:text-white">
                  Close
                  <X size={14} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
