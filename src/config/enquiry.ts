export const ENQUIRY_PURPOSES = [
  {
    value: "ca_firm",
    label: "Register my CA firm (software licence)",
    short: "CA Firm",
  },
  {
    value: "hrms",
    label: "HRMS for my business / employees",
    short: "HRMS",
  },
  {
    value: "services",
    label: "CA services (GST, ITR, TDS, Payroll, etc.)",
    short: "CA Services",
  },
];

export const ENQUIRY_PURPOSE_SHORT = Object.fromEntries(ENQUIRY_PURPOSES.map((p) => [p.value, p.short]));

export const ENQUIRY_SERVICES = [
  { value: "gst", label: "GST" },
  { value: "income_tax", label: "Income Tax / ITR" },
  { value: "tds", label: "TDS" },
  { value: "accounting", label: "Accounting & Bookkeeping" },
  { value: "roc_compliance", label: "ROC Compliance" },
  { value: "audit", label: "Audit" },
  { value: "payroll", label: "Payroll" },
  { value: "other", label: "Other" },
];

export const ENQUIRY_SERVICE_LABELS = Object.fromEntries(ENQUIRY_SERVICES.map((s) => [s.value, s.label]));
