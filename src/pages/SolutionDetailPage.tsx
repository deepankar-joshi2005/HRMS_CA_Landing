import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getSolutionPage, SOLUTIONS_PAGES } from "../data/solutionsPages.data";
import { SUB_MODULES } from "../data/moduleSubPages.data";
import { mainSiteHref } from "../lib/mainSite";

const GROUP_LABEL: Record<string, string> = {
  industry: "By Industry",
  "company-size": "By Company Size",
  profession: "By Profession",
  peopleos: "PeopleOS",
};

// One page per Solutions-menu item (industry / company size / profession)
// and the two PeopleOS cards that don't already have a real destination
// (FIRA AI, Marketplace). Content and images come from solutionsPages.data —
// the "what's included" grid below pulls real HRMS workflow pages via
// capabilityIds, so every claim here links straight to the feature itself.

export default function SolutionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const page = getSolutionPage(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!page) return <Navigate to="/" replace />;

  const capabilities = page.capabilityIds
    .map((subId) => SUB_MODULES.hrms?.find((s) => s.id === subId))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const siblings = SOLUTIONS_PAGES.filter((s) => s.group === page.group && s.id !== page.id).slice(0, 3);

  return (
    <div className="bg-white dark:bg-[#0a0b12]">
      {/* Hero — real photo, same treatment as the Products-page highlight panel */}
      <section className="relative flex min-h-[380px] flex-col justify-end overflow-hidden px-4 py-16 md:px-6 md:py-24">
        <img src={page.heroImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative mx-auto w-full max-w-4xl">
          <a href={mainSiteHref("/products")} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Solutions
          </a>
          <div className="mt-4 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {page.heroEyebrow}
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{page.heroTitle}</h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">{page.heroSubtitle}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {page.comingSoon ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                Coming Soon
              </span>
            ) : (
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-500"
              >
                Start Free Trial <ArrowRight size={15} />
              </Link>
            )}
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Explore HRMS
            </Link>
          </div>
        </div>
      </section>

      {/* Overview + fit */}
      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400">Overview</span>
            <p className="mt-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">{page.overview}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">{page.fit.heading}</h2>
            <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{page.fit.body}</p>
          </div>
        </div>
      </section>

      {/* Multi-image gallery — horizontally scrollable on small screens */}
      <section className="px-4 pb-14 md:px-6 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible">
            {page.gallery.map((g) => (
              <figure
                key={g.image}
                className="relative w-[82vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-auto sm:shrink"
              >
                <img src={g.image} alt="" loading="lazy" className="h-56 w-full object-cover sm:h-64" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-3 text-xs font-medium text-white sm:text-sm">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="landing-section-gradient border-y border-slate-200 dark:border-slate-800 px-4 py-14 md:px-6 md:py-20 dark:bg-slate-900/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">What this looks like in practice</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {page.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400">
                  <Check size={13} strokeWidth={2.6} />
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included — links straight to the real HRMS workflow pages */}
      {capabilities.length > 0 && (
        <section className="px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Inside HRMS, built for this</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {capabilities.map((cap) => {
                const CapIcon = cap.icon;
                return (
                  <Link
                    key={cap.id}
                    to={`/${cap.id}`}
                    className="group flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                      <CapIcon size={19} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {cap.title}
                        <ArrowRight size={13} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
                      </span>
                      <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{cap.tagline}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related items in the same menu group */}
      {siblings.length > 0 && (
        <section className="border-t border-slate-200 dark:border-slate-800 px-4 py-14 md:px-6 md:py-20 bg-slate-50 dark:bg-slate-900/40">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400">{GROUP_LABEL[page.group]}</span>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">More in this category</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {siblings.map((s) => {
                const SIcon = s.icon;
                return (
                  <Link
                    key={s.id}
                    to={`/solutions/${s.id}`}
                    className="group relative h-40 overflow-hidden rounded-xl"
                  >
                    <img src={s.heroImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="pointer-events-none absolute inset-0 bg-black/50" />
                    <div className="relative flex h-full flex-col justify-end p-4">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                        <SIcon size={14} />
                      </span>
                      <span className="mt-2 text-sm font-semibold text-white">{s.menuLabel}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-violet-700 to-violet-600 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{page.cta.headline}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-violet-100 sm:text-base">{page.cta.blurb}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-sm transition-colors hover:bg-violet-50"
            >
              {page.comingSoon ? "Get in touch" : "Start Free Trial"} <ArrowRight size={15} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore HRMS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
