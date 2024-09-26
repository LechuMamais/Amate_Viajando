export const isTourInFavorites = (user, tour_id, destination_id) => {
    const found = user.favouriteTours.some(
        (favTour) => favTour.tourId._id === tour_id && favTour.destinationId === destination_id
    );
    return found
}