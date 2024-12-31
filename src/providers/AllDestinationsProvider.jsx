import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useFetch } from '../customHooks/useFetch/useFetch';
import { fetchManager } from '../resources/fetchManager';
import { LanguageContext } from './LanguageProvider';
import { uniqueContriesArrayGenerator } from '../utils/uniqueCountriesArrayGenerator';

export const AllDestinationsContext = createContext();

export const AllDestinationsProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);
  const {
    data: allDestinations = [],
    loading,
    refetch,
  } = useFetch(fetchManager.destinations, language?.iso3code, false); // autoFetch desactivado

  useEffect(() => {
    if (language?.iso3code) {
      refetch();
    }
  }, [language?.iso3code, refetch]);

  const countries = useMemo(() => {
    return uniqueContriesArrayGenerator(allDestinations || []);
  }, [allDestinations]);

  const reloadDestinations = useCallback(() => {
    if (language?.iso3code) {
      refetch();
    }
  }, [language?.iso3code, refetch]);

  const value = useMemo(() => ({ loading, reloadDestinations, countries }), [loading, reloadDestinations, countries]);

  return (
    <AllDestinationsContext.Provider
      value={{
        allDestinations: allDestinations || [],
        ...value,
      }}
    >
      {children}
    </AllDestinationsContext.Provider>
  );
};
