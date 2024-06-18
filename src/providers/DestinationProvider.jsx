import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../services/api/destinations";
import { toursToRenderArrayConstructor } from "../utils/toursToRenderArrayConstructor";

export const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
  const { destination_id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinationById = async () => {
      try {
        setLoading(true);
        const data = await getDestinationById(destination_id);
        const toursToRender = toursToRenderArrayConstructor(data);
        setDestination({...data, tours: toursToRender });
      } catch (error) {
        console.error("Error fetching destination:", error);
      } finally {
        setLoading(false);
      }
    };

    if (destination_id) {
      fetchDestinationById();
    }

  }, [destination_id]);

  return (
    <DestinationContext.Provider value={{ destination, loading }}>
      {children}
    </DestinationContext.Provider>
  );
};
