import { createContext, useEffect, useState } from 'react';
import { useFetch } from '../customHooks/useFetch/useFetch';
import { fetchManager } from '../resources/fetchManager';

export const AllDestinationsContext = createContext();

export const AllDestinationsProvider = ({ children }) => {
  const { data: allDestinations, loading, refetch } = useFetch(fetchManager.destinations);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (allDestinations) {
      const uniqueCountriesMap = new Map();
      allDestinations.forEach((destination) => {
        const key = `${destination.country_name}-${destination.country_iso2code}`;
        if (!uniqueCountriesMap.has(key)) {
          uniqueCountriesMap.set(key, {
            name: destination.country_name,
            iso2Code: destination.country_iso2code,
          });
        }
      });
      const uniqueCountries = Array.from(uniqueCountriesMap.values());
      setCountries(uniqueCountries);
    }
  }, [allDestinations]);

  return (
    <AllDestinationsContext.Provider
      value={{
        allDestinations: allDestinations || [],
        loading,
        reloadDestinations: refetch,
        countries,
      }}
    >
      {children}
    </AllDestinationsContext.Provider>
  );
};
