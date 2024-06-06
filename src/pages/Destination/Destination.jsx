import "./Destination.css";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  UnorderedList,
  ListItem,
  CheckboxIcon,
  Stack,
  Link,
  Box,
} from "@chakra-ui/react";
import { destinations } from "../../resources/Destinations";

import { useEffect, useState } from "react";
import DestinationCarousel from "../../components/DestinationCarousel/DestinationCarousel";

const Destination = () => {
  const { destination_id } = useParams();
  const [destination, setDestination] = useState();
  const [descriptionParagraphs, setDescripionParagraphs] = useState();

  const getDestinationInfo = (destination_id) => {
    const destinationInfo = destinations.find(
      (dest) => dest._id === destination_id
    );

    if (destinationInfo) {
      setDestination(destinationInfo);
    } else {
      return null;
    }
  };

  useEffect(() => {
    getDestinationInfo(destination_id);
  }, [destination_id]);

  useEffect(() => {
    setDescripionParagraphs(destination?.longDescription.split("\n"));
  }, [destination]);

  return (
    <Box as="main" flex="1">
      <DestinationCarousel destination={destination} />
      <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
        <section w="full" py={{ base: 12, md: 24, lg: 32 }}>
          <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
            <Link href="/destinations">
              <Button
                size="lg"
                variant="link"
                p={6}
                pl={0}
                my={{ base: 2, md: 3, lg: 4 }}
                fontWeight={"light"}
              >
                Otros Destinos
              </Button>
            </Link>
            <Flex direction="column" gap={6}>
              <div className="space-y-4">
                <Heading size="xl" fontWeight="bold">
                  {destination?.heading}
                </Heading>
                <Stack spacing={3} my={4}>
                  {descriptionParagraphs?.map((paragraph, index) => {
                    return (
                      <Text key={index} color="gray.500">
                        {paragraph}
                      </Text>
                    );
                  })}
                </Stack>
              </div>
              <Box>
                <Heading size="xl" fontWeight="bold">
                  Incluido en el Paquete
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <Icon as={CheckboxIcon} color="primary" />
                    <Box>
                      <Heading size="md" fontWeight="semibold">
                        Vuelos de ida y vuelta
                      </Heading>
                      <Text color="gray.500">
                        Vuelos directos desde tu ciudad de origen.
                      </Text>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Icon as={CheckboxIcon} color="primary" />
                    <Box>
                      <Heading size="md" fontWeight="semibold">
                        Alojamiento en hotel 5 estrellas
                      </Heading>
                      <Text color="gray.500">
                        Disfruta de una estadía lujosa en un hotel de primera
                        clase.
                      </Text>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Icon as={CheckboxIcon} color="primary" />
                    <Box>
                      <Heading size="md" fontWeight="semibold">
                        Traslados al aeropuerto
                      </Heading>
                      <Text color="gray.500">
                        Servicio de traslado de ida y vuelta al aeropuerto.
                      </Text>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Icon as={CheckboxIcon} color="primary" />
                    <Box>
                      <Heading size="md" fontWeight="semibold">
                        Excursiones y actividades
                      </Heading>
                      <Text color="gray.500">
                        Visita a las ruinas mayas, snorkel en cenotes y más.
                      </Text>
                    </Box>
                  </ListItem>
                </UnorderedList>
              </Box>
              <Flex direction={{ base: "column", md: "row" }} gap={2}>
                <Button size="lg" className="w-full">
                  Reservar Ahora
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Agregar al Carrito
                </Button>
              </Flex>
            </Flex>
          </Container>
        </section>
      </Box>
    </Box>
  );
};

export default Destination;
