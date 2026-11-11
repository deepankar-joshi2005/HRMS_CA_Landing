import { useState } from "react";
import { Link } from "react-router-dom";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useHeaderBottom } from "../../hooks/useHeaderBottom";
import { mainSiteHref } from "../../lib/mainSite";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { RESOURCES_PAGES } from "../../data/resourcesPages.data";

// Same mega-menu shell/behaviour as the other header menus, laid out as a
// 3-column list (LEARN / EXPLORE FIRA / THE FIRA ADVANTAGE), matching the
// reference Resources dropdown. Every item links to its own page
// (/resources/:id), which exists on this standalone site too.
const RESOURCES_COLUMNS = [
  { heading: "LEARN", group: "learn" as const },
  { heading: "EXPLORE FIRA", group: "explore" as const },
  { heading: "THE FIRA ADVANTAGE", group: "advantage" as const },
];

export default function ResourcesMenu() {
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
        Resources
        <ChevronDown size={14} className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <button type="button" aria-label="Close Resources menu" onClick={close} className="fixed inset-0 z-40 cursor-default" />

          <div className="fixed inset-x-0 bottom-0 z-50" style={{ top: headerBottom }}>
            <div className="flex h-full flex-col overflow-y-auto border-t border-white/10 bg-white shadow-2xl">
              <div className="flex w-full flex-1 flex-col justify-center px-6 py-10 sm:px-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_1fr_1fr_280px]">
                  {RESOURCES_COLUMNS.map((col) => (
                    <div key={col.heading}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{col.heading}</p>
                      <div className="mt-3 space-y-1">
                        {RESOURCES_PAGES.filter((r) => r.group === col.group).map((item) => (
                          <Link
                            key={item.id}
                            to={`/resources/${item.id}`}
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
                    to="/resources/compliance"
                    onClick={close}
                    className="group relative flex flex-col justify-end overflow-hidden rounded-xl"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=900&auto=format&fit=crop"
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/45" />
                    <div className="relative p-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">Compliance</span>
                      <h4 className="mt-2 text-lg font-bold leading-snug text-white">
                        Built for India's GST, TDS, ROC, PF and ESI rules
                      </h4>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
                        Learn More
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
