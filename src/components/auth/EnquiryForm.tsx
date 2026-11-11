import { useState, type FormEvent, type ChangeEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import * as enquiryApi from "../../api/enquiry.api";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { sanitizePhone, validatePhone, validateEmail } from "../../utils/validators";
import { ENQUIRY_PURPOSES, ENQUIRY_SERVICES } from "../../config/enquiry";

const INITIAL_FORM = {
  purpose: "",
  name: "",
  companyName: "",
  email: "",
  phone: "",
  city: "",
  employeeCount: "",
  services: [] as string[],
  message: "",
};

const COMPANY_LABEL: Record<string, { label: string; placeholder: string }> = {
  ca_firm: { label: "CA firm name", placeholder: "Sharma & Associates" },
  hrms: { label: "Company name", placeholder: "Acme Industries Pvt Ltd" },
  services: { label: "Company / business name", placeholder: "Acme Traders" },
};

const VALIDATORS: Record<string, (v: string) => string> = {
  purpose: (v) => (v ? "" : "Select what you're enquiring about"),
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

  function toggleService(value: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(value) ? f.services.filter((s) => s !== value) : [...f.services, value],
    }));
    setFieldErrors((fe) => ({ ...fe, services: "" }));
    setError("");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const errors: Record<string, string> = {};
    for (const field of Object.keys(VALIDATORS)) {
      const msg = VALIDATORS[field]((form as any)[field] || "");
      if (msg) errors[field] = msg;
    }
    if (form.purpose === "services" && form.services.length === 0) {
      errors.services = "Select at least one service";
    }
    if (Object.values(errors).some(Boolean)) {
      setFieldErrors(errors);
      setError("Please fix the highlighted fields");
      return;
    }

    setLoading(true);
    try {
      await enquiryApi.createEnquiry({
        purpose: form.purpose,
        name: form.name,
        companyName: form.companyName,
        email: form.email,
        phone: form.phone,
        city: form.city,
        employeeCount: form.purpose === "hrms" && form.employeeCount ? Number(form.employeeCount) : null,
        services: form.purpose === "services" ? form.services : [],
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

  const company = COMPANY_LABEL[form.purpose] || { label: "Company / firm name", placeholder: "Your company or firm" };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {error && (
        <div className="rounded-lg border border-danger/30 bg-danger-bg px-3.5 py-2.5 text-sm text-danger">{error}</div>
      )}
      <Select
        label="I'm enquiring about"
        name="purpose"
        required
        value={form.purpose}
        onChange={update("purpose")}
        onBlur={handleBlur("purpose")}
        error={fieldErrors.purpose}
      >
        <option value="" disabled>
          Select an option
        </option>
        {ENQUIRY_PURPOSES.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </Select>

      {form.purpose === "services" && (
        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-medium text-text">
            Services you need <span className="text-danger">*</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {ENQUIRY_SERVICES.map((s) => {
              const on = form.services.includes(s.value);
              return (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => toggleService(s.value)}
                  aria-pressed={on}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    on ? "border-brand bg-brand text-white" : "border-border bg-surface text-text-muted hover:text-text"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
          {fieldErrors.services && <p className="text-xs text-danger">{fieldErrors.services}</p>}
        </div>
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
        label={company.label}
        name="companyName"
        required
        value={form.companyName}
        onChange={update("companyName")}
        onBlur={handleBlur("companyName")}
        error={fieldErrors.companyName}
        placeholder={company.placeholder}
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
        {form.purpose === "hrms" ? (
          <Input
            label="No. of employees"
            name="employeeCount"
            value={form.employeeCount}
            onChange={update("employeeCount")}
            placeholder="e.g. 25"
            inputMode="numeric"
            maxLength={7}
          />
        ) : (
          <Input label="City" name="city" value={form.city} onChange={update("city")} placeholder="e.g. Jaipur" />
        )}
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
