export const clearUserFromLocalStorage = (setUser) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    setUser({ logged: false });
};