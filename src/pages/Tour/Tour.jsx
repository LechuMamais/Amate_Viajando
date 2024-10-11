import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setTour(destination?.tours.filter((tour) => tour._id === tour_id)[0]);
  }, [destination, tour_id, tour]);

  useEffect(() => {
    if (!loading && (tour == null || destination == null)) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [loading, tour, destination]);

  return (
    <Box as='main' flex='1'>
      {notFound ? (
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
