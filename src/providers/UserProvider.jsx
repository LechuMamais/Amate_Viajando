import React, { createContext, useEffect, useState } from "react";
import { checkLogged } from "../services/api/users";
import { clearUserFromLocalStorage } from "../utils/clearUserFromLocalStorage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const getUserFromLocalStorage = async () => {
    const tokenLocal = localStorage.getItem("accessToken");
    const userIdLocal = localStorage.getItem("userId");
    if (!tokenLocal || !userIdLocal) {
      clearUserFromLocalStorage(setUser);
      return;
    }
    const userLogged = await checkLogged(userIdLocal, tokenLocal);
    if (userLogged.authorized == false) {
      clearUserFromLocalStorage(setUser);
    } else {
      setUser({ ...userLogged, logged: true, token: tokenLocal });
    }
  };

  useEffect(() => {
    getUserFromLocalStorage();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
