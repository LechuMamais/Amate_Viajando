import { addTourToFavorites, removeTourFromFavorites } from '../../services/api/users';

export const isTourInFavorites = (user, tour_id, destination_id) => {
  if (user && user.favouriteTours && user.favouriteTours.length > 0) {
    const found = user.favouriteTours.some(
      (favTour) => {
        const favTourId = favTour.tourId._id || favTour.tourId;
        return favTourId === tour_id && favTour.destinationId === destination_id;
      }
    );
    return found;
  } else {
    return false;
  }
};

export const showToast = (toast, status, title, description) => {
  toast({
    title,
    description,
    status,
    duration: 5000,
    isClosable: true,
  });
};


export const handleAddFavorite = async ({ user, tour_id, destination_id, setUser, toast, setIsFavorite }) => {
  if (!user || !user._id || !user.token) {
    showToast(toast, 'error', 'No has iniciado sesión', 'Debes iniciar sesión para agregar tour a favoritos');
    return;
  }

  try {
    const response = await addTourToFavorites(user._id, user.token, tour_id, destination_id);

    if (response.message === 'Tour already in favorites') {
      showToast(toast, 'info', 'Tour ya en favoritos', 'El tour ya estaba en la lista de favoritos.');
      return;
    }

    const addedFavorite = response.addedFavorite;
    setUser((prevUser) => ({
      ...prevUser,
      favouriteTours: [...prevUser.favouriteTours, addedFavorite],
    }));
    setIsFavorite(true);

    showToast(toast, 'success', 'Éxito', 'El tour fue agregado a favoritos.');
  } catch (error) {
    showToast(toast, 'error', 'Error', 'No se pudo agregar el tour a favoritos.');
  }
};

export const handleRemoveFavorite = async ({ user, tour_id, destination_id, setUser, toast, setIsFavorite }) => {
  if (!user || !user._id || !user.token) {
    showToast(toast, 'error', 'No has iniciado sesión', 'Debes iniciar sesión para eliminar tour de favoritos');
    return;
  }

  try {
    const response = await removeTourFromFavorites(user._id, user.token, tour_id, destination_id);

    if (response.message === 'Tour not found in favorites') {
      showToast(toast, 'info', 'Tour no encontrado', 'El tour no estaba en la lista de favoritos.');
      return;
    }

    const removedTour = response.removedTour;
    setUser((prevUser) => ({
      ...prevUser,
      favouriteTours: prevUser.favouriteTours.filter(
        (favTour) => favTour._id !== removedTour._id
      ),
    }));
    setIsFavorite(false);

    showToast(toast, 'success', 'Éxito', 'El tour fue eliminado de favoritos.');
  } catch (error) {
    showToast(toast, 'error', 'Error', 'No se pudo eliminar el tour de favoritos.');
  }
};
