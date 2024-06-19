export const orderImagesArray = (imagesArray) => {
    return imagesArray.sort((a, b) => a.order - b.order);
};