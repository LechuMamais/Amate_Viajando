import { createContext } from 'react';
import { useFetch } from '../customHooks/useFetch/useFetch';
import { fetchManager } from '../resources/fetchManager';

export const AllDestinationsContext = createContext();

export const AllDestinationsProvider = ({ children }) => {
  const { data: allDestinations, loading, refetch } = useFetch(fetchManager.destinations);

  return (
    <AllDestinationsContext.Provider
      value={{
        allDestinations: allDestinations || [],
        loading,
        reloadDestinations: refetch,
      }}
    >
      {children}
    </AllDestinationsContext.Provider>
  );
};
