/** Shared easing and springs for framer-motion (no 3D). */
export const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const SPRING_HOVER = {
  type: "spring" as const,
  stiffness: 400,
  damping: 24,
  mass: 0.45,
};

export const BTN_HOVER = {
  y: -2,
  scale: 1.02,
  boxShadow: "0 12px 28px -10px rgba(0,0,0,0.22)",
} as const;

export const BTN_TAP = { scale: 0.98 } as const;
