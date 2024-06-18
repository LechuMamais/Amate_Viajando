import { TOURS_URL } from "../../resources/api.endpoints";
import { handleError } from "../../utils/handleError";
import { handleResponse } from "../../utils/handleResponse";

export const getTours = async () => {
    try {
      const response = await fetch(TOURS_URL);
      return await handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  };
  
  export const getTourById = async (id) => {
    try {
      const response = await fetch(`${TOURS_URL}/${id}`);
      return await handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  };
  
  export const createTour = async (tour, token) => {
    try {
      const response = await fetch(TOURS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(tour)
      });
      return await handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  };
  
  export const updateTour = async (id, tour, token) => {
    try {
      const response = await fetch(`${TOURS_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(tour)
      });
      return await handleResponse(response);
    } catch (error) {
      handleError(error);
    }x
  };
  
  export const deleteTour = async (id, token) => {
    try {
      const response = await fetch(`${TOURS_URL}/${id}`, {
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