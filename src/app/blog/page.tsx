import { sql } from '@/lib/db';
import BlogClient, { Article } from './BlogClient';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  // Query blog posts from Neon database
  const rows = await sql`
    SELECT id, title, slug, excerpt, category, publishedat, createdat 
    FROM "blogPost" 
    ORDER BY publishedat DESC, createdat DESC
  `;

  // Map rows to article props
  const initialArticles: Article[] = rows.map((row: any) => {
    const pubDate = row.publishedat || row.createdat;
    const dateStr = pubDate 
      ? new Date(pubDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      : 'Nov 2024';

    // Compute simple read time based on title/excerpt word count
    const words = ((row.title || '') + ' ' + (row.excerpt || '')).split(/\s+/).length;
    const readMinutes = Math.max(3, Math.round(words / 15)); // At least 3 mins, scale nicely
    
    return {
      id: row.id,
      category: row.category,
      date: dateStr,
      title: row.title,
      excerpt: row.excerpt,
      readTime: `${readMinutes} min`
    };
  });

  return <BlogClient initialArticles={initialArticles} />;
}
