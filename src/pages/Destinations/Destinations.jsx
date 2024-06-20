import { Box } from "@chakra-ui/react";
import CardsList from "../../components/CardsList/CardsList";
import { useContext } from "react";
import { AllDestinationsContext } from "../../providers/AllDestinationsProvider";

const Destinations = () => {
  const { allDestinations, loading } = useContext(AllDestinationsContext);

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
          arrayToRender={allDestinations}
          usingFor={'destinations'}
        />
      )}
    </Box>
  );
};

export default Destinations;