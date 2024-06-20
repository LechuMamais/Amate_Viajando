import { orderArray } from "./orderArray";

export const checkAndOrder = (obj) => {
    if (obj.images && obj.images.length > 0) {
        obj.images = orderArray(obj.images);
    }
    if (obj.tours && obj.tours.length > 0) {
        obj.tours = orderArray(obj.tours);
    }
}