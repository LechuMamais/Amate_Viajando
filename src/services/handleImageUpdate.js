import { updateImage, createImage } from './api/images';

export const handleImageUpdate = async (images, destination, token) => {
  console.log(destination);
  const imageIds = [];

  const imagePromises = images.map(async (image) => {
    console.log(image._id);
    if (image._id) {
      const originalImage = destination.images.find(img => img._id === image._id || img.imgObj._id === image._id);
      console.log(originalImage);
      if (
        originalImage.name !== image.name ||
        originalImage.alt !== image.alt ||
        originalImage.description !== image.description ||
        (image.url && typeof image.url !== 'string')
      ) {
        const imageData = new FormData();
        imageData.append('name', image.name);
        imageData.append('alt', image.alt);
        imageData.append('description', image.description);

        if (image.url && typeof image.url !== 'string') {
          imageData.append('url', image.url[0]);
        }

        const updatedImg = await updateImage(image._id, imageData, token);

        imageIds.push({ order: image.order, imgObj: updatedImg.element._id });
      } else {
        imageIds.push({ order: image.order, imgObj: image._id });
      }
    } else if (image.url && typeof image.url !== 'string') {
      const imageData = new FormData();
      imageData.append('name', image.name);
      imageData.append('url', image.url[0]);
      imageData.append('alt', image.alt);
      imageData.append('description', image.description);

      const uploadedImg = await createImage(imageData, token);
      imageIds.push({ order: image.order, imgObj: uploadedImg.element._id });
    } else {
      imageIds.push({ order: image.order, imgObj: image._id });
    }
  });

  await Promise.all(imagePromises);
  return imageIds;
};