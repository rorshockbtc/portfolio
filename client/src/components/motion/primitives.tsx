import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  y = 20,
  duration = 0.72,
  className,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration, delay, ease: EDITORIAL_EASE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}

export function Stagger({
  children,
  staggerChildren = 0.075,
  delayChildren = 0.04,
  className,
  ...rest
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  y?: number;
  className?: string;
}

export function StaggerItem({
  children,
  y = 18,
  className,
  ...rest
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EDITORIAL_EASE },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface HairlineProps {
  className?: string;
  delay?: number;
}

export function Hairline({
  className = "bg-[#D3C7B5]",
  delay = 0,
}: HairlineProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.85, delay, ease: EDITORIAL_EASE }}
      style={{ transformOrigin: "left center" }}
      className={`h-px w-full ${className}`}
    />
  );
}
