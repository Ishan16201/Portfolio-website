"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useEffect, useState } from "react";
import { SocialIcon } from "@/components/icons/SocialIcons";
import { SocialLink } from "@/components/ui/ContentCard";
import { heroPhrases, socialLinks } from "@/data/content";
import { fadeUp, springBouncy } from "@/lib/motion";

function TypewriterTagline() {
  const reducedMotion = useReducedMotion();
  const fullText = heroPhrases.join(" ");
  const [displayed, setDisplayed] = useState(reducedMotion ? fullText : "");

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(fullText);
      return;
    }

    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      if (index < fullText.length) {
        setDisplayed(fullText.slice(0, index + 1));
        const delay = fullText.charAt(index) === "." ? 300 : 70;
        index++;
        timeoutId = setTimeout(type, delay);
      }
    };

    const startDelay = setTimeout(type, 600);
    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
    };
  }, [fullText, reducedMotion]);

  return (
    <p className="min-h-[2em] text-lg text-text-secondary md:text-xl">
      {displayed}
      {!reducedMotion && (
        <motion.span
          className="ml-0.5 inline-block h-[1.1em] w-0.5 bg-accent align-text-bottom"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          aria-hidden
        />
      )}
    </p>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    if (reducedMotion) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion, mouseX, mouseY]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-20 text-center"
    >
      <motion.div
        className="relative z-10 max-w-3xl"
        style={reducedMotion ? {} : { x: parallaxX, y: parallaxY }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            transition={springBouncy}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent"
          >
            Portfolio
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={springBouncy}
            className="mb-6 text-5xl font-bold tracking-wider text-text-heading sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Ishan Saraf
          </motion.h1>

          <motion.div variants={fadeUp} transition={springBouncy} className="mb-12">
            <TypewriterTagline />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={springBouncy}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {socialLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.08, ...springBouncy }}
              >
                <SocialLink href={link.href} label={link.label}>
                  <SocialIcon name={link.icon} className="h-5 w-5" />
                </SocialLink>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={reducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <div className="h-10 w-6 rounded-full border border-text-secondary/40 p-1.5">
          <motion.div
            className="mx-auto h-1.5 w-1 rounded-full bg-accent"
            animate={reducedMotion ? {} : { y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
