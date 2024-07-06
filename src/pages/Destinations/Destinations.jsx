import { Box, Container } from "@chakra-ui/react";
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
        <Container maxW="928px" px={{ base: 4, md: 6 }}>
          <CardsList
            headingText={"Patagonia Argentina"}
            descriptionText={
              "Encuéntrate en los destinos naturales más espectaculares del sur del mundo"
            }
            arrayToRender={allDestinations}
            usingFor={"destinations"}
          />
        </Container>
      )}
    </Box>
  );
};

export default Destinations;
