export const buildCardEndPoint = (usingFor, obj, _id, destination_id) => {
    if (usingFor === "destinations") {
        return `/destinations/${_id}`;
    } else if (usingFor === "tours") {
        return `/destinations/${destination_id}/tours/${_id}`;
    } else if (usingFor === "updateDestinations") {
        return `/update-destination/${_id}`;
    } else if (usingFor === "updateTours") {
        return `/update-tour/${_id}`;
    } else if (usingFor === "favouriteTours") {
        return `/destinations/${obj.destinationId}/tours/${_id}`
    }
};