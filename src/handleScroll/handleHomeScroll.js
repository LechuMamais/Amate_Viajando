export const handleHomeScroll = () => {
    const parallaxTranslateFactor = -0.25;
    const parallaxScaleFactor = 0.00025
    const scrolled = window.scrollY;
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
        heroElement.style.transform = `translateY(${scrolled * parallaxTranslateFactor}px) scale(${1 + scrolled * parallaxScaleFactor})`;
    }
};