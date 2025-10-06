import type { Metadata } from "next";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Home Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Alphine AI — Global Intelligence for a Connected World",
  description:
    "Welcome to Alphine AI — empowering organizations and societies through ethical, dependable, and globally connected artificial intelligence.",
  path: "/",
  keywords: [
    "Alphine AI",
    "ethical AI",
    "AI innovation",
    "AI for business",
    "AI platform",
    "AI automation",
  ],
});