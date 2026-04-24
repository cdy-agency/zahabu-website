"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { SPRING_HOVER } from "./presets";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Subtle card lift + shadow on hover (framer-motion only, no 3D).
 */
export function MotionCard({ children, className }: MotionCardProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, boxShadow: "0 20px 44px -20px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.99 }}
      transition={SPRING_HOVER}
    >
      {children}
    </motion.div>
  );
}
