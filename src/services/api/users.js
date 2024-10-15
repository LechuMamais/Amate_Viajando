import {
    USERS_URL,
    REGISTER_URL,
    LOGIN_URL,
    CHECK_LOGGED_URL,
    ADD_TOUR_TO_FAVORITES_URL,
    VERIFY_EMAIL_URL,
    GENERATE_SEND_NEW_EMAIL_VERIFICATION_TOKEN_URL,
    RESET_PASSWORD,
    REMOVE_TOUR_FROM_FAVORITES_URL
} from '../../resources/api.endpoints';
import { customFetch } from './customFetch';

export const getUsers = async () => {
    return await customFetch({ url: USERS_URL });
};

export const getUserById = async (id) => {
    return await customFetch({ url: `${USERS_URL}/${id}` });
};

export const registerUser = async (userData) => {
    return await customFetch({ url: REGISTER_URL, method: 'POST', bodyContent: userData });
};

export const verifyUserEmail = async (verificationData) => {
    return await customFetch({ url: VERIFY_EMAIL_URL, method: 'POST', bodyContent: verificationData });
};

export const generateNewEmailVerificationToken = async (email) => {
    return await customFetch({ url: GENERATE_SEND_NEW_EMAIL_VERIFICATION_TOKEN_URL, method: 'POST', bodyContent: email });
};

export const resetPassword = async (formData) => {
    return await customFetch({ url: RESET_PASSWORD, method: 'POST', bodyContent: formData });
};

export const loginUser = async (email, password) => {
    return await customFetch({ url: LOGIN_URL, method: 'POST', bodyContent: { email, password } });
};

export const checkLogged = async (id, token) => {
    return await customFetch({ url: `${CHECK_LOGGED_URL}/${id}`, token: token });
};

export const updateUser = async (id, userData, token) => {
    return await customFetch({ url: `${USERS_URL}/${id}`, method: 'PUT', token: token, bodyContent: userData });
};

export const deleteUser = async (id, token) => {
    return await customFetch({ url: `${USERS_URL}/${id}`, method: 'DELETE', token: token });
};


/******************************************************************************************************************* */

export const addTourToFavorites = async (userId, token, tourId, destinationId) => {
    try {
        const response = await fetch(`${ADD_TOUR_TO_FAVORITES_URL}/${userId}/${tourId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                destination_id: destinationId,
            }),
        });

        if (!response.ok) {
            throw new Error('Error al agregar el tour a favoritos');
        }

        const userUpdated = await response.json();
        return userUpdated;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const removeTourFromFavorites = async (userId, token, tourId, destinationId) => {
    try {
        const response = await fetch(`${REMOVE_TOUR_FROM_FAVORITES_URL}/${userId}/${tourId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                destination_id: destinationId,
            }),
        });

        if (!response.ok) {
            throw new Error('Error al agregar el tour a favoritos');
        }

        const userUpdated = await response.json();
        return userUpdated;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};