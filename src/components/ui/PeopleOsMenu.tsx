import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, ArrowRight, X } from "lucide-react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useHeaderBottom } from "../../hooks/useHeaderBottom";
import { mainSiteHref } from "../../lib/mainSite";

// Shared "PeopleOS" mega-menu nav item — same shell as the main site nav, so
// it looks and behaves the same as it does inside the main app. HRMS, FIRA
// AI and Marketplace all have a real page on this standalone site
// (/, /solutions/fira-ai, /solutions/marketplace); only "Products" lives on
// the main app.
const PEOPLEOS_CARDS = [
  {
    id: "hrms",
    title: "PeopleOS",
    desc: "The unified people platform - HR, payroll & talent in one core system.",
    href: "/",
    external: false,
    image: "https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?fm=jpg&q=60&w=900&auto=format&fit=crop",
  },
  {
    id: "ai",
    title: "FIRA AI",
    desc: "AI woven across every workflow to save your team hours each week.",
    href: "/solutions/fira-ai",
    external: false,
    image: "https://images.unsplash.com/photo-1750365919878-2735d30fa3d8?fm=jpg&q=60&w=900&auto=format&fit=crop",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    desc: "Connect the apps your team already runs on.",
    href: "/solutions/marketplace",
    external: false,
    image: "https://images.unsplash.com/photo-1772986646340-67c9ce64a568?fm=jpg&q=60&w=900&auto=format&fit=crop",
  },
];

export default function PeopleOsMenu() {
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
        PeopleOS
        <ChevronDown size={14} className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          {/* Click-outside-to-close catcher — sits under the panel, above the page. */}
          <button type="button" aria-label="Close PeopleOS menu" onClick={close} className="fixed inset-0 z-40 cursor-default" />

          <div className="fixed inset-x-0 bottom-0 z-50" style={{ top: headerBottom }}>
            <div className="flex h-full flex-col overflow-y-auto border-t border-white/10 bg-white shadow-2xl">
              <div className="flex w-full flex-1 flex-col justify-center px-6 py-10 sm:px-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-[2fr_1fr]">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {PEOPLEOS_CARDS.map((card) =>
                      card.external ? (
                        <a
                          key={card.id}
                          href={mainSiteHref(card.href)}
                          onClick={close}
                          className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 text-left transition-colors hover:border-violet-300"
                        >
                          <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                            <img
                              src={card.image}
                              alt=""
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col bg-white p-4">
                            <span className="inline-flex items-center gap-1 text-base font-semibold text-slate-900">
                              {card.title}
                              <ChevronRight
                                size={16}
                                className="text-slate-400 transition-transform group-hover:translate-x-0.5"
                              />
                            </span>
                            <span className="mt-2 text-sm leading-relaxed text-slate-500">{card.desc}</span>
                          </div>
                        </a>
                      ) : (
                        <Link
                          key={card.id}
                          to={card.href}
                          onClick={close}
                          className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 text-left transition-colors hover:border-violet-300"
                        >
                          <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                            <img
                              src={card.image}
                              alt=""
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col bg-white p-4">
                            <span className="inline-flex items-center gap-1 text-base font-semibold text-slate-900">
                              {card.title}
                              <ChevronRight
                                size={16}
                                className="text-slate-400 transition-transform group-hover:translate-x-0.5"
                              />
                            </span>
                            <span className="mt-2 text-sm leading-relaxed text-slate-500">{card.desc}</span>
                          </div>
                        </Link>
                      )
                    )}
                  </div>

                  <Link
                    to="/"
                    onClick={close}
                    className="group relative flex flex-col justify-end overflow-hidden rounded-xl text-white"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1758873271761-6cfe9b4f000c?fm=jpg&q=60&w=1200&auto=format&fit=crop"
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/45" />
                    <div className="relative p-6 [text-shadow:0_1px_4px_rgb(0_0_0_/_70%)]">
                      <span className="text-xs font-semibold uppercase tracking-wide text-violet-200">Why HRMS</span>
                      <h4 className="mt-2 text-lg font-bold leading-snug text-white">
                        One HRMS for your firm, and a branded portal for every client
                      </h4>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
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
