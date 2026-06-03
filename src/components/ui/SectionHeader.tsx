"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeUp, getTransition, viewportOnce } from "@/lib/motion";

type SectionHeaderProps = {
  label: string;
  title: string;
};

export function SectionHeader({ label, title }: SectionHeaderProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={getTransition(reducedMotion)}
      className="mb-12"
    >
      <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-wide text-text-heading md:text-4xl">
        {title}
      </h2>
      <div
        className="mt-6 h-0.5 w-14 bg-gradient-to-r from-transparent via-accent to-transparent"
        aria-hidden
      />
    </motion.div>
  );
}
