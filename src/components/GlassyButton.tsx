"use client";
import { motion } from "framer-motion";

export default function GlassyButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className="glass px-6 py-2 font-medium transition-all duration-300 cursor-pointer"
    >
      {children}
    </motion.button>
  );
}
