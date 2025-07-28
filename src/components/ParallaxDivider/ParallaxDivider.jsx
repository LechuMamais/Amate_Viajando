import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

const ParallaxDivider = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallax = document.querySelector('.parallax-image');
      if (parallax) {
        parallax.style.backgroundPosition = `center calc(${scrollY * 0.2}px + 100lvw)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      className='HomeImageContainer'
      w='100%'
      h={{ base: '60px', sm: '80px', md: '100px', lg: '100px' }}
      overflow='hidden'
      position='relative'
    >
      <Box
        position='absolute'
        bottom='0'
        left='0'
        w='100%'
        h='200px'
        bgImage="url('/beach.jpg')"
        bgSize='cover'
        bgPosition='center 100lvw'
        opacity={0.6}
        className='parallax-image'
        transition='background-position 0.05s ease-out'
      />
    </Box>
  );
};

export default ParallaxDivider;
