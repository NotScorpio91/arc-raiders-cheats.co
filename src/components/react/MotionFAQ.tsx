import { motion, AnimatePresence } from 'framer-motion';
import { useId, useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  items: FAQ[];
  className?: string;
  style?: React.CSSProperties;
}

export default function MotionFAQ({ items, className = 'faq-wrap', style }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className={className} style={style}>
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <motion.div
            key={faq.question}
            className={`faq-item${isOpen ? ' open' : ''}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            whileHover={{ scale: 1.008 }}
          >
            <motion.button
              id={buttonId}
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              whileTap={{ scale: 0.99 }}
            >
              {faq.question}
              <motion.span
                className="faq-ico-wrap"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {!isOpen ? (
                    <path d="M5 12h14M12 5v14" strokeLinecap="round" />
                  ) : (
                    <path d="M5 12h14" strokeLinecap="round" />
                  )}
                </svg>
              </motion.span>
            </motion.button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-a open"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="faq-a-inner">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
