import { Container } from '@chakra-ui/react';
import CardsList from '../../components/CardsList/CardsList';
import { useContext, useState, useMemo } from 'react';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import CountrySelector from '../../components/CountrySelector/CountrySelector';

const Destinations = () => {
  const { allDestinations, loading, countries } = useContext(AllDestinationsContext);
  const [selectedCountry, setSelectedCountry] = useState('');

  const filteredDestinations = useMemo(() => {
    if (!selectedCountry) return allDestinations;
    return allDestinations.filter((destination) => destination.country_iso2code === selectedCountry);
  }, [allDestinations, selectedCountry]);

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }}>
      <CountrySelector
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <CardsList
        headingText={'Patagonia Argentina'}
        descriptionText={'Encuéntrate en los destinos naturales más espectaculares del sur del mundo'}
        arrayToRender={filteredDestinations}
        usingFor={'destinations'}
        loading={loading}
      />
    </Container>
  );
};

export default Destinations;
