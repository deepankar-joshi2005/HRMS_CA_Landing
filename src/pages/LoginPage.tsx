import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import AuthShowcasePanel from "../components/auth/AuthShowcasePanel";
import Card from "../components/ui/Card";
import { BRAND_NAME } from "../components/ui/Logo";
import WhatsAppSupportButton from "../components/ui/WhatsAppSupportButton";

const BRAND_OVERRIDE = {
  "--color-brand": "#7c3aed",
  "--color-brand-hover": "#6d28d9",
  "--color-brand-light": "#a78bfa",
  "--color-brand-soft": "rgba(124, 58, 237, 0.18)",
} as CSSProperties;

const SHOWCASE_DARK_OVERRIDE = {
  "--color-bg": "#0a0b12",
  "--color-surface": "rgba(255, 255, 255, 0.08)",
  "--color-surface-2": "rgba(255, 255, 255, 0.14)",
  "--color-border": "rgba(255, 255, 255, 0.16)",
  "--color-text": "#e2e8f0",
  "--color-text-muted": "#cbd5e1",
  "--color-heading": "#ffffff",
  "--color-brand": "#c4b5fd",
  "--color-brand-light": "#ddd6fe",
  "--color-brand-soft": "rgba(196, 181, 253, 0.18)",
} as CSSProperties;

export default function LoginPage() {
  return (
    <div className="login-hero-gradient relative min-h-screen" style={BRAND_OVERRIDE}>
      <div className="flex items-center justify-center border-b border-white/10 px-4 py-4 sm:px-8 sm:py-5">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <span className="text-lg font-bold text-white sm:text-2xl">{BRAND_NAME}</span>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-12 px-6 pb-14 pt-8 lg:flex-row lg:items-start lg:justify-center lg:gap-16 lg:px-10 lg:pt-5 xl:gap-20">
        <div className="dark" style={SHOWCASE_DARK_OVERRIDE}>
          <AuthShowcasePanel
            eyebrow="Built for Modern Enterprises"
            title="Pick up right where your"
            highlight="team left off."
            subtitle="Log in to manage attendance, payroll, compliance, and staff across your organisation."
          />
        </div>

        <Card className="w-full max-w-md shrink-0 rounded-3xl p-8 shadow-2xl shadow-[#140a28]/40 sm:p-10 lg:w-110">
          <h1 className="text-center text-[32px] font-bold text-heading">Welcome back</h1>
          <p className="mt-2 text-center text-base text-text-muted">Log in to your {BRAND_NAME} account.</p>
          <div className="mt-8">
            <LoginForm />
          </div>
          <p className="mt-7 text-center text-sm text-text-muted">
            New to {BRAND_NAME}?{" "}
            <Link to="/signup" className="font-semibold text-brand hover:underline">
              Start your free trial
            </Link>
          </p>
        </Card>
      </div>

      <WhatsAppSupportButton />
    </div>
  );
}
