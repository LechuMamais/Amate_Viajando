import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Stack, Heading, useToast, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import BackButton from '../../components/BackButton/BackButton';
import ImagesForm from '../../components/ImagesForm/ImagesForm';
import { handleCreateTourDestinationSubmit } from '../../utils/handleCreateTourDestinationSubmit';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import { defaultLangValues } from '../../utils/defaultLangValues';
import TourDestinationLangTab from '../../components/TourDestinationLangTab/TourDestinationLangTab';
import CountrySelectorForm from '../../components/CountrySelectorForm/CountrySelectorForm';

const CreateDestination = () => {
  const { user } = useContext(UserContext);
  const { reloadDestinations } = useContext(AllDestinationsContext);
  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...defaultLangValues,
      country_name: 'Argentina',
      country_iso2code: 'AR',
      images: [{ name: '', alt: '', description: '', url: null }],
      tours: [],
    },
  });

  return (
    <Container maxW='container.lg' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <Stack
        as='form'
        spacing={4}
        onSubmit={handleSubmit((data) =>
          handleCreateTourDestinationSubmit(data, user.token, toast, 'destination', navigate, reloadDestinations),
        )}
      >
        <BackButton to='/profile' />
        <Heading fontSize='xl'>Nuevo Destino</Heading>
        <TourDestinationLangTab register={register} errors={errors} country={true} />
        <CountrySelectorForm errors={errors} setValue={setValue} />
        <ImagesForm control={control} register={register} errors={errors} />
        <Button mt={4} colorScheme='teal' type='submit'>
          Crear Destino
        </Button>
        <BackButton to='/profile' />
      </Stack>
    </Container>
  );
};

export default CreateDestination;
