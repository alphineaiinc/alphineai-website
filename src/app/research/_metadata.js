import Reveal from "@/components/Reveal";
import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Research Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Research & Innovation | Alphine AI",
  description:
    "Explore Alphine AI’s research in multimodal reasoning, ethical AI, and geospatial cognition. Our open initiatives drive transparency and global collaboration in artificial intelligence.",
  path: "/research",
  keywords: [
    "Alphine AI research",
    "AI innovation",
    "ethical AI research",
    "AI transparency",
    "AI publications",
    "AI datasets",
    "AI models",
  ],
});