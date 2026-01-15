import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px",
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ transform: "translateZ(0)" }}
    >
      {children}
    </motion.div>
  );
}
