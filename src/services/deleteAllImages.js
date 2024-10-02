import { deleteImage } from "./api/images";

export const deleteAllImages = async (images, token) => {
  await Promise.all(
    images.map((image) => deleteImage(image._id, token))
  );
};