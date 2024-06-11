import React, { createContext, useEffect, useState } from "react";
import { getDestinations } from "../services/api/destinations";

export const AllDestinationsContext = createContext();

export const AllDestinationsProvider = ({ children }) => {
  const [allDestinations, setAllDestinations] = useState([]);

  useEffect(() => {
    const fetchAllDestinations = async () => {
      try {
        //setLoading(true);
        const data = await getDestinations();
        setAllDestinations(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        //setLoading(false);
      }
    };
    fetchAllDestinations();
}, []);

  return (
    <AllDestinationsContext.Provider value={{ allDestinations }}>
      {children}
    </AllDestinationsContext.Provider>
  );
};
