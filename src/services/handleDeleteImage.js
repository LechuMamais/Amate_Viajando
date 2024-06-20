import { deleteImageFromDestination } from "./api/destinations";
import { deleteImage } from "./api/images";
import { deleteImageFromTour } from "./api/tours";

export const handleDeleteImage = async (index, item, usingFor, remove, tour_id, destination_id, token) => {
    if (item._id) {
        if (usingFor == "tour") {
            await deleteImageFromTour(item._id, tour_id, token);
        } else if (usingFor == "destination") {
            await deleteImageFromDestination(item._id, destination_id, token);
        }
        await deleteImage(item._id, token);
    }
    remove(index);
};