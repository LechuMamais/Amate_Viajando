export const orderArray = (array) => {
    return array.sort((a, b) => a.order - b.order);
};