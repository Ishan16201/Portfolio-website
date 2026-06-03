"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Link from "next/link";
import type { ReactNode } from "react";
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

  const cardContent = (
  <>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-accent-dim px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent">
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
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          {linkLabel}
          <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </>
  );

  const motionProps = reducedMotion
    ? {}
    : {
        whileHover: { y: -6, scale: 1.02 },
        transition: springSnappy,
      };

  const className =
    "group relative block overflow-hidden rounded-2xl glass p-8 transition-shadow duration-300 hover:glow-accent hover:shadow-2xl hover:shadow-accent/5";

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
      <motion.div {...motionProps} className="h-full">
        <Link href={href} id={id} target="_blank" rel="noopener noreferrer" className={className}>
          {pulseRing}
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.article id={id} {...motionProps} className={`${className} h-full`}>
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
