import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeInUp = ({ children, delay = 0, className = "" }: FadeInUpProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className = "" }: TiltCardProps) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -4 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`shadow-card hover:shadow-card-hover transition-shadow duration-300 ${className}`}
  >
    {children}
  </motion.div>
);
