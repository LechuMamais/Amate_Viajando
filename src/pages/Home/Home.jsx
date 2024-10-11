import './Home.css';
import { Box, Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import { Lumiflex } from 'uvcanvas';
import HeroText from '../../components/HeroText/HeroText';

const Home = () => {
  const heroImageUrlSmall = '/assets/Logo_Acuarelas_redondo_248.png';
  const heroImageUrlMedium = '/assets/Logo_Acuarelas_redondo_368.png';
  const heroImageUrlLarge = '/assets/Logo_Acuarelas_redondo_460.png';
  const heroImageUrlXLarge = '/assets/Logo_Acuarelas_redondo_520.png';

  const heroImageUrl = useBreakpointValue({
    base: heroImageUrlSmall,
    sm: heroImageUrlMedium,
    lg: heroImageUrlLarge,
    xl: heroImageUrlXLarge,
  });

  return (
    <Box as='main' flex='1'>
      <Box
        minHeight='100lvh'
        className='hero-background'
        w='100%'
        h='100%'
        position='absolute'
        top='0px'
        left='0px'
        opacity='0.9'
      >
        <Lumiflex />
      </Box>
      <Flex
        className='hero'
        direction='column'
        justifyContent={{ base: 'space-between', md: 'center' }}
        w='100%'
        minH='100lvh'
        maxH='1400px'
        mt='-72px'
        gap={{ base: 0, md: 'clamp(2rem, 4.5vh, 24rem)' }}
        mx='auto'
        alignItems='center'
        pb={{ base: 0, md: 4 }}
      >
        <Flex
          flex={1}
          className='hero-image-wrapper'
          direction='column'
          alignItems='center'
          justifyContent='center'
          w='100%'
          h='100%'
        >
          <Flex
            className='hero-image-container'
            direction='column'
            alignItems='center'
            justifyItems='center'
            w='clamp(300px, 60vmin, 1024px)'
            p={4}
          >
            <Image
              bgColor='#FFFFFF'
              id='Amate_Viajando_Hero_img'
              src={heroImageUrl}
              alt='Amate_Viajando_Logo'
              objectFit='cover'
              zIndex='1'
              opacity='0.8'
              mt={{ base: 0, md: 8 }}
              border='10px solid #FFFFFF'
              borderRadius='100%'
            />
          </Flex>
        </Flex>
        <HeroText />
      </Flex>
    </Box>
  );
};

export default Home;
