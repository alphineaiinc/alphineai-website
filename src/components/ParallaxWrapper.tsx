"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxWrapper({
  children,
  offset = 50,
}: {
  children: React.ReactNode;
  offset?: number;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -offset]); // moves up slightly when scrolling

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}
