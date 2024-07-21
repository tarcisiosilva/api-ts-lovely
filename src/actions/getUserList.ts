import db from '../db';

    db.manyOrNone('SELECT * FROM users').then(users => {
    users.forEach(user => {
        console.log(`Username: ${user.username}, Name: ${user.name}, Location: ${user.location}`);
    });
    }).catch(error => {
    console.error('Error fetching users:', error);
    });


