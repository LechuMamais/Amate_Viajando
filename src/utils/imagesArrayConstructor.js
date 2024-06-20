export const imagesArrayConstructor = (response) => {
    return response.images.map((image) => ({
        ...image.imgObj,
        order: image.order,
    }));
};

export const toursArrayConstructor = (tours) => {
    return tours.map((tour) => ({
        ...tour.tourObj,
        order: tour.order,
    }));
};