import { useMemo, useState } from 'react';
import type { BlogCardData } from '../../lib/blog';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'esp', label: 'ESP' },
  { id: 'aimbot', label: 'Aimbot' },
  { id: 'guides', label: 'Guides' },
  { id: 'meta', label: 'Meta' },
  { id: 'setup', label: 'Setup' },
] as const;

interface Props {
  posts: BlogCardData[];
}

export default function BlogFilter({ posts }: Props) {
  const [active, setActive] = useState<string>('all');

  const filtered = useMemo(() => {
    if (active === 'all') return posts;
    return posts.filter((p) => p.category === active);
  }, [active, posts]);

  return (
    <>
      <div className="blog-filter" role="tablist" aria-label="Filter blog posts by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            className={active === cat.id ? 'blog-filter-chip is-active' : 'blog-filter-chip'}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="blog-filter-grid animate-grid">
        {filtered.map((post, i) => (
          <article key={post.slug} className="blog-card-wrap" style={{ animationDelay: `${i * 40}ms` }}>
            <a href={post.href} className="blog-card blog-card--cover">
              {post.coverImage && (
                <div className="blog-card-cover">
                  <img
                    src={post.coverImage}
                    alt={post.coverImageAlt ?? post.title}
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="360"
                  />
                </div>
              )}
              <div className="blog-card-body">
                <div className="blog-card-head">
                  <div className="blog-card-icon" aria-hidden="true">
                    <span className="blog-card-icon-dot" />
                  </div>
                  <div className="blog-card-title-wrap">
                    {post.category && <span className="blog-card-category">{post.category.toUpperCase()}</span>}
                    <h3 className="blog-card-name">{post.title}</h3>
                  </div>
                </div>
                <p className="blog-card-desc">{post.description}</p>
                <div className="blog-card-meta">
                  <span className="blog-card-pill">{post.date}</span>
                  {post.readTime && <span className="blog-card-pill">{post.readTime}</span>}
                </div>
                <span className="blog-card-btn">
                  Read article
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="blog-filter-empty">No posts in this category yet.</p>
      )}
    </>
  );
}
