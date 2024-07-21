CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  location VARCHAR(255)
);

CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE user_languages (
  user_id INT REFERENCES users(id),
  language_id INT REFERENCES languages(id),
  PRIMARY KEY (user_id, language_id)
);