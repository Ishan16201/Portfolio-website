"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const shapes = [
  { size: 320, x: "10%", y: "15%", delay: 0 },
  { size: 240, x: "75%", y: "25%", delay: 1.2 },
  { size: 180, x: "60%", y: "70%", delay: 0.6 },
  { size: 200, x: "20%", y: "65%", delay: 1.8 },
];

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={
          reducedMotion
            ? {}
            : {
                background: [
                  "radial-gradient(ellipse 60% 40% at 30% 20%, rgba(201,168,76,0.12), transparent 60%)",
                  "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(201,168,76,0.1), transparent 60%)",
                  "radial-gradient(ellipse 60% 40% at 30% 20%, rgba(201,168,76,0.12), transparent 60%)",
                ],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-accent/10 bg-accent/[0.03]"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={
            reducedMotion
              ? {}
              : {
                  x: [0, 20, -15, 0],
                  y: [0, -25, 15, 0],
                  rotate: [0, 90, 180, 360],
                }
          }
          transition={{
            duration: 20 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-transparent to-bg-primary" />
    </div>
  );
}
