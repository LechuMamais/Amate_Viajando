import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Stack, Heading, useToast, Text, Container } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import {
  deleteDestination,
  getDestinationById,
  updateDestination,
} from "../../services/api/destinations";
import { createImage, updateImage } from "../../services/api/images";
import TourDestinationForm from "../TourDestinationForm/TourDestinationForm";
import ImagesForm from "../ImagesForm/ImagesForm";
import BackButton from "../BackButton/BackButton";
import ToursCheckboxGroup from "../ToursCheckBoxGroup/ToursCheckBoxGroup";

const UpdateDestination = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { destination_id } = useParams();
  const [destination, setDestination] = useState(null);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await getDestinationById(destination_id);
        setDestination(response);
        setValue("name", response.name);
        setValue("heading", response.heading);
        setValue("description", response.description);
        setValue("longDescription", response.longDescription);
        setValue("images", response.images);
        setValue(
          "tours",
          response.tours.map((tour) => tour._id)
        ); // Set initial tours as ids
      } catch (error) {
        toast({
          title: "Error",
          description: "No se pudo cargar el destino.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchDestination();
  }, [destination_id]);

  const onSubmit = async (data) => {
    try {
      const { images, tours, ...formData } = data;
      let imageIds = [];

      const imagePromises = images.map(async (image) => {
        // Si es una imagen ya existente
        if (image._id) {
          const originalImage = destination.images.find(img => img._id === image._id);
          console.log(originalImage);
          // Si la imagen original no coincide con la nueva, la actualizamos
          if (
            originalImage.name !== image.name ||
            originalImage.alt !== image.alt ||
            originalImage.description !== image.description ||
            (image.url && typeof image.url !== "string")
          ) {
            const imageData = new FormData();
            imageData.append("name", image.name);
            imageData.append("alt", image.alt);
            imageData.append("description", image.description);
            /////////////////////
            if (image.url && typeof image.url !== "string") {
              imageData.append("url", image.url[0]);
            }
            /////////////////////

            const updatedImg = await updateImage(image._id, imageData, user.token);
            imageIds.push(updatedImg.element._id);
          } else {
            imageIds.push(image._id);
          }
        } else if (image.url && typeof image.url !== "string") {
          // Si es una nueva imagen, la creamos
          const imageData = new FormData();
          imageData.append("name", image.name);
          imageData.append("url", image.url[0]);
          imageData.append("alt", image.alt);
          imageData.append("description", image.description);

          const uploadedImg = await createImage(imageData, user.token);
          imageIds.push(uploadedImg.element._id);
        } else {
          // Si no hay cambios, solo agregamos el _id
          imageIds.push(image._id);
        }
      });

      await Promise.all(imagePromises);

      formData.images = imageIds;
      formData.tours = tours;

      await updateDestination(destination_id, formData, user.token);

      toast({
        title: "Destino Actualizado.",
        description: "El destino ha sido actualizado exitosamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/profile");
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al actualizar el destino.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (!destination) {
    return <Text>Cargando...</Text>;
  }

  const handleDeleteDestinationClick = async () => {
    try {
      await deleteDestination(destination_id, user.token);
      toast({
        title: "Destino eliminado.",
        description: "El destino ha sido eliminado exitosamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/profile");
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al eliminar el destino.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="main" flex={1} p={6}>
      <Container
        maxW="container.lg"
        px={{ base: 4, md: 6 }}
        py={{ base: 12, md: 24, lg: 32 }}
      >
        <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
          <BackButton to="/profile" />
          <Heading size="lg">Actualizar Destino</Heading>
          <TourDestinationForm register={register} errors={errors} />
          <ImagesForm
            control={control}
            register={register}
            errors={errors}
            initialImages={destination.images}
          />
          <ToursCheckboxGroup
            control={control}
            register={register}
            errors={errors}
            initialTours={destination.tours}
            user={user}
          />
          <Button
            mt={4}
            size="lg"
            colorScheme="teal"
            type="submit"
            w={{ base: "100%", md: "320px" }}
          >
            Actualizar Destino
          </Button>
          <Button
            mt={12}
            size="sm"
            colorScheme="red"
            onClick={() => {
              handleDeleteDestinationClick();
            }}
            w={{ base: "100%", md: "160px" }}
            variant="outline"
          >
            Eliminar Destino
          </Button>
          <BackButton to="/profile" />
        </Stack>
      </Container>
    </Box>
  );
};

export default UpdateDestination;
