"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Optimized page transition wrapper with fade and slide effects.
 * Removes AnimatePresence to prevent route blocking and hydration mismatch lag.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

/**
 * Faster page transition for simpler animations
 */
export function FastPageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.15,
        ease: "easeOut",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

/**
 * Slide transition variant
 */
export function SlidePageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.25,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
