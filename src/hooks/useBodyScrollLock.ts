import { useEffect } from "react";

// Locks page scroll while `locked` is true — used by the header mega-menus
// (PeopleOS/Solutions/Resources/Products) so scrolling inside an open panel
// never bleeds through to the page behind it.
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}
