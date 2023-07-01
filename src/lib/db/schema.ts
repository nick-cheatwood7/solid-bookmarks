
import { pgTable, text, varchar, uuid, timestamp } from "drizzle-orm/pg-core";
 
export const users = pgTable('users', {
  // ids
  id: uuid('id').primaryKey().defaultRandom(),
  // timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  // data
  email: varchar('email', { length: 256 }).notNull(),
  password: text('password').notNull(),
  firstName: varchar('first_name', { length: 256 }),
  lastName: varchar('last_name', { length: 256 }),
});