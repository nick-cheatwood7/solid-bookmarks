import 'dotenv/config';
import { z } from 'zod';

const config = {
    DATABASE_URL: process.env.DATABASE_URL
}

const envSchema = z.object({
    DATABASE_URL: z.string(),
})

// 👇 environment variables are now type-safe
export const env = envSchema.parse(config)