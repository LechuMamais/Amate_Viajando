import { DESTINATIONS_URL } from '../../resources/api.endpoints';
import { handleError } from '../../utils/handleError';
import { handleResponse } from '../../utils/handleResponse';

export const getDestinations = async () => {
  try {
    const response = await fetch(DESTINATIONS_URL);
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const getDestinationById = async (id) => {
  try {
    const response = await fetch(`${DESTINATIONS_URL}/${id}`);
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const createDestination = async (destination, token) => {
  try {
    const response = await fetch(DESTINATIONS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(destination)
    });
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const updateDestination = async (id, destination, token) => {
  try {
    const response = await fetch(`${DESTINATIONS_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(destination)
    });
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const deleteImageFromDestination = async (image_id, destination_id, token) => {
  try {
    const response = await fetch(`${DESTINATIONS_URL}/${destination_id}/deleteImage/${image_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const deleteDestination = async (id, token) => {
  try {
    const response = await fetch(`${DESTINATIONS_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return await handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};