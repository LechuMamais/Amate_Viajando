import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Stack, Heading, Text, Container } from '@chakra-ui/react';
import ImagesForm from '../../components/ImagesForm/ImagesForm';
import BackButton from '../../components/BackButton/BackButton';
import MyModal from '../../components/MyModal/MyModal';
import { useUpdateTour } from '../../customHooks/useUpdateTour/useUpdateTour';
import TourDestinationLangTab from '../../components/TourDestinationLangTab/TourDestinationLangTab';
import { prevImagesArrayConstructor } from '../../utils/prevImagesArrayConstructor';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

const UpdateTour = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();
  const { tour, loading, loadingSubmit, onSubmit, handleDeleteTourButton, handleDeleteAllClick } = useUpdateTour();
  const [isSaving, setIsSaving] = useState(false);

  const prevImages = useMemo(() => prevImagesArrayConstructor(tour?.images), [tour?.images]);

  if (!tour || loading) {
    return <Text>Cargando...</Text>;
  }

    const onSubmitClick = handleSubmit(async (formData) => {
    setIsSaving(true);
    try {
      await onSubmit(formData); // ✅ ahora recibe los datos correctos
    } finally {
      setIsSaving(false);
    }
  });

  return (
    <Container maxW='container.lg' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }} p={6}>
      <Stack as='form' spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <BackButton to='/profile' />
        <Heading size='lg'>Actualizar Tour</Heading>
        <TourDestinationLangTab register={register} errors={errors} setValue={setValue} defaultValues={tour} />
        <ImagesForm
          control={control}
          register={register}
          errors={errors}
          tour_id={tour._id}
          usingFor='tour'
          prevImages={prevImages}
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
          onClick={onSubmitClick}
        >
          {loadingSubmit ? 'Actualizando' : 'Actualizar Tour'}
        </Button>

        <MyModal
          heading='Confirmar eliminación'
          question='¿Estás seguro de que deseas eliminar este tour?'
          text='¿Quieres eliminar también las imágenes de la base de datos?'
          onAcceptClick={handleDeleteTourButton}
          buttonText='Eliminar tour'
          type='delete'
          modalMainButtonText='Eliminar sólo el tour'
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
      <LoadingModal isOpen={isSaving} />
    </Container>
  );
};

export default UpdateTour;
