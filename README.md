# Lovely API 
Repository  - api  for command line of database 

This application of command  line is used to get users information GitHub and insert in PostgreSQL database

## Setup
cd api/
npm install

## Database settings

Configure the  PostgreSQL and  run  migration:

npx ts-node scripts/migrate.ts

## Use

### Add user

npx ts-node src/index.ts --add <username>

### Get information all Users

npx ts-node src/index.ts --list

### Get information User for location

npx ts-node src/index.ts --location <location>
