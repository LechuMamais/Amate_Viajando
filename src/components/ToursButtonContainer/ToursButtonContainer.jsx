import ContactTourButtons from '../ContactTourButtons/ContactTourButtons';
import { Flex } from '@chakra-ui/react';

const ToursButtonContainer = ({ tour, destination }) => {
  return (
    <Flex direction='column' gap={{ base: 4, md: 6 }}>
      <ContactTourButtons tourName={tour?.name} destinationName={destination?.name} />
    </Flex>
  );
};

export default ToursButtonContainer;
