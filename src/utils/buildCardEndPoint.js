export const buildCardEndPoint = (usingFor, obj, _id, destination_id) => {
    switch (usingFor) {
        case 'destinations': return `/destinations/${_id}`;
        case 'tours': return `/destinations/${destination_id}/tours/${_id}`;
        case 'updateDestinations': return `/update-destination/${_id}`;
        case 'updateTours': return `/update-tour/${_id}`;
        case 'favouriteTours': return `/destinations/${obj.destinationId}/tours/${_id}`;
        case 'articles': return `/articles/${_id}`;
        case 'updateArticles': return `/update-article/${_id}`;
    }
};