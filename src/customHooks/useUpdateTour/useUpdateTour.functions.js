import { deleteTour, updateTour } from '../../services/api/tours';
import { handleImageUpdate } from '../../services/handleImageUpdate';

export const submitHandler = async (data, token, tour, tour_id, toast, navigate) => {
  try {
    const { images, ...formData } = data;
    const imageIds = await handleImageUpdate(images, tour, token);
    formData.images = imageIds;
    await updateTour(tour_id, formData, token);

    toast({
      title: 'Tour actualizado.',
      description: 'El tour ha sido actualizado exitosamente.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    navigate('/profile');
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Hubo un error al actualizar el tour.',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }
};

export const handleDeteteTour = async (tour_id, token, toast, navigate) => {
  try {
    await deleteTour(tour_id, token);
    toast({
      title: 'Tour eliminado.',
      description: 'El tour ha sido eliminado exitosamente.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    navigate('/profile');
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Hubo un error al eliminar el tour.',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }
};