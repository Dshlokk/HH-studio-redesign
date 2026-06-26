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
