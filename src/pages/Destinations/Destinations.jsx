import { Container } from '@chakra-ui/react';
import CardsList from '../../components/CardsList/CardsList';
import { useContext, useState, useMemo } from 'react';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import CountrySelector from '../../components/CountrySelector/CountrySelector';
import { useTranslation } from 'react-i18next';

const Destinations = () => {
  const { allDestinations, loading, countries } = useContext(AllDestinationsContext);
  const [selectedCountry, setSelectedCountry] = useState('');
  const { t } = useTranslation('Destinations');

  const filteredDestinations = useMemo(() => {
    if (!allDestinations?.length) return [];
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
        headingText={t('Heading')}
        descriptionText={t('SubHeading')}
        arrayToRender={filteredDestinations}
        usingFor={'destinations'}
        loading={loading}
      />
    </Container>
  );
};

export default Destinations;
