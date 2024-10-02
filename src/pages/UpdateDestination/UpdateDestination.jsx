import { useForm } from 'react-hook-form';
import { Box, Button, Stack, Heading, Text, Container } from '@chakra-ui/react';
import TourDestinationForm from '../../components/TourDestinationForm/TourDestinationForm';
import ImagesForm from '../../components/ImagesForm/ImagesForm';
import BackButton from '../../components/BackButton/BackButton';
import ToursCheckboxGroup from '../../components/ToursCheckBoxGroup/ToursCheckBoxGroup';
import MyModal from '../../components/MyModal/MyModal';
import { useUpdateDestination } from '../../customHooks/useUpdateDestination/useUpdateDestination';
import { toursArrayConstructor } from '../../utils/imagesArrayConstructor';

const UpdateDestination = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const {
    destination,
    allTours,
    loading,
    loadingSubmit,
    onSubmit,
    handleDeleteDestinationButton,
    handleDeleteAllClick,
  } = useUpdateDestination(setValue);

  if (!destination) {
    return <Text>Cargando...</Text>;
  }

  return (
    <Box as='main' flex={1} p={6}>
      <Container maxW='container.lg' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
        <Stack as='form' spacing={4} onSubmit={handleSubmit(onSubmit)}>
          <BackButton to='/profile' />
          <Heading size='lg'>Actualizar Destino</Heading>
          <TourDestinationForm register={register} errors={errors} />
          <ImagesForm control={control} register={register} errors={errors} usingFor='destination' />
          <ToursCheckboxGroup
            loading={loading}
            allTours={allTours}
            control={control}
            errors={errors}
            initialTours={toursArrayConstructor(destination.tours)}
          />
          <Button
            isLoading={loadingSubmit}
            loadingText='Actualizando'
            spinnerPlacement='start'
            mt={4}
            size='lg'
            colorScheme='teal'
            type='submit'
            w={{ base: '100%', md: '320px' }}
          >
            {loadingSubmit ? 'Actualizando' : 'Actualizar Destino'}
          </Button>

          <MyModal
            heading='Confirmar eliminación'
            question='¿Estás seguro de que deseas eliminar este destino?'
            text='¿Quieres eliminar también las imágenes de la base de datos?'
            onAcceptClick={handleDeleteDestinationButton}
            buttonText='Eliminar destino'
            type='delete'
            modalMainButtonText='Eliminar sólo el destino'
          >
            <Button
              onClick={handleDeleteAllClick}
              mt={8}
              size='md'
              colorScheme='red'
              w={{ base: '100%', md: '280px' }}
              mb={8}
            >
              Borrar todo
            </Button>
          </MyModal>
          <BackButton to='/profile' />
        </Stack>
      </Container>
    </Box>
  );
};

export default UpdateDestination;
