import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Products Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Alphine AI Products — Ethical, Scalable Intelligence Platforms",
  description:
    "Explore Alphine AI’s suite of intelligent platforms including the Automated Voice & Conversation Platform (ACA), Global Attendance Verification, Social & Engagement Automation, and Knowledge Orchestrator — built for ethical, scalable, and dependable AI performance.",
  path: "/products",
  keywords: [
    "Alphine AI products",
    "AI automation",
    "AI for business",
    "AI platforms",
    "ACA platform",
    "AI participation tracking",
    "AI knowledge management",
  ],
});