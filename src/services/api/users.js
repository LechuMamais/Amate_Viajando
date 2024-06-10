import {
    USERS_URL,
    REGISTER_URL,
    LOGIN_URL,
    CHECK_LOGGED_URL
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
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const checkLogged = async (token) => {
    try {
        const response = await fetch(CHECK_LOGGED_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
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