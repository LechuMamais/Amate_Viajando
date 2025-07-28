import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Lumiflex } from 'uvcanvas';
import HeroText from '../HeroText/HeroText';

import MyLink from '../MyLink/MyLink';

const HeroSection = () => {
  const { t } = useTranslation('Home');
  const heroImageUrl = useBreakpointValue({
    base: '/assets/Logo_Acuarelas_redondo_248.png',
    sm: '/assets/Logo_Acuarelas_redondo_368.png',
    lg: '/assets/Logo_Acuarelas_redondo_460.png',
    xl: '/assets/Logo_Acuarelas_redondo_520.png',
  });

  return (
    <Flex
      id='Home'
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent='center'
      h={{ base: '100%', md: '480px' }}
      minH={'400px'}
      w='100%'
      maxW='1024px'
      mx='auto'
      position='relative'
      mt={{ base: '-132px', md: '-72px' }}
      mb={{ base: '0', md: '80px' }}
      py={{ base: '0', md: '60px' }}
    >
      <Box
        className='hero-background'
        overflow='hidden'
        w={{ base: '100%', md: 'calc(60% + 60px)' }}
        minW={{ base: '600px', md: '0px'}}
        h={{ base: '48%', md: '600px' }}
        minH={'400px'}
        position='absolute'
        top={{ base: '0px', md: '-120px' }}
        left={{
          base: 'min(0px, calc((600px - 100lvw) / 2 * -1))',
          md: '-60px',
        }}
        opacity='0.8'
        borderRadius={{
          base: '0% 0% 40% 60% / 0% 0% 41% 47%',
          md: '66% 39% 74% 100% / 76% 96% 77% 100%',
        }}
      >
        <Lumiflex />
      </Box>

      <Flex
        className='hero'
        direction='column'
        justifyContent='center'
        w={{ base: '100%', md: '60lvw' }}
        py={{ base: '80px', md: '40px' }}
        pr={{ base: '0', md: '8' }}
        gap='1'
        mx='auto'
        mt={{ base: '40px', md: '0' }}
        alignItems='center'
        pb={{ base: 0, md: 4 }}
      >
        <Flex className='hero-image-wrapper' direction='column' alignItems='center' w='50%'>
          <Flex className='hero-image-container' direction='column' alignItems='center' w={{ base: '150px', md: '180px', lg: '220px' }} p={2}>
            <Image
              bgColor='#FFFFFF'
              src={heroImageUrl}
              alt='Amate_Viajando_Logo'
              objectFit='cover'
              zIndex='1'
              opacity='0.8'
              mt='0'
              border='2px solid #FFFFFF'
              borderRadius='100%'
            />
          </Flex>
        </Flex>
        <HeroText />
      </Flex>

      <Flex className='hero-cta' pt={{ base: '10lvh', md: '31px' }} my={{ base: '4', md: '0' }} direction='column' justifyContent='center' alignItems='center' w={{ md: '40lvw' }}>
        <Text
          className='yeseva-one-regular'
          color='gray.700'
          fontSize={{ base: 'sm', sm: 'md' }}
          maxW={{ base: '300px', md: '200px' }}
          textAlign='center'
          mx='auto'
          mb={{ base: 4, md: 6 }}
          letterSpacing='1.1px'
        >
          {t('HeroSubtitle')}
        </Text>

        <MyLink to='https://wa.me/5492942639282?text=Hola%20Amate%20Viajando,%20me%20gustaría%20saber%20más%20sobre%20el%20coaching%20emocional.'>
          <Button size='md' w='100%' px={8} mb={{ base: '12', md: '0' }} variant='solid' _hover={{ bgColor: 'gray.200', color: '#000000d0' }}>
            {t('PersonalAdviceButton')}
          </Button>
        </MyLink>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
