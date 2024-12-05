import { ARTICLES_URL } from '../../resources/api.endpoints';
import { customFetch } from './customFetch';

export const getArticles = () => customFetch({ url: ARTICLES_URL, method: 'GET' });

export const getArticleById = (id) => customFetch({ url: `${ARTICLES_URL}/${id}`, method: 'GET' });

export const createArticle = (data, token) => customFetch({ url: ARTICLES_URL, method: 'POST', bodyContent: data, token });

export const updateArticle = (id, data, token) =>
    customFetch({ url: `${ARTICLES_URL}/${id}`, method: 'PUT', bodyContent: data, token });

export const deleteArticle = (id, token) =>
    customFetch({ url: `${ARTICLES_URL}/${id}`, method: 'DELETE', token });
