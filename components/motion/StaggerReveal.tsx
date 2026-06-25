"use client";

import { Children, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { premiumEase, staggerContainer, staggerItem } from "./motionVariants";

type StaggerElement = "div" | "section";

type StaggerRevealProps<T extends StaggerElement = "div"> = {
  children: ReactNode;
  as?: T;
  className?: string;
  childClassName?: string;
  delay?: number;
  staggerDelay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function StaggerReveal<T extends StaggerElement = "div">({
  children,
  as,
  className,
  childClassName,
  delay = 0,
  staggerDelay = 0.08,
  ...props
}: StaggerRevealProps<T>) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motionElements[as ?? "div"] as ElementType;

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? undefined : staggerContainer}
      transition={{ delayChildren: delay, staggerChildren: staggerDelay }}
      {...props}
    >
      {Children.map(children, (child) => (
        <motion.div
          className={childClassName}
          variants={shouldReduceMotion ? undefined : staggerItem}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.62, ease: premiumEase }}
        >
          {child}
        </motion.div>
      ))}
    </Component>
  );
}

const motionElements = {
  div: motion.div,
  section: motion.section,
};
