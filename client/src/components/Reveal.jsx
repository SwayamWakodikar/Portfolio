import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Reveal - Fades in and slides up
 * Perfect for: Cards, sections, content blocks
 */
export default function Reveal({ children, delay = 0, duration = 0.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px",
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ transform: "translateZ(0)" }}
    >
      {children}
    </motion.div>
  );
}