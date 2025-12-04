import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-150px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
