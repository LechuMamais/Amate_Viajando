export const buildCloudinaryCardUrl = (baseUrl, width) => {
    return baseUrl.replace('/upload/', `/upload/w_${width},c_limit/`);
};