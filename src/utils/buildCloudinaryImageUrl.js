export const buildCloudinaryImageUrl = (baseUrl, width, height) => {
    return baseUrl.replace('/upload/', `/upload/w_${width},${height ? ',h_' + height : ''},c_fill,f_auto/`);
};