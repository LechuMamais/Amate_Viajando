import { deleteDestination, updateDestination } from '../../services/api/destinations';
import { handleImageUpdate } from '../../services/handleImageUpdate';

export const submitHandler = async (data, destination, token, destination_id, toast, reloadDestinations, navigate) => {
    try {
        const { images, tours, ...formData } = data;
        const imageIds = await handleImageUpdate(
            images,
            destination,
            token
        );
        formData.images = imageIds;

        formData.tours = tours.map((tour) => ({
            tourObj: tour.tourObj,
            order:
                tour.order !== undefined && tour.order !== null ? tour.order : 100,
        }));

        await updateDestination(destination_id, formData, token);

        toast({
            title: 'Destino Actualizado.',
            description: 'El destino ha sido actualizado exitosamente.',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
        reloadDestinations();
        navigate('/profile');
    } catch (error) {
        toast({
            title: 'Error',
            description: 'Hubo un error al actualizar el destino.',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
    }
};

export const handleDeleteDestination = async (
    destination_id,
    token,
    toast,
    reloadDestinations,
    navigate
) => {
    try {
        await deleteDestination(destination_id, token);
        toast({
            title: 'Destino eliminado.',
            description: 'El destino ha sido eliminado exitosamente.',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
        reloadDestinations();
        navigate('/profile');
    } catch (error) {
        toast({
            title: 'Error',
            description: 'Hubo un error al eliminar el destino.',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
    }
};