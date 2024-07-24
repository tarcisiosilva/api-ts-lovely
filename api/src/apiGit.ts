// src/github.ts
import axios from 'axios';
import * as R from 'ramda';
import { User } from './types';

export const fetchGitHubUser = async (username: string): Promise<User> => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`);
  const repos = await axios.get(data.repos_url);

  const languages = R.uniq(
    await Promise.all(
      repos.data.map(async (repo: any) => {
        const { data: langData } = await axios.get(repo.languages_url);
        return Object.keys(langData);
      })
    ).flat()
  );

  return {
    username: data.login,
    name: data.name,
    location: data.location,
    languages,
  };
};
