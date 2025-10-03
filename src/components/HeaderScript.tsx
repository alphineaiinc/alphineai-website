"use client";

import { useEffect } from "react";

export default function HeaderScript() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 24) {
        header.classList.add("header-compact");
      } else {
        header.classList.remove("header-compact");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
