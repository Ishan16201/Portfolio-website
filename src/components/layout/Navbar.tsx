"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Link from "next/link";
import { useCallback, useState } from "react";
import { navLinks } from "@/data/content";
import { springSnappy } from "@/lib/motion";

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const reducedMotion = useReducedMotion();

  return (
    <Link href={href} onClick={onClick} className="group relative px-4 py-2">
      <motion.span
        className="relative z-10 text-sm font-medium tracking-wide text-text-secondary transition-colors duration-200 group-hover:text-accent"
        whileTap={reducedMotion ? {} : { scale: 0.95 }}
        transition={springSnappy}
      >
        {label}
      </motion.span>
      <motion.span
        className="absolute bottom-1 left-4 right-4 h-px origin-left bg-accent"
        initial={{ scaleX: 0 }}
        whileHover={reducedMotion ? {} : { scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();

  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(10, 11, 15, 0)", "rgba(10, 11, 15, 0.85)"],
  );
  const navBlur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]);
  const navShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 24px rgba(0,0,0,0.35)"],
  );

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleNavClick = () => {
    closeMobile();
  };

  return (
    <>
      <motion.header
        className="fixed top-0 right-0 left-0 z-50 border-b border-transparent"
        style={
          reducedMotion
            ? {
                backgroundColor: "rgba(10, 11, 15, 0.85)",
                backdropFilter: "blur(16px)",
              }
            : {
                backgroundColor: navBg,
                backdropFilter: navBlur,
                boxShadow: navShadow,
              }
        }
      >
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <Link href="#hero" className="group">
            <motion.span
              className="text-xl font-bold tracking-widest text-text-heading"
              whileHover={reducedMotion ? {} : { scale: 1.05 }}
              whileTap={reducedMotion ? {} : { scale: 0.95 }}
              transition={springSnappy}
            >
              IS<span className="text-accent transition-colors group-hover:text-accent/80">.</span>
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} onClick={handleNavClick} />
            ))}
          </nav>

          <motion.button
            type="button"
            className="flex flex-col gap-1.5 rounded-xl glass p-3 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            whileTap={reducedMotion ? {} : { scale: 0.92 }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-0.5 w-5 rounded bg-text-primary" />
            ))}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center glass md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              type="button"
              className="absolute top-5 right-6 rounded-xl glass p-3 text-2xl text-text-primary"
              onClick={closeMobile}
              aria-label="Close menu"
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
            <nav className="flex flex-col items-center gap-6" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.06, ...springSnappy }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="text-2xl font-semibold tracking-wide text-text-primary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
