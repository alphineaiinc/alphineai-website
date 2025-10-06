import type { Metadata } from "next";
import { useState } from "react";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Contact Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Contact Alphine AI — Partnerships, Collaborations & Inquiries",
  description:
    "Reach out to Alphine AI for partnerships, collaborations, or inquiries. Fill out our secure contact form and our team will respond promptly.",
  path: "/contact",
  keywords: [
    "contact Alphine AI",
    "AI partnerships",
    "AI collaborations",
    "Alphine AI inquiries",
    "AI company contact",
  ],
});
