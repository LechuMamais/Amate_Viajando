import "./Destination.css";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import { getDestinationById } from "../../services/api/destinations";

const Destination = () => {
  const { destination_id } = useParams();
  const [destination, setDestination] = useState();
  const [loading, setLoading] = useState(true);
  const [descriptionParagraphs, setDescripionParagraphs] = useState();

  useEffect(() => {
    const fetchDestinationById = async () => {
      try {
        const data = await getDestinationById(destination_id);
        setDestination(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinationById();
  }, [destination_id]);

  useEffect(() => {
    setDescripionParagraphs(destination?.longDescription.split("\n"));
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
