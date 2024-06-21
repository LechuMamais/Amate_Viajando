import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllDestinationsContext } from "./AllDestinationsProvider";
import { toursToRenderArrayConstructor } from "../utils/toursToRenderArrayConstructor";

export const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
  const { allDestinations, loading, reloadDestinations } = useContext(AllDestinationsContext);
  const { destination_id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (destination_id) {
      const actualDestination = allDestinations.find(destination => destination._id===destination_id);
      if(actualDestination==undefined) {reloadDestinations()}else{
        const toursToRender = toursToRenderArrayConstructor(actualDestination);
        setDestination({...actualDestination, tours: toursToRender });
      }
    }
  }, [destination_id, allDestinations]);

  return (
    <DestinationContext.Provider value={{ destination, loading }}>
      {children}
    </DestinationContext.Provider>
  );
};
