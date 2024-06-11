import { Box } from "@chakra-ui/react";
import { tours } from "../../resources/tours";
import CardsList from "../../components/CardsList/CardsList";

const Tours = () => {
  return (
    <Box as="main" flex="1">
      <CardsList
        headingText={"Patagonia Argentina"}
        descriptionText={
          "Los caminos son nuestros guías"
        }
        arrayToRender={tours}
      />
    </Box>
  );
};

export default Tours;
