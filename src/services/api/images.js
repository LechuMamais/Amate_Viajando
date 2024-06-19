import { IMAGES_URL } from "../../resources/api.endpoints";
import { handleError } from "../../utils/handleError";
import { handleResponse } from "../../utils/handleResponse";

export const getImages = async () => {
    try {
      const response = await fetch(IMAGES_URL);
      return await handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  };
  
  export const getImageById = async (id) => {
    try {
      const response = await fetch(`${IMAGES_URL}/${id}`);
      return await handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  };
  
  export const createImage = async (imageData, token) => {
    try {
      const response = await fetch(IMAGES_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: imageData // Enviar FormData directamente como body
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json(); // Asegurarse de parsear la respuesta correctamente
    } catch (error) {
      console.error('Error:', error);
      throw error; // Asegurarse de que el error se propague a la función que llama
    }
  };
  
  export const updateImage = async (id, imageData, token) => {
    try {
      const response = await fetch(`${IMAGES_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: imageData
      });
      return await handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  };
  
  export const deleteImage = async (id, token) => {
    try {
      const response = await fetch(`${IMAGES_URL}/${id}`, {
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