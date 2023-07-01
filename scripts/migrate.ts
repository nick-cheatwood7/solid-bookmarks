import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db } from '../src/lib/db';

async function main() {
    console.log(`>> Running db migrations...`);
    await migrate(db, {
        migrationsFolder: './migrations'
    })
    console.log(`<< DB migrations executed successfully!`);
}



main();