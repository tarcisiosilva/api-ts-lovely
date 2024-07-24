// src/index.ts
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { fetchGitHubUser } from './apiGit';
import { addUser, getUsers, getUsersByLocation } from './db';

const argv = yargs(hideBin(process.argv)).argv;

const main = async () => {
  if (argv.add) {
    const user = await fetchGitHubUser(argv.add);
    await addUser(user);
    console.log(`User ${argv.add} added to the database.`);
  } else if (argv.list) {
    const users = await getUsers();
    console.log(users);
  } else if (argv.location) {
    const users = await getUsersByLocation(argv.location);
    console.log(users);
  } else {
    console.log('Invalid command');
  }
};

main().catch(err => {
  console.error(err);
});
