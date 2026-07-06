'use server';

import { sql } from '@/lib/db';
import crypto from 'crypto';

interface LeadInput {
  name: string;
  company: string;
  email: string;
  message: string;
  scopes: string[];
}

export async function submitLead(input: LeadInput) {
  try {
    const id = crypto.randomUUID();
    const now = new Date();
    
    // Format scope checkboxes as a single projecttype string
    const projecttype = input.scopes.join(', ') || 'General Inquiry';
    
    // Store company name inside notes since there is no native company column
    const notes = input.company ? `Company: ${input.company}` : '';
    const status = 'new';

    console.log("Saving lead to Neon:", { id, name: input.name, email: input.email });

    await sql`
      INSERT INTO "leads" (
        id, name, email, message, createdat, updatedat, status, projecttype, notes
      ) VALUES (
        ${id}, ${input.name}, ${input.email}, ${input.message}, ${now}, ${now}, ${status}, ${projecttype}, ${notes}
      )
    `;

    return { success: true };
  } catch (err) {
    console.error('Database submission failed:', err);
    return { success: false, error: 'Database transaction failed' };
  }
}

interface DbPortfolioRow {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[] | null;
  featured: boolean | null;
  link: string | null;
  createdat: Date | string;
}

export async function getTeaserProjects() {
  try {
    const rows = await sql`
      SELECT id, title, description, category, tags, featured, link, createdat
      FROM "portfolio"
      ORDER BY createdat DESC
      LIMIT 3
    `;
    
    if (!rows || rows.length === 0) {
      return [];
    }

    return rows.map((rowRaw: unknown, index: number) => {
      const row = rowRaw as DbPortfolioRow;
      let services = 'Branding & Growth';
      let outcome = 'Launch ready';
      let description = row.description || '';

      if (row.description && row.description.trim().startsWith('{')) {
        try {
          const parsed = JSON.parse(row.description);
          description = parsed.overview || parsed.description || row.description;
          if (parsed.services) services = parsed.services;
          if (parsed.outcome) outcome = parsed.outcome;
        } catch {
          // catch block without unused variable
        }
      } else if (Array.isArray(row.tags)) {
        // Fallback to tags for services (filtering out hex colors)
        const cleanTags = row.tags.filter((t: string) => !t.startsWith('#'));
        if (cleanTags.length > 0) {
          services = cleanTags.join(' · ');
        }
      }

      return {
        id: row.id,
        title: row.title,
        category: row.category,
        num: String(index + 1).padStart(2, '0'),
        description: description,
        services: services,
        outcome: outcome
      };
    });
  } catch (error) {
    console.error('Error fetching teaser projects:', error);
    return null;
  }
}

