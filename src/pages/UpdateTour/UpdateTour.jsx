// components/UpdateTour/UpdateTour.js
import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Stack, Heading, Text } from "@chakra-ui/react";
import TourDestinationForm from "../../components/TourDestinationForm/TourDestinationForm";
import ImagesForm from "../../components/ImagesForm/ImagesForm";
import BackButton from "../../components/BackButton/BackButton";
import MyModal from "../../components/MyModal/MyModal";
import { useUpdateTour } from "../../customHooks/useUpdateTour/useUpdateTour";

const UpdateTour = () => {
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm();
  const {
    tour,
    loadingSubmit,
    onSubmit,
    handleDeleteTourButton,
    handleDeleteAllClick,
  } = useUpdateTour(setValue);

  if (!tour) {
    return <Text>Cargando...</Text>;
  }

  return (
    <Box as="main" flex={1} p={6}>
      <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <BackButton to="/profile" />
        <Heading size="lg">Actualizar Tour</Heading>
        <TourDestinationForm register={register} errors={errors} />
        <ImagesForm control={control} register={register} errors={errors} tour_id={tour._id} usingFor="tour" />

        <Button
          isLoading={loadingSubmit}
          loadingText="Actualizando"
          spinnerPlacement="start"
          mt={4}
          size="lg"
          colorScheme="teal"
          type="submit"
          w={{ base: "100%", md: "320px" }}
        >
          {loadingSubmit ? "Actualizando" : "Actualizar Tour"}
        </Button>

        <MyModal
          heading="Confirmar eliminación"
          question="¿Estás seguro de que deseas eliminar este tour?"
          text="¿Quieres eliminar también las imágenes de la base de datos?"
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
