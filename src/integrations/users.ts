import db from '../db';
import { getUserInfo, getUserRepos } from './githubApi';

export const saveUser = async (username: string) => {
    const userInfo = await getUserInfo(username);
    const repos = await getUserRepos(username);

    const user = await db.oneOrNone(
        'INSERT INTO users (username, name, location) VALUES ($1, $2, $3) RETURNING id',
        [userInfo.login, userInfo.name, userInfo.location]
    );

    if (user) {
        const languages = new Set<string>();
        repos.forEach((repo: any) => {
            if (repo.language) languages.add(repo.language);
        });

        languages.forEach(async (language: string) => {
            let lang = await db.oneOrNone('SELECT id FROM languages WHERE name = $1', [language]);
            if (!lang) {
            lang = await db.one('INSERT INTO languages (name) VALUES ($1) RETURNING id', [language]);
            }

            await db.none(
                'INSERT INTO user_languages (user_id, language_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
                [user.id, lang.id]
            );
        });
    }
};