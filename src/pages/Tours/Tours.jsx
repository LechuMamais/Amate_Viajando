import { Container } from '@chakra-ui/react';
import CardsList from '../../components/CardsList/CardsList';
import { useContext } from 'react';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import { toursToRenderArrayConstructor } from '../../utils/toursToRenderArrayConstructor';
import { useTranslation } from 'react-i18next';

const Tours = () => {
  const { allDestinations, loading } = useContext(AllDestinationsContext);
  const { t } = useTranslation('Tours');

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }}>
      {allDestinations?.map(
        (destination) =>
          destination.tours.length > 0 && (
            <CardsList
              key={destination?._id}
              headingText={destination?.name}
              descriptionText={t('ToursSubHeading', { destinationName: destination?.name })}
              arrayToRender={toursToRenderArrayConstructor(destination)}
              usingFor={'tours'}
              loading={loading}
              destinationID={destination?._id}
            />
          ),
      )}
    </Container>
  );
};

export default Tours;
