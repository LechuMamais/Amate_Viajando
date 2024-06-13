import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { createTour } from "../../services/api/tours";
import { createImage } from "../../services/api/images"; // Asegúrate de importar la función createImage
import { useNavigate } from "react-router-dom";
import MyLink from "../../components/MyLink/MyLink";

const CreateTour = () => {
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { fields, append } = useFieldArray({ control, name: "images" });
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { images, ...tourData } = data;
      let imageIds = [];

      for (const image of images) {
        const formData = new FormData();
        formData.append("name", image.name);
        formData.append("url", image.url[0]);
        formData.append("alt", image.alt);
        formData.append("description", image.description);

        console.log("Uploading image:", formData.get("url"));

        const uploadedImg = await createImage(formData, user.token);

        console.log("Uploaded image response:", uploadedImg);

        imageIds.push(uploadedImg.element._id);
      }

      tourData.images = imageIds;
      await createTour(tourData, user.token);

      toast({
        title: "Tour creado.",
        description: "El tour ha sido creado exitosamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/profile");
    } catch (error) {
      console.error("Error creating tour:", error);
      toast({
        title: "Error",
        description: "Hubo un error al crear el tour.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="main" flex={1} p={6}>
      <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <Heading fontSize="xl">Nuevo Tour</Heading>
        <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Nombre Del Tour</FormLabel>
            <Input
              id="name"
              placeholder="Nombre del tour"
              {...register("name", { required: "Este campo es requerido" })}
            />
            {errors.name && <Text color="red.500">{errors.name.message}</Text>}
          </FormControl>

          <FormControl isInvalid={errors.heading}>
            <FormLabel htmlFor="heading">Encabezado/Heading</FormLabel>
            <Input
              id="heading"
              placeholder="Encabezado del tour"
              {...register("heading", { required: "Este campo es requerido" })}
            />
            {errors.heading && (
              <Text color="red.500">{errors.heading.message}</Text>
            )}
          </FormControl>

          <FormControl isInvalid={errors.description}>
            <FormLabel htmlFor="description">Descripción corta</FormLabel>
            <Textarea
              id="description"
              placeholder="Descripción del tour"
              {...register("description", {
                required: "Este campo es requerido",
              })}
            />
            {errors.description && (
              <Text color="red.500">{errors.description.message}</Text>
            )}
          </FormControl>

          <FormControl isInvalid={errors.longDescription}>
            <FormLabel htmlFor="longDescription">Descripción Larga</FormLabel>
            <Textarea
              id="longDescription"
              placeholder="Descripción larga del tour. Puede contener varios párrafos"
              {...register("longDescription", {
                required: "Este campo es requerido",
              })}
            />
            {errors.longDescription && (
              <Text color="red.500">{errors.longDescription.message}</Text>
            )}
          </FormControl>
        </Box>

        {fields.map((field, index) => (
          <Box key={field.id} mb={4}>
            <Heading fontSize="lg"  mb={4}>Imagen {index + 1}</Heading>
            <Box
              
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              mb={4}
            >
              <FormControl isInvalid={errors.images?.[index]?.name}>
                <FormLabel htmlFor={`images[${index}].name`}>
                  Nombre de la Imagen
                </FormLabel>
                <Input
                  id={`images[${index}].name`}
                  placeholder={`Nombre de la imagen ${index + 1}`}
                  {...register(`images[${index}].name`, {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.images?.[index]?.name && (
                  <Text color="red.500">
                    {errors.images[index].name.message}
                  </Text>
                )}
              </FormControl>

              <FormControl isInvalid={errors.images?.[index]?.url}>
                <FormLabel htmlFor={`images[${index}].url`}>
                  Archivo de la Imagen {index + 1}
                </FormLabel>
                <Input
                  type="file"
                  id={`images[${index}].url`}
                  {...register(`images[${index}].url`, {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.images?.[index]?.url && (
                  <Text color="red.500">
                    {errors.images[index].url.message}
                  </Text>
                )}
              </FormControl>

              <FormControl isInvalid={errors.images?.[index]?.alt}>
                <FormLabel htmlFor={`images[${index}].alt`}>
                  Texto Alternativo
                </FormLabel>
                <Input
                  id={`images[${index}].alt`}
                  placeholder={`Texto alternativo de la imagen ${index + 1}`}
                  {...register(`images[${index}].alt`, {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.images?.[index]?.alt && (
                  <Text color="red.500">
                    {errors.images[index].alt.message}
                  </Text>
                )}
              </FormControl>

              <FormControl isInvalid={errors.images?.[index]?.description}>
                <FormLabel htmlFor={`images[${index}].description`}>
                  Descripción
                </FormLabel>
                <Textarea
                  id={`images[${index}].description`}
                  placeholder={`Descripción de la imagen ${index + 1}`}
                  {...register(`images[${index}].description`)}
                />
                {errors.images?.[index]?.description && (
                  <Text color="red.500">
                    {errors.images[index].description.message}
                  </Text>
                )}
              </FormControl>
            </Box>
          </Box>
        ))}

        <Flex spacing="6" direction={{ base: "column", md: "row" }} gap={2}>
          <Button
            variant="outline"
            mt={4}
            colorScheme="teal"
            onClick={() =>
              append({ name: "", url: "", alt: "", description: "" })
            }
          >
            Añadir {fields.length == 0 ? "Una" : "Otra"} Imagen
          </Button>
          <Button mt={4} colorScheme="teal" type="submit">
            Crear Tour
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CreateTour;
