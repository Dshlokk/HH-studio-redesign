import { sql } from '@/lib/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const rows = await sql`SELECT title, excerpt FROM "blogPost" WHERE id = ${id}`;
  if (!rows || rows.length === 0) {
    return {
      title: 'Post Not Found | HH Studio',
    };
  }
  const post = rows[0];
  return {
    title: `${post.title} | HH Studio Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  
  // Fetch post details from Neon
  const rows = await sql`SELECT * FROM "blogPost" WHERE id = ${id}`;
  
  if (!rows || rows.length === 0) {
    notFound();
  }
  
  const post = rows[0];
  const pubDate = post.publishedat || post.createdat;
  const dateStr = pubDate 
    ? new Date(pubDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'November 2024';

  const wordCount = (post.content || '').split(/\s+/).length;
  const readMinutes = Math.max(3, Math.round(wordCount / 200));

  return (
    <>
      <Navbar />
      
      <main style={{ paddingTop: 'calc(var(--header-height) + 40px)', minHeight: '100vh' }}>
        <article style={{ padding: '80px 0' }} className="blog-post-detail">
          <div className="container" style={{ maxWidth: '800px' }}>
            
            {/* Back Button */}
            <div style={{ marginBottom: '40px' }}>
              <Link href="/blog" className="back-link" data-cursor="hover">
                <ArrowLeft size={16} />
                <span>Back to Intelligence</span>
              </Link>
            </div>

            {/* Post Header */}
            <header className="post-header" style={{ marginBottom: '50px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '30px' }}>
              <span className="mono-label" style={{ display: 'inline-block', marginBottom: '15px' }}>
                [{post.category}]
              </span>
              <h1 style={{ fontSize: '3.5rem', lineHeight: '1.15', marginBottom: '25px', color: 'var(--text-primary)' }}>
                {post.title}
              </h1>
              
              <div className="post-metadata">
                <div className="meta-col">
                  <User size={14} />
                  <span>By {post.author}</span>
                </div>
                <div className="meta-col">
                  <Calendar size={14} />
                  <span>{dateStr}</span>
                </div>
                <div className="meta-col">
                  <Clock size={14} />
                  <span>{readMinutes} min read</span>
                </div>
              </div>
            </header>

            {/* Post Content */}
            <section 
              className="post-content-body" 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
