import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PortfolioStack from '@/components/PortfolioStack';
import Footer from '@/components/Footer';
import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Work | HH Studio Design Archive',
  description: 'Explore the design archive of HH Studio. A premium portfolio of volumetric spatial operating systems, interactive configurators, and brand identity systems.',
};

interface DbPortfolioRow {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageurl: string | null;
  category: string;
  tags: string[] | null;
  featured: boolean | null;
  link: string | null;
  createdat: Date | string;
  updatedat: Date | string;
}

export default async function WorkPage() {
  // Query all portfolios from the database
  const rows = await sql`
    SELECT id, title, slug, description, imageurl, category, tags, featured, link, createdat, updatedat
    FROM "portfolio"
    ORDER BY createdat DESC
  `;

  // Map to the Project type used by PortfolioStack
  const initialProjects = rows.map((rowRaw: unknown) => {
    const row = rowRaw as DbPortfolioRow;
    const yearStr = row.createdat 
      ? new Date(row.createdat).getFullYear().toString() 
      : '2026';

    const tabLabelStr = `${row.title.toUpperCase()} // ${row.category.toUpperCase().substring(0, 2)}-${row.id.substring(0, 2).toUpperCase()}`;

    // Parse description if it's JSON to populate the different sections.
    // If it's a simple string, put it under overview and default other sections.
    let parsedDesc = {
      overview: row.description || '',
      challenge: 'Not provided.',
      research: 'Not provided.',
      strategy: 'Not provided.',
      execution: 'Not provided.',
      results: 'Not provided.'
    };

    if (row.description && row.description.trim().startsWith('{')) {
      try {
        const parsed = JSON.parse(row.description);
        parsedDesc = { ...parsedDesc, ...parsed };
      } catch (err) {
        console.error('Failed to parse portfolio description JSON for:', row.id, err);
      }
    }

    // Parse imageurl into galleryImages array (supporting JSON arrays or comma separated lists)
    let galleryImages: string[] = [];
    if (row.imageurl) {
      const trimmed = row.imageurl.trim();
      if (trimmed.startsWith('[')) {
        try {
          galleryImages = JSON.parse(trimmed);
        } catch {
          // catch block without unused variable
        }
      } else {
        galleryImages = trimmed.split(',').map((img: string) => img.trim()).filter(Boolean);
      }
    }

    // Default procedural SVG color (from tags or default blue/accent)
    const colorTag = Array.isArray(row.tags) 
      ? row.tags.find((t: string) => t.startsWith('#'))
      : null;
    const projectColor = colorTag || '#00e5ff';

    if (galleryImages.length === 0) {
      galleryImages = [
        `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%230f0f11"/><rect x="100" y="50" width="600" height="350" stroke="${encodeURIComponent(projectColor)}" stroke-width="0.5" fill="none" opacity="0.4"/><circle cx="400" cy="225" r="100" stroke="${encodeURIComponent(projectColor)}" stroke-width="0.5" fill="none" stroke-dasharray="5 5"/><line x1="400" y1="50" x2="400" y2="400" stroke="${encodeURIComponent(projectColor)}" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.3"/><line x1="100" y1="225" x2="700" y2="225" stroke="${encodeURIComponent(projectColor)}" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.3"/><text x="410" y="240" fill="${encodeURIComponent(projectColor)}" font-family="monospace" font-size="10" letter-spacing="1">${row.title.toUpperCase()}.RADIAL.MESH</text></svg>`
      ];
    }

    return {
      id: row.id,
      title: row.title,
      category: row.category,
      year: yearStr,
      tabLabel: tabLabelStr,
      color: projectColor,
      overview: parsedDesc.overview,
      challenge: parsedDesc.challenge,
      research: parsedDesc.research,
      strategy: parsedDesc.strategy,
      execution: parsedDesc.execution,
      results: parsedDesc.results,
      galleryImages: galleryImages
    };
  });

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
        <PortfolioStack initialProjects={initialProjects} />
      </div>
      <Footer />
    </>
  );
}
