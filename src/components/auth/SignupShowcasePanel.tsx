import { Globe, Layers, Rocket } from "lucide-react";
import { LogoMark, BRAND_NAME } from "../ui/Logo";

const POINTS = [
  {
    icon: Globe,
    title: "Global platform with a native feel",
    desc: `${BRAND_NAME} gives HR one system to run globally, with country rules applied wherever your people work and the platform in every employee's own language.`,
  },
  {
    icon: Layers,
    title: "Modules built together, not acquired and patched",
    desc: `${BRAND_NAME} was built as one system on one data model, with AI in that foundation delivering people intelligence across the employee lifecycle.`,
  },
  {
    icon: Rocket,
    title: "Built to set up fast and use simply",
    desc: `${BRAND_NAME}'s interface is designed for the people who run HR every day, so your team configures policies and workflows without IT help and starts working within days.`,
  },
];

export default function SignupShowcasePanel() {
  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-b from-[#190d3d] via-[#3b1e73] to-[#8a5399] px-10 py-8 lg:flex lg:h-screen lg:w-1/2 lg:shrink-0 lg:flex-col xl:w-[46%] xl:px-14">
      <svg
        viewBox="0 0 600 180"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        fill="currentColor"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full text-white/10"
      >
        <rect x="0" y="152" width="600" height="28" />
        <rect x="40" y="72" width="16" height="80" />
        <circle cx="48" cy="67" r="10" />
        <rect x="544" y="72" width="16" height="80" />
        <circle cx="552" cy="67" r="10" />
        <rect x="150" y="56" width="18" height="96" />
        <circle cx="159" cy="50" r="12" />
        <rect x="432" y="56" width="18" height="96" />
        <circle cx="441" cy="50" r="12" />
        <rect x="230" y="88" width="140" height="64" />
        <circle cx="300" cy="72" r="44" />
        <rect x="296" y="24" width="8" height="16" />
        <circle cx="300" cy="22" r="5" />
        <circle cx="250" cy="84" r="12" />
        <circle cx="350" cy="84" r="12" />
      </svg>

      <div className="relative z-10 mt-4 flex items-center gap-2 shrink-0">
        <LogoMark className="h-7 w-auto shrink-0" />
        <span className="text-lg font-bold text-white">{BRAND_NAME}</span>
      </div>

      <div className="relative z-10 mt-auto mb-20">
        <h2 className="text-[22px] font-bold leading-[1.2] tracking-tight text-white xl:text-[26px]">
          The modern HR platform
          <br />
          built around your needs
        </h2>

        <ul className="mt-6 flex flex-col gap-4">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="flex items-start gap-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon size={14} />
              </span>
              <div>
                <p className="text-[13px] font-semibold text-white">{title}</p>
                <p className="mt-0.5 text-xs leading-snug text-violet-100/70">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 flex items-center gap-4 pt-6">
        <span className="h-px flex-1 bg-white/15" />
        <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-violet-100/60">
          Trusted by organisations
        </span>
        <span className="h-px flex-1 bg-white/15" />
      </div>
    </div>
  );
}
