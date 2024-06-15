import React, { createContext, useEffect, useState } from "react";
import { checkLogged } from "../services/api/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUserFromLocalStorage = async () => {
      const tokenLocal = localStorage.getItem("accessToken");
      const userIdLocal = localStorage.getItem("userId");
      // Contrastamos los datos de localStorage con la BBDD
      const userLogged = await checkLogged(userIdLocal, tokenLocal);
      if (userLogged.authorized == false) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
        setUser({ logged: false });
      } else {
        setUser({ ...userLogged, logged: true, token: tokenLocal });
      }
    };

    getUserFromLocalStorage();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
