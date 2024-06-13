import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Stack, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { createImage } from "../../services/api/images";
import { createDestination } from "../../services/api/destinations";
import BackButton from "../BackButton/BackButton";
import TourDestinationForm from "../TourDestinationForm/TourDestinationForm";
import ImagesForm from "../ImagesForm/ImagesForm";
import { handleCreateTourDestinationSubmit } from "../../utils/handleCreateTourDestinationSubmit";

const CreateDestination = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      heading: "",
      description: "",
      longDescription: "",
      images: [{ name: "", alt: "", description: "", url: null }],
      tours: [],
    },
  });

  const onSubmit = async (data) => {
    handleCreateTourDestinationSubmit(data, user.token, toast, "destination", navigate)
  };

  return (
    <Box as="main" flex={1} p={6}>
      <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <BackButton to="/profile" />
        <Heading fontSize="xl">Nuevo Destino</Heading>
        <TourDestinationForm register={register} errors={errors} />
        <ImagesForm control={control} register={register} errors={errors} />
        <Button mt={4} colorScheme="teal" type="submit">
          Crear Destino
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateDestination;
