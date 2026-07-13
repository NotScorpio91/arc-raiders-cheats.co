import { useEffect, useState } from 'react';

export type TocHeading = {
  depth: number;
  slug: string;
  text: string;
};

interface Props {
  headings: TocHeading[];
}

export default function BlogToc({ headings }: Props) {
  const [active, setActive] = useState('');

  const items = headings.filter((h) => h.depth >= 2 && h.depth <= 3);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    );

    for (const item of items) {
      const el = document.getElementById(item.slug);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <p className="blog-toc-title">On this page</p>
      <ul className="blog-toc-list">
        {items.map((item) => (
          <li key={item.slug} className={item.depth === 3 ? 'blog-toc-item blog-toc-item--sub' : 'blog-toc-item'}>
            <a
              href={`#${item.slug}`}
              className={active === item.slug ? 'blog-toc-link is-active' : 'blog-toc-link'}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
