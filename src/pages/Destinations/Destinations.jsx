import { Box } from "@chakra-ui/react";
import CardsList from "../../components/CardsList/CardsList";
import { useState } from "react";
import { useEffect } from "react";
import { fetchSetDestinations } from "../../services/fetchSetDestinations";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSetDestinations(setDestinations,setLoading);
  }, []);

  return (
    <Box as="main" flex="1">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CardsList
          headingText={"Patagonia Argentina"}
          descriptionText={
            "Encuéntrate en los destinos naturales más espectaculares del sur del mundo"
          }
          arrayToRender={destinations}
          usingFor={'destinations'}
        />
      )}
    </Box>
  );
};

export default Destinations;