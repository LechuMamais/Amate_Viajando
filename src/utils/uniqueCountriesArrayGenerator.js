export const uniqueContriesArrayGenerator = (allDestinations) => {
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
    return Array.from(uniqueCountriesMap.values());
};