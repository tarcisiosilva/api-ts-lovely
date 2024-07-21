import * as pgPromise from 'pg-promise';
import * as fs from 'fs';
import * as path from 'path';


const pgp = pgPromise();
const db = pgp('postgres://username:root@localhost:5432');

const migrationsPath = path.join(__dirname, 'migrations');

fs.readdirSync(migrationsPath).forEach(file => {
  const sql = fs.readFileSync(path.join(migrationsPath, file), 'utf8');
  db.none(sql).then(() => {
    console.log(`Migration ${file} executed successfully.`);
  }).catch(error => {
    console.error(`Error executing migration ${file}:`, error);
  });
});

export default db;