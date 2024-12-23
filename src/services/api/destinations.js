import { DESTINATIONS_URL } from '../../resources/api.endpoints';
import { customFetch } from './customFetch';

export const getDestinations = async (language) => {
  return await customFetch({ url: `${DESTINATIONS_URL}/${language}` });
};

export const getDestinationById = async (id, language) => {
  return await customFetch({ url: `${DESTINATIONS_URL}/${id}/${language}` });
};

export const createDestination = async (destination, token) => {
  return await customFetch({ url: DESTINATIONS_URL, method: 'POST', token: token, bodyContent: destination });
};

export const updateDestination = async (id, destination, token) => {
  return await customFetch({ url: `${DESTINATIONS_URL}/${id}`, method: 'PUT', token: token, bodyContent: destination });
};

export const deleteImageFromDestination = async (image_id, destination_id, token) => {
  return await customFetch({ url: `${DESTINATIONS_URL}/${destination_id}/deleteImage/${image_id}`, method: 'PUT', token: token });
};

export const deleteDestination = async (id, token) => {
  return await customFetch({ url: `${DESTINATIONS_URL}/${id}`, method: 'DELETE', token: token });
};