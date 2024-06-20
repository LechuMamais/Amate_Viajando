import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Stack, Heading, useToast, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { deleteTour, getTourById, updateTour } from "../../services/api/tours";
import TourDestinationForm from "../TourDestinationForm/TourDestinationForm";
import ImagesForm from "../ImagesForm/ImagesForm";
import BackButton from "../BackButton/BackButton";
import { handleImageUpdate } from "../../services/handleImageUpdate";
import MyModal from "../MyModal/MyModal";
import { imagesArrayConstructor } from "../../utils/imagesArrayConstructor";
import { orderArray } from "../../utils/orderArray";
import { deleteAllImages } from "../../services/deleteAllImages";

const UpdateTour = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { tour_id } = useParams();
  const [tour, setTour] = useState(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await getTourById(tour_id, user.token);
        const imagesArray = imagesArrayConstructor(response);
        const orderedImagesArray = orderArray(imagesArray);

        setTour({ ...response, images: orderedImagesArray });

        setValue("name", response.name);
        setValue("heading", response.heading);
        setValue("description", response.description);
        setValue("longDescription", response.longDescription);
        setValue("images", imagesArray);
      } catch (error) {
        toast({
          title: "Error",
          description: "No se pudo cargar el tour.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchTour();
  }, [tour_id, user.token, setValue, toast]);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setLoadingSubmit(true);
    try {
      const { images, ...formData } = data;
      const imageIds = await handleImageUpdate(images, tour, user.token);
      formData.images = imageIds;
      await updateTour(tour_id, formData, user.token);

      toast({
        title: "Tour actualizado.",
        description: "El tour ha sido actualizado exitosamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/profile");
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al actualizar el tour.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoadingSubmit(false);
  };

  const handleDeleteTourButton = async () => {
    setLoadingSubmit(true);
    try {
      await deleteTour(tour_id, user.token);
      toast({
        title: "Tour eliminado.",
        description: "El tour ha sido eliminado exitosamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/profile");
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al eliminar el tour.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoadingSubmit(false);
  };

  const handleDeleteAllClick = async () => {
    setLoadingSubmit(true);
    await deleteAllImages(tour.images, user.token);
    await handleDeleteTourButton();
    setLoadingSubmit(false);
  };

  if (!tour) {
    return <Text>Cargando...</Text>;
  }

  return (
    <Box as="main" flex={1} p={6}>
      <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <BackButton to="/profile" />
        <Heading size="lg">Actualizar Tour</Heading>
        <TourDestinationForm register={register} errors={errors} />
        <ImagesForm
          control={control}
          register={register}
          errors={errors}
          tour_id={tour_id}
          usingFor="tour"
        />

        {loadingSubmit && (
          <Button
            isLoading
            loadingText="Actualizando"
            spinnerPlacement="start"
            mt={4}
            size="lg"
            colorScheme="teal"
            type="submit"
            w={{ base: "100%", md: "320px" }}
          ></Button>
        )}
        {!loadingSubmit && (
          <Button
            mt={4}
            size="lg"
            colorScheme="teal"
            type="submit"
            w={{ base: "100%", md: "320px" }}
          >
            Actualizar Tour
          </Button>
        )}
        <MyModal
          heading="Confirmar eliminación"
          question="¿Estás seguro de que deseas eliminar este tour?"
          text="¿Quieres eliminar tambien las imagenes de la base de datos?"
          onAcceptClick={handleDeleteTourButton}
          buttonText="Eliminar tour"
          type="delete"
          modalMainButtonText="Eliminar sólo el tour"
        >
          <Button
            onClick={handleDeleteAllClick}
            mt={8}
            size="md"
            colorScheme="red"
            w={{ base: "100%", md: "280px" }}
            mb={8}
          >
            Borrar todo
          </Button>
        </MyModal>
        <BackButton to="/profile" />
      </Stack>
    </Box>
  );
};

export default UpdateTour;
