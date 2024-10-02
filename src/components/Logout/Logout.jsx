import { useEffect } from "react";
import { clearUserFromLocalStorage } from "../../utils/clearUserFromLocalStorage";

const Logout = () => {
  useEffect(() => {
    clearUserFromLocalStorage();
    window.location.href = "/";
  });
  return;
};

export default Logout;
