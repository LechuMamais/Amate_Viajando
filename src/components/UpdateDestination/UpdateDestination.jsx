import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Stack, Heading, useToast, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { getDestinationById, updateDestination } from "../../services/api/destinations";
import { createImage } from "../../services/api/images";
import TourDestinationForm from "../TourDestinationForm/TourDestinationForm";
import ImagesForm from "../ImagesForm/ImagesForm";
import BackButton from "../BackButton/BackButton";

const UpdateDestination = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { destination_id } = useParams();
  const [destination, setDestination] = useState(null);
  const toast = useToast();
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await getDestinationById(destination_id, user.token);
        setDestination(response);
        setValue("name", response.name);
        setValue("heading", response.heading);
        setValue("description", response.description);
        setValue("longDescription", response.longDescription);
        setValue("images", response.images);
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
  }, [destination_id, user.token, setValue, toast]);

  const onSubmit = async (data) => {
    try {
      const { images, ...formData } = data;
      let imageIds = [];

      for (const image of images) {
        if (image.url && typeof image.url !== "string") {
          const imageData = new FormData();
          imageData.append("name", image.name);
          imageData.append("url", image.url[0]);
          imageData.append("alt", image.alt);
          imageData.append("description", image.description);

          const uploadedImg = await createImage(imageData, user.token);
          imageIds.push(uploadedImg.element._id);
        } else {
          imageIds.push(image._id);
        }
      }

      formData.images = imageIds;

      await updateDestination(destination_id, formData, user.token);

      toast({
        title: "Destino actualizado.",
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

  return (
    <Box as="main" flex={1} p={6}>
      <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <BackButton to="/profile" />
        <Heading fontSize="xl">Actualizar Destino</Heading>
        <TourDestinationForm register={register} errors={errors} />
        <ImagesForm control={control} register={register} errors={errors} initialImages={destination.images} />
        <Button mt={4} colorScheme="teal" type="submit">
          Actualizar Destino
        </Button>
      </Stack>
    </Box>
  );
};

export default UpdateDestination;
