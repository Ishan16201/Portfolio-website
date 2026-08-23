"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Link from "next/link";
import { useState } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { ExternalLinkIcon } from "@/components/icons/SocialIcons";
import { springSnappy } from "@/lib/motion";

type ContentCardProps = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  badge?: string;
  id?: string;
};

export function ContentCard({
  title,
  description,
  href,
  linkLabel = "View more",
  badge,
  id,
}: ContentCardProps) {
  const reducedMotion = useReducedMotion();
  const isLink = Boolean(href);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const spotlightStyle = {
    background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(201, 168, 76, 0.18), transparent 34%)`,
  } satisfies CSSProperties;

  const cardContent = (
    <>
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={spotlightStyle}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-5 top-5 h-2 w-2 rounded-full bg-accent/70 opacity-0 shadow-[0_0_18px_rgba(201,168,76,0.65)] transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      {badge && (
        <span className="relative mb-4 inline-block rounded-full bg-accent-dim px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent">
          {badge}
        </span>
      )}
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
        <h3 className="relative text-lg font-bold text-text-heading transition-[letter-spacing] duration-300 group-hover:tracking-wide">
          {title}
        </h3>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-text-secondary">{description}</p>
      {isLink && (
        <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          {linkLabel}
          <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </>
  );

  const motionProps = reducedMotion
    ? {}
    : {
        whileHover: { y: -8, scale: 1.02, rotateX: 2, rotateY: -2 },
        whileTap: { scale: 0.98 },
        transition: springSnappy,
      };

  const className =
    "group relative block h-full overflow-hidden rounded-2xl liquid-glass p-8 transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/10";

  const pulseRing = !reducedMotion && (
    <motion.span
      className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 ring-1 ring-accent/30 group-hover:opacity-100"
      animate={{ opacity: [0, 0.4, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />
  );

  if (isLink && href) {
    return (
      <motion.div {...motionProps} className="h-full transform-gpu [transform-style:preserve-3d]">
        <Link
          href={href}
          id={id}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onMouseMove={handleMouseMove}
        >
          {pulseRing}
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.article
      id={id}
      {...motionProps}
      className={className}
      onMouseMove={handleMouseMove}
    >
      {pulseRing}
      {cardContent}
    </motion.article>
  );
}

export function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-[52px] w-[52px] items-center justify-center rounded-full glass text-text-secondary transition-colors hover:text-accent"
      whileHover={reducedMotion ? {} : { scale: 1.12, rotate: 6 }}
      whileTap={reducedMotion ? {} : { scale: 0.92 }}
      transition={springSnappy}
    >
      {children}
    </motion.a>
  );
}
