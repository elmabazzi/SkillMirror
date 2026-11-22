import { useEffect } from "react";

// Fades elements marked with `data-reveal` in as they scroll into view.
// Content is never hidden unless this runs: without JavaScript, without
// IntersectionObserver, or with "reduce motion" switched on, everything is
// simply visible.
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      // A fixed margin (not a percentage) so tall screens behave like short ones.
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 },
    );

    root.classList.add("reveal-ready");
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);
}
