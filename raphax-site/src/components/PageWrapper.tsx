"use client";

import { motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className="flex-grow pt-20 md:pt-[120px]"
    >
      {children}
    </motion.main>
  );
}
