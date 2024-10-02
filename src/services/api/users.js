import {
    USERS_URL,
    REGISTER_URL,
    LOGIN_URL,
    CHECK_LOGGED_URL,
    ADD_TOUR_TO_CART_URL,
    ADD_TOUR_TO_FAVORITES_URL,
    VERIFY_EMAIL_URL,
    GENERATE_SEND_NEW_EMAIL_VERIFICATION_TOKEN_URL,
    RESET_PASSWORD,
    REMOVE_TOUR_FROM_FAVORITES_URL
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
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error en el registro");
        }
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const verifyUserEmail = async (verificationData) => {
    try {
        const response = await fetch(`${VERIFY_EMAIL_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(verificationData)
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const generateNewEmailVerificationToken = async (email) => {
    try {
        const response = await fetch(`${GENERATE_SEND_NEW_EMAIL_VERIFICATION_TOKEN_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const resetPassword = async (formData) => {
    console.log("Payload recibido en resetPassword:", formData);
    try {
        const response = await fetch(`${RESET_PASSWORD}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        console.log("Respuesta del servidor:", response);
        return await handleResponse(response);
    } catch (error) {
        console.log("Error en la solicitud:", error);
        handleError(error);
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(LOGIN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
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
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
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
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
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
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};


/******************************************************************************************************************* */

export const addTourToFavorites = async (userId, token, tourId, destinationId) => {
    try {
        const response = await fetch(`${ADD_TOUR_TO_FAVORITES_URL}/${userId}/${tourId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                destination_id: destinationId,
            }),
        });

        if (!response.ok) {
            throw new Error("Error al agregar el tour a favoritos");
        }

        const userUpdated = await response.json();
        return userUpdated;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export const removeTourFromFavorites = async (userId, token, tourId, destinationId) => {
    try {
        const response = await fetch(`${REMOVE_TOUR_FROM_FAVORITES_URL}/${userId}/${tourId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                destination_id: destinationId,
            }),
        });

        if (!response.ok) {
            throw new Error("Error al agregar el tour a favoritos");
        }

        const userUpdated = await response.json();
        return userUpdated;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};



export const addTourToCart = async (userId, token, tourId) => {
    try {
        const response = await fetch(`${ADD_TOUR_TO_CART_URL}/${userId}/${tourId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error("Error al agregar el tour al carrito");
        }

        const userUpdated = await response.json();
        return userUpdated;
    } catch (error) {
        handleError(error);
    }
};
