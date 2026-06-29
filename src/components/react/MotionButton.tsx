import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  href: string;
}

export default function MotionButton({ children, className, href }: Props) {
  const external = href.startsWith('http');

  return (
    <motion.a
      href={href}
      className={className}
      {...(external ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
      whileHover={{ scale: 1.05, y: -3, boxShadow: '0 12px 32px var(--shadow-accent)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 480, damping: 20 }}
    >
      {children}
    </motion.a>
  );
}
