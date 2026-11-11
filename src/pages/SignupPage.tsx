import { Link } from "react-router-dom";
import EnquiryForm from "../components/auth/EnquiryForm";
import SignupShowcasePanel from "../components/auth/SignupShowcasePanel";
import ThemeToggle from "../components/layout/ThemeToggle";
import Card from "../components/ui/Card";
import { LogoMark, BRAND_NAME } from "../components/ui/Logo";
import WhatsAppSupportButton from "../components/ui/WhatsAppSupportButton";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen bg-bg lg:flex lg:h-screen lg:overflow-hidden">
      <SignupShowcasePanel />

      <div className="relative flex flex-1 flex-col items-center px-6 py-10 sm:px-8 lg:h-screen lg:overflow-y-auto lg:py-14">
        <div className="fixed right-4 top-4 z-20 sm:right-6 sm:top-6">
          <ThemeToggle />
        </div>

        <Link to="/" className="mb-8 flex items-center gap-2 lg:hidden">
          <LogoMark className="h-10 w-auto shrink-0" />
          <span className="text-lg font-bold text-heading">{BRAND_NAME}</span>
        </Link>

        <Card className="w-full max-w-md shrink-0 rounded-3xl p-8 shadow-xl sm:p-10 lg:w-110">
          <h1 className="text-center text-[32px] font-bold text-heading">Send an enquiry</h1>
          <p className="mt-2 text-center text-base text-text-muted">
            Share a few details and our team will get in touch.
          </p>
          <div className="mt-8">
            <EnquiryForm />
          </div>
          <p className="mt-7 text-center text-sm text-text-muted">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-brand hover:underline">
              Log in
            </Link>
          </p>
        </Card>
      </div>

      <WhatsAppSupportButton />
    </div>
  );
}
