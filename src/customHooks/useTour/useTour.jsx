import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DestinationContext } from '../../providers/DestinationProvider';

const useTour = () => {
  const { tour_id } = useParams();
  const { destination, loading } = useContext(DestinationContext);
  const [tour, setTour] = useState();
  const [tourNotFound, setTourNotFound] = useState(false);

  useEffect(() => {
    const actualTour = destination?.tours?.find((tour) => tour._id === tour_id);
    setTour(actualTour);
    if (destination && !loading && !actualTour) {
      setTourNotFound(true);
    } else {
      setTourNotFound(false);
    }
  }, [destination, tour_id, loading]);

  return { tour, tourNotFound, loading, destination };
};

export default useTour;
