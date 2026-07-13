import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useMounted } from './useMounted';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function MotionReveal({ children, className, delay = 0, y = 28 }: Props) {
  const mounted = useMounted();

  return (
    <motion.div
      className={className}
      initial={false}
      animate={!mounted ? { opacity: 1, y: 0 } : undefined}
      whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
