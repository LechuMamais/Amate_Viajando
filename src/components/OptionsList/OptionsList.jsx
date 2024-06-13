import {
    Heading,
    Icon,
    Text,
    UnorderedList,
    ListItem,
    CheckboxIcon,
    Box,
  } from "@chakra-ui/react";

const OptionsList = () => {
  return (
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
  )
}

export default OptionsList
