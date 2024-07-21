import db from '../db';

const location = process.argv[2];
if (!location) {
  console.error('Please provide a location.');
  process.exit(1);
}

db.manyOrNone('SELECT * FROM users WHERE location = $1', [location])
  .then(users => {
    users.forEach(user => {
      console.log(`Username: ${user.username}, Name: ${user.name}, Location: ${user.location}`);
    });
  }).catch(error => {
    console.error('Error fetching users by location:', error);
  });