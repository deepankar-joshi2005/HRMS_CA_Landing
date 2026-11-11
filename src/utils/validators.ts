export const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
export const GSTIN_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
export const PHONE_REGEX = /^[6-9]\d{9}$/;
export const PINCODE_REGEX = /^[1-9]\d{5}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizePhone(value: string): string {
  return value.replace(/[^0-9]/g, "").slice(0, 10);
}

export function validatePhone(value: string, required = false): string {
  const v = (value || "").trim();
  if (!v) return required ? "Mobile number is required" : "";
  if (!/^\d+$/.test(v)) return "Mobile number must contain digits only";
  if (v.length !== 10) return "Mobile number must be exactly 10 digits";
  if (!PHONE_REGEX.test(v)) return "Enter a valid 10-digit mobile number";
  return "";
}

export function validateEmail(value: string, required = false): string {
  const v = (value || "").trim();
  if (!v) return required ? "Email is required" : "";
  if (!EMAIL_REGEX.test(v)) return "Enter a valid email address";
  return "";
}
