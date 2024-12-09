import { Skeleton } from '@chakra-ui/react';
import { useContext } from 'react';
import DetailsPage from '../../components/DetailsPage/DetailsPage';
import { DestinationContext } from '../../providers/DestinationProvider';
import CardsList from '../../components/CardsList/CardsList';
import NotFound from '../NotFound/NotFound';

const Destination = () => {
  const { destination, loading, destinationNotFound } = useContext(DestinationContext);

  return (
    <Skeleton isLoaded={!loading} fadeDuration={2} w='100lvw' minHeight='calc(100lvh - 72px)'>
      {destinationNotFound ? (
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
    </Skeleton>
  );
};

export default Destination;
