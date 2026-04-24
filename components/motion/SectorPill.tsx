"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SPRING_HOVER } from "./presets";

type Props = { children: string; className?: string };

export function SectorPill({ children, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <span className={className}>{children}</span>;
  }
  return (
    <motion.span
      className={className}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      transition={SPRING_HOVER}
    >
      {children}
    </motion.span>
  );
}
