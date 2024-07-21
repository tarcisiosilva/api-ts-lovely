# Lovely Stay API 
Repository  - api  for command line of database 

This application of command  line is used to get users information GitHub and insert in PostgreSQL database

## Setup

npm install

## Database settings

Configure the  PostgreSQL and  run  migration:

npx ts-node src/db/index.ts

## Use

### Get information of User 

npx ts-node src/index.ts getUserInfo <username>

### Get information all Users

npx  ts-node src/index.ts listUsers

### Get information User for location

npx ts-node src/index.ts listUsersByLocation <location>

### Get information  User for Language

npx ts-node src/index.ts listUsersByLanguage <language>
