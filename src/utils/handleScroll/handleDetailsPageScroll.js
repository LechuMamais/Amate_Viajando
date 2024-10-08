export const handleDetailsPageScroll = () => {
    const headerHeight = '72px';
    const parallaxTranslateFactor = 0.3;
    const parallaxScaleFactor = 0.0001;
    const parallaxBrightnessFactor = 0.05;
    const parallaxBlurFactor = 0.0075;
    const scrolled = window.scrollY;
    const carouselElement = document.querySelector('.carousel');
    const blurScrollDelay = 400;
    //console.log(scrolled);
    if (carouselElement) {
        carouselElement.style.height = `calc(100vh - ${headerHeight} - ${scrolled * parallaxTranslateFactor}px)`;
        carouselElement.style.transform = `scale(${1 + scrolled * parallaxScaleFactor})`;
        carouselElement.style.filter = `brightness(${100 + scrolled * parallaxBrightnessFactor}%) blur(${scrolled >= blurScrollDelay ? (scrolled - blurScrollDelay) * parallaxBlurFactor : 0}px)`;
    }
};