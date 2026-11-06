import { motion, useReducedMotion, useInView, type HTMLMotionProps } from "framer-motion";
import { type ReactNode, useRef } from "react";

/**
 * Accént Motion 1.0 — Canonical Motion Tokens & Choreography Presets
 * (AXA Design System • design.pipes.pink)
 */
export const DURATION = {
  fast: 0.12,
  base: 0.2,
  slow: 0.32,
} as const;

export const EASE_ACCENT: readonly [number, number, number, number] = [0.16, 1, 0.3, 1] as const;
export const EDITORIAL_EASE = EASE_ACCENT;

/**
 * Accént Editorial Easing (Slow, glamorous Chicuinaco settle curve)
 */
export const EASE_EDITORIAL: readonly [number, number, number, number] = [0.22, 1, 0.36, 1] as const;

export const EDITORIAL_DURATION = {
  staggerWord: 0.035,
  staggerCard: 0.08,
  fadeIn: 0.65,
  reveal: 0.85,
} as const;

export const SPRING_LAYOUT = {
  type: "spring" as const,
  stiffness: 400,
  damping: 34,
};

export const TAP = {
  scale: 0.97,
} as const;

export const CARD_HOVER = {
  y: -4,
  transition: { duration: DURATION.fast, ease: EASE_ACCENT },
} as const;

export const CARD_TAP = {
  scale: 0.985,
  transition: { duration: DURATION.fast, ease: EASE_ACCENT },
} as const;

export const RISE = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE_ACCENT,
    },
  },
} as const;

// --------------------------------------------------------------------------
// Editorial Word-by-Word Reveal
// --------------------------------------------------------------------------
export interface AccentRevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  italicWords?: number[];
  immediate?: boolean;
}

export function AccentRevealText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = EDITORIAL_DURATION.staggerWord,
  italicWords = [],
  immediate = false,
}: AccentRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });
  const shouldReduce = useReducedMotion();
  const show = immediate || inView;
  const words = text.split(" ");

  const MotionTag = motion[Tag] as any;

  return (
    <MotionTag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]"
        >
          <motion.span
            className={`inline-block ${italicWords.includes(i) ? "italic" : ""}`}
            initial={shouldReduce ? { opacity: 0 } : { y: "105%" }}
            animate={show ? (shouldReduce ? { opacity: 1 } : { y: "0%" }) : undefined}
            transition={{
              duration: shouldReduce ? 0.2 : EDITORIAL_DURATION.reveal,
              ease: EASE_EDITORIAL,
              delay: delay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

// --------------------------------------------------------------------------
// Curtain Wipe Image Reveal
// --------------------------------------------------------------------------
export interface AccentRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
}

export function AccentRevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0,
}: AccentRevealImageProps) {
  const shouldReduce = useReducedMotion();

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        initial={
          shouldReduce
            ? { opacity: 0 }
            : { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }
        }
        whileInView={
          shouldReduce
            ? { opacity: 1 }
            : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
        }
        viewport={{ once: true, margin: "-6% 0px" }}
        transition={{
          duration: shouldReduce ? 0.2 : EDITORIAL_DURATION.reveal,
          ease: EASE_EDITORIAL,
          delay,
        }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          initial={shouldReduce ? { scale: 1 } : { scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduce ? 0.2 : 1.2,
            ease: EASE_EDITORIAL,
            delay,
          }}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}

// --------------------------------------------------------------------------
// Kinetic 3-Bar Badge
// --------------------------------------------------------------------------
export function AccentKineticBadge({
  label,
  className = "",
  barColor = "bg-[#FE299E]",
}: {
  label: string;
  className?: string;
  barColor?: string;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex items-center gap-[3px] h-3.5" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={shouldReduce ? { scaleY: 1 } : { scaleY: 0.3, opacity: 0.4 }}
            animate={
              shouldReduce
                ? { scaleY: 1, opacity: 1 }
                : {
                    scaleY: [0.3, 1, 0.7, 1],
                    opacity: [0.4, 1, 0.8, 1],
                  }
            }
            transition={{
              duration: 0.8,
              delay: i * 0.12,
              ease: EASE_ACCENT,
            }}
            className={`w-[2px] h-3.5 ${barColor} origin-bottom rounded-[0.5px]`}
          />
        ))}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.14em] font-bold">
        {label}
      </span>
    </div>
  );
}

// --------------------------------------------------------------------------
// Editorial Viewport Reveal
// --------------------------------------------------------------------------
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
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{
        duration: shouldReduce ? 0.2 : duration,
        delay,
        ease: EASE_EDITORIAL,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function AccentEditorialReveal({
  children,
  className = "",
  delay = 0,
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <Reveal delay={delay} y={y} duration={EDITORIAL_DURATION.fadeIn} className={className}>
      {children}
    </Reveal>
  );
}

// --------------------------------------------------------------------------
// Stagger Container & Items
// --------------------------------------------------------------------------
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
      viewport={{ once: true, margin: "-6% 0px" }}
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
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduce ? { opacity: 0 } : { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduce ? 0.2 : 0.65,
            ease: EASE_EDITORIAL,
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

// --------------------------------------------------------------------------
// Hairline Line Expansion
// --------------------------------------------------------------------------
interface HairlineProps {
  className?: string;
  delay?: number;
}

export function Hairline({
  className = "bg-[#D3C7B5]",
  delay = 0,
}: HairlineProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? { opacity: 0 } : { scaleX: 0 }}
      whileInView={shouldReduce ? { opacity: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{
        duration: shouldReduce ? 0.2 : 0.85,
        delay,
        ease: EASE_EDITORIAL,
      }}
      style={{ transformOrigin: "left center" }}
      className={`h-px w-full ${className}`}
    />
  );
}
