'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

export interface Article {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}

interface BlogClientProps {
  initialArticles: Article[];
}

const CATEGORIES = [
  'All',
  'Branding',
  'SEO & Organic Growth',
  'Performance Marketing',
  'Content Strategy',
  'Social Media',
  'Growth Systems'
];

export default function BlogClient({ initialArticles }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on category and search query
  const filteredArticles = initialArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      
      <main style={{ paddingTop: 'calc(var(--header-height) + 40px)', minHeight: '100vh' }}>
        <section style={{ padding: '80px 0' }} className="blog-section">
          <div className="container">
            
            {/* Page Header */}
            <div style={{ marginBottom: '60px', maxWidth: '600px' }}>
              <span className="mono-label">Knowledge Base</span>
              <h1 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
                Intelligence.
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Actionable insights on brand strategy, SEO, performance marketing, and content — written for ambitious founders and marketing leaders.
              </p>
            </div>

            {/* Filter and Search Bar Row */}
            <div className="filter-search-row">
              {/* Category Tabs */}
              <div className="categories-tabs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cat-tab ${selectedCategory === cat ? 'active' : ''}`}
                    data-cursor="hover"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="search-box glassmorphism">
                <Search size={16} color="var(--text-secondary)" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="articles-grid">
                {filteredArticles.map((article) => (
                  <article key={article.id} className="article-card glassmorphism" data-cursor="hover">
                    <div className="article-top">
                      <span className="article-cat">{article.category}</span>
                      <div className="article-meta">
                        <span className="meta-item">
                          <Calendar size={12} style={{ marginRight: '4px' }} />
                          {article.date}
                        </span>
                        <span className="meta-item">
                          <Clock size={12} style={{ marginRight: '4px' }} />
                          {article.readTime} read
                        </span>
                      </div>
                    </div>
                    
                    <div className="article-main">
                      <h3 className="article-title">{article.title}</h3>
                      <p className="article-excerpt">{article.excerpt}</p>
                    </div>

                    <div className="article-bottom">
                      <Link href={`/blog/${article.id}`} className="read-more-btn">
                        <span>Read Article</span>
                        <ArrowRight size={14} className="arrow" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state glassmorphism">
                <BookOpen size={40} color="var(--text-secondary)" style={{ opacity: 0.3, marginBottom: '20px' }} />
                <h3>No articles found</h3>
                <p>Try adjusting your search query or selecting a different category.</p>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .blog-section {
          background-color: var(--bg-primary);
        }

        .filter-search-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          margin-bottom: 60px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 30px;
        }

        .categories-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cat-tab {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          background: rgba(15,15,17,0.3);
          padding: 8px 18px;
          border-radius: 4px;
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s, background-color 0.3s;
        }

        .cat-tab:hover,
        .cat-tab.active {
          border-color: var(--accent);
          color: var(--text-primary);
          background-color: rgba(0, 229, 255, 0.02);
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          border-radius: 6px;
          width: 300px;
        }

        .search-input {
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          width: 100%;
        }

        .search-input::placeholder {
          color: var(--text-secondary);
          opacity: 0.6;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .article-card {
          border-radius: 8px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 380px;
          transition: border-color 0.4s, background-color 0.4s, transform 0.3s;
        }

        .article-card:hover {
          border-color: var(--accent);
          background: rgba(0, 229, 255, 0.02);
          transform: translateY(-8px);
        }

        .article-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 25px;
        }

        .article-cat {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .article-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }

        .meta-item {
          display: flex;
          align-items: center;
        }

        .article-title {
          font-size: 1.45rem;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 15px;
          font-weight: 700;
        }

        .article-excerpt {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 0px;
        }

        .article-bottom {
          border-top: 1px solid var(--border-subtle);
          padding-top: 20px;
          margin-top: auto;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          text-transform: uppercase;
          transition: color 0.3s;
        }

        .read-more-btn:hover {
          color: var(--accent);
        }

        .read-more-btn .arrow {
          transition: transform 0.3s;
        }

        .read-more-btn:hover .arrow {
          transform: translateX(4px);
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px;
          border-radius: 8px;
          text-align: center;
          max-width: 500px;
          margin: 40px auto;
        }

        .empty-state h3 {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }

        .empty-state p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1199px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 991px) {
          .filter-search-row {
            flex-direction: column;
            align-items: stretch;
            gap: 20px;
          }
          .search-box {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
          .article-card {
            height: auto;
            min-height: 280px;
            padding: 30px;
          }
          .article-excerpt {
            margin-bottom: 25px;
          }
        }
      `}</style>
    </>
  );
}
