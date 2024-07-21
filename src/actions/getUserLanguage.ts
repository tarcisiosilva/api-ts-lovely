import db from '../db';

const language = process.argv[2];
if (!language) {
  console.error('Please provide a programming language.');
  process.exit(1);
}

db.manyOrNone(`
  SELECT u.username, u.name, u.location FROM users u
  JOIN user_languages ul ON u.id = ul.user_id
  JOIN languages l ON ul.language_id = l.id
  WHERE l.name = $1`, [language]).then(users => {
  users.forEach(user => {
    console.log(`Username: ${user.username}, Name: ${user.name}, Location: ${user.location}`);
  });
}).catch(error => {
  console.error('Error fetching users by language:', error);
});