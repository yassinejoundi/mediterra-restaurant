"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { getRevealVariant, premiumEase } from "./motionVariants";

type RevealElement = "div" | "section" | "span" | "h1" | "h2" | "h3" | "p";

type ScrollRevealProps<T extends RevealElement = "div"> = {
  children: ReactNode;
  as?: T;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function ScrollReveal<T extends RevealElement = "div">({
  children,
  as,
  className,
  delay = 0,
  duration = 0.68,
  direction = "up",
  ...props
}: ScrollRevealProps<T>) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motionElements[as ?? "div"] as ElementType;

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? fadeReduced : getRevealVariant(direction)}
      transition={{ duration: shouldReduceMotion ? 0.01 : duration, delay: shouldReduceMotion ? 0 : delay, ease: premiumEase }}
      {...props}
    >
      {children}
    </Component>
  );
}

const fadeReduced = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const motionElements = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
};
