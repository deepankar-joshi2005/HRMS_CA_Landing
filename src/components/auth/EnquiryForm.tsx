import { useState, type FormEvent, type ChangeEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import * as enquiryApi from "../../api/enquiry.api";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { sanitizePhone, validatePhone, validateEmail } from "../../utils/validators";

// This form only ever enquires about HRMS, so "purpose" is sent to the
// backend as a fixed value instead of being a user-visible field.
const ENQUIRY_PURPOSE = "hrms";

const INITIAL_FORM = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  employeeCount: "",
  message: "",
};

const VALIDATORS: Record<string, (v: string) => string> = {
  name: (v) => (v.trim().length >= 2 ? "" : "Enter your name"),
  companyName: (v) => (v.trim().length >= 2 ? "" : "Enter the company / firm name"),
  email: (v) => validateEmail(v, true),
  phone: (v) => validatePhone(v, true),
};

export default function EnquiryForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof typeof INITIAL_FORM) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const raw = e.target.value;
      const value = field === "phone" ? sanitizePhone(raw) : field === "employeeCount" ? raw.replace(/\D/g, "") : raw;
      setForm((f) => ({ ...f, [field]: value }));
      setFieldErrors((fe) => (field in fe ? { ...fe, [field]: VALIDATORS[field] ? VALIDATORS[field](value as string) : "" } : fe));
      setError("");
    };
  }

  function handleBlur(field: string) {
    return () => {
      if (!VALIDATORS[field]) return;
      setFieldErrors((fe) => ({ ...fe, [field]: VALIDATORS[field]((form as any)[field] || "") }));
    };
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const errors: Record<string, string> = {};
    for (const field of Object.keys(VALIDATORS)) {
      const msg = VALIDATORS[field]((form as any)[field] || "");
      if (msg) errors[field] = msg;
    }
    if (Object.values(errors).some(Boolean)) {
      setFieldErrors(errors);
      setError("Please fix the highlighted fields");
      return;
    }

    setLoading(true);
    try {
      await enquiryApi.createEnquiry({
        purpose: ENQUIRY_PURPOSE,
        name: form.name,
        companyName: form.companyName,
        email: form.email,
        phone: form.phone,
        employeeCount: form.employeeCount ? Number(form.employeeCount) : null,
        services: [],
        message: form.message,
      });
      setSubmitted(true);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Could not send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success-bg text-success">
          <CheckCircle2 size={28} />
        </span>
        <h2 className="text-xl font-bold text-heading">Thank you, {form.name.split(" ")[0]}!</h2>
        <p className="text-sm text-text-muted">
          We've received your enquiry. Our team will contact you shortly on <strong className="text-text">{form.phone}</strong>{" "}
          or <strong className="text-text">{form.email}</strong>.
        </p>
        <Button
          variant="secondary"
          className="mt-2"
          onClick={() => {
            setForm(INITIAL_FORM);
            setFieldErrors({});
            setSubmitted(false);
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {error && (
        <div className="rounded-lg border border-danger/30 bg-danger-bg px-3.5 py-2.5 text-sm text-danger">{error}</div>
      )}
      <Input
        label="Your name"
        name="name"
        required
        value={form.name}
        onChange={update("name")}
        onBlur={handleBlur("name")}
        error={fieldErrors.name}
        placeholder="Amit Sharma"
      />
      <Input
        label="Company name"
        name="companyName"
        required
        value={form.companyName}
        onChange={update("companyName")}
        onBlur={handleBlur("companyName")}
        error={fieldErrors.companyName}
        placeholder="Acme Industries Pvt Ltd"
      />
      <Input
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        required
        value={form.email}
        onChange={update("email")}
        onBlur={handleBlur("email")}
        error={fieldErrors.email}
        placeholder="you@company.com"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Mobile number"
          name="phone"
          required
          value={form.phone}
          onChange={update("phone")}
          onBlur={handleBlur("phone")}
          error={fieldErrors.phone}
          placeholder="10-digit mobile"
          inputMode="numeric"
          maxLength={10}
        />
        <Input
          label="No. of employees"
          name="employeeCount"
          value={form.employeeCount}
          onChange={update("employeeCount")}
          placeholder="e.g. 25"
          inputMode="numeric"
          maxLength={7}
        />
      </div>
      <Textarea
        label="Message"
        name="message"
        rows={3}
        maxLength={2000}
        value={form.message}
        onChange={update("message")}
        placeholder="Anything you'd like us to know (optional)"
      />
      <Button type="submit" size="lg" loading={loading} className="mt-2 w-full">
        Send enquiry
      </Button>
      <p className="text-center text-xs text-text-muted">Our team will get back to you within one working day.</p>
    </form>
  );
}
