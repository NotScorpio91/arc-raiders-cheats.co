import { motion } from 'framer-motion';
import { Children, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MotionStagger({ children, className }: Props) {
  const items = Children.toArray(children);

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
    >
      {items.map((child, index) => (
        <motion.div
          key={index}
          className="stagger-cell"
          variants={item}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
