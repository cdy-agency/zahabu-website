"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { EASE } from "./presets";

type When = "inView" | "mount";

type SectionTransitionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  when?: When;
  /** Slight offset only (optional); animation is always fade. */
  offset?: "up" | "down" | "none";
};

export function SectionTransition({
  children,
  className,
  id,
  when = "inView",
  offset = "up",
}: SectionTransitionProps) {
  const reduceMotion = useReducedMotion();

  const y0 = offset === "none" ? 0 : offset === "down" ? -16 : 16;

  if (reduceMotion) {
    return (
      <section className={className} id={id}>
        {children}
      </section>
    );
  }

  if (when === "mount") {
    return (
      <motion.section
        className={className}
        id={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section
      className={className}
      id={id}
      initial={{ opacity: 0, y: y0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}
    </motion.section>
  );
}
