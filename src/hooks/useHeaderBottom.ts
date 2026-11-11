import { useEffect, useState } from "react";

// Measures the live distance from the viewport top to the bottom edge of the
// page's `<header>` — used to anchor a `position: fixed` mega-menu panel so
// it always spans exactly "header bottom" to "viewport bottom", in every
// scroll state. A hardcoded `calc(100vh - Npx)` breaks here because the
// promo ribbon above the sticky header scrolls away: the header's distance
// from the viewport top shrinks from "ribbon + header" to just "header" as
// soon as you scroll past the ribbon, so no single constant is ever right.
export function useHeaderBottom(active: boolean) {
  const [headerBottom, setHeaderBottom] = useState(0);

  useEffect(() => {
    if (!active) return;
    const measure = () => {
      const header = document.querySelector("header");
      if (header) setHeaderBottom(header.getBoundingClientRect().bottom);
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, [active]);

  return headerBottom;
}
