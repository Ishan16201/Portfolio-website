"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SocialIcon } from "@/components/icons/SocialIcons";
import { socialLinks } from "@/data/content";
import { springSnappy } from "@/lib/motion";

export function Footer() {
  const reducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-14 text-center">
      <div className="mb-8 flex items-center justify-center gap-5">
        {socialLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-text-secondary transition-colors hover:text-accent"
            whileHover={reducedMotion ? {} : { scale: 1.2, rotate: -8 }}
            whileTap={reducedMotion ? {} : { scale: 0.9 }}
            transition={springSnappy}
          >
            <SocialIcon name={link.icon} className="h-5 w-5" />
          </motion.a>
        ))}
      </div>
      <p className="mb-2 text-sm text-text-secondary">
        Open to collaborations, research, and conversations.
      </p>
      <p className="text-xs text-text-secondary/60">© {year} Ishan Saraf</p>
    </footer>
  );
}
