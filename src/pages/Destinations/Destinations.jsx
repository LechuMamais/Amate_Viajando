import { Box } from "@chakra-ui/react";
import { destinations } from "../../resources/destinations";
import CardsList from "../../components/CardsList/CardsList";

const Destinations = () => {
  return (
    <Box as="main" flex="1">
      <CardsList
        headingText={"Patagonia Argentina"}
        descriptionText={
          "Encuentrate en los destinos naturales más espectaculares del sur del mundo"
        }
        arrayToRender={destinations}
        usingFor={"destinations"}
      />
    </Box>
  );
};

export default Destinations;
