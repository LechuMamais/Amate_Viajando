import { useTranslation } from 'react-i18next';
import MyLink from '../../components/MyLink/MyLink';
import { Box, Button, Heading, Text, Flex } from '@chakra-ui/react';

const HeroText = () => {
  const { t } = useTranslation('Home');

  return (
    <Box
      flex={{ base: '0', md: '1' }}
      className='hero-text-wrapper'
      zIndex='2'
      overflow='hidden'
      w={{ base: '100vw', md: 'min(960px, 90svw)' }}
    >
      <Box className={{ base: '', md: 'hero-text-parallax-effect' }} mx='auto'>
        <Flex
          direction='column'
          textAlign='center'
          spacing={4}
          w='100%'
          bgColor='rgba(255, 255, 255, 0.4)'
          px={{ base: 4, sm: 8, md: 16 }}
          py={4}
          borderRadius={{ base: '0', md: '16' }}
        >
          <Heading
            as='h1'
            size='2xl'
            fontWeight='bold'
            lineHeight='tight'
            color='gray.800'
            mb={{ base: 4, md: 6 }}
            fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
          >
            {t('HeroTitle')}
          </Heading>
          <Text
            className='yeseva-one-regular'
            color='gray.700'
            fontSize={{ base: '0.8rem', sm: 'md' }}
            maxW={{ base: '300px', sm: '450px', md: '660px', lg: '800x' }}
            lineHeight='relaxed'
            mx='auto'
            mb={{ base: 4, md: 6 }}
            letterSpacing='1.1px'
          >
            {t('HeroText')}
          </Text>
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 2, md: 8 }} justifyContent='center'>
            <MyLink to='/destinations'>
              <Button size='lg' colorScheme='blackAlpha' px={16} w={{ base: '100%', md: '240px' }} isDisabled={false}>
                {t('DestinationsButton')}
              </Button>
            </MyLink>
            <MyLink to='/coaching'>
              <Button
                size='lg'
                w={{ base: '100%', md: '240px' }}
                px={16}
                variant='solid'
                _hover={{ bgColor: 'white', color: '#000000d0' }}
              >
                {t('CoachingButton')}
              </Button>
            </MyLink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default HeroText;
