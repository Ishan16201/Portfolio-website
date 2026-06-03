"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Link from "next/link";
import type { ReactNode } from "react";
import { springSnappy } from "@/lib/motion";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "gold";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const reducedMotion = useReducedMotion();

  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors";
  const variants = {
    primary: "glass text-text-primary hover:text-accent",
    gold: "glass text-accent hover:bg-accent/10",
  };

  const motionProps = reducedMotion
    ? {}
    : {
        whileHover: { scale: 1.04 },
        whileTap: { scale: 0.96 },
        transition: springSnappy,
      };

  const content = (
    <motion.span
      className={`${base} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
