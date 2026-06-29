import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SITE } from '../../lib/site';

export default function PageLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    document.addEventListener('astro:before-preparation', start);
    document.addEventListener('astro:after-swap', end);
    document.addEventListener('astro:page-load', end);

    return () => {
      document.removeEventListener('astro:before-preparation', start);
      document.removeEventListener('astro:after-swap', end);
      document.removeEventListener('astro:page-load', end);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <div className="page-loader-bar-track">
            <motion.div
              className="page-loader-bar"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <motion.div
            className="page-loader-core"
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -4 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={SITE.logo}
              alt={SITE.logoAlt}
              width={40}
              height={47}
              className="page-loader-logo"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="page-loader-text"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Loading
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
