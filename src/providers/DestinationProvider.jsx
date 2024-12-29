import { createContext, useContext, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AllDestinationsContext } from './AllDestinationsProvider';
import { toursToRenderArrayConstructor } from '../utils/toursToRenderArrayConstructor';

export const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
  const { allDestinations, loading } = useContext(AllDestinationsContext);
  const { destination_id } = useParams();
  const [destinationNotFound, setDestinationNotFound] = useState(false);

  const destination = useMemo(() => {
    if (!destination_id || loading) return null;

    const actualDestination = allDestinations.find((destination) => destination._id === destination_id);

    if (!actualDestination) {
      setDestinationNotFound(true);
      return null;
    }

    setDestinationNotFound(false);
    const toursToRender = toursToRenderArrayConstructor(actualDestination);
    return { ...actualDestination, tours: toursToRender };
  }, [destination_id, allDestinations, loading]);

  const value = useMemo(
    () => ({ destination, loading, destinationNotFound }),
    [destination, loading, destinationNotFound],
  );

  return <DestinationContext.Provider value={value}>{children}</DestinationContext.Provider>;
};
