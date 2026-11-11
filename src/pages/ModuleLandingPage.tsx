import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Check, CheckCircle2, ChevronDown, ChevronRight, Mail, MessageSquare, Building2, Users } from "lucide-react";
import { BRAND_NAME } from "../components/ui/Logo";
import { MODULES_DATA } from "../data/modulesData";
import { SUB_MODULES } from "../data/moduleSubPages.data";
import { MODULE_LANDING, scrollToModuleSection } from "../data/moduleLanding.data";
import { mainSiteHref } from "../lib/mainSite";

// The HRMS module's own landing page, laid out like the main landing page
// (hero → features → how it works → pricing → roles → benefits → FAQ → CTA)
// but entirely about this module. ModuleLayout supplies the module-scoped
// navbar.

const moduleId = "hrms";

export default function ModuleLandingPage() {
  const location = useLocation();
  const mod = MODULES_DATA[moduleId];
  const landing = MODULE_LANDING[moduleId];
  const subModules = SUB_MODULES[moduleId] ?? [];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Arriving from a workflow page's navbar ("Pricing" etc.) carries the target
  // section in router state; otherwise start at the top of the page.
  const section = (location.state as { section?: string } | null)?.section;
  useEffect(() => {
    if (section && section !== "top") {
      requestAnimationFrame(() => scrollToModuleSection(section));
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [moduleId, section, location.key]);

  if (!mod || !landing) return null;

  const { theme } = landing;
  const plans = landing.pricing.plans;

  return (
    <div>
      {/* 1. HERO */}
      <section className="keka-hero-gradient px-4 pb-20 pt-16 md:px-6 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {mod.badgePill}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {landing.hero.line1}
            <br />
            {landing.hero.line2}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">{mod.tagline}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-500"
            >
              Start Free 14-Day Trial <ArrowRight size={16} />
            </Link>
            <button
              type="button"
              onClick={() => scrollToModuleSection("features")}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-100"
            >
              Explore Features
            </button>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mod.stats.map((s) => {
            const StatIcon = s.icon;
            return (
              <div key={s.label} className={`flex items-center gap-3.5 rounded-xl border p-4 shadow-sm ${s.cardStyle}`}>
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${s.iconStyle}`}>
                  <StatIcon size={20} />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className={`text-base font-bold leading-tight sm:text-lg ${s.valueStyle}`}>{s.value}</div>
                  <div className="mt-1 truncate text-xs font-medium text-slate-500 dark:text-slate-400">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. FEATURES */}
      <section
        id="features"
        className="scroll-mt-20 landing-section-gradient border-y border-slate-200 px-4 py-16 md:px-6 md:py-20 dark:border-slate-800 dark:bg-slate-900/40"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className={`text-xs font-semibold uppercase tracking-wide ${theme.text}`}>{mod.shortName} Features</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Everything {mod.shortName} does for you
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-base max-w-2xl mx-auto">{mod.overview}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {mod.capabilities.map((cap) => {
              const CapIcon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between ${theme.border}`}
                >
                  <div>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${theme.iconBg}`}>
                      <CapIcon size={19} />
                    </div>
                    <h3 className="mt-3.5 text-base font-semibold text-slate-900 dark:text-white sm:text-lg">{cap.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{cap.description}</p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2 border-t border-slate-100 pt-3 dark:border-slate-800 sm:grid-cols-2">
                    {cap.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${theme.bullet}`} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (one card per workflow page) */}
      <section id="workflows" className="scroll-mt-20 px-4 py-16 md:px-6 bg-white dark:bg-[#0a0b12]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className={`text-xs font-semibold uppercase tracking-wide ${theme.text}`}>How It Works</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Inside <span className={theme.text}>{mod.shortName}</span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600 dark:text-slate-300 text-base">
              Each part runs its own workflow. Open one to see exactly how it works, step by step.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subModules.map((sub) => {
              const SubIcon = sub.icon;
              return (
                <Link
                  key={sub.id}
                  to={`/${sub.id}`}
                  className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${theme.iconBg}`}>
                        <SubIcon size={22} />
                      </div>
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full ${theme.iconBg}`}>
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white leading-snug">{sub.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{sub.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Notification banner, as on the main landing page, for this module's own alerts */}
          <div className="mt-10 mx-auto max-w-5xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex shrink-0 items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 ${theme.text}`}>
                <MessageSquare size={22} />
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 ${theme.text}`}>
                <Mail size={22} />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">{landing.notifications.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {landing.notifications.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING */}
      <section
        id="pricing"
        className="scroll-mt-20 landing-section-gradient px-4 py-20 md:px-6 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className={`text-xs font-semibold uppercase tracking-wide ${theme.text}`}>{mod.shortName} Pricing</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {landing.pricing.title}
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">{landing.pricing.subtitle}</p>
          </div>

          <div
            className={`mt-12 grid grid-cols-1 gap-6 items-stretch ${
              plans.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
            }`}
          >
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-xl border bg-white dark:bg-slate-900 flex flex-col ${
                    plan.highlight ? `shadow-md ${theme.ring}` : "border-slate-200 dark:border-slate-800 shadow-sm"
                  }`}
                >
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                          plan.highlight ? theme.solid : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        <Icon size={20} />
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase whitespace-nowrap ${
                          plan.highlight ? theme.solid : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        {plan.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{plan.fit}</p>

                    {plan.price && (
                      <p className="mt-4 flex items-baseline gap-1">
                        <span className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">{plan.price}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{plan.priceNote}</span>
                      </p>
                    )}

                    <ul className="mt-6 flex flex-col gap-3">
                      {plan.lines.map((line) => (
                        <li key={line} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              plan.highlight ? theme.iconBg : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                            }`}
                          >
                            <Check size={12} strokeWidth={2.8} />
                          </span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      <Link
                        to="/signup"
                        className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                          plan.highlight
                            ? "bg-violet-600 text-white shadow-sm hover:bg-violet-500"
                            : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700/60"
                        }`}
                      >
                        Start Free Trial <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {landing.pricing.footnote}
          </p>
        </div>
      </section>

      {/* 5. WHO USES IT (DARK SECTION) */}
      <section className="bg-[#0c1322] px-4 py-20 md:px-6 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">Built for Every Role</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{landing.audienceTitle}</h2>
            <p className="mt-2 text-slate-400 text-base max-w-xl mx-auto">
              Each person sees exactly the parts of {mod.shortName} relevant to their role, nothing more.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {landing.audience.map(({ icon: Icon, title, desc, iconBg }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-700/60 bg-[#121c32] p-6 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
                    <Icon size={18} />
                  </span>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS */}
      <section className="px-4 py-16 md:px-6 bg-white dark:bg-[#0a0b12]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className={`text-xs font-semibold uppercase tracking-wide ${theme.text}`}>Why {mod.shortName}</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Value on both sides of the relationship
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { title: "For Your CA Firm", icon: Building2, items: mod.benefits.forFirms },
              { title: "For Your Business Clients", icon: Users, items: mod.benefits.forClients },
            ].map(({ title, icon: Icon, items }) => (
              <div key={title} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
                <div className={`flex items-center gap-2.5 border-b border-slate-100 pb-3 text-base font-semibold dark:border-slate-800 ${theme.text}`}>
                  <Icon size={18} /> {title}
                </div>
                <ul className="mt-4 space-y-3">
                  {items.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${theme.text}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section
        id="faq"
        className="scroll-mt-20 px-4 py-16 md:px-6 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className={`text-xs font-semibold uppercase tracking-wide ${theme.text}`}>FAQ</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Questions about {mod.shortName}
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {landing.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={faq.q} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white sm:text-base"
                  >
                    {faq.q}
                    <ChevronDown size={18} className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="px-4 py-20 md:px-6 bg-white dark:bg-[#0a0b12]">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative shrink-0 w-64 sm:w-72">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-md">
              <div className="flex items-center gap-1.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className={`h-2.5 w-2.5 rounded-full ${theme.bullet}`} />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
              </div>
              {mod.capabilities.slice(0, 2).map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div key={cap.title} className="mt-4 flex items-center gap-3">
                    <div className={`h-9 w-9 shrink-0 rounded-full flex items-center justify-center ${theme.iconBg}`}>
                      <CapIcon size={16} />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className={`h-2.5 rounded bg-slate-200 dark:bg-slate-700 ${i ? "w-28" : "w-24"}`} />
                      <div className={`h-2 rounded bg-slate-100 dark:bg-slate-800 ${i ? "w-20" : "w-16"}`} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-xl shadow-md ${theme.solid}`}>
              <Check size={24} strokeWidth={2.5} />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Ready to run {mod.shortName} on {BRAND_NAME}?
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-base">
              Start your 14-day free trial and have {mod.shortName} set up in a few minutes.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:justify-start sm:justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-500"
              >
                Start Free Trial <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                onClick={() => scrollToModuleSection("pricing")}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors"
              >
                See Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
