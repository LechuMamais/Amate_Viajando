import { Box } from "@chakra-ui/react";
import CardsList from "../../components/CardsList/CardsList";
import { getDestinations } from "../../services/api/destinations";
import { useState } from "react";
import { useEffect } from "react";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await getDestinations();
        setDestinations(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <Box as="main" flex="1">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CardsList
          headingText={"Patagonia Argentina"}
          descriptionText={
            "Encuentrate en los destinos naturales más espectaculares del sur del mundo"
          }
          arrayToRender={destinations}
          usingFor={"destinations"}
        />
      )}
    </Box>
  );
};

export default Destinations;