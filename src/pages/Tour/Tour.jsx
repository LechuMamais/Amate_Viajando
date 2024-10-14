import { Skeleton, VStack } from '@chakra-ui/react';
import DetailsPage from '../../components/DetailsPage/DetailsPage';
import ToursButtonContainer from '../../components/ToursButtonContainer/ToursButtonContainer';
import CardsList from '../../components/CardsList/CardsList';
import NotFound from '../NotFound/NotFound';
import useTour from '../../customHooks/useTour/useTour';

const Tour = () => {
  const { tour, tourNotFound, loading, destination } = useTour();

  return (
    <Skeleton isLoaded={!loading} fadeDuration={2} w='100lvw' h='calc(100lvh-72px)' overflow='hidden'>
      {tourNotFound ? (
        <NotFound />
      ) : (
        <VStack spacing={6} alignItems='stretch'>
          {tour && (
            <DetailsPage obj={tour} descriptionParagraphs={tour?.longDescription.split('\n')} usingFor={'tour'}>
              <ToursButtonContainer tour={tour} destination={destination} tour_id={tour?._id} />
              <CardsList
                headingText={`Otros tours en ${destination?.name}`}
                descriptionText={'Seleccionados para ti'}
                arrayToRender={destination?.tours.filter((other_tour) => other_tour._id !== tour?._id)}
                usingFor={'tours'}
                loading={loading}
              />
            </DetailsPage>
          )}
        </VStack>
      )}
    </Skeleton>
  );
};

export default Tour;
