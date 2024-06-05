import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import DestinationCards from "../../components/DestinationCards/DestinationCards";
import { destinations } from "../../resources/Destinations";

const Destinations = () => {
  return (
    <Box as="main" flex="1">
      <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          <Box textAlign="center" mb={8}>
            <Heading
              as="h2"
              size="2xl"
              fontWeight="bold"
              lineHeight="tight"
              mb={4}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            >
              Patagonia Argentina
            </Heading>
            <Text
              color="gray.500"
              fontSize={{ base: "md", md: "xl", lg: "base", xl: "xl" }}
              lineHeight="relaxed"
              maxW="700px"
              mx="auto"
            >
              Encuentrate en los destinos naturales más espectaculares del sur del mundo
            </Text>
          </Box>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={6}
          >
            {destinations.map((destination) => (
              <DestinationCards key={destination._id} destination={destination} />
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Destinations;
