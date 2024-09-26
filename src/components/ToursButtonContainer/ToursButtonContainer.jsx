import ContactTourButtons from "../ContactTourButtons/ContactTourButtons";
import AddAndRemoveFromFavoritesButton from "../AddAndRemoveFromFavoritesButton/AddAndRemoveFromFavoritesButton";
import { Flex } from "@chakra-ui/react";

const ToursButtonContainer = ({ tour, destination, tour_id }) => {
  return (
    <Flex direction="column" gap={{ base: 4, md: 6 }}>
      <ContactTourButtons
        tourName={tour?.name}
        destinationName={destination?.name}
      />
      {/*      <AddAndRemoveFromFavoritesButton
        tour_id={tour_id}
        destination_id={destination?._id}
        type="text"
      />*/}
    </Flex>
  );
};

export default ToursButtonContainer;
