import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AllDestinationsContext } from './AllDestinationsProvider';
import { toursToRenderArrayConstructor } from '../utils/toursToRenderArrayConstructor';

export const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
  const { allDestinations, loading } = useContext(AllDestinationsContext);
  const { destination_id } = useParams();
  const [destination, setDestination] = useState(null);
  const [destinationNotFound, setDestinationNotFound] = useState(false);

  useEffect(() => {
    if (destination_id && !loading) {
      const actualDestination = allDestinations.find((destination) => destination._id === destination_id);
      if (!actualDestination) {
        setDestinationNotFound(true);
      }
      const toursToRender = toursToRenderArrayConstructor(actualDestination);
      setDestination({ ...actualDestination, tours: toursToRender });
    }
  }, [destination_id, allDestinations, loading]);

  return (
    <DestinationContext.Provider value={{ destination, loading, destinationNotFound }}>
      {children}
    </DestinationContext.Provider>
  );
};
