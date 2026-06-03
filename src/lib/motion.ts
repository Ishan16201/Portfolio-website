import type { Transition, Variants } from "framer-motion";

export const springSnappy = { type: "spring", stiffness: 400, damping: 30 } as const;
export const springBouncy = { type: "spring", stiffness: 300, damping: 20 } as const;
export const easeOut = { duration: 0.4, ease: [0.22, 1, 0.36, 1] } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export function getTransition(reducedMotion: boolean): Transition {
  if (reducedMotion) {
    return { duration: 0 };
  }
  return easeOut;
}

export const viewportOnce = { once: true, margin: "-80px" as const, amount: 0.2 };
