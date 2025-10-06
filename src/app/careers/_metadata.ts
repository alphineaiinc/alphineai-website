import type { Metadata } from "next";
import { useState } from "react";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Careers Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Careers | Alphine AI",
  description:
    "Join Alphine AI’s global mission to create ethical and dependable artificial intelligence. Explore roles in AI/ML engineering, DevOps, design, and leadership as we shape the future of responsible AI.",
  path: "/careers",
  keywords: [
    "Alphine AI careers", 
    "AI jobs",
    "AI engineer",
    "machine learning jobs",
    "AI company hiring",
    "AI internships",
  ],
});
