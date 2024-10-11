import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import DetailsPage from '../../components/DetailsPage/DetailsPage';
import { DestinationContext } from '../../providers/DestinationProvider';
import CardsList from '../../components/CardsList/CardsList';
import NotFound from '../NotFound/NotFound';

const Destination = () => {
  const { destination, loading } = useContext(DestinationContext);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!loading && destination?.name == null) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [destination, loading]);

  return (
    <Box as='main' flex='1'>
      {notFound ? (
        <NotFound />
      ) : (
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
      )}
    </Box>
  );
};

export default Destination;
