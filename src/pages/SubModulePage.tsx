import { useEffect } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ListChecks, Users2 } from "lucide-react";
import { MODULES_DATA } from "../data/modulesData";
import { SUB_MODULES } from "../data/moduleSubPages.data";
import { mainSiteHref } from "../lib/mainSite";

const moduleId = "hrms";

export default function SubModulePage() {
  const { subId } = useParams<{ subId: string }>();
  const navigate = useNavigate();

  const mod = MODULES_DATA[moduleId];
  const siblings = SUB_MODULES[moduleId] ?? [];
  const sub = siblings.find((s) => s.id === subId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [subId]);

  // Not a real HRMS workflow page (e.g. "/login", "/signup", "/pricing") —
  // those live on the main app, not here. Hand off there instead of bouncing
  // back to this site's own home, which would silently swallow the path.
  useEffect(() => {
    if (mod && !sub) {
      window.location.replace(mainSiteHref(`/${subId}`));
    }
  }, [mod, sub, subId]);

  if (!mod) {
    return <Navigate to="/" replace />;
  }
  if (!sub) {
    return null;
  }

  const Icon = sub.icon;
  const otherSiblings = siblings.filter((s) => s.id !== sub.id);

  return (
    <div className="relative min-h-screen bg-[#f8faff] dark:bg-[#0a0b12] text-slate-800 dark:text-slate-100 transition-colors pb-24">
      {/* Sticky breadcrumb + sibling switcher */}
      <div className="sticky top-16 z-30 border-b border-white/10 bg-[#1a0f36]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-violet-300 transition-colors shrink-0"
          >
            <ArrowLeft size={16} /> Back to {mod.shortName}
          </Link>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
            {siblings.map((s) => {
              const SIcon = s.icon;
              const isActive = s.id === sub.id;
              return (
                <button
                  key={s.id}
                  onClick={() => navigate(`/${s.id}`)}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isActive ? "bg-violet-600 text-white shadow-sm" : "bg-white/10 text-slate-200 hover:bg-white/20"
                  }`}
                >
                  <SIcon size={14} />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="keka-hero-gradient px-4 pt-12 pb-14 md:px-6 md:pt-16">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Part of {mod.shortName}
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${mod.headerAccent} text-white`}>
              <Icon size={26} />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.2]">
              {sub.title}
            </h1>
          </div>

          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl">{sub.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {sub.roles.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                <Users2 size={12} className="text-violet-300" />
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 space-y-10">
        {/* Overview */}
        <section className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 sm:p-9 shadow-xs relative overflow-hidden">
          <div className={`absolute top-0 inset-x-0 h-1 ${mod.headerAccent}`} />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Overview</h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">{sub.overview}</p>
        </section>

        {/* How it works */}
        <section className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 sm:p-9 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-950/70 text-violet-600 dark:text-violet-400">
              <ListChecks size={18} />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">How it works</h2>
          </div>

          <ol className="mt-6 space-y-4">
            {sub.workflow.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white text-xs font-bold">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed pt-0.5">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Key details */}
        <section className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-7 sm:p-9 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">What to know</h2>
          <div className="mt-5 grid grid-cols-1 gap-3">
            {sub.keyDetails.map((d, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl bg-white dark:bg-slate-850 border border-slate-100 dark:border-slate-800 p-4 shadow-2xs"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <Check size={12} strokeWidth={2.5} />
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Explore other parts of this module */}
        {otherSiblings.length > 0 && (
          <section className="space-y-5">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Explore the rest of {mod.shortName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherSiblings.map((s) => {
                const SIcon = s.icon;
                return (
                  <Link
                    key={s.id}
                    to={`/${s.id}`}
                    className="group rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs hover:shadow-md transition-all flex items-center gap-3"
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${mod.headerAccent} text-white`}>
                      <SIcon size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors truncate">
                        {s.title}
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="rounded-3xl border border-violet-200/70 dark:border-slate-800 bg-violet-50/60 dark:bg-slate-900/60 p-8 sm:p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              See the full <span className="text-violet-600 dark:text-violet-400">{mod.shortName}</span> module
            </h2>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors"
              >
                Start Free Trial <ArrowRight size={16} />
              </Link>
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
              >
                Back to {mod.shortName} Overview
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
