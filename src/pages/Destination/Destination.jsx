import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import DetailsPage from '../../components/DetailsPage/DetailsPage';
import { DestinationContext } from '../../providers/DestinationProvider';
import CardsList from '../../components/CardsList/CardsList';

const Destination = () => {
  const { destination, loading } = useContext(DestinationContext);

  return (
    <Box as='main' flex='1'>
      <DetailsPage
        obj={destination}
        descriptionParagraphs={destination?.longDescription.split('\n')}
        usingFor={'destination'}
      >
        <CardsList
          headingText={`Que hacer en ${destination?.name}`}
          descriptionText={'Seleccionados para tí'}
          arrayToRender={destination?.tours}
          usingFor={'tours'}
          loading={loading}
        />
      </DetailsPage>
    </Box>
  );
};

export default Destination;
