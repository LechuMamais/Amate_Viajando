import './Home.css';
import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection/HeroSection';
import ParallaxDivider from '../../components/ParallaxDivider/ParallaxDivider';
import Destinations from '../Destinations/Destinations';
import CompanyMantra from '../../components/CompanyMantra/CompanyMantra';
import LumiFlexContainer from '../../components/LumiFlexContainer/LumiFlexContainer';


const Home = () => {
  const { t } = useTranslation('Home');

  return (
    <>
      <HeroSection />
      <CompanyMantra />
      <ParallaxDivider />
      <Text
        className='yeseva-one-regular'
        color='gray.700'
        fontSize={{ base: 'sm', sm: 'lg' }}
        maxW={{ base: '300px', sm: '450px', md: '660px', lg: '880px' }}
        lineHeight='relaxed'
        textAlign='start'
        mt={{ base: '12', md: '24'}}
        mb={{ base: '6', md: '12'}}
        mx={{ base: '4' , md: 'auto' }}
        letterSpacing='1.1px'
      >
        {t('DestinationsButton')}
      </Text>

      <LumiFlexContainer
        className='hero-background lumi-morph'
        opacity='0.35'
        w={{ base: '320px', md: '380px', lg: '450px'  }} 
        h={{ base: '300px', md: '400px', lg: '500px'}}
        top={{ base: '780px', md: '580px' }}
        right='-80px'
      />

      <LumiFlexContainer
        className='hero-background lumi-morph-secondary'
        opacity='0.15'
        w={{ base: '220px', md: '330px' }} 
        h={{ base: '200px', md: '280px'}}
        rotation='180deg'
        top={{ base: '1180px', md: '820px', lg: '880px' }}
        left={{ base: '-30px', lg: '50px' }}
        borderRadius={'100% 71% 100% 71% / 73% 73% 100% 100% '}
        zIndex='0'
      />
      <Destinations />
    </>
  );
};

export default Home;
