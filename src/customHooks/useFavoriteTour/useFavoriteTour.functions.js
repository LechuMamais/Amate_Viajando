// Mirar que esté ok esto
export const isTourInFavorites = (user, tour_id, destination_id) => {
  if (user && user.favouriteTours && user.favouriteTours.length>0) {
    const found = user.favouriteTours.some(
      (favTour) => {
        const favTourId = favTour.tourId._id || favTour.tourId;
        return favTourId === tour_id && favTour.destinationId === destination_id;
      }
    );
    return found;
  } else {
    return false
  }
};
