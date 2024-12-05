export const orderedArrayConstructor = (array) => {
    return array.map((element) => ({
        ...element.tourObj,
        order: element.order,
    }));
};
