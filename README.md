# HRMS Landing — Standalone Site

A standalone copy of just the HRMS module's landing page and its workflow
sub-pages, pulled out of the main CA-Management app so they can be deployed
on their own domain.

## What's in here

- `/modules/hrms` — the HRMS landing page (hero, features, how it works,
  pricing, roles, benefits, FAQ, CTA).
- `/modules/hrms/:subId` — one page per HRMS workflow (Recruitment,
  Employee Management, Attendance, Leave, Payroll, Assets & IT, Performance,
  Exit, Training).
- `/` redirects straight to `/modules/hrms`.

This is **only** the landing content — no login, signup, dashboard, or API
calls. It's a static marketing site.

## Login / Signup / everything else

Buttons like "Log In", "Start Free Trial", "Products", and the other modules
in the nav menus don't exist on this site — they link back to the real
CA-Management app. Set that app's URL in `.env` before deploying:

```
VITE_MAIN_SITE_URL=https://your-main-app-domain.com
```

Until you set this, those links fall back to a relative path (only correct
if this site happens to share an origin with the main app — fine for local
testing, wrong once this is on its own domain).

## Run locally

```
npm install
npm run dev
```

## Build & deploy

```
npm run build
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, S3 +
CloudFront, etc). A `_redirects` file is included for Netlify-style hosts so
client-side routing doesn't 404 on refresh — if you're hosting elsewhere,
set up an equivalent SPA fallback to `index.html`.
