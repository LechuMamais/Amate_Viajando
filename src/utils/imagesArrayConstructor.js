export const imagesArrayConstructor = (response) => {
    return response.images.map((image) => ({
        ...image.imgObj,
        order: image.order,
    }));
};