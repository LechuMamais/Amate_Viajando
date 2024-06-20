import "./Tour.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import { useContext } from "react";
import { DestinationContext } from "../../providers/DestinationProvider";
import ToursButtonContainer from "../../components/ToursButtonContainer/ToursButtonContainer";
import CardsList from "../../components/CardsList/CardsList";

const Tour = () => {
  const { tour_id } = useParams();
  const { destination, loading } = useContext(DestinationContext);
  const [tour, setTour] = useState();

  useEffect(() => {
    setTour(
      destination?.tours.filter((tour, index) => tour._id === tour_id)[0]
    );
  }, [destination, tour_id, tour]);

  return (
    <Box as="main" flex="1">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DetailsPage
          obj={tour}
          descriptionParagraphs={tour?.longDescription.split("\n")}
          usingFor={"tour"}
        >
          <ToursButtonContainer tour_id={tour_id} />
          <CardsList
            headingText={`Otros tours en ${destination?.name}`}
            descriptionText={"Seleccionados para tí"}
            arrayToRender={destination?.tours.filter(
              (other_tour) => other_tour._id !== tour?._id
            )}
            usingFor={"tours"}
          />
        </DetailsPage>
      )}
    </Box>
  );
};

export default Tour;
