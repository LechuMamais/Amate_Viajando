import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import DetailsPage from '../../components/DetailsPage/DetailsPage';
import { useContext } from 'react';
import { DestinationContext } from '../../providers/DestinationProvider';
import ToursButtonContainer from '../../components/ToursButtonContainer/ToursButtonContainer';
import CardsList from '../../components/CardsList/CardsList';
import NotFound from '../NotFound/NotFound';

const Tour = () => {
  const { tour_id } = useParams();
  const { destination, loading } = useContext(DestinationContext);
  const [tour, setTour] = useState();
  const [tourNotFound, setTourNotFound] = useState(false);

  useEffect(() => {
    const actualTour = destination?.tours.filter((tour) => tour._id === tour_id)[0];
    console.log(actualTour);
    setTour(actualTour);
  }, [destination, tour_id, loading]);

  useEffect(() => {
    console.log(loading);
    console.log(tour);
    if (!loading && !tour && destination) {
      setTourNotFound(true);
    } else {
      setTourNotFound(false);
    }
  }, [loading, tour, destination]);

  return (
    <Box as='main' flex='1'>
      {tourNotFound ? (
        <NotFound />
      ) : (
        <DetailsPage obj={tour} descriptionParagraphs={tour?.longDescription.split('\n')} usingFor={'tour'}>
          <ToursButtonContainer tour={tour} destination={destination} tour_id={tour_id} />
          <CardsList
            headingText={`Otros tours en ${destination?.name}`}
            descriptionText={'Seleccionados para tí'}
            arrayToRender={destination?.tours.filter((other_tour) => other_tour._id !== tour?._id)}
            usingFor={'tours'}
            loading={loading}
          />
        </DetailsPage>
      )}
    </Box>
  );
};

export default Tour;
