import { createContext, useEffect, useState } from 'react';
import { checkLogged } from '../services/api/users';
import { clearUserFromLocalStorage } from '../utils/clearUserFromLocalStorage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const setLoggedInLocalStorage = () => {
    localStorage.setItem('AmateViajandoLogged', 'true');
  };

  const setLogOutInLocalStorage = () => {
    localStorage.setItem('AmateViajandoLogged', 'false');
  };

  const getUserFromLocalStorage = async () => {
    const tokenLocal = localStorage.getItem('accessToken');
    const userIdLocal = localStorage.getItem('userId');
    if (!tokenLocal || !userIdLocal) {
      clearUserFromLocalStorage(setUser);
      setUser({ logged: false });
      setLogOutInLocalStorage();
      setLoading(false);
      return;
    }
    const userLogged = await checkLogged(userIdLocal, tokenLocal);
    if (userLogged.authorized === false) {
      clearUserFromLocalStorage(setUser);
      setUser({ logged: false });
      setLogOutInLocalStorage();
    } else {
      setUser({ ...userLogged, logged: true, token: tokenLocal });
      setLoggedInLocalStorage();
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserFromLocalStorage();
  }, [user.logged]);

  return <UserContext.Provider value={{ user, setUser, loading }}>{children}</UserContext.Provider>;
};
