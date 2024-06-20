import React, { createContext, useEffect, useState } from "react";
import { getDestinations } from "../services/api/destinations";

export const AllDestinationsContext = createContext();

export const AllDestinationsProvider = ({ children }) => {
  const [allDestinations, setAllDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllDestinations = async () => {
    try {
      setLoading(true);
      const data = await getDestinations();
      setAllDestinations(data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllDestinations();
}, []);

  return (
    <AllDestinationsContext.Provider value={{ allDestinations, loading, reloadDestinations: fetchAllDestinations }}>
      {children}
    </AllDestinationsContext.Provider>
  );
};
