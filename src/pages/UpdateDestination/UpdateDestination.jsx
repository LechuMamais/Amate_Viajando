import { useForm } from 'react-hook-form';
import { Button, Stack, Heading, Text, Container } from '@chakra-ui/react';
import ImagesForm from '../../components/ImagesForm/ImagesForm';
import BackButton from '../../components/BackButton/BackButton';
import ToursCheckboxGroup from '../../components/ToursCheckBoxGroup/ToursCheckBoxGroup';
import MyModal from '../../components/MyModal/MyModal';
import { useUpdateDestination } from '../../customHooks/useUpdateDestination/useUpdateDestination';
import { orderedArrayConstructor } from '../../utils/orderedArrayConstructor';
import TourDestinationLangTab from '../../components/TourDestinationLangTab/TourDestinationLangTab';
import CountrySelectorForm from '../../components/CountrySelectorForm/CountrySelectorForm';
import { useMemo, useState } from 'react';
import { prevImagesArrayConstructor } from '../../utils/prevImagesArrayConstructor';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

const UpdateDestination = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const [isSaving, setIsSaving] = useState(false);
  const { destination, allTours, loadingSubmit, onSubmit, handleDeleteDestinationButton, handleDeleteAllClick } =
    useUpdateDestination(setValue);

  const prevImages = useMemo(() => prevImagesArrayConstructor(destination?.images), [destination?.images]);

  if (!destination) {
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
    <Container maxW='container.lg' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <Stack as='form' spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <BackButton to='/profile' />
        <Heading size='lg'>Actualizar Destino</Heading>
        <TourDestinationLangTab register={register} errors={errors} setValue={setValue} defaultValues={destination} />
        <CountrySelectorForm errors={errors} setValue={setValue} defaultValues={destination} />
        <ImagesForm
          control={control}
          register={register}
          errors={errors}
          usingFor='destination'
          prevImages={prevImages}
        />
        <ToursCheckboxGroup
          allTours={allTours}
          control={control}
          errors={errors}
          initialTours={orderedArrayConstructor(destination.tours)}
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
      <LoadingModal isOpen={isSaving} />
    </Container>
  );
};

export default UpdateDestination;
