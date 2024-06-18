import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/react";

const TourDestinationForm = ({ register, errors }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} bg="gray.100">
    <Box borderWidth="1px" borderRadius="lg" p={4} mt={4} mb={4} bg="white">
      <FormControl isInvalid={errors.name} mt={4}>
        <FormLabel htmlFor="name"><Text fontSize="lg">Nombre</Text></FormLabel>
        <Input
          id="name"
          placeholder="Nombre"
          {...register("name", { required: "Este campo es requerido" })}
        />
        {errors.name && <Text color="red.500">{errors.name.message}</Text>}
      </FormControl>
    </Box>

    <Box borderWidth="1px" borderRadius="lg" p={4} mt={4} mb={4} bg="white">
      <FormControl isInvalid={errors.heading} mt={4}>
        <FormLabel htmlFor="heading"><Text fontSize="lg">Encabezado/Heading</Text></FormLabel>
        <Input
          id="heading"
          placeholder="Encabezado"
          {...register("heading", { required: "Este campo es requerido" })}
        />
        {errors.heading && (
          <Text color="red.500">{errors.heading.message}</Text>
        )}
      </FormControl>
    </Box>

    <Box borderWidth="1px" borderRadius="lg" p={4} mt={4} mb={4} bg="white">
      <FormControl isInvalid={errors.description} mt={4}>
        <FormLabel htmlFor="description"><Text fontSize="lg">Descripción corta</Text></FormLabel>
        <Textarea
          id="description"
          placeholder="Descripción corta"
          {...register("description", { required: "Este campo es requerido" })}
        />
        {errors.description && (
          <Text color="red.500">{errors.description.message}</Text>
        )}
      </FormControl>
    </Box>
    <Box borderWidth="1px" borderRadius="lg" p={4} mt={4} mb={4} bg="white">
      <FormControl isInvalid={errors.longDescription} mt={4}>
        <FormLabel htmlFor="longDescription"><Text fontSize="lg">Descripción Larga</Text></FormLabel>
        <Textarea
          id="longDescription"
          placeholder="Descripción larga"
          {...register("longDescription", {
            required: "Este campo es requerido",
          })}
        />
        {errors.longDescription && (
          <Text color="red.500">{errors.longDescription.message}</Text>
        )}
      </FormControl>
    </Box>
  </Box>
);

export default TourDestinationForm;
