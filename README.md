# Lovely API 
Repository  - api  for command line of database 



Esta aplicação de linha de comando permite obter informações de usuários do GitHub e armazená-las em um banco de dados PostgreSQL.

## Setup

npm install

## Database settings

Configure the  PostgreSQL and  run  migration:

npx ts-node src/db/index.ts

## Uso

### Obter informações de um usuário

npx ts-node src/index.ts getUserInfo <username>

### Listar todos os usuários

npx  ts-node src/index.ts listUsers

### Listar usuários por localização

npx ts-node src/index.ts listUsersByLocation <location>

### Listar usuários por linguagem de programação

npx ts-node src/index.ts listUsersByLanguage <language>
