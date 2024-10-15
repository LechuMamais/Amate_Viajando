import { TOURS_URL } from '../../resources/api.endpoints';
import { customFetch } from './customFetch';

export const getTours = async () => {
  return await customFetch({ url: TOURS_URL });
};

export const getTourById = async (id) => {
  return await customFetch({ url: `${TOURS_URL}/${id}` });
};

export const createTour = async (tour, token) => {
  return await customFetch({ url: TOURS_URL, method: 'POST', token: token, bodyContent: tour });
};

export const updateTour = async (id, tour, token) => {
  return await customFetch({ url: `${TOURS_URL}/${id}`, method: 'PUT', token: token, bodyContent: tour });
};

export const deleteImageFromTour = async (image_id, tour_id, token) => {
  return await customFetch({ url: `${TOURS_URL}/${tour_id}/deleteImage/${image_id}`, method: 'PUT', token: token });
};

export const deleteTour = async (id, token) => {
  return await customFetch({ url: `${TOURS_URL}/${id}`, method: 'DELETE', token: token });
};