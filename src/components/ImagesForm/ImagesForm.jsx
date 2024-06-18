import React, { useContext } from "react";
import { useFieldArray } from "react-hook-form";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { deleteImage } from "../../services/api/images";
import { UserContext } from "../../providers/UserProvider";

const ImagesForm = ({ control, register, errors, initialImages }) => {
  const { user } = useContext(UserContext);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  // Pre-fill the images field array with initial images
  React.useEffect(() => {
    if (initialImages?.length && fields.length === 0) {
      initialImages.forEach((image) => append(image));
    }
  }, [initialImages, fields, append]);

  const handleDeleteImageClick = async (index) => {
    remove(index);
    if (initialImages?.length && fields.length === 0) {
      await deleteImage(initialImages[index]._id, user.token);
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} bg="gray.100">
      <Stack spacing={4}>
        <Heading size="lg" mb={4}>
          Imágenes
        </Heading>
        {fields.map((item, index) => (
          <Box borderWidth="1px" borderRadius="lg" key={item.id} p={4} mt={4} mb={4} bg="white">
            <Flex
              direction="row"
              gap={4}
              justifyContent="space-between"
              align="baseline"
            >
              <Heading size="md" mb={4}>
                Imagen {index + 1}
              </Heading>
              <Button
                mt={2}
                size="sm"
                colorScheme="red"
                onClick={() => handleDeleteImageClick(index)}
              >
                <Text size="sm">Eliminar</Text>
              </Button>
            </Flex>
            <Box mb={4}>
              <FormControl mt={4}>
                <FormLabel><Text fontSize="lg">Nombre</Text></FormLabel>
                <Input
                  defaultValue={item.name}
                  {...register(`images.${index}.name`, {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.images?.[index]?.name && (
                  <Text color="red.500">
                    {errors.images[index].name.message}
                  </Text>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel><Text fontSize="lg">Descripción</Text></FormLabel>
                <Textarea
                  defaultValue={item.description}
                  {...register(`images.${index}.description`, {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.images?.[index]?.description && (
                  <Text color="red.500">
                    {errors.images[index].description.message}
                  </Text>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel><Text fontSize="lg">Texto alternativo (alt)</Text></FormLabel>
                <Input
                  defaultValue={item.alt}
                  {...register(`images.${index}.alt`, {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.images?.[index]?.alt && (
                  <Text color="red.500">
                    {errors.images[index].alt.message}
                  </Text>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel><Text fontSize="lg">Archivo de la Imagen</Text></FormLabel>
                <Flex direction="row" gap={4}>
                  {item.url && (
                    <Image
                      src={item.url}
                      alt={item.alt}
                      boxSize="100px"
                      objectFit="cover"
                      mb={2}
                    />
                  )}
                  <Box>
                    <Text p={4}>Selecciona una nueva imagen para modificarla</Text>
                    <Input type="file" {...register(`images.${index}.url`)} border="none" cursor="pointer"/>
                  </Box>
                </Flex>
              </FormControl>
            </Box>
          </Box>
        ))}
      </Stack>

      <Button
        mt={4}
        colorScheme="blue"
        w={{ base: "100%", md: "300px" }}
        onClick={() => append({ name: "", description: "", alt: "", url: "" })}
      >
        Añadir Imagen
      </Button>
    </Box>
  );
};

export default ImagesForm;
