import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '../env';
 
const dbUrl = env.DATABASE_URL ?? '';
 
const client = postgres(dbUrl);
export const db = drizzle(client);