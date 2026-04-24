"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { EASE } from "./presets";

type PageTransitionProps = { children: ReactNode };

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="flex min-h-0 min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-0 min-w-0 max-w-full flex-1 overflow-x-clip">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="flex min-h-0 min-w-0 max-w-full flex-1 flex-col overflow-x-clip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
