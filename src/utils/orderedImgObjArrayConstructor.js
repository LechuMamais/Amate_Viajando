export const orderedImgObjArrayConstructor = (array) => {
    return array.map((element) => ({
        ...element.imgObj,
        order: element.order,
    }));
};