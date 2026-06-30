import { motion } from 'framer-motion';
import { Children, type ReactNode } from 'react';
import { useMounted } from './useMounted';

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

const heroStyle = { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' } as const;

export default function MotionHero({ children }: Props) {
  const mounted = useMounted();
  const items = Children.toArray(children);

  if (!mounted) {
    return (
      <div style={heroStyle}>
        {items.map((child, index) => (
          <div key={index} style={{ width: '100%' }}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" style={heroStyle}>
      {items.map((child, index) => (
        <motion.div key={index} variants={item} style={{ width: '100%' }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
