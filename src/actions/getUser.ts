/*import { saveUser } from '../integrations/users';

const username = process.argv[2];
if (!username) {
    console.error('Please provide a GitHub username.');
    process.exit(1);
}

saveUser(username).then(() => {
    console.log(`User ${username} saved successfully.`);
}).catch(error => {
    console.error('Error saving user:', error);
});
*/
console.error('Unknown command');