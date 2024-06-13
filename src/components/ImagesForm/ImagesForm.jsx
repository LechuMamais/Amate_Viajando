import React from "react";
import { useFieldArray } from "react-hook-form";
import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Stack, Text, Textarea } from "@chakra-ui/react";

const ImagesForm = ({ control, register, errors, initialImages }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  // Pre-fill the images field array with initial images
  React.useEffect(() => {
    if (initialImages.length && fields.length === 0) {
      initialImages.forEach((image) => append(image));
    }
  }, [initialImages, fields, append]);

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Stack spacing={4}>
        <Heading size="lg" mb={4}>Imágenes</Heading>
        {fields.map((item, index) => (
          <>
                  <Heading size="md" mb={4}>Imagen {index+1}</Heading>
          <Box key={item.id} mb={4}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                defaultValue={item.name}
                {...register(`images.${index}.name`, { required: "Este campo es requerido" })}
                />
              {errors.images?.[index]?.name && (
                <Text color="red.500">{errors.images[index].name.message}</Text>
                )}
            </FormControl>

            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                defaultValue={item.description}
                {...register(`images.${index}.description`, { required: "Este campo es requerido" })}
                />
              {errors.images?.[index]?.description && (
                <Text color="red.500">{errors.images[index].description.message}</Text>
                )}
            </FormControl>

            <FormControl>
              <FormLabel>Texto alternativo (alt)</FormLabel>
              <Input
                defaultValue={item.alt}
                {...register(`images.${index}.alt`, { required: "Este campo es requerido" })}
                />
              {errors.images?.[index]?.alt && (
                <Text color="red.500">{errors.images[index].alt.message}</Text>
                )}
            </FormControl>

            <FormControl>
              <FormLabel>Imagen</FormLabel>
              {item.url && (
                <Image src={item.url} alt={item.alt} boxSize="100px" objectFit="cover" mb={2} />
                )}
              <Input
                type="file"
                {...register(`images.${index}.url`)}
                />
            </FormControl>

            <Button mt={2} colorScheme="red" onClick={() => remove(index)}>Eliminar Imagen</Button>
          </Box>
        </>
        ))}
      </Stack>

<Button mt={4} colorScheme="blue" onClick={() => append({ name: "", description: "", alt: "", url: "" })}>
        Añadir Imagen
      </Button>
    </Box>
    );
    };
    
    export default ImagesForm;
    