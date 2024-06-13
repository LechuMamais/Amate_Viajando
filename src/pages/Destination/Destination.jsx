import "./Destination.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import { DestinationContext } from "../../providers/DestinationProvider";
import CardsList from "../../components/CardsList/CardsList";

const Destination = () => {
  const { destination, loading } = useContext(DestinationContext);
  const [descriptionParagraphs, setDescriptionParagraphs] = useState([]);

  useEffect(() => {
    if (destination?.longDescription) {
      setDescriptionParagraphs(destination.longDescription.split("\n"));
    }
  }, [destination]);

  return (
    <Box as="main" flex="1">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DetailsPage
          obj={destination}
          descriptionParagraphs={descriptionParagraphs}
          usingFor={"destination"}
        >
          <CardsList
            headingText={`Que hacer en ${destination?.name}`}
            descriptionText={"Seleccionados para tí"}
            arrayToRender={destination?.tours}
            usingFor={"tours"}
          />
        </DetailsPage>
      )}
    </Box>
  );
};

export default Destination;
