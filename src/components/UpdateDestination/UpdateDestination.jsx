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
import {
  imagesArrayConstructor,
  toursArrayConstructor,
} from "../../utils/imagesArrayConstructor";
import { fetchSetTours } from "../../services/fetchSetTours";
import MyModal from "../MyModal/MyModal";
import { deleteImage } from "../../services/api/images";

const UpdateDestination = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { destination_id } = useParams();
  const [destination, setDestination] = useState(null);
  const [allTours, setAllTours] = useState([]);
  const [loading, setLoading] = useState(true);
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
    fetchSetTours(setAllTours, setLoading);
  }, []);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await getDestinationById(destination_id);
        const imagesArray = imagesArrayConstructor(response);

        setDestination({ ...response, images: imagesArray });
        setValue("name", response.name);
        setValue("heading", response.heading);
        setValue("description", response.description);
        setValue("longDescription", response.longDescription);
        setValue("images", imagesArray);
        setValue(
          "tours",
          response.tours.map((tour) => ({
            tourObj: tour.tourObj._id,
            order: tour.order || 100,
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
    setLoadingSubmit(true);
    try {
      const { images, tours, ...formData } = data;

      const imageIds = await handleImageUpdate(images, destination, user.token);

      formData.images = imageIds;

      formData.tours = tours.map((tour) => ({
        tourObj: tour.tourObj,
        order:
          tour.order !== undefined && tour.order !== null ? tour.order : 100,
      }));

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
    setLoadingSubmit(false);
  };

  if (!destination) {
    return <Text>Cargando...</Text>;
  }

  const handleDeleteDestinationButton = async () => {
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

  const deleteAllImages = async () => {
    await destination.images.forEach(image=>{
      deleteImage(image._id, user.token)
    });
  };

  const handleDeleteAllClick = async () => {
    await deleteAllImages();
    await handleDeleteDestinationButton()
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
            loading={loading}
            allTours={allTours}
            control={control}
            errors={errors}
            initialTours={toursArrayConstructor(destination.tours)}
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
              Actualizar Destino
            </Button>
          )}

          <MyModal
            heading="Confirmar eliminación"
            question="¿Estás seguro de que deseas eliminar este destino?"
            text="¿Quieres eliminar tambien las imagenes de la base de datos?"
            onAcceptClick={handleDeleteDestinationButton}
            buttonText="Eliminar destino"
            type="delete"
            modalMainButtonText="Eliminar sólo el destino"
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
      </Container>
    </Box>
  );
};

export default UpdateDestination;
