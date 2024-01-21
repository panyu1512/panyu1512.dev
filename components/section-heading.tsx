"use client";
import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80"
    >
      {children}
    </motion.h2>
  );
}