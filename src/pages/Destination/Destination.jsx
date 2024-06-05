import { useParams } from "react-router-dom";
import "./Destination.css";
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
    console.log(destination);
  }, [destination, destination_id]);

  return (
    <Box as="main" flex="1">
      <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
      <Link href="/destinations">
        <Button size="lg" variant="link" m={8} p={8}>
          Back
        </Button>
      </Link>
        <section className="w-full h-[80vh] relative"></section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
            <Flex direction="column" gap={6}>
              <div className="space-y-4">
                <Heading size="xl" fontWeight="bold">
                  {destination?.heading}
                </Heading>
                <Stack spacing={3}>
                  {descriptionParagraphs?.map((paragraph, index) => {
                    return (
                      <Text key={index} color="gray.500">
                        {paragraph}
                      </Text>
                    );
                  })}
                </Stack>
              </div>
              <div className="space-y-4">
                <Heading size="xl" fontWeight="bold">
                  Incluido en el Paquete
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <Icon as={CheckboxIcon} color="primary" />
                    <div>
                      <Heading size="md" fontWeight="semibold">
                        Vuelos de ida y vuelta
                      </Heading>
                      <Text color="gray.500">
                        Vuelos directos desde tu ciudad de origen.
                      </Text>
                    </div>
                  </ListItem>
                  <ListItem>
                    <Icon as={CheckboxIcon} color="primary" />
                    <div>
                      <Heading size="md" fontWeight="semibold">
                        Alojamiento en hotel 5 estrellas
                      </Heading>
                      <Text color="gray.500">
                        Disfruta de una estadía lujosa en un hotel de primera
                        clase.
                      </Text>
                    </div>
                  </ListItem>
                  <ListItem>
                    <Icon as={CheckboxIcon} color="primary" />
                    <div>
                      <Heading size="md" fontWeight="semibold">
                        Traslados al aeropuerto
                      </Heading>
                      <Text color="gray.500">
                        Servicio de traslado de ida y vuelta al aeropuerto.
                      </Text>
                    </div>
                  </ListItem>
                  <ListItem>
                    <Icon as={CheckboxIcon} color="primary" />
                    <div>
                      <Heading size="md" fontWeight="semibold">
                        Excursiones y actividades
                      </Heading>
                      <Text color="gray.500">
                        Visita a las ruinas mayas, snorkel en cenotes y más.
                      </Text>
                    </div>
                  </ListItem>
                </UnorderedList>
              </div>
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
