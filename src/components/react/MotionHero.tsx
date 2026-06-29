import { motion } from 'framer-motion';
import { Children, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MotionHero({ children }: Props) {
  const items = Children.toArray(children);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {items.map((child, index) => (
        <motion.div key={index} variants={item} style={{ width: '100%' }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
