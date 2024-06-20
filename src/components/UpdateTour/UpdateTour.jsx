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

const UpdateTour = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { tour_id } = useParams();
  const [tour, setTour] = useState(null);
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

  const onSubmit = async (data) => {
    try {
      //console.log(data);
      const { images, ...formData } = data;
      //console.log(formData);
      //console.log(images);

      const imageIds = await handleImageUpdate(images, tour, user.token);

      formData.images = imageIds;
      //console.log(formData.images);

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
  };

  const handleDeleteTourClick = async () => {
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
          initialImages={tour.images}
          tour_id={tour_id}
        />
        <Button
          mt={4}
          size="lg"
          colorScheme="teal"
          type="submit"
          w={{ base: "100%", md: "320px" }}
        >
          Actualizar Tour
        </Button>
        <MyModal
          heading="Confirmar eliminación"
          text="¿Estás seguro de que deseas eliminar este tour? Si quieres eliminar las imagenes de la base de datos debes hacerlo manualmente antes de eliminar el tour."
          onAcceptClick={handleDeleteTourClick}
          buttonText="Eliminar tour"
        />
      </Stack>
    </Box>
  );
};

export default UpdateTour;
