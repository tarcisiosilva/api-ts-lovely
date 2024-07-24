// src/db.ts
import pgPromise from 'pg-promise';
import { User } from './types';

const db = pgPromise()('postgres://username:password@localhost:5432/githubdb');

export const addUser = async (user: User) => {
  const query = `
    INSERT INTO users (username, name, location, languages)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (username) DO NOTHING;
  `;
  await db.none(query, [
    user.username, user.name, user.location, user.languages
  ]);
};

export const getUsers = async () => {
  return db.any('SELECT * FROM users');
};

export const getUsersByLocation = async (location: string) => {
  return db.any('SELECT * FROM users WHERE location = $1', location);
};
