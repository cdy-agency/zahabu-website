"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SPRING_HOVER } from "./presets";

type Props = { label: string; accent: boolean };

export function ValuePillMotion({ label, accent }: Props) {
  const reduce = useReducedMotion();
  const className = `relative flex flex-col items-center px-6 py-3 rounded-sm font-bold text-sm tracking-widest uppercase cursor-default select-none ${
    accent
      ? "bg-accent text-primary"
      : "bg-gray-100 text-primary border border-gray-200"
  }`;
  if (reduce) {
    return (
      <div className={className}>
        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/30 rounded-full" />
        {label}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      whileHover={{ y: -2, scale: 1.04 }}
      transition={SPRING_HOVER}
    >
      <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/30 rounded-full" />
      {label}
    </motion.div>
  );
}
