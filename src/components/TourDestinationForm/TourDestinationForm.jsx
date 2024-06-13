import React from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Text } from '@chakra-ui/react';

const TourDestinationForm = ({ register, errors }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
    <FormControl isInvalid={errors.name}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <Input
        id="name"
        placeholder="Nombre"
        {...register("name", { required: "Este campo es requerido" })}
      />
      {errors.name && <Text color="red.500">{errors.name.message}</Text>}
    </FormControl>

    <FormControl isInvalid={errors.heading}>
      <FormLabel htmlFor="heading">Encabezado/Heading</FormLabel>
      <Input
        id="heading"
        placeholder="Encabezado"
        {...register("heading", { required: "Este campo es requerido" })}
      />
      {errors.heading && <Text color="red.500">{errors.heading.message}</Text>}
    </FormControl>

    <FormControl isInvalid={errors.description}>
      <FormLabel htmlFor="description">Descripción corta</FormLabel>
      <Textarea
        id="description"
        placeholder="Descripción corta"
        {...register("description", { required: "Este campo es requerido" })}
      />
      {errors.description && <Text color="red.500">{errors.description.message}</Text>}
    </FormControl>

    <FormControl isInvalid={errors.longDescription}>
      <FormLabel htmlFor="longDescription">Descripción Larga</FormLabel>
      <Textarea
        id="longDescription"
        placeholder="Descripción larga"
        {...register("longDescription", { required: "Este campo es requerido" })}
      />
      {errors.longDescription && <Text color="red.500">{errors.longDescription.message}</Text>}
    </FormControl>
  </Box>
);

export default TourDestinationForm;
