import "./Destination.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import { DestinationContext } from "../../providers/DestinationProvider";

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
        />
      )}
    </Box>
  );
};

export default Destination;
