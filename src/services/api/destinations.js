import { DESTINATIONS_URL } from '../../resources/api.endpoints';
import { customFetch } from './customFetch';

export const getDestinations = async () => {
  return await customFetch({ url: DESTINATIONS_URL });
};

export const getDestinationById = async (id) => {
  return await customFetch({ url: `${DESTINATIONS_URL}/${id}` });
};

export const createDestination = async (destination, token) => {
  return await customFetch({ url: DESTINATIONS_URL, method: 'POST', token: token, bodyContent: destination });
};

export const updateDestination = async (id, destination, token) => {
  return await customFetch({ url: DESTINATIONS_URL, method: 'PUT', token: token, bodyContent: destination });
};

export const deleteImageFromDestination = async (image_id, destination_id, token) => {
  return await customFetch({ url: `${DESTINATIONS_URL}/${destination_id}/deleteImage/${image_id}`, method: 'PUT', token: token });
};

export const deleteDestination = async (id, token) => {
  return await customFetch({ url: `${DESTINATIONS_URL}/${id}`, method: 'DELETE', token: token });
};