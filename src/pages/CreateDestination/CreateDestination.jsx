import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Stack, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import BackButton from "../../components/BackButton/BackButton";
import TourDestinationForm from "../../components/TourDestinationForm/TourDestinationForm";
import ImagesForm from "../../components/ImagesForm/ImagesForm";
import { handleCreateTourDestinationSubmit } from "../../utils/handleCreateTourDestinationSubmit";
import { AllDestinationsContext } from "../../providers/AllDestinationsProvider";

const CreateDestination = () => {
  const { user } = useContext(UserContext);
  const { reloadDestinations } = useContext(AllDestinationsContext);
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

  return (
    <Box as='main' flex={1} p={6}>
      <Stack
        as='form'
        spacing={4}
        onSubmit={handleSubmit((data) =>
          handleCreateTourDestinationSubmit(data, user.token, toast, "destination", navigate, reloadDestinations),
        )}
      >
        <BackButton to='/profile' />
        <Heading fontSize='xl'>Nuevo Destino</Heading>
        <TourDestinationForm register={register} errors={errors} />
        <ImagesForm control={control} register={register} errors={errors} />
        <Button mt={4} colorScheme='teal' type='submit'>
          Crear Destino
        </Button>
        <BackButton to='/profile' />
      </Stack>
    </Box>
  );
};

export default CreateDestination;
