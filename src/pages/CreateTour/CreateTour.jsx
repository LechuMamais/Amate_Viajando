import { useForm } from 'react-hook-form';
import { Button, Stack, Heading, useToast, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import BackButton from '../../components/BackButton/BackButton';
import ImagesForm from '../../components/ImagesForm/ImagesForm';
import { useContext, useState } from 'react';
import { handleCreateTourDestinationSubmit } from '../../utils/handleCreateTourDestinationSubmit';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import TourDestinationLangTab from '../../components/TourDestinationLangTab/TourDestinationLangTab';
import { defaultLangValues } from '../../utils/defaultLangValues';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

const CreateTour = () => {
  const { user } = useContext(UserContext);
  const { reloadDestinations } = useContext(AllDestinationsContext);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...defaultLangValues,
      images: [{ name: '', alt: '', description: '', url: null }],
    },
  });

  const handleClickSubmit = () => {
    setIsSaving(true);
    handleSubmit((data) =>
      handleCreateTourDestinationSubmit(data, user.token, toast, 'tour', navigate, reloadDestinations)
    )().finally(() => setIsSaving(false));
  };

  return (
    <Container maxW='container.lg' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <Stack
        as='form'
        spacing={4}
        onSubmit={(e) => {e.preventDefault();}}
      >
        <BackButton to='/profile' />
        <Heading fontSize='xl'>Nuevo Tour</Heading>
        <TourDestinationLangTab register={register} errors={errors} />
        <ImagesForm control={control} register={register} errors={errors} />
        <Button mt={4} colorScheme='teal' type='submit' onClick={handleClickSubmit}>
          Crear Tour
        </Button>
        <BackButton to='/profile' />
      </Stack>
      <LoadingModal isOpen={isSaving} onClose={() => setIsSaving(false)} />
    </Container>
  );
};

export default CreateTour;
