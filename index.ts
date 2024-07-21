const command = process.argv[2];

switch (command) {
  case 'getUserInfo':
    require('./actions/getUser');
    break;
  case 'listUsers':
    require('./actions/getUserList');
    break;
  case 'listUsersByLocation':
    require('./actions/getUserLocation');
    break;
  case 'listUsersByLanguage':
    require('./actions/lgetUserListLanguage');
    break;
  default:
    console.error('Unknown command');
    process.exit(1);
}