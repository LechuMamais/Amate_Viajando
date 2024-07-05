export const handleHomeScroll = () => {
    const parallaxTranslateFactor = -0.04;
    const parallaxScaleFactor = 0.0002
    const scrolled = window.scrollY;
    const heroElement = document.querySelector('.hero-text-container');
    if (heroElement) {
        heroElement.style.transform = `translateY(${scrolled * parallaxTranslateFactor}px) scale(${1 + scrolled * parallaxScaleFactor})`;
    }
};