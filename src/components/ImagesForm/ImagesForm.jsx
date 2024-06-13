import React from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Text, Heading, Button, Flex } from '@chakra-ui/react';
import { useFieldArray } from 'react-hook-form';

const ImagesForm = ({ control, register, errors }) => {
  const { fields, append } = useFieldArray({
    control,
    name: 'images',
  });

  return (
    <>
      {fields.map((field, index) => (
        <Box key={field.id} mb={4}>
          <Heading fontSize="lg" mb={4}>Imagen {index + 1}</Heading>
          <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
            <FormControl isInvalid={errors.images?.[index]?.name}>
              <FormLabel htmlFor={`images[${index}].name`}>Nombre de la Imagen</FormLabel>
              <Input
                id={`images[${index}].name`}
                placeholder={`Nombre de la imagen ${index + 1}`}
                {...register(`images[${index}].name`, { required: "Este campo es requerido" })}
              />
              {errors.images?.[index]?.name && <Text color="red.500">{errors.images[index].name.message}</Text>}
            </FormControl>

            <FormControl isInvalid={errors.images?.[index]?.url}>
              <FormLabel htmlFor={`images[${index}].url`}>Archivo de la Imagen {index + 1}</FormLabel>
              <Input
                type="file"
                id={`images[${index}].url`}
                {...register(`images[${index}].url`, { required: "Este campo es requerido" })}
              />
              {errors.images?.[index]?.url && <Text color="red.500">{errors.images[index].url.message}</Text>}
            </FormControl>

            <FormControl isInvalid={errors.images?.[index]?.alt}>
              <FormLabel htmlFor={`images[${index}].alt`}>Texto Alternativo</FormLabel>
              <Input
                id={`images[${index}].alt`}
                placeholder={`Texto alternativo de la imagen ${index + 1}`}
                {...register(`images[${index}].alt`, { required: "Este campo es requerido" })}
              />
              {errors.images?.[index]?.alt && <Text color="red.500">{errors.images[index].alt.message}</Text>}
            </FormControl>

            <FormControl isInvalid={errors.images?.[index]?.description}>
              <FormLabel htmlFor={`images[${index}].description`}>Descripción</FormLabel>
              <Textarea
                id={`images[${index}].description`}
                placeholder={`Descripción de la imagen ${index + 1}`}
                {...register(`images[${index}].description`)}
              />
              {errors.images?.[index]?.description && <Text color="red.500">{errors.images[index].description.message}</Text>}
            </FormControl>
          </Box>
        </Box>
      ))}

      <Flex spacing="6" direction={{ base: "column", md: "row" }} gap={2}>
        <Button variant="outline" mt={4} colorScheme="teal" onClick={() => append({ name: "", url: "", alt: "", description: "" })}>
          Añadir Otra Imagen
        </Button>
      </Flex>
    </>
  );
};

export default ImagesForm;
