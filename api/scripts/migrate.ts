// scripts/migrate.ts
import * as fs from 'fs';
import * as path from 'path';
import pgPromise from 'pg-promise';

const db = pgPromise()('postgres://username:password@localhost:5432/githubdb');

const runMigrations = async () => {
  const migrationPath = path.join(__dirname, '..', 'migrations');
  const files = fs.readdirSync(migrationPath);

  for (const file of files) {
    const filePath = path.join(migrationPath, file);
    const sql = fs.readFileSync(filePath, 'utf-8');
    await db.none(sql);
    console.log(`Executed ${file}`);
  }
  console.log('Migrations completed');
};

runMigrations().catch(err => {
  console.error(err);
  process.exit(1);
});
