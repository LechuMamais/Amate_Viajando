export const BASE_URL = 'https://amate-viajando-backend.vercel.app/api/v1';
//export const BASE_URL = 'http://localhost:3000/api/v1';

export const DESTINATIONS_URL = `${BASE_URL}/destinations`;
export const TOURS_URL = `${BASE_URL}/tours`;
export const IMAGES_URL = `${BASE_URL}/images`;

export const USERS_URL = `${BASE_URL}/users`;
export const REGISTER_URL = `${USERS_URL}/register`;
export const VERIFY_EMAIL_URL = `${USERS_URL}/verify-email`;
export const GENERATE_SEND_NEW_EMAIL_VERIFICATION_TOKEN_URL = `${USERS_URL}/generateNewVerificationToken`;
export const RESET_PASSWORD = `${USERS_URL}/reset-password`;
export const LOGIN_URL = `${USERS_URL}/login`;
export const CHECK_LOGGED_URL = `${USERS_URL}/checkLogged`;

//export const ADD_TOUR_TO_CART_URL = `${USERS_URL}/addTourToCart`;
export const ADD_TOUR_TO_FAVORITES_URL = `${USERS_URL}/addTourToFavorites`;
export const REMOVE_TOUR_FROM_FAVORITES_URL = `${USERS_URL}/removeTourToFavorites`;

export const ARTICLES_URL = `${BASE_URL}/articles`;