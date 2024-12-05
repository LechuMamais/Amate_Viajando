import { IMAGES_URL } from '../../resources/api.endpoints';
import { customFetch, customFileFetch } from './customFetch';

export const getImages = async () => {
  return await customFetch({ url: IMAGES_URL });
};

export const getImageById = async (id) => {
  return await customFetch({ url: `${IMAGES_URL}/${id}` });
};

export const createImage = async (imageData, token) => {
  return await customFileFetch({ url: IMAGES_URL, method: 'POST', token: token, bodyContent: imageData, stringifyBody: false });
};

export const updateImage = async (id, imageData, token) => {
  return await customFileFetch({ url: `${IMAGES_URL}/${id}`, method: 'PUT', token: token, bodyContent: imageData, stringifyBody: false });

};

export const deleteImage = async (id, token) => {
  return await customFetch({ url: `${IMAGES_URL}/${id}`, method: 'DELETE', token: token });
};