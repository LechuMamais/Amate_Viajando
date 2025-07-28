import './Home.css';
import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection/HeroSection';
import ParallaxDivider from '../../components/ParallaxDivider/ParallaxDivider';
import Destinations from '../Destinations/Destinations';
import CompanyMantra from '../../components/CompanyMantra/CompanyMantra';


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
      <Destinations />
    </>
  );
};

export default Home;
