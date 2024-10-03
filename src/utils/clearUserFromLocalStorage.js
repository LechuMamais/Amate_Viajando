export const clearUserFromLocalStorage = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.setItem('AmateViajandoLogged', 'false');
};