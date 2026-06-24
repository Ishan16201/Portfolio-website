"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { LineWaves } from "./LineWaves";

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {!reducedMotion ? (
        <div className="absolute inset-0 opacity-55">
          <LineWaves
            speed={0.26}
            innerLineCount={32}
            outerLineCount={42}
            warpIntensity={0.82}
            rotation={-38}
            edgeFadeWidth={0.04}
            colorCycleSpeed={0.28}
            brightness={0.16}
            color1="#c9a84c"
            color2="#e8e8f0"
            color3="#6d8fb8"
            enableMouseInteraction
            mouseInfluence={1.25}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(201,168,76,0.1),transparent_65%)]" />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_15%,rgba(201,168,76,0.08),transparent_62%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/25 via-bg-primary/45 to-bg-primary" />
    </div>
  );
}
