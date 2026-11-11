// External links point to the main platform.
// Login and Signup now live natively inside this standalone app.
const MAIN_SITE_URL = (import.meta.env.VITE_MAIN_SITE_URL ?? "https://fira-tech.org").replace(/\/$/, "");

export function mainSiteHref(path: string): string {
  if (path === "/login" || path === "/signup") {
    return path;
  }
  return `${MAIN_SITE_URL}${path}`;
}
