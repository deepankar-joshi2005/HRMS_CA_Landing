import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useHeaderBottom } from "../../hooks/useHeaderBottom";
import { mainSiteHref } from "../../lib/mainSite";
import { SOLUTIONS_PAGES } from "../../data/solutionsPages.data";

// Same mega-menu shell/behaviour as PeopleOsMenu, laid out as a 3-column list
// (BY INDUSTRY / BY COMPANY SIZE / BY PROFESSION), matching the reference
// Solutions dropdown. Every item links to its own page (/solutions/:id),
// which exists on this standalone site too — content pulled from
// src/data/solutionsPages.data.ts, grounded in what HRMS actually does.
const SOLUTIONS_COLUMNS = [
  { heading: "BY INDUSTRY", group: "industry" as const },
  { heading: "BY COMPANY SIZE", group: "company-size" as const },
  { heading: "BY PROFESSION", group: "profession" as const },
];

export default function SolutionsMenu() {
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
        Solutions
        <ChevronDown size={14} className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <button type="button" aria-label="Close Solutions menu" onClick={close} className="fixed inset-0 z-40 cursor-default" />

          <div className="fixed inset-x-0 bottom-0 z-50" style={{ top: headerBottom }}>
            <div className="flex h-full flex-col overflow-y-auto border-t border-white/10 bg-white shadow-2xl">
              <div className="flex w-full flex-1 flex-col justify-center px-6 py-10 sm:px-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_1fr_1fr_280px]">
                  {SOLUTIONS_COLUMNS.map((col) => (
                    <div key={col.heading}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{col.heading}</p>
                      <div className="mt-3 space-y-1">
                        {SOLUTIONS_PAGES.filter((s) => s.group === col.group).map((item) => (
                          <Link
                            key={item.id}
                            to={`/solutions/${item.id}`}
                            onClick={close}
                            className="-mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50"
                          >
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                              <item.icon size={16} />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-slate-900">{item.menuLabel}</span>
                              <span className="block text-xs leading-snug text-slate-500">{item.menuDesc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <Link
                    to="/"
                    onClick={close}
                    className="group relative flex flex-col justify-end overflow-hidden rounded-xl"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?fm=jpg&q=60&w=900&auto=format&fit=crop"
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/45" />
                    <div className="relative p-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">Solutions</span>
                      <h4 className="mt-2 text-lg font-bold leading-snug text-white">
                        One platform, every part of your practice
                      </h4>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
                        Explore HRMS
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
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
