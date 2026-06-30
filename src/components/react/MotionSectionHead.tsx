import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useMounted } from './useMounted';

interface Props {
  children: ReactNode;
}

export default function MotionSectionHead({ children }: Props) {
  const mounted = useMounted();

  if (!mounted) {
    return <div className="s-head">{children}</div>;
  }

  return (
    <motion.div
      className="s-head"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
