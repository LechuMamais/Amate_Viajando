export const clearUserFromLocalStorage = (setUser) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.setItem("AmateViajandoLogged", "false");
};