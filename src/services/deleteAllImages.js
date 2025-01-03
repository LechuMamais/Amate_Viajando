import { deleteImage } from './api/images';

export const deleteAllImages = async (images, token) => {
  console.log('images:', images);
  await Promise.all(
    images.map((image) => {
      console.log('image:', image);
      deleteImage(image?.imgObj?._id, token);
      //deleteImage(image?._id, token);
    })
  );
};