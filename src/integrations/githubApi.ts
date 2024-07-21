import axios from 'axios';

export const getUserInfo = async (username: string) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

export const getUserRepos = async (username: string) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
};