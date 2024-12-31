export const prevImagesArrayConstructor = (images) => {
    return images?.map((img) => ({
        name: img.imgObj.name,
        description: img.imgObj.description,
        alt: img.imgObj.alt,
        url: img.imgObj.url,
        order: img.order,
        _id: img.imgObj._id,
    }));
};