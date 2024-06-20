import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Stack,
  Heading,
  useToast,
  Text,
  Container,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import {
  deleteDestination,
  getDestinationById,
  updateDestination,
} from "../../services/api/destinations";
import TourDestinationForm from "../TourDestinationForm/TourDestinationForm";
import ImagesForm from "../ImagesForm/ImagesForm";
import BackButton from "../BackButton/BackButton";
import ToursCheckboxGroup from "../ToursCheckBoxGroup/ToursCheckBoxGroup";
import { handleImageUpdate } from "../../services/handleImageUpdate";
import { imagesArrayConstructor } from "../../utils/imagesArrayConstructor";
import { orderArray } from "../../utils/orderArray";

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
        const imagesArray = imagesArrayConstructor(response);
        const orderedImagesArray = orderArray(imagesArray);

        setDestination({ ...response, images: orderedImagesArray });
        setValue("name", response.name);
        setValue("heading", response.heading);
        setValue("description", response.description);
        setValue("longDescription", response.longDescription);
        setValue("images", orderedImagesArray);

        const orderedTours = orderArray(response.tours);
        setValue(
          "tours",
          orderedTours.map((tour) => ({
            tourObj: tour.tourObj._id,
            order: tour.order || null,
          }))
        );
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
  }, [destination_id, setValue, toast]);

  const onSubmit = async (data) => {
    try {
      const { images, tours, ...formData } = data;

      const imageIds = await handleImageUpdate(images, destination, user.token);

      formData.images = imageIds;

      const toursArray = tours.map((tour) => ({
        tourObj: tour.tourObj,
        order: tour.order || null,
      }));

      console.log(toursArray);

      formData.tours = toursArray;

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
            errors={errors}
            initialTours={destination.tours}
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
            onClick={handleDeleteDestinationClick}
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
