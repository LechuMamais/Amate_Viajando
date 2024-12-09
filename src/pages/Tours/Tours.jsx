import { Container } from '@chakra-ui/react';
import CardsList from '../../components/CardsList/CardsList';
import { useContext } from 'react';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import { toursToRenderArrayConstructor } from '../../utils/toursToRenderArrayConstructor';

const Tours = () => {
  const { allDestinations, loading } = useContext(AllDestinationsContext);

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }}>
      {allDestinations?.map((destination) => (
        <CardsList
          key={destination._id}
          headingText={destination.name}
          descriptionText={`Los mejores tours en ${destination.name} seleccionados para ti.`}
          arrayToRender={toursToRenderArrayConstructor(destination)}
          usingFor={'tours'}
          loading={loading}
          destinationID={destination._id}
        />
      ))}
    </Container>
  );
};

export default Tours;
