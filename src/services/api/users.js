import {
    USERS_URL,
    REGISTER_URL,
    LOGIN_URL,
    CHECK_LOGGED_URL,
    ADD_TOUR_TO_CART_URL,
    ADD_TOUR_TO_FAVORITES_URL
} from "../../resources/api.endpoints";
import { handleError } from "../../utils/handleError";
import { handleResponse } from "../../utils/handleResponse";


export const getUsers = async () => {
    try {
        const response = await fetch(USERS_URL);
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const getUserById = async (id) => {
    try {
        const response = await fetch(`${USERS_URL}/${id}`);
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch(REGISTER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error en el registro');
        }
        return response.json();
    } catch (error) {
        console.log(error.message)
        return error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                "Origin": "*"
            },
            body: JSON.stringify({ email, password })
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const checkLogged = async (id, token) => {
    try {
        const response = await fetch(`${CHECK_LOGGED_URL}/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await handleResponse(response);
    } catch (error) {
        return { authorized: false, error };
    }
};

export const updateUser = async (id, userData, token) => {
    try {
        const response = await fetch(`${USERS_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const deleteUser = async (id, token) => {
    try {
        const response = await fetch(`${USERS_URL}/${id}`, {
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


/******************************************************************************************************************* */

export const addTourToFavorites = async (userId, token, tourId) => {
    console.log('user id',userId);
    console.log('tour id',tourId);
    console.log('token',token);
    try {
      const response = await fetch(`${ADD_TOUR_TO_FAVORITES_URL}/${userId}/${tourId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      console.log('response', response);
      if (!response.ok) {
        throw new Error('Error al agregar el tour a favoritos');
      }
  
      const userUpdated = await response.json();
      console.log(userUpdated)
      return userUpdated;
    } catch (error) {
        handleError(error);
    }
  };
  

export const addTourToCart = async (userId, token, tourId) => {
    try {
        const response = await fetch(`${ADD_TOUR_TO_CART_URL}/${userId}/${tourId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error('Error al agregar el tour al carrito');
        }

        const userUpdated = await response.json();
        return userUpdated;
    } catch (error) {
        handleError(error);
    }
};
