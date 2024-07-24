CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  location VARCHAR(255),
  languages TEXT[]
);

CREATE UNIQUE INDEX idx_users_username ON users(username);