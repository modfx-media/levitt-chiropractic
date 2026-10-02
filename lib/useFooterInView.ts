"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page's <footer> has scrolled into view, so fixed/sticky
 * bottom UI (scroll-to-top button, sticky CTA bar, etc.) can hide itself
 * instead of covering the footer's content.
 */
export function useFooterInView() {
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { rootMargin: "0px 0px -48px 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return footerInView;
}
