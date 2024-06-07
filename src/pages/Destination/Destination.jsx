import "./Destination.css";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@chakra-ui/react";
import { destinations } from "../../resources/destinations";
import { useEffect, useState } from "react";
import DetailsPage from "../../components/DetailsPage/DetailsPage";

const Destination = () => {
  const { destination_id } = useParams();
  const [destination, setDestination] = useState();
  const [descriptionParagraphs, setDescripionParagraphs] = useState();

  const getDestinationInfo = (destination_id) => {
    const destinationInfo = destinations.find(
      (dest) => dest._id === destination_id
    );

    if (destinationInfo) {
      setDestination(destinationInfo);
    } else {
      return null;
    }
  };

  useEffect(() => {
    getDestinationInfo(destination_id);
  }, [destination_id]);

  useEffect(() => {
    setDescripionParagraphs(destination?.longDescription.split("\n"));
  }, [destination]);

  return (
    <Box as="main" flex="1">
      <DetailsPage
        obj={destination}
        descriptionParagraphs={descriptionParagraphs}
      />
    </Box>
  );
};

export default Destination;
