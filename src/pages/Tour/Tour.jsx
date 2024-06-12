import "./Tour.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import { useContext } from "react";
import { DestinationContext } from "../../providers/DestinationProvider";
import ToursButtonContainer from "../../components/ToursButtonContainer/ToursButtonContainer";

const Tour = () => {
  const { tour_id } = useParams();
  const [tour, setTour] = useState();
  //const [loading, setLoading] = useState(true);
  const [descriptionParagraphs, setDescripionParagraphs] = useState();
  const { destination, loading } = useContext(DestinationContext);

  useEffect(() => {
    if (tour) {
      setDescripionParagraphs(tour?.longDescription.split("\n"));
    }
  }, [destination, tour_id, tour]);

  useEffect(() => {
    setTour(
      destination?.tours.filter((tour, index) => tour._id === tour_id)[0]
    );
    setDescripionParagraphs(tour?.longDescription.split("\n"));
  }, [destination, tour_id]);

  return (
    <Box as="main" flex="1">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DetailsPage
          obj={tour}
          descriptionParagraphs={descriptionParagraphs}
          usingFor={"tour"}
        />
      )}
      <ToursButtonContainer tour_id={tour_id}/>
    </Box>
  );
};

export default Tour;
