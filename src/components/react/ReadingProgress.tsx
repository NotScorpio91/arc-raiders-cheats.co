import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const article = document.querySelector('.blog-article--prose');
    if (!article) return;

    const update = () => {
      const rect = article.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const articleTop = scrollTop + rect.top;
      const articleHeight = article.offsetHeight;
      const viewport = window.innerHeight;
      const max = articleHeight - viewport * 0.4;
      if (max <= 0) {
        setProgress(rect.top <= 80 ? 100 : 0);
        return;
      }
      const scrolled = scrollTop - articleTop + viewport * 0.25;
      setProgress(Math.min(100, Math.max(0, (scrolled / max) * 100)));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    if (reduceMotion) setProgress(0);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className="reading-progress"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div className="reading-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
