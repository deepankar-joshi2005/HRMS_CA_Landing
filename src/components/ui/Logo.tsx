export const BRAND_NAME = "FIRA";

// Decorative sparkle/flourish mark. A small multi-point bloom in the
// brand's violet palette, rendered inline so it scales crisply at any size.
export function LogoMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M24 2c1.8 6.2 3.6 10.2 7 13.5S38.3 20.2 46 22c-6.2 1.8-10.2 3.6-13.5 7S27.8 38.3 26 46c-1.8-6.2-3.6-10.2-7-13.5S9.7 27.8 2 26c6.2-1.8 10.2-3.6 13.5-7S20.2 9.7 22 2c.6.1 1.4.1 2 0Z"
        fill="url(#fira-sparkle-gradient)"
      />
      <circle cx="24" cy="24" r="3.4" fill="#fde68a" />
      <defs>
        <linearGradient id="fira-sparkle-gradient" x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="45%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}
