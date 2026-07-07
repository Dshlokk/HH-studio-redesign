import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn('Warning: DATABASE_URL environment variable is missing. Database queries will fall back.');
}

export const sql = databaseUrl ? neon(databaseUrl) : (async () => []) as any;
