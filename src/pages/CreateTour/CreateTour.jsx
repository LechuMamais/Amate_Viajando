import { useForm } from 'react-hook-form';
import { Button, Stack, Heading, useToast, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import BackButton from '../../components/BackButton/BackButton';
import TourDestinationForm from '../../components/TourDestinationForm/TourDestinationForm';
import ImagesForm from '../../components/ImagesForm/ImagesForm';
import { useContext } from 'react';
import { handleCreateTourDestinationSubmit } from '../../utils/handleCreateTourDestinationSubmit';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';

const CreateTour = () => {
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
      name: '',
      heading: '',
      description: '',
      longDescription: '',
      images: [{ name: '', alt: '', description: '', url: null }],
    },
  });

  return (
    <Container maxW='container.lg' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <Stack
        as='form'
        spacing={4}
        onSubmit={handleSubmit((data) =>
          handleCreateTourDestinationSubmit(data, user.token, toast, 'tour', navigate, reloadDestinations),
        )}
      >
        <BackButton to='/profile' />
        <Heading fontSize='xl'>Nuevo Tour</Heading>
        <TourDestinationForm register={register} errors={errors} />
        <ImagesForm control={control} register={register} errors={errors} />
        <Button mt={4} colorScheme='teal' type='submit'>
          Crear Tour
        </Button>
        <BackButton to='/profile' />
      </Stack>
    </Container>
  );
};

export default CreateTour;
