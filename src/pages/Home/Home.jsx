import './Home.css';
import { Box, Button, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Lumiflex } from 'uvcanvas';
import HeroText from '../../components/HeroText/HeroText';
import MyLink from '../../components/MyLink/MyLink';
import Destinations from '../Destinations/Destinations';

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

  const { t } = useTranslation('Home');


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallax = document.querySelector('.parallax-image');
      if (parallax) {
        parallax.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <Box
        className='hero-background'
        overflow='hidden'
        w='100%'
        h='40lvh'
        position='absolute'
        top='0px'
        left='0px'
        opacity='0.8'
        borderRadius='0% 0% 40% 60% / 0% 0% 41% 47% '
      >
        <Lumiflex />
      </Box>

      <Flex
        className='hero'
        direction='column'
        justifyContent={{ base: 'space-between', md: 'center' }}
        w='100%'
        h="42lvh"
        mt='-132px'
        mb='0px'
        p='80px'
        gap={{ base: 1, md: 'clamp(2rem, 4.5vh, 24rem)' }}
        mx='auto'
        alignItems='center'
        pb={{ base: 0, md: 4 }}
      >
        <Flex
          className='hero-image-wrapper'
          direction='column'
          alignItems='center'
          justifyContent='center'
          w='50%'
        >
          <Flex
            className='hero-image-container'
            direction='column'
            alignItems='center'
            justifyItems='center'
            w='clamp(150px, 30vmin, 1024px)'
            p={2}
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
              border='2px solid #FFFFFF'
              borderRadius='100%'
            />
          </Flex>
        </Flex>
        <HeroText />
      </Flex>

      <Flex pt='10lvh' my='4' direction='column' alignItems='center' justifyContent='center'>
        <Text
          className='yeseva-one-regular'
          color='gray.700'
          fontSize={{ base: 'sm', sm: 'md' }}
          maxW={{ base: '300px', sm: '450px', md: '660px', lg: '800x' }}
          lineHeight='relaxed'
          textAlign='center'
          mx='auto'
          mb={{ base: 4, md: 6 }}
          letterSpacing='1.1px'
        >
          {t('HeroSubtitle')}
        </Text>

        <MyLink to='https://wa.me/5492942639282?text=Hola%20Amate%20Viajando,%20me%20gustaría%20saber%20más%20sobre%20el%20coaching%20emocional.'>
          <Button
            size='md'
            w={{ base: '100%', md: '240px' }}
            px={8}
            mb='12'
            variant='solid'
            _hover={{ bgColor: 'gray.200', color: '#000000d0' }}
          >
            {t('PersonalAdviceButton')}
          </Button>
        </MyLink>
      </Flex>

      <Box
        className='HomeImageContainer'
        w='100%'
        h={{ base: '60px', sm: '100px', md: '120px', lg: '160px' }}
        overflow='hidden'
        position='relative'
      >
        <Box
          position='absolute'
          bottom='0'
          left='0'
          w='100%'
          h='25lvh'
          bgImage="url('/beach.jpg')"
          bgSize='cover'
          bgPosition='center'
          transform='translateY(0px)'
          opacity={0.75}
          transition='transform 0.05s ease-out'
          className='parallax-image'
        />
      </Box>

      <Text
        className='yeseva-one-regular'
        color='gray.700'
        fontSize={{ base: 'sm', sm: 'md' }}
        maxW={{ base: '300px', sm: '450px', md: '660px', lg: '800x' }}
        lineHeight='relaxed'
        textAlign='start'
        my='6'
        mx='4'
        letterSpacing='1.1px'
      >
        {t('DestinationsButton')}
      </Text>
      <Destinations />
    </>
  );
};

export default Home;
