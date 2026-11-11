import { useState } from "react";
import { Link, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Menu, X } from "lucide-react";
import { LogoMark, BRAND_NAME } from "../components/ui/Logo";
import WhatsAppSupportButton from "../components/ui/WhatsAppSupportButton";
import ProductsMenu from "../components/ui/ProductsMenu";
import PeopleOsMenu from "../components/ui/PeopleOsMenu";
import SolutionsMenu from "../components/ui/SolutionsMenu";
import ResourcesMenu from "../components/ui/ResourcesMenu";
import { MODULES_DATA } from "../data/modulesData";
import { MODULE_LANDING, MODULE_SECTIONS, scrollToModuleSection } from "../data/moduleLanding.data";
import { mainSiteHref } from "../lib/mainSite";

// Standalone shell for the HRMS module's own landing page ("/") and its
// workflow pages ("/:subId"). Top nav matches the main site nav (Products /
// PeopleOS / Solutions / Pricing / Resources); "Pricing" scrolls to *this*
// module's own pricing section (via `goTo`) rather than the homepage's.
// Login/Signup and everything outside HRMS point back at the main app, since
// this standalone site only hosts the HRMS pages themselves.

// This site only ever renders HRMS — never driven by a route param.
const moduleId = "hrms";

export default function ModuleLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const mod = MODULES_DATA[moduleId];
  const landing = MODULE_LANDING[moduleId];
  const onModuleHome = pathname === "/";

  if (!mod || !landing) return <Navigate to="/" replace />;

  const goTo = (id: string) => {
    setMenuOpen(false);
    if (onModuleHome) scrollToModuleSection(id);
    else navigate("/", { state: { section: id } });
  };

  return (
    <div className="flex min-h-svh flex-col bg-[#0a0b12] text-slate-100">
      {/* Promo ribbon */}
      <div className="w-full bg-[#140a28] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-3 py-2 sm:px-6">
          <button type="button" onClick={() => goTo("top")} className="flex shrink-0 cursor-pointer items-center gap-1.5">
            <span className="text-sm font-bold">{BRAND_NAME}</span>
          </button>

          <div className="order-3 flex w-full items-center justify-center gap-1.5 text-center text-xs font-bold sm:order-none sm:w-auto sm:flex-1 sm:text-sm">
            <span className="relative inline-block">
              India&apos;s
              <svg
                viewBox="0 0 60 10"
                className="absolute -bottom-1.5 left-0 h-2 w-full text-[#f2542d]"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1 6.5C10 2 20 2 30 5C40 8 50 8 59 3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>Exclusively Designed for SME's</span>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden items-center gap-1.5 text-xs font-semibold sm:inline-flex sm:text-sm">
              <Calendar size={14} />
              18th November, 2026
            </span>
            <Link
              to="/signup"
              className="whitespace-nowrap rounded-full bg-violet-500 px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-violet-400"
            >
              Register for FREE
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1a0f36]">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 px-3 py-3.5 sm:gap-3 sm:px-6">
          <button
            type="button"
            onClick={() => goTo("top")}
            className="flex min-w-0 cursor-pointer items-center gap-2"
            aria-label={`${mod.shortName} home`}
          >
            <span className="hidden text-lg font-bold tracking-tight text-white sm:inline sm:text-xl">
              {BRAND_NAME}
            </span>
          </button>

          <nav className="ml-6 hidden items-center gap-6 text-sm font-medium text-slate-200 lg:flex">
            <ProductsMenu />
            <PeopleOsMenu />
            <SolutionsMenu />
            <button type="button" onClick={() => goTo("pricing")} className="text-slate-200 transition-colors hover:text-violet-300">
              Pricing
            </button>
            <ResourcesMenu />
          </nav>

          <div className="flex-1" />

          <Link
            to="/login"
            className="hidden shrink-0 whitespace-nowrap rounded-xl px-2 py-2 text-sm font-semibold text-slate-200 transition-colors hover:text-violet-300 min-[400px]:inline-flex sm:px-4"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl bg-violet-600 px-2.5 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/35 sm:px-5"
          >
            <span className="sm:hidden">Start Trial</span>
            <span className="hidden sm:inline">Start Free Trial</span>
            <ArrowRight size={15} className="hidden sm:inline-block" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 text-slate-200 lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#1a0f36] lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-3 py-2 sm:px-6">
              <a
                href={mainSiteHref("/products")}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-200"
              >
                Products
              </a>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-200"
              >
                PeopleOS
              </Link>
              <a
                href={mainSiteHref("/products")}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-200"
              >
                Solutions
              </a>
              <button
                type="button"
                onClick={() => goTo("pricing")}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-200"
              >
                Pricing
              </button>
              <a
                href={mainSiteHref("/products")}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-200"
              >
                Resources
              </a>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-300 min-[400px]:hidden"
              >
                Log In
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0b12] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex items-center gap-2 text-base font-bold text-white">
            <LogoMark className="h-8 w-auto shrink-0" />
            {BRAND_NAME} <span className="font-semibold text-violet-300">{mod.shortName}</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
            {MODULE_SECTIONS.filter(({ id }) => id !== "top").map(({ id, label }) => (
              <button key={id} type="button" onClick={() => goTo(id)} className="transition-colors hover:text-violet-300">
                {label}
              </button>
            ))}
            <a href={mainSiteHref("/#modules")} className="transition-colors hover:text-violet-300">
              All Modules
            </a>
            <a href={mainSiteHref("/terms")} className="transition-colors hover:text-violet-300">
              Terms &amp; Conditions
            </a>
            <a href={mainSiteHref("/privacy")} className="transition-colors hover:text-violet-300">
              Privacy Policy
            </a>
          </nav>
          <p className="text-xs text-slate-400">© 2025 {BRAND_NAME}. All rights reserved.</p>
        </div>
      </footer>

      <WhatsAppSupportButton />
    </div>
  );
}
