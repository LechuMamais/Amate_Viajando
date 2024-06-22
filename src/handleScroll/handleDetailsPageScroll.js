export const handleDetailsPageScroll = () => {
    const parallaxTranslateFactor = 0.3;
    const parallaxScaleFactor = 0.0001
    const scrolled = window.scrollY;
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        carouselElement.style.height = `calc(100vh - 72px - ${scrolled * parallaxTranslateFactor}px)`;
        carouselElement.style.transform = `scale(${1 + scrolled * parallaxScaleFactor})`;
    }
}