import { ARTICLES_URL } from '../../resources/api.endpoints';
import { customFetch } from './customFetch';

export const getArticles = (language) => customFetch({ url: `${ARTICLES_URL}/lang/${language}` });

export const getArticleById = (language, id) => customFetch({ url: `${ARTICLES_URL}/lang/${language}/id/${id}` });

export const createArticle = (data, token) => customFetch({ url: ARTICLES_URL, method: 'POST', bodyContent: data, token });

export const updateArticle = (id, data, token) => customFetch({ url: `${ARTICLES_URL}/${id}`, method: 'PUT', bodyContent: data, token });

export const deleteImageFromArticle = async (image_id, article_id, token) => customFetch({ url: `${ARTICLES_URL}/${article_id}/deleteImage/${image_id}`, method: 'PUT', token: token });

export const deleteArticle = (id, token) => customFetch({ url: `${ARTICLES_URL}/${id}`, method: 'DELETE', token });
